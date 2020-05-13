


var y = document.getElementById("video");

var myVideo=document.getElementById('audio2')


function yield() {
    //small screen, load other JS files
		if ((document.getElementById("test").currentTime) > 8) {
		document.getElementById("test").style.left == "-20px";

};
};

        //the script has been added to the DOM, you can now use it's code

//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) )

function scoot() {
	var y = document.getElementById("video");
	y.setAttribute( "id" , "video2");
}

function scoot2() {
	var z = document.getElementById("video2");
	z.setAttribute( "id" , "video3");
}


function lookout() {
	var y = document.getElementById("video");
	setTimeout(scoot, 3000);
	setTimeout(scoot2, 6000);

	y.addEventListener('timeupdate', function() {
    document.getElementById("timer").innerHTML = this.currentTime;
    currentTime = this.currentTime;
});
};



//var y = document.getElementById("video");
//y.setAttribute( "id" , "video2");