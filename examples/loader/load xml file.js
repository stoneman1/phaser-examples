
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {

    //  Phaser can load XML files.

    //  It does this using an XMLHttpRequest.
    
    //  If loading a file from outside of the domain in which the game is running 
    //  a 'Access-Control-Allow-Origin' header must be present on the server.

    game.load.xml('character', 'assets/xml/test.xml');

}

function create() {

    game.stage.backgroundColor = '#0072bc';

    var phaserXML = game.cache.getXML('character');

    var text = game.add.text(100, 100, "Current character name: " + phaserXML.querySelector('name').textContent, { fill: '#ffffff' });
    text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

    var text2 = game.add.text(100, 200, "Level: " + phaserXML.querySelector('level').textContent, { fill: '#ffffff' });
    text2.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

    var text3 = game.add.text(100, 300, "Weapon: " + phaserXML.querySelector('weapon').textContent, { fill: '#ffffff' });
    text3.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

    var text4 = game.add.text(100, 400, "Status: " + phaserXML.querySelector('status').textContent, { fill: '#ffffff' });
    text4.setShadow(2, 2, 'rgba(0,0,0,0.5)', 0);

}
