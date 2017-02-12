/**
 * tmsky.ui.dialog
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    // 弹窗消息
    var dialog = (function () {
        var _count = 0,
            _defaults = {
                title : '',
                content : '',
                visible : true,
                width : null,
                height : null,
                button : null,
                time : 0,
                lock : true,
                maskName : '',
                skin : '',
                okText : '确定',
                ok : null,
                cancel : null,
                cancelText : '取消',
                parent : null,
                openAnimate : null,
                closeAnimate : null
            },
            _LOADING_MSG = '正在用生命加载...',
            _LOADING_MSG_TITLE = '加载中',
        // 可用 dialog._$(name) 获取 data-dom 的jQuery对象
        // 已知dom: wrap,dialog,title,content,foot,buttons,head
            _template = __inline('../../../../../templates/ui/dialog.html');

        var Dialog = function (config) {
            // 配置分析
            config = config || {};// 如果没有配置参数

            if (typeof config === 'string') {
                config = {
                    content : config
                }
            }
            // 合并默认配置
            config = tmsky.extend({}, _defaults, config)

            if (!tmsky.isArray(config.button)) {
                config.button = [];
            }

            // 确定按钮
            if (config.ok) {// 如果有确认按钮则追加到button数组里
                config.button.push({
                    id : 'ok',
                    text : config.okText,
                    cb : config.ok,
                    highlight : true// 高亮
                })
            }

            // 取消按钮
            if (config.cancel) {// 如果有取消按钮则追加到button数组里
                config.button.push({
                    id : 'cancel',
                    text : config.cancelText,
                    cb : config.cancel
                });
            }

            config.id = config.id || 'dialog-' + _count++;

            if (Dialog.list[config.id]) {
                return Dialog.list[config.id]
            }

            return Dialog.list[config.id] = new Dialog.fn._create(config)
        }

        // jQuery式无需new返回新实例
        Dialog.fn = Dialog.prototype = {
            visible : function () {
                var $dialog = this._$('wrap')

                $dialog.addClass('tomasky-ui-dialog-visible')
                this.config.openAnimate ? this.config.openAnimate($dialog) : this._$('wrap').show()
                return this
            },
            hide : function () {
                this._$('wrap').removeClass('tomasky-ui-dialog-visible').fadeOut()

                this.time().unlock()

                return this
            },
            close : function () {
                var self = this,
                    $dialog = this._$('wrap');
                if (!$dialog) {
                    return self;
                }

                self.time().unlock()

                this.config.closeAnimate ? this.config.closeAnimate($dialog) : this._$('wrap').fadeOut('fast', function () {
                    $(this).remove()
                })

                delete Dialog.list[self.config.id]
                // 删除，减少资源
                for (var i in self) {
                    delete self[i]
                }

                return self
            },
            title : function (text) {
                if (text) {
                    this._$('title').html(text).parent().show()
                } else {
                    this._$('title').parent().empty().hide()
                }
                return this
            },
            content : function (content) {
                this._$('body').html(content)
                return this
            },
            width : function (width) {
                if (tmsky.type(width) === 'number') {
                    this._$('body').width(width)
                }
                return this
            },
            height : function (height) {
                if (tmsky.type(height) === 'number') {
                    this._$('body').height(height)
                }
                return this
            },
            button : function (arr) {
                var buttons = this._$('buttons')[0],
                    callback = this._callback,
                    arr = arr || []

                var i, el, len, text, button, className, id
                buttons.innerHTML = ''
                for (i = 0, len = arr.length; i < len; i++) {
                    el = arr[i]
                    id = el.id
                    button = document.createElement('button')
                    className = 'ui-dialog-btn' // 按钮class
                    // 如果高亮
                    if (el.highlight) {
                        className += ' ui-dialog-btn-on'
                    }
                    // 如果配置的按钮有class则追加下
                    if (el.className) {
                        className += ' ' + el.className
                    }
                    button.innerHTML = el.text
                    button.className = className
                    button.setAttribute('callback', id); // 为了委托事件用
                    callback[id] = {}
                    // 如果有回调
                    if (el.cb) {
                        callback[id].cb = el.cb
                    }

                    buttons.appendChild(button)
                }

                buttons.style.display = arr.length ? '' : 'none';

                return this
            },
            /**
             * 定时关闭
             *
             * @param {Number} 单位秒, 无参数则停止计时器
             */
            time : function (time) {
                var self = this,
                    timer = self._timer;

                timer && clearTimeout(timer);

                if (time) {
                    self._timer = setTimeout(function () {
                        self._click('close')
                    }, time)
                }

                return self
            },
            clearTimer : function () {
                var self = this,
                    timer = self._timer;
                timer && clearTimeout(timer);
                return self;
            },
            lock : function (maskName) {
                var div = document.createElement("div"),
                    className = 'tomasky-ui-dialog-mask'

                if (maskName) {
                    className += ' ' + maskName
                }

                div.className = className

                document.body.appendChild(div)

                this._dom.mask = $(div).fadeIn()

                return this
            },
            unlock : function () {
                this._$('mask').fadeOut().remove()
            },
            _create : function (config) {
                var self = this

                self._callback = {} // 按钮事件空间
                self._dom = {} // jQuery对象
                self._createHTML(config)
                self.config = config

                self._$('close').on('click', function () {
                    self._click("cancel")
                })

                config.skin && self._$('wrap').addClass(config.skin);// 设置皮肤

                self.title(config.title) // 设置标题
                    .content(config.content) // 设置内容
                    .width(config.width) // 设置宽高
                    .height(config.height) // 设置宽高
                    .button(config.button) // 设置按钮
                    .time(config.time)// 设置自动关闭
                    ._addEvent()// 绑定事件

                config.lock && self.lock(config.maskName);// 如果有遮罩

                self[config.visible ? 'visible' : 'hide']();

                return self;
            },
            // 创建元素
            _createHTML : function (config) {
                var $wrap = $(_template),
                    $parent = config.parent ? $(config.parent) : $(document.body)

                $parent.append($wrap)
                $wrap.find('.ui-dialog-inner').addClass(config.id)
                this._dom.wrap = $wrap

                return this
            },
            // 获取jQuery对象
            _$ : function (i) {
                var dom = this._dom;
                return dom && (dom[i] || (dom[i] = dom.wrap.find('[data-dom=' + i + ']')));
            },
            // 事件代理
            _addEvent : function () {
                var self = this
                self._$("buttons").on("click", "button", function () {
                    var callbackID,
                        $this = $(this);

                    callbackID = $this.attr('callback');
                    callbackID && self._click(callbackID);
                })

                return this
            },
            // 按钮回调函数触发
            _click : function (id) {
                var self = this,
                    fn = self._callback[id] && self._callback[id].cb;
                return (typeof fn !== 'function' || fn.call(self) !== false) ? self.close() : self;
            }
        }

        Dialog.fn._create.prototype = Dialog.fn;

        Dialog.version = '0.0.1'

        Dialog.list = {}

        Dialog.get = function (id) {
            if (id) {
                return Dialog.list[id];
            }
        }

        // ================================================ API ==============================
        Dialog.isVisible = function (dialogId, dialog) {
            var dialog = dialog || Dialog.get(dialogId);
            return dialog && dialog._dom.wrap.hasClass('ui-dialog-visible') && dialog._dom.wrap.attr('style') && dialog._dom.wrap.attr('style').substring('display:'.length).indexOf('none') < 0
        }

        Dialog.alert = function (options, icon, title, iconSize, time) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    icon : icon,
                    title : title || '消息提示',
                    iconSize : iconSize,
                    time : time
                }
            }
            options.id = 'dialog-alert'
            var hasIcon = options.icon ? true : false, isPredefineIcon, iconClass, className, ct;
            if (hasIcon) {
                options.icon = options.icon.toLowerCase(), ct = options.content;
                isPredefineIcon = options.icon == "success" || options.icon == "error" || options.icon == "warning";
                iconClass = 'msc-dialog-alert-' + (isPredefineIcon ? options.icon : "cus") + '-icon';
                className = 'msc-dialog-alert-icon ' + iconClass;
                options.content = '<div class="' + className + '"></div>';
                options.content += '<div class="msc-dialog-alert-content">' + ct + '</div>';
            }

            if (options.ok) {
                if (typeof options.ok === 'function') {
                    delete options.time
                }
            } else {
                options.ok = true;
            }

            var _alert = Dialog(options)

            var $alert;
            var getAlertDialog = function () {
                if (!$alert || !$alert.length) {
                    $alert = $("." + iconClass);
                }
                return $alert;
            };
            if (hasIcon && !isPredefineIcon) {
                getAlertDialog().css("background-image", "url(" + options.icon + ")");
                if (options.iconSize) {
                    getAlertDialog().css({
                        "width" : options.iconSize,
                        "height" : options.iconSize,
                        "background-size" : options.iconSize
                    });
                }
            }
            return _alert;
        }

        Dialog.ask = function (options, ok, cancel, icon, title, iconSize) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    ok : ok ? ok : true,
                    cancel : cancel ? cancel : true,
                    icon : icon,
                    title : title,
                    iconSize : iconSize
                }
            }
            options.id = 'dialog-ask'
            if (!options.icon) {
                return tmsky.ui.dialog.confirm(options.content, options.ok, options.cancel, options.title);
            }
            options.icon = options.icon.toLowerCase();
            var isPredefineIcon = options.icon == "delete" || options.icon == "close" || options.icon == "warning", iconClass, className, ct;
            iconClass = "ask-icon-", className = "msc-dialog-ask-icon";
            iconClass += isPredefineIcon ? options.icon : "cus", ct = options.content;
            className += " " + iconClass;
            options.content = "<div class='" + className + "'></div>";
            options.content += "<div class='msc-dialog-ask-content'>" + ct + "</div>";

            var _ask = Dialog(options),
                $ask = $("." + iconClass);
            $ask.parent().parent().css({
                "min-width" : "20%",
                "border-radius" : "6px"
            }).find(".ui-dialog-btn-on").removeClass("ui-dialog-btn-on").addClass("ui-dialog-btn-on-ask");
            if (!isPredefineIcon) {
                $ask.css("background-image", "url(" + options.icon + ")");
                if (options.iconSize) {
                    $ask.css({
                        "height" : options.iconSize
                    });
                }
            }
            return _ask;
        }

        Dialog.confirm = function (txt, okfn, cancelfn, title) {
            var options = {
                title : title ? title : '提示消息',
                content : txt ? txt : '',
                ok : okfn ? okfn : true,
                cancel : cancelfn ? cancelfn : true
            };
            options.id = 'dialog-confirm'
            return Dialog(options);
        }

        Dialog.tips = function (options, icon, time, id) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    time : time
                }
            }
            options.id = options.id || id || 'dialog-tips'
            var iconClass = icon ? 'tomasky-ui-msc-dialog-tips-icon tomasky-ui-msc-dialog-tips-' + icon + '-icon' : '',
                contentClass = icon ? 'tomasky-ui-msc-dialog-tips-' + icon + '-content' : '', content
            options = options || {}
            options.skin = 'tomasky-ui-msc-dialog-tips'
            content = '<div class="' + iconClass + '"></div>'
            content += '<div class="tomasky-ui-msc-dialog-tips-content ' + contentClass + '">' + options.content + '</div>'
            options.content = content
            options.time = options.time || 2 * 1e3

            return Dialog(options)
        }

        Dialog.successTips = function (options, time) {
            return Dialog.tips(options, 'success', time, 'dialog-success-tips')
        }

        Dialog.warnTips = function (options, time) {
            return Dialog.tips(options, 'warning', time, 'dialog-warning-tips')
        }

        Dialog.errorTips = function (options, time) {
            return Dialog.tips(options, 'error', time, 'dialog-error-tips')
        }

        Dialog.notify = function (options, time) {
            var $noticeWrap = Dialog.notify.wrap || $('<div>', {
                    'class' : 'tomasky-ui-dialog-notify-fixed'
                }).appendTo($(document.body))

            Dialog.notify.wrap = $noticeWrap

            var defOpts = {
                id : 'dialog-notify',
                title : '番茄来了提醒您 ',
                skin : 'tomasky-ui-dialog-notice',
                content : '',
                lock : false,
                ok : true,
                parent : $noticeWrap,
                openAnimate : function ($dialog) {
                    var h = $dialog.height()

                    $dialog.height(0).animate({
                        height : h
                    }, 'slow');
                },
                closeAnimate : function ($dialog) {
                    $dialog && $dialog.animate({
                        height : 0
                    }, 'slow', function () {
                        $(this).remove()
                    })
                }
            }

            if (options && options.button && options.button.length > 0) {
                defOpts.ok = false
            }

            if (tmsky.isObject(options)) {
                $.extend(defOpts, options);
            } else {
                defOpts.content = options
                if (time) {
                    defOpts.time = time
                }
            }

            var dialog = Dialog(defOpts);
            if (undefined === defOpts.isSuccess || null === defOpts.isSuccess) {
                dialog._dom.wrap.css("visibility", "visible").parent().css("z-index", "100");
                return dialog;
            }

            var hasExist = tmsky.ui.dialog.simpleNotify(dialog._dom.wrap.find(".ui-dialog-title").text().replace(/-/g, ""), dialog.config.id, defOpts.isSuccess);
            if (!hasExist) {
                dialog._dom.wrap.css("visibility", "hidden").parent().css("z-index", "-100");
            }

            return dialog;
        }

        Dialog.simpleNotify = function (msg, detailNotifyId, isSuccess) {

            var $notify = $('.tomasky-ui-dialog-notify-fixed .ui-dialog-notice'),
                hasExist = true;
            if (($notify.length && $notify.css("visibility") == "visible") || Dialog.simpleNotify.wrap) {
                return hasExist;
            }

            hasExist = false;
            var $simpleNoticeWrap = Dialog.simpleNotify.wrap || $('<div>', {
                    'class' : 'tomasky-ui-dialog-notify-fixed-simple'
                }).appendTo($(document.body)), content;

            Dialog.simpleNotify.wrap = $simpleNoticeWrap;
            Dialog.simpleNotify.counter = Dialog.simpleNotify.counter ? Dialog.simpleNotify.counter++ : 1;

            content = "<div class='tomasky-ui-dialog-notify-simple " + (isSuccess ? "tomasky-ui-dialog-notify-simple-success" : "tomasky-ui-dialog-notify-simple-fail") + "'>";
            content += "<em></em>";
            content += "<div class='content'>" + msg;
            if (!isSuccess) {
                content += "<a id='detail'>详情 > </a>";
            }
            content += "</div></div>";

            $simpleNoticeWrap.append(content);

            $simpleNoticeWrap.data("dialog-id", detailNotifyId || Dialog.simpleNotify.counter);
            $simpleNoticeWrap.mouseover(function (e) {
                __tomato_simple_notify_timer__ && clearTimeout(__tomato_simple_notify_timer__);
            }).mouseout(function (e) {
                tmsky.ui.dialog.simpleNotify.time();
            }).find(".tomasky-ui-dialog-notify-simple #detail").click(function () {
                var _this = $(".tomasky-ui-dialog-notify-fixed-simple").hide();
                var dialog = tmsky.ui.dialog.get(_this.data("dialog-id"));
                dialog && dialog._dom.wrap.css("visibility", "visible").parent().css("z-index", 100);
                tmsky.ui.dialog.simpleNotify.wrap = null;
                _this.remove();
            });

            $simpleNoticeWrap.find("em").click(function () {
                var _this = $(this).parent().parent(), dialog;
                dialog = tmsky.ui.dialog.get(_this.data("dialog-id"));
                dialog && dialog.close();
                _this.remove();
                tmsky.ui.dialog.simpleNotify.wrap = null;
            });

            tmsky.ui.dialog.simpleNotify.time();

            return hasExist;
        }

        Dialog.simpleNotify.time = function () {
            window.__tomato_simple_notify_timer__ = setTimeout(function () {
                var $simpleNotify = $(".tomasky-ui-dialog-notify-fixed-simple");
                var detailNotify = tmsky.ui.dialog.get($simpleNotify.data("dialog-id"));
                detailNotify && detailNotify.close();
                $simpleNotify.remove();
                tmsky.ui.dialog.simpleNotify.wrap = null;
            }, 4000);
        }

        Dialog.loading = function (msg) {
            var api = Dialog.get("dialog-loading"),
                maskName = 'tomasky-ui-dialog-mask-white', content

            msg = msg == null ? _LOADING_MSG : msg
            content = '<div class="ui-dialog-loading" title="' + _LOADING_MSG_TITLE + '">' + msg + '</div>'

            //if (api)
            //    return api.lock(maskName).content(content).visible()

            if (api) {
                if (Dialog.isVisible('dialog-loading', api)) {
                    var $content = api._dom.wrap.find('.ui-dialog-loading')
                    if ($content && $content.text() !== msg) {
                        $content.text(msg)
                    }
                    return api
                }
                return api.content(content).visible()
            }

            return Dialog({
                id : 'dialog-loading',
                skin : 'tomasky-ui-msc-dialog-loading',
                content : content,
                maskName : maskName
            })
        }

        Dialog.loading.close = function () {
            var api = Dialog.get("dialog-loading")
            if (api) {
                api.hide()
                api = null
            }
            $('.tomasky-ui-dialog-mask-white').remove()
        }

        Dialog.mask = function () {
            var $mask = Dialog.mask.$mask || $('<div>', {
                    id : 'dialog-mask',
                    'class' : 'tomasky-ui-dialog-mask'
                }).appendTo($(document.body))

            Dialog.mask.$mask = $mask.fadeIn()
        }

        Dialog.mask.close = function () {
            Dialog.mask.$mask && Dialog.mask.$mask.fadeOut()
        }

        return Dialog;
    })();

    tmsky.extendUI({dialog : dialog})

})(tmsky);