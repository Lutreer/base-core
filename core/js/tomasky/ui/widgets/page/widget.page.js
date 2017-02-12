(function (window, tmsky, undefined) {
    var SHOW_ERROR_INTERVAL_TIME = 5000, perrorInterval;
    var TPAGE_SKIN = {
        RED: "red",
        GREEN: "green",
        GRAY: "gray",
        __COLORS__: {
            RED: "#CA0207",// _color = "#A9221C,#70A847,gray";
            GREEN: "#70A847",
            GRAY: "gray"
        }
    };
    var TPAGE_ALIGN = {
        LEFT: "left",
        RIGHT: "right",
        CENTER: "center"
    };
    var PAGE_ID_FLAG = {
        FIRST: "first",
        LAST: "last",
        PREV: "prev",
        NEXT: "next",
        ELLIPSIS: "ellipsis"
    };
    var _click = {
        url: "",
        stype: "rest",// rest/key-value
        method: "get",// get/post,当为rest风格且get方式时其参数传输格式固定为url + "/" + pageNo[ + "/" + pageSize]
        tPageSize: false,
        pageNoName: "pageNo",
        pageSizeName: "pageSize",
        params: undefined
    };
    var _options = {
        id: "",
        pageNo: 0,
        pages: 0,
        callback: null,
        callbackParams: undefined,
        click: undefined,
        returnParams: true,
        pageSize: undefined,
        totalCount: undefined,
        cpageNo: true,
        maxPages: 10,
        minPageSize: 10,
        maxPageSize: 100,
        align: TPAGE_ALIGN.RIGHT,
        disCount: 4,
        disStat: true,
        skin: TPAGE_SKIN.GREEN,
        color: undefined,
        cssUrl: undefined,
        statFontColor: undefined,
        errorMsgColor: undefined,
        // bizn field
        prePageSize: undefined,
        currPageSize: false
    };

    function hasExistJQObj(s) {
        return $(s).length > 0;
    }

    var isEmpty = function (o) {
        return undefined === o || null === o || "" === o;
    };

    function tPage(opts) {
        this._P_HTMLS = "";
        this.reset();
        this.setOptions(opts, false, true);
    }

    tPage.newInstance = function (opts) {
        return new tPage(opts);
    };

    tPage.prototype.getPIDSelector = function () {
        return "#" + this.id;
    };

    tPage.prototype.getBGColor = function () {
        if (this.color) {
            return this.color;
        }
        var _color;
        if (!this.skin)
            this.skin = TPAGE_SKIN.RED;
        return TPAGE_SKIN.__COLORS__[this.skin.toUpperCase()];
    };

    tPage.prototype.getMostOffset = function () {
        var $page = $(this.getPIDSelector()),
            $obj = $page.find('#gotoPageNo'),
            $last = $page.find('li#last'),
            lastMarginRight = $last.css('marginRight'),
            lastMarginRight = (lastMarginRight && Number(lastMarginRight.substr(0, lastMarginRight.length - 2)) ) || 0
        byLast = false

        if ($obj.length == 0) {
            $obj = $last
            byLast = true
        }
        var os = $obj.offset(),
            pos = $page.offset()
        return {
            byLast: byLast,
            top: os.top,
            left: os.left,
            ptop: pos.top,
            pleft: pos.left,
            owidth: $obj.outerWidth(),
            oheight: $obj.outerHeight(),
            lastMarginRight: lastMarginRight
        };
    };

    tPage.prototype.showPageErrors = function (msg, time) {
        var adjustPosition = function (_this, $perror) {
            var os = _this.getMostOffset();
            $perror.offset({
                top: os.top + os.oheight,
                left: os.left + os.owidth - $perror.innerWidth()
            });
        };
        var t = time ? time : SHOW_ERROR_INTERVAL_TIME, $perror;
        $perror = $(this.getPIDSelector() + " #pageErrors");
        $perror.text(msg);
        if ($perror.css("display") === "none") {
            $perror.slideDown();
            adjustPosition(this, $perror);
        } else {
            adjustPosition(this, $perror);
            if (perrorInterval) {
                clearTimeout(perrorInterval);
            }
        }

        perrorInterval = setTimeout(function () {
            if ($perror.css("display") != "none") {
                $perror.slideUp();
                if (perrorInterval) {
                    clearTimeout(perrorInterval);
                }
                $perror.text("");
            }
        }, t);
    };

    tPage.prototype.reset = function () {
        for (var name in _options) {
            if (_options.hasOwnProperty(name)) {
                this[name] = _options[name];
            }
        }
        return this;
    };

    var validateOptions = function (p) {
        if (p.minPageSize < _options.minPageSize) {
            p.minPageSize = _options.minPageSize;
        }
        if (p.maxPageSize > _options.maxPageSize) {
            p.maxPageSize = _options.maxPageSize;
        }
        if (p.minPageSize >= p.maxPageSize) {
            p.minPageSize = _options.minPageSize;
        }
        if (p.maxPageSize <= p.minPageSize) {
            p.maxPageSize = _options.maxPageSize;
        }
        if (p.pageSize < p.minPageSize) {
            p.pageSize = p.minPageSize;
        } else if (p.pageSize > p.maxPageSize) {
            p.pageSize = p.maxPageSize;
        }
    };

    tPage.prototype.setOptions = function (opts, toRender, toInit) {
        if (opts) {
            for (var name in opts) {
                if (opts.hasOwnProperty(name) && this.hasOwnProperty(name)) {
                    this[name] = opts[name];
                }
            }
            if (this.click) {
                var custClick = this.click;
                this.click = _click;
                if (typeof custClick === "string") {
                    this.click.url = url;
                } else {
                    for (var name in custClick) {
                        this.click[name] = custClick[name];
                    }
                }
            }
            validateOptions(this);
            if (toInit) {
                this.init();
            }
            if (toRender) {
                this.render();
            }
        }
    };

    var cacheBusinessProperties = function (p) {
        if (p.prePageSize) {
            p.cache("p-prePageSize", p.prePageSize);
        }
        if (p.currPageSize) {
            p.cache("p-currPageSize", p.currPageSize);
        }
    };

    tPage.prototype.init = function () {
        this.prePageSize = this.get("p-prePageSize", true);
        this.currPageSize = this.get("p-currPageSize", true);
        if (!this.pageNo) {
            this.pageNo = hasExistJQObj("#pageNo") ? parseInt($("#pageNo").val()) : 1;
        }
        if (!this.pages) {
            this.pages = hasExistJQObj("#pages") ? parseInt($("#pages").val()) : 1;
        }
        if (hasExistJQObj(this.getPIDSelector() + " #p-pageSize")) {
            this.pageSize = this.get("p-pageSize", true);
        }
        if (!this.pageSize) {
            this.pageSize = this.currPageSize;
        }
        if (!this.totalCount) {
            this.totalCount = hasExistJQObj("#totalCount") ? parseInt($("#totalCount").val()) : undefined;
        }
        if (this.cssUrl) {
            $("#t-page-css").remove();
            $("body").append('<link id="t-page-css" rel="stylesheet" href="' + this.cssUrl + '" />');
        }
        cacheBusinessProperties(this);
    };

    tPage.prototype.remove = function () {
        $(this.getPIDSelector() + " #t-page").remove();
    };

    tPage.prototype.cache = function (id, val) {
        var $tpage = $(this.getPIDSelector() + " #t-page");
        var $target = $tpage.find("#" + id);
        if ($target.length) {
            $target.val(val);
        } else {
            $tpage.prepend("<input type='hidden' id='" + id + "' value='" + val + "'/>");
        }
    };

    tPage.prototype.get = function (id, toParseInt) {
        var val = $(this.getPIDSelector() + " #" + id).val();
        return toParseInt ? parseInt(val) : val;
    };

    tPage.prototype.handlePageInfo = function (hpno, hpsize, hps) {
        var r = {},
            pid = this.getPIDSelector() + " #t-page";
        if (hpno) {
            var $thisPageNo = $(pid + " #p-pageNo");
            if (hpno.val) {
                $thisPageNo.val(hpno.val);
            } else {
                r.pageNo = parseInt($thisPageNo.val());
            }
        }
        if (hpsize) {
            var $iPageSize = $(pid + " #p-pageSize");
            if (hpsize.val) {
                $iPageSize.val(hpsize.val);
            } else {
                r.pageSize = parseInt($iPageSize.val());
            }
        }
        if (hps) {
            var $thisPages = $(pid + " #p-pages");
            if (hps.val) {
                $thisPages.val(hps.val);
            } else {
                r.pages = parseInt($thisPages.val());
            }
        }
        return r;
    };

    tPage.prototype.getCallbackParams = function () {
        var r = this.handlePageInfo(true, true, true),
            arr = this.callbackParams || [];
        if (this.returnParams) {
            arr.push(r);
        }
        return arr;
    };

    var toSubmitClickForm = function (p, pageNo, pageSize) {
        var formId = p.id + "-tpageForm",
            tpFormHtmls = "";
        tpFormHtmls += "<form id='" + formId + "' action='" + p.click.url + "' method='" + p.click.method + "'>";
        tpFormHtmls += "<input type='hidden' name='" + p.click.pageNoName + "' value='" + pageNo + "'/>";
        if (p.click.tPageSize) {
            tpFormHtmls += "<input type='hidden' name='" + p.click.pageSizeName + "' value='" + pageSize + "'/>";
        }
        if (p.click.params) {
            var _params = p.click.params;
            for (var name in _params) {
                if (_params.hasOwnProperty(name)) {
                    tpFormHtmls += "<input type='hidden' name='" + name + "' value='" + _params[name] + "'/>";
                }
            }
        }
        tpFormHtmls += "</form>";
        $("#" + formId).remove();
        $("body").append(tpFormHtmls);
        $("#" + formId).submit();
    };

    tPage.prototype.toCallback = function (pageNo, pageSize) {
        if (this.click) {
            if (this.click.stype === "rest") {
                if (this.click.method === "get") {
                    location.href = this.click.url + "/" + pageNo + (this.click.tPageSize ? "/" + pageSize : "");
                } else {
                    toSubmitClickForm(this, pageNo, pageSize);
                }
            } else {
                toSubmitClickForm(this, pageNo, pageSize);
            }
        } else {
            this.callback.apply(null, this.getCallbackParams());
            syncPageInfo(this);
        }
    };

    function syncPageInfo(p) {
        var $tpage = $(p.getPIDSelector() + " #t-page");
        var pageNo = parseInt($tpage.find("#p-pageNo").val());
        var preActiveItem = $tpage.find("li.active");
        if (pageNo + "" != preActiveItem.attr("id")) {
            preActiveItem.removeClass("active");
            $tpage.find("li[id='" + pageNo + "']").addClass("active");
            p.pageNo = pageNo;
        }
        if (p.pageSize && $tpage.find("#ipageSize").length) {
            var pageSize = parseInt($tpage.find("#p-pageSize").val());
            if (pageSize != p.pageSize) {
                p.pageSize = pageSize;
            }
            var pages = parseInt($tpage.find("#p-pages").val());
            if (pages != p.pages) {
                p.pages = pages;
            }
            if (p.totalCount) {
                var totalCount = parseInt($tpage.find("#p-totalCount").val());
                if (totalCount != p.totalCount) {
                    p.totalCount = totalCount;
                }
            }
        }
    }

    function bindItemsEvent(p) {
        if (p.pages == 1) {
            var dftcursor = function () {
                this.style.cursor = "default";
                this.style.color = "black";
            };
            $(p.getPIDSelector() + " #t-page").find("li.item").off().mouseover(dftcursor).mouseenter(dftcursor);
            return;
        }
        $(p.getPIDSelector() + " #t-page").find("li.item").off().click(function () {
            var prePageNo = p.pageNo, pageNo;
            switch (this.id) {
                case PAGE_ID_FLAG.FIRST:
                    pageNo = 1;
                    break;
                case PAGE_ID_FLAG.LAST:
                    pageNo = p.pages;
                    break;
                case PAGE_ID_FLAG.PREV:
                    pageNo = prePageNo - 1;
                    break;
                case PAGE_ID_FLAG.NEXT:
                    pageNo = prePageNo + 1;
                    break;
                case PAGE_ID_FLAG.ELLIPSIS:
                    pageNo = PAGE_ID_FLAG.ELLIPSIS;
                    break;
                default:
                    pageNo = parseInt(this.id);
                    break;
            }
            if (pageNo === PAGE_ID_FLAG.ELLIPSIS) {
                return;
            }
            pageNo = pageNo ? (pageNo <= 0 ? 1 : (pageNo > p.pages ? p.pages : pageNo)) : 1;
            if (pageNo === p.pageNo) {
                return;
            }
            p.handlePageInfo({
                val: pageNo
            });

            // execute callback method
            p.toCallback(pageNo, p.pageSize);
        });
    }

    function bindPageNoEvent(p) {
        $(p.getPIDSelector() + " #pageNum").off().keyup(function (e) {
            var _e = e || window.event;
            if (_e.keyCode == 13) {
                $("#gotoPageNo").click();
            }
        });

        $(p.getPIDSelector() + " #gotoPageNo").off().click(function () {
            var $pageNum = $(p.getPIDSelector() + " #pageNum"),
                pnum = $pageNum.val();
            if (!pnum) {
                return;
            }
            if (isNaN(pnum)) {
                p.showPageErrors("请输入数值");
                return;
            }
            pnum = parseInt(pnum);
            if (pnum <= 0) {
                p.showPageErrors("跳转页必须大于 0");
                return;
            }
            if (pnum > p.pages) {
                p.showPageErrors("跳转页不能大于最大页数 " + p.pages);
                return;
            }
            if (pnum === p.pageNo) {
                return;
            }
            p.handlePageInfo({
                val: pnum
            });

            // execute callback method
            p.toCallback(pnum, p.pageSize);
        });
    }

    function bindPageSizeEvent(p) {
        $(p.getPIDSelector() + " #ipageSize").off().keyup(function (e) {
            var _e = e || window.event;
            if (_e.keyCode == 13) {
                $(p.getPIDSelector() + " #pageSizeBtn").click();
            }
        });

        $(p.getPIDSelector() + " #pageSizeBtn").off().click(function () {
            var $iPageSize = $(p.getPIDSelector() + " #ipageSize"),
                ips = $iPageSize.val(), emsg;
            if (!ips) {
                return;
            }
            if (isNaN(ips)) {
                p.showPageErrors("请输入数值");
                return;
            }
            var nips = parseInt(ips);
            if (nips < p.minPageSize) {
                p.showPageErrors("每页最少显示 " + p.minPageSize + " 条数据");
                return;
            }
            if (nips > p.maxPageSize) {
                p.showPageErrors("每页最多显示 " + p.maxPageSize + " 条数据");
                return;
            }
            if (nips === p.pageSize) {
                return;
            }

            var tc, _cmaxPageNo,
                isToCallback = true;
            if (p.totalCount) {
                tc = p.totalCount;
            } else {
                tc = p.pageSize * p.pages;
            }

            if (p.pages == 1 && nips > tc) {
                isToCallback = false;
            }

            _cmaxPageNo = Math.ceil(tc / nips);
            if (p.pageNo > _cmaxPageNo) {
                p.pageNo = _cmaxPageNo;
                p.handlePageInfo({
                    val: p.pageNo
                });
            }
            p.cache("p-prePageSize", p.pageSize);
            p.cache("p-currPageSize", nips);
            p.handlePageInfo(undefined, {
                val: nips
            });

            if (isToCallback) {
                // execute callback method
                p.toCallback(p.pageNo, nips);
            } else {
                p.pageSize = nips;
            }
        });
    }

    function cachePageInfo(p) {
        $(p.getPIDSelector()).html(p._P_HTMLS);
        p._P_HTMLS = "";
    }

    function appendPageInfoHtmls(p) {
        p._P_HTMLS += "<input type='hidden' id='p-pageNo' value='" + p.pageNo + "'/>";
        p._P_HTMLS += "<input type='hidden' id='p-pages' value='" + p.pages + "'/>";
        if (p.pageSize) {
            p._P_HTMLS += "<input type='hidden' id='p-pageSize' value='" + p.pageSize + "'/>";
        }
        if (p.totalCount) {
            p._P_HTMLS += "<input type='hidden' id='p-totalCount' value='" + p.totalCount + "'/>";
        }
        return p._P_HTMLS;
    }

    function appendPageSizeHtmls(p) {
        p._P_HTMLS += "<li>每页 <input id='ipageSize' class='ipagesize' value='" + p.pageSize + "' pre-val='" + p.pageSize + "'/> 条 <button id='pageSizeBtn' class='pgesize-btn'>确定</button></li>";
    }

    function appendPageItemsHtmls(p) {
        if (p.pages >= p.maxPages) {
            var maxPages = p.maxPages % 2 == 0 ? p.maxPages : p.maxPages + 1,
                disCount = p.maxPages / 2 - 1;
            p.disCount = p.disCount > disCount ? disCount : p.disCount;
            var index = 1;
            var ellipsis = "<li id='" + PAGE_ID_FLAG.ELLIPSIS + "' class='" + PAGE_ID_FLAG.ELLIPSIS + "'>...</li>";
            var pnoGTDiscount = p.pageNo >= p.disCount,
                disFirstDisCount = p.pageNo >= p.disCount + 1;
            index = pnoGTDiscount ? p.pageNo : index;
            index = index == p.disCount ? --index : index;
            var _disCount = p.disCount,
                indexGTDisCount = index > p.disCount;
            _disCount = indexGTDisCount ? --_disCount : _disCount;
            var itemsCount = 0;

            var adjustDisCount = function (index, itemsCount, reverse) {
                var allDisCount = p.disCount * 2,
                    diffDisCount = allDisCount - itemsCount,
                    _htmls = "";
                if (diffDisCount > 0) {
                    if (reverse) {
                        for (var i = diffDisCount; i > 0; i--) {
                            var _i = index - i;
                            _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        }
                    } else {
                        for (var i = 0; i < diffDisCount; i++) {
                            var _i = index + i;
                            _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        }
                    }
                }
                return _htmls;
            };

            if (disFirstDisCount) {
                for (var i = 1; i <= _disCount; i++) {
                    p._P_HTMLS += "<li id='" + i + "' class='item'>" + i + "</li>";
                    itemsCount++;
                }
                p._P_HTMLS += ellipsis;
            }

            var currMaxCount = index + _disCount - 1,
                floorMaxMinPageNo = p.pages - _disCount + 1;
            if (p.pageNo >= floorMaxMinPageNo) {
                var _i = floorMaxMinPageNo - _disCount * 2 - 1;
                var adjustI = function (_ci) {
                    _ci = disFirstDisCount ? _ci <= _disCount ? _disCount + 2 : _ci : _ci;
                    _ci = _ci + _disCount >= floorMaxMinPageNo ? 0 : _ci;
                    return _ci;
                }
                _i = adjustI(_i);
                if (_i == 0) {
                    _i = adjustI(floorMaxMinPageNo - _disCount - 1);
                }
                var toAppend = disFirstDisCount ? _i > _disCount + 1 : _i > 0;
                if (toAppend) {
                    for (var i = 0; i < _disCount; i++) {
                        var ci = _i + i;
                        p._P_HTMLS += "<li id='" + ci + "' class='item'>" + ci + "</li>";
                        itemsCount++;
                    }
                    p._P_HTMLS += ellipsis;
                }
            }

            if (currMaxCount >= floorMaxMinPageNo) {
                index = currMaxCount >= p.pages ? floorMaxMinPageNo : index;
                var _htmls = "";
                for (var i = 0; i < _disCount; i++) {
                    var _i = index + i;
                    _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                    itemsCount++;
                }
                var surplusPages = p.pages - index - _disCount + 1;

                if (surplusPages > 0 && surplusPages <= _disCount) {
                    var _i = index + _disCount,
                        _chtmls = "";
                    for (var i = 0; i < surplusPages; i++) {
                        _i += i;
                        _chtmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        itemsCount++;
                    }
                    p._P_HTMLS += adjustDisCount(index, itemsCount, true);
                    p._P_HTMLS += _htmls;
                    p._P_HTMLS += _chtmls;
                } else {
                    p._P_HTMLS += adjustDisCount(index, itemsCount, true);
                    p._P_HTMLS += _htmls;
                }
            } else {
                for (var i = 0; i < _disCount; i++) {
                    var _i = index + i;
                    p._P_HTMLS += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                    itemsCount++;
                }
                currMaxCount = index + _disCount;
                if (currMaxCount >= floorMaxMinPageNo) {
                    p._P_HTMLS += adjustDisCount(currMaxCount, itemsCount);
                } else {
                    p._P_HTMLS += ellipsis;
                    for (var i = _disCount; i > 0; i--) {
                        var _i = p.pages - i + 1;
                        p._P_HTMLS += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        itemsCount++;
                    }
                }
            }
        } else {
            for (var i = 1; i <= p.pages; i++) {
                p._P_HTMLS += "<li id='" + i + "' class='item'>" + i + "</li>";
                itemsCount++;
            }
        }
    }

    function appendPageContentHtmls(p) {
        p._P_HTMLS += "<li id='first' class='first item'>首页</li>";
        p._P_HTMLS += "<li id='prev' class='prev item' title=' 上一页 '><<</li>";
        appendPageItemsHtmls(p);
        p._P_HTMLS += "<li id='next' class='next item' title=' 下一页 '>>></li>";
        p._P_HTMLS += "<li id='last' class='last item'>尾页</li>";
    }

    function appendGotoPagetNoHtmls(p) {
        if (p.cpageNo && p.pages > p.maxPages) {
            p._P_HTMLS += "<li>跳转至 <input id='pageNum' class='page-num' value='" + p.pageNo + "'/> 页<button id='gotoPageNo' class='gotopageno-btn'>确定</button></li>";
        }
    }

    function appendStatInfoHtmls(p) {
        if (p.disStat && p.pages >= p.maxPages) {
            p._P_HTMLS += "<li class='stat-info' id='stat-info'>当前第<label class='page'>" + p.pageNo + "</label>页/共<label class='page'>" + p.pages + "</label>页</li>";
        }
    }

    function markSpecialAttrs(p) {
        $(p.getPIDSelector() + " #t-page li[id='" + p.pageNo + "']").addClass("active");
        if (p.pages == 1) {
            $(p.getPIDSelector()).find("#first,#last,#prev,#next").addClass("disabled");
        } else {
            if (p.pageNo === 1) {
                $(p.getPIDSelector()).find("#first,#prev").addClass("disabled");
            } else if (p.pageNo === p.pages) {
                $(p.getPIDSelector()).find("#last,#next").addClass("disabled");
            }
        }
    }

    function adustCSSClass(p) {
        var $continar = $(p.getPIDSelector()),
            $tPage = $continar.find("#t-page");
        $continar.css({
            clear: "both",
            padding: "20px 0"
        });
        $tPage.addClass("t-palign-" + p.align.toLowerCase());
        if (p.align === TPAGE_ALIGN.CENTER) {
            var os = p.getMostOffset(),
                tos = $continar.offset(),
                _wid = os.left + os.owidth,
                _pwid = _wid + os.lastMarginRight,
                _hei = os.top;
            //var wid = Math.floor((document.documentElement.clientWidth - _wid) / 2);
            var wid = Math.floor(($continar.width() - _wid) / 2) + tos.left + (tos.left / 2);
            $tPage.width(Math.ceil(_pwid)).offset({
                top: _hei,
                left: wid
            });
        }
        var ua = navigator.userAgent.toLowerCase();
        // 兼容IE内核浏览器
        if (ua.indexOf("qqbrowser") != -1 || !!window.ActiveXObject || ("ActiveXObject" in window)) {
            $tPage.find("input").css("padding", "2px 0 14px 3px");
        }
        if (p.statFontColor) {
            $tPage.find("#stat-info label").css("color", p.statFontColor);
        }
        if (p.errorMsgColor) {
            $tPage.find("#pageErrors").css("color", p.errorMsgColor);
        }

        var _color = p.getBGColor();
        var _hoverCss = {
            'background-color': _color,
            color: 'white',
            'border-color': _color
        }

        $("#t-page li.disabled").mouseover(function () {
            $(this).css({
                "background-color": "white",
                cursor: "not-allowed",
                color: "black",
                "padding-bottom": 0
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.first,li.last").mouseover(function () {
            $(this).css({
                padding: "0 5px"
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.ellipsis").mouseover(function () {
            $(this).css({
                cursor: "default",
                color: "black"
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.item").mouseover(function () {
            var $this = $(this);
            if ($this.hasClass("disabled") || $this.hasClass("active")) {
                return;
            }
            var hasFLItem = $this.hasClass("first") || $this.hasClass("last");
            if (hasFLItem) {
                $this.css("color", "white");
                if (hasFLItem) {
                    $this.css({
                        'background-color': _color,
                        'border-color': _color
                    });
                }
            } else {
                $this.css(_hoverCss);
            }
        }).mouseout(function () {
            var $this = $(this);
            if ($this.hasClass("active")) {
                return;
            }
            $this.removeAttr("style");
        });

        $("#t-page li.active").css(_hoverCss);

        $("#t-page li.stat-info>.page").css({
            color: _color,
            "font-weight": "bold"
        });

        $("#t-page button").mouseover(function () {
            $(this).css(_hoverCss);
        }).mouseout(function () {
            $(this).removeAttr("style");
        });
    }

    var unbindPageEvents = function (p) {
        $(p.getPIDSelector()).find("li.disabled,#first.disabled,#last.disabled").unbind().attr("title", "");
    };

    var checkNeedToRender = function (p) {
        var toGenera = true;
        if (p.pages <= 1) {
            if (!p.pageSize) {
                toGenera = false;
            } else {
                if (p.pages <= 0 || (p.totalCount && p.totalCount > p.minPageSize)) {
                    toGenera = false;
                }
            }
        }
        return toGenera;
    };

    tPage.prototype.render = function () {
        this.remove();
        var pageInfoHtmls = appendPageInfoHtmls(this);
        if (!checkNeedToRender(this)) {
            cachePageInfo(this);
            return;
        }

        // this._P_HTMLS = "<ul id='t-page' class='t-page-" + this.skin.toLowerCase() + "'>";
        this._P_HTMLS = "<ul id='t-page'>";
        this._P_HTMLS += pageInfoHtmls;
        if (this.pageSize) {
            appendPageSizeHtmls(this);
        }
        appendPageContentHtmls(this);
        appendStatInfoHtmls(this);
        appendGotoPagetNoHtmls(this);
        this._P_HTMLS += "<li id='pageErrors' class='page-errors'></li>";
        this._P_HTMLS += "</ul>";
        $(this.getPIDSelector()).html(this._P_HTMLS).show();

        markSpecialAttrs(this);
        // bind events
        bindItemsEvent(this);
        bindPageNoEvent(this);
        bindPageSizeEvent(this);
        unbindPageEvents(this);
        adustCSSClass(this);
        this._P_HTMLS = "";
    };

    function Page() {
    }

    Page.render = function (opts) {
        tPage.newInstance(opts).render();
    };

    Page.getParams = function (id) {
        var selector = "#" + id,
            $tp = $(selector), params;
        params = {
            pageNo: $tp.find("#p-pageNo").val(),
            pages: $tp.find("#p-pages").val(),
            pageSize: $tp.find("#p-pageSize").val(),
            totalCount: $tp.find("#p-totalCount").val()
        };
        if (!params.pageNo || params.pageNo === "0") {
            params.pageNo = "1";
        }
        return params;
    };

    Page.setParams = function (id, params) {
        var selector = "#" + id,
            $tp = $(selector);
        for (var name in params) {
            var slt = "#p-" + name;
            $tp.find(slt).val(params[name]);
        }
    };

    //window.Page = Page;
    tmsky.extendUI({page: Page})
})(window, tmsky);