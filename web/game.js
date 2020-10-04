// PomoTheDog: You need to able to name the puppy fluff
// Songfox: ohhhh the lizards should do that cute hand wave that they do~
// (づ｡◕‿‿◕｡)づ
// (ง'̀-'́)ง
// https://textfac.es/ https://lingojam.com/CursedText
//
// TITLE IDEARS:
// "Quest for the Perfect Home"

const AllTraits = [ "male", "female", "neither", "child", "older", "family", "nice", "rude", "hipster", "dog-lover", "cat-lover", "lonely", "easily-impressed", "rich", "poor", "mid-income", "busy", "leisure", "sporadic", "fluffy", "smooth", "outdoorsy", "indoorsy", "exercise", "couchpotato", "vampire" ];

const VisitorTraits = {
	"gender": [ "male", "female", "neither" ],
	"type": [ "child", "older", "family" ], // teen
	"personality": [ "nice", "rude", "hipster", "dog-lover", "cat-lover", "lonely", "easily-impressed" ],
	"affluence": [ "rich", "poor", "mid-income" ],
	"schedule": [ "busy", "leisure", "sporadic" ],
	"preference": [ "fluffy", "smooth" ],
	"activeness": [ "outdoorsy", "indoorsy", "exercise", "couchpotato", "vampire" ],
};

const TraitStats = {
	"male": {
		"cute": -1,
		"energetic": 1,
		"fluffy": -1,
		"happy": 0,
		"confident": 1,
		"relaxed": 0,
		"playful": 1,
	},
	"female": {
		"cute": 1,
		"energetic": -1,
		"fluffy": 1,
		"happy": 0,
		"confident": -1,
		"relaxed": 0,
		"playful": 1,
	},
	"neither": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 1,
		"happy": 0,
		"confident": -1,
		"relaxed": 1,
		"playful": -1,
	},
	"child": {
		"cute": -1,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 1,
	},
	"older": {
		"cute": 1,
		"energetic": -1,
		"fluffy": 1,
		"happy": 1,
		"confident": -1,
		"relaxed": 1,
		"playful": -1,
	},
	"family": {
		"cute": 0,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 1,
		"relaxed": 0,
		"playful": 0,
	},
	"nice": {
		"cute": 0,
		"energetic": -1,
		"fluffy": 0,
		"happy": -1,
		"confident": -1,
		"relaxed": -1,
		"playful": 0,
	},
	"rude": {
		"cute": -1,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 1,
		"relaxed": 0,
		"playful": 0,
	},
	"hipster": {
		"cute": -1,
		"energetic": 1,
		"fluffy": -1,
		"happy": 1,
		"confident": -1,
		"relaxed": 1,
		"playful": -1,
	},
	"dog-lover": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 1,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 0,
	},
	"cat-lover": {
		"cute": 1,
		"energetic": 0,
		"fluffy": 1,
		"happy": 0,
		"confident": 0,
		"relaxed": -1,
		"playful": 0,
	},
	// "boomer": {
	// 	"cute": 0,
	// 	"energetic": -1,
	// 	"fluffy": 0,
	// 	"happy": -1,
	// 	"confident": 1,
	// 	"relaxed": 0,
	// 	"playful": 0,
	// },
	"lonely": {
		"cute": 1,
		"energetic": 0,
		"fluffy": 0,
		"happy": 1,
		"confident": -1,
		"relaxed": 1,
		"playful": 1,
	},
	"easily-impressed": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 0,
		"happy": 1,
		"confident": 0,
		"relaxed": 0,
		"playful": 0,
	},
	"rich": {
		"cute": 0,
		"energetic": -1,
		"fluffy": 0,
		"happy": 1,
		"confident": 1,
		"relaxed": 1,
		"playful": -1,
	},
	"poor": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 0,
		"happy": 1,
		"confident": -1,
		"relaxed": -1,
		"playful": -1,
	},
	"mid-income": {
		"cute": 0,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 1,
		"playful": 1,
	},
	"busy": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 1,
		"playful": -1,
	},
	"leisure": {
		"cute": -1,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 1,
	},
	"sporadic": {
		"cute": 0,
		"energetic": -1,
		"fluffy": 0,
		"happy": 0,
		"confident": -1,
		"relaxed": 0,
		"playful": -1,
	},
	"fluffy": {
		"cute": 0,
		"energetic": 0,
		"fluffy": 1,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 0,
	},
	"smooth": {
		"cute": 0,
		"energetic": 0,
		"fluffy": -1,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 0,
	},
	"outdoorsy": {
		"cute": -1,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 1,
		"relaxed": 0,
		"playful": 1,
	},
	"indoorsy": {
		"cute": 1,
		"energetic": -1,
		"fluffy": 0,
		"happy": 0,
		"confident": -1,
		"relaxed": 0,
		"playful": -1,
	},
	"exercise": {
		"cute": 0,
		"energetic": 1,
		"fluffy": 0,
		"happy": 0,
		"confident": 1,
		"relaxed": 0,
		"playful": 0,
	},
	"couchpotato": {
		"cute": 0,
		"energetic": -1,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": -1,
	},
	"vampire": {
		"cute": -1,
		"energetic": -1,
		"fluffy": 0,
		"happy": 0,
		"confident": -1,
		"relaxed": -1,
		"playful": 1,
	},
};

function createVisitor() {
	let traits = [];
	Object.keys( VisitorTraits ).forEach( t => {
		const selection = VisitorTraits[ t ];
		traits.push( selection[ getRandomInt( selection.length ) ] );
	});
	return traits;
}

function calculateVisitorStats( traits ) {
	let stats = {
		"cute": 0,
		"energetic": 0,
		"fluffy": 0,
		"happy": 0,
		"confident": 0,
		"relaxed": 0,
		"playful": 0,
	};
	let statTypes = Object.keys( stats );
	traits.forEach( t => {
		statTypes.forEach( s => {
			stats[ s ] += TraitStats[ t ][ s ];
		});
	});
	// // Normalize stats
	// statTypes.forEach( s => {
	// 	stats[ s ] /= statTypes.length;
	// });
	return stats;
}

const StatTypes = [
	"cute", // cool
	"energetic", // calm
	"fluffy", // smooth
	"happy", // sad
	"confident", // shy
	"relaxed", // nervous
	"playful", // lazy
];

const Actions = {
	"dog": {
		"barksoft": {
			"name": "Soft Bark",
			"desc": [ "You bark softly" ],
			"effect": {
				"cute": 1,
				"energetic": 1,
				"fluffy": 0,
				"happy": 1,
				"confident": -2,
				"relaxed": -1,
				"playful": 0,
			}
		},
		"barkloud": {
			"name": "Loud Bark",
			"desc": [ "You bark with a lot of energy", "WOOF WOOF! That was loud!", "You start barking and it echoes... choes.. oes... s.." ],
			"effect": {
				"cute": -2,
				"energetic": 1,
				"fluffy": 0,
				"happy": 0,
				"confident": 1,
				"relaxed": -1,
				"playful": 1,
			}
		},
		"sleep": {
			"name": "Sleep",
			"desc": [ "You fall asleep... Zzzz.." ],
			"effect": {
				"cute": 1,
				"energetic": -2,
				"fluffy": 1,
				"happy": 0,
				"confident": 0,
				"relaxed": 1,
				"playful": -1,
			}
		},
		"pretendsleep": {
			"name": "Pretend to Sleep",
			"desc": [ "You start to look sleepy...", "You're dozing off with eyes getting ready to close" ],
			"effect": {
				"cute": 1,
				"energetic": -1,
				"fluffy": 0,
				"happy": 0,
				"confident": 0,
				"relaxed": 1,
				"playful": -1,
			}
		},
		"jump": {
			"name": "Jump",
			"desc": [ "You jump up and down excitedly!" ],
			"effect": {
				"cute": 0,
				"energetic": 1,
				"fluffy": 0,
				"happy": 0,
				"confident": 1,
				"relaxed": -1,
				"playful": 2,
			}
		},
		"sniff": {
			"name": "Sniff Around",
			"desc": [ "You walk along the wall curiously smelling everything" ],
			"effect": {
				"cute": 1,
				"energetic": -1,
				"fluffy": 0,
				"happy": 0,
				"confident": -1,
				"relaxed": -1,
				"playful": 1,
			}
		},
		"whine": {
			"name": "Whine",
			"desc": [ "You make whining noises to try and get attention" ],
			"effect": {
				"cute": 1,
				"energetic": 0,
				"fluffy": 0,
				"happy": -1,
				"confident": -1,
				"relaxed": -1,
				"playful": 0,
			}
		},
		// "cry": {},
		// "pee": {},
		// "poop": {},
		// "walkbacknforth": {
		// 	"desc": "walk back and forth"
		// },
		// "lickpaws": {},
		// "chasetail": {},
		// "looksad": {},
		// "standup": {},
	}
}

function getActions( player ) {
	let actions = Actions[ player.type ];
	return actions;
}

function applyAction( player, actionName ) {
	let action = Actions[ player.type ][ actionName ];
	Object.keys( action.effect ).forEach( e => {
		player.stats[ e ] += action.effect[ e ];
	});
	return player;
}

function statsScore( A, B ) {
	return StatTypes.reduce( ( total, stat ) => {
		let sum = total + ( Math.min( 1, Math.max( -1, A[ stat ] ) ) === Math.min( 1, Math.max( -1, B[ stat ] ) ) ? 1 : 0 );
		// console.log( stat, A[ stat ], "vs", B[ stat ], "=>", sum );
		return sum;
	}, 0 );
}

function getRandomInt( num ) {
	return Math.floor( num * Math.random() );
}

function shuffleArray( array ) {
    for( let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
