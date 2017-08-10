
var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var cell = 10;
var snakeArr;
var food;
var d = "right";
var loop;
var snakeLength = 5;

$( document ).ready(function() {
	'use strict';
    init();
});

function createSnake()
{
	'use strict';
	
	snakeArr = [];
	snakeArr.x = [4,3,2,1,0];
	snakeArr.y = [0,0,0,0,0,0];
	
	//The for loop does not work. Declared array explicitly
	/*
	var i = 0;
	for(i = snakeLength-1; i >= 0; i++)
	{
		snakeArr.push({x: i, y:0});
	}
	*/
}

function createFood()
{
	'use strict';
	food = {
		x: Math.round(Math.random()*1000 + 1), 
		y: Math.round(Math.random()*1000 + 1), 
	};
}

function paint()
{
	'use strict';
	
	//Repaint background every time
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, 800, 800);
	
	//Head of snake
	var snakeX = snakeArr.x[0];
	var snakeY = snakeArr.y[0];
	
	
	if(d === "right")
	{ 
		snakeX++;
	}
	else if(d === "left")
	{
		snakeX--;
	}
	else if(d === "up")
	{
		snakeY--;
	}
	else if(d === "down")
	{
		snakeY++;
	}
	
	// Test Code
	if(snakeX === food.x && snakeY === food.y)
	{
		var tail = {x: snakeX, y: snakeY};
		snakeLength++;
		createFood();
		snakeArr.x.unshift(tail.X);
		snakeArr.y.unshift(snakeY);
	}
	snakeX++;
	snakeArr.pop();
	snakeArr.x.unshift(snakeX);
	snakeArr.y.unshift(snakeY);
	
	//Painting food
	ctx.fillStyle = 'red';
	ctx.fillRect(food.x, food.y, cell, cell);
	
	//Painting snake
	var i = 0;
	for(i = 0; i < snakeLength; i++)
	{
		paintCell(snakeArr.x[i], snakeArr.y[i], 'red');
	}

}

function paintCell(x, y, color)
{
	'use strict';
	ctx.fillStyle = color;
	ctx.fillRect(x*cell, y*cell, cell, cell);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(x*cell, y*cell, cell, cell);
}

function init()
{
	'use strict';
	d = "right";
	createSnake();
	createFood();

	loop = setInterval(paint, 100);
}














/*
function snakeSquare(x, y){
	ctx.fillStyle = '#6bf442';
	ctx.fillRect(x*snakeSize,y*snakeSize,snakeSize,snakeSize);
}
function paintFood(x,y){
    ctx.fillStyle = '#6bf442';
	ctx.fillRect(xPos,yPos,snakeSize,snakeSize);
}

function drawSnake(){
	var length = 4;
	snake = [];

	for(i = length; i >= 0; i--)
	{
		snake.push(
		{
			x:i;
			y:0;
		})
		snakeSquare(snake[i].x,snake[i].y);
	}
}
function createFood(){
    var xPos = (Math.random() * 1000) + 1;   
    var yPos = (Math.random() * 1000) + 1;

    for (i = 0; i <= snake.length; i++)
    {
    	if(xPos == snake[i].x || yPos == snake[i].y)
    	{
    		xPos = (Math.random() * 1000) + 1;   
    		yPos = (Math.random() * 1000) + 1;
    	}
    }
    paintFood(xPos,yPos);
}

function snakeCollision(x, y, arr){
	for(i = 0; i < arr.length; i++)
	{
		if (arr[i].x == x && arr[i].y == y)
		{
			return true;
		}
	}
	return false;
}

function paint() {
	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

	drawSnake();
}

function init() {

  }
  */

