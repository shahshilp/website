
var canvas = document.getElementById('canvas');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
var ctx = canvas.getContext('2d');

var loop;
var formWidth = 500;
var formHeight = 500;
var test = 10;
var ob1, ob2;
var open1, open2;
var paintOb2;
var player;
var relYPos;
var g = 1;
var up = false;
var downSpeed = 5;

function Obstacle(xVal, yVal)
{
	this.x = xVal;
	this.y = yVal;
}
function Opening()
{
	//Generate random number between 150 - 250
	this.s = (Math.floor(Math.random()*151) + 150);

	//Generage random number between 0 - 350
	this.p = (Math.floor(Math.random()* 351));
}
function createPlayer(){
	player = {x:200, y:251, w:30, h:30};
}

function paint() {
	//Repaint background every time
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, formWidth, formHeight);

	//Painting Obstacle One
	paintCell(ob1.x, ob1.y, 20, 500, 'red');
	//Painting Opening One
	paintCell(ob1.x, open1.p, 20, open1.s, 'black');
	ob1.x -= 3;

	
	if (ob1.x === 252)
	{
		//Creating obstacle and opening 2
		ob2 = new Obstacle(525, 0);
		open2 = new Opening();
		paintOb2 = true;
	}
	if (ob1.x === -18)
	{
		ob1.x = 525;
	}

	if(paintOb2 == true)
	{
		//Paining obstacle and opening 2

		paintCell(ob2.x, ob2.y, 20, 500, 'red');
		paintCell(ob2.x, open2.p, 20, open2.s, 'black');
		ob2.x -= 3;
	}

	//Painting player
	paintCell(player.x, player.y, player.w, player.h, 'blue');
	//Player gravity

	player.y += downSpeed;

	//Moving player up
	if(up == true)
	{
		player.y -= 15;
	}
}

window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 38) 
   {
       up = true;
   }
}
window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 38) 
   {
       up = false;
   }
}

function paintCell(x, y, w, h, color)
{
	ctx.fillStyle = color;
	ctx.fillRect(x, y, w, h);
	ctx.strokeStyle = 'white';
	ctx.strokeRect(x, y, w, h);
}

function init() {
	ob1 = new Obstacle(525, 0);
	open1 = new Opening();
	createPlayer();
	clearInterval(loop);
	loop = setInterval(paint, 50);
}

window.onload(init());