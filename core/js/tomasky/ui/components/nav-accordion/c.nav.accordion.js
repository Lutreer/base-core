/**
 * Created by hai on 2016/4/19.
 * c.nav.accordion
 */
(function () {
    var BindComponents = {
        accordion : {
            bind : function () {
                var $navAccordion = $('.tomasky-ui-nav-accordion .item-header a'),
                    $navAccordionItem = $('.tomasky-ui-nav-accordion .item'),
                    $navAccordionTargetItems = $('.tomasky-ui-nav-accordion .item a')

                $navAccordion.off().click(function (i, el) {
                    var $header = $(this).parent().parent(),
                        $body = $header.parent().find('.nav-accordion-body'),
                        hasSubItems = $body.length
                    if ($header.hasClass('active')) {
                        if (hasSubItems) {
                            $body.removeClass('show')
                            $header.removeClass('active')
                        }
                    } else {
                        if (!hasSubItems) {
                            $navAccordionItem.removeClass('active')
                            tmsky.ui.component.accordion.removeNotExistItemsNavClass($navAccordion)
                        }
                        if ($body.hasClass('show')) {
                            $header.removeClass('active')
                            $body.removeClass('show')
                        } else {
                            $header.addClass('active')
                            $body.addClass('show')
                        }
                    }
                })

                $navAccordionTargetItems.off().click(function () {
                    var $item = $(this).parent()
                    $navAccordionItem.removeClass('active')
                    $item.addClass('active')
                    $item.parent().parent().find('.item-header').addClass('active')
                    tmsky.ui.component.accordion.removeNotExistItemsNavClass($navAccordion)
                })

            },
            removeNotExistItemsNavClass : function ($navAccordion) {
                $navAccordion.each(function () {
                    var $header = $(this).parent().parent(),
                        $body = $header.parent().find('.nav-accordion-body'),
                        hasSubItems = $body.length
                    if (!hasSubItems) {
                        $header.removeClass('active')
                    }
                })
            },
            updateNavActive : function (hash) {
                if (tmsky.isEmpty(hash)) return
                $('.tomasky-ui-nav-accordion a[href="#!' + hash + '"]').click()
            }
        }
    }

    tmsky.extendUI({component : BindComponents})

})();

$(function () {
    tmsky.ui.component.accordion.bind()
});