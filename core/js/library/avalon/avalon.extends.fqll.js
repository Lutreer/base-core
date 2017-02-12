;(function(avl){
	var filters={
		toInt: function(num, opr){
			return numFormat(num, opr)
		},
		toFixed: function(num, precision){
			if (!num || isNaN(num))
				return 0;
			return new Number(num).toFixed(precision || 2);
		}
	}
	
	function numFormat(num, opr){
		if(!num){
			return
		}
		if(!opr){
			var n=num + ''
			return n.substring(0,n.indexOf('.'));
		}
		return Math[opr].call(this, num);
	}
	
	extendsAvalon(avl.filters, filters);
})(avalon);

function extendsAvalon(avl, exts){
	if(!exts){
		return
	}
	for(name in exts){
		avl[name]=exts[name]
	}
}