/**
 * tomasky.core.ui.plugins.js
 * Created by hai on 2015/12/11.
 */
;
!function ($) {
    'use strict';
    var flag = '[data-ui="dropdown"]',
        select = '[data-ui="dropdown"] [data-role="item"]',
        eTarget = null,
        openClass = 'tomasky-ui-dropdown-open'

    var Dropdown = function (element) {
        $(element).attr('data-ui', 'dropdown');
    }

    Dropdown.version = '0.1.0'

    var utils = {
        isRoleSearch : function (e) {
            return e && $(e.target).attr('data-role') == 'search'
        },
        showAllItems : function ($parent, value) {
            $parent.find('[data-role=item]').each(function () {
                this.style.display = 'block'
            })
        },
        filterInnerItems : function ($parent, value) {
            var count = 0;
            $parent.find('[data-role=item]').each(function () {

                var $this = $(this), val = $this.text(), isExist = val.toUpperCase().indexOf(value.toUpperCase()) != -1||tmsky.string.makePy(val)[0].toUpperCase().indexOf(value.toUpperCase()) != -1
                this.style.display = isExist ? 'block' : 'none'
                if (isExist) {
                    count++
                }
            })
        }
    }

    /**
     * 展开或者收起
     */
    Dropdown.prototype.toggle = function (e) {
        var $this = $(this);
        if ($this.is('.disabled')) return;
        var isActive = $this.hasClass(openClass);
        if (!isActive) {
            setTimeout(function(){ $this.find('.tomasky-ui-dropdown-search-input-in').focus()},200)
            var relatedTarget = {relatedTarget : this}
            $this.trigger(e = $.Event('show.tc.dropdown', relatedTarget));
            $this.find('[data-role="search"]').show()
            $this.find('.tomasky-ui-dropdown-search-input-in').val('')
            utils['showAllItems']($this, '')
            if (e.isDefaultPrevented()) return;
            $this.addClass(openClass)
            $this
                .addClass(openClass)
                .trigger($.Event('shown.tc.dropdown', relatedTarget));

            eTarget = e.target
        }else{
            clearList();
        }
    }

    Dropdown.prototype.searchClick = function (e) {
        e.preventDefault()
        e.stopPropagation()
        $(e.target).select()
    }

    Dropdown.prototype.search = function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (e.type == 'keyup') {
            var $this = $(e.target), $parent = $this.parent(), $search = $parent.find('[data-role="search"]'),
                value = $search.val(),
                old = $search.attr('old-value')
            value = value ?  tmsky.string.trim(value) : ''
            old = old ?  tmsky.string.trim(old) : ''
            if (value != old) {
                var _parent = $parent.parent()
                utils[value ? 'filterInnerItems' : 'showAllItems'](_parent, value)
                $search.attr('old-value', value)
            }
        }

    }

    /**
     * 更新数据源  [{value:'value1', text: 'text1', selected: true, disabled: true}]
     */
    Dropdown.prototype.syncModel = function (model) {
        if (model && model.length) {
            var $this = $(this);
            var $list = $this.children('.ui-dropdown-list');
            var selected, items = [];

            model.forEach(function (el) {
                var $a = $('<a href="#" data-role="item"></a>');
                $a
                    .data('value', el.value)
                    .data('selected', el.selected)
                    .data('disabled', el.disabled)
                    .html(el.text)
                items.push($a);
                if (el.selected) selected = el;
                if (el.disabled) $a.addClass('disabled');
            });
            selected = selected || model[0];
            getRoleValue($this)
                .html(selected.text)
                .data('value', selected.value)
            $list.empty().append(items);
        }
    };

    /**
     * 禁用选择器
     */
    Dropdown.prototype.disabled = function () {
        var $this = $(this);
        if ($this.hasClass('.disabled')) return;
        $this.addClass('disabled').data('disabled', true);
    };

    /**
     * 选择某项目
     *
     * index(number) / value (string)
     */
    Dropdown.prototype.selected = function (index) {
        var $this = $(this),
            $list = $this.children('.ui-dropdown-list'),
            $item

        index = index === void 0 ? 0 : index
        if (typeof index === 'number') {
            // index
            $item = $list.children('[data-role="item"]').eq(index)
            _selectedItem($item)
        }
        else {
            index = index + ''
            $list.children('[data-role="item"]').each(function () {
                $item = $(this)
                if ('' + $item.data('value') === index) {
                    _selectedItem($item)
                    return false
                }
            });
        }
    };

    /**
     * 获取值
     */
    Dropdown.prototype.getValue = function () {
        return getRoleValue($(this)).data('value') || ''
    }

    function getParent($item) {
        return $item.closest('.tomasky-ui-dropdown');
    }

    function getRoleValue($parent) {
        return $parent.find('[data-role="value"]')
    }

    function _selectedItem($item) {
        var opt = {
            value : $item.data('value'),
            text : $item.text()
        }
        var $parent = getParent($item);
        var $roleValue = getRoleValue($parent);
        var prev = $roleValue.data('value') === undefined ? '' : $roleValue.data('value');
        var $input = $parent.children('[type=hidden]:first')

        opt.value = opt.value === undefined ? '' : opt.value

        $roleValue
            .html(opt.text)
            .data('value', opt.value)

        if ($input.length) {
            $input.val(opt.value)
        }

        // change 事件
        if (prev !== opt.value) {
            var relatedTarget = {relatedTarget : this}
            $parent.trigger($.Event('change.tc.dropdown', relatedTarget), [opt.value, prev]);

            if ($input.length) {
                // 触发原生change事件
                _fireEvent($input[0], 'change')
            }
        }
    }

    function _fireEvent(target, type) {
        if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent(type, false, true);
            target.dispatchEvent(ev);
        } else {
            var eventObj = document.createEventObject();
            eventObj.target = target
            target.fireEvent("on" + type, eventObj);
        }
    }

    //项目选择
    function itemSelect(e) {
        var $item = $(this);
        if ($item.is('.disabled') || $item.data('disabled')) return false;
        _selectedItem($item)
    }

    //清除下拉
    function clearList(e) {
        $(flag).each(function () {
            var $this = $(this), hasOpen = $this.hasClass(openClass)
            var relatedTarget = {relatedTarget : this}
            if (this === eTarget && !hasOpen) {
                eTarget = null
                return;
            }
            if (!hasOpen) return;

            $this.trigger(e = $.Event('hide.tc.dropdown', relatedTarget));
            $this.find('[data-role="search"]').hide()
            if (e.isDefaultPrevented()) return;

            $this
                .removeClass(openClass)
                .trigger($.Event('hiden.tc.dropdown', relatedTarget));
        });
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        var ret
        this.each(function () {
            var $this = $(this);
            var data = $this.data('tc.dropdown');

            if (!data) $this.data('tc.dropdown', (data = new Dropdown(this)));

            if (typeof option === 'string') {
                ret = data[option].call($this, params)
            }
        });
        return ret === undefined ? this : ret
    }

    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;

    // 绑定默认
    // ===================================
    $(document)
        .on('click.tc.dropdown', select, itemSelect)
        .on('click.tc.dropdown', flag, Dropdown.prototype.toggle)
        .on('click.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-input-in', Dropdown.prototype.searchClick)
        .on('click.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-input-in', Dropdown.prototype.search)
        .on('keyup.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-input-in', Dropdown.prototype.search)

    $(document).click(function (e) {
        var $dom = $(e.target).parent()
        if (!$dom.hasClass('tomasky-ui-dropdown') && !$dom.parent().hasClass('tomasky-ui-dropdown') && $('[data-ui="dropdown"].' + openClass).length) {
            clearList();
        }
    })
}(jQuery);