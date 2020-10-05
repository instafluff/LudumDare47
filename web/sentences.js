const Title = "Homepick, A Pet Text Adventure";
const TitleTexts = [ "This game is so fluffy...", "Instafluff and PatrikHerman made this game!", "I hope I get adopted.", "I wonder if today's the day...", "Who will come see us today?", "Can I convince someone to pick me?", "I'll do my best!", "I can't wait to find a fur-ever home.", "It must be nice having a warm cozy home." ];
const NewDay = [ "It's a fresh new day! The animal shelter is opening up for visitors" ];

const Introductions = {
    "male_child": [ "A little boy walks into the animal shelter.", "A young boy walks into the animal shelter." ],
    "male_older": [ "An older gentleman walks into the animal shelter.", "An elderly gentleman walks into the animal shelter." ],
    "male_family": [ "A man walks into the animal shelter with two tiny humans.", "An adult man walks into the animal shelter with two youthful people." ],
    "female_child": [ "A little girl walks into the animal shelter.", "A young girl walks into the animal shelter." ],
    "female_older": [ "An older lady walks into the animal shelter.", "An elderly woman walks into the animal shelter." ],
    "female_family": [ "A woman walks into the animal shelter with two tiny humans.", "A woman walks into the animal shelter with two, much younger people." ],
    "neither_child": [ "A young child walks into the animal shelter." ],
    "neither_older": [ "An older person walks into the animal shelter.", "An elderly person walks into the animal shelter." ],
    "neither_family": [ "Someone walks into the animal shelter with two tiny humans.", "Someone walks into the animal shelter with two, much younger people." ],
};

const Descriptions = {
    "male": {
        "child": [ "He's tugging at a big human's clothes" ],
        "older": [ "He has a long stick in him hand, I think it helps him walk", "He is walking really slow", "He is squinting his eyes, probably can't see very well" ],
        "family": [ "They look around the animal shelter together.", "The kids start running around the store", "This family looks very active!", "The kids are chasing each other", "I wish I could play with them!"],
        "nice": [ "He asks politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"", "Aw he seems so nice!", "I bet he has a lot of treats"],
        "rude": [ "Oh no, he looks kinda mean.", "He's yelling, \"Can I get some help around here?\"", "He is not smiling at all!" ],
        "hipster": [ "He's dressed a little funny with bright hair colors!"],
        "dog-lover": [ "He's looking at the dogs first." ],
        "cat-lover": [ "He's looking at the cats first." ],
        "lonely": [ "He wanders around by herself and looks a little sad.", "Aw I wish I could make him smile somehow!", "He needs someone to cheer him up", "I think he wants a cuddly friend"],
        "easily-impressed": [ "He seems interested in every animal in sight", "He looks like he would love to take home all the animals here!"],
        "rich": [ "He's wearing an expensive-looking watch. Whoa!", "I bet I could fit in his bag", "I better not pee on him clothes, they look so fancy!"],
        "poor": [ "I'm not sure if he had anything to eat today or could afford the meal.", "Her clothes look kinda dirty"],
        "mid-income": [ "He drove up in a sturdy-looking mini-van.", "He drove up in such a big car! Many dogs could fit in there!" ],
        "busy": [ "He's talking to someone on the phone while he looks around.", "I wonder if he'll have time for me if I'm adopted.", "He's probably looking for a sleepy friend"],
        "leisure": [ "Looks like he's got a lot of time on him hands.", "He might hang around here for hours.", "He's just looking at all the animals like he's in no rush at all!", "I think he could play with me all day long"],
        "sporadic": [ "I think he's here because he's got some free time today."],
        "fluffy": [ "He's looking at all the fluffy animals.", "\"IT'S SO FLUFFY I'M GONNA DIE!\"" ],
        "smooth": [ "He's looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like he might've gone camping recently.", "Wow, he is really tan", "He probably spends a LOT of time outside!", "I bet he likes nature a lot", "I think he needs an active buddy"],
        "indoorsy": [ "He's carrying a book to read.", "He is kinda pale", "He probably doesn't spend much time outside", "He doesn't look very sportsy"],
        "exercise": [ "He looks pretty fit", "He is wearing yoga pants.", "I think he likes jogging!", "We could run around together!", "I think he likes to play catch!"],
        "couchpotato": [ "I think he probably loves to relax to a good movie on the couch.", "I think he needs a cuddly friend"],
        "vampire": [ "Did he yawn?", "Maybe it's still too early in the day for him.", "He is not really enjoying the sun!", "Maybe he usually sleeps at this time of day", "He looks ready to take a nap"],
        "trainer": [ "This one looks strict!", "He has a whistle around him neck", "Maybe he'll teach me some tricks!", "Tricks = treats!"],
    },
    "female": {
        "child": [ "She's tugging at a big human's clothes" ],
        "older": [ "She has a long stick in her hand, I think it helps her walk", "She is walking really slow", "She is squinting her eyes, probably can't see very well" ],
        "family": [ "They look around the animal shelter together.", "The kids start running around the store", "This family looks very active!", "The kids are chasing each other", "I wish I could play with them!"],
        "nice": [ "She asks politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"", "Aw she seems so nice!", "I bet she has a lot of treats"],
        "rude": [ "Oh no, she looks kinda mean.", "She's yelling, \"Can I get some help around here?\"", "She is not smiling at all!" ],
        "hipster": [ "She's dressed a little funny with bright hair colors!"],
        "dog-lover": [ "She's looking at the dogs first." ],
        "cat-lover": [ "She's looking at the cats first." ],
        "lonely": [ "She wanders around by herself and looks a little sad.", "Aw I wish I could make her smile somehow!", "She needs someone to cheer her up", "I think she wants a cuddly friend"],
        "easily-impressed": [ "She seems interested in every animal in sight", "She looks like she would love to take home all the animals here!"],
        "rich": [ "She's wearing an expensive-looking watch. Whoa!", "I bet I could fit in her purse", "I better not pee on her clothes, they look so fancy!"],
        "poor": [ "I'm not sure if she had anything to eat today or could afford the meal.", "Her clothes look kinda dirty"],
        "mid-income": [ "She drove up in a sturdy-looking mini-van.", "She drove up in such a big car! Many dogs could fit in there!" ],
        "busy": [ "She's talking to someone on the phone while she looks around.", "I wonder if she'll have time for me if I'm adopted.", "She's probably looking for a sleepy friend"],
        "leisure": [ "Looks like she's got a lot of time on her hands.", "She might hang around here for hours.", "She's just looking at all the animals like she's in no rush at all!", "I think she could play with me all day long"],
        "sporadic": [ "I think she's here because she's got some free time today."],
        "fluffy": [ "She's looking at all the fluffy animals.", "\"IT'S SO FLUFFY I'M GONNA DIE!\"" ],
        "smooth": [ "She's looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like she might've gone camping recently.", "Wow, she is really tan", "She probably spends a LOT of time outside!", "I bet she likes nature a lot", "I think she needs an active buddy"],
        "indoorsy": [ "She's carrying a book to read.", "She is kinda pale", "She probably doesn't spend much time outside", "She doesn't look very sportsy"],
        "exercise": [ "She looks pretty fit", "She is wearing yoga pants.", "I think she likes jogging!", "We could run around together!", "I think she likes to play catch!"],
        "couchpotato": [ "I think she probably loves to relax to a good movie on the couch.", "I think she needs a cuddly friend"],
        "vampire": [ "Did she yawn?", "Maybe it's still too early in the day for her.", "She is not really enjoying the sun!", "Maybe she usually sleeps at this time of day", "She looks ready to take a nap"],
        "trainer": [ "This one looks strict!", "She has a whistle around her neck", "Maybe she'll teach me some tricks!", "Tricks = treats!"],
    },
    "neither": {
        "child": [ "They're tugging at a big human's clothes" ],
        "older": [ "They have a long stick in their hand, I think it helps them walk", "They are walking really slow", "They are squinting their eyes, probably can't see very well" ],
        "family": [ "They look around the animal shelter together.", "The kids start running around the store", "This family looks very active!", "The kids are chasing each other", "I wish I could play with them!"],
        "nice": [ "They're asking politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"", "Aw they seem so nice!", "I bet they have a lot of treats"],
        "rude": [ "Oh no, they look kinda mean.", "They're yelling, \"Can I get some help around here?\"", "They're not smiling at all!" ],
        "hipster": [ "They're dressed a little funny with bright hair colors!"],
        "dog-lover": [ "They're looking at the dogs first." ],
        "cat-lover": [ "They're looking at the cats first." ],
        "lonely": [ "They wander around by themselves and look a little sad.", "Aw I wish I could make them smile somehow!", "They need someone to cheer them up", "I think they want a cuddly friend"],
        "easily-impressed": [ "He seems interested in every animal in sight", "They look like they would love to take home all the animals here!"],
        "rich": [ "They're wearing an expensive-looking watch. Whoa!", "I bet I could fit in their bag", "I better not pee on him clothes, they look so fancy!"],
        "poor": [ "I'm not sure if they had anything to eat today or could afford the meal.", "They're clothes look kinda dirty"],
        "mid-income": [ "They drove up in a sturdy-looking mini-van.", "They drove up in such a big car! Many dogs could fit in there!" ],
        "busy": [ "They're talking to someone on the phone while they look around.", "I wonder if they'll have time for me if I'm adopted.", "They're probably looking for a sleepy friend"],
        "leisure": [ "Looks like they've got a lot of time on their hands.", "They might hang around here for hours.", "They're just looking at all the animals like they're in no rush at all!", "I think they could play with me all day long"],
        "sporadic": [ "I think they're here because they've got some free time today."],
        "fluffy": [ "They're looking at all the fluffy animals.", "\"IT'S SO FLUFFY I'M GONNA DIE!\"" ],
        "smooth": [ "They're looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like they might've gone camping recently.", "Wow, they are really tan", "They probably spend a LOT of time outside!", "I bet they like nature a lot", "I think they need an active buddy"],
        "indoorsy": [ "They're carrying a book to read.", "They're kinda pale", "They probably don't spend much time outside", "They don't look very sportsy"],
        "exercise": [ "They look pretty fit", "They are wearing yoga pants.", "I think they like jogging!", "We could run around together!", "I think they like to play catch!"],
        "couchpotato": [ "I think they probably love to relax to a good movie on the couch.", "I think they need a cuddly friend"],
        "vampire": [ "Did they yawn?", "Maybe it's still too early in the day for them.", "They are not really enjoying the sun!", "Maybe they usually sleep at this time of day", "They look ready to take a nap"],
        "trainer": [ "This one looks strict!", "They have a whistle around their neck", "Maybe they'll teach me some tricks!", "Tricks = treats!"],
    },
};

const ReactionsNarration = {
    "male": {
		"denied": [ "He walked away..." ],
		"disappointed": [ "He looks a little disappointed." ],
		"neutral": [ "He watches you cautiously." ],
		"interested": [ "He takes a closer look at you." ],
		"veryinterested": [ "It seems you have his full attention at the moment." ],
		"adopted": [ "He reaches over and picks you up." ],
    },
    "female": {
		"denied": [ "She walked away..." ],
		"disappointed": [ "She looks a little disappointed." ],
		"neutral": [ "She watches you cautiously." ],
		"interested": [ "She takes a closer look at you." ],
		"veryinterested": [ "It seems you have her full attention at the moment." ],
		"adopted": [ "She reaches over and picks you up." ],
    },
    "neither": {
		"denied": [ "They walked away..." ],
		"disappointed": [ "They look a little disappointed." ],
		"neutral": [ "They watch you cautiously." ],
		"interested": [ "They take a closer look at you." ],
		"veryinterested": [ "It seems you have their full attention at the moment." ],
		"adopted": [ "They reach over and pick you up." ],
    },
};

const Reactions = {
    "male": {
		"denied": [ "\"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\"" ],
		"neutral": [ "\"Hmm.\"" ],
		"interested": [ "\"Aww, you're an interesting one.\"" ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\"" ],
		"adopted": [ "\"You're coming home with me! I'll take good care of you.\"" ],
    },
    "female": {
		"denied": [ "\"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\"" ],
		"neutral": [ "\"Hmm.\"" ],
		"interested": [ "\"Aww, you're an interesting one.\"" ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\"" ],
		"adopted": [ "\"You're coming home with me! I'll take good care of you.\"" ],
    },
    "neither": {
		"denied": [ "\"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\"" ],
		"neutral": [ "\"Hmm.\"" ],
		"interested": [ "\"Aww, you're an interesting one.\"" ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\", they say." ],
		"adopted": [ "\"You're coming home with me! I'll take good care of you.\"" ],
    },
};

const Encouragement = [
	"It's okay. I'll try again tomorrow!",
	"I don't think that was going to be a good home for me anyway...",
	"Next one's going to love me for sure!",
	"I'll definitely impress the next one!",
    "That was so close! I can't wait for tomorrow."
];

const Celebration = [
	"I'm going home! I can't believe it! I'm adopted!!"
];
