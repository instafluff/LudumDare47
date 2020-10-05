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