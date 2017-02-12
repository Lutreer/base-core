/**
 * tmsky.array
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {

    tmsky.extend({
        array : {
            /**
             * 据值获取索引
             * @param arr
             * @param value
             * @returns {number}
             */
            getIndexByUniqueValue : function (arr, value) {
                var index = -1;
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] == value) {
                        index = i;
                        break;
                    }
                }
                return index;
            },
            /**
             * 去重
             * @param arr
             * @returns {*}
             */
            distinct : function (arr) {
                if (!arr.length) {
                    return arr;
                }
                var self = arr, first = arr[0];
                var _t = arr.concat().sort();
                _t.sort(function (a, b) {
                    if (a == b) {
                        self.splice(self.indexOf(a), 1);
                    }
                });
                if (!self.length) {
                    self.push(first);
                }
                return self;
            },
            /**
             * 递归连接，目前最多支持三级子元素数组即四维数组形式
             * @param {Array} arr 原始数组
             * @param {String} join 最终连接符
             * @param {String} oneJoin 二维数组连接符
             * @param {String} twoJoin 三维数组连接符
             * @param {String} threeJoin 四维数组连接符
             * @returns {*|string}
             */
            joinAll : function (arr, join, oneJoin, twoJoin, threeJoin) {
                for (var i = 0; i < arr.length; i++) {
                    var _i = arr[i];
                    if (tmsky.isArray(_i)) {// 第一层数组子元素
                        for (var j = 0; j < _i.length; j++) {
                            var _j = _i[j];
                            if (tmsky.isArray(_j)) {// 第二层数组子元素
                                for (var k = 0; k < _j.length; k++) {
                                    var _k = _j[k];
                                    if (tmsky.isArray(_k)) {// 第三层数组子元素，不再深入
                                        _j[k] = _k.join(threeJoin);
                                    }
                                }
                                _i[j] = _j.join(twoJoin);
                            }
                        }
                        arr[i] = _i.join(oneJoin);
                    }
                }
                return arr.join(join || ',');
            }
        }
    });
})(tmsky);