/**
 * tmsky.cipher js文本加密 hai
 * dependences:[tmsky.string2unicode|tmsky.unicode2string]
 * Created by hai on 2015/12/10.
 */
(function (tmsky) {
    tmsky.extend({
        cipher : {
            encrypt : function (data, options) {
                if (data) {
                    data = !tmsky.isString(data) ? tmsky.json.stringify(data) : data
                    options = this.getOptions(options)
                    if (options.reverse) {
                        data = data.split('').reverse().join('')
                    }
                    if (options.toHex) {
                        data = tmsky.util.string2unicode(data)
                    }
                    if (options.encodeURIComponent) {
                        data = encodeURIComponent(data)
                    }
                }
                return data || ''
            },
            decrypt : function (data, options) {
                if (data) {
                    data = !tmsky.isString(data) ? tmsky.json.stringify(data) : data
                    options = this.getOptions(options)
                    if (options.encodeURIComponent) {
                        data = decodeURIComponent(data)
                    }
                    if (options.toHex) {
                        if (data.charAt(0) == '"') {
                            data = data.substring(1)
                        }
                        if (data.charAt(data.length - 1) == '"') {
                            data = data.substring(0, data.length - 1)
                        }
                        data = tmsky.util.unicode2string(data)
                    }
                    if (options.reverse) {
                        data = data.split('').reverse().join('')
                    }
                }
                return data || ''
            },
            getOptions : function (options) {
                options = $.extend({}, {
                    reverse : true,
                    toHex : true,
                    encodeURIComponent : true
                }, options)
                return options
            },
            cache : function (key, data, options) {
                localStorage.setItem(key, tmsky.ENCRYPT_FLAG.CACHE.LOCALSTORAGE ? this.encrypt(data, options) : data)
            },
            getFromCache : function (key, options) {
                var cache = localStorage.getItem(key)
                if (cache) {
                    cache = tmsky.ENCRYPT_FLAG.CACHE.LOCALSTORAGE ? this.decrypt(cache, options) : cache
                    cache = tmsky.json.parse(cache, false)
                }
                return cache
            }
        }
    })
})(tmsky);