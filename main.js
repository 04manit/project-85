canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
cars_img_arr = ["background_1.jpg", "background_2.jpg", "background_3.jfif", "background_4.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number)
car_1_x = 10;
car_1_y = 10;
car_2_x = 10;
car_2_y = 80;
car_1_width = 100;
car_1_height = 50;
car_2_width = 100;
car_2_height = 50;
car_1_image = 'car_1.png';
car_2_image = 'car_2.png';
background_image = cars_img_arr[random_number];
console.log("background_img = "+background_image);
function add(){
    console.log("came");
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcar_1();
    car_1_imgTag.src = car_1_image;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcar_2();
    car_2_imgTag.src = car_2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar_1(){
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}
function uploadcar_2(){
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        car_1_left();
        console.log("left");
    }
    if(keyPressed == '38'){
        car_1_up();
        console.log("up");
    }
    if(keyPressed == '39'){
        car_1_right();
        console.log("right");
    }
    if(keyPressed == '40'){
        car_1_down();
        console.log("down");
    }
    if(keyPressed == '65'){
        car_2_left();
        console.log("key a");
    }
    if(keyPressed == '87'){
        car_2_up();
        console.log("key w");
    }
    if(keyPressed == '68'){
        car_2_right();
        console.log("key d");
    }
    if(keyPressed == '83'){
        car_2_down();
        console.log("key s");
    }
}
function car_1_up(){
    if(car_1_y >= 20){
        car_1_y = car_1_y - 10;
        console.log("When up key is pressed, X = "+car_1_x+", Y = "+car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_1_down(){
    if(car_1_y <= 370){
        car_1_y = car_1_y + 10;
        console.log("When down key is pressed, X = "+car_1_x+", Y = "+car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_1_left(){
    if(car_1_x >= 20){
        car_1_x = car_1_x - 10;
        console.log("When left key is pressed, X = "+car_1_x+", Y = "+car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_1_right(){
    if(car_1_x <= 680){
        car_1_x = car_1_x + 10;
        console.log("When right  key is pressed, X = "+car_1_x+", Y = "+car_1_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_2_up(){
    if(car_2_y >= 20){
        car_2_y = car_2_y - 10;
        console.log("When up key is pressed, X = "+car_2_x+", Y = "+car_2_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_2_down(){
    if(car_2_y <= 370){
        car_2_y = car_2_y + 10;
        console.log("When down key is pressed, X = "+car_2_x+", Y = "+car_2_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_2_left(){
    if(car_2_x >= 20){
        car_2_x = car_2_x - 10;
        console.log("When left key is pressed, X = "+car_2_x+", Y = "+car_2_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}
function car_2_right(){
    if(car_2_x <= 680){
        car_2_x = car_2_x + 10;
        console.log("When right  key is pressed, X = "+car_2_x+", Y = "+car_2_y);
        uploadBackground();
        uploadcar_1();
        uploadcar_2();
    }
}