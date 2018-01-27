onload=function() {
	var circleBox=[];
	var canvas=document.getElementById('circle');
	var circle=canvas.getContext('2d');
	var width=canvas.width;
	var height=canvas.height;
	var endAngle=Math.PI*2;
	var antiClockWise=false;
	function circleAnimate() {
		circle.clearRect(0,0,width,height);
		for(var i=0; i<circleBox.length; i++) {
			var circleList=circleBox[i];
			circleList.updateCircle();
		}
		requestAnimFrame(circleAnimate);
	}
	function circleDraw() {
		for(var i=0; i<50; i++) {
			circleBox[i]=circleCreate();
		}
	}
	function circleCreate() {
		var xCord=Math.floor(Math.random()*width);
		var yCord=Math.floor(Math.random()*height);
		var radius=Math.floor(Math.random()*100);
		var updateCircle=function() {
			circle.beginPath();
			circle.arc(xCord,yCord,radius,endAngle,antiClockWise);
			circle.strokeStyle=colorCreate();
			circle.stroke();
			if(radius<100) {
				radius+=2;
			} else {
				xCord=Math.floor(Math.random()*width);
				yCord=Math.floor(Math.random()*height);
				radius=0;
			}
		}
		return {
			updateCircle:updateCircle,
			xCord:xCord,
			yCord:yCord,
			radius:radius
		}
	}
	function colorCreate() {
		var color;
		color='#'+Math.floor(Math.random()*0xFFFFFF).toString(16);
		return color;
	}
	window.requestAnimFrame=(function() {
		return window.requestAnimFrame ||
		window.webkitRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback,50);
		};
	})();
	circleDraw();
	circleAnimate();
}