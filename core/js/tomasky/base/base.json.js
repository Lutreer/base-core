/**
 * tmsky.json
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        json : {
            parse : function (str) {
                if (tmsky.isEmpty(str)) return {}
                var r = str
                try {
                    if (tmsky.isString(str)) r = JSON.parse(str)
                } catch (err) {
                    r = null
                    tmsky.log('tmsky.json.parse error: ')
                    tmsky.log(err)
                    tmsky.log("origin str: " + str)
                }
                return r || {}
            },
            stringify : function (obj) {
                if (tmsky.isEmpty(obj)) return ''
                var s = obj
                try {
                    if (tmsky.isObject(obj)) s = JSON.stringify(obj)
                } catch (err) {
                    s = null
                    tmsky.log('tmsky.json.stringify error: ')
                    tmsky.log(err)
                }
                return s || ''
            },
            //json convert 2 form data
            toForm : function (params, prefix) {
                if (!params) {
                    return;
                }

                params = typeof params == "string" ? JSON.parse(params) : params;
                var result = "";
                var isArr = function (obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                }
                var isObject = function (obj) {
                    return Object.prototype.toString.call(obj) === "[object Object]";
                }
                var arr2json = function (arr, prefix) {
                    var result = "";
                    prefix = prefix || "";
                    for (var i = 0, len = arr.length; i < len; i++) {
                        var curr = arr[i];
                        for (name in curr) {
                            var currPrefix = prefix + "[" + i + "].",
                                _curr = curr[name];
                            if (isArr(_curr)) {
                                result += arr2json(_curr, currPrefix + name);
                            } else if (isObject(_curr)) {
                                for (cname in _curr) {
                                    result += "&" + currPrefix + name + "." + cname + "=" + (_curr[cname] || '');
                                }
                            } else {
                                result += "&" + currPrefix + name + "=" + (curr[name] || '');
                            }
                        }
                    }
                    return result;
                }

                if (isArr(params)) {
                    result = arr2json(params, prefix || "params");
                } else {
                    for (name in params) {
                        if (isArr(params[name])) {
                            result += arr2json(params[name], name);
                        } else if (isObject(params[name])) {
                            var curr = params[name];
                            for (cname in curr) {
                                result += "&" + name + "." + cname + "=" + (curr[cname] || '');
                            }
                        } else {
                            result += "&" + name + "=" + (params[name] || '');
                        }
                    }
                }

                return result.substring(1);
            }
        }
    })
})(tmsky);