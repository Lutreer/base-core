/**
 * tmsky common js
 * Created by hai on 2015/11/27.
 */
(function (global) {
    var tmsky = tmsky || {},

        __toString = Object.prototype.toString;
    // hasOwnProperty = Object.prototype.hasOwnProperty,
    // push = Array.prototype.push,
    // slice = Array.prototype.slice,
    // indexOf = Array.prototype.indexOf;

    tmsky.version = '0.0.2';

    tmsky.noop = function () {
    };

    /**
     * 获取js对象类型
     * @param obj
     * @returns {*}
     */
    tmsky.type = function (obj) {
        var type;
        if (obj == null) {
            type = String(obj);
        } else {
            type = __toString.call(obj).toLowerCase();
            type = type.substring(8, type.length - 1);
        }
        return type;
    }

    /**
     * js对象扩展方法
     * @returns {*|{}}
     */
    tmsky.extend = function () {
        var src, options, name, copy, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i = 2;
        }
        if (typeof target !== "object" && !tmsky.isFunction(target)) {
            target = {};
        }
        // 默认扩展自身TC
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // 防止死循环
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && typeof copy === "object" && !copy.nodeTCype) {
                        if (tmsky.isArray(copy)) {
                            clone = src && tmsky.isArray(src) ? src : [];
                        } else {
                            clone = src && (typeof src === "object" && !src.nodeTCype) ? src : {};
                        }
                        target[name] = tmsky.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }

    /**
     * avalon 获取vm
     * @param name
     * @returns {*}
     */
    tmsky.getVm = function (name) {
        return avalon.vmodels[name];
    }

    tmsky.extendUI = function (obj) {
        if (tmsky.isEmptyObject(obj)) {
            return
        }
        tmsky.extend({ui : tmsky.ui || {}});
        if (obj.component) {
            if (!tmsky.ui.component) {
                tmsky.ui.component = {}
            }
            tmsky.extend(tmsky.ui.component, obj.component)
        } else {
            tmsky.extend(tmsky.ui, obj)
        }
    }

    // 暴露给全局变量
    global.tmsky = tmsky;

    // 脚本中的路径资源 标记作用 用于后期构建替换
    global.__uri = function (path) {
        return path
    }
    var _console = {
        log : function () {
        }
    }
    global.console = global.console || _console;

})(window);