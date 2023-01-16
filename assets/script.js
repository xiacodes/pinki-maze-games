var canvas = document.querySelector("#maze");
var ctx = canvas.getContext("2d");
// var maze = [
// 	[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
// 	[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
// 	[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
// 	[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
// 	[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
// 	[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
// 	[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
// 	[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
// 	[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
// 	[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
// 	[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
// ];

var maze1 = {
	map: [
		[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
		[1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
		[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
		[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
		[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	],
	exitX: 5,
	exitY: 10,
};

function drawExit(maze) {
	ctx.fillStyle = "purple";
	ctx.fillRect(maze.exitX * cellSize, maze.exitY * cellSize, cellSize, cellSize);
}

var maze = maze1.map;

var cellSize = 45;

// Draw the maze
for (var row = 0; row < maze.length; row++) {
	for (var col = 0; col < maze[row].length; col++) {
		if (maze[row][col] === 1) {
			ctx.fillStyle = "#FF74B1";

			ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
		}
		if (maze[row][col] === 2) {
			ctx.fillStyle = "#BDF2D5";
			ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
		}
	}
}

// Create the player character
var player = {
	x: 5,
	y: 0,
	color: "#F94892",
	size: cellSize - 20,
};

// Draw the player character
ctx.fillStyle = player.color;
ctx.fillRect(player.x * cellSize + 10, player.y * cellSize + 10, player.size, player.size);
drawExit(maze1);

// Move the player character
document.onkeydown = function (e) {
	if (e.key === "ArrowLeft" && maze[player.y][player.x - 1] !== 1) {
		player.x--;
	} else if (e.key === "ArrowUp" && maze[player.y - 1][player.x] !== 1) {
		player.y--;
	} else if (e.key === "ArrowRight" && maze[player.y][player.x + 1] !== 1) {
		player.x++;
	} else if (e.key === "ArrowDown" && maze[player.y + 1][player.x] !== 1) {
		player.y++;
	}

	if (player.y === maze1.exitY && player.x === maze1.exitX) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		alert("Well done!");
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Redraw the maze
	for (var row = 0; row < maze.length; row++) {
		for (var col = 0; col < maze[row].length; col++) {
			if (maze[row][col] === 1) {
				ctx.fillStyle = "#FF74B1";

				ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
			}
			if (maze[row][col] === 2) {
				ctx.fillStyle = "#BDF2D5";
				ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
			}
		}
	}
	drawExit(maze1);

	// Redraw the player character
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x * cellSize + 10, player.y * cellSize + 10, player.size, player.size);
};
