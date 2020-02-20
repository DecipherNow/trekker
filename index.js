/**
 * Copyright [yyyy] [name of copyright owner]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const quotes = [
	{ quote: "A man either lives life as it happens to him, meets it head-on and licks it, or he turns his back on it and starts to wither away.", character: "Dr. Boyce", episode: "The Menagerie" },
	{ quote: "Logic is the beginning of wisdom, not the end.", character: "Mr. Spock", episode: "Star Trek VI: The Undiscovered Country" },
	{ quote: "I haven't faced death. I've cheated death. I've tricked my way out of death and patted myself on the back for my ingenuity; I know nothing.", character: "James T. Kirk", episode: "Star Trek II: The Wrath of Khan" },
	{ quote: "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.", character: "Mr. Spock", episode: "Amok Time" },
	{ quote: "Live now; make now always the most precious time. Now will never come again.", character: "Jean-Luc Picard", episode: "Inner Light" },
	{ quote: "Computers make excellent and efficient servants, but I have no wish to serve under them.", character: "Mr. Spock", episode: "The Ultimate Computer" },
	{ quote: "Sometimes a feeling is all we humans have to go on. James T. Kirk", character: "A Taste of Armageddon", episode: "" },
	{ quote: "With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably.", character: "Jean-Luc Picard", episode: "The Drumhead" },
	{ quote: "It's not safe out here. It's wondrous, with treasures to satiate desires both subtle and gross; but it's not for the timid.", character: "Q", episode: "Q Who?" },
	{ quote: "... the prejudices people feel about each other disappear when they get to know each other.", character: "James T. Kirk", episode: "Elaan of Troyius" },
	{ quote: "If we're going to be damned, let's be damned for what we really are.", character: "Jean-Luc Picard", episode: "Encounter At Farpoint" },
	{ quote: "What makes one man an exceptional leader? We see indications that it's his negative side which makes him strong, that his evil side, controlled and disciplined, is vital to his strength. Your negative side removed from you, the power of command begins to elude you.", character: "Mr. Spock", episode: "The Enemy Within" },
	{ quote: "A library serves no purpose unless someone is using it.", character: "Mr. Atoz", episode: "All Our Yesterdays" },
	{ quote: "When dreams become more important than reality, you give up travel, building, creating; you even forget how to repair the machines left behind by your ancestors. You just sit living and reliving other lives left behind in the thought records.", character: "Vina", episode: "The Menagerie" },
	{ quote: "Insufficient facts always invite danger.", character: "Mr. Spock", episode: "Space Seed" },
	{ quote: "Perhaps man wasn't meant for paradise. Maybe he was meant to claw, to scratch all the way.", character: "James T. Kirk", episode: "This Side of Paradise" },
	{ quote: "Madness has no purpose. Or reason. But it may have a goal.", character: "Mr. Spock", episode: "The Alternative Factor" },
	{ quote: "Insults are effective only where emotion is present.", character: "Mr. Spock", episode: "Who Mourns for Adonais?" },
	{ quote: "They used to say that if Man was meant to fly, he'd have wings. But he did fly. He discovered he had to.", character: "James T. Kirk", episode: "Return to Tomorrow" },
	{ quote: "Humans do have an amazing capacity for believing what they choose -- and excluding that which is painful.", character: "Mr. Spock", episode: "And The Children Shall Lead" },
	{ quote: "When a child is taught, it's programmed with simple instructions, and at some point, if its mind develops properly, it exceeds the sum of what it was taught, thinks independently.", character: "Dr. Daystrom", episode: "The Ultimate Computer" },
	{ quote: "Leave bigotry in your quarters; there's no room for it on the bridge.", character: "James T. Kirk", episode: "Balance of Terror" },
	{ quote: "Genius doesn't work on an assembly line basis. Did Einstein, Kazanga or Sitar of Vulcan produce new and revolutionary theories on a regular schedule? You can't simply say, 'Today I will be brilliant.'", character: "James T. Kirk", episode: "The Ultimate Computer" },
	{ quote: "In critical moments, men sometimes see exactly what they wish to see.", character: "Mr. Spock", episode: "The Tholian Web" },
	{ quote: "Compassion: that's the one things no machine ever had. Maybe it's the one thing that keeps men ahead of them.", character: "Dr. McCoy", episode: "The Ultimate Computer" },
	{ quote: "Change is the essential process of all existence.", character: "Mr. Spock", episode: "Let That Be Your Last Battlefield" },
	{ quote: "The intellect is not all... but its cultivation must come first, or the individual makes errors... wastes time in unprofitable pursuits.", character: "Flint", episode: "Requiem for Methuselah" },
	{ quote: "Without followers, evil cannot spread.", character: "Mr. Spock", episode: "And The Children Shall Lead" },
	{ quote: "Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die.", character: "James T. Kirk", episode: "Metamorphosis" },
	{ quote: "Curious, how often you humans manage to obtain that which you do not want.", character: "Mr. Spock", episode: "Errand of Mercy" },
	{ quote: "One man cannot summon the future. But one man can change the present!", character: "Alternate Mr. Spock", episode: "Mirror, Mirror" },
	{ quote: "We're a most promising species, Mr. Spock, as predators go. Did you know that? I frequently have my doubts. I don't. Not any more. And maybe in a thousand years or so, we'll be able to prove it.", character: "James T. Kirk", episode: "Arena" },
	{ quote: "I speak of rights! A machine has none; a man must. If you do not grant him that right, you have brought us down to the level of the machine; indeed, you have elevated that machine above us!", character: "Samuel T. Cogley", episode: "Court Martial" },
	{ quote: "A lie is a very poor way to say hello.", character: "Edith Keeler", episode: "The City on the Edge of Forever" },
	{ quote: "To all mankind -- may we never find space so vast, planets so cold, heart and mind so empty that we cannot fill them with love and warmth.", character: "Garth", episode: "Dagger of the Mind" },
	{ quote: "Human beings do not survive on bread alone ... but on the nourishments of liberty. For what indeed is a man without freedom ... naught but a mechanism, trapped in the cogwheels of eternity.", character: "Harry Mudd", episode: "I, Mudd" },
	{ quote: "We prefer to help ourselves. We make mistakes, but we're human -- and maybe that's the word that best explains us.", character: "Kirk", episode: "I, Mudd" },
	{ quote: "It's time you learned that freedom is never a gift. It has to be earned.", character: "James T. Kirk", episode: "The Return of the Archons" },
	{ quote: "To be human is to be complex. You can't avoid a little ugliness -- from within -- and from without.", character: "James T. Kirk", episode: "Requiem for Methuselah" },
	{ quote: "Improve a mechanical device and you may double productivity. But improve man, you gain a thousandfold.", character: "Khan Noonian Singh", episode: "Space Seed" },
	{ quote: "It's hard to believe that something which is neither seen nor felt can do so much harm. That's true. But an idea can't be seen or felt.", character: "Vanna/Kirk", episode: "The Cloud Minders" },
	{ quote: "You know the greatest danger facing us is ourselves, and irrational fear of the unknown. There is no such thing as the unknown. Only things temporarily hidden, temporarily not understood.", character: "James T. Kirk", episode: "The Corbomite Maneuver" },
	{ quote: "Your will to survive, your love of life, your passion to know ... Everything that is truest and best in all species of beings has been revealed to you. Those are the qualities that make a civilization worthy to survive.", character: "Lai the Vian", episode: "The Empath" },
	{ quote: "A species that enslaves other beings is hardly superior -- mentally or otherwise.", character: "James T. Kirk", episode: "The Gamesters of Triskelion" },
	{ quote: "When the personality of a human is involved, exact predictions are hazardous.", character: "Dr. McCoy", episode: "The Lights of Zetar" }
];

exports.handler = function (_, _, callback) {
	var quote = quotes[Math.round(-(quotes.length - 1) * (Math.sqrt(1.0 - Math.random() ** 2.0) - 1.0))];
	callback(null, { body: JSON.stringify(quote) });
}
