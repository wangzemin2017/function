// 使用纯js封装的简易缓动动画函数

function animate(obj, target){
	clearInterval(obj.timer);
	var step = 0;
	obj.timer = setInterval(function(){
		step = (target - obj.offsetLeft) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		obj.style.left = obj.offsetLeft + step + "px";
		if( target == obj.offsetLeft){
			clearInterval(obj.timer);
		}
	},20); 
}