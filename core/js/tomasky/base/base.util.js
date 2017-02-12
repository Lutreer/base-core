/**
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        util: {
            timestampUrl: function (url, params) {
                url = url || ''
                var c = 0
                if (!tmsky.isEmpty(params)) {
                    for (name in params) {
                        url += (c > 0 ? '&' : '?') + name + '=' + params[name]
                        c++
                    }
                }
                return url + (c > 0 ? '&' : '?') + 'temp=' + new Date().getTime()
            },
            generateUrlEndStr: function () {
                return '?temp=' + new Date().getTime()
            },
            urlParams: function () {
                //var params = {}, searchs = location.search
                //if (searchs) {
                //    searchs = searchs.substring(1)
                //    if (searchs) {
                //        searchs = searchs.split('&')
                //        for (i in searchs) {
                //            var curr = searchs[i].split('=')
                //            params[curr[0]] = curr[1]
                //        }
                //    }
                //}
                //return params
                return tmsky.location.params
            },
            /**
             * 字符编码
             * @param str
             * @param num 进制单位。默认转16进制
             * @returns {string}
             */
            string2unicode: function (str, num) {
                var arr = []
                if (str) {
                    num = num || 16
                    arr.push(str.charCodeAt(0).toString(num))
                    for (var i = 1, len = str.length; i < len; i++) {
                        arr.push(',' + str.charCodeAt(i).toString(num))
                    }
                }
                return arr.join('')
            },
            /**
             * 字符解码。默认解16进制
             * @param str
             * @param num 进制单位。默认转16进制
             * @returns {string}
             */
            unicode2string: function (str, num) {
                var arr = []
                if (str) {
                    num = num || 16
                    str = str.split(',')
                    for (var i = 0, len = str.length; i < len; i++) {
                        arr.push(String.fromCharCode(parseInt(str[i], num)))
                    }
                }
                return arr.join('')
            },

            /**
             * js copy 字符串到系统剪切板
             * @param str
             * @return Boolean
             */
            copy2Clipboard: function(str) {
                var text=str.toString()
                if(!copy2ClipboardB(text)){
                    copy2ClipboardA(text)
                } else{
                    //console.log("Copy to clipboard success")
                    return true
                }

                //IE9+ chrome safari
                function copy2ClipboardB(text) {
                    if (window.clipboardData && window.clipboardData.setData) {
                        clipboardData.setData("Text", text)
                        return true
                    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                        var textarea = document.createElement("textarea")
                        textarea.textContent = text
                        textarea.style.position = "fixed"
                        textarea.style.top = "-1000px"
                        document.body.appendChild(textarea)
                        textarea.select()
                        try {
                            document.execCommand("copy")
                            return true
                            //console.warn("Copy to clipboard success.", ex)
                        } catch (ex) {
                            //console.warn("Copy to clipboard failed.", ex)
                            return false
                        } finally {
                            document.body.removeChild(textarea)
                        }
                    }
                }

                //firefox
                function copy2ClipboardA(txt) {
                    if(navigator.userAgent.indexOf("Opera")!=-1){
                        window.location=txt
                        return true
                    } else if(window.netscape){
                        try{
                            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                        } catch(e){
                            //alert("您的浏览器的安全限制限制您进行剪贴板操作！")
                            return false
                        }
                        var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard)
                        if(!clip) return false
                        var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable)
                        if(!trans) return false
                        trans.addDataFlavor('text/unicode')
                        var str=new Object()
                        var len=new Object()
                        var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString)
                        var copytext=txt
                        str.data=copytext
                        trans.setTransferData("text/unicode",str,copytext.length*2)
                        var clipid=Components.interfaces.nsIClipboard
                        if(!clip) return false
                        clip.setData(trans,null,clipid.kGlobalClipboard)
                        return true
                    }
                }
            }

        }
    })
})(tmsky);