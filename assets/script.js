var canvas = document.querySelector("#maze");
var ctx = canvas.getContext("2d");
var maze = [
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
];

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
	size: cellSize - 15,
};

// Draw the player character
ctx.fillStyle = player.color;
ctx.fillRect(player.x * cellSize + 7, player.y * cellSize + 7, player.size, player.size);

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

	// Redraw the player character
	ctx.fillStyle = player.color;
	ctx.fillRect(player.x * cellSize + 5, player.y * cellSize + 5, player.size, player.size);
};
