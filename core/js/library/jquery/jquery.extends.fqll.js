/**
 * jquery extends. hai.
 */
(function ($, undefined) {
    if (!jQuery.browser) {
        var ua = navigator.userAgent.toLowerCase();
        // 添加jQuery浏览器扩展对象
        jQuery.browser = {
            "msie" : false,
            "chrome" : false,
            "firefox" : false,
            "opera" : false,
            "safari" : false,
            "qq" : false
        };
        // 判断浏览器类型
        judgeBrowser();
        // 获取浏览器标识
        getBrowserFlag();
        // 获取浏览器版本
        getBrowserVersion();
        // 浏览器缩放提示
        attachZoomTips();
    }

    function attachZoomTips() {
        var zoomTips = {
            "detectZoom" : detectZoom,
            "bindZoomTips" : bindZoomTips
        };
        $.browser["zoomTips"] = zoomTips
        window.zoomTips = zoomTips;
    }

    function detectZoom() {
        var ratio = 0,
            screen = window.screen;
        if ($.browser.firefox) {
            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
        } else if ($.browser.msie) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                ratio = screen.deviceXDPI / screen.logicalXDPI;
            }
        } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth;
        }
        if (ratio) {
            ratio = Math.round(ratio * 100);
        }
        // alert(ratio);
        // 在非IE和360急速浏览器中，其它浏览器下浏览器在resize时诡异的outerWidth和innerWidth不相等
        if (ratio === 99 || ratio === 101 || ratio === 102 || ratio === 103) {
            ratio = 100;
        }
        return ratio;
    }

    function bindZoomTips() {
        autoDisplayZoomTips();
        bindCtrl0KeyPress();
        $(window).bind("resize", autoDisplayZoomTips);
    }

    function bindCtrl0KeyPress() {
        $(document).bind("keyup", function (event) {
            if (event.keyCode == 48) {
                if (event.ctrlKey || event.ctrlKey === 1) {
                    $("#zoomTips").hide();
                }
            }
        });
    }

    function autoDisplayZoomTips() {
        var zoomRatio = detectZoom();
        if (zoomRatio != 100) {
            var $zoomTips = $("#zoomTips");
            $zoomTips.find("#zoomStatus").text(zoomRatio > 100 ? "放大" : "缩小");
            $zoomTips.show();
        } else {
            $("#zoomTips").hide();
        }
    }

    // 判断浏览器类型
    function judgeBrowser() {
        var ua = navigator.userAgent.toLowerCase();
        if (!!window.ActiveXObject || ("ActiveXObject" in window) || tmsky.string.exist(ua, "msie")) {
            $.browser.msie = true;
        } else if (tmsky.string.exist(ua, "chrome", false) && tmsky.string.notExist(ua, "version,opera,opr")) {
            $.browser.chrome = true;
        } else if (tmsky.string.exist(ua, "firefox", false)) {
            $.browser.firefox = true;
        } else if (tmsky.string.exist(ua, "opera,opr")) {
            $.browser.opera = true;
        } else if (tmsky.string.exist(ua, "version,safari") && tmsky.string.notExist(ua, "chrome", false)) {
            $.browser.safari = true;
        } else if (tmsky.string.exist(ua, "QQBrowser")) {
            $.browser.qq = true;
        }
    }

    // 获取浏览器标识
    function getBrowserFlag(browser) {
        var bs;
        if ($.browser.msie) {
            bs = "msie";
        } else if ($.browser.chrome) {
            bs = "chrome";
        } else if ($.browser.firefox) {
            bs = "firefox";
        } else if ($.browser.opera) {
            bs = "opera";
        } else if ($.browser.safari) {
            bs = "safari";
        } else {
            bs = "qq";
        }
        $.browser["browser"] = bs;
    }

    // 获取浏览器版本
    function getBrowserVersion() {
        var v;
        if ($.browser.msie) {
            v = getIEVersion();
            // 添加判断浏览器具体版本的方法
            addJudgeBrowserVersionMethoed(v);
        } else {
            v = getNoNIEVersion();
        }
        $.browser["version"] = v;
    }

    // 添加判断浏览器具体版本的方法
    function addJudgeBrowserVersionMethoed(v) {
        var vn = parseInt(v, 10);
        // 是否为指定版本
        var isVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return version == vn;
        };
        // 是否大于指定版本
        var isGTVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return vn > version;
        };
        // 是小于指定版本
        var isLTVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return vn < version;
        };
        // 是否为指定版本
        $.browser["isVersion"] = isVersion;
        // 是否大于指定版本
        $.browser["isGTVersion"] = isGTVersion;
        // 是小于指定版本
        $.browser["isLTVersion"] = isLTVersion;
    }

    // 获取IE浏览器版本
    function getIEVersion() {
        var ua = navigator.userAgent.toLowerCase();
        var i = ua.indexOf("msie");
        var vstr = ua.substring(i, ua.indexOf(";", i));
        return vstr.split(" ")[1];
    }

    // 获取非IE浏览器版本
    function getNoNIEVersion() {
        var v,
            ua = navigator.userAgent.toLowerCase();
        var arr = ua.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (tmsky.string.startsWith(arr[i], $.browser.browser)) {
                v = arr[i].split("/")[1];
                break;
            } else {
                if ($.browser.opera) {
                    if (tmsky.string.startsWith(arr[i], "opr")) {
                        v = arr[i].split("/")[1];
                        break;
                    }
                }
            }
        }
        return v;
    }

    // 方法扩展
    $.fn.extend({
        outerHTML : function (s) {
            return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
        },
        outerHTMLs : function (s) {
            if (this.length > 1) {
                var htmls = "";
                for (var i = 0; i < this.length; i++) {
                    htmls += $(this[i]).outerHTML(s);
                }
                return htmls;
            } else {
                return this.outerHTML(s);
            }
        },
        center : function (parent, icss, options) {
            var Z_INDEX_CONST = 1000,
                POSITION_CONST = "absolute",
                z_index = Z_INDEX_CONST,
                pos = POSITION_CONST;
            if (!tmsky.isNull(options)) {
                z_index = !tmsky.isNull(options.z_index) ? options.z_index : z_index;
                pos = !tmsky.isNull(options.position) ? options.position : pos;
            }
            if (!tmsky.isNull(icss)) {
                if (undefined == icss.z_index) {
                    icss["z_index"] = z_index;
                }
                if (undefined == icss.position) {
                    icss["position"] = pos;
                }
                this.css(icss);
                return this;
            }
            if (parent) {
                parent = this.parent();
            } else {
                parent = $(window);
            }
            this.css({
                "position" : pos,
                "top" : (((parent.height() - this.outerHeight()) / 2) + parent.scrollTop() + "px"),
                "left" : (((parent.width() - this.outerWidth()) / 2) + parent.scrollLeft() + "px"),
                "z-index" : z_index
            });
            return this;
        },
        isShow : function () {
            return !this.isHide();
        },
        isHide : function () {
            return this.css("display") == "none";
        },
        checked : function (checkType, checked, disabled) {
            if (null == this || undefined == this || this.length == 0) {
                return;
            }
            checked = undefined == checked || null == checked ? true : checked;
            checkType = undefined == checkType || null == checkType ? true : checkType;
            if (checkType) {
                if (tmsky.string.notExist(this.attr("type"), "checkbox,radio")) {
                    return;
                }
            }
            if (checked) {
                this.attr("checked", "checked")[0].checked = true;
            } else {
                this.removeAttr("checked")[0].checked = false;
            }
            if (disabled) {
                this.disabled(disabled);
            }
            return this;
        },
        unchecked : function (checkType) {
            return this.checked(checkType, false);
        },
        readonly : function (readonly) {
            var ro = _isNull(readonly) ? true : readonly;
            if (readonly) {
                this.attr("readonly", "readonly");
            } else {
                this.removeAttr("readonly");
            }
            return this;
        },
        /**
         * 绑定checkbox的单击事件
         *
         * @param selectorType 选择器类型：1、checkbox所在区域的父节点，2、已选择的要处理的checkbox数组【js数组或jq数组都可】，如果该对象本身不是数组则此必须指定其类型
         */
        bindChecked : function (domType) {
            if (_isNull(domType)) {
                domType = 1;
            }
            var $eachs = (1 == domType) ? this.find("input[type='checkbox']") : this;
            $.each($eachs, function (i, dom) {
                $(dom).on("click", function () {
                    if (this.checked) {
                        $(this).checked(false, true);
                    } else {
                        $(this).checked(false, false);
                    }
                });
            });
        },
        /**
         * 全选事件绑定处理
         *
         * @param parentFlag 全选按钮区的父节点
         * @param options 其它选项，目前只提供了默认选项的扩展、有需要可继续扩展 options{ defSelect :"默认选中的id，多个以逗号分隔", otAuth :"操作类型是否为权限，默认true" }
         */
        checkAll : function (parentFlag, options) {
            var $this = $(this),
                $parent = (typeof parentFlag == "string") ? $(parentFlag) : parentFlag,
                thisId = $this.attr("id");
            var $ipts = $parent.find("input[type='checkbox'][id!='" + thisId + "']"),
            // checkboxArr
                ds = null,
            // default select arr
                ot = null;
            // 操作类型是否为权限操作
            if (!tmsky.isNull(options) && !tmsky.isNull(options.defSelect)) {
                ds = options.defSelect.split(",");
                ot = tmsky.isNull(options.otAuth) ? true : options.otAuth;
            }
            $this.unbind("click").on("click", function (e) {
                var isSelectAll = tmsky.isEmpty($this.attr("checked"));
                if (isSelectAll) {
                    $this.attr("checked", "checked")[0].checked = true;
                } else {
                    $this.removeAttr("checked")[0].checked = false;
                }
                // 改变全选按钮状态
                $.each($ipts, function (i, item) {
                    var $item = $(item);
                    if (isSelectAll) {
                        $item.checked(false, true);
                    } else {
                        $item.unchecked(false, false);
                    }
                });
            });
            // 绑定全选所指定区的checkbox单击事件
            $.each($ipts, function (i, item) {
                $(item).on("click", function (e) {
                    var _im = $(this);
                    if (this.checked) {
                        _im.attr("checked", "checked");
                        if (ds != null) {
                            for (var i = 0; i < ds.length; i++) {
                                var t = ot ? _im.parent().parent().find("#" + ds[i]) : $parent.find("#" + ds[i]);
                                if (this.id != ds[i] && t[0] && !t[0].checked) {
                                    t.checked(false);
                                }
                            }
                        }
                    } else {
                        _im.removeAttr("checked");
                    }
                    if ($parent.find("input[checked][id!='" + thisId + "']").length == $ipts.length) {
                        $this.checked(false, true);
                    } else {
                        $this.unchecked(false, false);
                    }
                });
            });
            return this;
        },
        splitText : function (split) {
            var strs = "",
                split = _isNull(split) ? "," : split;
            this.each(function (i, item) {
                strs += $(item).text() + split;
            });
            return "" != strs ? strs.substring(0, strs.length - 1) : "";
        },
        /**
         * 批量设置或获取属性值
         *
         * @param names 属性名，多个以“,”分隔
         * @param values 属性值，只能为数组，当length为1但names有多个时则将指定的所有属性名设置为同一值
         * @param resultType 获取值操作时[values必须传null占位，(只处理null！)]、返回类型：string，array[默认]
         * @param join 获取值操作时且返回类型为string时的连接符，默认“,”
         * @author hai
         */
        attrs : function (names, values, resultType, join) {
            var nameArr = typeof names == "string" ? names.split(",") : names;
            var $this = this, result;
            if (!tmsky.isNull(values)) {
                if (values.length == 1) {
                    var val = values[0];
                    $.each(nameArr, function (i, attr) {
                        $this.attr(attr, val);
                    });
                } else {
                    $.each(nameArr, function (i, attr) {
                        $this.attr(attr, values[i]);
                    });
                }
                return this;
            } else {
                result = [];
                $.each(nameArr, function (i, attr) {
                    result.push($this.attr(attr));
                });
                if (_isNull(resultType) || "array" == resultType) {
                    return result;
                }
                return result.join(join || ",");
            }
        },
        /**
         * 删除dom的多个属性
         *
         * @param attrs 要删除的属性，以逗号分隔[要删除多个属性时采用该方法，若attrs属性只有一个请用原生removeAttr方法]
         */
        removeAttrs : function (attrs) {
            var eachs = attrs.split(",");
            for (var i = 0; i < eachs.length; i++) {
                this.removeAttr(eachs[i]);
            }
            return this;
        },
        clearAttrs : function (attrs) {
            var $this = this,
                attrArr = attrs.split(',');
            $.each(attrArr, function (i, attr) {
                $this.attr(attr, '');
                if ('value' == attr) {
                    $this.val('');
                }
            });
            return this;
        },
        disabled : function (disabled) {
            var dsb = _isNull(disabled) ? true : disabled;
            if (dsb) {
                this.attr("disabled", "disabled");
            } else {
                this.removeAttr("disabled");
            }
            return this;
        },
        left : function (left) {
            if (left) {
                var l = this.css("left");
                if (l.endsWith("px")) {
                    return Number(l.substring(0, l.length - 2));
                } else {
                    return Number(l);
                }
            } else {
                this.css("left", left);
                return this;
            }
        },
        top : function (top) {
            if (top) {
                var t = this.css("top");
                if (t.endsWith("px")) {
                    return Number(t.substring(0, t.length - 2));
                } else {
                    return Number(t);
                }
            } else {
                this.css("top", top);
                return this;
            }
        },
        replaceClass : function (oclass, nclass) {
            if (this.hasClass(oclass)) {
                this.removeClass(oclass);
            }
            this.addClass(nclass);
            return this;
        },
        resetValues : function (val) {
            var v = _isNull(val) || "" == val.trim() ? "" : val;
            this.find("input").each(function () {
                if (this.type == "text" || this.type == "hidden")
                    this.value = v;
            });
        },
        mposition : function (pos, zIndex) {
            this.css("position", pos);
            if (!tmsky.isNull(zIndex)) {
                this.css("z-index", zIndex);
            }
            return this;
        },
        absolutePos : function (zIndex) {
            return this.mposition("absolute", zIndex);
        },
        staticPos : function (zIndex) {
            return this.mposition("static", zIndex);
        },
        fixedPos : function (zIndex) {
            return this.mposition("fixed", zIndex);
        },
        relativePos : function (zIndex) {
            return this.mposition("relative", zIndex);
        },
        margin : function () {
            var marginLeft = this.css("margin-left");
            var marginRight = this.css("margin-right");
            var marginTop = this.css("margin-top");
            var marginBottom = this.css("margin-bottom");
            return {
                left : Number(marginLeft.substring(0, marginLeft.length - 2)),
                right : Number(marginRight.substring(0, marginRight.length - 2)),
                top : Number(marginTop.substring(0, marginTop.length - 2)),
                bottom : Number(marginBottom.substring(0, marginBottom.length - 2))
            };
        },
        marginTop : function () {
            var marginTop = this.css("margin-top");
            return Number(marginTop.substring(0, marginTop.length - 2));
        },
        marginBottom : function () {
            var marginBottom = this.css("margin-bottom");
            return Number(marginBottom.substring(0, marginBottom.length - 2));
        },
        marginLeft : function () {
            var marginLeft = this.css("margin-left");
            return Number(marginLeft.substring(0, marginLeft.length - 2));
        },
        marginRight : function () {
            var marginRight = this.css("margin-right");
            return Number(marginRight.substring(0, marginRight.length - 2));
        },
        padding : function () {
            var paddingLeft = this.css("padding-left");
            var paddingRight = this.css("padding-right");
            var paddingTop = this.css("padding-top");
            var paddingBottom = this.css("padding-bottom");
            return {
                left : Number(paddingLeft.substring(0, paddingLeft.length - 2)),
                right : Number(paddingRight.substring(0, paddingRight.length - 2)),
                top : Number(paddingTop.substring(0, paddingTop.length - 2)),
                bottom : Number(paddingBottom.substring(0, paddingBottom.length - 2))
            };
        },
        paddingTop : function () {
            var paddingTop = this.css("padding-top");
            return Number(paddingTop.substring(0, paddingTop.length - 2));
        },
        paddingBottom : function () {
            var paddingBottom = this.css("padding-bottom");
            return Number(paddingBottom.substring(0, paddingBottom.length - 2));
        },
        paddingLeft : function () {
            var paddingLeft = this.css("padding-left");
            return Number(paddingLeft.substring(0, paddingLeft.length - 2));
        },
        paddingRight : function () {
            var paddingRight = this.css("padding-right");
            return Number(paddingRight.substring(0, paddingRight.length - 2));
        },
        grandParent : function () {
            return this.parent().parent();
        },
        greatParent : function () {
            return this.parent().parent().parent();
        }
    });

    function _isNull(obj) {
        if (tmsky.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                if (tmsky.isNull(obj[i])) {
                    return true;
                }
            }
            return false;
        } else {
            return tmsky.isNull(obj);
        }
    }

})(jQuery);