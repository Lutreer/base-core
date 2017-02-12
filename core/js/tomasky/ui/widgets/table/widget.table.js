/**
 * tmsky.ui.table
 * Created by hai on 2015/12/11.
 */
(function (window, tmsky, undefined) {

    function Table(id) { // 创建table
        this.table = document.getElementById(id);
        this.switch_btns = $('.nav-tabs .nav', this.table);
        this.switch_tables = $('.tomasky-table-box', this.table);
        this.len = this.switch_btns.length;
        this.settings = { // table默认参数
            'tableTitle' : [],
            'showTable' : 0,
            'insert_into' : document,
            'tableUrls' : {},
            'types' : [],
            'arguments' : [],
            'originPage' : [0, 0],
            'tableNum' : 2,
            'tablesColsRows' : [],
            'getPage' : function () {
            }
        };
    }

    Table.newInstance = function (id) {
        return new Table(id)
    }

    Table.prototype = {
        constructor : Table,
        config : function (options) {
            extend(this.settings, options); // 配置table参数
            this.init(); // table的初使化
        },
        /**
         * table的初使化设置，若id存在，则将其里面的所有组件事件绑定 若id不存在，则创建一个table,并以此id为id
         */
        init : function () {
            if (this.table) {
                this.createTableBox(); // 创建新tableBox
            }
            this.createTable();
            this.showTable(this.settings.showTable); // 显示table页
            // this.getPageInfo(0,this.settings.arguments[0]); //显示第0页
            this.switch_btns[0].hasShow = 1;
            this.bindDOMEvent(); // 为table中的元素绑定事件
            this.setTitle(this.settings.tableTitle)
        },
        /**
         * 显示第n页时发生的变化
         */
        showTable : function (n) {
            // 切换按钮切换
            this.switch_btns.eq(n).addClass('active').siblings().removeClass('active');
            // 表格切换
            this.switch_tables.eq(n).show().siblings('.tomasky-table-box').hide();
        },
        /**
         * 为table内元素绑定事件
         */
        bindDOMEvent : function () {
            var This = this;
            // 点击下拉框，使其出现或消失
            $('.filter_box', this.table).on('click.tc.filterbox', function () {
                $(this).find('.filter').slideToggle();
            });
            // 点击下拉框里的内容，选中文字，下拉框消失
            $('.filter li', this.table).on('click.tc.filter.li', function () {
                $(this).parent().prev().html($(this).html());
            });
            // 点击切换按钮，切换页面
            this.switch_btns.each(function (i) {
                $(this).on('click.tc.switch', function () {
                    if (!this.hasShow) {
                        This.getPageInfo(i, This.settings.arguments[i]); // 显示第i页
                        this.hasShow = 1;
                    }
                    This.showTable(i);
                })
            });

            $(document).on('keydown.tc.switch', function (ev) {
                var ev = ev || window.event;
                if (ev.keyCode == 9) {
                    This.settings.showTable++;
                    This.settings.showTable = This.settings.showTable >= This.len ? 0 : This.settings.showTable;
                    This.showTable(This.settings.showTable);
                    return false;
                }
            });

        },
        createTableBox : function () {
            var html = '';
            for (var i = 0; i < this.settings.table_num; i++) {
            }
        },
        createTable : function () {
            // 判定有多少个table，为每个table创建thead和tbody
            for (var i = 0; i < this.settings.tablesColsRows.length; i++) {
                // 创建列
                var thead = '<thead><tr>';
                var tbody = '<tbody>';
                var row = '';
                for (var j = 0; j < this.settings.tablesColsRows[i][0]; j++) {
                    thead += '<th></th>';
                    row += '<td></td>';
                }
                for (var j = 0; j < this.settings.tablesColsRows[i][1]; j++) {
                    tbody += '<tr>' + row + '</tr>';
                }
                thead += '</tr></thead>';
                tbody += '</tbody>';
                $('table', this.switch_tables.eq(i)).html(thead + tbody);
            }
        },
        setTitle : function (array) {
            for (var i = 0; i < array.length; i++) {
                var aThs = $('thead th', this.switch_tables.eq(i));
                for (var j = 0; j < array[i].length; j++) {
                    aThs.eq(j).html(array[i][j]);
                }
            }
        },
        getPageInfo : function (i, data) {
            $.ajax({
                data : data,
                url : this.settings.tableUrls[i],
                type : this.settings.types[i],
                success : this.settings.getPage[i]
            })
        }
    };

    function extend(a, b) {
        for (var attr in b) {
            a[attr] = b[attr];
        }
    }

    //window.Table = Table;
    tmsky.extendUI({table : Table})

})(window, tmsky);

//$(function() {
//	var table_container = $('.tomasky-table-container');
//	for (var i = 0; i < table_container.length; i++) {
//		new tmsky.ui.table($(table_container.attr('id')));
//	}
//});