/*****Inspired by: http://codeitdown.com/responsive-css-shapes/​
******/

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
    };


    var key = event.key || event.keyCode;



    if (key === 'q' || key === 65) {
        console.log('up q');
        (document.getElementById("padtop1")).classList.remove("activate");
        console.log('didit');   
    };

    if (key === 'w' || key === 65) {
        console.log('up q');
        (document.getElementById("padtop2")).classList.remove("activate");
        console.log('didit');   
    };

    if (key === 'e') {
        console.log('up o');
        (document.getElementById("padtop3")).classList.remove("activate");
        console.log('didit'); 
    };

    if (key === 'r') {
        console.log('up p');
        (document.getElementById("padtop4")).classList.remove("activate");
        console.log('didit'); 
    };


    if (key === 'b') {
        console.log('up b');
        (document.getElementById("bamplebutton")).classList.remove("activate");
        console.log('didit'); 
    };

    if (key === 'a' || key === 65) {
        console.log('pressed a');
        (document.getElementById("filled1")).classList.remove("activate");
    };

        if (key === 's' || key === 65) {
        console.log('pressed s');
        (document.getElementById("filled2")).classList.remove("activate");
    };

        if (key === 'd' || key === 65) {
        console.log('pressed k');
        (document.getElementById("filled3")).classList.remove("activate");
    };

        if (key === 'f' || key === 65) {
        console.log('pressed l');
        (document.getElementById("filled4")).classList.remove("activate");
    };


});


document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return;
    }


    var key = event.key || event.keyCode;



    if (key === 'q' || key === 65) {
        console.log('pressed q');
        document.getElementById("padtop1").click();
        (document.getElementById("padtop1")).classList.add("activate");
        console.log('didit'); 



    };

    if (key === 'w' || key === 83) {
        console.log('pressed w');
        document.getElementById("padtop2").click();
        (document.getElementById("padtop2")).classList.add("activate");
    };

    if (key === 'e') {
        console.log('pressed o');
        document.getElementById("padtop3").click();
        (document.getElementById("padtop3")).classList.add("activate");
    };

    if (key === 'r') {
        console.log('pressed p');
        document.getElementById("padtop4").click();
        (document.getElementById("padtop4")).classList.add("activate");
    };

    if (key === 'a' || key === 65) {
        console.log('pressed a');
        document.getElementById("filled1").click();
        (document.getElementById("filled1")).classList.add("activate");
    };

    if (key === 's' || key === 83) {
        console.log('pressed s');
        document.getElementById("filled2").click();
        (document.getElementById("filled2")).classList.add("activate");
    };

    if (key === 'd') {
        console.log('pressed k');
        document.getElementById("filled3").click();
        (document.getElementById("filled3")).classList.add("activate");
    };

    if (key === 'f') {
        console.log('pressed l');
        document.getElementById("filled4").click();
        (document.getElementById("filled4")).classList.add("activate");
    };

    if (key === 'Spacebar' || key === 32 || key === 'b') {
        console.log('pressed b');
        document.getElementById("bamplebutton").click();
        (document.getElementById("bamplebutton")).classList.add("activate");
    };
});




var eye = document.getElementById("inside");
var position = 30;
var direction = -5;

eye.onclick = moveEye;

function moveEye(){
  if (position > 40){
    direction = -5;
  }
  if (position < 8){
    direction = 5;
  }
  position = position + direction;
  eye.style.left = position  + "%";

};


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
    document.getElementById("samplelength").innerHTML="SAMPLE LENGTH: "+sliderlength+" ms";
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

function savedsp3(number) {
    var savedsp3sample;
    var savedsp3length;
    var savedsp3fadelength;
    var sp3number;
    localStorage.setItem("savedsp3sample", localStorage.getItem("saved"+(JSON.stringify(number))+"sample"));
    localStorage.setItem("savedsp3length", localStorage.getItem("saved"+(JSON.stringify(number))+"length"));
    localStorage.setItem("savedsp3fadelength", localStorage.getItem("saved"+(JSON.stringify(number))+"fadelength"));
    console.log('saved to third pad')
    localStorage.setItem("sp3number", number);
}

function saved4() {
    var saved4sample;
    var saved4length;
    var saved4fadelength;
    localStorage.setItem("saved4sample", localStorage.getItem("sample4"));
    localStorage.setItem("saved4length", localStorage.getItem("length"));
    localStorage.setItem("saved4fadelength", localStorage.getItem("fadelength"));
}

function savedsp4(number) {
    var savedsp4sample;
    var savedsp4length;
    var savedsp4fadelength;
    var sp4number;
    localStorage.setItem("savedsp4sample", localStorage.getItem("saved"+(JSON.stringify(number))+"sample"));
    localStorage.setItem("savedsp4length", localStorage.getItem("saved"+(JSON.stringify(number))+"length"));
    localStorage.setItem("savedsp4fadelength", localStorage.getItem("saved"+(JSON.stringify(number))+"fadelength"));
    console.log('saved to fourth pad')
    localStorage.setItem("sp4number", number);
}

function playsaved1() {
    var sound = new Howl({
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
        volume: 1,
        sprite: {
            d: [localStorage.getItem("savedsp3sample"), localStorage.getItem("savedsp3length")],
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
sound.fade(1.0, 0.0, localStorage.getItem("savedsp3fadelength"));

}


function playsaved4() {
    var sound = new Howl({
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
        volume: 1,
        sprite: {
            e: [localStorage.getItem("savedsp4sample"), localStorage.getItem("savedsp4length")],
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
sound.fade(1.0, 0.0, localStorage.getItem("savedsp4fadelength"));

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
       var sample1 = (randomIntFromInterval(10, localStorage.getItem("durationreal")));
       localStorage.setItem("sample1", sample1);
       console.log(sample1);
       console.log(localStorage.getItem("sample1"));

        var sample2 = (randomIntFromInterval(10, localStorage.getItem("durationreal")));
       localStorage.setItem("sample2", sample2);
       console.log(sample2);
       console.log(localStorage.getItem("sample2"));

        var sample3 = (randomIntFromInterval(10, localStorage.getItem("durationreal")));
       localStorage.setItem("sample3", sample3);
       console.log(sample3);
       console.log(localStorage.getItem("sample3"));

        var sample4 = (randomIntFromInterval(10, localStorage.getItem("durationreal")));
       localStorage.setItem("sample4", sample4);
       console.log(sample4);
       console.log(localStorage.getItem("sample4"));
 };

function playit() {


    var sound = new Howl({
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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
        urls: [localStorage.getItem("audiofile")],
        format: "wav",
        buffer: true,
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

function allowDrop(ev) {
  ev.preventDefault();
}

var dragging1;
var dragging1=false;

var dragging2;
var dragging2=false;

function drag1(ev) {
  console.log('dragging 1');
  let clone = document.querySelector('#padtop1').cloneNode( true );
  var dragging1=true;
  localStorage.setItem("dragging1", "true");
    localStorage.setItem("dragging2", "false");

}

function drag2(ev) {
  console.log('dragging 2');
  let clone = document.querySelector('#padtop2').cloneNode( true );
  var dragging2=true;
  localStorage.setItem("dragging2", "true");
    localStorage.setItem("dragging1", "false");

}

function drag3(ev) {
  console.log('dragging 3');
  let clone = document.querySelector('#padtop3').cloneNode( true );
  var dragging3=true;
  localStorage.setItem("dragging3", "true");
localStorage.setItem("dragging1", "false");
localStorage.setItem("dragging2", "false");
}

function drag4(ev) {
  console.log('dragging 4');
  let clone = document.querySelector('#padtop4').cloneNode( true );
  var dragging4=true;
  localStorage.setItem("dragging4", "true");
localStorage.setItem("dragging1", "false");
localStorage.setItem("dragging2", "false");
localStorage.setItem("dragging3", "false");
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

function savepad1(ev) {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('dragging1');
      ev.preventDefault();
        saved1();
        savedsp1(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved1();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled1");
        p_prime.innerHTML="A";
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled1", "true");
       localStorage.setItem("dragging1", "false");
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
        l_prime.setAttribute( "id", "filled1");
        l_prime.innerHTML="A";
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       var dragging2=false;
       localStorage.setItem("dragging2", "false");
       localStorage.setItem("filled1", "true");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('dragging3');
      ev.preventDefault();
        saved3();
        savedsp1(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved1();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled1");
        m_prime.innerHTML="A";
        console.log(m);
        console.log(m_prime);
       ev.target.appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled1", "true");
    };

    //pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp1(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved1();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled1");
        n_prime.innerHTML="A";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp1").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled1", "true");
    };
};

function savepad1filled(ev) {
    //padtop1 to savepad1
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
        p_prime.innerHTML="A";
        console.log(p);
        console.log(p_prime);
       document.getElementById("sp1").appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled1", "true");
       localStorage.setItem("dragging1", "false");
    };

  //padtop2 to savepad1 
  //changed p and p prime to l
    if (localStorage.getItem("dragging2") == "true") {
     console.log('overlapping 2drag');
      ev.preventDefault();
      //padtopnumber
        saved2();
    //savedpadnumber with padtop in function
        savedsp1(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved1();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled1");
        l_prime.innerHTML="A";
        console.log(l);
        console.log(l_prime);
       document.getElementById("sp1").appendChild(l_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled1", "true");
       localStorage.setItem("dragging1", "false");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('overlapping 3drag');
      ev.preventDefault();
        saved3();
        savedsp1(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved1();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled1");
        m_prime.innerHTML="A";
        console.log(m);
        console.log(m_prime);
       document.getElementById("sp1").appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled1", "true");
    };

//pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp1(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved1();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled1");
        n_prime.innerHTML="A";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp1").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled1", "true");
    };
};



function drop(ev) {
if (ev.target.id == "filled1") {
        console.log('filled');
        var elem = document.getElementById("filled1");
        elem.parentNode.removeChild(elem);
        console.log('deleted');
        savepad1filled(ev);
    };
if (ev.target.id == "sp1") {
    savepad1(ev);
};

if (ev.target.id == "filled2") {
        console.log('filled 2');
        var elem = document.getElementById("filled2");
        elem.parentNode.removeChild(elem);
        console.log('deleted');
        savepad2filled(ev);
    };
if (ev.target.id == "sp2") {
    savepad2(ev);
};

if (ev.target.id == "filled3") {
        console.log('filled 3');
        var elem = document.getElementById("filled3");
        elem.parentNode.removeChild(elem);
        console.log('deleted');
        savepad3filled(ev);
    };
if (ev.target.id == "sp3") {
    savepad3(ev);
};

if (ev.target.id == "filled4") {
        console.log('filled 4');
        var elem = document.getElementById("filled4");
        elem.parentNode.removeChild(elem);
        console.log('deleted');
        savepad4filled(ev);
    };
if (ev.target.id == "sp4") {
    savepad4(ev);
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



function savepad2(ev) {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('dragging1');
      ev.preventDefault();
        saved1();
        savedsp2(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved2();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled2");
        p_prime.innerHTML="S";
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled2", "true");
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
        l_prime.setAttribute( "id", "filled2");
        l_prime.innerHTML="S";
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       var dragging2=false;
       localStorage.setItem("dragging2", "false");
       localStorage.setItem("filled2", "true");
    };

//pad 3 to sp2
    if (localStorage.getItem("dragging3") == "true") {
        console.log('dragging3');
      ev.preventDefault();
        saved3();
        savedsp2(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved2();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled2");
        m_prime.innerHTML="S";
        console.log(m);
        console.log(m_prime);
       ev.target.appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled2", "true");
    };

    //pad 4 to sp2
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp2(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved2();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled2");
        n_prime.innerHTML="S";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp2").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled2", "true");
    };
};

function savepad2filled(ev) {
    //padtop1 to savepad1
    if (localStorage.getItem("dragging1") == "true") {
         console.log('overlapping');
      ev.preventDefault();
        saved1();
        savedsp2(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved2();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled2");
        p_prime.innerHTML="S";
        console.log(p);
        console.log(p_prime);
       document.getElementById("sp2").appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled2", "true");
       localStorage.setItem("dragging1", "false");
    };

  //padtop2 to savepad1 
  //changed p and p prime to l
    if (localStorage.getItem("dragging2") == "true") {
     console.log('overlapping 2drag');
      ev.preventDefault();
      //padtopnumber
        saved2();
    //savedpadnumber with padtop in function
        savedsp2(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved2();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled2");
        l_prime.innerHTML="S";
        console.log(l);
        console.log(l_prime);
       document.getElementById("sp2").appendChild(l_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled2", "true");
       localStorage.setItem("dragging1", "false");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('overlapping 3drag');
      ev.preventDefault();
        saved3();
        savedsp2(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved2();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled2");
        m_prime.innerHTML="S";
        console.log(m);
        console.log(m_prime);
       document.getElementById("sp2").appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled2", "true");
    };

//pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp2(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved2();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled2");
        n_prime.innerHTML="S";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp2").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled2", "true");
    };
};







//Spad3
function savepad3(ev) {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('dragging1');
      ev.preventDefault();
        saved1();
        savedsp3(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved3();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled3");
        p_prime.innerHTML="D";
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled3", "true");
       localStorage.setItem("dragging1", "false");
    };


    if (localStorage.getItem("dragging2") == "true") {
        console.log('dragging2');
      ev.preventDefault();
        saved2();
        savedsp3(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved3();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled3");
        l_prime.innerHTML="D";
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       var dragging2=false;
       localStorage.setItem("dragging2", "false");
       localStorage.setItem("filled3", "true");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('dragging3');
      ev.preventDefault();
        saved3();
        savedsp3(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved3();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled3")
        m_prime.innerHTML="D";;
        console.log(m);
        console.log(m_prime);
       ev.target.appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled3", "true");
    };

    //pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp3(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved3();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled3");
        n_prime.innerHTML="D";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp3").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("filled3", "true");
       localStorage.setItem("dragging4", "false");
    };
};

function savepad3filled(ev) {
    //padtop1 to savepad1
    if (localStorage.getItem("dragging1") == "true") {
         console.log('overlapping');
      ev.preventDefault();
        saved1();
        savedsp3(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved3();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled3");
        p_prime.innerHTML="D";
        console.log(p);
        console.log(p_prime);
       document.getElementById("sp3").appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled3", "true");
       localStorage.setItem("dragging1", "false");
    };

  //padtop2 to savepad1 
  //changed p and p prime to l
    if (localStorage.getItem("dragging2") == "true") {
     console.log('overlapping 2drag');
      ev.preventDefault();
      //padtopnumber
        saved2();
    //savedpadnumber with padtop in function
        savedsp3(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved3();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled3");
        l_prime.innerHTML="D";
        console.log(l);
        console.log(l_prime);
       document.getElementById("sp3").appendChild(l_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled3", "true");
       localStorage.setItem("dragging2", "false");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('overlapping 3drag');
      ev.preventDefault();
        saved3();
        savedsp3(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved3();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled3");
        m_prime.innerHTML="D";
        console.log(m);
        console.log(m_prime);
       document.getElementById("sp3").appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled3", "true");
    };

//pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp3(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved3();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled3");
        n_prime.innerHTML="D";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp3").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled3", "true");
    };
};






//Spad4
function savepad4(ev) {
    if (localStorage.getItem("dragging1") == "true") {
         console.log('dragging1');
      ev.preventDefault();
        saved1();
        savedsp4(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved4();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled4");
        p_prime.innerHTML="F";
        console.log(p);
        console.log(p_prime);
       ev.target.appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled4", "true");
       localStorage.setItem("dragging1", "false");
    };


    if (localStorage.getItem("dragging2") == "true") {
        console.log('dragging2');
      ev.preventDefault();
        saved2();
        savedsp4(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved4();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled4");
        l_prime.innerHTML="F";
        console.log(l);
        console.log(l_prime);
       ev.target.appendChild(l_prime);
       var dragging2=false;
       localStorage.setItem("dragging2", "false");
       localStorage.setItem("filled4", "true");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('dragging3');
      ev.preventDefault();
        saved3();
        savedsp4(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved4();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled4");
        m_prime.innerHTML="F";
        console.log(m);
        console.log(m_prime);
       ev.target.appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled4", "true");
    };

    //pad 4 to sp4
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp4(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved4();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled4");
        n_prime.innerHTML="F";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp4").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("filled4", "true");
       localStorage.setItem("dragging4", "false");
    };
};

function savepad4filled(ev) {
    //padtop1 to savepad1
    if (localStorage.getItem("dragging1") == "true") {
         console.log('overlapping');
      ev.preventDefault();
        saved1();
        savedsp4(1);
        var p = document.getElementById("padtop1");
        var p_prime = p.cloneNode(true);
        p_prime.setAttribute( "onClick", "playsaved4();" );
        p_prime.setAttribute( "draggable", "false");
        p_prime.setAttribute( "id", "filled4");
        p_prime.innerHTML="F";
        console.log(p);
        console.log(p_prime);
       document.getElementById("sp4").appendChild(p_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled4", "true");
       localStorage.setItem("dragging1", "false");
    };

  //padtop2 to savepad1 
  //changed p and p prime to l
    if (localStorage.getItem("dragging2") == "true") {
     console.log('overlapping 2drag');
      ev.preventDefault();
      //padtopnumber
        saved2();
    //savedpadnumber with padtop in function
        savedsp4(2);
        var l = document.getElementById("padtop2");
        var l_prime = l.cloneNode(true);
        l_prime.setAttribute( "onClick", "playsaved4();" );
        l_prime.setAttribute( "draggable", "false");
        l_prime.setAttribute( "id", "filled4");
        l_prime.innerHTML="F";
        console.log(l);
        console.log(l_prime);
       document.getElementById("sp4").appendChild(l_prime);
       var dragging1=false;
       var filled1=true
       localStorage.setItem("filled4", "true");
       localStorage.setItem("dragging2", "false");
    };

//pad 3 to sp1
    if (localStorage.getItem("dragging3") == "true") {
        console.log('overlapping 3drag');
      ev.preventDefault();
        saved3();
        savedsp4(3);
        var m = document.getElementById("padtop3");
        var m_prime = m.cloneNode(true);
        m_prime.setAttribute( "onClick", "playsaved4();" );
        m_prime.setAttribute( "draggable", "false");
        m_prime.setAttribute( "id", "filled4");
        m_prime.innerHTML="F";
        console.log(m);
        console.log(m_prime);
       document.getElementById("sp4").appendChild(m_prime);
       var dragging3=false;
       localStorage.setItem("dragging3", "false");
       localStorage.setItem("filled4", "true");
    };

//pad 4 to sp1
    if (localStorage.getItem("dragging4") == "true") {
        console.log('overlapping 4drag');
      ev.preventDefault();
        saved4();
        savedsp4(4);
        var n = document.getElementById("padtop4");
        var n_prime = n.cloneNode(true);
        n_prime.setAttribute( "onClick", "playsaved4();" );
        n_prime.setAttribute( "draggable", "false");
        n_prime.setAttribute( "id", "filled4");
        n_prime.innerHTML="F";
        console.log(n);
        console.log(n_prime);
       document.getElementById("sp4").appendChild(n_prime);
       var dragging4=false;
       localStorage.setItem("dragging4", "false");
       localStorage.setItem("filled4", "true");
    };
};


//loading audio file

document.getElementById("rll").addEventListener("change", handleFiles, false);

function handleFiles(event) {
    var files = event.target.files;
    $("#rlly").attr("src", URL.createObjectURL(files[0]));
    console.log(URL.createObjectURL(files[0]));
    localStorage.setItem("audiofile", URL.createObjectURL(files[0]));
    document.getElementById("rllly").load();
    document.getElementById("rll").addEventListener("change", handleFiles, false);
    duration();
};


function duration() {
//duration of audio file
// Request URL of the Audio File
var wavfile = localStorage.getItem("audiofile");

// Create an instance of AudioContext
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Open an Http Request
var request = new XMLHttpRequest();
request.open('GET', wavfile, true);
request.responseType = 'arraybuffer';
request.onload = function() {
    audioContext.decodeAudioData(request.response, function(buffer) {
        // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
        var duration = buffer.duration;

        // example 12.3234 seconds
        console.log("The duration of the song is of: " + duration + " seconds");
        // Alternatively, just display the integer value with
        // parseInt(duration)
        // 12 seconds
        var durationreal;
        var durationreal=duration*1000;
        console.log(durationreal);
        localStorage.setItem("durationreal", durationreal);
    });
};

// Start Request
request.send();
};

function modalopen() {
    console.log('did it');

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("help");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById("help").onclick = function() {
  document.getElementById("myModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0];onclick = function() {
  document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myModal").style.display = "none";
  }
}

};

function closemodal() {
// When the user clicks on <span> (x), close the modal

  document.getElementById("myModal").style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("myModal").style.display = "none";
  }
}

