/* ========================================================================
 *  tabs 扩展
 *
 *  author: candy
 *
 *  version: 0.0.1
 * ======================================================================== */
;
!function ($) {
    'use strict';

    var Tabs = function (element) {
        this.element = $(element).attr('data-ui', 'tabs')
    }

    Tabs.VERSION = '0.0.1'

    Tabs.prototype = {
        select : function (index) {
            var $this = this.element,
                $contents = $this.children('.ui-tabs-content'),
                $navs = $this.children('.ui-tabs-nav'),
                index = index || 0,
                ele = $navs.children('li').eq(index),
                selector, panel, prev, e, url

            if (ele.hasClass('active')) return

            panel = ( selector = ele.data('target') ) ?
                $contents.children(selector).first() :
                $contents.children('.ui-tabs-panel').eq(index)

            prev = $navs.children('.active:last')

            // 选中前回调
            e = $.Event('select.tc.tabs', {
                relatedTarget : ele[0],
                prev : prev,
                panel : panel,
                title : ele,
                index : index
            })

            $this.trigger(e)

            if (e.isDefaultPrevented()) return


            $navs.children('.active').removeClass('active')
            $contents.children('.active').removeClass('active')

            ele.addClass('active')
            panel.addClass('active in')

            // 选择后回调
            $this.trigger({
                type : 'selected.tc.tabs',
                relatedTarget : ele[0]
            })

            // 统计
            if (url = ele.attr('url')) {
                _hmt && _hmt.push(['_trackPageview', '/' + url])
            }
        }
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tc.tabs')

            if (!data)
                $this.data('tc.tabs', (data = new Tabs(this, option) ))
            if (typeof option === 'string')
                data[option](params)
        })
    }

    $.fn.tabs = Plugin;
    $.fn.tabs.Constructor = Tabs;

    var clickHandler = function (e) {
        e.preventDefault()
        var $this = $(this),
            $parent = $this.closest('.tomasky-ui-tabs'),
            index = $this.index()
        Plugin.call($parent, 'select', index)
    }

    // 绑定默认
    // ===================================
    $(document).on('click.tc.tabs', '[data-ui="tabs"] li', clickHandler)

}(jQuery);