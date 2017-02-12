/**
 * tmsky.ajax
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {

    function _serialize(obj, ret, namespace) {
        var hasOwnProperty = Object.prototype.hasOwnProperty, k, v

        namespace = namespace ? namespace + '.' : '';
        for (k in obj) {
            if (hasOwnProperty.call(obj, k)) {
                v = obj[k];
                if (tmsky.isArray(v)) {
                    v.forEach(function (el, i) {
                        _serialize(el, ret, namespace + k + '[' + i + ']')
                    });
                } else if (tmsky.type(v) === 'object') {
                    _serialize(v, ret, namespace + k)
                } else {
                    if (ret.constructor === jQuery)
                        $('<input/>').attr('name', namespace + k).val(v).appendTo(ret)
                    else
                        ret[namespace + k] = v
                }
            }
        }
    }

    tmsky.extend({
        ajax: {
            /**
             * form序列化
             * @param {Object} obj form对象
             * @param {String} namespace
             * @param ret {Object}
             *
             */
            serialize: function (obj, namespace, ret) {
                var hasOwnProperty = Object.prototype.hasOwnProperty,
                    ret = ret || {}, k, v

                namespace = namespace ? namespace + '.' : '';
                for (k in obj) {
                    if (hasOwnProperty.call(obj, k)) {
                        v = obj[k];
                        if (tmsky.isArray(v)) {
                            v.forEach(function (el, i) {
                                _serialize(el, ret, namespace + k + '[' + i + ']')
                            });
                        } else if (tmsky.type(v) === 'object') {
                            _serialize(v, ret, namespace + k)
                        } else {
                            if (ret.constructor === jQuery)
                                $('<input/>').attr('name', namespace + k).val(v).appendTo(ret)
                            else
                                ret[namespace + k] = v
                        }
                    }
                }

                return ret
            },
            /**
             * 获取form数据
             * @param form form表单对象|form jQuery对象|jQuery选择器字符串
             * @param toFormString 是否返回form字符串，默认返回json格式数据
             */
            formData: function (form, toFormString) {
                var data = null
                if (!tmsky.isEmpty(form)) {
                    toFormString = tmsky.isNull(toFormString) ? false : toFormString
                    form = tmsky.isString(form) ? $(form) : tmsky.isJquery(form) ? form : $(form)
                    var formString = form.serialize()
                    if (toFormString) {
                        return formString
                    }
                    if (!tmsky.isEmpty(formString)) {
                        data = {}
                        formString = formString.split('&')
                        formString.forEach(function (el) {
                            el = el.split('=')
                            data[el[0]] = el[1]
                        })
                    }
                }
                return data
            },
            /**
             * 模拟原生表单提交
             * @param url
             * @param method
             * @param data
             */
            formSubmit: function (url, method, data) {
                var $form = $('<form></form>', {
                    'method': method,
                    'action': url
                });
                _serialize(data, null, $form)
                $form.css('display', 'none').appendTo($('body')).submit() // ie 下必须插入文档后提交
            }
        }
    })
})(tmsky);