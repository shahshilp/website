var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

// var snakeArrX = [0,1,2,3,4];
// var snakeArrY = [0,0,0,0,0];
var snakeArr = [];
snakeArr.x = [4,3,2,1,0];
snakeArr.y = [0,0,0,0,0];
var cell = 10;
var loop;
var snakeLength = 5;
/*
var i = 0;
for(i = snakeLength-1; i >= 0; i--)
{
	snakeArr.push({x: i, y:0});
}
*/
function paintSnake()
{
	'use strict';
	var i = 0;
	for(i = 0; i < snakeLength; i++)
	{
		paintCell(snakeArr.x[i], snakeArr.y[i], 'red');
	}
}

function paintCell(x,y,color)
{
	'use strict';
	ctx.fillStyle = color;
	ctx.fillRect(x*cell, y*cell, 5, 5);
}

loop = setInterval(paintSnake, 2000);