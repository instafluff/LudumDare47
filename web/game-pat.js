// AUDIO PRELOAD
var click1 = new Howl({
  src: ['web/assets/UI/click1.mp3'],
  volume: 0.1
});
var click2 = new Howl({
  src: ['web/assets/UI/click2.mp3']
});
var woosh = new Howl({
  src: ['web/assets/UI/woosh.mp3'],
  volume: 0.3
});
var barkLoudness = 0.3;
var walkLoudness = 0.6;
var bark1 = new Howl({
	  src: ['web/assets/barks/bark1.mp3'],
	  volume: barkLoudness
	}),
	bark2 = new Howl({
	  src: ['web/assets/barks/bark2.mp3'],
	  volume: barkLoudness
	}),
	bark3 = new Howl({
	  src: ['web/assets/barks/bark3.mp3'],
	  volume: barkLoudness
	}),
	bark4 = new Howl({
	  src: ['web/assets/barks/bark4.mp3'],
	  volume: barkLoudness
	}),
	bark5 = new Howl({
	  src: ['web/assets/barks/bark5.mp3'],
	  volume: barkLoudness
	}),
	bark6 = new Howl({
	  src: ['web/assets/barks/bark6.mp3'],
	  volume: barkLoudness
	});
var barks = [bark1, bark2, bark3, bark4, bark5, bark6];

var walk_in = new Howl({
	  src: ['web/assets/walk/walk-in2.mp3'],
	  volume: walkLoudness
	}),
	walk_out = new Howl({
	  src: ['web/assets/walk/walk-out2.mp3'],
	  volume: walkLoudness
	});


var volumeSetting = 1;
document.getElementById( "volume-control" ).addEventListener( "click", ( event ) => {
	volumeSetting = ( volumeSetting + 1 ) % 3;
	click1.play();
	switch( volumeSetting ) {
	case 0:
		music.volume( 0 );
		document.getElementById( "volume-icon" ).setAttribute( "class", "fa fa-volume-mute" );
		break;
	case 1:
		music.volume( 0.10 );
		document.getElementById( "volume-icon" ).setAttribute( "class", "fa fa-volume-down" );
		break;
	case 2:
		music.volume( 0.15 );
		document.getElementById( "volume-icon" ).setAttribute( "class", "fa fa-volume-up" );
		break;
	}
});



// ACTION BUTTONS
function showButtons() {
	anime({
		targets: '#action-buttons',
		top: '0px',
		easing: 'spring(1, 80, 10, 0)'
	});
	woosh.play();
}
function hideButtons() {
	anime({
		targets: '#action-buttons',
		top: '114px',
		easing: 'spring(1, 80, 10, 0)'
	});
	woosh.play();
}


// 3D BARKS!!
function bark( pan ) {
	var currentBark = barks[Math.floor(Math.random()*barks.length)];
	var panorama = pan;
	if (!pan) panorama = Math.random()*2-1;
	currentBark.stereo(panorama);
	currentBark.volume(barkLoudness*Math.random() + 0.1);
	barks[Math.floor(Math.random()*barks.length)].play();
}

// WALK SOUNDS
function walkIn() {
	walk_in.play();
}
function walkOut() {
	walk_out.play();
}