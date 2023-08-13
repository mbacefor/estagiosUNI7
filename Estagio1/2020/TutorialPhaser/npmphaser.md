1. Create a folder where you would like to have your game live, and move into that

```
mkdir my-new-game
cd my-new-game
```

2. Initialize the directory using npm.

```
npm init -y
```

3. Install phaser as a node package.

```
npm install phaser
```

4. Install http-server as a global module, to be used on the commandline.

```
npm install -g http-server
```

5. Create an index.html file and reference the Phaser executable and paste the following code into it.

```
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <title>My Gamer</title>
    <script type="text/javascript" src="node_modules/phaser/build/phaser.js"></script>
    <style type="text/css">
    body {
        margin: 0;
    }
    </style>
</head>

<body>
    <div id="helloWorld"></div>
</body>
<script>
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'helloWorld', {
    create: create
});

function create() {

    var text = "Hello World!";
    var style = {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    };

    var t = game.add.text(game.world.centerX, 300, text, style);
    t.anchor.set(0.5);

}
</script>

</html>
```

6. Start the server and load [http://localhost:8080](http://localhost:8080/) in your browser!

```
    hs    
```



##### Links Utéis:

https://phaser.io/tutorials/getting-started-phaser3/part7

https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?utm_source=ad&utm_medium=banner&utm_campaign=phaser-2018-10-16

https://github.com/photonstorm/phaser3-project-template

https://github.com/TypeStrong/ts-loader

https://github.com/Microsoft/TypeScriptSamples/tree/master/react-flux-babel-karma

https://www.codeandweb.com/physicseditor

https://www.piskelapp.com/



