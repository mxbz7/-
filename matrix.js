var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
document.body.appendChild(c);

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
matrix = matrix.split("");

var font_size = 15;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// Define two colors
var colors = ["#0F0", "#00F"];

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.font = font_size + "px arial";
    for (var i = 0; i < drops.length; i++) {
        // Randomly select a color from the array
        var color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}

setInterval(draw, 35);
