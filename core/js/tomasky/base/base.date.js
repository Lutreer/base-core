/**
 * tmsky.date
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    var _Seconds = 1000,
        _Minute = 60 * _Seconds,
        _Houre = 60 * _Minute,
        _Day = 24 * _Houre,
        _Week = 7 * _Day,
        _Week_Name = ['日', '一', '二', '三', '四', '五', '六'],
        DATCE_TCYPE = {
            y : 'FullYear',
            M : 'Month',
            d : 'Date',
            h : 'Hours',
            w : 'Week',
            m : 'Minutes',
            s : 'Seconds',
            S : 'Milliseconds'
        },
        _holiday = {
            lunarInfo : [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0],
            sTermInfo : [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758],
            solarTerm : new Array("", "", "", "", "", "", "清明", "", "", "", "", "", "", "", "立秋", "", "", "", "", "", "立冬", "", "", "冬至"),
            lFtv : new Array("0101*春节", "0115 元宵", "0505 端午", "0707 七夕", "0715 中元", "0815 中秋", "0909 重阳", "1208 腊八", "1224 小年", "0100*除夕"),
            sFtv : new Array("0101*元旦", "0214 情人", "0308 妇女", "0401 愚人", "0501 劳动", "0504 青年", "0601 儿童", "0910 教师", "1001*国庆", "1224 平安", "1225 圣诞"),
            Lunar : function (objDate) {
                var returndata = {};
                var i,
                    leap = 0,
                    temp = 0
                var baseDate = new Date(1900, 0, 31)
                var offset = (objDate - baseDate) / 86400000

                returndata.dayCyl = offset + 40
                returndata.monCyl = 14

                for (i = 1900; i < 2050 && offset > 0; i++) {
                    temp = this.lYearDays(i)
                    offset -= temp
                    returndata.monCyl += 12
                }
                if (offset < 0) {
                    offset += temp;
                    i--;
                    returndata.monCyl -= 12
                }

                returndata.year = i
                returndata.yearCyl = i - 1864

                leap = this.leapMonth(i) // 闰哪个月
                returndata.isLeap = false

                for (i = 1; i < 13 && offset > 0; i++) {
                    // 闰月
                    if (leap > 0 && i == (leap + 1) && returndata.isLeap == false) {
                        --i;
                        returndata.isLeap = true;
                        temp = this.leapDays(returndata.year);
                    } else {
                        temp = this.monthDays(returndata.year, i);
                    }

                    // 解除闰月
                    if (returndata.isLeap == true && i == (leap + 1))
                        returndata.isLeap = false

                    offset -= temp
                    if (returndata.isLeap == false)
                        returndata.monCyl++
                }

                if (offset == 0 && leap > 0 && i == leap + 1)
                    if (returndata.isLeap) {
                        returndata.isLeap = false;
                    } else {
                        returndata.isLeap = true;
                        --i;
                        --returndata.monCyl;
                    }

                if (offset < 0) {
                    offset += temp;
                    --i;
                    --returndata.monCyl;
                }
                returndata.month = i
                returndata.day = offset + 1
                return returndata;

            },
            getHoliday : function (date) {
                var sDObj = tmsky.date.date(date);
                var lDObj = this.Lunar(sDObj);
                var lDPOS = new Array(3);
                var SY = sDObj.getFullYear();
                var SM = sDObj.getMonth();
                var SD = sDObj.getDate();
                var festival = '',
                    solarTerms = '',
                    solarFestival = '',
                    lunarFestival = '', tmp1, tmp2;
                // 农历节日
                var lFtv = this.lFtv;
                var sFtv = this.sFtv;
                for (i in lFtv)
                    if (lFtv.hasOwnProperty(i) && lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                        tmp1 = Number(RegExp.$1) - lDObj.month
                        tmp2 = Number(RegExp.$2) - parseInt(lDObj.day)
                        if (tmp1 == 0 && tmp2 == 0)
                            lunarFestival = RegExp.$4
                    }
                // 国历节日
                for (i in sFtv)
                    if (sFtv.hasOwnProperty(i) && sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
                        tmp1 = Number(RegExp.$1) - (SM + 1)
                        tmp2 = Number(RegExp.$2) - SD
                        if (tmp1 == 0 && tmp2 == 0)
                            solarFestival = RegExp.$4
                    }
                // 节气
                tmp1 = new Date((31556925974.7 * (SY - 1900) + this.sTermInfo[SM * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
                tmp2 = tmp1.getUTCDate()
                if (tmp2 == SD)
                    solarTerms = this.solarTerm[SM * 2 + 1]
                tmp1 = new Date((31556925974.7 * (SY - 1900) + this.sTermInfo[SM * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
                tmp2 = tmp1.getUTCDate()
                if (tmp2 == SD)
                    solarTerms = this.solarTerm[SM * 2]

                if (solarTerms == '' && solarFestival == '' && lunarFestival == '')
                    festival = '';
                else
                    festival = solarTerms + solarFestival + lunarFestival;

                return festival;
            },
            lYearDays : function (y) {
                var i,
                    sum = 348
                for (i = 0x8000; i > 0x8; i >>= 1)
                    sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0
                return (sum + this.leapDays(y))
            },
            leapDays : function (y) {
                if (this.leapMonth(y))
                    return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
                else
                    return (0)
            },
            // ==== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
            leapMonth : function (y) {
                return (this.lunarInfo[y - 1900] & 0xf)
            },
            // ====================================== 传回农历 y年m月的总天数
            monthDays : function (y, m) {
                return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)
            }
        }

    tmsky.extend({
        date : {
            __FIELDS__ : {
                FORMAT : {
                    DATE : 'yyyy-MM-dd',
                    TIME : 'HH:mm:ss',
                    DATE_TIME : 'yyyy-MM-dd HH:mm:ss',
                    DATE_TIME_S : 'yyyy-MM-dd HH:mm:ss.SSS'
                },
                TIME : {
                    SECONDS : _Seconds,
                    MINUTE : _Minute,
                    HOURS : _Houre,
                    DAY : _Day,
                    WEEK : _Week
                }
            },
            getFormat : function (fmt) {
                if (fmt) {
                    fmt = typeof fmt === 'string' ? fmt : this.__FIELDS__.FORMAT.DATE
                } else {
                    fmt = null
                }
                return fmt
            },
            // 生成日期
            date : function (arg) {
                if (!arg)
                    return new Date();
                if (typeof arg === 'string') {
                    arg = arg.replace(/-/g, "/");
                    return new Date(arg);
                }
                return tmsky.isDate(arg) ? arg : new Date(arg)
            },
            yesterday : function (fmt) {
                var d = this.plusDate(new Date(), -1, DATCE_TCYPE.d)
                return fmt ? this.format(d, this.getFormat(fmt)) : d
            },
            // 今天日期字符
            today : function () {
                return this.format(new Date())
            },
            tomorrow : function (fmt) {
                var d = this.plusDate(new Date(), 1, DATCE_TCYPE.d)
                return fmt ? this.format(d, this.getFormat(fmt)) : d
            },
            parse : function (s) {
                return tmsky.isDate(s) ? s : new Date(Date.parse(s))
            },
            getWeek : function (date) {
                return _Week_Name[this.date(date).getDay()]
            },
            // 获取节日（包括阴历）
            getHoliday : function () {
                return _holiday.getHoliday.apply(_holiday, arguments)
            },
            getDayOfWeek : function (sDate) {
                var nWeek = null
                var oDate = new Date(sDate.replace(/-/g, "/"));
                nWeek = oDate.getDay();
                nWeek = (nWeek === 0) ? 7 : nWeek;
                return nWeek;
            },
            // 返回传入日期为星期几（星期一到星期日 分别为一---日）
            getDayOfWeekName : function (nDayOfWeek) {
                var index = 0;
                if (typeof nDayOfWeek == "string") {
                    index = Number(nDayOfWeek);
                } else {
                    index = nDayOfWeek;
                }
                var weekDays = ["一", "二", "三", "四", "五", "六", "日"];
                return weekDays[index - 1];
            },
            // 日期格式化
            format : function (d, fmt) {
                if (!tmsky.isDate(d))
                    d = new Date(d)
                var o = {
                    "M+" : d.getMonth() + 1, // 月份
                    "d+" : d.getDate(), // 日
                    "h+" : d.getHours(), // 小时
                    "m+" : d.getMinutes(), // 分
                    "s+" : d.getSeconds(), // 秒
                    "q+" : Math.floor((d.getMonth() + 3) / 3), // 季度
                    "S" : d.getMilliseconds() // 毫秒
                };
                fmt = fmt || this.__FIELDS__.FORMAT.DATE;
                fmt = fmt === true ? this.__FIELDS__.FORMAT.DATE : fmt
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            },
            /**
             * 指定日期加上 xx日期单位 后的日期
             *
             * @param date 日期或日期字符串(String|Date)
             * @param type [日期类型 | 默认为 天 'd'] 具体看 DATCE_TCYPE
             * @param num 向后几日期单位 默认为 1
             * @param fmt 格式化
             * @return Date新对象
             */
            plusDate : function (date, num, type, fmt) {
                if (date) {
                    num = num == null ? 1 : +num;
                    type = type ? type.length === 1 ? DATCE_TCYPE[type] : type : DATCE_TCYPE.d;
                    var d = this.date(date),
                        setter = 'set' + type,
                        getter = 'get' + type;
                    if (DATCE_TCYPE.w === type) {
                        d.setDate(d.getDate() + num * 7);
                    } else {
                        d[setter](d[getter]() + num);
                    }
                    if (fmt)
                        return this.format(d, tmsky.isBoolean(fmt) ? this.__FIELDS__.FORMAT.DATE : fmt)
                    return d;
                }
            },
            /**
             * 获取 结束日期 与开始日期 的差值（可能为负值）
             *
             * @param start [开始日期]
             * @param finish [结束日期]
             * @param type [差值类型 | 默认为 天] type值如：'d', 'y' 'M'....
             * @return [差值]
             */
            getDatePeriod : function (start, finish, type) {
                var start = this.date(start);
                var finish = this.date(finish);
                switch (type) {
                    case 'y':
                        return finish.getFullYear() - start.getFullYear();
                    case 'M':
                        return (finish.getFullYear() - start.getFullYear()) * 12 + (finish.getMonth() - start.getMonth());
                    case 'w':
                        return Math.floor((finish * 1 - start * 1) / _Day / 7);
                    case 'h':
                        return Math.floor((finish * 1 - start * 1) / _Houre);
                    case 'm':
                        return Math.floor((finish * 1 - start * 1) / 60 / 1000);
                    case 's':
                        return Math.floor((finish * 1 - start * 1) / 1000);
                    case 'S':
                        return Math.floor((finish * 1 - start * 1));
                    default:
                        return Math.floor((finish * 1 - start * 1) / _Day);
                }
            },
            /**
             * 获取某月的最后一天， date : 某月的一天
             */
            getLastDayOfMon : function (date) {
                date = typeof date == 'string' ? new Date(date.replace(/-/g, "/")) : date;
                var nextMon = tmsky.date.addMonths(date, 1);
                var lastday = new Date(nextMon.getTime() - this.__FIELDS__.TIME.DAY);
                return tmsky.date.format(lastday);
            },
            equals : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) == 0 : false
            },
            after : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) < 0 : false
            },
            before : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) > 0 : false
            },
            prevDate : function (date, fmt) {
                return date ? tmsky.date.addDays(date, -1, fmt) : tmsky.date.yesterday(fmt)
            },
            nextDate : function (date, fmt) {
                return date ? tmsky.date.addDays(date, 1, fmt) : tmsky.date.tomorrow(fmt)
            },
            getToMonthsEnd : function (date) {
                var tmpDate = this.date(date);
                var toDate = this.addMonths(tmpDate, 1);
                var days = this.diffDays(tmpDate, toDate);
                var tmp = this.format(tmpDate, "yyyy-MM");
                toDate = tmp + "-" + days;
                return toDate;
            },
            addMinutes : function (date, minutes, fmt) {
                return this.plusDate(date, minutes, DATCE_TCYPE.m, this.getFormat(fmt))
            },
            addHours : function (date, hours, fmt) {
                return this.plusDate(date, hours, DATCE_TCYPE.h, this.getFormat(fmt))
            },
            addDays : function (date, days, fmt) {
                return this.plusDate(date, days, DATCE_TCYPE.d, this.getFormat(fmt))
            },
            addWeeks : function (d1, weeks, fmt) {
                return this.plusDate(date, weeks, DATCE_TCYPE.w, this.getFormat(fmt))
            },
            addMonths : function (date, months, fmt) {
                return this.plusDate(date, months, DATCE_TCYPE.M, this.getFormat(fmt))
            },
            addQuarters : function (date, q, fmt) {
                return this.plusDate(date, q * 4, DATCE_TCYPE.M, this.getFormat(fmt))
            },
            addYears : function (date, years, fmt) {
                return this.plusDate(date, years, DATCE_TCYPE.y, this.getFormat(fmt))
            },
            diffTime : function (d1, d2, unit) {
                d1 = this.parse(d1)
                d2 = this.parse(d2)
                var t1 = d1.getTime(), t2 = d2.getTime(), diffTime = t2 - t1
                return unit ? diffTime / unit : diffTime
            },
            diffSeconds : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.SECONDS)
            },
            diffMinutes : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.MINUTE)
            },
            diffHours : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.HOURS)
            },
            diffDays : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.DAY)
            },
            getDiffDays : function (date1, date2, resultType, dataType, join) {
                var rt = !resultType ? 'string' : resultType, dt = !dataType ? 'string' : (('date' == dataType && 'string' == resultType) ? 'string' : dataType);
                var d1t = typeof date1 == 'string', d2t = typeof date2 == 'string';
                var d1 = d1t ? new Date(date1.replace(/-/g, '/')) : date1, d2 = d2t ? new Date(date2.replace(/-/g, '/')) : date2;
                var diffDay = this.diffDays(d1, d2);
                if (diffDay == 0) {
                    return rt == 'string' ? (d1t ? date1 : tmsky.Date.format(date1)) : ([dt == 'string' ? (d1t ? date1 : tmsky.Date.format(date1)) : (d1t ? d1 : date1)]);
                }
                var addDay = diffDay > 0 ? 1 : -1, dateArr = [], addDate = null;
                dateArr.push(d1);
                for (var i = 1; i <= diffDay; i++) {
                    addDate = new Date();
                    addDate.setDate(d1.getDate() + i * addDay);
                    dateArr.push(addDate);
                }
                if (rt == 'string') {
                    return this.convertDateToString(dateArr).join(join || ',');
                }
                if (dt == 'string') {
                    return this.convertDateToString(dateArr);
                }
                return dateArr;
            },
            isBetween : function (sDate, sBegin, sEnd) {
                if (this.diffDays(sBegin, sDate) < 0 || this.diffDays(sEnd, sDate) > 0) {
                    return false;
                }
                return true;
            },
            convertDateToString : function (dateArr, format) {
                var result = [],
                    f = tmsky.isNull(format) ? this.__FIELDS__.FORMAT.DATE : format;
                for (var i = 0; i < dateArr.length; i++) {
                    result.push(dateArr[i].format(f));
                }
                return result;
            }
        }
    })
})(tmsky);