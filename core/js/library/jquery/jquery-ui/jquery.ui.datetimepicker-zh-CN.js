/*! jQuery UI - v1.10.3 - 2013-06-12
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e) {
	$.timepicker.regional['zh-CN'] = {
		currentText: '现在',
		closeText: '确定',
		clearText: '清空',
		controlType: 'slider',
		timeOnlyTitle: '请选择时间',
		timeText: '时间：',
		hourText: '小时',
		minuteText: '分钟',
		secondText: '秒',
		millisecText: '666',
		timezoneText: '777',
		timeFormat: 'HH:mm',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		isRTL: false
	};
    $.timepicker.setDefaults($.timepicker.regional['zh-CN']);
});