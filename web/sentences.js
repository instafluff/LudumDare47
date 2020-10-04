const NewDay = [ "It's a fresh new day! The animal shelter is opening up for visitors" ];

const Introductions = {
    "male_child": [ "A little boy walks into the animal shelter." ],
    "male_older": [ "An older gentleman walks into the animal shelter." ],
    "male_family": [ "A man walks into the animal shelter with two tiny humans." ],
    "female_child": [ "A little girl walks into the animal shelter." ],
    "female_older": [ "An older lady walks into the animal shelter." ],
    "female_family": [ "A woman walks into the animal shelter with two tiny humans." ],
    "neither_child": [ "A young child walks into the animal shelter." ],
    "neither_older": [ "An older person walks into the animal shelter." ],
    "neither_family": [ "Someone walks into the animal shelter with two tiny humans." ],
};

const Descriptions = {
    "male": {
        "child": [ "He tugs at a big human's clothes and says, \"Dad, look at this one!\"" ],
        "older": [ "He walks around with a cane" ],
        "family": [ "They look around the animal shelter together." ],
        "nice": [ "He asks politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"" ],
        "rude": [ "He yells out, \"Can I get some help around here?\"" ],
        "hipster": [ "He's dressed a little funny with bright hair colors!" ],
        "dog-lover": [ "He starts looking at the dogs first." ],
        "cat-lover": [ "He starts looking at the cats first." ],
        "lonely": [ "He wanders around by himself and looks a little sad." ],
        "easily-impressed": [ "He seems interested in every animal in sight" ],
        "rich": [ "He's wearing a really fancy and expensive-looking watch. Whoa!" ],
        "poor": [ "I'm not sure if he had anything to eat today or could afford the meal." ],
        "mid-income": [ "He drove up in a sturdy-looking mini-van." ],
        "busy": [ "He's talking to someone on the phone while he looks around.", "I wonder if he'll have time for me if I'm adopted." ],
        "leisure": [ "Looks like he's got a lot of time on his hands. He might hang around here for hours." ],
        "sporadic": [ "I think he's here because he's got some free time today." ],
        "fluffy": [ "He's looking at all the fluffy animals." ],
        "smooth": [ "He's looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like he might've gone camping recently." ],
        "indoorsy": [ "He's carrying a book to read." ],
        "exercise": [ "He looks pretty fit and is wearing bicycle shorts." ],
        "couchpotato": [ "I think he probably loves to relax to a good movie on the couch." ],
        "vampire": [ "Did he yawn? Maybe it's still too early in the day for him." ],
    },
    "female": {
        "child": [ "She tugs at a big human's clothes and says, \"Dad, look at this one!\"" ],
        "older": [ "She walks around with a cane" ],
        "family": [ "They look around the animal shelter together." ],
        "nice": [ "She asks politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"" ],
        "rude": [ "She yells out, \"Can I get some help around here?\"" ],
        "hipster": [ "She's dressed a little funny with bright hair colors!" ],
        "dog-lover": [ "She starts looking at the dogs first." ],
        "cat-lover": [ "She starts looking at the cats first." ],
        "lonely": [ "She wanders around by herself and looks a little sad." ],
        "easily-impressed": [ "She seems interested in every animal in sight" ],
        "rich": [ "She's wearing a really fancy and expensive-looking watch. Whoa!" ],
        "poor": [ "I'm not sure if she had anything to eat today or could afford the meal." ],
        "mid-income": [ "She drove up in a sturdy-looking mini-van." ],
        "busy": [ "She's talking to someone on the phone while she looks around.", "I wonder if she'll have time for me if I'm adopted." ],
        "leisure": [ "Looks like she's got a lot of time on her hands. She might hang around here for hours." ],
        "sporadic": [ "I think she's here because she's got some free time today." ],
        "fluffy": [ "She's looking at all the fluffy animals.", "\"IT'S SO FLUFFY I'M GONNA DIE!\"" ],
        "smooth": [ "She's looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like she might've gone camping recently." ],
        "indoorsy": [ "She's carrying a book to read." ],
        "exercise": [ "She looks pretty fit and is wearing yoga pants." ],
        "couchpotato": [ "I think she probably loves to relax to a good movie on the couch." ],
        "vampire": [ "Did she yawn? Maybe it's still too early in the day for her." ],
    },
    "neither": {
        "child": [ "They tug at a big human's clothes and says, \"Dad, look at this one!\"" ],
        "older": [ "They walk around with a cane" ],
        "family": [ "They look around the animal shelter together." ],
        "nice": [ "They ask politely, \"I'm looking for a good companion to tag along with me. Who's your nicest animal buddy here?\"" ],
        "rude": [ "They yell out, \"Can I get some help around here?\"" ],
        "hipster": [ "They're dressed a little funny with bright hair colors!" ],
        "dog-lover": [ "They start looking at the dogs first." ],
        "cat-lover": [ "They start looking at the cats first." ],
        "lonely": [ "They wander around by themselves and look a little sad." ],
        "easily-impressed": [ "They seem interested in every animal in sight" ],
        "rich": [ "They're wearing a really fancy and expensive-looking watch. Whoa!" ],
        "poor": [ "I'm not sure if they had anything to eat today or could afford the meal." ],
        "mid-income": [ "They drove up in a sturdy-looking mini-van." ],
        "busy": [ "They're talking to someone on the phone while she looks around.", "I wonder if they'll have time for me if I'm adopted." ],
        "leisure": [ "Looks like they've got a lot of time on their hands. They might hang around here for hours." ],
        "sporadic": [ "I think they're here because they've got some free time today." ],
        "fluffy": [ "They're looking at all the fluffy animals." ],
        "smooth": [ "They're looking at all the hair-less animals." ],
        "outdoorsy": [ "Looks like they might've gone camping recently." ],
        "indoorsy": [ "They're carrying a book to read." ],
        "exercise": [ "They look pretty fit and they're wearing a Fitbit." ],
        "couchpotato": [ "I think they probably love to relax to a good movie on the couch." ],
        "vampire": [ "Did they yawn? Maybe it's still too early in the day for them." ],
    },
};

// --reactions--
const Reactions = {
    "male": {
		"denied": [ "He walked away. \"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\", he says." ],
		"neutral": [ "He's just watching me." ],
		"interested": [ "He seems to be interested in me." ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\", he says." ],
		"adopted": [ "He reaches over and picks you up. \"You're coming home with me! I'll take good care of you.\"" ],
    },
    "female": {
		"denied": [ "She walked away. \"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\", she says." ],
		"neutral": [ "She's just watching me." ],
		"interested": [ "She seems to be interested in me." ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\", she says." ],
		"adopted": [ "She reaches over and picks you up. \"You're coming home with me! I'll take good care of you.\"" ],
    },
    "neither": {
		"denied": [ "They walked away. \"I don't think this one is quite what I'm looking for.\"" ],
		"disappointed": [ "\"Oh... that was strange...\", they say." ],
		"neutral": [ "They're just watching me." ],
		"interested": [ "They seem to be interested in me." ],
		"veryinterested": [ "\"Oooh... I like you, little buddy.\", they say." ],
		"adopted": [ "They reach over and pick you up. \"You're coming home with me! I'll take good care of you.\"" ],
    },
};

const Encouragement = [
	"It's okay. I'll try again tomorrow!",
	"I don't think that was going to be a good home for me anyway.",
	"Next one's going to love me for sure!",
	"I can't wait to meet more visitors!"
];

const Celebration = [
	"I'm going home! I can't believe it! I'm adopted!"
];
