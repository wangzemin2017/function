// 封装的兼容多版本浏览器的返回顶部(或最左边)函数

function scroll(){
	//IE9+及正常浏览器
	if( window.pageYOffset !== null ){
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		};
	}
	//标准模式的浏览器
	else if( document.compatMode === "CSS1Compat" ){
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		};
	}
	//怪异模式的浏览器（未申明DTD）
	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft
	};
}