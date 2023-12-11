/*
const zombie = {
    name: "Tomas",
    hp: 100,
    dmg: 6,
    drop: 15
}
console.log(zombie.dmg); // 6
zombie.hp -= 50;
*/

/*
// [] - pole
// index - poradove cislo prvku, pocita od 0
const foo = [5,6]
*/



/*const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "./res/img/background.png"

const image = new Image();
image.src = "./res/img/zombies/zombie1.png";

canvas.width = 1280;
canvas.height = 720;

ctx.fillStyle = "white";
ctx.fillRect(200, 100, 150, 100)

ctx.strokeStyle = "red";
ctx.strokeRect(200, 300, 150, 100)

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 50);
ctx.lineTo(150, 70);
ctx.lineTo(200, 20);
ctx.lineTo(50, 50);
ctx.fill();

let x = 450;
let y = 100;
let width = 60;
let height = 100;

window.onload = () => {
    ctx.drawImage(background, 0, 0, 1280, 720)
    ctx.drawImage(image, 0, 0, 60, 100)
    setInterval(() => {
        y += 1;
        x -= 0.5;
        width++;
        height++;
        ctx.drawImage(background, 0, 0, 1280, 720);
        ctx.drawImage(image, x, y, width, height);
        console.log(x);
    },100);
    
}
*/



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "./res/img/background.png";

// promenna - vymezena misto v pameti
// {} - objekt - promenna, ktera ma ruzne vlastnosti
// [] - pole - skupina vicero hodnot - soubor vlastnosti

//promenna do ukladani vstupu z klavesnice
// Space: true
// Space: false
const keys = {};

//funkce ktera posloucha na nejakou akci (event)
document.addEventListener("keydown", (e) => {
    keys[e.code] = true; // Space: true
    
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false; // Space: false
})

//herni smycka
const gameLoop = () => {
    console.log(keys);
    //resizeCanvas
    resizeCanvas();

    //clearCanvas
    clearCanvas();

    //update
    update();

    //render
    render();

    //fps
    getFps();

    window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    //premalujeme cele platno pozadim hry
    ctx.drawImage(background, 0, 0, 1280, 720);
};
const update = () => {}
const render = () => {}
const getFps = () => {}

window.onload = () => {
    //jakmile se stranka nacte, vazadame si prvni snimek herni smycky
    window.requestAnimationFrame(gameLoop);
};

























