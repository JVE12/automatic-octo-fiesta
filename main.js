var canvas = new fabric.Canvas('myCanvas');
block_y=1;
 block_x=-199;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image, xiz)
{
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;

		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y,
			left:xiz
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);
function ininkeypress(key, color, keyco) {
	if (keyPressed == keyco) {
		block_x += 160
		new_image(color, block_x);
		console.log(key);
	}
}
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
ininkeypress('r', 'rr1.png', '82');
ininkeypress('g', 'gr.png', '71');
ininkeypress('y', 'yr.png', '89');
ininkeypress('p', 'pr.png', '80');
ininkeypress('b', 'br.png', '66');
}