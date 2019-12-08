    var sample1;
    var length;
    localStorage.setItem("length", "600");
    var fadelength;
    localStorage.setItem("fadelength", "950");
//change 20000 to lenght of song later

//function updatelength() {
  //  var length;
    //var fadelength;
    //var sliderlength;
    //var sliderlength = document.getElementsByClassName('slider').value;
    //console.log(sliderlength);
    //localStorage.setItem("length", "600");
//}

document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'a' || key === 65) {
        console.log('pressed a');
        playsaved1();
    };

    if (key === 's' || key === 83) {
        console.log('pressed s');
        playsaved2();
    };
});






function get_random_color() {
  return '#' + Math.random().toString(16).substring(4);
};


function getRandomColor()
{
  var letters = '0123456789ABCDEF'.split('');

  var color = '#';

  for (var i = 0; i < 6; i++ )
  {
      color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};


function bample() {
//console.log(document.getElementById("padtop1").style.backgroundColor);
//var padcolor;
//var padcolor = getRandomColor();
//console.log(padcolor);
document.getElementById("padtop1").style.backgroundColor = getRandomColor();
document.getElementById("padtop2").style.backgroundColor = getRandomColor();
document.getElementById("padtop3").style.backgroundColor = getRandomColor();
document.getElementById("padtop4").style.backgroundColor = getRandomColor();
//console.log(document.getElementById("padtop1").style.backgroundColor);
};



//updatinglength with slider
function sliderChange(val) {
    console.log(val);
    var length;
    var fadelength;
    var sliderlength;
    var sliderlength = val*15;
    var fadelength = sliderlength+280
    console.log(sliderlength);
    localStorage.setItem("length", sliderlength);
    localStorage.setItem("fadelength", fadelength);
}


function saved1() {
    var saved1sample;
    var saved1length;
    var saved1fadelength;
    localStorage.setItem("saved1sample", localStorage.getItem("sample1"));
    localStorage.setItem("saved1length", localStorage.getItem("length"));
    localStorage.setItem("saved1fadelength", localStorage.getItem("fadelength"));
    console.log('saved 1')
}


function savedsp1(number) {
    var savedsp1sample;
    var savedsp1length;
    var savedsp1fadelength;
    var sp1number;
    console.log('savingsp1');
    localStorage.setItem("savedsp1sample", localStorage.getItem("saved"+(JSON.stringify(number))+"sample"));
    localStorage.setItem("savedsp1length", localStorage.getItem("saved"+(JSON.stringify(number))+"length"));
    localStorage.setItem("savedsp1fadelength", localStorage.getItem("saved"+(JSON.stringify(number))+"fadelength"));
    console.log('saved to first pad')
    localStorage.setItem("sp1number", number);
}

function savedsp2(number) {
    var savedsp2sample;
    var savedsp2length;
    var savedsp2fadelength;
    var sp2number;
    localStorage.setItem("savedsp2sample", localStorage.getItem("saved"+(JSON.stringify(number))+"sample"));
    localStorage.setItem("savedsp2length", localStorage.getItem("saved"+(JSON.stringify(number))+"length"));
    localStorage.setItem("savedsp2fadelength", localStorage.getItem("saved"+(JSON.stringify(number))+"fadelength"));
    console.log('saved to second pad')
    localStorage.setItem("sp2number", number);
}

function saved2() {
    var saved2sample;
    var saved2length;
    var saved2fadelength;
    localStorage.setItem("saved2sample", localStorage.getItem("sample2"));
    localStorage.setItem("saved2length", localStorage.getItem("length"));
    localStorage.setItem("saved2fadelength", localStorage.getItem("fadelength"));
}

function saved3() {
    var saved3sample;
    var saved3length;
    var saved3fadelength;
    localStorage.setItem("saved3sample", localStorage.getItem("sample3"));
    localStorage.setItem("saved3length", localStorage.getItem("length"));
    localStorage.setItem("saved3fadelength", localStorage.getItem("fadelength"));
}

function saved4() {
    var saved4sample;
    var saved4length;
    var saved4fadelength;
    localStorage.setItem("saved4sample", localStorage.getItem("sample4"));
    localStorage.setItem("saved4length", localStorage.getItem("length"));
    localStorage.setItem("saved4fadelength", localStorage.getItem("fadelength"));
}

function playsaved1() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            b: [localStorage.getItem("savedsp1sample"), localStorage.getItem("savedsp1length")],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };

sound.playString('b');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("savedsp1fadelength"));
};


function playsaved2() {
    console.log('playing saved 2');
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            b: [localStorage.getItem("savedsp2sample"), localStorage.getItem("savedsp2length")],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('b');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("savedsp2fadelength"));
};



function playsaved3() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            d: [localStorage.getItem("saved3sample"), localStorage.getItem("saved3length")],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('d');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("saved3fadelength"));

}


function playsaved4() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            e: [localStorage.getItem("saved4sample"), localStorage.getItem("saved4length")],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('e');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("saved4fadelength"));

}


function short() {
localStorage.setItem("length", "250");
localStorage.setItem("fadelength", "350");
}

function medium() {
localStorage.setItem("length", "600");
localStorage.setItem("fadelength", "800");
}

function long() {
localStorage.setItem("length", "1200");
localStorage.setItem("fadelength", "1400");
}
 function randomize() {
       var sample1 = (randomIntFromInterval(10, 100000));
       localStorage.setItem("sample1", sample1);
       console.log(sample1);
       console.log(localStorage.getItem("sample1"));

        var sample2 = (randomIntFromInterval(10, 100000));
       localStorage.setItem("sample2", sample2);
       console.log(sample2);
       console.log(localStorage.getItem("sample2"));

        var sample3 = (randomIntFromInterval(10, 100000));
       localStorage.setItem("sample3", sample3);
       console.log(sample3);
       console.log(localStorage.getItem("sample3"));

        var sample4 = (randomIntFromInterval(10, 100000));
       localStorage.setItem("sample4", sample4);
       console.log(sample4);
       console.log(localStorage.getItem("sample4"));
 };

function playit() {


    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            a: [0, 600],
            b: [localStorage.getItem("sample1"), localStorage.getItem("length")],
            c: [localStorage.getItem("sample2"), localStorage.getItem("length")],
            d: [localStorage.getItem("sample3"), localStorage.getItem("length")],
            e: [localStorage.getItem("sample4"), localStorage.getItem("length")],
            f: [2900, 500],
            g: [3400, 500],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('b');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("fadelength"));

};



function playit2() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            a: [0, 600],
            b: [localStorage.getItem("sample1"), localStorage.getItem("length")],
            c: [localStorage.getItem("sample2"), localStorage.getItem("length")],
            d: [localStorage.getItem("sample3"), localStorage.getItem("length")],
            e: [localStorage.getItem("sample4"), localStorage.getItem("length")],
            f: [2900, 500],
            g: [3400, 500],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('c');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("fadelength"));
};

function playit3() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            a: [0, 600],
            b: [localStorage.getItem("sample1"), localStorage.getItem("length")],
            c: [localStorage.getItem("sample2"), localStorage.getItem("length")],
            d: [localStorage.getItem("sample3"), localStorage.getItem("length")],
            e: [localStorage.getItem("sample4"), localStorage.getItem("length")],
            f: [2900, 500],
            g: [3400, 500],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('d');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("fadelength"));
};

function playit4() {
    var sound = new Howl({
        urls: ['./Otest.wav'],
        volume: 1,
        sprite: {
            a: [0, 600],
            b: [localStorage.getItem("sample1"), localStorage.getItem("length")],
            c: [localStorage.getItem("sample2"), localStorage.getItem("length")],
            d: [localStorage.getItem("sample3"), localStorage.getItem("length")],
            e: [localStorage.getItem("sample4"), localStorage.getItem("length")],
            f: [2900, 500],
            g: [3400, 500],
        }
    });

    Howl.prototype.playString = function(str){
        if(str.length>1){
            this._onend[0] = function(){this.playString(str.substring(1,str.length));};
        } else {
            this._onend[0] = function(){};
        }
        if(str.length>0){
            this.play(str.substring(0,1));
        }
    };
sound.playString('e');
sound.fade(0.0, 1.0, 40);
sound.fade(1.0, 0.0, localStorage.getItem("fadelength"));
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}




//drag and drop

function allowDrop(ev, number) {
  ev.preventDefault();
}

var dragging1;
var dragging1=false;

var dragging2;
var dragging2=false;

function drag1(ev, number) {
  console.log('dragging 1');
  let clone = document.querySelector('#padtop1').cloneNode( true );
  var dragging1=true;
  localStorage.setItem("dragging1", "true");
    localStorage.setItem("dragging2", "false");
    localStorage.setItem("numberdragged", "1");


}

function drag2(ev, number) {
  console.log('dragging 2');
  let clone = document.querySelector('#padtop2').cloneNode( true );
  var dragging2=true;
  localStorage.setItem("dragging2", "true");
    localStorage.setItem("dragging1", "false");

}

//function drag2(ev) {
  //console.log('dragging 2');
  //localStorage.setItem("dragging2", "true");
  //let clone = document.querySelector('#padtop2').cloneNode( true );
  //var dragging2=true;
  //localStorage.setItem("dragging1", "false");


//}

var filled1;
localStorage.setItem("filled1", "false");


function setup() {
localStorage.setItem("filled1", "false");
localStorage.setItem("filled2", "false");
localStorage.setItem("filled3", "false");
localStorage.setItem("filled4", "false");
localStorage.setItem("filled5", "false");
localStorage.setItem("filled6", "false");
localStorage.setItem("filled7", "false");
localStorage.setItem("filled8", "false");
}

function savepad1(ev, number) {
    if (localStorage.getItem("dragging"+(JSON.stringify(number))) == "true") {
         console.log('dragging'+(JSON.stringify(number)));
        ev.preventDefault();
        saved1();
        savedsp1((JSON.stringify(number)));
        var p = document.getElementById("padtop"+(JSON.stringify(number)));
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved1();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled"+(JSON.stringify(number)));
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       var filled1=true
       localStorage.setItem("filled1", "true");
       localStorage.setItem("dragging"+(JSON.stringify(number)), "false");
    };
};

function savepad1filled(ev) {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('overlapping');
      ev.preventDefault();
        saved1();
        savedsp1(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved1();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled1");
        console.log(p);
        console.log(p_prime);
       document.getElementById("sp1").appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled1", "true");
       localStorage.setItem("dragging1", "false");
    };
};



function drop(ev, number) {
if (ev.target.id == "filled1") {
        console.log('filled');
        var elem = document.getElementById("filled1");
        elem.parentNode.removeChild(elem);
        console.log('deleted');
        savepad1filled(ev);
    };
if (ev.target.id == "sp1") {
    console.log('sp1 spotted');
    console.log(number);
    savepad1(ev, number);
};

    if (localStorage.getItem("dragging2") == "true") {
        console.log('dragging2');
      ev.preventDefault();
        saved2();
        savedsp1(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved1();" );
        l_prime.setAttribute( "draggable", "false");
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       var dragging2=false;
       localStorage.setItem("dragging2", "false");
    };
};

if (ev.target.id == "sp2") {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('dragging1');
      ev.preventDefault();
        saved1();
        savedsp2(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved2();" );
        p_prime.setAttribute( "draggable", "false");
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       dragging1=false;
       localStorage.setItem("dragging1", "false");
    };

    if (localStorage.getItem("dragging2") == "true") {
        console.log('dragging2');
      ev.preventDefault();
        saved2();
        savedsp2(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved2();" );
        l_prime.setAttribute( "draggable", "false");
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       dragging2=false;
       localStorage.setItem("dragging2", "false");
    };
};



function drop2(ev) {
  ev.preventDefault();
    saved1();
    var p = document.getElementById("padtop2");
    var p_prime = p.cloneNode(true);
    p_prime.setAttribute( "onClick", "playsaved2();" );
    p_prime.setAttribute( "draggable", "false");
    console.log(p);
    console.log(p_prime);
   ev.target.appendChild(p_prime);

};

//function drag(ev) {
  //let clone = document.querySelector('#padtop1').cloneNode( true ); 
  //ev.dataTransfer.setData("text", clone);
  //conosle.log(clone);
  //document.querySelector('sp1').appendChild( clone );
//}






window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        console.log('enter');
        playit();
      }
    if (evt.keyCode == "16") {
        console.log('shift');
        playit2();
      }

    if (evt.keyCode == "75") {
        console.log('shift');
        playsaved3();
      }

    if (evt.keyCode == "77") {
        console.log('shift');
         playsaved4();
      }
};
