var game = new Phaser.Game(900,700,Phaser.Auto,'',
	{preload:preload, create:create, update:update});

var button;
var text;


function preload() {
	game.load.image('bg','assets/image/well.png'); // fondo
    game.load.image('bg1','assets/image/well1.png'); // fondo
    game.load.image('bt1','assets/image/BTN1.png'); // BOTON 1 IMAGEN
    game.load.image('btf','assets/image/btf.png');
    game.load.image('btm','assets/image/btm.png');
	
}

function create() {

	game.add.sprite(0, 0, 'bg'); //agregamos fondo 
	
	button = game.add.button(game.world.centerX - 95, 550, 
        'bt1', start, this, 2, 1, 0);  
    text = game.add.text(16, 16, ' Bienvenido', 
        { fontSize: '32px', fill: '#000' });
}


function update(){


}
var button1;
var button2;

function start () {

    console.log('empezarrr XD');
    removeBt1();
    game.add.sprite(0, 0, 'bg1'); //agregamos fondo 
    game.world.remove(text);
    text = game.add.text(16, 16, ' Seleciona personaje', 
        { fontSize: '32px', fill: '#000' });

    button1 = game.add.button(50, 70, 
        'btf', selectedSex('f'), this, 2, 1, 0);  
    button2 = game.add.button(150, 70, 
        'btm', selectedSex('m'), this, 2, 1, 0);  
    
}

function removeBt1() {
    game.world.remove(button);

}


function selectedSex(sex) {
    // body...
    console.log(sex);

}