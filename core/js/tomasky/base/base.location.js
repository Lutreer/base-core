/**
 * Created by hai on 2016/2/22.
 */
(function (tmsky, global) {
    var _location_ = {
        hash : function () {
            var i = global.location.href.indexOf('#'),
                hash = ''
            if (i != -1) {
                hash = global.location.href.substr(i)
                var searchIndex = hash.indexOf('?')
                if (searchIndex != -1) {
                    hash = hash.substr(0, searchIndex)
                }
            }
            return hash
        },
        search : function () {
            var href = global.location.href,
                searchIndex = href.indexOf('?'),
                search = ''
            if (searchIndex != -1) {
                search = href.substr(searchIndex)
                var hashIndex = search.indexOf('#')
                if (hashIndex != -1) {
                    search = search.substr(0, hashIndex)
                }
            }
            return search && decodeURIComponent(search)
        },
        values : function () {
            return {
                hash : this.hash(),
                host : global.location.host,
                hastname : global.location.hastname,
                href : global.location.href,
                pathname : global.location.pathname,
                port : global.location.port,
                protocol : global.location.protocol,
                search : this.search()
            }
        },
        prams : function () {
            var params = {}, searchs = this.search()
            if (searchs) {
                searchs = searchs.substring(1)
                if (searchs) {
                    searchs = searchs.split('&')
                    for (i in searchs) {
                        var curr = searchs[i].split('=')
                        params[curr[0]] = curr[1]
                    }
                }
            }
            return params
        },
        /**
         * 转换为url并请求，若只获取url不请求直接访问tmsky.location.values.href
         * @param params 附加参数，非必须
         * 格式：
         * {
         *     key:value
         *     ...
         * }
         * 对于相同键值处理方式为覆盖
         * @returns {*}
         */
        toString : function (params) {
            var values = this.values,
                href = values.protocol + '//' + values.host + values.pathname
            if (values.search || !tmsky.isEmptyObject(params)) {
                params = $.extend({}, this.params, params)
                var c = 0
                for (name in params) {
                    href += (c == 0 ? '?' : '&') + name + '=' + params[name]
                    c++
                }
            }
            if (values.hash) {
                href += values.hash
            }
            global.location.href = href
        },
        appendParams : function (url, params) {
            if (tmsky.isEmpty(url) || tmsky.isEmptyObject(params)) {
                return ''
            }
            var c = 0
            for (name in params) {
                url += (c == 0 ? '?' : '&') + name + '=' + params[name]
                c++
            }
            return url
        }
    }
    tmsky.extend({
        location : {
            values : _location_.values(),
            params : _location_.prams(),
            appendParams : _location_.appendParams,
            toString : _location_.toString
        }
    })
})(tmsky, window);