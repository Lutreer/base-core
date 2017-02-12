;
!function ($) {
    'use strict';
    var flag = '[data-ui="popups"]';
    var Popups = function (element, options) {
        this.options = options
        this.$element = $(element)
        this.isShown = false
        this.$backdrop = null
    }

    Popups.VERSION = '0.0.1'

    Popups.DEFAULTS = {
        backdrop : true
    }

    Popups.prototype.show = function (_relatedTarget) {
        var e = $.Event('show.tc.popups', {
            relatedTarget : _relatedTarget
        })

        this.$element && this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented())
            return;

        this.isShown = true
        this.$element.on('click.dismiss.tc.popups', '[data-dismiss="popups"]', $.proxy(this.hide, this))
        this.backdrop()
        this.$element.show().css('visibility', 'visible');

        e = $.Event('shown.tc.popups', {
            relatedTarget : _relatedTarget
        })
        this.$element.trigger(e)
    }

    Popups.prototype.justshow = function () {
        this.isShown = true
        this.$element.on('click.dismiss.tc.popups', '[data-dismiss="popups"]', $.proxy(this.hide, this))
        this.backdrop()
        this.$element.show().css('visibility', 'visible');
    }

    Popups.prototype.hide = function (e) {
        e = $.Event('hide.tc.popups')
        this.$element && this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented())
            return;

        this.$element.hide().off('click.dismiss.tc.popups')
        this.isShown = false

        e = $.Event('hiden.tc.popups')
        this.$element.trigger(e)
    }

    Popups.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Popups.prototype.backdrop = function () {
        if (!this.options.backdrop) {
            this.removeBackdrop()
            return;
        }
        if (!this.$backdrop && this.options.backdrop) {
            this.$backdrop = $('<div class="tomasky-ui-popups-backdrop" />').prependTo(this.$element)
            // 覆盖指定区域
            if (this.options.scope) {
                var scope = this.options.scope
                if (!$(scope).length)
                    return;
                var $scope = $(scope), pos = $scope.position(), w = $scope.width(), h = $scope.height();
                this.$backdrop.css({
                    top : pos.top,
                    left : pos.left,
                    bottom : 'auto',
                    right : 'auto',
                    width : w,
                    height : h
                })
            }
        }
    }

    Popups.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('tc.popups')
            var options = $.extend({}, Popups.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data)
                $this.data('tc.popups', (data = new Popups(this, options)))
            if (typeof option === 'string')
                data[option](params)
            else
                data.show(params)
        });
    }

    $.fn.popups = Plugin;
    $.fn.popups.Constructor = Popups;

    // 绑定默认
    // ===================================
    $(document).on('click.tc.popups', flag, function (e) {
        var $this = $(this)
        var $target = $($this.attr('data-target'))
        var option = $target.data() || 'toggle'
        if ($this.is('a'))
            e.preventDefault()
        Plugin.call($target, option, this)
    });
}(jQuery);