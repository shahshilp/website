var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var snakeArrX = [0,1,2,3,4];
var snakeArrY = [0,0,0,0,0];
var cell = 10;
function paintCell(x,y,color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x*cell, y*cell, 5, 5);
}
function paintSnake()
{
	var snakeLength = 5;

	for(i = 0; i < 5; i++)
	{
		paintCell(snakeArrX[i], snakeArrY[i], 'red');
	}
}

var loop = setInterval(paintSnake, 100);