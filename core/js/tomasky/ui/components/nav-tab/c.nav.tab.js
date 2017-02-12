/**
 * Created by hai on 2015/12/30.
 */
(function () {
    var BindComponents = {
        navTab : {
            bind : function (cb) {
                $('.nav-tabs .nav').click(function () {
                    var $this = $(this)
                    $this.closest('.nav-tabs').find('.nav').each(function () {
                        $(this).removeClass('active')
                    })
                    $this.addClass('active')
                    tmsky.ui.component.navTab.fire(cb, $this)
                })
            },
            fire : function (cb, $nav) {
                if (cb && tmsky.isFunction(cb)) {
                    cb($nav)
                }
            }
        }
    }

    tmsky.extendUI({component : BindComponents})

})();

$(function () {
    tmsky.ui.component.navTab.bind()
});