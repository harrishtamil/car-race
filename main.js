canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
rover_width = 100;
 rover_height = 90;
  background_image =nasa_image_arry[random_number];
  console.log("background_image="+background_image);
 car1_image = "car 1.png";
 car2_image = "car 2.png";
  car1_x = 10; car1_y = 10;
  car2_x = 10; car2_y = 10;

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
    up();
    console.log("up");
 }
 if(keyPressed == '40')
    {
    down();
    console.log("down");
 }
 if(keyPressed == '39')
    {
    right();
    console.log("right");
 }
 if(keyPressed == '37')
    {
    left();
    console.log("left");
 }
}

function up(){
    if (car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadcar2();
uploadcar1();
    }
}


function down(){
    if (car1_y<=500){
        car1_y=car1_y+10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadcar2();
uploadcar1();
    }
}


function right(){
    if (car1_x<=700){
        car1_x=car1_x+10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadcar2();
uploadcar2();
    }
}
n


function left(){
    if (car1_x>=0){
        car1_x=car1_x-10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
uploadcar2();
uploadcar1();
    }
}