/**
 * tmsky.number
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        number : {
            /**
             * 数字格式化
             *
             * @param num [数字]
             * @param pattern # , 0 [模式] tmsky.numberFmt(12345.00, '#,###.00') 12,345.00 tmsky.numberFmt(12345.00, '#,###.##') 12,345 tmsky.numberFmt(12345.006) 12345
             */
            format : function (num, pattern) {
                var strArr = num ? String(num).split('.') : [0],
                    fmtArr = pattern ? String(pattern).split('.') : [''],
                    ret = '';
                // 整数部分
                var str = strArr[0],
                    fmt = fmtArr[0],
                    i = str.length - 1,
                    comma = false;
                for (var j = fmt.length - 1; j >= 0; j--) {
                    switch (fmt.substr(j, 1)) {
                        case '#':
                            if (i >= 0)
                                ret = str.substr(i--, 1) + ret;
                            break;
                        case '0':
                            if (i >= 0)
                                ret = str.substr(i--, 1) + ret;
                            else
                                ret = '0' + ret;
                            break;
                        case ',':
                            comma = true;
                            ret = ',' + ret;
                            break;
                    }
                }
                if (i >= 0) {
                    if (comma) {
                        var len = str.length;
                        for (; i >= 0; i--) {
                            ret = str.substr(i, 1) + ret;
                            if (i > 0 && (len - i) % 3 === 0)
                                ret = ',' + ret;
                        }

                    } else
                        ret = str.substr(0, i + 1) + ret;
                }
                ret += '.';
                // 小数部分
                str = strArr.length > 1 ? strArr[1] : '';
                fmt = fmtArr.length > 1 ? fmtArr[1] : '';
                i = 0;
                for (var j = 0; j < fmt.length; j++) {
                    switch (fmt.substr(j, 1)) {
                        case '#':
                            if (i < str.length)
                                ret += str.substr(i++, 1);
                            break;
                        case '0':
                            if (i < str.length)
                                ret += str.substr(i++, 1);
                            else
                                ret += '0';
                            break;
                    }
                }
                return ret.replace(/^,+/, '').replace(/\.$/, '')
            },
            /**
             * 去除非数字字符
             *
             * @param str [description]
             * @param strict [description]
             * @return [description]
             */
            filt : function (str, strict) {
                var rg = /[^\d\.]+/g

                str = str || str + ''
                if (strict) {
                    rg = /[^\d]+/g
                }
                return str.replace(rg, '')
            },
            /**
             * 精度保留
             * @param {Number} n 数值
             * @param {Number} [precision] 精度|默认：2
             * @returns {*}
             */
            toFixed : function (n, precision) {
                if (!n || isNaN(n))
                    return 0;
                return new Number(n).toFixed(precision || 2);
            },
            fixFloat : function (number, num, def) {
                if (tmsky.isEmpty(number)) {
                    return (tmsky.isEmpty(def)) ? '' : def;
                }
                if (parseInt(number) == number) {
                    return number;
                }
                return parseFloat(parseFloat(number).toFixed(num));
            }
        }
    })
})(tmsky);