/**
 * tmsky.browser
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        browser : {
            isFromMobile : function () {
                var sUserAgent = navigator.userAgent.toLowerCase(),
                    bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
                    bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
                    bIsMidp = sUserAgent.match(/midp/i) == "midp",
                    bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
                    bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
                    bIsAndroid = sUserAgent.match(/android/i) == "android",
                    bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
                    bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
            },
            isFromWx : function () {
                var ua = window.navigator.userAgent.toLowerCase(),
                    matchs = ua.match(/MicroMessenger/i);
                return matchs && matchs == 'micromessenger'
            },
            getWxVersion : function () {
                var ua = window.navigator.userAgent.toLowerCase(),
                    matchs = ua.match(/(MicroMessenger\/([0-9.]+))\s*/i);
                return matchs && matchs[2];
            }
        }
    })
})(tmsky);