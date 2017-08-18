var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var w = 800;
var h = 500;
var loop;
var obstacle = [];

$( document ).ready(function() {
	'use strict';
    init();
});
function createObstacle()
{
	'use strict';
	obstacle = [1,2,3];
}
function paint{
	
	for(i = 0; i < obstacle.length; i++)
	{
		paintCell(obstacle[i], obstacle[i], 10, 100, 'red');
	}
}

function paintCell(x, y, w, h, color)
{
	'use strict';
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(x*cell, y*cell, cell, cell);
}
function init(){
	loop = setInterval(paint, 100);
}
