/**
 * tmsky.log
 * Created by hai on 2015/11/27.
 */
(function (tmsky, global) {
    var __TOMASKY_FE_LOGGER__ = {
        isDev : false,
        _console_ : global.console || {log : false},
        isLogable : function () {
            return __TOMASKY_FE_LOGGER__._console_.log && __TOMASKY_FE_LOGGER__.isDev
        },
        log : function (msg, newLine, tab) {
            if (__TOMASKY_FE_LOGGER__.isLogable()) {
                if (Object.prototype.toString.call(msg) == '[object Object]') {
                    try {
                        msg = JSON.stringify(msg)
                    } catch (err) {
                        msg = 'JSON stringify error.'
                    }
                }
                __TOMASKY_FE_LOGGER__._console_.log(msg)
                __TOMASKY_FE_LOGGER__.escapeCharacter('\n', newLine).escapeCharacter('\t', tab)
            }
            return __TOMASKY_FE_LOGGER__
        },
        disableLog : function () {
            __TOMASKY_FE_LOGGER__.isDev = false
        },
        enableLog : function () {
            __TOMASKY_FE_LOGGER__.isDev = true
        },
        getLogEnvFlag : function () {
            return __TOMASKY_FE_LOGGER__.isDev
        },
        escapeCharacter : function (character, num) {
            if (__TOMASKY_FE_LOGGER__.isLogable() && num && character) {
                if (Object.prototype.toString.call(num) == '[object Number]') {
                    num = num > 0 ? num : 1
                } else {
                    num = 1
                }
                var nls = []
                for (var i = 0; i < num; i++) {
                    nls.push(character)
                }
                __TOMASKY_FE_LOGGER__._console_.log(nls.join(''))
            }
            return __TOMASKY_FE_LOGGER__
        }
    }
    tmsky.extend({
        log : __TOMASKY_FE_LOGGER__.log,
        //escapeCharacter : __TOMASKY_FE_LOGGER__.escapeCharacter,
        disableLog : __TOMASKY_FE_LOGGER__.disableLog,
        enableLog : __TOMASKY_FE_LOGGER__.enableLog,
        getLogEnvFlag : __TOMASKY_FE_LOGGER__.getLogEnvFlag
    })
})(tmsky, window);