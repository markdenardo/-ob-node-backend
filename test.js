// const http = require('http')

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(cards))
// })


const express = require('express')
const app = express()

let cards = [
    {
        "id": "1",
        "type": "card",
        "attributes": {
            "strategy": "Abandon normal instruments",
            "notes": [
                {
                    "id": 1,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 1,
                    "created_at": "2020-04-24T23:39:05.822Z",
                    "updated_at": "2020-04-24T23:39:05.822Z"
                },
                {
                    "id": 2,
                    "text": "sampled a kangaroo eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 1,
                    "created_at": "2020-04-24T23:39:05.829Z",
                    "updated_at": "2020-04-24T23:39:05.829Z"
                },
                {
                    "id": 3,
                    "text": "played a Accordion in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 1,
                    "created_at": "2020-04-24T23:39:05.834Z",
                    "updated_at": "2020-04-24T23:39:05.834Z"
                }
            ]
        }
    },
    {
        "id": "2",
        "type": "card",
        "attributes": {
            "strategy": "Accept advice",
            "notes": [
                {
                    "id": 4,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 2,
                    "created_at": "2020-04-24T23:39:05.839Z",
                    "updated_at": "2020-04-24T23:39:05.839Z"
                },
                {
                    "id": 5,
                    "text": "sampled a monkey eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 2,
                    "created_at": "2020-04-24T23:39:05.845Z",
                    "updated_at": "2020-04-24T23:39:05.845Z"
                },
                {
                    "id": 6,
                    "text": "played a Accordion in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 2,
                    "created_at": "2020-04-24T23:39:05.850Z",
                    "updated_at": "2020-04-24T23:39:05.850Z"
                }
            ]
        }
    },
    {
        "id": "3",
        "type": "card",
        "attributes": {
            "strategy": "Accretion",
            "notes": [
                {
                    "id": 7,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 3,
                    "created_at": "2020-04-24T23:39:05.855Z",
                    "updated_at": "2020-04-24T23:39:05.855Z"
                },
                {
                    "id": 8,
                    "text": "sampled a gnat eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 3,
                    "created_at": "2020-04-24T23:39:05.860Z",
                    "updated_at": "2020-04-24T23:39:05.860Z"
                },
                {
                    "id": 9,
                    "text": "played a Drums in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 3,
                    "created_at": "2020-04-24T23:39:05.865Z",
                    "updated_at": "2020-04-24T23:39:05.865Z"
                }
            ]
        }
    },
    {
        "id": "4",
        "type": "card",
        "attributes": {
            "strategy": "A line has two sides",
            "notes": [
                {
                    "id": 10,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 4,
                    "created_at": "2020-04-24T23:39:05.869Z",
                    "updated_at": "2020-04-24T23:39:05.869Z"
                },
                {
                    "id": 11,
                    "text": "sampled a crow eating Honeydew melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 4,
                    "created_at": "2020-04-24T23:39:05.874Z",
                    "updated_at": "2020-04-24T23:39:05.874Z"
                },
                {
                    "id": 12,
                    "text": "played a Trumpet in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 4,
                    "created_at": "2020-04-24T23:39:05.879Z",
                    "updated_at": "2020-04-24T23:39:05.879Z"
                }
            ]
        }
    },
    {
        "id": "5",
        "type": "card",
        "attributes": {
            "strategy": "Allow an easement (an easement is the abandonment of a structure)",
            "notes": [
                {
                    "id": 13,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 5,
                    "created_at": "2020-04-24T23:39:05.883Z",
                    "updated_at": "2020-04-24T23:39:05.883Z"
                },
                {
                    "id": 14,
                    "text": "sampled a crocodile eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 5,
                    "created_at": "2020-04-24T23:39:05.888Z",
                    "updated_at": "2020-04-24T23:39:05.888Z"
                },
                {
                    "id": 15,
                    "text": "played a Ukelele in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 5,
                    "created_at": "2020-04-24T23:39:05.894Z",
                    "updated_at": "2020-04-24T23:39:05.894Z"
                }
            ]
        }
    },
    {
        "id": "6",
        "type": "card",
        "attributes": {
            "strategy": "Are there sections? Consider transitions",
            "notes": [
                {
                    "id": 16,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 6,
                    "created_at": "2020-04-24T23:39:05.899Z",
                    "updated_at": "2020-04-24T23:39:05.899Z"
                },
                {
                    "id": 17,
                    "text": "sampled a dog eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 6,
                    "created_at": "2020-04-24T23:39:05.904Z",
                    "updated_at": "2020-04-24T23:39:05.904Z"
                },
                {
                    "id": 18,
                    "text": "played a Ukelele in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 6,
                    "created_at": "2020-04-24T23:39:05.909Z",
                    "updated_at": "2020-04-24T23:39:05.909Z"
                }
            ]
        }
    },
    {
        "id": "7",
        "type": "card",
        "attributes": {
            "strategy": "Ask people to work against their better judgement",
            "notes": [
                {
                    "id": 19,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 7,
                    "created_at": "2020-04-24T23:39:05.914Z",
                    "updated_at": "2020-04-24T23:39:05.914Z"
                },
                {
                    "id": 20,
                    "text": "sampled a zebra eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 7,
                    "created_at": "2020-04-24T23:39:05.919Z",
                    "updated_at": "2020-04-24T23:39:05.919Z"
                },
                {
                    "id": 21,
                    "text": "played a Ukelele in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 7,
                    "created_at": "2020-04-24T23:39:05.924Z",
                    "updated_at": "2020-04-24T23:39:05.924Z"
                }
            ]
        }
    },
    {
        "id": "8",
        "type": "card",
        "attributes": {
            "strategy": "Ask your body",
            "notes": [
                {
                    "id": 22,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 8,
                    "created_at": "2020-04-24T23:39:05.929Z",
                    "updated_at": "2020-04-24T23:39:05.929Z"
                },
                {
                    "id": 23,
                    "text": "sampled a cat eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 8,
                    "created_at": "2020-04-24T23:39:05.934Z",
                    "updated_at": "2020-04-24T23:39:05.934Z"
                },
                {
                    "id": 24,
                    "text": "played a Clarinet in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 8,
                    "created_at": "2020-04-24T23:39:05.939Z",
                    "updated_at": "2020-04-24T23:39:05.939Z"
                }
            ]
        }
    },
    {
        "id": "9",
        "type": "card",
        "attributes": {
            "strategy": "Assemble some of the instruments in a group and treat the group",
            "notes": [
                {
                    "id": 25,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 9,
                    "created_at": "2020-04-24T23:39:05.944Z",
                    "updated_at": "2020-04-24T23:39:05.944Z"
                },
                {
                    "id": 26,
                    "text": "sampled a grasshopper eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 9,
                    "created_at": "2020-04-24T23:39:05.949Z",
                    "updated_at": "2020-04-24T23:39:05.949Z"
                },
                {
                    "id": 27,
                    "text": "played a Piano in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 9,
                    "created_at": "2020-04-24T23:39:05.954Z",
                    "updated_at": "2020-04-24T23:39:05.954Z"
                }
            ]
        }
    },
    {
        "id": "10",
        "type": "card",
        "attributes": {
            "strategy": "Balance the consistency principle with the inconsistency principle",
            "notes": [
                {
                    "id": 28,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 10,
                    "created_at": "2020-04-24T23:39:05.959Z",
                    "updated_at": "2020-04-24T23:39:05.959Z"
                },
                {
                    "id": 29,
                    "text": "sampled a monkey eating Lychees",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 10,
                    "created_at": "2020-04-24T23:39:05.963Z",
                    "updated_at": "2020-04-24T23:39:05.963Z"
                },
                {
                    "id": 30,
                    "text": "played a Ukelele in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 10,
                    "created_at": "2020-04-24T23:39:05.968Z",
                    "updated_at": "2020-04-24T23:39:05.968Z"
                }
            ]
        }
    },
    {
        "id": "11",
        "type": "card",
        "attributes": {
            "strategy": "Be dirty",
            "notes": [
                {
                    "id": 31,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 11,
                    "created_at": "2020-04-24T23:39:05.973Z",
                    "updated_at": "2020-04-24T23:39:05.973Z"
                },
                {
                    "id": 32,
                    "text": "sampled a mouse eating Mangosteens",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 11,
                    "created_at": "2020-04-24T23:39:05.978Z",
                    "updated_at": "2020-04-24T23:39:05.978Z"
                },
                {
                    "id": 33,
                    "text": "played a Xylophone in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 11,
                    "created_at": "2020-04-24T23:39:05.984Z",
                    "updated_at": "2020-04-24T23:39:05.984Z"
                }
            ]
        }
    },
    {
        "id": "12",
        "type": "card",
        "attributes": {
            "strategy": "Breathe more deeply",
            "notes": [
                {
                    "id": 34,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 12,
                    "created_at": "2020-04-24T23:39:05.989Z",
                    "updated_at": "2020-04-24T23:39:05.989Z"
                },
                {
                    "id": 35,
                    "text": "sampled a termite eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 12,
                    "created_at": "2020-04-24T23:39:05.994Z",
                    "updated_at": "2020-04-24T23:39:05.994Z"
                },
                {
                    "id": 36,
                    "text": "played a Acoustic Guitar in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 12,
                    "created_at": "2020-04-24T23:39:06.000Z",
                    "updated_at": "2020-04-24T23:39:06.000Z"
                }
            ]
        }
    },
    {
        "id": "13",
        "type": "card",
        "attributes": {
            "strategy": "Bridges -build -burn",
            "notes": [
                {
                    "id": 37,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 13,
                    "created_at": "2020-04-24T23:39:06.005Z",
                    "updated_at": "2020-04-24T23:39:06.005Z"
                },
                {
                    "id": 38,
                    "text": "sampled a zebra eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 13,
                    "created_at": "2020-04-24T23:39:06.010Z",
                    "updated_at": "2020-04-24T23:39:06.010Z"
                },
                {
                    "id": 39,
                    "text": "played a Cello in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 13,
                    "created_at": "2020-04-24T23:39:06.015Z",
                    "updated_at": "2020-04-24T23:39:06.015Z"
                }
            ]
        }
    },
    {
        "id": "14",
        "type": "card",
        "attributes": {
            "strategy": "Cascades",
            "notes": [
                {
                    "id": 40,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 14,
                    "created_at": "2020-04-24T23:39:06.020Z",
                    "updated_at": "2020-04-24T23:39:06.020Z"
                },
                {
                    "id": 41,
                    "text": "sampled a pig eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 14,
                    "created_at": "2020-04-24T23:39:06.025Z",
                    "updated_at": "2020-04-24T23:39:06.025Z"
                },
                {
                    "id": 42,
                    "text": "played a Trumpet in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 14,
                    "created_at": "2020-04-24T23:39:06.030Z",
                    "updated_at": "2020-04-24T23:39:06.030Z"
                }
            ]
        }
    },
    {
        "id": "15",
        "type": "card",
        "attributes": {
            "strategy": "Change instrument roles",
            "notes": [
                {
                    "id": 43,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 15,
                    "created_at": "2020-04-24T23:39:06.035Z",
                    "updated_at": "2020-04-24T23:39:06.035Z"
                },
                {
                    "id": 44,
                    "text": "sampled a clam eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 15,
                    "created_at": "2020-04-24T23:39:06.040Z",
                    "updated_at": "2020-04-24T23:39:06.040Z"
                },
                {
                    "id": 45,
                    "text": "played a Oboe in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 15,
                    "created_at": "2020-04-24T23:39:06.045Z",
                    "updated_at": "2020-04-24T23:39:06.045Z"
                }
            ]
        }
    },
    {
        "id": "16",
        "type": "card",
        "attributes": {
            "strategy": "Change nothing and continue with immaculate consistency",
            "notes": [
                {
                    "id": 46,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 16,
                    "created_at": "2020-04-24T23:39:06.050Z",
                    "updated_at": "2020-04-24T23:39:06.050Z"
                },
                {
                    "id": 47,
                    "text": "sampled a salmon eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 16,
                    "created_at": "2020-04-24T23:39:06.056Z",
                    "updated_at": "2020-04-24T23:39:06.056Z"
                },
                {
                    "id": 48,
                    "text": "played a Clarinet in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 16,
                    "created_at": "2020-04-24T23:39:06.061Z",
                    "updated_at": "2020-04-24T23:39:06.061Z"
                }
            ]
        }
    },
    {
        "id": "17",
        "type": "card",
        "attributes": {
            "strategy": "Children's voices -speaking -singing",
            "notes": [
                {
                    "id": 49,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 17,
                    "created_at": "2020-04-24T23:39:06.066Z",
                    "updated_at": "2020-04-24T23:39:06.066Z"
                },
                {
                    "id": 50,
                    "text": "sampled a locust eating Longan",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 17,
                    "created_at": "2020-04-24T23:39:06.073Z",
                    "updated_at": "2020-04-24T23:39:06.073Z"
                },
                {
                    "id": 51,
                    "text": "played a Organ in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 17,
                    "created_at": "2020-04-24T23:39:06.081Z",
                    "updated_at": "2020-04-24T23:39:06.081Z"
                }
            ]
        }
    },
    {
        "id": "18",
        "type": "card",
        "attributes": {
            "strategy": "Cluster analysis",
            "notes": [
                {
                    "id": 52,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 18,
                    "created_at": "2020-04-24T23:39:06.088Z",
                    "updated_at": "2020-04-24T23:39:06.088Z"
                },
                {
                    "id": 53,
                    "text": "sampled a macaw eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 18,
                    "created_at": "2020-04-24T23:39:06.094Z",
                    "updated_at": "2020-04-24T23:39:06.094Z"
                },
                {
                    "id": 54,
                    "text": "played a Clarinet in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 18,
                    "created_at": "2020-04-24T23:39:06.100Z",
                    "updated_at": "2020-04-24T23:39:06.100Z"
                }
            ]
        }
    },
    {
        "id": "19",
        "type": "card",
        "attributes": {
            "strategy": "Consider different fading systems",
            "notes": [
                {
                    "id": 55,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 19,
                    "created_at": "2020-04-24T23:39:06.109Z",
                    "updated_at": "2020-04-24T23:39:06.109Z"
                },
                {
                    "id": 56,
                    "text": "sampled a goat eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 19,
                    "created_at": "2020-04-24T23:39:06.117Z",
                    "updated_at": "2020-04-24T23:39:06.117Z"
                },
                {
                    "id": 57,
                    "text": "played a Ukelele in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 19,
                    "created_at": "2020-04-24T23:39:06.123Z",
                    "updated_at": "2020-04-24T23:39:06.123Z"
                }
            ]
        }
    },
    {
        "id": "20",
        "type": "card",
        "attributes": {
            "strategy": "Consult other sources -promising -unpromising",
            "notes": [
                {
                    "id": 58,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 20,
                    "created_at": "2020-04-24T23:39:06.130Z",
                    "updated_at": "2020-04-24T23:39:06.130Z"
                },
                {
                    "id": 59,
                    "text": "sampled a weasel eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 20,
                    "created_at": "2020-04-24T23:39:06.137Z",
                    "updated_at": "2020-04-24T23:39:06.137Z"
                },
                {
                    "id": 60,
                    "text": "played a Bass Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 20,
                    "created_at": "2020-04-24T23:39:06.143Z",
                    "updated_at": "2020-04-24T23:39:06.143Z"
                }
            ]
        }
    },
    {
        "id": "21",
        "type": "card",
        "attributes": {
            "strategy": "Convert a melodic element into a rhythmic element",
            "notes": [
                {
                    "id": 61,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 21,
                    "created_at": "2020-04-24T23:39:06.148Z",
                    "updated_at": "2020-04-24T23:39:06.148Z"
                },
                {
                    "id": 62,
                    "text": "sampled a gorilla eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 21,
                    "created_at": "2020-04-24T23:39:06.156Z",
                    "updated_at": "2020-04-24T23:39:06.156Z"
                },
                {
                    "id": 63,
                    "text": "played a Ukelele in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 21,
                    "created_at": "2020-04-24T23:39:06.163Z",
                    "updated_at": "2020-04-24T23:39:06.163Z"
                }
            ]
        }
    },
    {
        "id": "22",
        "type": "card",
        "attributes": {
            "strategy": "Courage!",
            "notes": [
                {
                    "id": 64,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 22,
                    "created_at": "2020-04-24T23:39:06.169Z",
                    "updated_at": "2020-04-24T23:39:06.169Z"
                },
                {
                    "id": 65,
                    "text": "sampled a bat eating Pineapple",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 22,
                    "created_at": "2020-04-24T23:39:06.176Z",
                    "updated_at": "2020-04-24T23:39:06.176Z"
                },
                {
                    "id": 66,
                    "text": "played a Cello in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 22,
                    "created_at": "2020-04-24T23:39:06.182Z",
                    "updated_at": "2020-04-24T23:39:06.182Z"
                }
            ]
        }
    },
    {
        "id": "23",
        "type": "card",
        "attributes": {
            "strategy": "Cut a vital connection",
            "notes": [
                {
                    "id": 67,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 23,
                    "created_at": "2020-04-24T23:39:06.188Z",
                    "updated_at": "2020-04-24T23:39:06.188Z"
                },
                {
                    "id": 68,
                    "text": "sampled a mule eating Guava",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 23,
                    "created_at": "2020-04-24T23:39:06.194Z",
                    "updated_at": "2020-04-24T23:39:06.194Z"
                },
                {
                    "id": 69,
                    "text": "played a Clarinet in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 23,
                    "created_at": "2020-04-24T23:39:06.201Z",
                    "updated_at": "2020-04-24T23:39:06.201Z"
                }
            ]
        }
    },
    {
        "id": "24",
        "type": "card",
        "attributes": {
            "strategy": "Decorate, decorate",
            "notes": [
                {
                    "id": 70,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 24,
                    "created_at": "2020-04-24T23:39:06.207Z",
                    "updated_at": "2020-04-24T23:39:06.207Z"
                },
                {
                    "id": 71,
                    "text": "sampled a prairie dog eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 24,
                    "created_at": "2020-04-24T23:39:06.213Z",
                    "updated_at": "2020-04-24T23:39:06.213Z"
                },
                {
                    "id": 72,
                    "text": "played a Organ in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 24,
                    "created_at": "2020-04-24T23:39:06.219Z",
                    "updated_at": "2020-04-24T23:39:06.219Z"
                }
            ]
        }
    },
    {
        "id": "25",
        "type": "card",
        "attributes": {
            "strategy": "Define an area as 'safe' and use it as an anchor",
            "notes": [
                {
                    "id": 73,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 25,
                    "created_at": "2020-04-24T23:39:06.225Z",
                    "updated_at": "2020-04-24T23:39:06.225Z"
                },
                {
                    "id": 74,
                    "text": "sampled a cockroach eating Sultanas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 25,
                    "created_at": "2020-04-24T23:39:06.231Z",
                    "updated_at": "2020-04-24T23:39:06.231Z"
                },
                {
                    "id": 75,
                    "text": "played a Acoustic Guitar in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 25,
                    "created_at": "2020-04-24T23:39:06.237Z",
                    "updated_at": "2020-04-24T23:39:06.237Z"
                }
            ]
        }
    },
    {
        "id": "26",
        "type": "card",
        "attributes": {
            "strategy": "Destroy -nothing -the most important thing",
            "notes": [
                {
                    "id": 76,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 26,
                    "created_at": "2020-04-24T23:39:06.244Z",
                    "updated_at": "2020-04-24T23:39:06.244Z"
                },
                {
                    "id": 77,
                    "text": "sampled a skunk eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 26,
                    "created_at": "2020-04-24T23:39:06.250Z",
                    "updated_at": "2020-04-24T23:39:06.250Z"
                },
                {
                    "id": 78,
                    "text": "played a Piano in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 26,
                    "created_at": "2020-04-24T23:39:06.255Z",
                    "updated_at": "2020-04-24T23:39:06.255Z"
                }
            ]
        }
    },
    {
        "id": "27",
        "type": "card",
        "attributes": {
            "strategy": "Discard an axiom",
            "notes": [
                {
                    "id": 79,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 27,
                    "created_at": "2020-04-24T23:39:06.261Z",
                    "updated_at": "2020-04-24T23:39:06.261Z"
                },
                {
                    "id": 80,
                    "text": "sampled a antelope eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 27,
                    "created_at": "2020-04-24T23:39:06.268Z",
                    "updated_at": "2020-04-24T23:39:06.268Z"
                },
                {
                    "id": 81,
                    "text": "played a Electric Guitar in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 27,
                    "created_at": "2020-04-24T23:39:06.275Z",
                    "updated_at": "2020-04-24T23:39:06.275Z"
                }
            ]
        }
    },
    {
        "id": "28",
        "type": "card",
        "attributes": {
            "strategy": "Disconnect from desire",
            "notes": [
                {
                    "id": 82,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 28,
                    "created_at": "2020-04-24T23:39:06.282Z",
                    "updated_at": "2020-04-24T23:39:06.282Z"
                },
                {
                    "id": 83,
                    "text": "sampled a skunk eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 28,
                    "created_at": "2020-04-24T23:39:06.288Z",
                    "updated_at": "2020-04-24T23:39:06.288Z"
                },
                {
                    "id": 84,
                    "text": "played a Bass Guitar in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 28,
                    "created_at": "2020-04-24T23:39:06.293Z",
                    "updated_at": "2020-04-24T23:39:06.293Z"
                }
            ]
        }
    },
    {
        "id": "29",
        "type": "card",
        "attributes": {
            "strategy": "Discover the recipes you are using and abandon them",
            "notes": [
                {
                    "id": 85,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 29,
                    "created_at": "2020-04-24T23:39:06.298Z",
                    "updated_at": "2020-04-24T23:39:06.298Z"
                },
                {
                    "id": 87,
                    "text": "played a Oboe in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 29,
                    "created_at": "2020-04-24T23:39:06.312Z",
                    "updated_at": "2020-04-24T23:39:06.312Z"
                }
            ]
        }
    },
    {
        "id": "30",
        "type": "card",
        "attributes": {
            "strategy": "Distorting time",
            "notes": [
                {
                    "id": 88,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 30,
                    "created_at": "2020-04-24T23:39:06.317Z",
                    "updated_at": "2020-04-24T23:39:06.317Z"
                },
                {
                    "id": 89,
                    "text": "sampled a grasshopper eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 30,
                    "created_at": "2020-04-24T23:39:06.323Z",
                    "updated_at": "2020-04-24T23:39:06.323Z"
                },
                {
                    "id": 90,
                    "text": "played a Cello in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 30,
                    "created_at": "2020-04-24T23:39:06.328Z",
                    "updated_at": "2020-04-24T23:39:06.328Z"
                }
            ]
        }
    },
    {
        "id": "31",
        "type": "card",
        "attributes": {
            "strategy": "Do nothing for as long as possible",
            "notes": [
                {
                    "id": 91,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 31,
                    "created_at": "2020-04-24T23:39:06.336Z",
                    "updated_at": "2020-04-24T23:39:06.336Z"
                },
                {
                    "id": 92,
                    "text": "sampled a cicada eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 31,
                    "created_at": "2020-04-24T23:39:06.343Z",
                    "updated_at": "2020-04-24T23:39:06.343Z"
                },
                {
                    "id": 93,
                    "text": "played a Harp in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 31,
                    "created_at": "2020-04-24T23:39:06.348Z",
                    "updated_at": "2020-04-24T23:39:06.348Z"
                }
            ]
        }
    },
    {
        "id": "32",
        "type": "card",
        "attributes": {
            "strategy": "Don't be afraid of things because they're easy to do",
            "notes": [
                {
                    "id": 94,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 32,
                    "created_at": "2020-04-24T23:39:06.353Z",
                    "updated_at": "2020-04-24T23:39:06.353Z"
                },
                {
                    "id": 95,
                    "text": "sampled a louse eating Custard Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 32,
                    "created_at": "2020-04-24T23:39:06.359Z",
                    "updated_at": "2020-04-24T23:39:06.359Z"
                },
                {
                    "id": 96,
                    "text": "played a Harmonica in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 32,
                    "created_at": "2020-04-24T23:39:06.364Z",
                    "updated_at": "2020-04-24T23:39:06.364Z"
                }
            ]
        }
    },
    {
        "id": "33",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened of cliches",
            "notes": [
                {
                    "id": 97,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 33,
                    "created_at": "2020-04-24T23:39:06.369Z",
                    "updated_at": "2020-04-24T23:39:06.369Z"
                },
                {
                    "id": 98,
                    "text": "sampled a seal  eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 33,
                    "created_at": "2020-04-24T23:39:06.375Z",
                    "updated_at": "2020-04-24T23:39:06.375Z"
                },
                {
                    "id": 99,
                    "text": "played a Accordion in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 33,
                    "created_at": "2020-04-24T23:39:06.380Z",
                    "updated_at": "2020-04-24T23:39:06.380Z"
                }
            ]
        }
    },
    {
        "id": "34",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened to display your talents",
            "notes": [
                {
                    "id": 100,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 34,
                    "created_at": "2020-04-24T23:39:06.385Z",
                    "updated_at": "2020-04-24T23:39:06.385Z"
                },
                {
                    "id": 101,
                    "text": "sampled a trout eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 34,
                    "created_at": "2020-04-24T23:39:06.390Z",
                    "updated_at": "2020-04-24T23:39:06.390Z"
                },
                {
                    "id": 102,
                    "text": "played a Harp in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 34,
                    "created_at": "2020-04-24T23:39:06.396Z",
                    "updated_at": "2020-04-24T23:39:06.396Z"
                }
            ]
        }
    },
    {
        "id": "35",
        "type": "card",
        "attributes": {
            "strategy": "Don't break the silence",
            "notes": [
                {
                    "id": 103,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 35,
                    "created_at": "2020-04-24T23:39:06.402Z",
                    "updated_at": "2020-04-24T23:39:06.402Z"
                },
                {
                    "id": 104,
                    "text": "sampled a salmon eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 35,
                    "created_at": "2020-04-24T23:39:06.407Z",
                    "updated_at": "2020-04-24T23:39:06.407Z"
                },
                {
                    "id": 105,
                    "text": "played a Violin in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 35,
                    "created_at": "2020-04-24T23:39:06.412Z",
                    "updated_at": "2020-04-24T23:39:06.412Z"
                }
            ]
        }
    },
    {
        "id": "36",
        "type": "card",
        "attributes": {
            "strategy": "Don't stress one thing more than another",
            "notes": [
                {
                    "id": 106,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 36,
                    "created_at": "2020-04-24T23:39:06.418Z",
                    "updated_at": "2020-04-24T23:39:06.418Z"
                },
                {
                    "id": 107,
                    "text": "sampled a goose eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 36,
                    "created_at": "2020-04-24T23:39:06.423Z",
                    "updated_at": "2020-04-24T23:39:06.423Z"
                },
                {
                    "id": 108,
                    "text": "played a Piano in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 36,
                    "created_at": "2020-04-24T23:39:06.428Z",
                    "updated_at": "2020-04-24T23:39:06.428Z"
                }
            ]
        }
    },
    {
        "id": "37",
        "type": "card",
        "attributes": {
            "strategy": "Do something boring",
            "notes": [
                {
                    "id": 109,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 37,
                    "created_at": "2020-04-24T23:39:06.433Z",
                    "updated_at": "2020-04-24T23:39:06.433Z"
                },
                {
                    "id": 110,
                    "text": "sampled a grasshopper eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 37,
                    "created_at": "2020-04-24T23:39:06.438Z",
                    "updated_at": "2020-04-24T23:39:06.438Z"
                },
                {
                    "id": 111,
                    "text": "played a Flute in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 37,
                    "created_at": "2020-04-24T23:39:06.444Z",
                    "updated_at": "2020-04-24T23:39:06.444Z"
                }
            ]
        }
    },
    {
        "id": "38",
        "type": "card",
        "attributes": {
            "strategy": "Do the washing up",
            "notes": [
                {
                    "id": 112,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 38,
                    "created_at": "2020-04-24T23:39:06.478Z",
                    "updated_at": "2020-04-24T23:39:06.478Z"
                },
                {
                    "id": 113,
                    "text": "sampled a spider eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 38,
                    "created_at": "2020-04-24T23:39:06.485Z",
                    "updated_at": "2020-04-24T23:39:06.485Z"
                },
                {
                    "id": 114,
                    "text": "played a Accordion in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 38,
                    "created_at": "2020-04-24T23:39:06.491Z",
                    "updated_at": "2020-04-24T23:39:06.491Z"
                }
            ]
        }
    },
    {
        "id": "39",
        "type": "card",
        "attributes": {
            "strategy": "Do the words need changing?",
            "notes": [
                {
                    "id": 115,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 39,
                    "created_at": "2020-04-24T23:39:06.498Z",
                    "updated_at": "2020-04-24T23:39:06.498Z"
                },
                {
                    "id": 116,
                    "text": "sampled a mule eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 39,
                    "created_at": "2020-04-24T23:39:06.505Z",
                    "updated_at": "2020-04-24T23:39:06.505Z"
                },
                {
                    "id": 117,
                    "text": "played a Piano in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 39,
                    "created_at": "2020-04-24T23:39:06.510Z",
                    "updated_at": "2020-04-24T23:39:06.510Z"
                }
            ]
        }
    },
    {
        "id": "40",
        "type": "card",
        "attributes": {
            "strategy": "Do we need holes?",
            "notes": [
                {
                    "id": 118,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 40,
                    "created_at": "2020-04-24T23:39:06.516Z",
                    "updated_at": "2020-04-24T23:39:06.516Z"
                },
                {
                    "id": 119,
                    "text": "sampled a herring eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 40,
                    "created_at": "2020-04-24T23:39:06.522Z",
                    "updated_at": "2020-04-24T23:39:06.522Z"
                },
                {
                    "id": 120,
                    "text": "played a Piano in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 40,
                    "created_at": "2020-04-24T23:39:06.528Z",
                    "updated_at": "2020-04-24T23:39:06.528Z"
                }
            ]
        }
    },
    {
        "id": "41",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise differences",
            "notes": [
                {
                    "id": 121,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 41,
                    "created_at": "2020-04-24T23:39:06.534Z",
                    "updated_at": "2020-04-24T23:39:06.534Z"
                },
                {
                    "id": 122,
                    "text": "sampled a ape eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 41,
                    "created_at": "2020-04-24T23:39:06.539Z",
                    "updated_at": "2020-04-24T23:39:06.539Z"
                },
                {
                    "id": 123,
                    "text": "played a Organ in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 41,
                    "created_at": "2020-04-24T23:39:06.544Z",
                    "updated_at": "2020-04-24T23:39:06.544Z"
                }
            ]
        }
    },
    {
        "id": "42",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise repetitions",
            "notes": [
                {
                    "id": 124,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 42,
                    "created_at": "2020-04-24T23:39:06.549Z",
                    "updated_at": "2020-04-24T23:39:06.549Z"
                },
                {
                    "id": 125,
                    "text": "sampled a mouse eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 42,
                    "created_at": "2020-04-24T23:39:06.554Z",
                    "updated_at": "2020-04-24T23:39:06.554Z"
                },
                {
                    "id": 126,
                    "text": "played a Drums in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 42,
                    "created_at": "2020-04-24T23:39:06.559Z",
                    "updated_at": "2020-04-24T23:39:06.559Z"
                }
            ]
        }
    },
    {
        "id": "43",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise the flaws",
            "notes": [
                {
                    "id": 127,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 43,
                    "created_at": "2020-04-24T23:39:06.565Z",
                    "updated_at": "2020-04-24T23:39:06.565Z"
                },
                {
                    "id": 128,
                    "text": "sampled a crocodile eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 43,
                    "created_at": "2020-04-24T23:39:06.571Z",
                    "updated_at": "2020-04-24T23:39:06.571Z"
                },
                {
                    "id": 129,
                    "text": "played a Acoustic Guitar in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 43,
                    "created_at": "2020-04-24T23:39:06.576Z",
                    "updated_at": "2020-04-24T23:39:06.576Z"
                }
            ]
        }
    },
    {
        "id": "44",
        "type": "card",
        "attributes": {
            "strategy": "Faced with a choice, do both (given by Dieter Rot)",
            "notes": [
                {
                    "id": 130,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 44,
                    "created_at": "2020-04-24T23:39:06.582Z",
                    "updated_at": "2020-04-24T23:39:06.582Z"
                },
                {
                    "id": 131,
                    "text": "sampled a pig eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 44,
                    "created_at": "2020-04-24T23:39:06.588Z",
                    "updated_at": "2020-04-24T23:39:06.588Z"
                },
                {
                    "id": 132,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 44,
                    "created_at": "2020-04-24T23:39:06.598Z",
                    "updated_at": "2020-04-24T23:39:06.598Z"
                }
            ]
        }
    },
    {
        "id": "45",
        "type": "card",
        "attributes": {
            "strategy": "Feedback recordings into an acoustic situation",
            "notes": [
                {
                    "id": 133,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 45,
                    "created_at": "2020-04-24T23:39:06.603Z",
                    "updated_at": "2020-04-24T23:39:06.603Z"
                },
                {
                    "id": 134,
                    "text": "sampled a gerbil eating Honeydew melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 45,
                    "created_at": "2020-04-24T23:39:06.608Z",
                    "updated_at": "2020-04-24T23:39:06.608Z"
                },
                {
                    "id": 135,
                    "text": "played a Drums in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 45,
                    "created_at": "2020-04-24T23:39:06.613Z",
                    "updated_at": "2020-04-24T23:39:06.613Z"
                }
            ]
        }
    },
    {
        "id": "46",
        "type": "card",
        "attributes": {
            "strategy": "Fill every beat with something",
            "notes": [
                {
                    "id": 136,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 46,
                    "created_at": "2020-04-24T23:39:06.618Z",
                    "updated_at": "2020-04-24T23:39:06.618Z"
                },
                {
                    "id": 137,
                    "text": "sampled a minnow eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 46,
                    "created_at": "2020-04-24T23:39:06.624Z",
                    "updated_at": "2020-04-24T23:39:06.624Z"
                },
                {
                    "id": 138,
                    "text": "played a Xylophone in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 46,
                    "created_at": "2020-04-24T23:39:06.629Z",
                    "updated_at": "2020-04-24T23:39:06.629Z"
                }
            ]
        }
    },
    {
        "id": "47",
        "type": "card",
        "attributes": {
            "strategy": "Get your neck massaged",
            "notes": [
                {
                    "id": 139,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 47,
                    "created_at": "2020-04-24T23:39:06.634Z",
                    "updated_at": "2020-04-24T23:39:06.634Z"
                },
                {
                    "id": 140,
                    "text": "sampled a eagle eating Plums",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 47,
                    "created_at": "2020-04-24T23:39:06.639Z",
                    "updated_at": "2020-04-24T23:39:06.639Z"
                },
                {
                    "id": 141,
                    "text": "played a Accordion in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 47,
                    "created_at": "2020-04-24T23:39:06.644Z",
                    "updated_at": "2020-04-24T23:39:06.644Z"
                }
            ]
        }
    },
    {
        "id": "48",
        "type": "card",
        "attributes": {
            "strategy": "Ghost echoes",
            "notes": [
                {
                    "id": 142,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 48,
                    "created_at": "2020-04-24T23:39:06.651Z",
                    "updated_at": "2020-04-24T23:39:06.651Z"
                },
                {
                    "id": 143,
                    "text": "sampled a beaver eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 48,
                    "created_at": "2020-04-24T23:39:06.656Z",
                    "updated_at": "2020-04-24T23:39:06.656Z"
                },
                {
                    "id": 144,
                    "text": "played a Violin in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 48,
                    "created_at": "2020-04-24T23:39:06.662Z",
                    "updated_at": "2020-04-24T23:39:06.662Z"
                }
            ]
        }
    },
    {
        "id": "49",
        "type": "card",
        "attributes": {
            "strategy": "Give the game away",
            "notes": [
                {
                    "id": 145,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 49,
                    "created_at": "2020-04-24T23:39:06.668Z",
                    "updated_at": "2020-04-24T23:39:06.668Z"
                },
                {
                    "id": 146,
                    "text": "sampled a rhinoceros eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 49,
                    "created_at": "2020-04-24T23:39:06.674Z",
                    "updated_at": "2020-04-24T23:39:06.674Z"
                },
                {
                    "id": 147,
                    "text": "played a Cello in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 49,
                    "created_at": "2020-04-24T23:39:06.679Z",
                    "updated_at": "2020-04-24T23:39:06.679Z"
                }
            ]
        }
    },
    {
        "id": "50",
        "type": "card",
        "attributes": {
            "strategy": "Give way to your worst impulse",
            "notes": [
                {
                    "id": 148,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 50,
                    "created_at": "2020-04-24T23:39:06.685Z",
                    "updated_at": "2020-04-24T23:39:06.685Z"
                },
                {
                    "id": 149,
                    "text": "sampled a hippopotamus eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 50,
                    "created_at": "2020-04-24T23:39:06.691Z",
                    "updated_at": "2020-04-24T23:39:06.691Z"
                },
                {
                    "id": 150,
                    "text": "played a Piano in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 50,
                    "created_at": "2020-04-24T23:39:06.696Z",
                    "updated_at": "2020-04-24T23:39:06.696Z"
                }
            ]
        }
    },
    {
        "id": "51",
        "type": "card",
        "attributes": {
            "strategy": "Go slowly all the way round the outside",
            "notes": [
                {
                    "id": 151,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 51,
                    "created_at": "2020-04-24T23:39:06.701Z",
                    "updated_at": "2020-04-24T23:39:06.701Z"
                },
                {
                    "id": 152,
                    "text": "sampled a prairie dog eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 51,
                    "created_at": "2020-04-24T23:39:06.707Z",
                    "updated_at": "2020-04-24T23:39:06.707Z"
                },
                {
                    "id": 153,
                    "text": "played a Trumpet in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 51,
                    "created_at": "2020-04-24T23:39:06.713Z",
                    "updated_at": "2020-04-24T23:39:06.713Z"
                }
            ]
        }
    },
    {
        "id": "52",
        "type": "card",
        "attributes": {
            "strategy": "Honor thy error as a hidden intention",
            "notes": [
                {
                    "id": 154,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 52,
                    "created_at": "2020-04-24T23:39:06.718Z",
                    "updated_at": "2020-04-24T23:39:06.718Z"
                },
                {
                    "id": 155,
                    "text": "sampled a impala eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 52,
                    "created_at": "2020-04-24T23:39:06.724Z",
                    "updated_at": "2020-04-24T23:39:06.724Z"
                },
                {
                    "id": 156,
                    "text": "played a Drums in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 52,
                    "created_at": "2020-04-24T23:39:06.730Z",
                    "updated_at": "2020-04-24T23:39:06.730Z"
                }
            ]
        }
    },
    {
        "id": "53",
        "type": "card",
        "attributes": {
            "strategy": "How would you have done it?",
            "notes": [
                {
                    "id": 157,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 53,
                    "created_at": "2020-04-24T23:39:06.736Z",
                    "updated_at": "2020-04-24T23:39:06.736Z"
                },
                {
                    "id": 158,
                    "text": "sampled a oyster eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 53,
                    "created_at": "2020-04-24T23:39:06.742Z",
                    "updated_at": "2020-04-24T23:39:06.742Z"
                },
                {
                    "id": 159,
                    "text": "played a Oboe in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 53,
                    "created_at": "2020-04-24T23:39:06.747Z",
                    "updated_at": "2020-04-24T23:39:06.747Z"
                }
            ]
        }
    },
    {
        "id": "54",
        "type": "card",
        "attributes": {
            "strategy": "Humanise something free of error",
            "notes": [
                {
                    "id": 160,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 54,
                    "created_at": "2020-04-24T23:39:06.753Z",
                    "updated_at": "2020-04-24T23:39:06.753Z"
                },
                {
                    "id": 161,
                    "text": "sampled a fish eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 54,
                    "created_at": "2020-04-24T23:39:06.758Z",
                    "updated_at": "2020-04-24T23:39:06.758Z"
                },
                {
                    "id": 162,
                    "text": "played a Accordion in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 54,
                    "created_at": "2020-04-24T23:39:06.764Z",
                    "updated_at": "2020-04-24T23:39:06.764Z"
                }
            ]
        }
    },
    {
        "id": "55",
        "type": "card",
        "attributes": {
            "strategy": "Imagine the music as a moving chain or caterpillar",
            "notes": [
                {
                    "id": 163,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 55,
                    "created_at": "2020-04-24T23:39:06.771Z",
                    "updated_at": "2020-04-24T23:39:06.771Z"
                },
                {
                    "id": 164,
                    "text": "sampled a rabbit eating Figs",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 55,
                    "created_at": "2020-04-24T23:39:06.776Z",
                    "updated_at": "2020-04-24T23:39:06.776Z"
                },
                {
                    "id": 165,
                    "text": "played a Bass Guitar in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 55,
                    "created_at": "2020-04-24T23:39:06.782Z",
                    "updated_at": "2020-04-24T23:39:06.782Z"
                }
            ]
        }
    },
    {
        "id": "56",
        "type": "card",
        "attributes": {
            "strategy": "Imagine the music as a set of disconnected events",
            "notes": [
                {
                    "id": 166,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 56,
                    "created_at": "2020-04-24T23:39:06.788Z",
                    "updated_at": "2020-04-24T23:39:06.788Z"
                },
                {
                    "id": 167,
                    "text": "sampled a jellyfish eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 56,
                    "created_at": "2020-04-24T23:39:06.793Z",
                    "updated_at": "2020-04-24T23:39:06.793Z"
                },
                {
                    "id": 168,
                    "text": "played a Piano in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 56,
                    "created_at": "2020-04-24T23:39:06.799Z",
                    "updated_at": "2020-04-24T23:39:06.799Z"
                }
            ]
        }
    },
    {
        "id": "57",
        "type": "card",
        "attributes": {
            "strategy": "Infinitesimal gradations",
            "notes": [
                {
                    "id": 169,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 57,
                    "created_at": "2020-04-24T23:39:06.805Z",
                    "updated_at": "2020-04-24T23:39:06.805Z"
                },
                {
                    "id": 170,
                    "text": "sampled a oyster eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 57,
                    "created_at": "2020-04-24T23:39:06.810Z",
                    "updated_at": "2020-04-24T23:39:06.810Z"
                },
                {
                    "id": 171,
                    "text": "played a Accordion in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 57,
                    "created_at": "2020-04-24T23:39:06.817Z",
                    "updated_at": "2020-04-24T23:39:06.817Z"
                }
            ]
        }
    },
    {
        "id": "58",
        "type": "card",
        "attributes": {
            "strategy": "Intentions -credibility of -nobility of -humility of",
            "notes": [
                {
                    "id": 172,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 58,
                    "created_at": "2020-04-24T23:39:06.823Z",
                    "updated_at": "2020-04-24T23:39:06.823Z"
                },
                {
                    "id": 173,
                    "text": "sampled a salmon eating Mulberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 58,
                    "created_at": "2020-04-24T23:39:06.828Z",
                    "updated_at": "2020-04-24T23:39:06.828Z"
                },
                {
                    "id": 174,
                    "text": "played a Xylophone in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 58,
                    "created_at": "2020-04-24T23:39:06.834Z",
                    "updated_at": "2020-04-24T23:39:06.834Z"
                }
            ]
        }
    },
    {
        "id": "59",
        "type": "card",
        "attributes": {
            "strategy": "Into the impossible",
            "notes": [
                {
                    "id": 175,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 59,
                    "created_at": "2020-04-24T23:39:06.842Z",
                    "updated_at": "2020-04-24T23:39:06.842Z"
                },
                {
                    "id": 176,
                    "text": "sampled a hamster eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 59,
                    "created_at": "2020-04-24T23:39:06.848Z",
                    "updated_at": "2020-04-24T23:39:06.848Z"
                },
                {
                    "id": 177,
                    "text": "played a Oboe in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 59,
                    "created_at": "2020-04-24T23:39:06.854Z",
                    "updated_at": "2020-04-24T23:39:06.854Z"
                }
            ]
        }
    },
    {
        "id": "60",
        "type": "card",
        "attributes": {
            "strategy": "Is it finished?",
            "notes": [
                {
                    "id": 178,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 60,
                    "created_at": "2020-04-24T23:39:06.860Z",
                    "updated_at": "2020-04-24T23:39:06.860Z"
                },
                {
                    "id": 179,
                    "text": "sampled a prairie dog eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 60,
                    "created_at": "2020-04-24T23:39:06.866Z",
                    "updated_at": "2020-04-24T23:39:06.866Z"
                },
                {
                    "id": 180,
                    "text": "played a Harp in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 60,
                    "created_at": "2020-04-24T23:39:06.872Z",
                    "updated_at": "2020-04-24T23:39:06.872Z"
                }
            ]
        }
    },
    {
        "id": "61",
        "type": "card",
        "attributes": {
            "strategy": "Is there something missing?",
            "notes": [
                {
                    "id": 181,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 61,
                    "created_at": "2020-04-24T23:39:06.877Z",
                    "updated_at": "2020-04-24T23:39:06.877Z"
                },
                {
                    "id": 182,
                    "text": "sampled a locust eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 61,
                    "created_at": "2020-04-24T23:39:06.883Z",
                    "updated_at": "2020-04-24T23:39:06.883Z"
                },
                {
                    "id": 183,
                    "text": "played a Clarinet in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 61,
                    "created_at": "2020-04-24T23:39:06.889Z",
                    "updated_at": "2020-04-24T23:39:06.889Z"
                }
            ]
        }
    },
    {
        "id": "62",
        "type": "card",
        "attributes": {
            "strategy": "Is the tuning appropriate?",
            "notes": [
                {
                    "id": 184,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 62,
                    "created_at": "2020-04-24T23:39:06.895Z",
                    "updated_at": "2020-04-24T23:39:06.895Z"
                },
                {
                    "id": 185,
                    "text": "sampled a clam eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 62,
                    "created_at": "2020-04-24T23:39:06.901Z",
                    "updated_at": "2020-04-24T23:39:06.901Z"
                },
                {
                    "id": 186,
                    "text": "played a Trumpet in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 62,
                    "created_at": "2020-04-24T23:39:06.907Z",
                    "updated_at": "2020-04-24T23:39:06.907Z"
                }
            ]
        }
    },
    {
        "id": "63",
        "type": "card",
        "attributes": {
            "strategy": "Just carry on",
            "notes": [
                {
                    "id": 187,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 63,
                    "created_at": "2020-04-24T23:39:06.914Z",
                    "updated_at": "2020-04-24T23:39:06.914Z"
                },
                {
                    "id": 188,
                    "text": "sampled a prairie dog eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 63,
                    "created_at": "2020-04-24T23:39:06.920Z",
                    "updated_at": "2020-04-24T23:39:06.920Z"
                },
                {
                    "id": 189,
                    "text": "played a Piano in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 63,
                    "created_at": "2020-04-24T23:39:06.927Z",
                    "updated_at": "2020-04-24T23:39:06.927Z"
                }
            ]
        }
    },
    {
        "id": "64",
        "type": "card",
        "attributes": {
            "strategy": "Left channel, right channel, centre channel",
            "notes": [
                {
                    "id": 190,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 64,
                    "created_at": "2020-04-24T23:39:06.932Z",
                    "updated_at": "2020-04-24T23:39:06.932Z"
                },
                {
                    "id": 191,
                    "text": "sampled a crow eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 64,
                    "created_at": "2020-04-24T23:39:06.938Z",
                    "updated_at": "2020-04-24T23:39:06.938Z"
                },
                {
                    "id": 192,
                    "text": "played a Clarinet in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 64,
                    "created_at": "2020-04-24T23:39:06.944Z",
                    "updated_at": "2020-04-24T23:39:06.944Z"
                }
            ]
        }
    },
    {
        "id": "65",
        "type": "card",
        "attributes": {
            "strategy": "Listen in total darkness, or in a very large room, very quietly",
            "notes": [
                {
                    "id": 193,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 65,
                    "created_at": "2020-04-24T23:39:06.950Z",
                    "updated_at": "2020-04-24T23:39:06.950Z"
                },
                {
                    "id": 194,
                    "text": "sampled a crocodile eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 65,
                    "created_at": "2020-04-24T23:39:06.955Z",
                    "updated_at": "2020-04-24T23:39:06.955Z"
                },
                {
                    "id": 195,
                    "text": "played a Harmonica in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 65,
                    "created_at": "2020-04-24T23:39:06.961Z",
                    "updated_at": "2020-04-24T23:39:06.961Z"
                }
            ]
        }
    },
    {
        "id": "66",
        "type": "card",
        "attributes": {
            "strategy": "Listen to the quiet voice",
            "notes": [
                {
                    "id": 196,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 66,
                    "created_at": "2020-04-24T23:39:06.966Z",
                    "updated_at": "2020-04-24T23:39:06.966Z"
                },
                {
                    "id": 197,
                    "text": "sampled a bee eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 66,
                    "created_at": "2020-04-24T23:39:06.972Z",
                    "updated_at": "2020-04-24T23:39:06.972Z"
                },
                {
                    "id": 198,
                    "text": "played a Saxophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 66,
                    "created_at": "2020-04-24T23:39:06.977Z",
                    "updated_at": "2020-04-24T23:39:06.977Z"
                }
            ]
        }
    },
    {
        "id": "67",
        "type": "card",
        "attributes": {
            "strategy": "Look at a very small object, look at its centre",
            "notes": [
                {
                    "id": 199,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 67,
                    "created_at": "2020-04-24T23:39:06.983Z",
                    "updated_at": "2020-04-24T23:39:06.983Z"
                },
                {
                    "id": 200,
                    "text": "sampled a lion eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 67,
                    "created_at": "2020-04-24T23:39:06.988Z",
                    "updated_at": "2020-04-24T23:39:06.988Z"
                },
                {
                    "id": 201,
                    "text": "played a Oboe in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 67,
                    "created_at": "2020-04-24T23:39:06.994Z",
                    "updated_at": "2020-04-24T23:39:06.994Z"
                }
            ]
        }
    },
    {
        "id": "68",
        "type": "card",
        "attributes": {
            "strategy": "Look at the order in which you do things",
            "notes": [
                {
                    "id": 202,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 68,
                    "created_at": "2020-04-24T23:39:06.999Z",
                    "updated_at": "2020-04-24T23:39:06.999Z"
                },
                {
                    "id": 203,
                    "text": "sampled a water buffalo eating Fingerlime",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 68,
                    "created_at": "2020-04-24T23:39:07.005Z",
                    "updated_at": "2020-04-24T23:39:07.005Z"
                },
                {
                    "id": 204,
                    "text": "played a Drums in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 68,
                    "created_at": "2020-04-24T23:39:07.011Z",
                    "updated_at": "2020-04-24T23:39:07.011Z"
                }
            ]
        }
    },
    {
        "id": "69",
        "type": "card",
        "attributes": {
            "strategy": "Look closely at the most embarrassing details and amplify them",
            "notes": [
                {
                    "id": 205,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 69,
                    "created_at": "2020-04-24T23:39:07.017Z",
                    "updated_at": "2020-04-24T23:39:07.017Z"
                },
                {
                    "id": 206,
                    "text": "sampled a squirrel eating Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 69,
                    "created_at": "2020-04-24T23:39:07.023Z",
                    "updated_at": "2020-04-24T23:39:07.023Z"
                },
                {
                    "id": 207,
                    "text": "played a Xylophone in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 69,
                    "created_at": "2020-04-24T23:39:07.029Z",
                    "updated_at": "2020-04-24T23:39:07.029Z"
                }
            ]
        }
    },
    {
        "id": "70",
        "type": "card",
        "attributes": {
            "strategy": "Lowest common denominator check -single beat -single note -single riff",
            "notes": [
                {
                    "id": 208,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 70,
                    "created_at": "2020-04-24T23:39:07.034Z",
                    "updated_at": "2020-04-24T23:39:07.034Z"
                },
                {
                    "id": 209,
                    "text": "sampled a tortoise eating Cranberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 70,
                    "created_at": "2020-04-24T23:39:07.040Z",
                    "updated_at": "2020-04-24T23:39:07.040Z"
                },
                {
                    "id": 210,
                    "text": "played a Flute in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 70,
                    "created_at": "2020-04-24T23:39:07.046Z",
                    "updated_at": "2020-04-24T23:39:07.046Z"
                }
            ]
        }
    },
    {
        "id": "71",
        "type": "card",
        "attributes": {
            "strategy": "Make a blank valuable by putting it in an exquisite frame",
            "notes": [
                {
                    "id": 211,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 71,
                    "created_at": "2020-04-24T23:39:07.051Z",
                    "updated_at": "2020-04-24T23:39:07.051Z"
                },
                {
                    "id": 212,
                    "text": "sampled a moose eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 71,
                    "created_at": "2020-04-24T23:39:07.057Z",
                    "updated_at": "2020-04-24T23:39:07.057Z"
                },
                {
                    "id": 213,
                    "text": "played a Harp in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 71,
                    "created_at": "2020-04-24T23:39:07.062Z",
                    "updated_at": "2020-04-24T23:39:07.062Z"
                }
            ]
        }
    },
    {
        "id": "72",
        "type": "card",
        "attributes": {
            "strategy": "Make an exhaustive list of everything you might do and do the last thing on the list",
            "notes": [
                {
                    "id": 214,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 72,
                    "created_at": "2020-04-24T23:39:07.068Z",
                    "updated_at": "2020-04-24T23:39:07.068Z"
                },
                {
                    "id": 215,
                    "text": "sampled a sardine eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 72,
                    "created_at": "2020-04-24T23:39:07.074Z",
                    "updated_at": "2020-04-24T23:39:07.074Z"
                },
                {
                    "id": 216,
                    "text": "played a Piano in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 72,
                    "created_at": "2020-04-24T23:39:07.080Z",
                    "updated_at": "2020-04-24T23:39:07.080Z"
                }
            ]
        }
    },
    {
        "id": "73",
        "type": "card",
        "attributes": {
            "strategy": "Make a sudden, destructive unpredictable action; incorporate",
            "notes": [
                {
                    "id": 217,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 73,
                    "created_at": "2020-04-24T23:39:07.085Z",
                    "updated_at": "2020-04-24T23:39:07.085Z"
                },
                {
                    "id": 218,
                    "text": "sampled a wildebeest eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 73,
                    "created_at": "2020-04-24T23:39:07.099Z",
                    "updated_at": "2020-04-24T23:39:07.099Z"
                },
                {
                    "id": 219,
                    "text": "played a Harp in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 73,
                    "created_at": "2020-04-24T23:39:07.105Z",
                    "updated_at": "2020-04-24T23:39:07.105Z"
                }
            ]
        }
    },
    {
        "id": "74",
        "type": "card",
        "attributes": {
            "strategy": "Mechanicalise something idiosyncratic",
            "notes": [
                {
                    "id": 220,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 74,
                    "created_at": "2020-04-24T23:39:07.111Z",
                    "updated_at": "2020-04-24T23:39:07.111Z"
                },
                {
                    "id": 221,
                    "text": "sampled a grasshopper eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 74,
                    "created_at": "2020-04-24T23:39:07.120Z",
                    "updated_at": "2020-04-24T23:39:07.120Z"
                },
                {
                    "id": 222,
                    "text": "played a Piano in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 74,
                    "created_at": "2020-04-24T23:39:07.126Z",
                    "updated_at": "2020-04-24T23:39:07.126Z"
                }
            ]
        }
    },
    {
        "id": "75",
        "type": "card",
        "attributes": {
            "strategy": "Mute and continue",
            "notes": [
                {
                    "id": 223,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 75,
                    "created_at": "2020-04-24T23:39:07.132Z",
                    "updated_at": "2020-04-24T23:39:07.132Z"
                },
                {
                    "id": 224,
                    "text": "sampled a jellyfish eating Passionfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 75,
                    "created_at": "2020-04-24T23:39:07.137Z",
                    "updated_at": "2020-04-24T23:39:07.137Z"
                },
                {
                    "id": 225,
                    "text": "played a Cello in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 75,
                    "created_at": "2020-04-24T23:39:07.143Z",
                    "updated_at": "2020-04-24T23:39:07.143Z"
                }
            ]
        }
    },
    {
        "id": "76",
        "type": "card",
        "attributes": {
            "strategy": "Only one element of each kind",
            "notes": [
                {
                    "id": 226,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 76,
                    "created_at": "2020-04-24T23:39:07.149Z",
                    "updated_at": "2020-04-24T23:39:07.149Z"
                },
                {
                    "id": 227,
                    "text": "sampled a mule eating Peaches",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 76,
                    "created_at": "2020-04-24T23:39:07.154Z",
                    "updated_at": "2020-04-24T23:39:07.154Z"
                },
                {
                    "id": 228,
                    "text": "played a Acoustic Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 76,
                    "created_at": "2020-04-24T23:39:07.159Z",
                    "updated_at": "2020-04-24T23:39:07.159Z"
                }
            ]
        }
    },
    {
        "id": "77",
        "type": "card",
        "attributes": {
            "strategy": "(Organic) machinery",
            "notes": [
                {
                    "id": 229,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 77,
                    "created_at": "2020-04-24T23:39:07.165Z",
                    "updated_at": "2020-04-24T23:39:07.165Z"
                },
                {
                    "id": 230,
                    "text": "sampled a alligator eating Fingerlime",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 77,
                    "created_at": "2020-04-24T23:39:07.171Z",
                    "updated_at": "2020-04-24T23:39:07.171Z"
                },
                {
                    "id": 231,
                    "text": "played a Flute in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 77,
                    "created_at": "2020-04-24T23:39:07.176Z",
                    "updated_at": "2020-04-24T23:39:07.176Z"
                }
            ]
        }
    },
    {
        "id": "78",
        "type": "card",
        "attributes": {
            "strategy": "Overtly resist change",
            "notes": [
                {
                    "id": 232,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 78,
                    "created_at": "2020-04-24T23:39:07.182Z",
                    "updated_at": "2020-04-24T23:39:07.182Z"
                },
                {
                    "id": 233,
                    "text": "sampled a pig eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 78,
                    "created_at": "2020-04-24T23:39:07.188Z",
                    "updated_at": "2020-04-24T23:39:07.188Z"
                },
                {
                    "id": 234,
                    "text": "played a Organ in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 78,
                    "created_at": "2020-04-24T23:39:07.194Z",
                    "updated_at": "2020-04-24T23:39:07.194Z"
                }
            ]
        }
    },
    {
        "id": "79",
        "type": "card",
        "attributes": {
            "strategy": "Put in earplugs",
            "notes": [
                {
                    "id": 235,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 79,
                    "created_at": "2020-04-24T23:39:07.199Z",
                    "updated_at": "2020-04-24T23:39:07.199Z"
                },
                {
                    "id": 236,
                    "text": "sampled a deer eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 79,
                    "created_at": "2020-04-24T23:39:07.205Z",
                    "updated_at": "2020-04-24T23:39:07.205Z"
                },
                {
                    "id": 237,
                    "text": "played a Xylophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 79,
                    "created_at": "2020-04-24T23:39:07.211Z",
                    "updated_at": "2020-04-24T23:39:07.211Z"
                }
            ]
        }
    },
    {
        "id": "80",
        "type": "card",
        "attributes": {
            "strategy": "Remember .those quiet evenings",
            "notes": [
                {
                    "id": 238,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 80,
                    "created_at": "2020-04-24T23:39:07.216Z",
                    "updated_at": "2020-04-24T23:39:07.216Z"
                },
                {
                    "id": 239,
                    "text": "sampled a zebra eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 80,
                    "created_at": "2020-04-24T23:39:07.222Z",
                    "updated_at": "2020-04-24T23:39:07.222Z"
                },
                {
                    "id": 240,
                    "text": "played a Clarinet in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 80,
                    "created_at": "2020-04-24T23:39:07.228Z",
                    "updated_at": "2020-04-24T23:39:07.228Z"
                }
            ]
        }
    },
    {
        "id": "81",
        "type": "card",
        "attributes": {
            "strategy": "Remove ambiguities and convert to specifics",
            "notes": [
                {
                    "id": 241,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 81,
                    "created_at": "2020-04-24T23:39:07.234Z",
                    "updated_at": "2020-04-24T23:39:07.234Z"
                },
                {
                    "id": 242,
                    "text": "sampled a bear eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 81,
                    "created_at": "2020-04-24T23:39:07.240Z",
                    "updated_at": "2020-04-24T23:39:07.240Z"
                },
                {
                    "id": 243,
                    "text": "played a Ukelele in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 81,
                    "created_at": "2020-04-24T23:39:07.245Z",
                    "updated_at": "2020-04-24T23:39:07.245Z"
                }
            ]
        }
    },
    {
        "id": "82",
        "type": "card",
        "attributes": {
            "strategy": "Remove specifics and convert to ambiguities",
            "notes": [
                {
                    "id": 244,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 82,
                    "created_at": "2020-04-24T23:39:07.251Z",
                    "updated_at": "2020-04-24T23:39:07.251Z"
                },
                {
                    "id": 245,
                    "text": "sampled a grasshopper eating Juniper Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 82,
                    "created_at": "2020-04-24T23:39:07.257Z",
                    "updated_at": "2020-04-24T23:39:07.257Z"
                },
                {
                    "id": 246,
                    "text": "played a Saxophone in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 82,
                    "created_at": "2020-04-24T23:39:07.263Z",
                    "updated_at": "2020-04-24T23:39:07.263Z"
                }
            ]
        }
    },
    {
        "id": "83",
        "type": "card",
        "attributes": {
            "strategy": "Repetition is a form of change",
            "notes": [
                {
                    "id": 247,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 83,
                    "created_at": "2020-04-24T23:39:07.268Z",
                    "updated_at": "2020-04-24T23:39:07.268Z"
                },
                {
                    "id": 248,
                    "text": "sampled a kangaroo eating Mandarins",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 83,
                    "created_at": "2020-04-24T23:39:07.274Z",
                    "updated_at": "2020-04-24T23:39:07.274Z"
                },
                {
                    "id": 249,
                    "text": "played a Harmonica in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 83,
                    "created_at": "2020-04-24T23:39:07.280Z",
                    "updated_at": "2020-04-24T23:39:07.280Z"
                }
            ]
        }
    },
    {
        "id": "84",
        "type": "card",
        "attributes": {
            "strategy": "Reverse",
            "notes": [
                {
                    "id": 250,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 84,
                    "created_at": "2020-04-24T23:39:07.286Z",
                    "updated_at": "2020-04-24T23:39:07.286Z"
                },
                {
                    "id": 251,
                    "text": "sampled a guinea pig eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 84,
                    "created_at": "2020-04-24T23:39:07.292Z",
                    "updated_at": "2020-04-24T23:39:07.292Z"
                },
                {
                    "id": 252,
                    "text": "played a Trumpet in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 84,
                    "created_at": "2020-04-24T23:39:07.297Z",
                    "updated_at": "2020-04-24T23:39:07.297Z"
                }
            ]
        }
    },
    {
        "id": "85",
        "type": "card",
        "attributes": {
            "strategy": "Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
            "notes": [
                {
                    "id": 253,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 85,
                    "created_at": "2020-04-24T23:39:07.303Z",
                    "updated_at": "2020-04-24T23:39:07.303Z"
                },
                {
                    "id": 254,
                    "text": "sampled a lizard eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 85,
                    "created_at": "2020-04-24T23:39:07.312Z",
                    "updated_at": "2020-04-24T23:39:07.312Z"
                },
                {
                    "id": 255,
                    "text": "played a Electric Guitar in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 85,
                    "created_at": "2020-04-24T23:39:07.318Z",
                    "updated_at": "2020-04-24T23:39:07.318Z"
                }
            ]
        }
    },
    {
        "id": "86",
        "type": "card",
        "attributes": {
            "strategy": "Shut the door and listen from outside",
            "notes": [
                {
                    "id": 256,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 86,
                    "created_at": "2020-04-24T23:39:07.329Z",
                    "updated_at": "2020-04-24T23:39:07.329Z"
                },
                {
                    "id": 257,
                    "text": "sampled a hedgehog eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 86,
                    "created_at": "2020-04-24T23:39:07.336Z",
                    "updated_at": "2020-04-24T23:39:07.336Z"
                },
                {
                    "id": 258,
                    "text": "played a Electric Guitar in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 86,
                    "created_at": "2020-04-24T23:39:07.341Z",
                    "updated_at": "2020-04-24T23:39:07.341Z"
                }
            ]
        }
    },
    {
        "id": "87",
        "type": "card",
        "attributes": {
            "strategy": "Simple subtraction",
            "notes": [
                {
                    "id": 259,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 87,
                    "created_at": "2020-04-24T23:39:07.347Z",
                    "updated_at": "2020-04-24T23:39:07.347Z"
                },
                {
                    "id": 260,
                    "text": "sampled a tiger eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 87,
                    "created_at": "2020-04-24T23:39:07.354Z",
                    "updated_at": "2020-04-24T23:39:07.354Z"
                },
                {
                    "id": 261,
                    "text": "played a Organ in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 87,
                    "created_at": "2020-04-24T23:39:07.359Z",
                    "updated_at": "2020-04-24T23:39:07.359Z"
                }
            ]
        }
    },
    {
        "id": "88",
        "type": "card",
        "attributes": {
            "strategy": "Spectrum analysis",
            "notes": [
                {
                    "id": 262,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 88,
                    "created_at": "2020-04-24T23:39:07.365Z",
                    "updated_at": "2020-04-24T23:39:07.365Z"
                },
                {
                    "id": 263,
                    "text": "sampled a chinchilla eating Cranberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 88,
                    "created_at": "2020-04-24T23:39:07.371Z",
                    "updated_at": "2020-04-24T23:39:07.371Z"
                },
                {
                    "id": 264,
                    "text": "played a Piano in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 88,
                    "created_at": "2020-04-24T23:39:07.379Z",
                    "updated_at": "2020-04-24T23:39:07.379Z"
                }
            ]
        }
    },
    {
        "id": "89",
        "type": "card",
        "attributes": {
            "strategy": "Take a break",
            "notes": [
                {
                    "id": 265,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 89,
                    "created_at": "2020-04-24T23:39:07.385Z",
                    "updated_at": "2020-04-24T23:39:07.385Z"
                },
                {
                    "id": 266,
                    "text": "sampled a jackal eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 89,
                    "created_at": "2020-04-24T23:39:07.391Z",
                    "updated_at": "2020-04-24T23:39:07.391Z"
                },
                {
                    "id": 267,
                    "text": "played a Violin in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 89,
                    "created_at": "2020-04-24T23:39:07.397Z",
                    "updated_at": "2020-04-24T23:39:07.397Z"
                }
            ]
        }
    },
    {
        "id": "90",
        "type": "card",
        "attributes": {
            "strategy": "Take away the elements in order of apparent non-importance",
            "notes": [
                {
                    "id": 268,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 90,
                    "created_at": "2020-04-24T23:39:07.403Z",
                    "updated_at": "2020-04-24T23:39:07.403Z"
                },
                {
                    "id": 269,
                    "text": "sampled a eel eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 90,
                    "created_at": "2020-04-24T23:39:07.409Z",
                    "updated_at": "2020-04-24T23:39:07.409Z"
                },
                {
                    "id": 270,
                    "text": "played a Accordion in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 90,
                    "created_at": "2020-04-24T23:39:07.414Z",
                    "updated_at": "2020-04-24T23:39:07.414Z"
                }
            ]
        }
    },
    {
        "id": "91",
        "type": "card",
        "attributes": {
            "strategy": "Tape your mouth (given by Ritva Saarikko)",
            "notes": [
                {
                    "id": 271,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 91,
                    "created_at": "2020-04-24T23:39:07.420Z",
                    "updated_at": "2020-04-24T23:39:07.420Z"
                },
                {
                    "id": 272,
                    "text": "sampled a tortoise eating Bush Tomato",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 91,
                    "created_at": "2020-04-24T23:39:07.426Z",
                    "updated_at": "2020-04-24T23:39:07.426Z"
                },
                {
                    "id": 273,
                    "text": "played a Organ in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 91,
                    "created_at": "2020-04-24T23:39:07.431Z",
                    "updated_at": "2020-04-24T23:39:07.431Z"
                }
            ]
        }
    },
    {
        "id": "92",
        "type": "card",
        "attributes": {
            "strategy": "The inconsistency principle",
            "notes": [
                {
                    "id": 274,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 92,
                    "created_at": "2020-04-24T23:39:07.437Z",
                    "updated_at": "2020-04-24T23:39:07.437Z"
                },
                {
                    "id": 275,
                    "text": "sampled a manatee eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 92,
                    "created_at": "2020-04-24T23:39:07.443Z",
                    "updated_at": "2020-04-24T23:39:07.443Z"
                },
                {
                    "id": 276,
                    "text": "played a Drums in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 92,
                    "created_at": "2020-04-24T23:39:07.449Z",
                    "updated_at": "2020-04-24T23:39:07.449Z"
                }
            ]
        }
    },
    {
        "id": "93",
        "type": "card",
        "attributes": {
            "strategy": "The tape is now the music",
            "notes": [
                {
                    "id": 277,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 93,
                    "created_at": "2020-04-24T23:39:07.455Z",
                    "updated_at": "2020-04-24T23:39:07.455Z"
                },
                {
                    "id": 278,
                    "text": "sampled a grasshopper eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 93,
                    "created_at": "2020-04-24T23:39:07.461Z",
                    "updated_at": "2020-04-24T23:39:07.461Z"
                },
                {
                    "id": 279,
                    "text": "played a Piano in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 93,
                    "created_at": "2020-04-24T23:39:07.467Z",
                    "updated_at": "2020-04-24T23:39:07.467Z"
                }
            ]
        }
    },
    {
        "id": "94",
        "type": "card",
        "attributes": {
            "strategy": "Think of the radio",
            "notes": [
                {
                    "id": 280,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 94,
                    "created_at": "2020-04-24T23:39:07.472Z",
                    "updated_at": "2020-04-24T23:39:07.472Z"
                },
                {
                    "id": 281,
                    "text": "sampled a hare eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 94,
                    "created_at": "2020-04-24T23:39:07.478Z",
                    "updated_at": "2020-04-24T23:39:07.478Z"
                },
                {
                    "id": 282,
                    "text": "played a Cello in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 94,
                    "created_at": "2020-04-24T23:39:07.484Z",
                    "updated_at": "2020-04-24T23:39:07.484Z"
                }
            ]
        }
    },
    {
        "id": "95",
        "type": "card",
        "attributes": {
            "strategy": "Tidy up",
            "notes": [
                {
                    "id": 283,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 95,
                    "created_at": "2020-04-24T23:39:07.491Z",
                    "updated_at": "2020-04-24T23:39:07.491Z"
                },
                {
                    "id": 284,
                    "text": "sampled a termite eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 95,
                    "created_at": "2020-04-24T23:39:07.496Z",
                    "updated_at": "2020-04-24T23:39:07.496Z"
                },
                {
                    "id": 285,
                    "text": "played a Ukelele in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 95,
                    "created_at": "2020-04-24T23:39:07.502Z",
                    "updated_at": "2020-04-24T23:39:07.502Z"
                }
            ]
        }
    },
    {
        "id": "96",
        "type": "card",
        "attributes": {
            "strategy": "Trust in the you of now",
            "notes": [
                {
                    "id": 286,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 96,
                    "created_at": "2020-04-24T23:39:07.508Z",
                    "updated_at": "2020-04-24T23:39:07.508Z"
                },
                {
                    "id": 287,
                    "text": "sampled a jellyfish eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 96,
                    "created_at": "2020-04-24T23:39:07.514Z",
                    "updated_at": "2020-04-24T23:39:07.514Z"
                },
                {
                    "id": 288,
                    "text": "played a Saxophone in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 96,
                    "created_at": "2020-04-24T23:39:07.520Z",
                    "updated_at": "2020-04-24T23:39:07.520Z"
                }
            ]
        }
    },
    {
        "id": "97",
        "type": "card",
        "attributes": {
            "strategy": "Turn it upside down",
            "notes": [
                {
                    "id": 289,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 97,
                    "created_at": "2020-04-24T23:39:07.531Z",
                    "updated_at": "2020-04-24T23:39:07.531Z"
                },
                {
                    "id": 290,
                    "text": "sampled a koala eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 97,
                    "created_at": "2020-04-24T23:39:07.537Z",
                    "updated_at": "2020-04-24T23:39:07.537Z"
                },
                {
                    "id": 291,
                    "text": "played a Accordion in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 97,
                    "created_at": "2020-04-24T23:39:07.542Z",
                    "updated_at": "2020-04-24T23:39:07.542Z"
                }
            ]
        }
    },
    {
        "id": "98",
        "type": "card",
        "attributes": {
            "strategy": "Twist the spine",
            "notes": [
                {
                    "id": 292,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 98,
                    "created_at": "2020-04-24T23:39:07.548Z",
                    "updated_at": "2020-04-24T23:39:07.548Z"
                },
                {
                    "id": 293,
                    "text": "sampled a cicada eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 98,
                    "created_at": "2020-04-24T23:39:07.554Z",
                    "updated_at": "2020-04-24T23:39:07.554Z"
                },
                {
                    "id": 294,
                    "text": "played a Organ in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 98,
                    "created_at": "2020-04-24T23:39:07.560Z",
                    "updated_at": "2020-04-24T23:39:07.560Z"
                }
            ]
        }
    },
    {
        "id": "99",
        "type": "card",
        "attributes": {
            "strategy": "Use an old idea",
            "notes": [
                {
                    "id": 295,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 99,
                    "created_at": "2020-04-24T23:39:07.567Z",
                    "updated_at": "2020-04-24T23:39:07.567Z"
                },
                {
                    "id": 296,
                    "text": "sampled a cattle eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 99,
                    "created_at": "2020-04-24T23:39:07.572Z",
                    "updated_at": "2020-04-24T23:39:07.572Z"
                },
                {
                    "id": 297,
                    "text": "played a Saxophone in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 99,
                    "created_at": "2020-04-24T23:39:07.578Z",
                    "updated_at": "2020-04-24T23:39:07.578Z"
                }
            ]
        }
    },
    {
        "id": "100",
        "type": "card",
        "attributes": {
            "strategy": "Use an unacceptable colour",
            "notes": [
                {
                    "id": 298,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 100,
                    "created_at": "2020-04-24T23:39:07.583Z",
                    "updated_at": "2020-04-24T23:39:07.583Z"
                },
                {
                    "id": 299,
                    "text": "sampled a badger eating Honeydew melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 100,
                    "created_at": "2020-04-24T23:39:07.588Z",
                    "updated_at": "2020-04-24T23:39:07.588Z"
                },
                {
                    "id": 300,
                    "text": "played a Xylophone in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 100,
                    "created_at": "2020-04-24T23:39:07.594Z",
                    "updated_at": "2020-04-24T23:39:07.594Z"
                }
            ]
        }
    },
    {
        "id": "101",
        "type": "card",
        "attributes": {
            "strategy": "Use fewer notes",
            "notes": [
                {
                    "id": 301,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 101,
                    "created_at": "2020-04-24T23:39:07.600Z",
                    "updated_at": "2020-04-24T23:39:07.600Z"
                },
                {
                    "id": 302,
                    "text": "sampled a tortoise eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 101,
                    "created_at": "2020-04-24T23:39:07.605Z",
                    "updated_at": "2020-04-24T23:39:07.605Z"
                },
                {
                    "id": 303,
                    "text": "played a Clarinet in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 101,
                    "created_at": "2020-04-24T23:39:07.610Z",
                    "updated_at": "2020-04-24T23:39:07.610Z"
                }
            ]
        }
    },
    {
        "id": "102",
        "type": "card",
        "attributes": {
            "strategy": "Use filters",
            "notes": [
                {
                    "id": 304,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 102,
                    "created_at": "2020-04-24T23:39:07.616Z",
                    "updated_at": "2020-04-24T23:39:07.616Z"
                },
                {
                    "id": 305,
                    "text": "sampled a macaw eating Guava",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 102,
                    "created_at": "2020-04-24T23:39:07.621Z",
                    "updated_at": "2020-04-24T23:39:07.621Z"
                },
                {
                    "id": 306,
                    "text": "played a Cello in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 102,
                    "created_at": "2020-04-24T23:39:07.627Z",
                    "updated_at": "2020-04-24T23:39:07.627Z"
                }
            ]
        }
    },
    {
        "id": "103",
        "type": "card",
        "attributes": {
            "strategy": "Use 'unqualified' people",
            "notes": [
                {
                    "id": 307,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 103,
                    "created_at": "2020-04-24T23:39:07.633Z",
                    "updated_at": "2020-04-24T23:39:07.633Z"
                },
                {
                    "id": 308,
                    "text": "sampled a water buffalo eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 103,
                    "created_at": "2020-04-24T23:39:07.639Z",
                    "updated_at": "2020-04-24T23:39:07.639Z"
                },
                {
                    "id": 309,
                    "text": "played a Trumpet in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 103,
                    "created_at": "2020-04-24T23:39:07.645Z",
                    "updated_at": "2020-04-24T23:39:07.645Z"
                }
            ]
        }
    },
    {
        "id": "104",
        "type": "card",
        "attributes": {
            "strategy": "Water",
            "notes": [
                {
                    "id": 310,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 104,
                    "created_at": "2020-04-24T23:39:07.650Z",
                    "updated_at": "2020-04-24T23:39:07.650Z"
                },
                {
                    "id": 311,
                    "text": "sampled a rat eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 104,
                    "created_at": "2020-04-24T23:39:07.657Z",
                    "updated_at": "2020-04-24T23:39:07.657Z"
                },
                {
                    "id": 312,
                    "text": "played a Harmonica in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 104,
                    "created_at": "2020-04-24T23:39:07.663Z",
                    "updated_at": "2020-04-24T23:39:07.663Z"
                }
            ]
        }
    },
    {
        "id": "105",
        "type": "card",
        "attributes": {
            "strategy": "What are you really thinking about just now? Incorporate",
            "notes": [
                {
                    "id": 313,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 105,
                    "created_at": "2020-04-24T23:39:07.669Z",
                    "updated_at": "2020-04-24T23:39:07.669Z"
                },
                {
                    "id": 314,
                    "text": "sampled a trout eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 105,
                    "created_at": "2020-04-24T23:39:07.674Z",
                    "updated_at": "2020-04-24T23:39:07.674Z"
                },
                {
                    "id": 315,
                    "text": "played a Flute in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 105,
                    "created_at": "2020-04-24T23:39:07.680Z",
                    "updated_at": "2020-04-24T23:39:07.680Z"
                }
            ]
        }
    },
    {
        "id": "106",
        "type": "card",
        "attributes": {
            "strategy": "What is the reality of the situation?",
            "notes": [
                {
                    "id": 316,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 106,
                    "created_at": "2020-04-24T23:39:07.685Z",
                    "updated_at": "2020-04-24T23:39:07.685Z"
                },
                {
                    "id": 317,
                    "text": "sampled a moose eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 106,
                    "created_at": "2020-04-24T23:39:07.691Z",
                    "updated_at": "2020-04-24T23:39:07.691Z"
                },
                {
                    "id": 318,
                    "text": "played a Accordion in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 106,
                    "created_at": "2020-04-24T23:39:07.697Z",
                    "updated_at": "2020-04-24T23:39:07.697Z"
                }
            ]
        }
    },
    {
        "id": "107",
        "type": "card",
        "attributes": {
            "strategy": "Make many mistakes",
            "notes": []
        }
    },
    {
        "id": "108",
        "type": "card",
        "attributes": {
            "strategy": "What would your closest friend do?",
            "notes": [
                {
                    "id": 322,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 108,
                    "created_at": "2020-04-24T23:39:07.719Z",
                    "updated_at": "2020-04-24T23:39:07.719Z"
                },
                {
                    "id": 323,
                    "text": "sampled a mouse eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 108,
                    "created_at": "2020-04-24T23:39:07.725Z",
                    "updated_at": "2020-04-24T23:39:07.725Z"
                },
                {
                    "id": 324,
                    "text": "played a Accordion in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 108,
                    "created_at": "2020-04-24T23:39:07.731Z",
                    "updated_at": "2020-04-24T23:39:07.731Z"
                }
            ]
        }
    },
    {
        "id": "109",
        "type": "card",
        "attributes": {
            "strategy": "What wouldn't you do?",
            "notes": [
                {
                    "id": 325,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 109,
                    "created_at": "2020-04-24T23:39:07.737Z",
                    "updated_at": "2020-04-24T23:39:07.737Z"
                },
                {
                    "id": 326,
                    "text": "sampled a spider eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 109,
                    "created_at": "2020-04-24T23:39:07.742Z",
                    "updated_at": "2020-04-24T23:39:07.742Z"
                },
                {
                    "id": 327,
                    "text": "played a Organ in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 109,
                    "created_at": "2020-04-24T23:39:07.748Z",
                    "updated_at": "2020-04-24T23:39:07.748Z"
                }
            ]
        }
    },
    {
        "id": "110",
        "type": "card",
        "attributes": {
            "strategy": "Work at a different speed",
            "notes": [
                {
                    "id": 328,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 110,
                    "created_at": "2020-04-24T23:39:07.753Z",
                    "updated_at": "2020-04-24T23:39:07.753Z"
                },
                {
                    "id": 329,
                    "text": "sampled a armadillo eating Plums",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 110,
                    "created_at": "2020-04-24T23:39:07.759Z",
                    "updated_at": "2020-04-24T23:39:07.759Z"
                },
                {
                    "id": 330,
                    "text": "played a Cello in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 110,
                    "created_at": "2020-04-24T23:39:07.765Z",
                    "updated_at": "2020-04-24T23:39:07.765Z"
                }
            ]
        }
    },
    {
        "id": "111",
        "type": "card",
        "attributes": {
            "strategy": "You are an engineer",
            "notes": [
                {
                    "id": 331,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 111,
                    "created_at": "2020-04-24T23:39:07.771Z",
                    "updated_at": "2020-04-24T23:39:07.771Z"
                },
                {
                    "id": 332,
                    "text": "sampled a serval eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 111,
                    "created_at": "2020-04-24T23:39:07.777Z",
                    "updated_at": "2020-04-24T23:39:07.777Z"
                },
                {
                    "id": 333,
                    "text": "played a Cello in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 111,
                    "created_at": "2020-04-24T23:39:07.783Z",
                    "updated_at": "2020-04-24T23:39:07.783Z"
                },
                {
                    "id": 1397,
                    "text": "test_test",
                    "url": "https://soundcloud.com/markdenardo/waking-me-up",
                    "card_id": 111,
                    "created_at": "2020-05-08T21:32:53.793Z",
                    "updated_at": "2020-05-08T21:32:53.793Z"
                }
            ]
        }
    },
    {
        "id": "112",
        "type": "card",
        "attributes": {
            "strategy": "You can only make one dot at a time",
            "notes": [
                {
                    "id": 334,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 112,
                    "created_at": "2020-04-24T23:39:07.796Z",
                    "updated_at": "2020-04-24T23:39:07.796Z"
                },
                {
                    "id": 335,
                    "text": "sampled a hornet eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 112,
                    "created_at": "2020-04-24T23:39:07.802Z",
                    "updated_at": "2020-04-24T23:39:07.802Z"
                },
                {
                    "id": 336,
                    "text": "played a Organ in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 112,
                    "created_at": "2020-04-24T23:39:07.808Z",
                    "updated_at": "2020-04-24T23:39:07.808Z"
                }
            ]
        }
    },
    {
        "id": "113",
        "type": "card",
        "attributes": {
            "strategy": "You don't have to be ashamed of using your own ideas",
            "notes": [
                {
                    "id": 337,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 113,
                    "created_at": "2020-04-24T23:39:07.813Z",
                    "updated_at": "2020-04-24T23:39:07.813Z"
                },
                {
                    "id": 338,
                    "text": "sampled a reindeer eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 113,
                    "created_at": "2020-04-24T23:39:07.819Z",
                    "updated_at": "2020-04-24T23:39:07.819Z"
                },
                {
                    "id": 339,
                    "text": "played a Piano in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 113,
                    "created_at": "2020-04-24T23:39:07.825Z",
                    "updated_at": "2020-04-24T23:39:07.825Z"
                }
            ]
        }
    },
    {
        "id": "114",
        "type": "card",
        "attributes": {
            "strategy": "[blank white card]",
            "notes": [
                {
                    "id": 340,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 114,
                    "created_at": "2020-04-24T23:39:07.831Z",
                    "updated_at": "2020-04-24T23:39:07.831Z"
                },
                {
                    "id": 341,
                    "text": "sampled a fish eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 114,
                    "created_at": "2020-04-24T23:39:07.837Z",
                    "updated_at": "2020-04-24T23:39:07.837Z"
                },
                {
                    "id": 342,
                    "text": "played a Xylophone in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 114,
                    "created_at": "2020-04-24T23:39:07.842Z",
                    "updated_at": "2020-04-24T23:39:07.842Z"
                }
            ]
        }
    },
    {
        "id": "115",
        "type": "card",
        "attributes": {
            "strategy": "Abandon normal instruments",
            "notes": [
                {
                    "id": 343,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 115,
                    "created_at": "2020-04-24T23:39:07.847Z",
                    "updated_at": "2020-04-24T23:39:07.847Z"
                },
                {
                    "id": 344,
                    "text": "sampled a minnow eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 115,
                    "created_at": "2020-04-24T23:39:07.853Z",
                    "updated_at": "2020-04-24T23:39:07.853Z"
                },
                {
                    "id": 345,
                    "text": "played a Piano in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 115,
                    "created_at": "2020-04-24T23:39:07.858Z",
                    "updated_at": "2020-04-24T23:39:07.858Z"
                }
            ]
        }
    },
    {
        "id": "116",
        "type": "card",
        "attributes": {
            "strategy": "Accept advice",
            "notes": [
                {
                    "id": 346,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 116,
                    "created_at": "2020-04-24T23:39:07.863Z",
                    "updated_at": "2020-04-24T23:39:07.863Z"
                },
                {
                    "id": 347,
                    "text": "sampled a crocodile eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 116,
                    "created_at": "2020-04-24T23:39:07.869Z",
                    "updated_at": "2020-04-24T23:39:07.869Z"
                },
                {
                    "id": 348,
                    "text": "played a Oboe in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 116,
                    "created_at": "2020-04-24T23:39:07.874Z",
                    "updated_at": "2020-04-24T23:39:07.874Z"
                }
            ]
        }
    },
    {
        "id": "117",
        "type": "card",
        "attributes": {
            "strategy": "Accretion",
            "notes": [
                {
                    "id": 349,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 117,
                    "created_at": "2020-04-24T23:39:07.879Z",
                    "updated_at": "2020-04-24T23:39:07.879Z"
                },
                {
                    "id": 350,
                    "text": "sampled a shark eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 117,
                    "created_at": "2020-04-24T23:39:07.885Z",
                    "updated_at": "2020-04-24T23:39:07.885Z"
                },
                {
                    "id": 351,
                    "text": "played a Drums in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 117,
                    "created_at": "2020-04-24T23:39:07.890Z",
                    "updated_at": "2020-04-24T23:39:07.890Z"
                }
            ]
        }
    },
    {
        "id": "118",
        "type": "card",
        "attributes": {
            "strategy": "A line has two sides",
            "notes": [
                {
                    "id": 352,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 118,
                    "created_at": "2020-04-24T23:39:07.895Z",
                    "updated_at": "2020-04-24T23:39:07.895Z"
                },
                {
                    "id": 353,
                    "text": "sampled a worm eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 118,
                    "created_at": "2020-04-24T23:39:07.899Z",
                    "updated_at": "2020-04-24T23:39:07.899Z"
                },
                {
                    "id": 354,
                    "text": "played a Cello in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 118,
                    "created_at": "2020-04-24T23:39:07.905Z",
                    "updated_at": "2020-04-24T23:39:07.905Z"
                }
            ]
        }
    },
    {
        "id": "119",
        "type": "card",
        "attributes": {
            "strategy": "Allow an easement (an easement is the abandonment of a stricture)",
            "notes": [
                {
                    "id": 355,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 119,
                    "created_at": "2020-04-24T23:39:07.909Z",
                    "updated_at": "2020-04-24T23:39:07.909Z"
                },
                {
                    "id": 356,
                    "text": "sampled a duck eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 119,
                    "created_at": "2020-04-24T23:39:07.914Z",
                    "updated_at": "2020-04-24T23:39:07.914Z"
                },
                {
                    "id": 357,
                    "text": "played a Ukelele in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 119,
                    "created_at": "2020-04-24T23:39:07.919Z",
                    "updated_at": "2020-04-24T23:39:07.919Z"
                }
            ]
        }
    },
    {
        "id": "120",
        "type": "card",
        "attributes": {
            "strategy": "Always first steps",
            "notes": [
                {
                    "id": 358,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 120,
                    "created_at": "2020-04-24T23:39:07.924Z",
                    "updated_at": "2020-04-24T23:39:07.924Z"
                },
                {
                    "id": 359,
                    "text": "sampled a chimpanzee eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 120,
                    "created_at": "2020-04-24T23:39:07.928Z",
                    "updated_at": "2020-04-24T23:39:07.928Z"
                },
                {
                    "id": 360,
                    "text": "played a Clarinet in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 120,
                    "created_at": "2020-04-24T23:39:07.934Z",
                    "updated_at": "2020-04-24T23:39:07.934Z"
                }
            ]
        }
    },
    {
        "id": "121",
        "type": "card",
        "attributes": {
            "strategy": "Always give yourself credit for having more than personality (given by Arto Lindsay)",
            "notes": [
                {
                    "id": 361,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 121,
                    "created_at": "2020-04-24T23:39:07.939Z",
                    "updated_at": "2020-04-24T23:39:07.939Z"
                },
                {
                    "id": 362,
                    "text": "sampled a hippopotamus eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 121,
                    "created_at": "2020-04-24T23:39:07.944Z",
                    "updated_at": "2020-04-24T23:39:07.944Z"
                },
                {
                    "id": 363,
                    "text": "played a Cello in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 121,
                    "created_at": "2020-04-24T23:39:07.950Z",
                    "updated_at": "2020-04-24T23:39:07.950Z"
                }
            ]
        }
    },
    {
        "id": "122",
        "type": "card",
        "attributes": {
            "strategy": "Are there sections? Consider transitions",
            "notes": [
                {
                    "id": 364,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 122,
                    "created_at": "2020-04-24T23:39:07.955Z",
                    "updated_at": "2020-04-24T23:39:07.955Z"
                },
                {
                    "id": 365,
                    "text": "sampled a skunk eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 122,
                    "created_at": "2020-04-24T23:39:07.961Z",
                    "updated_at": "2020-04-24T23:39:07.961Z"
                },
                {
                    "id": 366,
                    "text": "played a Harmonica in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 122,
                    "created_at": "2020-04-24T23:39:07.966Z",
                    "updated_at": "2020-04-24T23:39:07.966Z"
                }
            ]
        }
    },
    {
        "id": "123",
        "type": "card",
        "attributes": {
            "strategy": "Ask people to work against their better judgement",
            "notes": []
        }
    },
    {
        "id": "124",
        "type": "card",
        "attributes": {
            "strategy": "Ask your body",
            "notes": [
                {
                    "id": 370,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 124,
                    "created_at": "2020-04-24T23:39:08.005Z",
                    "updated_at": "2020-04-24T23:39:08.005Z"
                },
                {
                    "id": 371,
                    "text": "sampled a raccoon eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 124,
                    "created_at": "2020-04-24T23:39:08.011Z",
                    "updated_at": "2020-04-24T23:39:08.011Z"
                },
                {
                    "id": 372,
                    "text": "played a Violin in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 124,
                    "created_at": "2020-04-24T23:39:08.017Z",
                    "updated_at": "2020-04-24T23:39:08.017Z"
                }
            ]
        }
    },
    {
        "id": "125",
        "type": "card",
        "attributes": {
            "strategy": "Assemble some of the instruments in a group and treat the group",
            "notes": [
                {
                    "id": 373,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 125,
                    "created_at": "2020-04-24T23:39:08.022Z",
                    "updated_at": "2020-04-24T23:39:08.022Z"
                },
                {
                    "id": 374,
                    "text": "sampled a lizard eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 125,
                    "created_at": "2020-04-24T23:39:08.028Z",
                    "updated_at": "2020-04-24T23:39:08.028Z"
                },
                {
                    "id": 375,
                    "text": "played a Flute in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 125,
                    "created_at": "2020-04-24T23:39:08.033Z",
                    "updated_at": "2020-04-24T23:39:08.033Z"
                }
            ]
        }
    },
    {
        "id": "126",
        "type": "card",
        "attributes": {
            "strategy": "A very small object -Its centre",
            "notes": [
                {
                    "id": 376,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 126,
                    "created_at": "2020-04-24T23:39:08.039Z",
                    "updated_at": "2020-04-24T23:39:08.039Z"
                },
                {
                    "id": 377,
                    "text": "sampled a gorilla eating Pineapple",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 126,
                    "created_at": "2020-04-24T23:39:08.045Z",
                    "updated_at": "2020-04-24T23:39:08.045Z"
                },
                {
                    "id": 378,
                    "text": "played a Piano in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 126,
                    "created_at": "2020-04-24T23:39:08.050Z",
                    "updated_at": "2020-04-24T23:39:08.050Z"
                }
            ]
        }
    },
    {
        "id": "127",
        "type": "card",
        "attributes": {
            "strategy": "Balance the consistency principle with the inconsistency principle",
            "notes": [
                {
                    "id": 379,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 127,
                    "created_at": "2020-04-24T23:39:08.057Z",
                    "updated_at": "2020-04-24T23:39:08.057Z"
                },
                {
                    "id": 380,
                    "text": "sampled a ant eating Guava",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 127,
                    "created_at": "2020-04-24T23:39:08.063Z",
                    "updated_at": "2020-04-24T23:39:08.063Z"
                },
                {
                    "id": 381,
                    "text": "played a Oboe in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 127,
                    "created_at": "2020-04-24T23:39:08.070Z",
                    "updated_at": "2020-04-24T23:39:08.070Z"
                }
            ]
        }
    },
    {
        "id": "128",
        "type": "card",
        "attributes": {
            "strategy": "Be dirty",
            "notes": [
                {
                    "id": 382,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 128,
                    "created_at": "2020-04-24T23:39:08.077Z",
                    "updated_at": "2020-04-24T23:39:08.077Z"
                },
                {
                    "id": 383,
                    "text": "sampled a fox eating Peaches",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 128,
                    "created_at": "2020-04-24T23:39:08.083Z",
                    "updated_at": "2020-04-24T23:39:08.083Z"
                },
                {
                    "id": 384,
                    "text": "played a Electric Guitar in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 128,
                    "created_at": "2020-04-24T23:39:08.090Z",
                    "updated_at": "2020-04-24T23:39:08.090Z"
                }
            ]
        }
    },
    {
        "id": "129",
        "type": "card",
        "attributes": {
            "strategy": "Be extravagant",
            "notes": [
                {
                    "id": 385,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 129,
                    "created_at": "2020-04-24T23:39:08.097Z",
                    "updated_at": "2020-04-24T23:39:08.097Z"
                },
                {
                    "id": 386,
                    "text": "sampled a bat eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 129,
                    "created_at": "2020-04-24T23:39:08.103Z",
                    "updated_at": "2020-04-24T23:39:08.103Z"
                },
                {
                    "id": 387,
                    "text": "played a Cello in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 129,
                    "created_at": "2020-04-24T23:39:08.110Z",
                    "updated_at": "2020-04-24T23:39:08.110Z"
                }
            ]
        }
    },
    {
        "id": "130",
        "type": "card",
        "attributes": {
            "strategy": "Breathe more deeply",
            "notes": [
                {
                    "id": 388,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 130,
                    "created_at": "2020-04-24T23:39:08.117Z",
                    "updated_at": "2020-04-24T23:39:08.117Z"
                },
                {
                    "id": 389,
                    "text": "sampled a cat eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 130,
                    "created_at": "2020-04-24T23:39:08.123Z",
                    "updated_at": "2020-04-24T23:39:08.123Z"
                },
                {
                    "id": 390,
                    "text": "played a Violin in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 130,
                    "created_at": "2020-04-24T23:39:08.128Z",
                    "updated_at": "2020-04-24T23:39:08.128Z"
                }
            ]
        }
    },
    {
        "id": "131",
        "type": "card",
        "attributes": {
            "strategy": "Bridges -build -burn",
            "notes": [
                {
                    "id": 391,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 131,
                    "created_at": "2020-04-24T23:39:08.133Z",
                    "updated_at": "2020-04-24T23:39:08.133Z"
                },
                {
                    "id": 392,
                    "text": "sampled a skunk eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 131,
                    "created_at": "2020-04-24T23:39:08.139Z",
                    "updated_at": "2020-04-24T23:39:08.139Z"
                },
                {
                    "id": 393,
                    "text": "played a Piano in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 131,
                    "created_at": "2020-04-24T23:39:08.144Z",
                    "updated_at": "2020-04-24T23:39:08.144Z"
                }
            ]
        }
    },
    {
        "id": "132",
        "type": "card",
        "attributes": {
            "strategy": "Cascades",
            "notes": [
                {
                    "id": 394,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 132,
                    "created_at": "2020-04-24T23:39:08.150Z",
                    "updated_at": "2020-04-24T23:39:08.150Z"
                },
                {
                    "id": 395,
                    "text": "sampled a baboon eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 132,
                    "created_at": "2020-04-24T23:39:08.156Z",
                    "updated_at": "2020-04-24T23:39:08.156Z"
                },
                {
                    "id": 396,
                    "text": "played a Organ in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 132,
                    "created_at": "2020-04-24T23:39:08.162Z",
                    "updated_at": "2020-04-24T23:39:08.162Z"
                }
            ]
        }
    },
    {
        "id": "133",
        "type": "card",
        "attributes": {
            "strategy": "Change instrument roles",
            "notes": [
                {
                    "id": 397,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 133,
                    "created_at": "2020-04-24T23:39:08.168Z",
                    "updated_at": "2020-04-24T23:39:08.168Z"
                },
                {
                    "id": 398,
                    "text": "sampled a alpaca eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 133,
                    "created_at": "2020-04-24T23:39:08.174Z",
                    "updated_at": "2020-04-24T23:39:08.174Z"
                },
                {
                    "id": 399,
                    "text": "played a Oboe in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 133,
                    "created_at": "2020-04-24T23:39:08.179Z",
                    "updated_at": "2020-04-24T23:39:08.179Z"
                }
            ]
        }
    },
    {
        "id": "134",
        "type": "card",
        "attributes": {
            "strategy": "Change nothing and continue with immaculate consistency",
            "notes": [
                {
                    "id": 400,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 134,
                    "created_at": "2020-04-24T23:39:08.185Z",
                    "updated_at": "2020-04-24T23:39:08.185Z"
                },
                {
                    "id": 401,
                    "text": "sampled a water buffalo eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 134,
                    "created_at": "2020-04-24T23:39:08.191Z",
                    "updated_at": "2020-04-24T23:39:08.191Z"
                },
                {
                    "id": 402,
                    "text": "played a Bass Guitar in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 134,
                    "created_at": "2020-04-24T23:39:08.196Z",
                    "updated_at": "2020-04-24T23:39:08.196Z"
                }
            ]
        }
    },
    {
        "id": "135",
        "type": "card",
        "attributes": {
            "strategy": "Children's voices -speaking -singing",
            "notes": [
                {
                    "id": 403,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 135,
                    "created_at": "2020-04-24T23:39:08.202Z",
                    "updated_at": "2020-04-24T23:39:08.202Z"
                },
                {
                    "id": 404,
                    "text": "sampled a wildebeest eating Dragonfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 135,
                    "created_at": "2020-04-24T23:39:08.207Z",
                    "updated_at": "2020-04-24T23:39:08.207Z"
                },
                {
                    "id": 405,
                    "text": "played a Piano in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 135,
                    "created_at": "2020-04-24T23:39:08.212Z",
                    "updated_at": "2020-04-24T23:39:08.212Z"
                }
            ]
        }
    },
    {
        "id": "136",
        "type": "card",
        "attributes": {
            "strategy": "Cluster analysis",
            "notes": [
                {
                    "id": 406,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 136,
                    "created_at": "2020-04-24T23:39:08.218Z",
                    "updated_at": "2020-04-24T23:39:08.218Z"
                },
                {
                    "id": 407,
                    "text": "sampled a bat eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 136,
                    "created_at": "2020-04-24T23:39:08.224Z",
                    "updated_at": "2020-04-24T23:39:08.224Z"
                },
                {
                    "id": 408,
                    "text": "played a Piano in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 136,
                    "created_at": "2020-04-24T23:39:08.229Z",
                    "updated_at": "2020-04-24T23:39:08.229Z"
                }
            ]
        }
    },
    {
        "id": "137",
        "type": "card",
        "attributes": {
            "strategy": "Consider different fading systems",
            "notes": [
                {
                    "id": 409,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 137,
                    "created_at": "2020-04-24T23:39:08.235Z",
                    "updated_at": "2020-04-24T23:39:08.235Z"
                },
                {
                    "id": 410,
                    "text": "sampled a ferret eating Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 137,
                    "created_at": "2020-04-24T23:39:08.241Z",
                    "updated_at": "2020-04-24T23:39:08.241Z"
                },
                {
                    "id": 411,
                    "text": "played a Acoustic Guitar in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 137,
                    "created_at": "2020-04-24T23:39:08.246Z",
                    "updated_at": "2020-04-24T23:39:08.246Z"
                }
            ]
        }
    },
    {
        "id": "138",
        "type": "card",
        "attributes": {
            "strategy": "Consult other sources -promising -unpromising",
            "notes": [
                {
                    "id": 412,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 138,
                    "created_at": "2020-04-24T23:39:08.252Z",
                    "updated_at": "2020-04-24T23:39:08.252Z"
                },
                {
                    "id": 413,
                    "text": "sampled a dog eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 138,
                    "created_at": "2020-04-24T23:39:08.257Z",
                    "updated_at": "2020-04-24T23:39:08.257Z"
                },
                {
                    "id": 414,
                    "text": "played a Organ in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 138,
                    "created_at": "2020-04-24T23:39:08.263Z",
                    "updated_at": "2020-04-24T23:39:08.263Z"
                }
            ]
        }
    },
    {
        "id": "139",
        "type": "card",
        "attributes": {
            "strategy": "Convert a melodic element into a rhythmic element",
            "notes": [
                {
                    "id": 415,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 139,
                    "created_at": "2020-04-24T23:39:08.268Z",
                    "updated_at": "2020-04-24T23:39:08.268Z"
                },
                {
                    "id": 416,
                    "text": "sampled a cod eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 139,
                    "created_at": "2020-04-24T23:39:08.274Z",
                    "updated_at": "2020-04-24T23:39:08.274Z"
                },
                {
                    "id": 417,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 139,
                    "created_at": "2020-04-24T23:39:08.279Z",
                    "updated_at": "2020-04-24T23:39:08.279Z"
                }
            ]
        }
    },
    {
        "id": "140",
        "type": "card",
        "attributes": {
            "strategy": "Courage!",
            "notes": [
                {
                    "id": 418,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 140,
                    "created_at": "2020-04-24T23:39:08.285Z",
                    "updated_at": "2020-04-24T23:39:08.285Z"
                },
                {
                    "id": 419,
                    "text": "sampled a locust eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 140,
                    "created_at": "2020-04-24T23:39:08.290Z",
                    "updated_at": "2020-04-24T23:39:08.290Z"
                },
                {
                    "id": 420,
                    "text": "played a Xylophone in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 140,
                    "created_at": "2020-04-24T23:39:08.295Z",
                    "updated_at": "2020-04-24T23:39:08.295Z"
                }
            ]
        }
    },
    {
        "id": "141",
        "type": "card",
        "attributes": {
            "strategy": "Cut a vital connection",
            "notes": [
                {
                    "id": 421,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 141,
                    "created_at": "2020-04-24T23:39:08.300Z",
                    "updated_at": "2020-04-24T23:39:08.300Z"
                },
                {
                    "id": 422,
                    "text": "sampled a hippopotamus eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 141,
                    "created_at": "2020-04-24T23:39:08.306Z",
                    "updated_at": "2020-04-24T23:39:08.306Z"
                },
                {
                    "id": 423,
                    "text": "played a Violin in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 141,
                    "created_at": "2020-04-24T23:39:08.310Z",
                    "updated_at": "2020-04-24T23:39:08.310Z"
                }
            ]
        }
    },
    {
        "id": "142",
        "type": "card",
        "attributes": {
            "strategy": "Decorate, decorate",
            "notes": [
                {
                    "id": 424,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 142,
                    "created_at": "2020-04-24T23:39:08.318Z",
                    "updated_at": "2020-04-24T23:39:08.318Z"
                },
                {
                    "id": 425,
                    "text": "sampled a reindeer eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 142,
                    "created_at": "2020-04-24T23:39:08.323Z",
                    "updated_at": "2020-04-24T23:39:08.323Z"
                },
                {
                    "id": 426,
                    "text": "played a Cello in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 142,
                    "created_at": "2020-04-24T23:39:08.328Z",
                    "updated_at": "2020-04-24T23:39:08.328Z"
                }
            ]
        }
    },
    {
        "id": "143",
        "type": "card",
        "attributes": {
            "strategy": "Define an area as 'safe' and use it as an anchor",
            "notes": [
                {
                    "id": 427,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 143,
                    "created_at": "2020-04-24T23:39:08.333Z",
                    "updated_at": "2020-04-24T23:39:08.333Z"
                },
                {
                    "id": 428,
                    "text": "sampled a pig eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 143,
                    "created_at": "2020-04-24T23:39:08.338Z",
                    "updated_at": "2020-04-24T23:39:08.338Z"
                },
                {
                    "id": 429,
                    "text": "played a Xylophone in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 143,
                    "created_at": "2020-04-24T23:39:08.343Z",
                    "updated_at": "2020-04-24T23:39:08.343Z"
                }
            ]
        }
    },
    {
        "id": "144",
        "type": "card",
        "attributes": {
            "strategy": "Destroy -nothing -the most important thing",
            "notes": [
                {
                    "id": 430,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 144,
                    "created_at": "2020-04-24T23:39:08.348Z",
                    "updated_at": "2020-04-24T23:39:08.348Z"
                },
                {
                    "id": 431,
                    "text": "sampled a hound eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 144,
                    "created_at": "2020-04-24T23:39:08.353Z",
                    "updated_at": "2020-04-24T23:39:08.353Z"
                },
                {
                    "id": 432,
                    "text": "played a Piano in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 144,
                    "created_at": "2020-04-24T23:39:08.359Z",
                    "updated_at": "2020-04-24T23:39:08.359Z"
                }
            ]
        }
    },
    {
        "id": "145",
        "type": "card",
        "attributes": {
            "strategy": "Discard an axiom",
            "notes": [
                {
                    "id": 433,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 145,
                    "created_at": "2020-04-24T23:39:08.364Z",
                    "updated_at": "2020-04-24T23:39:08.364Z"
                },
                {
                    "id": 434,
                    "text": "sampled a llama eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 145,
                    "created_at": "2020-04-24T23:39:08.370Z",
                    "updated_at": "2020-04-24T23:39:08.370Z"
                },
                {
                    "id": 435,
                    "text": "played a Harmonica in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 145,
                    "created_at": "2020-04-24T23:39:08.376Z",
                    "updated_at": "2020-04-24T23:39:08.376Z"
                }
            ]
        }
    },
    {
        "id": "146",
        "type": "card",
        "attributes": {
            "strategy": "Disciplined self-indulgence",
            "notes": [
                {
                    "id": 436,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 146,
                    "created_at": "2020-04-24T23:39:08.387Z",
                    "updated_at": "2020-04-24T23:39:08.387Z"
                },
                {
                    "id": 437,
                    "text": "sampled a gerbil eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 146,
                    "created_at": "2020-04-24T23:39:08.393Z",
                    "updated_at": "2020-04-24T23:39:08.393Z"
                },
                {
                    "id": 438,
                    "text": "played a Flute in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 146,
                    "created_at": "2020-04-24T23:39:08.400Z",
                    "updated_at": "2020-04-24T23:39:08.400Z"
                }
            ]
        }
    },
    {
        "id": "147",
        "type": "card",
        "attributes": {
            "strategy": "Disconnect from desire",
            "notes": [
                {
                    "id": 439,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 147,
                    "created_at": "2020-04-24T23:39:08.407Z",
                    "updated_at": "2020-04-24T23:39:08.407Z"
                },
                {
                    "id": 440,
                    "text": "sampled a buffalo eating Watermelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 147,
                    "created_at": "2020-04-24T23:39:08.417Z",
                    "updated_at": "2020-04-24T23:39:08.417Z"
                },
                {
                    "id": 441,
                    "text": "played a Acoustic Guitar in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 147,
                    "created_at": "2020-04-24T23:39:08.422Z",
                    "updated_at": "2020-04-24T23:39:08.422Z"
                }
            ]
        }
    },
    {
        "id": "148",
        "type": "card",
        "attributes": {
            "strategy": "Discover the recipes you are using and abandon them",
            "notes": [
                {
                    "id": 442,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 148,
                    "created_at": "2020-04-24T23:39:08.431Z",
                    "updated_at": "2020-04-24T23:39:08.431Z"
                },
                {
                    "id": 443,
                    "text": "sampled a hound eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 148,
                    "created_at": "2020-04-24T23:39:08.448Z",
                    "updated_at": "2020-04-24T23:39:08.448Z"
                },
                {
                    "id": 444,
                    "text": "played a Ukelele in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 148,
                    "created_at": "2020-04-24T23:39:08.466Z",
                    "updated_at": "2020-04-24T23:39:08.466Z"
                }
            ]
        }
    },
    {
        "id": "149",
        "type": "card",
        "attributes": {
            "strategy": "Distorting time",
            "notes": [
                {
                    "id": 445,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 149,
                    "created_at": "2020-04-24T23:39:08.476Z",
                    "updated_at": "2020-04-24T23:39:08.476Z"
                },
                {
                    "id": 446,
                    "text": "sampled a spider eating Oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 149,
                    "created_at": "2020-04-24T23:39:08.483Z",
                    "updated_at": "2020-04-24T23:39:08.483Z"
                },
                {
                    "id": 447,
                    "text": "played a Violin in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 149,
                    "created_at": "2020-04-24T23:39:08.490Z",
                    "updated_at": "2020-04-24T23:39:08.490Z"
                }
            ]
        }
    },
    {
        "id": "150",
        "type": "card",
        "attributes": {
            "strategy": "Do nothing for as long as possible",
            "notes": [
                {
                    "id": 448,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 150,
                    "created_at": "2020-04-24T23:39:08.497Z",
                    "updated_at": "2020-04-24T23:39:08.497Z"
                },
                {
                    "id": 449,
                    "text": "sampled a hornet eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 150,
                    "created_at": "2020-04-24T23:39:08.503Z",
                    "updated_at": "2020-04-24T23:39:08.503Z"
                },
                {
                    "id": 450,
                    "text": "played a Xylophone in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 150,
                    "created_at": "2020-04-24T23:39:08.509Z",
                    "updated_at": "2020-04-24T23:39:08.509Z"
                }
            ]
        }
    },
    {
        "id": "151",
        "type": "card",
        "attributes": {
            "strategy": "Don't be afraid of things because they're easy to do",
            "notes": [
                {
                    "id": 451,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 151,
                    "created_at": "2020-04-24T23:39:08.515Z",
                    "updated_at": "2020-04-24T23:39:08.515Z"
                },
                {
                    "id": 452,
                    "text": "sampled a mink eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 151,
                    "created_at": "2020-04-24T23:39:08.521Z",
                    "updated_at": "2020-04-24T23:39:08.521Z"
                },
                {
                    "id": 453,
                    "text": "played a Cello in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 151,
                    "created_at": "2020-04-24T23:39:08.528Z",
                    "updated_at": "2020-04-24T23:39:08.528Z"
                }
            ]
        }
    },
    {
        "id": "152",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened of cliches",
            "notes": [
                {
                    "id": 454,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 152,
                    "created_at": "2020-04-24T23:39:08.534Z",
                    "updated_at": "2020-04-24T23:39:08.534Z"
                },
                {
                    "id": 455,
                    "text": "sampled a weasel eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 152,
                    "created_at": "2020-04-24T23:39:08.540Z",
                    "updated_at": "2020-04-24T23:39:08.540Z"
                },
                {
                    "id": 456,
                    "text": "played a Accordion in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 152,
                    "created_at": "2020-04-24T23:39:08.547Z",
                    "updated_at": "2020-04-24T23:39:08.547Z"
                }
            ]
        }
    },
    {
        "id": "153",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened to display your talents",
            "notes": [
                {
                    "id": 457,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 153,
                    "created_at": "2020-04-24T23:39:08.553Z",
                    "updated_at": "2020-04-24T23:39:08.553Z"
                },
                {
                    "id": 458,
                    "text": "sampled a impala eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 153,
                    "created_at": "2020-04-24T23:39:08.560Z",
                    "updated_at": "2020-04-24T23:39:08.560Z"
                },
                {
                    "id": 459,
                    "text": "played a Trumpet in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 153,
                    "created_at": "2020-04-24T23:39:08.572Z",
                    "updated_at": "2020-04-24T23:39:08.572Z"
                }
            ]
        }
    },
    {
        "id": "154",
        "type": "card",
        "attributes": {
            "strategy": "Don't break the silence",
            "notes": [
                {
                    "id": 460,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 154,
                    "created_at": "2020-04-24T23:39:08.579Z",
                    "updated_at": "2020-04-24T23:39:08.579Z"
                },
                {
                    "id": 461,
                    "text": "sampled a goldfish eating Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 154,
                    "created_at": "2020-04-24T23:39:08.587Z",
                    "updated_at": "2020-04-24T23:39:08.587Z"
                },
                {
                    "id": 462,
                    "text": "played a Organ in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 154,
                    "created_at": "2020-04-24T23:39:08.595Z",
                    "updated_at": "2020-04-24T23:39:08.595Z"
                }
            ]
        }
    },
    {
        "id": "155",
        "type": "card",
        "attributes": {
            "strategy": "Don't stress *on* thing more than another (sic)",
            "notes": [
                {
                    "id": 463,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 155,
                    "created_at": "2020-04-24T23:39:08.602Z",
                    "updated_at": "2020-04-24T23:39:08.602Z"
                },
                {
                    "id": 464,
                    "text": "sampled a gorilla eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 155,
                    "created_at": "2020-04-24T23:39:08.609Z",
                    "updated_at": "2020-04-24T23:39:08.609Z"
                },
                {
                    "id": 465,
                    "text": "played a Oboe in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 155,
                    "created_at": "2020-04-24T23:39:08.618Z",
                    "updated_at": "2020-04-24T23:39:08.618Z"
                }
            ]
        }
    },
    {
        "id": "156",
        "type": "card",
        "attributes": {
            "strategy": "Do something boring",
            "notes": [
                {
                    "id": 466,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 156,
                    "created_at": "2020-04-24T23:39:08.623Z",
                    "updated_at": "2020-04-24T23:39:08.623Z"
                },
                {
                    "id": 467,
                    "text": "sampled a mammoth eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 156,
                    "created_at": "2020-04-24T23:39:08.629Z",
                    "updated_at": "2020-04-24T23:39:08.629Z"
                },
                {
                    "id": 468,
                    "text": "played a Flute in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 156,
                    "created_at": "2020-04-24T23:39:08.635Z",
                    "updated_at": "2020-04-24T23:39:08.635Z"
                }
            ]
        }
    },
    {
        "id": "157",
        "type": "card",
        "attributes": {
            "strategy": "Do the washing up",
            "notes": [
                {
                    "id": 469,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 157,
                    "created_at": "2020-04-24T23:39:08.641Z",
                    "updated_at": "2020-04-24T23:39:08.641Z"
                },
                {
                    "id": 470,
                    "text": "sampled a baboon eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 157,
                    "created_at": "2020-04-24T23:39:08.647Z",
                    "updated_at": "2020-04-24T23:39:08.647Z"
                },
                {
                    "id": 471,
                    "text": "played a Flute in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 157,
                    "created_at": "2020-04-24T23:39:08.654Z",
                    "updated_at": "2020-04-24T23:39:08.654Z"
                }
            ]
        }
    },
    {
        "id": "158",
        "type": "card",
        "attributes": {
            "strategy": "Do the words need changing?",
            "notes": [
                {
                    "id": 472,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 158,
                    "created_at": "2020-04-24T23:39:08.675Z",
                    "updated_at": "2020-04-24T23:39:08.675Z"
                },
                {
                    "id": 473,
                    "text": "sampled a mouse eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 158,
                    "created_at": "2020-04-24T23:39:08.681Z",
                    "updated_at": "2020-04-24T23:39:08.681Z"
                },
                {
                    "id": 474,
                    "text": "played a Bass Guitar in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 158,
                    "created_at": "2020-04-24T23:39:08.687Z",
                    "updated_at": "2020-04-24T23:39:08.687Z"
                }
            ]
        }
    },
    {
        "id": "159",
        "type": "card",
        "attributes": {
            "strategy": "Do we need holes?",
            "notes": [
                {
                    "id": 475,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 159,
                    "created_at": "2020-04-24T23:39:08.693Z",
                    "updated_at": "2020-04-24T23:39:08.693Z"
                },
                {
                    "id": 476,
                    "text": "sampled a duck eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 159,
                    "created_at": "2020-04-24T23:39:08.699Z",
                    "updated_at": "2020-04-24T23:39:08.699Z"
                },
                {
                    "id": 477,
                    "text": "played a Drums in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 159,
                    "created_at": "2020-04-24T23:39:08.705Z",
                    "updated_at": "2020-04-24T23:39:08.705Z"
                }
            ]
        }
    },
    {
        "id": "160",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise differences",
            "notes": [
                {
                    "id": 478,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 160,
                    "created_at": "2020-04-24T23:39:08.714Z",
                    "updated_at": "2020-04-24T23:39:08.714Z"
                },
                {
                    "id": 479,
                    "text": "sampled a locust eating Plums",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 160,
                    "created_at": "2020-04-24T23:39:08.721Z",
                    "updated_at": "2020-04-24T23:39:08.721Z"
                },
                {
                    "id": 480,
                    "text": "played a Flute in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 160,
                    "created_at": "2020-04-24T23:39:08.726Z",
                    "updated_at": "2020-04-24T23:39:08.726Z"
                }
            ]
        }
    },
    {
        "id": "161",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise repetitions",
            "notes": [
                {
                    "id": 481,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 161,
                    "created_at": "2020-04-24T23:39:08.731Z",
                    "updated_at": "2020-04-24T23:39:08.731Z"
                },
                {
                    "id": 482,
                    "text": "sampled a mosquito eating Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 161,
                    "created_at": "2020-04-24T23:39:08.737Z",
                    "updated_at": "2020-04-24T23:39:08.737Z"
                },
                {
                    "id": 483,
                    "text": "played a Cello in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 161,
                    "created_at": "2020-04-24T23:39:08.742Z",
                    "updated_at": "2020-04-24T23:39:08.742Z"
                }
            ]
        }
    },
    {
        "id": "162",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise the flaws",
            "notes": [
                {
                    "id": 484,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 162,
                    "created_at": "2020-04-24T23:39:08.747Z",
                    "updated_at": "2020-04-24T23:39:08.747Z"
                },
                {
                    "id": 485,
                    "text": "sampled a ant eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 162,
                    "created_at": "2020-04-24T23:39:08.752Z",
                    "updated_at": "2020-04-24T23:39:08.752Z"
                },
                {
                    "id": 486,
                    "text": "played a Flute in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 162,
                    "created_at": "2020-04-24T23:39:08.758Z",
                    "updated_at": "2020-04-24T23:39:08.758Z"
                }
            ]
        }
    },
    {
        "id": "163",
        "type": "card",
        "attributes": {
            "strategy": "Faced with a choice, do both (given by Dieter Rot)",
            "notes": [
                {
                    "id": 487,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 163,
                    "created_at": "2020-04-24T23:39:08.765Z",
                    "updated_at": "2020-04-24T23:39:08.765Z"
                },
                {
                    "id": 488,
                    "text": "sampled a gerbil eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 163,
                    "created_at": "2020-04-24T23:39:08.771Z",
                    "updated_at": "2020-04-24T23:39:08.771Z"
                },
                {
                    "id": 489,
                    "text": "played a Piano in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 163,
                    "created_at": "2020-04-24T23:39:08.777Z",
                    "updated_at": "2020-04-24T23:39:08.777Z"
                }
            ]
        }
    },
    {
        "id": "164",
        "type": "card",
        "attributes": {
            "strategy": "Feed the recording back out of the medium",
            "notes": [
                {
                    "id": 490,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 164,
                    "created_at": "2020-04-24T23:39:08.782Z",
                    "updated_at": "2020-04-24T23:39:08.782Z"
                },
                {
                    "id": 491,
                    "text": "sampled a lion eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 164,
                    "created_at": "2020-04-24T23:39:08.788Z",
                    "updated_at": "2020-04-24T23:39:08.788Z"
                },
                {
                    "id": 492,
                    "text": "played a Clarinet in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 164,
                    "created_at": "2020-04-24T23:39:08.793Z",
                    "updated_at": "2020-04-24T23:39:08.793Z"
                }
            ]
        }
    },
    {
        "id": "165",
        "type": "card",
        "attributes": {
            "strategy": "Fill every beat with something",
            "notes": [
                {
                    "id": 493,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 165,
                    "created_at": "2020-04-24T23:39:08.799Z",
                    "updated_at": "2020-04-24T23:39:08.799Z"
                },
                {
                    "id": 494,
                    "text": "sampled a ferret eating Juniper Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 165,
                    "created_at": "2020-04-24T23:39:08.807Z",
                    "updated_at": "2020-04-24T23:39:08.807Z"
                },
                {
                    "id": 495,
                    "text": "played a Saxophone in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 165,
                    "created_at": "2020-04-24T23:39:08.812Z",
                    "updated_at": "2020-04-24T23:39:08.812Z"
                }
            ]
        }
    },
    {
        "id": "166",
        "type": "card",
        "attributes": {
            "strategy": "Get your neck massaged",
            "notes": [
                {
                    "id": 496,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 166,
                    "created_at": "2020-04-24T23:39:08.816Z",
                    "updated_at": "2020-04-24T23:39:08.816Z"
                },
                {
                    "id": 497,
                    "text": "sampled a weasel eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 166,
                    "created_at": "2020-04-24T23:39:08.822Z",
                    "updated_at": "2020-04-24T23:39:08.822Z"
                },
                {
                    "id": 498,
                    "text": "played a Flute in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 166,
                    "created_at": "2020-04-24T23:39:08.828Z",
                    "updated_at": "2020-04-24T23:39:08.828Z"
                }
            ]
        }
    },
    {
        "id": "167",
        "type": "card",
        "attributes": {
            "strategy": "Ghost echoes",
            "notes": [
                {
                    "id": 499,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 167,
                    "created_at": "2020-04-24T23:39:08.834Z",
                    "updated_at": "2020-04-24T23:39:08.834Z"
                },
                {
                    "id": 500,
                    "text": "sampled a hyena eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 167,
                    "created_at": "2020-04-24T23:39:08.841Z",
                    "updated_at": "2020-04-24T23:39:08.841Z"
                },
                {
                    "id": 501,
                    "text": "played a Piano in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 167,
                    "created_at": "2020-04-24T23:39:08.850Z",
                    "updated_at": "2020-04-24T23:39:08.850Z"
                }
            ]
        }
    },
    {
        "id": "168",
        "type": "card",
        "attributes": {
            "strategy": "Give the game away",
            "notes": [
                {
                    "id": 502,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 168,
                    "created_at": "2020-04-24T23:39:08.859Z",
                    "updated_at": "2020-04-24T23:39:08.859Z"
                },
                {
                    "id": 503,
                    "text": "sampled a mosquito eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 168,
                    "created_at": "2020-04-24T23:39:08.865Z",
                    "updated_at": "2020-04-24T23:39:08.865Z"
                },
                {
                    "id": 504,
                    "text": "played a Saxophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 168,
                    "created_at": "2020-04-24T23:39:08.871Z",
                    "updated_at": "2020-04-24T23:39:08.871Z"
                }
            ]
        }
    },
    {
        "id": "169",
        "type": "card",
        "attributes": {
            "strategy": "Give way to your worst impulse",
            "notes": [
                {
                    "id": 505,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 169,
                    "created_at": "2020-04-24T23:39:08.882Z",
                    "updated_at": "2020-04-24T23:39:08.882Z"
                },
                {
                    "id": 506,
                    "text": "sampled a fox eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 169,
                    "created_at": "2020-04-24T23:39:08.889Z",
                    "updated_at": "2020-04-24T23:39:08.889Z"
                },
                {
                    "id": 507,
                    "text": "played a Bass Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 169,
                    "created_at": "2020-04-24T23:39:08.895Z",
                    "updated_at": "2020-04-24T23:39:08.895Z"
                }
            ]
        }
    },
    {
        "id": "170",
        "type": "card",
        "attributes": {
            "strategy": "Go outside. Shut the door.",
            "notes": [
                {
                    "id": 508,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 170,
                    "created_at": "2020-04-24T23:39:08.900Z",
                    "updated_at": "2020-04-24T23:39:08.900Z"
                },
                {
                    "id": 509,
                    "text": "sampled a gnat eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 170,
                    "created_at": "2020-04-24T23:39:08.906Z",
                    "updated_at": "2020-04-24T23:39:08.906Z"
                },
                {
                    "id": 510,
                    "text": "played a Xylophone in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 170,
                    "created_at": "2020-04-24T23:39:08.912Z",
                    "updated_at": "2020-04-24T23:39:08.912Z"
                }
            ]
        }
    },
    {
        "id": "171",
        "type": "card",
        "attributes": {
            "strategy": "Go slowly all the way round the outside",
            "notes": [
                {
                    "id": 511,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 171,
                    "created_at": "2020-04-24T23:39:08.917Z",
                    "updated_at": "2020-04-24T23:39:08.917Z"
                },
                {
                    "id": 512,
                    "text": "sampled a goose eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 171,
                    "created_at": "2020-04-24T23:39:08.926Z",
                    "updated_at": "2020-04-24T23:39:08.926Z"
                },
                {
                    "id": 513,
                    "text": "played a Trumpet in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 171,
                    "created_at": "2020-04-24T23:39:08.932Z",
                    "updated_at": "2020-04-24T23:39:08.932Z"
                }
            ]
        }
    },
    {
        "id": "172",
        "type": "card",
        "attributes": {
            "strategy": "Honor thy error as a hidden intention",
            "notes": [
                {
                    "id": 514,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 172,
                    "created_at": "2020-04-24T23:39:08.937Z",
                    "updated_at": "2020-04-24T23:39:08.937Z"
                },
                {
                    "id": 515,
                    "text": "sampled a sheep eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 172,
                    "created_at": "2020-04-24T23:39:08.942Z",
                    "updated_at": "2020-04-24T23:39:08.942Z"
                },
                {
                    "id": 516,
                    "text": "played a Trumpet in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 172,
                    "created_at": "2020-04-24T23:39:08.946Z",
                    "updated_at": "2020-04-24T23:39:08.946Z"
                }
            ]
        }
    },
    {
        "id": "173",
        "type": "card",
        "attributes": {
            "strategy": "How would you have done it?",
            "notes": [
                {
                    "id": 517,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 173,
                    "created_at": "2020-04-24T23:39:08.952Z",
                    "updated_at": "2020-04-24T23:39:08.952Z"
                },
                {
                    "id": 518,
                    "text": "sampled a frog eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 173,
                    "created_at": "2020-04-24T23:39:08.958Z",
                    "updated_at": "2020-04-24T23:39:08.958Z"
                },
                {
                    "id": 519,
                    "text": "played a Bass Guitar in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 173,
                    "created_at": "2020-04-24T23:39:08.964Z",
                    "updated_at": "2020-04-24T23:39:08.964Z"
                }
            ]
        }
    },
    {
        "id": "174",
        "type": "card",
        "attributes": {
            "strategy": "Humanise something free of error",
            "notes": [
                {
                    "id": 520,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 174,
                    "created_at": "2020-04-24T23:39:08.971Z",
                    "updated_at": "2020-04-24T23:39:08.971Z"
                },
                {
                    "id": 521,
                    "text": "sampled a butterfly eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 174,
                    "created_at": "2020-04-24T23:39:08.976Z",
                    "updated_at": "2020-04-24T23:39:08.976Z"
                },
                {
                    "id": 522,
                    "text": "played a Electric Guitar in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 174,
                    "created_at": "2020-04-24T23:39:08.982Z",
                    "updated_at": "2020-04-24T23:39:08.982Z"
                }
            ]
        }
    },
    {
        "id": "175",
        "type": "card",
        "attributes": {
            "strategy": "Idiot glee (?)",
            "notes": [
                {
                    "id": 523,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 175,
                    "created_at": "2020-04-24T23:39:08.987Z",
                    "updated_at": "2020-04-24T23:39:08.987Z"
                },
                {
                    "id": 524,
                    "text": "sampled a cricket eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 175,
                    "created_at": "2020-04-24T23:39:08.993Z",
                    "updated_at": "2020-04-24T23:39:08.993Z"
                },
                {
                    "id": 525,
                    "text": "played a Drums in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 175,
                    "created_at": "2020-04-24T23:39:08.998Z",
                    "updated_at": "2020-04-24T23:39:08.998Z"
                }
            ]
        }
    },
    {
        "id": "176",
        "type": "card",
        "attributes": {
            "strategy": "Imagine the piece as a set of disconnected events",
            "notes": [
                {
                    "id": 526,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 176,
                    "created_at": "2020-04-24T23:39:09.003Z",
                    "updated_at": "2020-04-24T23:39:09.003Z"
                },
                {
                    "id": 527,
                    "text": "sampled a rhinoceros eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 176,
                    "created_at": "2020-04-24T23:39:09.009Z",
                    "updated_at": "2020-04-24T23:39:09.009Z"
                },
                {
                    "id": 528,
                    "text": "played a Electric Guitar in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 176,
                    "created_at": "2020-04-24T23:39:09.016Z",
                    "updated_at": "2020-04-24T23:39:09.016Z"
                }
            ]
        }
    },
    {
        "id": "177",
        "type": "card",
        "attributes": {
            "strategy": "Infinitesimal gradations",
            "notes": [
                {
                    "id": 529,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 177,
                    "created_at": "2020-04-24T23:39:09.022Z",
                    "updated_at": "2020-04-24T23:39:09.022Z"
                },
                {
                    "id": 530,
                    "text": "sampled a ant eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 177,
                    "created_at": "2020-04-24T23:39:09.027Z",
                    "updated_at": "2020-04-24T23:39:09.027Z"
                },
                {
                    "id": 531,
                    "text": "played a Accordion in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 177,
                    "created_at": "2020-04-24T23:39:09.032Z",
                    "updated_at": "2020-04-24T23:39:09.032Z"
                }
            ]
        }
    },
    {
        "id": "178",
        "type": "card",
        "attributes": {
            "strategy": "Intentions -credibility of -nobility of -humility of",
            "notes": [
                {
                    "id": 532,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 178,
                    "created_at": "2020-04-24T23:39:09.037Z",
                    "updated_at": "2020-04-24T23:39:09.037Z"
                },
                {
                    "id": 533,
                    "text": "sampled a horse eating Mangosteens",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 178,
                    "created_at": "2020-04-24T23:39:09.043Z",
                    "updated_at": "2020-04-24T23:39:09.043Z"
                },
                {
                    "id": 534,
                    "text": "played a Acoustic Guitar in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 178,
                    "created_at": "2020-04-24T23:39:09.049Z",
                    "updated_at": "2020-04-24T23:39:09.049Z"
                }
            ]
        }
    },
    {
        "id": "179",
        "type": "card",
        "attributes": {
            "strategy": "In total darkness, or in a very large room, very quietly",
            "notes": [
                {
                    "id": 535,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 179,
                    "created_at": "2020-04-24T23:39:09.056Z",
                    "updated_at": "2020-04-24T23:39:09.056Z"
                },
                {
                    "id": 536,
                    "text": "sampled a gerbil eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 179,
                    "created_at": "2020-04-24T23:39:09.062Z",
                    "updated_at": "2020-04-24T23:39:09.062Z"
                },
                {
                    "id": 537,
                    "text": "played a Electric Guitar in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 179,
                    "created_at": "2020-04-24T23:39:09.069Z",
                    "updated_at": "2020-04-24T23:39:09.069Z"
                }
            ]
        }
    },
    {
        "id": "180",
        "type": "card",
        "attributes": {
            "strategy": "Into the impossible",
            "notes": [
                {
                    "id": 538,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 180,
                    "created_at": "2020-04-24T23:39:09.076Z",
                    "updated_at": "2020-04-24T23:39:09.076Z"
                },
                {
                    "id": 539,
                    "text": "sampled a swan eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 180,
                    "created_at": "2020-04-24T23:39:09.082Z",
                    "updated_at": "2020-04-24T23:39:09.082Z"
                },
                {
                    "id": 540,
                    "text": "played a Clarinet in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 180,
                    "created_at": "2020-04-24T23:39:09.088Z",
                    "updated_at": "2020-04-24T23:39:09.088Z"
                }
            ]
        }
    },
    {
        "id": "181",
        "type": "card",
        "attributes": {
            "strategy": "Is it finished?",
            "notes": [
                {
                    "id": 541,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 181,
                    "created_at": "2020-04-24T23:39:09.094Z",
                    "updated_at": "2020-04-24T23:39:09.094Z"
                },
                {
                    "id": 542,
                    "text": "sampled a moose eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 181,
                    "created_at": "2020-04-24T23:39:09.103Z",
                    "updated_at": "2020-04-24T23:39:09.103Z"
                },
                {
                    "id": 543,
                    "text": "played a Cello in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 181,
                    "created_at": "2020-04-24T23:39:09.109Z",
                    "updated_at": "2020-04-24T23:39:09.109Z"
                }
            ]
        }
    },
    {
        "id": "182",
        "type": "card",
        "attributes": {
            "strategy": "Is the tuning intonation correct?",
            "notes": [
                {
                    "id": 544,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 182,
                    "created_at": "2020-04-24T23:39:09.114Z",
                    "updated_at": "2020-04-24T23:39:09.114Z"
                },
                {
                    "id": 545,
                    "text": "sampled a mink eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 182,
                    "created_at": "2020-04-24T23:39:09.120Z",
                    "updated_at": "2020-04-24T23:39:09.120Z"
                },
                {
                    "id": 546,
                    "text": "played a Saxophone in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 182,
                    "created_at": "2020-04-24T23:39:09.125Z",
                    "updated_at": "2020-04-24T23:39:09.125Z"
                }
            ]
        }
    },
    {
        "id": "183",
        "type": "card",
        "attributes": {
            "strategy": "Is there something missing?",
            "notes": [
                {
                    "id": 547,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 183,
                    "created_at": "2020-04-24T23:39:09.130Z",
                    "updated_at": "2020-04-24T23:39:09.130Z"
                },
                {
                    "id": 548,
                    "text": "sampled a armadillo eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 183,
                    "created_at": "2020-04-24T23:39:09.135Z",
                    "updated_at": "2020-04-24T23:39:09.135Z"
                },
                {
                    "id": 549,
                    "text": "played a Drums in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 183,
                    "created_at": "2020-04-24T23:39:09.141Z",
                    "updated_at": "2020-04-24T23:39:09.141Z"
                }
            ]
        }
    },
    {
        "id": "184",
        "type": "card",
        "attributes": {
            "strategy": "It is quite possible (after all)",
            "notes": [
                {
                    "id": 550,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 184,
                    "created_at": "2020-04-24T23:39:09.147Z",
                    "updated_at": "2020-04-24T23:39:09.147Z"
                },
                {
                    "id": 552,
                    "text": "played a Acoustic Guitar in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 184,
                    "created_at": "2020-04-24T23:39:09.159Z",
                    "updated_at": "2020-04-24T23:39:09.159Z"
                }
            ]
        }
    },
    {
        "id": "185",
        "type": "card",
        "attributes": {
            "strategy": "Just carry on",
            "notes": [
                {
                    "id": 553,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 185,
                    "created_at": "2020-04-24T23:39:09.165Z",
                    "updated_at": "2020-04-24T23:39:09.165Z"
                },
                {
                    "id": 554,
                    "text": "sampled a jellyfish eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 185,
                    "created_at": "2020-04-24T23:39:09.170Z",
                    "updated_at": "2020-04-24T23:39:09.170Z"
                },
                {
                    "id": 555,
                    "text": "played a Acoustic Guitar in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 185,
                    "created_at": "2020-04-24T23:39:09.176Z",
                    "updated_at": "2020-04-24T23:39:09.176Z"
                }
            ]
        }
    },
    {
        "id": "186",
        "type": "card",
        "attributes": {
            "strategy": "Left channel, right channel, centre channel",
            "notes": [
                {
                    "id": 556,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 186,
                    "created_at": "2020-04-24T23:39:09.183Z",
                    "updated_at": "2020-04-24T23:39:09.183Z"
                },
                {
                    "id": 557,
                    "text": "sampled a prairie dog eating Pineapple",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 186,
                    "created_at": "2020-04-24T23:39:09.188Z",
                    "updated_at": "2020-04-24T23:39:09.188Z"
                },
                {
                    "id": 558,
                    "text": "played a Trumpet in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 186,
                    "created_at": "2020-04-24T23:39:09.193Z",
                    "updated_at": "2020-04-24T23:39:09.193Z"
                }
            ]
        }
    },
    {
        "id": "187",
        "type": "card",
        "attributes": {
            "strategy": "Listen to the quiet voice",
            "notes": [
                {
                    "id": 559,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 187,
                    "created_at": "2020-04-24T23:39:09.198Z",
                    "updated_at": "2020-04-24T23:39:09.198Z"
                },
                {
                    "id": 560,
                    "text": "sampled a raccoon eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 187,
                    "created_at": "2020-04-24T23:39:09.203Z",
                    "updated_at": "2020-04-24T23:39:09.203Z"
                },
                {
                    "id": 561,
                    "text": "played a Trumpet in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 187,
                    "created_at": "2020-04-24T23:39:09.208Z",
                    "updated_at": "2020-04-24T23:39:09.208Z"
                }
            ]
        }
    },
    {
        "id": "188",
        "type": "card",
        "attributes": {
            "strategy": "Look at the order in which you do things",
            "notes": [
                {
                    "id": 562,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 188,
                    "created_at": "2020-04-24T23:39:09.213Z",
                    "updated_at": "2020-04-24T23:39:09.213Z"
                },
                {
                    "id": 563,
                    "text": "sampled a herring eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 188,
                    "created_at": "2020-04-24T23:39:09.218Z",
                    "updated_at": "2020-04-24T23:39:09.218Z"
                },
                {
                    "id": 564,
                    "text": "played a Xylophone in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 188,
                    "created_at": "2020-04-24T23:39:09.224Z",
                    "updated_at": "2020-04-24T23:39:09.224Z"
                }
            ]
        }
    },
    {
        "id": "189",
        "type": "card",
        "attributes": {
            "strategy": "Look closely at the most embarrassing details and amplify them",
            "notes": [
                {
                    "id": 565,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 189,
                    "created_at": "2020-04-24T23:39:09.229Z",
                    "updated_at": "2020-04-24T23:39:09.229Z"
                },
                {
                    "id": 566,
                    "text": "sampled a sardine eating Cranberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 189,
                    "created_at": "2020-04-24T23:39:09.234Z",
                    "updated_at": "2020-04-24T23:39:09.234Z"
                },
                {
                    "id": 567,
                    "text": "played a Electric Guitar in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 189,
                    "created_at": "2020-04-24T23:39:09.239Z",
                    "updated_at": "2020-04-24T23:39:09.239Z"
                }
            ]
        }
    },
    {
        "id": "190",
        "type": "card",
        "attributes": {
            "strategy": "Lost in useless territory",
            "notes": [
                {
                    "id": 568,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 190,
                    "created_at": "2020-04-24T23:39:09.244Z",
                    "updated_at": "2020-04-24T23:39:09.244Z"
                },
                {
                    "id": 569,
                    "text": "sampled a yellowjacket eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 190,
                    "created_at": "2020-04-24T23:39:09.250Z",
                    "updated_at": "2020-04-24T23:39:09.250Z"
                },
                {
                    "id": 570,
                    "text": "played a Acoustic Guitar in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 190,
                    "created_at": "2020-04-24T23:39:09.255Z",
                    "updated_at": "2020-04-24T23:39:09.255Z"
                }
            ]
        }
    },
    {
        "id": "191",
        "type": "card",
        "attributes": {
            "strategy": "Lowest common denominator",
            "notes": [
                {
                    "id": 571,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 191,
                    "created_at": "2020-04-24T23:39:09.260Z",
                    "updated_at": "2020-04-24T23:39:09.260Z"
                },
                {
                    "id": 572,
                    "text": "sampled a goat eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 191,
                    "created_at": "2020-04-24T23:39:09.266Z",
                    "updated_at": "2020-04-24T23:39:09.266Z"
                },
                {
                    "id": 573,
                    "text": "played a Saxophone in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 191,
                    "created_at": "2020-04-24T23:39:09.272Z",
                    "updated_at": "2020-04-24T23:39:09.272Z"
                }
            ]
        }
    },
    {
        "id": "192",
        "type": "card",
        "attributes": {
            "strategy": "Make a blank valuable by putting it in an exquisite frame",
            "notes": [
                {
                    "id": 574,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 192,
                    "created_at": "2020-04-24T23:39:09.278Z",
                    "updated_at": "2020-04-24T23:39:09.278Z"
                },
                {
                    "id": 575,
                    "text": "sampled a elk eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 192,
                    "created_at": "2020-04-24T23:39:09.284Z",
                    "updated_at": "2020-04-24T23:39:09.284Z"
                },
                {
                    "id": 576,
                    "text": "played a Ukelele in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 192,
                    "created_at": "2020-04-24T23:39:09.290Z",
                    "updated_at": "2020-04-24T23:39:09.290Z"
                }
            ]
        }
    },
    {
        "id": "193",
        "type": "card",
        "attributes": {
            "strategy": "Make an exhaustive list of everything you might do and do the last thing on the list",
            "notes": [
                {
                    "id": 577,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 193,
                    "created_at": "2020-04-24T23:39:09.296Z",
                    "updated_at": "2020-04-24T23:39:09.296Z"
                },
                {
                    "id": 578,
                    "text": "sampled a reindeer eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 193,
                    "created_at": "2020-04-24T23:39:09.302Z",
                    "updated_at": "2020-04-24T23:39:09.302Z"
                },
                {
                    "id": 579,
                    "text": "played a Accordion in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 193,
                    "created_at": "2020-04-24T23:39:09.314Z",
                    "updated_at": "2020-04-24T23:39:09.314Z"
                }
            ]
        }
    },
    {
        "id": "194",
        "type": "card",
        "attributes": {
            "strategy": "Make a sudden, destructive unpredictable action; incorporate",
            "notes": [
                {
                    "id": 580,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 194,
                    "created_at": "2020-04-24T23:39:09.320Z",
                    "updated_at": "2020-04-24T23:39:09.320Z"
                },
                {
                    "id": 581,
                    "text": "sampled a chimpanzee eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 194,
                    "created_at": "2020-04-24T23:39:09.326Z",
                    "updated_at": "2020-04-24T23:39:09.326Z"
                },
                {
                    "id": 582,
                    "text": "played a Trumpet in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 194,
                    "created_at": "2020-04-24T23:39:09.332Z",
                    "updated_at": "2020-04-24T23:39:09.332Z"
                }
            ]
        }
    },
    {
        "id": "195",
        "type": "card",
        "attributes": {
            "strategy": "Mechanicalise something idiosyncratic",
            "notes": [
                {
                    "id": 583,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 195,
                    "created_at": "2020-04-24T23:39:09.338Z",
                    "updated_at": "2020-04-24T23:39:09.338Z"
                },
                {
                    "id": 584,
                    "text": "sampled a snail eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 195,
                    "created_at": "2020-04-24T23:39:09.344Z",
                    "updated_at": "2020-04-24T23:39:09.344Z"
                },
                {
                    "id": 585,
                    "text": "played a Xylophone in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 195,
                    "created_at": "2020-04-24T23:39:09.350Z",
                    "updated_at": "2020-04-24T23:39:09.350Z"
                }
            ]
        }
    },
    {
        "id": "196",
        "type": "card",
        "attributes": {
            "strategy": "Mute and continue",
            "notes": [
                {
                    "id": 586,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 196,
                    "created_at": "2020-04-24T23:39:09.356Z",
                    "updated_at": "2020-04-24T23:39:09.356Z"
                },
                {
                    "id": 587,
                    "text": "sampled a squirrel eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 196,
                    "created_at": "2020-04-24T23:39:09.365Z",
                    "updated_at": "2020-04-24T23:39:09.365Z"
                },
                {
                    "id": 588,
                    "text": "played a Oboe in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 196,
                    "created_at": "2020-04-24T23:39:09.371Z",
                    "updated_at": "2020-04-24T23:39:09.371Z"
                }
            ]
        }
    },
    {
        "id": "197",
        "type": "card",
        "attributes": {
            "strategy": "Not building a wall but making a brick",
            "notes": [
                {
                    "id": 589,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 197,
                    "created_at": "2020-04-24T23:39:09.378Z",
                    "updated_at": "2020-04-24T23:39:09.378Z"
                },
                {
                    "id": 590,
                    "text": "sampled a goldfish eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 197,
                    "created_at": "2020-04-24T23:39:09.384Z",
                    "updated_at": "2020-04-24T23:39:09.384Z"
                },
                {
                    "id": 591,
                    "text": "played a Flute in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 197,
                    "created_at": "2020-04-24T23:39:09.389Z",
                    "updated_at": "2020-04-24T23:39:09.389Z"
                }
            ]
        }
    },
    {
        "id": "198",
        "type": "card",
        "attributes": {
            "strategy": "Only one element of each kind",
            "notes": [
                {
                    "id": 592,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 198,
                    "created_at": "2020-04-24T23:39:09.394Z",
                    "updated_at": "2020-04-24T23:39:09.394Z"
                },
                {
                    "id": 593,
                    "text": "sampled a llama eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 198,
                    "created_at": "2020-04-24T23:39:09.399Z",
                    "updated_at": "2020-04-24T23:39:09.399Z"
                },
                {
                    "id": 594,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 198,
                    "created_at": "2020-04-24T23:39:09.404Z",
                    "updated_at": "2020-04-24T23:39:09.404Z"
                }
            ]
        }
    },
    {
        "id": "199",
        "type": "card",
        "attributes": {
            "strategy": "(Organic) machinery",
            "notes": [
                {
                    "id": 595,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 199,
                    "created_at": "2020-04-24T23:39:09.409Z",
                    "updated_at": "2020-04-24T23:39:09.409Z"
                },
                {
                    "id": 596,
                    "text": "sampled a beaver eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 199,
                    "created_at": "2020-04-24T23:39:09.414Z",
                    "updated_at": "2020-04-24T23:39:09.414Z"
                },
                {
                    "id": 597,
                    "text": "played a Trumpet in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 199,
                    "created_at": "2020-04-24T23:39:09.419Z",
                    "updated_at": "2020-04-24T23:39:09.419Z"
                }
            ]
        }
    },
    {
        "id": "200",
        "type": "card",
        "attributes": {
            "strategy": "Overtly resist change",
            "notes": [
                {
                    "id": 598,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 200,
                    "created_at": "2020-04-24T23:39:09.424Z",
                    "updated_at": "2020-04-24T23:39:09.424Z"
                },
                {
                    "id": 599,
                    "text": "sampled a salmon eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 200,
                    "created_at": "2020-04-24T23:39:09.431Z",
                    "updated_at": "2020-04-24T23:39:09.431Z"
                },
                {
                    "id": 600,
                    "text": "played a Electric Guitar in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 200,
                    "created_at": "2020-04-24T23:39:09.437Z",
                    "updated_at": "2020-04-24T23:39:09.437Z"
                }
            ]
        }
    },
    {
        "id": "201",
        "type": "card",
        "attributes": {
            "strategy": "Put in earplugs",
            "notes": [
                {
                    "id": 601,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 201,
                    "created_at": "2020-04-24T23:39:09.442Z",
                    "updated_at": "2020-04-24T23:39:09.442Z"
                },
                {
                    "id": 602,
                    "text": "sampled a yak eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 201,
                    "created_at": "2020-04-24T23:39:09.447Z",
                    "updated_at": "2020-04-24T23:39:09.447Z"
                },
                {
                    "id": 603,
                    "text": "played a Drums in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 201,
                    "created_at": "2020-04-24T23:39:09.452Z",
                    "updated_at": "2020-04-24T23:39:09.452Z"
                }
            ]
        }
    },
    {
        "id": "202",
        "type": "card",
        "attributes": {
            "strategy": "Question the heroic approach",
            "notes": [
                {
                    "id": 604,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 202,
                    "created_at": "2020-04-24T23:39:09.457Z",
                    "updated_at": "2020-04-24T23:39:09.457Z"
                },
                {
                    "id": 605,
                    "text": "sampled a sheep eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 202,
                    "created_at": "2020-04-24T23:39:09.462Z",
                    "updated_at": "2020-04-24T23:39:09.462Z"
                },
                {
                    "id": 606,
                    "text": "played a Acoustic Guitar in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 202,
                    "created_at": "2020-04-24T23:39:09.467Z",
                    "updated_at": "2020-04-24T23:39:09.467Z"
                }
            ]
        }
    },
    {
        "id": "203",
        "type": "card",
        "attributes": {
            "strategy": "Remember .those quiet evenings",
            "notes": [
                {
                    "id": 607,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 203,
                    "created_at": "2020-04-24T23:39:09.472Z",
                    "updated_at": "2020-04-24T23:39:09.472Z"
                },
                {
                    "id": 608,
                    "text": "sampled a cattle eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 203,
                    "created_at": "2020-04-24T23:39:09.478Z",
                    "updated_at": "2020-04-24T23:39:09.478Z"
                },
                {
                    "id": 609,
                    "text": "played a Cello in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 203,
                    "created_at": "2020-04-24T23:39:09.483Z",
                    "updated_at": "2020-04-24T23:39:09.483Z"
                }
            ]
        }
    },
    {
        "id": "204",
        "type": "card",
        "attributes": {
            "strategy": "Remove ambiguities and convert to specifics",
            "notes": [
                {
                    "id": 610,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 204,
                    "created_at": "2020-04-24T23:39:09.488Z",
                    "updated_at": "2020-04-24T23:39:09.488Z"
                },
                {
                    "id": 611,
                    "text": "sampled a grasshopper eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 204,
                    "created_at": "2020-04-24T23:39:09.493Z",
                    "updated_at": "2020-04-24T23:39:09.493Z"
                },
                {
                    "id": 612,
                    "text": "played a Harp in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 204,
                    "created_at": "2020-04-24T23:39:09.499Z",
                    "updated_at": "2020-04-24T23:39:09.499Z"
                }
            ]
        }
    },
    {
        "id": "205",
        "type": "card",
        "attributes": {
            "strategy": "Remove specifics and convert to ambiguities",
            "notes": [
                {
                    "id": 613,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 205,
                    "created_at": "2020-04-24T23:39:09.505Z",
                    "updated_at": "2020-04-24T23:39:09.505Z"
                },
                {
                    "id": 614,
                    "text": "sampled a fly eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 205,
                    "created_at": "2020-04-24T23:39:09.511Z",
                    "updated_at": "2020-04-24T23:39:09.511Z"
                },
                {
                    "id": 615,
                    "text": "played a Saxophone in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 205,
                    "created_at": "2020-04-24T23:39:09.516Z",
                    "updated_at": "2020-04-24T23:39:09.516Z"
                }
            ]
        }
    },
    {
        "id": "206",
        "type": "card",
        "attributes": {
            "strategy": "Repetition is a form of change",
            "notes": [
                {
                    "id": 616,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 206,
                    "created_at": "2020-04-24T23:39:09.521Z",
                    "updated_at": "2020-04-24T23:39:09.521Z"
                },
                {
                    "id": 617,
                    "text": "sampled a dog eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 206,
                    "created_at": "2020-04-24T23:39:09.527Z",
                    "updated_at": "2020-04-24T23:39:09.527Z"
                },
                {
                    "id": 618,
                    "text": "played a Ukelele in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 206,
                    "created_at": "2020-04-24T23:39:09.532Z",
                    "updated_at": "2020-04-24T23:39:09.532Z"
                }
            ]
        }
    },
    {
        "id": "207",
        "type": "card",
        "attributes": {
            "strategy": "Revaluation (a warm feeling)",
            "notes": [
                {
                    "id": 619,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 207,
                    "created_at": "2020-04-24T23:39:09.537Z",
                    "updated_at": "2020-04-24T23:39:09.537Z"
                },
                {
                    "id": 620,
                    "text": "sampled a macaw eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 207,
                    "created_at": "2020-04-24T23:39:09.543Z",
                    "updated_at": "2020-04-24T23:39:09.543Z"
                },
                {
                    "id": 621,
                    "text": "played a Electric Guitar in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 207,
                    "created_at": "2020-04-24T23:39:09.548Z",
                    "updated_at": "2020-04-24T23:39:09.548Z"
                }
            ]
        }
    },
    {
        "id": "208",
        "type": "card",
        "attributes": {
            "strategy": "Reverse",
            "notes": [
                {
                    "id": 622,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 208,
                    "created_at": "2020-04-24T23:39:09.553Z",
                    "updated_at": "2020-04-24T23:39:09.553Z"
                },
                {
                    "id": 623,
                    "text": "sampled a herring eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 208,
                    "created_at": "2020-04-24T23:39:09.558Z",
                    "updated_at": "2020-04-24T23:39:09.558Z"
                },
                {
                    "id": 624,
                    "text": "played a Harmonica in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 208,
                    "created_at": "2020-04-24T23:39:09.563Z",
                    "updated_at": "2020-04-24T23:39:09.563Z"
                }
            ]
        }
    },
    {
        "id": "209",
        "type": "card",
        "attributes": {
            "strategy": "Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
            "notes": [
                {
                    "id": 625,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 209,
                    "created_at": "2020-04-24T23:39:09.568Z",
                    "updated_at": "2020-04-24T23:39:09.568Z"
                },
                {
                    "id": 626,
                    "text": "sampled a ape eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 209,
                    "created_at": "2020-04-24T23:39:09.573Z",
                    "updated_at": "2020-04-24T23:39:09.573Z"
                },
                {
                    "id": 627,
                    "text": "played a Electric Guitar in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 209,
                    "created_at": "2020-04-24T23:39:09.578Z",
                    "updated_at": "2020-04-24T23:39:09.578Z"
                }
            ]
        }
    },
    {
        "id": "210",
        "type": "card",
        "attributes": {
            "strategy": "Simple subtraction",
            "notes": [
                {
                    "id": 628,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 210,
                    "created_at": "2020-04-24T23:39:09.584Z",
                    "updated_at": "2020-04-24T23:39:09.584Z"
                },
                {
                    "id": 629,
                    "text": "sampled a pig eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 210,
                    "created_at": "2020-04-24T23:39:09.589Z",
                    "updated_at": "2020-04-24T23:39:09.589Z"
                },
                {
                    "id": 630,
                    "text": "played a Harmonica in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 210,
                    "created_at": "2020-04-24T23:39:09.594Z",
                    "updated_at": "2020-04-24T23:39:09.594Z"
                }
            ]
        }
    },
    {
        "id": "211",
        "type": "card",
        "attributes": {
            "strategy": "Simply a matter of work",
            "notes": [
                {
                    "id": 631,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 211,
                    "created_at": "2020-04-24T23:39:09.601Z",
                    "updated_at": "2020-04-24T23:39:09.601Z"
                },
                {
                    "id": 632,
                    "text": "sampled a chinchilla eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 211,
                    "created_at": "2020-04-24T23:39:09.607Z",
                    "updated_at": "2020-04-24T23:39:09.607Z"
                },
                {
                    "id": 633,
                    "text": "played a Flute in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 211,
                    "created_at": "2020-04-24T23:39:09.614Z",
                    "updated_at": "2020-04-24T23:39:09.614Z"
                }
            ]
        }
    },
    {
        "id": "212",
        "type": "card",
        "attributes": {
            "strategy": "Spectrum analysis",
            "notes": [
                {
                    "id": 634,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 212,
                    "created_at": "2020-04-24T23:39:09.621Z",
                    "updated_at": "2020-04-24T23:39:09.621Z"
                },
                {
                    "id": 635,
                    "text": "sampled a reindeer eating Lemon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 212,
                    "created_at": "2020-04-24T23:39:09.627Z",
                    "updated_at": "2020-04-24T23:39:09.627Z"
                },
                {
                    "id": 636,
                    "text": "played a Acoustic Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 212,
                    "created_at": "2020-04-24T23:39:09.633Z",
                    "updated_at": "2020-04-24T23:39:09.633Z"
                }
            ]
        }
    },
    {
        "id": "213",
        "type": "card",
        "attributes": {
            "strategy": "State the problem in words as simply as possible",
            "notes": [
                {
                    "id": 637,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 213,
                    "created_at": "2020-04-24T23:39:09.639Z",
                    "updated_at": "2020-04-24T23:39:09.639Z"
                },
                {
                    "id": 638,
                    "text": "sampled a chinchilla eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 213,
                    "created_at": "2020-04-24T23:39:09.644Z",
                    "updated_at": "2020-04-24T23:39:09.644Z"
                },
                {
                    "id": 639,
                    "text": "played a Accordion in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 213,
                    "created_at": "2020-04-24T23:39:09.649Z",
                    "updated_at": "2020-04-24T23:39:09.649Z"
                }
            ]
        }
    },
    {
        "id": "214",
        "type": "card",
        "attributes": {
            "strategy": "Take a break",
            "notes": [
                {
                    "id": 640,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 214,
                    "created_at": "2020-04-24T23:39:09.653Z",
                    "updated_at": "2020-04-24T23:39:09.653Z"
                },
                {
                    "id": 641,
                    "text": "sampled a raccoon eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 214,
                    "created_at": "2020-04-24T23:39:09.659Z",
                    "updated_at": "2020-04-24T23:39:09.659Z"
                },
                {
                    "id": 642,
                    "text": "played a Saxophone in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 214,
                    "created_at": "2020-04-24T23:39:09.664Z",
                    "updated_at": "2020-04-24T23:39:09.664Z"
                }
            ]
        }
    },
    {
        "id": "215",
        "type": "card",
        "attributes": {
            "strategy": "Take away the elements in order of apparent non-importance",
            "notes": [
                {
                    "id": 643,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 215,
                    "created_at": "2020-04-24T23:39:09.676Z",
                    "updated_at": "2020-04-24T23:39:09.676Z"
                },
                {
                    "id": 644,
                    "text": "sampled a llama eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 215,
                    "created_at": "2020-04-24T23:39:09.683Z",
                    "updated_at": "2020-04-24T23:39:09.683Z"
                },
                {
                    "id": 645,
                    "text": "played a Cello in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 215,
                    "created_at": "2020-04-24T23:39:09.689Z",
                    "updated_at": "2020-04-24T23:39:09.689Z"
                }
            ]
        }
    },
    {
        "id": "216",
        "type": "card",
        "attributes": {
            "strategy": "Tape your mouth (given by Ritva Saarikko)",
            "notes": [
                {
                    "id": 646,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 216,
                    "created_at": "2020-04-24T23:39:09.694Z",
                    "updated_at": "2020-04-24T23:39:09.694Z"
                },
                {
                    "id": 647,
                    "text": "sampled a butterfly eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 216,
                    "created_at": "2020-04-24T23:39:09.702Z",
                    "updated_at": "2020-04-24T23:39:09.702Z"
                },
                {
                    "id": 648,
                    "text": "played a Acoustic Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 216,
                    "created_at": "2020-04-24T23:39:09.707Z",
                    "updated_at": "2020-04-24T23:39:09.707Z"
                }
            ]
        }
    },
    {
        "id": "217",
        "type": "card",
        "attributes": {
            "strategy": "The inconsistency principle",
            "notes": [
                {
                    "id": 649,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 217,
                    "created_at": "2020-04-24T23:39:09.712Z",
                    "updated_at": "2020-04-24T23:39:09.712Z"
                },
                {
                    "id": 650,
                    "text": "sampled a dolphin eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 217,
                    "created_at": "2020-04-24T23:39:09.717Z",
                    "updated_at": "2020-04-24T23:39:09.717Z"
                },
                {
                    "id": 651,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 217,
                    "created_at": "2020-04-24T23:39:09.722Z",
                    "updated_at": "2020-04-24T23:39:09.722Z"
                }
            ]
        }
    },
    {
        "id": "218",
        "type": "card",
        "attributes": {
            "strategy": "The most important thing is the thing most easily forgotten",
            "notes": [
                {
                    "id": 652,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 218,
                    "created_at": "2020-04-24T23:39:09.727Z",
                    "updated_at": "2020-04-24T23:39:09.727Z"
                },
                {
                    "id": 653,
                    "text": "sampled a mink eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 218,
                    "created_at": "2020-04-24T23:39:09.732Z",
                    "updated_at": "2020-04-24T23:39:09.732Z"
                },
                {
                    "id": 654,
                    "text": "played a Trumpet in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 218,
                    "created_at": "2020-04-24T23:39:09.744Z",
                    "updated_at": "2020-04-24T23:39:09.744Z"
                }
            ]
        }
    },
    {
        "id": "219",
        "type": "card",
        "attributes": {
            "strategy": "The tape is now the music",
            "notes": [
                {
                    "id": 655,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 219,
                    "created_at": "2020-04-24T23:39:09.750Z",
                    "updated_at": "2020-04-24T23:39:09.750Z"
                },
                {
                    "id": 656,
                    "text": "sampled a herring eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 219,
                    "created_at": "2020-04-24T23:39:09.756Z",
                    "updated_at": "2020-04-24T23:39:09.756Z"
                },
                {
                    "id": 657,
                    "text": "played a Drums in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 219,
                    "created_at": "2020-04-24T23:39:09.762Z",
                    "updated_at": "2020-04-24T23:39:09.762Z"
                }
            ]
        }
    },
    {
        "id": "220",
        "type": "card",
        "attributes": {
            "strategy": "Think of the radio",
            "notes": [
                {
                    "id": 658,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 220,
                    "created_at": "2020-04-24T23:39:09.768Z",
                    "updated_at": "2020-04-24T23:39:09.768Z"
                },
                {
                    "id": 659,
                    "text": "sampled a caribou eating Bush Tomato",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 220,
                    "created_at": "2020-04-24T23:39:09.774Z",
                    "updated_at": "2020-04-24T23:39:09.774Z"
                },
                {
                    "id": 660,
                    "text": "played a Electric Guitar in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 220,
                    "created_at": "2020-04-24T23:39:09.779Z",
                    "updated_at": "2020-04-24T23:39:09.779Z"
                }
            ]
        }
    },
    {
        "id": "221",
        "type": "card",
        "attributes": {
            "strategy": "Tidy up",
            "notes": [
                {
                    "id": 661,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 221,
                    "created_at": "2020-04-24T23:39:09.784Z",
                    "updated_at": "2020-04-24T23:39:09.784Z"
                },
                {
                    "id": 662,
                    "text": "sampled a pug eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 221,
                    "created_at": "2020-04-24T23:39:09.789Z",
                    "updated_at": "2020-04-24T23:39:09.789Z"
                },
                {
                    "id": 663,
                    "text": "played a Harp in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 221,
                    "created_at": "2020-04-24T23:39:09.795Z",
                    "updated_at": "2020-04-24T23:39:09.795Z"
                }
            ]
        }
    },
    {
        "id": "222",
        "type": "card",
        "attributes": {
            "strategy": "Towards the insignificant",
            "notes": [
                {
                    "id": 664,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 222,
                    "created_at": "2020-04-24T23:39:09.800Z",
                    "updated_at": "2020-04-24T23:39:09.800Z"
                },
                {
                    "id": 665,
                    "text": "sampled a water buffalo eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 222,
                    "created_at": "2020-04-24T23:39:09.805Z",
                    "updated_at": "2020-04-24T23:39:09.805Z"
                },
                {
                    "id": 666,
                    "text": "played a Violin in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 222,
                    "created_at": "2020-04-24T23:39:09.811Z",
                    "updated_at": "2020-04-24T23:39:09.811Z"
                }
            ]
        }
    },
    {
        "id": "223",
        "type": "card",
        "attributes": {
            "strategy": "Trust in the you of now",
            "notes": [
                {
                    "id": 667,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 223,
                    "created_at": "2020-04-24T23:39:09.816Z",
                    "updated_at": "2020-04-24T23:39:09.816Z"
                },
                {
                    "id": 668,
                    "text": "sampled a koala eating Juniper Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 223,
                    "created_at": "2020-04-24T23:39:09.821Z",
                    "updated_at": "2020-04-24T23:39:09.821Z"
                },
                {
                    "id": 669,
                    "text": "played a Violin in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 223,
                    "created_at": "2020-04-24T23:39:09.826Z",
                    "updated_at": "2020-04-24T23:39:09.826Z"
                }
            ]
        }
    },
    {
        "id": "224",
        "type": "card",
        "attributes": {
            "strategy": "Turn it upside down",
            "notes": [
                {
                    "id": 670,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 224,
                    "created_at": "2020-04-24T23:39:09.832Z",
                    "updated_at": "2020-04-24T23:39:09.832Z"
                },
                {
                    "id": 671,
                    "text": "sampled a pig eating Plums",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 224,
                    "created_at": "2020-04-24T23:39:09.837Z",
                    "updated_at": "2020-04-24T23:39:09.837Z"
                },
                {
                    "id": 672,
                    "text": "played a Clarinet in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 224,
                    "created_at": "2020-04-24T23:39:09.842Z",
                    "updated_at": "2020-04-24T23:39:09.842Z"
                }
            ]
        }
    },
    {
        "id": "225",
        "type": "card",
        "attributes": {
            "strategy": "Twist the spine",
            "notes": [
                {
                    "id": 673,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 225,
                    "created_at": "2020-04-24T23:39:09.846Z",
                    "updated_at": "2020-04-24T23:39:09.846Z"
                },
                {
                    "id": 674,
                    "text": "sampled a hippopotamus eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 225,
                    "created_at": "2020-04-24T23:39:09.852Z",
                    "updated_at": "2020-04-24T23:39:09.852Z"
                },
                {
                    "id": 675,
                    "text": "played a Piano in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 225,
                    "created_at": "2020-04-24T23:39:09.858Z",
                    "updated_at": "2020-04-24T23:39:09.858Z"
                }
            ]
        }
    },
    {
        "id": "226",
        "type": "card",
        "attributes": {
            "strategy": "Use an old idea",
            "notes": [
                {
                    "id": 676,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 226,
                    "created_at": "2020-04-24T23:39:09.865Z",
                    "updated_at": "2020-04-24T23:39:09.865Z"
                },
                {
                    "id": 677,
                    "text": "sampled a snake eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 226,
                    "created_at": "2020-04-24T23:39:09.871Z",
                    "updated_at": "2020-04-24T23:39:09.871Z"
                },
                {
                    "id": 678,
                    "text": "played a Cello in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 226,
                    "created_at": "2020-04-24T23:39:09.877Z",
                    "updated_at": "2020-04-24T23:39:09.877Z"
                }
            ]
        }
    },
    {
        "id": "227",
        "type": "card",
        "attributes": {
            "strategy": "Use an unacceptable colour",
            "notes": [
                {
                    "id": 679,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 227,
                    "created_at": "2020-04-24T23:39:09.882Z",
                    "updated_at": "2020-04-24T23:39:09.882Z"
                },
                {
                    "id": 680,
                    "text": "sampled a locust eating Custard Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 227,
                    "created_at": "2020-04-24T23:39:09.888Z",
                    "updated_at": "2020-04-24T23:39:09.888Z"
                },
                {
                    "id": 681,
                    "text": "played a Xylophone in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 227,
                    "created_at": "2020-04-24T23:39:09.894Z",
                    "updated_at": "2020-04-24T23:39:09.894Z"
                }
            ]
        }
    },
    {
        "id": "228",
        "type": "card",
        "attributes": {
            "strategy": "Use fewer notes",
            "notes": [
                {
                    "id": 682,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 228,
                    "created_at": "2020-04-24T23:39:09.899Z",
                    "updated_at": "2020-04-24T23:39:09.899Z"
                },
                {
                    "id": 683,
                    "text": "sampled a monkey eating Fingerlime",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 228,
                    "created_at": "2020-04-24T23:39:09.905Z",
                    "updated_at": "2020-04-24T23:39:09.905Z"
                },
                {
                    "id": 684,
                    "text": "played a Acoustic Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 228,
                    "created_at": "2020-04-24T23:39:09.910Z",
                    "updated_at": "2020-04-24T23:39:09.910Z"
                }
            ]
        }
    },
    {
        "id": "229",
        "type": "card",
        "attributes": {
            "strategy": "Use filters",
            "notes": [
                {
                    "id": 685,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 229,
                    "created_at": "2020-04-24T23:39:09.916Z",
                    "updated_at": "2020-04-24T23:39:09.916Z"
                },
                {
                    "id": 686,
                    "text": "sampled a goldfish eating Pineapple",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 229,
                    "created_at": "2020-04-24T23:39:09.921Z",
                    "updated_at": "2020-04-24T23:39:09.921Z"
                },
                {
                    "id": 687,
                    "text": "played a Harp in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 229,
                    "created_at": "2020-04-24T23:39:09.928Z",
                    "updated_at": "2020-04-24T23:39:09.928Z"
                }
            ]
        }
    },
    {
        "id": "230",
        "type": "card",
        "attributes": {
            "strategy": "Use 'unqualified' people",
            "notes": [
                {
                    "id": 688,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 230,
                    "created_at": "2020-04-24T23:39:09.933Z",
                    "updated_at": "2020-04-24T23:39:09.933Z"
                },
                {
                    "id": 689,
                    "text": "sampled a llama eating Cranberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 230,
                    "created_at": "2020-04-24T23:39:09.939Z",
                    "updated_at": "2020-04-24T23:39:09.939Z"
                },
                {
                    "id": 690,
                    "text": "played a Saxophone in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 230,
                    "created_at": "2020-04-24T23:39:09.945Z",
                    "updated_at": "2020-04-24T23:39:09.945Z"
                }
            ]
        }
    },
    {
        "id": "231",
        "type": "card",
        "attributes": {
            "strategy": "Water",
            "notes": [
                {
                    "id": 691,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 231,
                    "created_at": "2020-04-24T23:39:09.951Z",
                    "updated_at": "2020-04-24T23:39:09.951Z"
                },
                {
                    "id": 692,
                    "text": "sampled a lizard eating Longan",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 231,
                    "created_at": "2020-04-24T23:39:09.957Z",
                    "updated_at": "2020-04-24T23:39:09.957Z"
                },
                {
                    "id": 693,
                    "text": "played a Xylophone in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 231,
                    "created_at": "2020-04-24T23:39:09.962Z",
                    "updated_at": "2020-04-24T23:39:09.962Z"
                }
            ]
        }
    },
    {
        "id": "232",
        "type": "card",
        "attributes": {
            "strategy": "What are the sections sections of? Imagine a caterpillar moving",
            "notes": [
                {
                    "id": 694,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 232,
                    "created_at": "2020-04-24T23:39:09.968Z",
                    "updated_at": "2020-04-24T23:39:09.968Z"
                },
                {
                    "id": 695,
                    "text": "sampled a clam eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 232,
                    "created_at": "2020-04-24T23:39:09.974Z",
                    "updated_at": "2020-04-24T23:39:09.974Z"
                },
                {
                    "id": 696,
                    "text": "played a Oboe in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 232,
                    "created_at": "2020-04-24T23:39:09.979Z",
                    "updated_at": "2020-04-24T23:39:09.979Z"
                }
            ]
        }
    },
    {
        "id": "233",
        "type": "card",
        "attributes": {
            "strategy": "What are you really thinking about just now?",
            "notes": [
                {
                    "id": 697,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 233,
                    "created_at": "2020-04-24T23:39:09.986Z",
                    "updated_at": "2020-04-24T23:39:09.986Z"
                },
                {
                    "id": 698,
                    "text": "sampled a raccoon eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 233,
                    "created_at": "2020-04-24T23:39:09.991Z",
                    "updated_at": "2020-04-24T23:39:09.991Z"
                },
                {
                    "id": 699,
                    "text": "played a Flute in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 233,
                    "created_at": "2020-04-24T23:39:09.996Z",
                    "updated_at": "2020-04-24T23:39:09.996Z"
                }
            ]
        }
    },
    {
        "id": "234",
        "type": "card",
        "attributes": {
            "strategy": "What is the reality of the situation?",
            "notes": [
                {
                    "id": 700,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 234,
                    "created_at": "2020-04-24T23:39:10.002Z",
                    "updated_at": "2020-04-24T23:39:10.002Z"
                },
                {
                    "id": 701,
                    "text": "sampled a mammoth eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 234,
                    "created_at": "2020-04-24T23:39:10.008Z",
                    "updated_at": "2020-04-24T23:39:10.008Z"
                },
                {
                    "id": 702,
                    "text": "played a Piano in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 234,
                    "created_at": "2020-04-24T23:39:10.013Z",
                    "updated_at": "2020-04-24T23:39:10.013Z"
                }
            ]
        }
    },
    {
        "id": "235",
        "type": "card",
        "attributes": {
            "strategy": "What mistakes did you make last time?",
            "notes": [
                {
                    "id": 703,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 235,
                    "created_at": "2020-04-24T23:39:10.020Z",
                    "updated_at": "2020-04-24T23:39:10.020Z"
                },
                {
                    "id": 704,
                    "text": "sampled a turtle  eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 235,
                    "created_at": "2020-04-24T23:39:10.025Z",
                    "updated_at": "2020-04-24T23:39:10.025Z"
                },
                {
                    "id": 705,
                    "text": "played a Harp in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 235,
                    "created_at": "2020-04-24T23:39:10.030Z",
                    "updated_at": "2020-04-24T23:39:10.030Z"
                }
            ]
        }
    },
    {
        "id": "236",
        "type": "card",
        "attributes": {
            "strategy": "What would your closest friend do?",
            "notes": [
                {
                    "id": 706,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 236,
                    "created_at": "2020-04-24T23:39:10.035Z",
                    "updated_at": "2020-04-24T23:39:10.035Z"
                },
                {
                    "id": 707,
                    "text": "sampled a impala eating Oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 236,
                    "created_at": "2020-04-24T23:39:10.041Z",
                    "updated_at": "2020-04-24T23:39:10.041Z"
                },
                {
                    "id": 708,
                    "text": "played a Trumpet in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 236,
                    "created_at": "2020-04-24T23:39:10.046Z",
                    "updated_at": "2020-04-24T23:39:10.046Z"
                }
            ]
        }
    },
    {
        "id": "237",
        "type": "card",
        "attributes": {
            "strategy": "What wouldn't you do?",
            "notes": [
                {
                    "id": 709,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 237,
                    "created_at": "2020-04-24T23:39:10.052Z",
                    "updated_at": "2020-04-24T23:39:10.052Z"
                },
                {
                    "id": 710,
                    "text": "sampled a dog eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 237,
                    "created_at": "2020-04-24T23:39:10.058Z",
                    "updated_at": "2020-04-24T23:39:10.058Z"
                },
                {
                    "id": 711,
                    "text": "played a Xylophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 237,
                    "created_at": "2020-04-24T23:39:10.063Z",
                    "updated_at": "2020-04-24T23:39:10.063Z"
                }
            ]
        }
    },
    {
        "id": "238",
        "type": "card",
        "attributes": {
            "strategy": "What would your closest friend do?",
            "notes": [
                {
                    "id": 712,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 238,
                    "created_at": "2020-04-24T23:39:10.070Z",
                    "updated_at": "2020-04-24T23:39:10.070Z"
                },
                {
                    "id": 713,
                    "text": "sampled a fly eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 238,
                    "created_at": "2020-04-24T23:39:10.078Z",
                    "updated_at": "2020-04-24T23:39:10.078Z"
                },
                {
                    "id": 714,
                    "text": "played a Bass Guitar in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 238,
                    "created_at": "2020-04-24T23:39:10.084Z",
                    "updated_at": "2020-04-24T23:39:10.084Z"
                }
            ]
        }
    },
    {
        "id": "239",
        "type": "card",
        "attributes": {
            "strategy": "Work at a different speed",
            "notes": [
                {
                    "id": 715,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 239,
                    "created_at": "2020-04-24T23:39:10.090Z",
                    "updated_at": "2020-04-24T23:39:10.090Z"
                },
                {
                    "id": 716,
                    "text": "sampled a swan eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 239,
                    "created_at": "2020-04-24T23:39:10.096Z",
                    "updated_at": "2020-04-24T23:39:10.096Z"
                },
                {
                    "id": 717,
                    "text": "played a Violin in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 239,
                    "created_at": "2020-04-24T23:39:10.101Z",
                    "updated_at": "2020-04-24T23:39:10.101Z"
                }
            ]
        }
    },
    {
        "id": "240",
        "type": "card",
        "attributes": {
            "strategy": "You are an engineer",
            "notes": [
                {
                    "id": 718,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 240,
                    "created_at": "2020-04-24T23:39:10.107Z",
                    "updated_at": "2020-04-24T23:39:10.107Z"
                },
                {
                    "id": 719,
                    "text": "sampled a locust eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 240,
                    "created_at": "2020-04-24T23:39:10.112Z",
                    "updated_at": "2020-04-24T23:39:10.112Z"
                },
                {
                    "id": 720,
                    "text": "played a Harp in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 240,
                    "created_at": "2020-04-24T23:39:10.118Z",
                    "updated_at": "2020-04-24T23:39:10.118Z"
                }
            ]
        }
    },
    {
        "id": "241",
        "type": "card",
        "attributes": {
            "strategy": "You can only make one dot at a time",
            "notes": [
                {
                    "id": 721,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 241,
                    "created_at": "2020-04-24T23:39:10.124Z",
                    "updated_at": "2020-04-24T23:39:10.124Z"
                },
                {
                    "id": 722,
                    "text": "sampled a mosquito eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 241,
                    "created_at": "2020-04-24T23:39:10.130Z",
                    "updated_at": "2020-04-24T23:39:10.130Z"
                },
                {
                    "id": 723,
                    "text": "played a Violin in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 241,
                    "created_at": "2020-04-24T23:39:10.135Z",
                    "updated_at": "2020-04-24T23:39:10.135Z"
                }
            ]
        }
    },
    {
        "id": "242",
        "type": "card",
        "attributes": {
            "strategy": "You don't have to be ashamed of using your own ideas",
            "notes": [
                {
                    "id": 724,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 242,
                    "created_at": "2020-04-24T23:39:10.141Z",
                    "updated_at": "2020-04-24T23:39:10.141Z"
                },
                {
                    "id": 725,
                    "text": "sampled a guinea pig eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 242,
                    "created_at": "2020-04-24T23:39:10.147Z",
                    "updated_at": "2020-04-24T23:39:10.147Z"
                },
                {
                    "id": 726,
                    "text": "played a Flute in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 242,
                    "created_at": "2020-04-24T23:39:10.152Z",
                    "updated_at": "2020-04-24T23:39:10.152Z"
                }
            ]
        }
    },
    {
        "id": "243",
        "type": "card",
        "attributes": {
            "strategy": "[blank white card]",
            "notes": [
                {
                    "id": 727,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 243,
                    "created_at": "2020-04-24T23:39:10.158Z",
                    "updated_at": "2020-04-24T23:39:10.158Z"
                },
                {
                    "id": 728,
                    "text": "sampled a koala eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 243,
                    "created_at": "2020-04-24T23:39:10.164Z",
                    "updated_at": "2020-04-24T23:39:10.164Z"
                },
                {
                    "id": 729,
                    "text": "played a Flute in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 243,
                    "created_at": "2020-04-24T23:39:10.169Z",
                    "updated_at": "2020-04-24T23:39:10.169Z"
                }
            ]
        }
    },
    {
        "id": "244",
        "type": "card",
        "attributes": {
            "strategy": "Abandon normal instruments",
            "notes": [
                {
                    "id": 730,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 244,
                    "created_at": "2020-04-24T23:39:10.175Z",
                    "updated_at": "2020-04-24T23:39:10.175Z"
                },
                {
                    "id": 731,
                    "text": "sampled a dog eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 244,
                    "created_at": "2020-04-24T23:39:10.180Z",
                    "updated_at": "2020-04-24T23:39:10.180Z"
                },
                {
                    "id": 732,
                    "text": "played a Accordion in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 244,
                    "created_at": "2020-04-24T23:39:10.185Z",
                    "updated_at": "2020-04-24T23:39:10.185Z"
                }
            ]
        }
    },
    {
        "id": "245",
        "type": "card",
        "attributes": {
            "strategy": "Accept advice",
            "notes": [
                {
                    "id": 733,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 245,
                    "created_at": "2020-04-24T23:39:10.190Z",
                    "updated_at": "2020-04-24T23:39:10.190Z"
                },
                {
                    "id": 734,
                    "text": "sampled a caribou eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 245,
                    "created_at": "2020-04-24T23:39:10.195Z",
                    "updated_at": "2020-04-24T23:39:10.195Z"
                },
                {
                    "id": 735,
                    "text": "played a Cello in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 245,
                    "created_at": "2020-04-24T23:39:10.200Z",
                    "updated_at": "2020-04-24T23:39:10.200Z"
                }
            ]
        }
    },
    {
        "id": "246",
        "type": "card",
        "attributes": {
            "strategy": "Accretion",
            "notes": [
                {
                    "id": 736,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 246,
                    "created_at": "2020-04-24T23:39:10.205Z",
                    "updated_at": "2020-04-24T23:39:10.205Z"
                },
                {
                    "id": 737,
                    "text": "sampled a eagle eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 246,
                    "created_at": "2020-04-24T23:39:10.210Z",
                    "updated_at": "2020-04-24T23:39:10.210Z"
                },
                {
                    "id": 738,
                    "text": "played a Trumpet in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 246,
                    "created_at": "2020-04-24T23:39:10.215Z",
                    "updated_at": "2020-04-24T23:39:10.215Z"
                }
            ]
        }
    },
    {
        "id": "247",
        "type": "card",
        "attributes": {
            "strategy": "A line has two sides",
            "notes": [
                {
                    "id": 739,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 247,
                    "created_at": "2020-04-24T23:39:10.220Z",
                    "updated_at": "2020-04-24T23:39:10.220Z"
                },
                {
                    "id": 740,
                    "text": "sampled a sea lion eating Bush Tomato",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 247,
                    "created_at": "2020-04-24T23:39:10.225Z",
                    "updated_at": "2020-04-24T23:39:10.225Z"
                },
                {
                    "id": 741,
                    "text": "played a Drums in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 247,
                    "created_at": "2020-04-24T23:39:10.230Z",
                    "updated_at": "2020-04-24T23:39:10.230Z"
                }
            ]
        }
    },
    {
        "id": "248",
        "type": "card",
        "attributes": {
            "strategy": "Allow an easement (an easement is the abandonment of a stricture)",
            "notes": [
                {
                    "id": 742,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 248,
                    "created_at": "2020-04-24T23:39:10.234Z",
                    "updated_at": "2020-04-24T23:39:10.234Z"
                },
                {
                    "id": 743,
                    "text": "sampled a gnu eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 248,
                    "created_at": "2020-04-24T23:39:10.239Z",
                    "updated_at": "2020-04-24T23:39:10.239Z"
                },
                {
                    "id": 744,
                    "text": "played a Acoustic Guitar in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 248,
                    "created_at": "2020-04-24T23:39:10.244Z",
                    "updated_at": "2020-04-24T23:39:10.244Z"
                }
            ]
        }
    },
    {
        "id": "249",
        "type": "card",
        "attributes": {
            "strategy": "Always first steps",
            "notes": [
                {
                    "id": 745,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 249,
                    "created_at": "2020-04-24T23:39:10.249Z",
                    "updated_at": "2020-04-24T23:39:10.249Z"
                },
                {
                    "id": 746,
                    "text": "sampled a cockroach eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 249,
                    "created_at": "2020-04-24T23:39:10.256Z",
                    "updated_at": "2020-04-24T23:39:10.256Z"
                },
                {
                    "id": 747,
                    "text": "played a Ukelele in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 249,
                    "created_at": "2020-04-24T23:39:10.262Z",
                    "updated_at": "2020-04-24T23:39:10.262Z"
                }
            ]
        }
    },
    {
        "id": "250",
        "type": "card",
        "attributes": {
            "strategy": "Are there sections? Consider transitions",
            "notes": [
                {
                    "id": 748,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 250,
                    "created_at": "2020-04-24T23:39:10.269Z",
                    "updated_at": "2020-04-24T23:39:10.269Z"
                },
                {
                    "id": 749,
                    "text": "sampled a wombat eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 250,
                    "created_at": "2020-04-24T23:39:10.276Z",
                    "updated_at": "2020-04-24T23:39:10.276Z"
                },
                {
                    "id": 750,
                    "text": "played a Violin in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 250,
                    "created_at": "2020-04-24T23:39:10.282Z",
                    "updated_at": "2020-04-24T23:39:10.282Z"
                }
            ]
        }
    },
    {
        "id": "251",
        "type": "card",
        "attributes": {
            "strategy": "Ask people to work against their better judgement",
            "notes": [
                {
                    "id": 751,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 251,
                    "created_at": "2020-04-24T23:39:10.290Z",
                    "updated_at": "2020-04-24T23:39:10.290Z"
                },
                {
                    "id": 752,
                    "text": "sampled a woodchuck eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 251,
                    "created_at": "2020-04-24T23:39:10.296Z",
                    "updated_at": "2020-04-24T23:39:10.296Z"
                },
                {
                    "id": 753,
                    "text": "played a Drums in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 251,
                    "created_at": "2020-04-24T23:39:10.304Z",
                    "updated_at": "2020-04-24T23:39:10.304Z"
                }
            ]
        }
    },
    {
        "id": "252",
        "type": "card",
        "attributes": {
            "strategy": "Ask your body",
            "notes": [
                {
                    "id": 754,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 252,
                    "created_at": "2020-04-24T23:39:10.312Z",
                    "updated_at": "2020-04-24T23:39:10.312Z"
                },
                {
                    "id": 755,
                    "text": "sampled a dinosaur eating Mandarins",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 252,
                    "created_at": "2020-04-24T23:39:10.318Z",
                    "updated_at": "2020-04-24T23:39:10.318Z"
                },
                {
                    "id": 756,
                    "text": "played a Violin in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 252,
                    "created_at": "2020-04-24T23:39:10.325Z",
                    "updated_at": "2020-04-24T23:39:10.325Z"
                }
            ]
        }
    },
    {
        "id": "253",
        "type": "card",
        "attributes": {
            "strategy": "Assemble some of the elements in a group and treat the group",
            "notes": [
                {
                    "id": 757,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 253,
                    "created_at": "2020-04-24T23:39:10.435Z",
                    "updated_at": "2020-04-24T23:39:10.435Z"
                },
                {
                    "id": 758,
                    "text": "sampled a hornet eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 253,
                    "created_at": "2020-04-24T23:39:10.442Z",
                    "updated_at": "2020-04-24T23:39:10.442Z"
                },
                {
                    "id": 759,
                    "text": "played a Harp in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 253,
                    "created_at": "2020-04-24T23:39:10.448Z",
                    "updated_at": "2020-04-24T23:39:10.448Z"
                }
            ]
        }
    },
    {
        "id": "254",
        "type": "card",
        "attributes": {
            "strategy": "Balance the consistency principle with the inconsistency principle",
            "notes": [
                {
                    "id": 760,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 254,
                    "created_at": "2020-04-24T23:39:10.457Z",
                    "updated_at": "2020-04-24T23:39:10.457Z"
                },
                {
                    "id": 761,
                    "text": "sampled a cicada eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 254,
                    "created_at": "2020-04-24T23:39:10.464Z",
                    "updated_at": "2020-04-24T23:39:10.464Z"
                },
                {
                    "id": 762,
                    "text": "played a Accordion in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 254,
                    "created_at": "2020-04-24T23:39:10.470Z",
                    "updated_at": "2020-04-24T23:39:10.470Z"
                }
            ]
        }
    },
    {
        "id": "255",
        "type": "card",
        "attributes": {
            "strategy": "Be dirty",
            "notes": [
                {
                    "id": 763,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 255,
                    "created_at": "2020-04-24T23:39:10.475Z",
                    "updated_at": "2020-04-24T23:39:10.475Z"
                },
                {
                    "id": 764,
                    "text": "sampled a hyena eating Lemon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 255,
                    "created_at": "2020-04-24T23:39:10.481Z",
                    "updated_at": "2020-04-24T23:39:10.481Z"
                },
                {
                    "id": 765,
                    "text": "played a Oboe in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 255,
                    "created_at": "2020-04-24T23:39:10.486Z",
                    "updated_at": "2020-04-24T23:39:10.486Z"
                }
            ]
        }
    },
    {
        "id": "256",
        "type": "card",
        "attributes": {
            "strategy": "Be extravagant",
            "notes": [
                {
                    "id": 766,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 256,
                    "created_at": "2020-04-24T23:39:10.492Z",
                    "updated_at": "2020-04-24T23:39:10.492Z"
                },
                {
                    "id": 767,
                    "text": "sampled a crab eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 256,
                    "created_at": "2020-04-24T23:39:10.497Z",
                    "updated_at": "2020-04-24T23:39:10.497Z"
                },
                {
                    "id": 768,
                    "text": "played a Electric Guitar in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 256,
                    "created_at": "2020-04-24T23:39:10.503Z",
                    "updated_at": "2020-04-24T23:39:10.503Z"
                }
            ]
        }
    },
    {
        "id": "257",
        "type": "card",
        "attributes": {
            "strategy": "Be less critical more often",
            "notes": [
                {
                    "id": 769,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 257,
                    "created_at": "2020-04-24T23:39:10.510Z",
                    "updated_at": "2020-04-24T23:39:10.510Z"
                },
                {
                    "id": 770,
                    "text": "sampled a ferret eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 257,
                    "created_at": "2020-04-24T23:39:10.516Z",
                    "updated_at": "2020-04-24T23:39:10.516Z"
                },
                {
                    "id": 771,
                    "text": "played a Cello in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 257,
                    "created_at": "2020-04-24T23:39:10.523Z",
                    "updated_at": "2020-04-24T23:39:10.523Z"
                }
            ]
        }
    },
    {
        "id": "258",
        "type": "card",
        "attributes": {
            "strategy": "Breathe more deeply",
            "notes": [
                {
                    "id": 772,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 258,
                    "created_at": "2020-04-24T23:39:10.530Z",
                    "updated_at": "2020-04-24T23:39:10.530Z"
                },
                {
                    "id": 773,
                    "text": "sampled a crab eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 258,
                    "created_at": "2020-04-24T23:39:10.538Z",
                    "updated_at": "2020-04-24T23:39:10.538Z"
                },
                {
                    "id": 774,
                    "text": "played a Acoustic Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 258,
                    "created_at": "2020-04-24T23:39:10.551Z",
                    "updated_at": "2020-04-24T23:39:10.551Z"
                }
            ]
        }
    },
    {
        "id": "259",
        "type": "card",
        "attributes": {
            "strategy": "Bridges -build -burn",
            "notes": [
                {
                    "id": 775,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 259,
                    "created_at": "2020-04-24T23:39:10.560Z",
                    "updated_at": "2020-04-24T23:39:10.560Z"
                },
                {
                    "id": 776,
                    "text": "sampled a grasshopper eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 259,
                    "created_at": "2020-04-24T23:39:10.568Z",
                    "updated_at": "2020-04-24T23:39:10.568Z"
                },
                {
                    "id": 777,
                    "text": "played a Harmonica in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 259,
                    "created_at": "2020-04-24T23:39:10.577Z",
                    "updated_at": "2020-04-24T23:39:10.577Z"
                }
            ]
        }
    },
    {
        "id": "260",
        "type": "card",
        "attributes": {
            "strategy": "Cascades",
            "notes": [
                {
                    "id": 778,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 260,
                    "created_at": "2020-04-24T23:39:10.584Z",
                    "updated_at": "2020-04-24T23:39:10.584Z"
                },
                {
                    "id": 779,
                    "text": "sampled a llama eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 260,
                    "created_at": "2020-04-24T23:39:10.594Z",
                    "updated_at": "2020-04-24T23:39:10.594Z"
                },
                {
                    "id": 780,
                    "text": "played a Saxophone in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 260,
                    "created_at": "2020-04-24T23:39:10.602Z",
                    "updated_at": "2020-04-24T23:39:10.602Z"
                }
            ]
        }
    },
    {
        "id": "261",
        "type": "card",
        "attributes": {
            "strategy": "Change instrument roles",
            "notes": [
                {
                    "id": 781,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 261,
                    "created_at": "2020-04-24T23:39:10.608Z",
                    "updated_at": "2020-04-24T23:39:10.608Z"
                },
                {
                    "id": 782,
                    "text": "sampled a buffalo eating Strawberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 261,
                    "created_at": "2020-04-24T23:39:10.616Z",
                    "updated_at": "2020-04-24T23:39:10.616Z"
                },
                {
                    "id": 783,
                    "text": "played a Bass Guitar in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 261,
                    "created_at": "2020-04-24T23:39:10.622Z",
                    "updated_at": "2020-04-24T23:39:10.622Z"
                }
            ]
        }
    },
    {
        "id": "262",
        "type": "card",
        "attributes": {
            "strategy": "Change nothing and continue with immaculate consistency",
            "notes": [
                {
                    "id": 784,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 262,
                    "created_at": "2020-04-24T23:39:10.628Z",
                    "updated_at": "2020-04-24T23:39:10.628Z"
                },
                {
                    "id": 785,
                    "text": "sampled a wasp eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 262,
                    "created_at": "2020-04-24T23:39:10.634Z",
                    "updated_at": "2020-04-24T23:39:10.634Z"
                },
                {
                    "id": 786,
                    "text": "played a Cello in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 262,
                    "created_at": "2020-04-24T23:39:10.639Z",
                    "updated_at": "2020-04-24T23:39:10.639Z"
                }
            ]
        }
    },
    {
        "id": "263",
        "type": "card",
        "attributes": {
            "strategy": "Children -speaking -singing",
            "notes": [
                {
                    "id": 787,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 263,
                    "created_at": "2020-04-24T23:39:10.646Z",
                    "updated_at": "2020-04-24T23:39:10.646Z"
                },
                {
                    "id": 788,
                    "text": "sampled a porcupine eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 263,
                    "created_at": "2020-04-24T23:39:10.653Z",
                    "updated_at": "2020-04-24T23:39:10.653Z"
                },
                {
                    "id": 789,
                    "text": "played a Flute in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 263,
                    "created_at": "2020-04-24T23:39:10.660Z",
                    "updated_at": "2020-04-24T23:39:10.660Z"
                }
            ]
        }
    },
    {
        "id": "264",
        "type": "card",
        "attributes": {
            "strategy": "Cluster analysis",
            "notes": [
                {
                    "id": 790,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 264,
                    "created_at": "2020-04-24T23:39:10.666Z",
                    "updated_at": "2020-04-24T23:39:10.666Z"
                },
                {
                    "id": 791,
                    "text": "sampled a crab eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 264,
                    "created_at": "2020-04-24T23:39:10.673Z",
                    "updated_at": "2020-04-24T23:39:10.673Z"
                },
                {
                    "id": 792,
                    "text": "played a Violin in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 264,
                    "created_at": "2020-04-24T23:39:10.679Z",
                    "updated_at": "2020-04-24T23:39:10.679Z"
                }
            ]
        }
    },
    {
        "id": "265",
        "type": "card",
        "attributes": {
            "strategy": "Consider different fading systems",
            "notes": [
                {
                    "id": 793,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 265,
                    "created_at": "2020-04-24T23:39:10.686Z",
                    "updated_at": "2020-04-24T23:39:10.686Z"
                },
                {
                    "id": 794,
                    "text": "sampled a hamster eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 265,
                    "created_at": "2020-04-24T23:39:10.696Z",
                    "updated_at": "2020-04-24T23:39:10.696Z"
                },
                {
                    "id": 795,
                    "text": "played a Drums in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 265,
                    "created_at": "2020-04-24T23:39:10.702Z",
                    "updated_at": "2020-04-24T23:39:10.702Z"
                }
            ]
        }
    },
    {
        "id": "266",
        "type": "card",
        "attributes": {
            "strategy": "Consult other sources -promising -unpromising",
            "notes": [
                {
                    "id": 796,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 266,
                    "created_at": "2020-04-24T23:39:10.708Z",
                    "updated_at": "2020-04-24T23:39:10.708Z"
                },
                {
                    "id": 797,
                    "text": "sampled a hornet eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 266,
                    "created_at": "2020-04-24T23:39:10.714Z",
                    "updated_at": "2020-04-24T23:39:10.714Z"
                },
                {
                    "id": 798,
                    "text": "played a Ukelele in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 266,
                    "created_at": "2020-04-24T23:39:10.722Z",
                    "updated_at": "2020-04-24T23:39:10.722Z"
                }
            ]
        }
    },
    {
        "id": "267",
        "type": "card",
        "attributes": {
            "strategy": "Courage!",
            "notes": [
                {
                    "id": 799,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 267,
                    "created_at": "2020-04-24T23:39:10.728Z",
                    "updated_at": "2020-04-24T23:39:10.728Z"
                },
                {
                    "id": 800,
                    "text": "sampled a goldfish eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 267,
                    "created_at": "2020-04-24T23:39:10.733Z",
                    "updated_at": "2020-04-24T23:39:10.733Z"
                },
                {
                    "id": 801,
                    "text": "played a Oboe in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 267,
                    "created_at": "2020-04-24T23:39:10.738Z",
                    "updated_at": "2020-04-24T23:39:10.738Z"
                }
            ]
        }
    },
    {
        "id": "268",
        "type": "card",
        "attributes": {
            "strategy": "Cut a vital connection",
            "notes": [
                {
                    "id": 802,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 268,
                    "created_at": "2020-04-24T23:39:10.749Z",
                    "updated_at": "2020-04-24T23:39:10.749Z"
                },
                {
                    "id": 803,
                    "text": "sampled a camel eating Peaches",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 268,
                    "created_at": "2020-04-24T23:39:10.763Z",
                    "updated_at": "2020-04-24T23:39:10.763Z"
                },
                {
                    "id": 804,
                    "text": "played a Acoustic Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 268,
                    "created_at": "2020-04-24T23:39:10.769Z",
                    "updated_at": "2020-04-24T23:39:10.769Z"
                },
                {
                    "id": 1396,
                    "text": "test_test",
                    "url": "https://soundcloud.com/markdenardo/waking-me-up",
                    "card_id": 268,
                    "created_at": "2020-05-08T21:31:09.675Z",
                    "updated_at": "2020-05-08T21:31:09.675Z"
                }
            ]
        }
    },
    {
        "id": "269",
        "type": "card",
        "attributes": {
            "strategy": "Decorate, decorate",
            "notes": [
                {
                    "id": 805,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 269,
                    "created_at": "2020-04-24T23:39:10.774Z",
                    "updated_at": "2020-04-24T23:39:10.774Z"
                },
                {
                    "id": 806,
                    "text": "sampled a tortoise eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 269,
                    "created_at": "2020-04-24T23:39:10.780Z",
                    "updated_at": "2020-04-24T23:39:10.780Z"
                },
                {
                    "id": 807,
                    "text": "played a Drums in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 269,
                    "created_at": "2020-04-24T23:39:10.786Z",
                    "updated_at": "2020-04-24T23:39:10.786Z"
                }
            ]
        }
    },
    {
        "id": "270",
        "type": "card",
        "attributes": {
            "strategy": "Define an area as 'safe' and use it as an anchor",
            "notes": [
                {
                    "id": 808,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 270,
                    "created_at": "2020-04-24T23:39:10.792Z",
                    "updated_at": "2020-04-24T23:39:10.792Z"
                },
                {
                    "id": 809,
                    "text": "sampled a mink eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 270,
                    "created_at": "2020-04-24T23:39:10.797Z",
                    "updated_at": "2020-04-24T23:39:10.797Z"
                },
                {
                    "id": 810,
                    "text": "played a Ukelele in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 270,
                    "created_at": "2020-04-24T23:39:10.803Z",
                    "updated_at": "2020-04-24T23:39:10.803Z"
                }
            ]
        }
    },
    {
        "id": "271",
        "type": "card",
        "attributes": {
            "strategy": "Destroy -nothing -the most important thing",
            "notes": [
                {
                    "id": 811,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 271,
                    "created_at": "2020-04-24T23:39:10.808Z",
                    "updated_at": "2020-04-24T23:39:10.808Z"
                },
                {
                    "id": 812,
                    "text": "sampled a hornet eating Mandarins",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 271,
                    "created_at": "2020-04-24T23:39:10.815Z",
                    "updated_at": "2020-04-24T23:39:10.815Z"
                },
                {
                    "id": 813,
                    "text": "played a Accordion in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 271,
                    "created_at": "2020-04-24T23:39:10.828Z",
                    "updated_at": "2020-04-24T23:39:10.828Z"
                }
            ]
        }
    },
    {
        "id": "272",
        "type": "card",
        "attributes": {
            "strategy": "Discard an axiom",
            "notes": [
                {
                    "id": 814,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 272,
                    "created_at": "2020-04-24T23:39:10.835Z",
                    "updated_at": "2020-04-24T23:39:10.835Z"
                },
                {
                    "id": 815,
                    "text": "sampled a ox eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 272,
                    "created_at": "2020-04-24T23:39:10.842Z",
                    "updated_at": "2020-04-24T23:39:10.842Z"
                },
                {
                    "id": 816,
                    "text": "played a Organ in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 272,
                    "created_at": "2020-04-24T23:39:10.848Z",
                    "updated_at": "2020-04-24T23:39:10.848Z"
                }
            ]
        }
    },
    {
        "id": "273",
        "type": "card",
        "attributes": {
            "strategy": "Disciplined self-indulgence",
            "notes": [
                {
                    "id": 817,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 273,
                    "created_at": "2020-04-24T23:39:10.853Z",
                    "updated_at": "2020-04-24T23:39:10.853Z"
                },
                {
                    "id": 818,
                    "text": "sampled a eagle eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 273,
                    "created_at": "2020-04-24T23:39:10.866Z",
                    "updated_at": "2020-04-24T23:39:10.866Z"
                },
                {
                    "id": 819,
                    "text": "played a Accordion in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 273,
                    "created_at": "2020-04-24T23:39:10.873Z",
                    "updated_at": "2020-04-24T23:39:10.873Z"
                }
            ]
        }
    },
    {
        "id": "274",
        "type": "card",
        "attributes": {
            "strategy": "Disconnect from desire",
            "notes": [
                {
                    "id": 820,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 274,
                    "created_at": "2020-04-24T23:39:10.879Z",
                    "updated_at": "2020-04-24T23:39:10.879Z"
                },
                {
                    "id": 821,
                    "text": "sampled a serval eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 274,
                    "created_at": "2020-04-24T23:39:10.886Z",
                    "updated_at": "2020-04-24T23:39:10.886Z"
                },
                {
                    "id": 822,
                    "text": "played a Acoustic Guitar in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 274,
                    "created_at": "2020-04-24T23:39:10.892Z",
                    "updated_at": "2020-04-24T23:39:10.892Z"
                }
            ]
        }
    },
    {
        "id": "275",
        "type": "card",
        "attributes": {
            "strategy": "Discover the recipes you are using and abandon them",
            "notes": [
                {
                    "id": 823,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 275,
                    "created_at": "2020-04-24T23:39:10.897Z",
                    "updated_at": "2020-04-24T23:39:10.897Z"
                },
                {
                    "id": 824,
                    "text": "sampled a mouse eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 275,
                    "created_at": "2020-04-24T23:39:10.904Z",
                    "updated_at": "2020-04-24T23:39:10.904Z"
                },
                {
                    "id": 825,
                    "text": "played a Ukelele in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 275,
                    "created_at": "2020-04-24T23:39:10.909Z",
                    "updated_at": "2020-04-24T23:39:10.909Z"
                }
            ]
        }
    },
    {
        "id": "276",
        "type": "card",
        "attributes": {
            "strategy": "Distorting time",
            "notes": [
                {
                    "id": 826,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 276,
                    "created_at": "2020-04-24T23:39:10.916Z",
                    "updated_at": "2020-04-24T23:39:10.916Z"
                },
                {
                    "id": 827,
                    "text": "sampled a cattle eating Longan",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 276,
                    "created_at": "2020-04-24T23:39:10.923Z",
                    "updated_at": "2020-04-24T23:39:10.923Z"
                },
                {
                    "id": 828,
                    "text": "played a Trumpet in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 276,
                    "created_at": "2020-04-24T23:39:10.928Z",
                    "updated_at": "2020-04-24T23:39:10.928Z"
                }
            ]
        }
    },
    {
        "id": "277",
        "type": "card",
        "attributes": {
            "strategy": "Do nothing for as long as possible",
            "notes": [
                {
                    "id": 829,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 277,
                    "created_at": "2020-04-24T23:39:10.934Z",
                    "updated_at": "2020-04-24T23:39:10.934Z"
                },
                {
                    "id": 830,
                    "text": "sampled a hamster eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 277,
                    "created_at": "2020-04-24T23:39:10.941Z",
                    "updated_at": "2020-04-24T23:39:10.941Z"
                },
                {
                    "id": 831,
                    "text": "played a Piano in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 277,
                    "created_at": "2020-04-24T23:39:10.948Z",
                    "updated_at": "2020-04-24T23:39:10.948Z"
                }
            ]
        }
    },
    {
        "id": "278",
        "type": "card",
        "attributes": {
            "strategy": "Don't be afraid of things because they're easy to do",
            "notes": [
                {
                    "id": 832,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 278,
                    "created_at": "2020-04-24T23:39:10.957Z",
                    "updated_at": "2020-04-24T23:39:10.957Z"
                },
                {
                    "id": 833,
                    "text": "sampled a ant eating Mangosteens",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 278,
                    "created_at": "2020-04-24T23:39:10.983Z",
                    "updated_at": "2020-04-24T23:39:10.983Z"
                },
                {
                    "id": 834,
                    "text": "played a Harmonica in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 278,
                    "created_at": "2020-04-24T23:39:10.992Z",
                    "updated_at": "2020-04-24T23:39:10.992Z"
                }
            ]
        }
    },
    {
        "id": "279",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened of cliches",
            "notes": [
                {
                    "id": 835,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 279,
                    "created_at": "2020-04-24T23:39:10.998Z",
                    "updated_at": "2020-04-24T23:39:10.998Z"
                },
                {
                    "id": 836,
                    "text": "sampled a cattle eating Lychees",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 279,
                    "created_at": "2020-04-24T23:39:11.004Z",
                    "updated_at": "2020-04-24T23:39:11.004Z"
                },
                {
                    "id": 837,
                    "text": "played a Piano in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 279,
                    "created_at": "2020-04-24T23:39:11.009Z",
                    "updated_at": "2020-04-24T23:39:11.009Z"
                }
            ]
        }
    },
    {
        "id": "280",
        "type": "card",
        "attributes": {
            "strategy": "Don't be frightened to display your talents",
            "notes": [
                {
                    "id": 838,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 280,
                    "created_at": "2020-04-24T23:39:11.015Z",
                    "updated_at": "2020-04-24T23:39:11.015Z"
                },
                {
                    "id": 839,
                    "text": "sampled a mole eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 280,
                    "created_at": "2020-04-24T23:39:11.020Z",
                    "updated_at": "2020-04-24T23:39:11.020Z"
                },
                {
                    "id": 840,
                    "text": "played a Cello in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 280,
                    "created_at": "2020-04-24T23:39:11.026Z",
                    "updated_at": "2020-04-24T23:39:11.026Z"
                }
            ]
        }
    },
    {
        "id": "281",
        "type": "card",
        "attributes": {
            "strategy": "Don't break the silence",
            "notes": [
                {
                    "id": 841,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 281,
                    "created_at": "2020-04-24T23:39:11.032Z",
                    "updated_at": "2020-04-24T23:39:11.032Z"
                },
                {
                    "id": 842,
                    "text": "sampled a baboon eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 281,
                    "created_at": "2020-04-24T23:39:11.038Z",
                    "updated_at": "2020-04-24T23:39:11.038Z"
                },
                {
                    "id": 843,
                    "text": "played a Cello in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 281,
                    "created_at": "2020-04-24T23:39:11.044Z",
                    "updated_at": "2020-04-24T23:39:11.044Z"
                }
            ]
        }
    },
    {
        "id": "282",
        "type": "card",
        "attributes": {
            "strategy": "Don't stress one thing more than another",
            "notes": [
                {
                    "id": 844,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 282,
                    "created_at": "2020-04-24T23:39:11.049Z",
                    "updated_at": "2020-04-24T23:39:11.049Z"
                },
                {
                    "id": 845,
                    "text": "sampled a goldfish eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 282,
                    "created_at": "2020-04-24T23:39:11.056Z",
                    "updated_at": "2020-04-24T23:39:11.056Z"
                },
                {
                    "id": 846,
                    "text": "played a Xylophone in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 282,
                    "created_at": "2020-04-24T23:39:11.062Z",
                    "updated_at": "2020-04-24T23:39:11.062Z"
                }
            ]
        }
    },
    {
        "id": "283",
        "type": "card",
        "attributes": {
            "strategy": "Do something boring",
            "notes": [
                {
                    "id": 847,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 283,
                    "created_at": "2020-04-24T23:39:11.068Z",
                    "updated_at": "2020-04-24T23:39:11.068Z"
                },
                {
                    "id": 848,
                    "text": "sampled a mule eating Lychees",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 283,
                    "created_at": "2020-04-24T23:39:11.073Z",
                    "updated_at": "2020-04-24T23:39:11.073Z"
                },
                {
                    "id": 849,
                    "text": "played a Organ in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 283,
                    "created_at": "2020-04-24T23:39:11.078Z",
                    "updated_at": "2020-04-24T23:39:11.078Z"
                }
            ]
        }
    },
    {
        "id": "284",
        "type": "card",
        "attributes": {
            "strategy": "Do the words need changing?",
            "notes": [
                {
                    "id": 850,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 284,
                    "created_at": "2020-04-24T23:39:11.084Z",
                    "updated_at": "2020-04-24T23:39:11.084Z"
                },
                {
                    "id": 851,
                    "text": "sampled a hyena eating Dried Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 284,
                    "created_at": "2020-04-24T23:39:11.090Z",
                    "updated_at": "2020-04-24T23:39:11.090Z"
                },
                {
                    "id": 852,
                    "text": "played a Electric Guitar in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 284,
                    "created_at": "2020-04-24T23:39:11.096Z",
                    "updated_at": "2020-04-24T23:39:11.096Z"
                }
            ]
        }
    },
    {
        "id": "285",
        "type": "card",
        "attributes": {
            "strategy": "Do we need holes?",
            "notes": [
                {
                    "id": 853,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 285,
                    "created_at": "2020-04-24T23:39:11.101Z",
                    "updated_at": "2020-04-24T23:39:11.101Z"
                },
                {
                    "id": 854,
                    "text": "sampled a wildebeest eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 285,
                    "created_at": "2020-04-24T23:39:11.106Z",
                    "updated_at": "2020-04-24T23:39:11.106Z"
                },
                {
                    "id": 855,
                    "text": "played a Acoustic Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 285,
                    "created_at": "2020-04-24T23:39:11.111Z",
                    "updated_at": "2020-04-24T23:39:11.111Z"
                }
            ]
        }
    },
    {
        "id": "286",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise differences",
            "notes": [
                {
                    "id": 856,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 286,
                    "created_at": "2020-04-24T23:39:11.116Z",
                    "updated_at": "2020-04-24T23:39:11.116Z"
                },
                {
                    "id": 857,
                    "text": "sampled a goldfish eating Dragonfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 286,
                    "created_at": "2020-04-24T23:39:11.122Z",
                    "updated_at": "2020-04-24T23:39:11.122Z"
                },
                {
                    "id": 858,
                    "text": "played a Trumpet in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 286,
                    "created_at": "2020-04-24T23:39:11.128Z",
                    "updated_at": "2020-04-24T23:39:11.128Z"
                }
            ]
        }
    },
    {
        "id": "287",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise repetitions",
            "notes": [
                {
                    "id": 859,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 287,
                    "created_at": "2020-04-24T23:39:11.134Z",
                    "updated_at": "2020-04-24T23:39:11.134Z"
                },
                {
                    "id": 860,
                    "text": "sampled a wildebeest eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 287,
                    "created_at": "2020-04-24T23:39:11.140Z",
                    "updated_at": "2020-04-24T23:39:11.140Z"
                },
                {
                    "id": 861,
                    "text": "played a Ukelele in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 287,
                    "created_at": "2020-04-24T23:39:11.146Z",
                    "updated_at": "2020-04-24T23:39:11.146Z"
                }
            ]
        }
    },
    {
        "id": "288",
        "type": "card",
        "attributes": {
            "strategy": "Emphasise the flaws",
            "notes": [
                {
                    "id": 862,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 288,
                    "created_at": "2020-04-24T23:39:11.152Z",
                    "updated_at": "2020-04-24T23:39:11.152Z"
                },
                {
                    "id": 863,
                    "text": "sampled a giraffe eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 288,
                    "created_at": "2020-04-24T23:39:11.157Z",
                    "updated_at": "2020-04-24T23:39:11.157Z"
                },
                {
                    "id": 864,
                    "text": "played a Accordion in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 288,
                    "created_at": "2020-04-24T23:39:11.163Z",
                    "updated_at": "2020-04-24T23:39:11.163Z"
                }
            ]
        }
    },
    {
        "id": "289",
        "type": "card",
        "attributes": {
            "strategy": "Fill every beat with something",
            "notes": [
                {
                    "id": 865,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 289,
                    "created_at": "2020-04-24T23:39:11.168Z",
                    "updated_at": "2020-04-24T23:39:11.168Z"
                },
                {
                    "id": 866,
                    "text": "sampled a elephant eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 289,
                    "created_at": "2020-04-24T23:39:11.174Z",
                    "updated_at": "2020-04-24T23:39:11.174Z"
                },
                {
                    "id": 867,
                    "text": "played a Flute in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 289,
                    "created_at": "2020-04-24T23:39:11.180Z",
                    "updated_at": "2020-04-24T23:39:11.180Z"
                }
            ]
        }
    },
    {
        "id": "290",
        "type": "card",
        "attributes": {
            "strategy": "From nothing to more than nothing",
            "notes": [
                {
                    "id": 868,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 290,
                    "created_at": "2020-04-24T23:39:11.186Z",
                    "updated_at": "2020-04-24T23:39:11.186Z"
                },
                {
                    "id": 869,
                    "text": "sampled a chinchilla eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 290,
                    "created_at": "2020-04-24T23:39:11.191Z",
                    "updated_at": "2020-04-24T23:39:11.191Z"
                },
                {
                    "id": 870,
                    "text": "played a Electric Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 290,
                    "created_at": "2020-04-24T23:39:11.196Z",
                    "updated_at": "2020-04-24T23:39:11.196Z"
                }
            ]
        }
    },
    {
        "id": "291",
        "type": "card",
        "attributes": {
            "strategy": "Ghost echoes",
            "notes": [
                {
                    "id": 871,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 291,
                    "created_at": "2020-04-24T23:39:11.206Z",
                    "updated_at": "2020-04-24T23:39:11.206Z"
                },
                {
                    "id": 872,
                    "text": "sampled a weasel eating Avocado",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 291,
                    "created_at": "2020-04-24T23:39:11.212Z",
                    "updated_at": "2020-04-24T23:39:11.212Z"
                },
                {
                    "id": 873,
                    "text": "played a Piano in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 291,
                    "created_at": "2020-04-24T23:39:11.219Z",
                    "updated_at": "2020-04-24T23:39:11.219Z"
                }
            ]
        }
    },
    {
        "id": "292",
        "type": "card",
        "attributes": {
            "strategy": "Give the game away",
            "notes": [
                {
                    "id": 874,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 292,
                    "created_at": "2020-04-24T23:39:11.226Z",
                    "updated_at": "2020-04-24T23:39:11.226Z"
                },
                {
                    "id": 875,
                    "text": "sampled a fly eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 292,
                    "created_at": "2020-04-24T23:39:11.231Z",
                    "updated_at": "2020-04-24T23:39:11.231Z"
                },
                {
                    "id": 876,
                    "text": "played a Acoustic Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 292,
                    "created_at": "2020-04-24T23:39:11.237Z",
                    "updated_at": "2020-04-24T23:39:11.237Z"
                }
            ]
        }
    },
    {
        "id": "293",
        "type": "card",
        "attributes": {
            "strategy": "Give way to your worst impulse",
            "notes": [
                {
                    "id": 877,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 293,
                    "created_at": "2020-04-24T23:39:11.242Z",
                    "updated_at": "2020-04-24T23:39:11.242Z"
                },
                {
                    "id": 878,
                    "text": "sampled a panda eating Mandarins",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 293,
                    "created_at": "2020-04-24T23:39:11.248Z",
                    "updated_at": "2020-04-24T23:39:11.248Z"
                },
                {
                    "id": 879,
                    "text": "played a Accordion in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 293,
                    "created_at": "2020-04-24T23:39:11.253Z",
                    "updated_at": "2020-04-24T23:39:11.253Z"
                }
            ]
        }
    },
    {
        "id": "294",
        "type": "card",
        "attributes": {
            "strategy": "Go outside. Shut the door.",
            "notes": [
                {
                    "id": 880,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 294,
                    "created_at": "2020-04-24T23:39:11.259Z",
                    "updated_at": "2020-04-24T23:39:11.259Z"
                },
                {
                    "id": 881,
                    "text": "sampled a scorpion eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 294,
                    "created_at": "2020-04-24T23:39:11.265Z",
                    "updated_at": "2020-04-24T23:39:11.265Z"
                },
                {
                    "id": 882,
                    "text": "played a Trumpet in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 294,
                    "created_at": "2020-04-24T23:39:11.271Z",
                    "updated_at": "2020-04-24T23:39:11.271Z"
                }
            ]
        }
    },
    {
        "id": "295",
        "type": "card",
        "attributes": {
            "strategy": "Go slowly all the way round the outside",
            "notes": [
                {
                    "id": 883,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 295,
                    "created_at": "2020-04-24T23:39:11.277Z",
                    "updated_at": "2020-04-24T23:39:11.277Z"
                },
                {
                    "id": 884,
                    "text": "sampled a armadillo eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 295,
                    "created_at": "2020-04-24T23:39:11.285Z",
                    "updated_at": "2020-04-24T23:39:11.285Z"
                },
                {
                    "id": 885,
                    "text": "played a Xylophone in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 295,
                    "created_at": "2020-04-24T23:39:11.292Z",
                    "updated_at": "2020-04-24T23:39:11.292Z"
                }
            ]
        }
    },
    {
        "id": "296",
        "type": "card",
        "attributes": {
            "strategy": "Go to an extreme, move back to a more comfortable place",
            "notes": [
                {
                    "id": 886,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 296,
                    "created_at": "2020-04-24T23:39:11.298Z",
                    "updated_at": "2020-04-24T23:39:11.298Z"
                },
                {
                    "id": 887,
                    "text": "sampled a raccoon eating Olives",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 296,
                    "created_at": "2020-04-24T23:39:11.304Z",
                    "updated_at": "2020-04-24T23:39:11.304Z"
                },
                {
                    "id": 888,
                    "text": "played a Flute in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 296,
                    "created_at": "2020-04-24T23:39:11.309Z",
                    "updated_at": "2020-04-24T23:39:11.309Z"
                }
            ]
        }
    },
    {
        "id": "297",
        "type": "card",
        "attributes": {
            "strategy": "Honor thy error as a hidden intention",
            "notes": [
                {
                    "id": 889,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 297,
                    "created_at": "2020-04-24T23:39:11.315Z",
                    "updated_at": "2020-04-24T23:39:11.315Z"
                },
                {
                    "id": 890,
                    "text": "sampled a toad eating Plums",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 297,
                    "created_at": "2020-04-24T23:39:11.325Z",
                    "updated_at": "2020-04-24T23:39:11.325Z"
                },
                {
                    "id": 891,
                    "text": "played a Flute in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 297,
                    "created_at": "2020-04-24T23:39:11.332Z",
                    "updated_at": "2020-04-24T23:39:11.332Z"
                }
            ]
        }
    },
    {
        "id": "298",
        "type": "card",
        "attributes": {
            "strategy": "How would you have done it?",
            "notes": [
                {
                    "id": 892,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 298,
                    "created_at": "2020-04-24T23:39:11.339Z",
                    "updated_at": "2020-04-24T23:39:11.339Z"
                },
                {
                    "id": 893,
                    "text": "sampled a louse eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 298,
                    "created_at": "2020-04-24T23:39:11.345Z",
                    "updated_at": "2020-04-24T23:39:11.345Z"
                },
                {
                    "id": 894,
                    "text": "played a Clarinet in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 298,
                    "created_at": "2020-04-24T23:39:11.351Z",
                    "updated_at": "2020-04-24T23:39:11.351Z"
                }
            ]
        }
    },
    {
        "id": "299",
        "type": "card",
        "attributes": {
            "strategy": "Humanise something free of error",
            "notes": [
                {
                    "id": 895,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 299,
                    "created_at": "2020-04-24T23:39:11.357Z",
                    "updated_at": "2020-04-24T23:39:11.357Z"
                },
                {
                    "id": 896,
                    "text": "sampled a ant eating Oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 299,
                    "created_at": "2020-04-24T23:39:11.362Z",
                    "updated_at": "2020-04-24T23:39:11.362Z"
                },
                {
                    "id": 897,
                    "text": "played a Saxophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 299,
                    "created_at": "2020-04-24T23:39:11.367Z",
                    "updated_at": "2020-04-24T23:39:11.367Z"
                }
            ]
        }
    },
    {
        "id": "300",
        "type": "card",
        "attributes": {
            "strategy": "Idiot glee (?)",
            "notes": [
                {
                    "id": 898,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 300,
                    "created_at": "2020-04-24T23:39:11.372Z",
                    "updated_at": "2020-04-24T23:39:11.372Z"
                },
                {
                    "id": 899,
                    "text": "sampled a jackal eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 300,
                    "created_at": "2020-04-24T23:39:11.379Z",
                    "updated_at": "2020-04-24T23:39:11.379Z"
                },
                {
                    "id": 900,
                    "text": "played a Saxophone in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 300,
                    "created_at": "2020-04-24T23:39:11.385Z",
                    "updated_at": "2020-04-24T23:39:11.385Z"
                }
            ]
        }
    },
    {
        "id": "301",
        "type": "card",
        "attributes": {
            "strategy": "Imagine the piece as a set of disconnected events",
            "notes": [
                {
                    "id": 901,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 301,
                    "created_at": "2020-04-24T23:39:11.391Z",
                    "updated_at": "2020-04-24T23:39:11.391Z"
                },
                {
                    "id": 902,
                    "text": "sampled a beaver eating Longan",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 301,
                    "created_at": "2020-04-24T23:39:11.398Z",
                    "updated_at": "2020-04-24T23:39:11.398Z"
                },
                {
                    "id": 903,
                    "text": "played a Oboe in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 301,
                    "created_at": "2020-04-24T23:39:11.405Z",
                    "updated_at": "2020-04-24T23:39:11.405Z"
                }
            ]
        }
    },
    {
        "id": "302",
        "type": "card",
        "attributes": {
            "strategy": "Infinitesimal gradations",
            "notes": [
                {
                    "id": 904,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 302,
                    "created_at": "2020-04-24T23:39:11.414Z",
                    "updated_at": "2020-04-24T23:39:11.414Z"
                },
                {
                    "id": 905,
                    "text": "sampled a bat eating Mulberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 302,
                    "created_at": "2020-04-24T23:39:11.424Z",
                    "updated_at": "2020-04-24T23:39:11.424Z"
                },
                {
                    "id": 906,
                    "text": "played a Piano in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 302,
                    "created_at": "2020-04-24T23:39:11.435Z",
                    "updated_at": "2020-04-24T23:39:11.435Z"
                }
            ]
        }
    },
    {
        "id": "303",
        "type": "card",
        "attributes": {
            "strategy": "Intentions -nobility of -humility of -credibility of",
            "notes": [
                {
                    "id": 907,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 303,
                    "created_at": "2020-04-24T23:39:11.443Z",
                    "updated_at": "2020-04-24T23:39:11.443Z"
                },
                {
                    "id": 908,
                    "text": "sampled a beaver eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 303,
                    "created_at": "2020-04-24T23:39:11.450Z",
                    "updated_at": "2020-04-24T23:39:11.450Z"
                },
                {
                    "id": 909,
                    "text": "played a Xylophone in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 303,
                    "created_at": "2020-04-24T23:39:11.460Z",
                    "updated_at": "2020-04-24T23:39:11.460Z"
                }
            ]
        }
    },
    {
        "id": "304",
        "type": "card",
        "attributes": {
            "strategy": "In total darkness, or in a very large room, very quietly",
            "notes": [
                {
                    "id": 910,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 304,
                    "created_at": "2020-04-24T23:39:11.467Z",
                    "updated_at": "2020-04-24T23:39:11.467Z"
                },
                {
                    "id": 911,
                    "text": "sampled a moose eating Mulberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 304,
                    "created_at": "2020-04-24T23:39:11.472Z",
                    "updated_at": "2020-04-24T23:39:11.472Z"
                },
                {
                    "id": 912,
                    "text": "played a Organ in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 304,
                    "created_at": "2020-04-24T23:39:11.478Z",
                    "updated_at": "2020-04-24T23:39:11.478Z"
                }
            ]
        }
    },
    {
        "id": "305",
        "type": "card",
        "attributes": {
            "strategy": "Into the impossible",
            "notes": [
                {
                    "id": 913,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 305,
                    "created_at": "2020-04-24T23:39:11.486Z",
                    "updated_at": "2020-04-24T23:39:11.486Z"
                },
                {
                    "id": 914,
                    "text": "sampled a porpoise eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 305,
                    "created_at": "2020-04-24T23:39:11.495Z",
                    "updated_at": "2020-04-24T23:39:11.495Z"
                },
                {
                    "id": 915,
                    "text": "played a Trumpet in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 305,
                    "created_at": "2020-04-24T23:39:11.501Z",
                    "updated_at": "2020-04-24T23:39:11.501Z"
                }
            ]
        }
    },
    {
        "id": "306",
        "type": "card",
        "attributes": {
            "strategy": "Is it finished?",
            "notes": [
                {
                    "id": 916,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 306,
                    "created_at": "2020-04-24T23:39:11.509Z",
                    "updated_at": "2020-04-24T23:39:11.509Z"
                },
                {
                    "id": 917,
                    "text": "sampled a cicada eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 306,
                    "created_at": "2020-04-24T23:39:11.514Z",
                    "updated_at": "2020-04-24T23:39:11.514Z"
                },
                {
                    "id": 918,
                    "text": "played a Accordion in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 306,
                    "created_at": "2020-04-24T23:39:11.524Z",
                    "updated_at": "2020-04-24T23:39:11.524Z"
                }
            ]
        }
    },
    {
        "id": "307",
        "type": "card",
        "attributes": {
            "strategy": "Is the intonation correct?",
            "notes": [
                {
                    "id": 919,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 307,
                    "created_at": "2020-04-24T23:39:11.530Z",
                    "updated_at": "2020-04-24T23:39:11.530Z"
                },
                {
                    "id": 920,
                    "text": "sampled a locust eating Dragonfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 307,
                    "created_at": "2020-04-24T23:39:11.535Z",
                    "updated_at": "2020-04-24T23:39:11.535Z"
                },
                {
                    "id": 921,
                    "text": "played a Saxophone in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 307,
                    "created_at": "2020-04-24T23:39:11.542Z",
                    "updated_at": "2020-04-24T23:39:11.542Z"
                }
            ]
        }
    },
    {
        "id": "308",
        "type": "card",
        "attributes": {
            "strategy": "Is there something missing?",
            "notes": [
                {
                    "id": 922,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 308,
                    "created_at": "2020-04-24T23:39:11.548Z",
                    "updated_at": "2020-04-24T23:39:11.548Z"
                },
                {
                    "id": 923,
                    "text": "sampled a rat eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 308,
                    "created_at": "2020-04-24T23:39:11.553Z",
                    "updated_at": "2020-04-24T23:39:11.553Z"
                },
                {
                    "id": 924,
                    "text": "played a Violin in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 308,
                    "created_at": "2020-04-24T23:39:11.559Z",
                    "updated_at": "2020-04-24T23:39:11.559Z"
                }
            ]
        }
    },
    {
        "id": "309",
        "type": "card",
        "attributes": {
            "strategy": "It is quite possible (after all)",
            "notes": [
                {
                    "id": 925,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 309,
                    "created_at": "2020-04-24T23:39:11.566Z",
                    "updated_at": "2020-04-24T23:39:11.566Z"
                },
                {
                    "id": 926,
                    "text": "sampled a rabbit eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 309,
                    "created_at": "2020-04-24T23:39:11.573Z",
                    "updated_at": "2020-04-24T23:39:11.573Z"
                },
                {
                    "id": 927,
                    "text": "played a Harmonica in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 309,
                    "created_at": "2020-04-24T23:39:11.581Z",
                    "updated_at": "2020-04-24T23:39:11.581Z"
                }
            ]
        }
    },
    {
        "id": "310",
        "type": "card",
        "attributes": {
            "strategy": "Just carry on",
            "notes": [
                {
                    "id": 928,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 310,
                    "created_at": "2020-04-24T23:39:11.587Z",
                    "updated_at": "2020-04-24T23:39:11.587Z"
                },
                {
                    "id": 929,
                    "text": "sampled a impala eating Loquats",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 310,
                    "created_at": "2020-04-24T23:39:11.594Z",
                    "updated_at": "2020-04-24T23:39:11.594Z"
                },
                {
                    "id": 930,
                    "text": "played a Clarinet in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 310,
                    "created_at": "2020-04-24T23:39:11.600Z",
                    "updated_at": "2020-04-24T23:39:11.600Z"
                }
            ]
        }
    },
    {
        "id": "311",
        "type": "card",
        "attributes": {
            "strategy": "Listen to the quiet voice",
            "notes": [
                {
                    "id": 931,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 311,
                    "created_at": "2020-04-24T23:39:11.607Z",
                    "updated_at": "2020-04-24T23:39:11.607Z"
                },
                {
                    "id": 932,
                    "text": "sampled a gnat eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 311,
                    "created_at": "2020-04-24T23:39:11.613Z",
                    "updated_at": "2020-04-24T23:39:11.613Z"
                },
                {
                    "id": 933,
                    "text": "played a Cello in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 311,
                    "created_at": "2020-04-24T23:39:11.620Z",
                    "updated_at": "2020-04-24T23:39:11.620Z"
                }
            ]
        }
    },
    {
        "id": "312",
        "type": "card",
        "attributes": {
            "strategy": "Look at the order in which you do things",
            "notes": [
                {
                    "id": 934,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 312,
                    "created_at": "2020-04-24T23:39:11.625Z",
                    "updated_at": "2020-04-24T23:39:11.625Z"
                },
                {
                    "id": 935,
                    "text": "sampled a dog eating Goji Berry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 312,
                    "created_at": "2020-04-24T23:39:11.631Z",
                    "updated_at": "2020-04-24T23:39:11.631Z"
                },
                {
                    "id": 936,
                    "text": "played a Organ in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 312,
                    "created_at": "2020-04-24T23:39:11.636Z",
                    "updated_at": "2020-04-24T23:39:11.636Z"
                }
            ]
        }
    },
    {
        "id": "313",
        "type": "card",
        "attributes": {
            "strategy": "Look closely at the most embarrassing details and amplify them",
            "notes": [
                {
                    "id": 937,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 313,
                    "created_at": "2020-04-24T23:39:11.641Z",
                    "updated_at": "2020-04-24T23:39:11.641Z"
                },
                {
                    "id": 938,
                    "text": "sampled a bear eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 313,
                    "created_at": "2020-04-24T23:39:11.646Z",
                    "updated_at": "2020-04-24T23:39:11.646Z"
                },
                {
                    "id": 939,
                    "text": "played a Oboe in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 313,
                    "created_at": "2020-04-24T23:39:11.652Z",
                    "updated_at": "2020-04-24T23:39:11.652Z"
                }
            ]
        }
    },
    {
        "id": "314",
        "type": "card",
        "attributes": {
            "strategy": "Lost in useless territory",
            "notes": [
                {
                    "id": 940,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 314,
                    "created_at": "2020-04-24T23:39:11.658Z",
                    "updated_at": "2020-04-24T23:39:11.658Z"
                },
                {
                    "id": 941,
                    "text": "sampled a herring eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 314,
                    "created_at": "2020-04-24T23:39:11.664Z",
                    "updated_at": "2020-04-24T23:39:11.664Z"
                },
                {
                    "id": 942,
                    "text": "played a Organ in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 314,
                    "created_at": "2020-04-24T23:39:11.669Z",
                    "updated_at": "2020-04-24T23:39:11.669Z"
                }
            ]
        }
    },
    {
        "id": "315",
        "type": "card",
        "attributes": {
            "strategy": "Lowest common denominator",
            "notes": [
                {
                    "id": 943,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 315,
                    "created_at": "2020-04-24T23:39:11.675Z",
                    "updated_at": "2020-04-24T23:39:11.675Z"
                },
                {
                    "id": 944,
                    "text": "sampled a camel eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 315,
                    "created_at": "2020-04-24T23:39:11.681Z",
                    "updated_at": "2020-04-24T23:39:11.681Z"
                },
                {
                    "id": 945,
                    "text": "played a Trumpet in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 315,
                    "created_at": "2020-04-24T23:39:11.686Z",
                    "updated_at": "2020-04-24T23:39:11.686Z"
                }
            ]
        }
    },
    {
        "id": "316",
        "type": "card",
        "attributes": {
            "strategy": "Make a blank valuable by putting it in an exquisite frame",
            "notes": [
                {
                    "id": 946,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 316,
                    "created_at": "2020-04-24T23:39:11.692Z",
                    "updated_at": "2020-04-24T23:39:11.692Z"
                },
                {
                    "id": 947,
                    "text": "sampled a eel eating Dragonfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 316,
                    "created_at": "2020-04-24T23:39:11.698Z",
                    "updated_at": "2020-04-24T23:39:11.698Z"
                },
                {
                    "id": 948,
                    "text": "played a Harp in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 316,
                    "created_at": "2020-04-24T23:39:11.704Z",
                    "updated_at": "2020-04-24T23:39:11.704Z"
                }
            ]
        }
    },
    {
        "id": "317",
        "type": "card",
        "attributes": {
            "strategy": "Make an exhaustive list of everything you might do and do the last thing on the list",
            "notes": [
                {
                    "id": 949,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 317,
                    "created_at": "2020-04-24T23:39:11.710Z",
                    "updated_at": "2020-04-24T23:39:11.710Z"
                },
                {
                    "id": 950,
                    "text": "sampled a panda eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 317,
                    "created_at": "2020-04-24T23:39:11.715Z",
                    "updated_at": "2020-04-24T23:39:11.715Z"
                },
                {
                    "id": 951,
                    "text": "played a Accordion in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 317,
                    "created_at": "2020-04-24T23:39:11.720Z",
                    "updated_at": "2020-04-24T23:39:11.720Z"
                }
            ]
        }
    },
    {
        "id": "318",
        "type": "card",
        "attributes": {
            "strategy": "Make a sudden, destructive unpredictable action; incorporate",
            "notes": [
                {
                    "id": 952,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 318,
                    "created_at": "2020-04-24T23:39:11.725Z",
                    "updated_at": "2020-04-24T23:39:11.725Z"
                },
                {
                    "id": 953,
                    "text": "sampled a chimpanzee eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 318,
                    "created_at": "2020-04-24T23:39:11.731Z",
                    "updated_at": "2020-04-24T23:39:11.731Z"
                },
                {
                    "id": 954,
                    "text": "played a Oboe in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 318,
                    "created_at": "2020-04-24T23:39:11.736Z",
                    "updated_at": "2020-04-24T23:39:11.736Z"
                }
            ]
        }
    },
    {
        "id": "319",
        "type": "card",
        "attributes": {
            "strategy": "Mechanicalise something idiosyncratic",
            "notes": [
                {
                    "id": 955,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 319,
                    "created_at": "2020-04-24T23:39:11.741Z",
                    "updated_at": "2020-04-24T23:39:11.741Z"
                },
                {
                    "id": 956,
                    "text": "sampled a crab eating Guava",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 319,
                    "created_at": "2020-04-24T23:39:11.746Z",
                    "updated_at": "2020-04-24T23:39:11.746Z"
                },
                {
                    "id": 957,
                    "text": "played a Accordion in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 319,
                    "created_at": "2020-04-24T23:39:11.751Z",
                    "updated_at": "2020-04-24T23:39:11.751Z"
                }
            ]
        }
    },
    {
        "id": "320",
        "type": "card",
        "attributes": {
            "strategy": "Mute and continue",
            "notes": [
                {
                    "id": 958,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 320,
                    "created_at": "2020-04-24T23:39:11.758Z",
                    "updated_at": "2020-04-24T23:39:11.758Z"
                },
                {
                    "id": 959,
                    "text": "sampled a wallaby eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 320,
                    "created_at": "2020-04-24T23:39:11.763Z",
                    "updated_at": "2020-04-24T23:39:11.763Z"
                },
                {
                    "id": 960,
                    "text": "played a Harmonica in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 320,
                    "created_at": "2020-04-24T23:39:11.770Z",
                    "updated_at": "2020-04-24T23:39:11.770Z"
                }
            ]
        }
    },
    {
        "id": "321",
        "type": "card",
        "attributes": {
            "strategy": "Not building a wall but making a brick",
            "notes": [
                {
                    "id": 961,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 321,
                    "created_at": "2020-04-24T23:39:11.776Z",
                    "updated_at": "2020-04-24T23:39:11.776Z"
                },
                {
                    "id": 962,
                    "text": "sampled a wallaby eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 321,
                    "created_at": "2020-04-24T23:39:11.783Z",
                    "updated_at": "2020-04-24T23:39:11.783Z"
                },
                {
                    "id": 963,
                    "text": "played a Harmonica in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 321,
                    "created_at": "2020-04-24T23:39:11.790Z",
                    "updated_at": "2020-04-24T23:39:11.790Z"
                }
            ]
        }
    },
    {
        "id": "322",
        "type": "card",
        "attributes": {
            "strategy": "Once the search is in progress, something will be found",
            "notes": [
                {
                    "id": 964,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 322,
                    "created_at": "2020-04-24T23:39:11.795Z",
                    "updated_at": "2020-04-24T23:39:11.795Z"
                },
                {
                    "id": 965,
                    "text": "sampled a salmon eating Tangelo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 322,
                    "created_at": "2020-04-24T23:39:11.801Z",
                    "updated_at": "2020-04-24T23:39:11.801Z"
                },
                {
                    "id": 966,
                    "text": "played a Violin in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 322,
                    "created_at": "2020-04-24T23:39:11.807Z",
                    "updated_at": "2020-04-24T23:39:11.807Z"
                }
            ]
        }
    },
    {
        "id": "323",
        "type": "card",
        "attributes": {
            "strategy": "Only a part, not the whole",
            "notes": [
                {
                    "id": 967,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 323,
                    "created_at": "2020-04-24T23:39:11.813Z",
                    "updated_at": "2020-04-24T23:39:11.813Z"
                },
                {
                    "id": 968,
                    "text": "sampled a fish eating Mulberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 323,
                    "created_at": "2020-04-24T23:39:11.818Z",
                    "updated_at": "2020-04-24T23:39:11.818Z"
                },
                {
                    "id": 969,
                    "text": "played a Oboe in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 323,
                    "created_at": "2020-04-24T23:39:11.824Z",
                    "updated_at": "2020-04-24T23:39:11.824Z"
                }
            ]
        }
    },
    {
        "id": "324",
        "type": "card",
        "attributes": {
            "strategy": "Only one element of each kind",
            "notes": [
                {
                    "id": 970,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 324,
                    "created_at": "2020-04-24T23:39:11.829Z",
                    "updated_at": "2020-04-24T23:39:11.829Z"
                },
                {
                    "id": 971,
                    "text": "sampled a hedgehog eating Peaches",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 324,
                    "created_at": "2020-04-24T23:39:11.835Z",
                    "updated_at": "2020-04-24T23:39:11.835Z"
                },
                {
                    "id": 972,
                    "text": "played a Accordion in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 324,
                    "created_at": "2020-04-24T23:39:11.840Z",
                    "updated_at": "2020-04-24T23:39:11.840Z"
                }
            ]
        }
    },
    {
        "id": "325",
        "type": "card",
        "attributes": {
            "strategy": "(Organic) machinery",
            "notes": [
                {
                    "id": 973,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 325,
                    "created_at": "2020-04-24T23:39:11.854Z",
                    "updated_at": "2020-04-24T23:39:11.854Z"
                },
                {
                    "id": 974,
                    "text": "sampled a mammoth eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 325,
                    "created_at": "2020-04-24T23:39:11.860Z",
                    "updated_at": "2020-04-24T23:39:11.860Z"
                },
                {
                    "id": 975,
                    "text": "played a Electric Guitar in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 325,
                    "created_at": "2020-04-24T23:39:11.866Z",
                    "updated_at": "2020-04-24T23:39:11.866Z"
                }
            ]
        }
    },
    {
        "id": "326",
        "type": "card",
        "attributes": {
            "strategy": "Overtly resist change",
            "notes": [
                {
                    "id": 976,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 326,
                    "created_at": "2020-04-24T23:39:11.871Z",
                    "updated_at": "2020-04-24T23:39:11.871Z"
                },
                {
                    "id": 977,
                    "text": "sampled a ant eating Figs",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 326,
                    "created_at": "2020-04-24T23:39:11.877Z",
                    "updated_at": "2020-04-24T23:39:11.877Z"
                },
                {
                    "id": 978,
                    "text": "played a Ukelele in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 326,
                    "created_at": "2020-04-24T23:39:11.889Z",
                    "updated_at": "2020-04-24T23:39:11.889Z"
                }
            ]
        }
    },
    {
        "id": "327",
        "type": "card",
        "attributes": {
            "strategy": "Question the heroic approach",
            "notes": [
                {
                    "id": 979,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 327,
                    "created_at": "2020-04-24T23:39:11.895Z",
                    "updated_at": "2020-04-24T23:39:11.895Z"
                },
                {
                    "id": 980,
                    "text": "sampled a squirrel eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 327,
                    "created_at": "2020-04-24T23:39:11.902Z",
                    "updated_at": "2020-04-24T23:39:11.902Z"
                },
                {
                    "id": 981,
                    "text": "played a Oboe in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 327,
                    "created_at": "2020-04-24T23:39:11.907Z",
                    "updated_at": "2020-04-24T23:39:11.907Z"
                }
            ]
        }
    },
    {
        "id": "328",
        "type": "card",
        "attributes": {
            "strategy": "Remember .those quiet evenings",
            "notes": [
                {
                    "id": 982,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 328,
                    "created_at": "2020-04-24T23:39:11.913Z",
                    "updated_at": "2020-04-24T23:39:11.913Z"
                },
                {
                    "id": 983,
                    "text": "sampled a locust eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 328,
                    "created_at": "2020-04-24T23:39:11.918Z",
                    "updated_at": "2020-04-24T23:39:11.918Z"
                },
                {
                    "id": 984,
                    "text": "played a Electric Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 328,
                    "created_at": "2020-04-24T23:39:11.924Z",
                    "updated_at": "2020-04-24T23:39:11.924Z"
                }
            ]
        }
    },
    {
        "id": "329",
        "type": "card",
        "attributes": {
            "strategy": "Remove ambiguities and convert to specifics",
            "notes": [
                {
                    "id": 985,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 329,
                    "created_at": "2020-04-24T23:39:11.930Z",
                    "updated_at": "2020-04-24T23:39:11.930Z"
                },
                {
                    "id": 986,
                    "text": "sampled a pug eating Pineapple",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 329,
                    "created_at": "2020-04-24T23:39:11.935Z",
                    "updated_at": "2020-04-24T23:39:11.935Z"
                },
                {
                    "id": 987,
                    "text": "played a Piano in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 329,
                    "created_at": "2020-04-24T23:39:11.941Z",
                    "updated_at": "2020-04-24T23:39:11.941Z"
                }
            ]
        }
    },
    {
        "id": "330",
        "type": "card",
        "attributes": {
            "strategy": "Remove specifics and convert to ambiguities",
            "notes": [
                {
                    "id": 988,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 330,
                    "created_at": "2020-04-24T23:39:11.947Z",
                    "updated_at": "2020-04-24T23:39:11.947Z"
                },
                {
                    "id": 989,
                    "text": "sampled a pig eating Honeydew melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 330,
                    "created_at": "2020-04-24T23:39:11.953Z",
                    "updated_at": "2020-04-24T23:39:11.953Z"
                },
                {
                    "id": 990,
                    "text": "played a Cello in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 330,
                    "created_at": "2020-04-24T23:39:11.960Z",
                    "updated_at": "2020-04-24T23:39:11.960Z"
                }
            ]
        }
    },
    {
        "id": "331",
        "type": "card",
        "attributes": {
            "strategy": "Repetition is a form of change",
            "notes": [
                {
                    "id": 991,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 331,
                    "created_at": "2020-04-24T23:39:11.966Z",
                    "updated_at": "2020-04-24T23:39:11.966Z"
                },
                {
                    "id": 992,
                    "text": "sampled a moose eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 331,
                    "created_at": "2020-04-24T23:39:11.976Z",
                    "updated_at": "2020-04-24T23:39:11.976Z"
                },
                {
                    "id": 993,
                    "text": "played a Piano in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 331,
                    "created_at": "2020-04-24T23:39:11.982Z",
                    "updated_at": "2020-04-24T23:39:11.982Z"
                }
            ]
        }
    },
    {
        "id": "332",
        "type": "card",
        "attributes": {
            "strategy": "Retrace your steps",
            "notes": [
                {
                    "id": 994,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 332,
                    "created_at": "2020-04-24T23:39:11.988Z",
                    "updated_at": "2020-04-24T23:39:11.988Z"
                },
                {
                    "id": 995,
                    "text": "sampled a donkey eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 332,
                    "created_at": "2020-04-24T23:39:11.994Z",
                    "updated_at": "2020-04-24T23:39:11.994Z"
                },
                {
                    "id": 996,
                    "text": "played a Harp in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 332,
                    "created_at": "2020-04-24T23:39:12.008Z",
                    "updated_at": "2020-04-24T23:39:12.008Z"
                }
            ]
        }
    },
    {
        "id": "333",
        "type": "card",
        "attributes": {
            "strategy": "Revaluation (a warm feeling)",
            "notes": [
                {
                    "id": 997,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 333,
                    "created_at": "2020-04-24T23:39:12.015Z",
                    "updated_at": "2020-04-24T23:39:12.015Z"
                },
                {
                    "id": 998,
                    "text": "sampled a pug eating Apricots",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 333,
                    "created_at": "2020-04-24T23:39:12.022Z",
                    "updated_at": "2020-04-24T23:39:12.022Z"
                },
                {
                    "id": 999,
                    "text": "played a Accordion in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 333,
                    "created_at": "2020-04-24T23:39:12.028Z",
                    "updated_at": "2020-04-24T23:39:12.028Z"
                }
            ]
        }
    },
    {
        "id": "334",
        "type": "card",
        "attributes": {
            "strategy": "Reverse",
            "notes": [
                {
                    "id": 1000,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 334,
                    "created_at": "2020-04-24T23:39:12.034Z",
                    "updated_at": "2020-04-24T23:39:12.034Z"
                },
                {
                    "id": 1001,
                    "text": "sampled a platypus eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 334,
                    "created_at": "2020-04-24T23:39:12.039Z",
                    "updated_at": "2020-04-24T23:39:12.039Z"
                },
                {
                    "id": 1002,
                    "text": "played a Accordion in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 334,
                    "created_at": "2020-04-24T23:39:12.044Z",
                    "updated_at": "2020-04-24T23:39:12.044Z"
                }
            ]
        }
    },
    {
        "id": "335",
        "type": "card",
        "attributes": {
            "strategy": "Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
            "notes": [
                {
                    "id": 1003,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 335,
                    "created_at": "2020-04-24T23:39:12.051Z",
                    "updated_at": "2020-04-24T23:39:12.051Z"
                },
                {
                    "id": 1004,
                    "text": "sampled a fox eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 335,
                    "created_at": "2020-04-24T23:39:12.058Z",
                    "updated_at": "2020-04-24T23:39:12.058Z"
                },
                {
                    "id": 1005,
                    "text": "played a Xylophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 335,
                    "created_at": "2020-04-24T23:39:12.063Z",
                    "updated_at": "2020-04-24T23:39:12.063Z"
                }
            ]
        }
    },
    {
        "id": "336",
        "type": "card",
        "attributes": {
            "strategy": "Simple subtraction",
            "notes": [
                {
                    "id": 1006,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 336,
                    "created_at": "2020-04-24T23:39:12.069Z",
                    "updated_at": "2020-04-24T23:39:12.069Z"
                },
                {
                    "id": 1007,
                    "text": "sampled a frog eating Juniper Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 336,
                    "created_at": "2020-04-24T23:39:12.075Z",
                    "updated_at": "2020-04-24T23:39:12.075Z"
                },
                {
                    "id": 1008,
                    "text": "played a Piano in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 336,
                    "created_at": "2020-04-24T23:39:12.080Z",
                    "updated_at": "2020-04-24T23:39:12.080Z"
                }
            ]
        }
    },
    {
        "id": "337",
        "type": "card",
        "attributes": {
            "strategy": "Simply a matter of work",
            "notes": [
                {
                    "id": 1009,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 337,
                    "created_at": "2020-04-24T23:39:12.085Z",
                    "updated_at": "2020-04-24T23:39:12.085Z"
                },
                {
                    "id": 1010,
                    "text": "sampled a snake eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 337,
                    "created_at": "2020-04-24T23:39:12.090Z",
                    "updated_at": "2020-04-24T23:39:12.090Z"
                },
                {
                    "id": 1011,
                    "text": "played a Saxophone in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 337,
                    "created_at": "2020-04-24T23:39:12.095Z",
                    "updated_at": "2020-04-24T23:39:12.095Z"
                }
            ]
        }
    },
    {
        "id": "338",
        "type": "card",
        "attributes": {
            "strategy": "State the problem in words as clearly as possible",
            "notes": [
                {
                    "id": 1012,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 338,
                    "created_at": "2020-04-24T23:39:12.100Z",
                    "updated_at": "2020-04-24T23:39:12.100Z"
                },
                {
                    "id": 1013,
                    "text": "sampled a ape eating Dragonfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 338,
                    "created_at": "2020-04-24T23:39:12.106Z",
                    "updated_at": "2020-04-24T23:39:12.106Z"
                },
                {
                    "id": 1014,
                    "text": "played a Oboe in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 338,
                    "created_at": "2020-04-24T23:39:12.111Z",
                    "updated_at": "2020-04-24T23:39:12.111Z"
                }
            ]
        }
    },
    {
        "id": "339",
        "type": "card",
        "attributes": {
            "strategy": "Take a break",
            "notes": [
                {
                    "id": 1015,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 339,
                    "created_at": "2020-04-24T23:39:12.116Z",
                    "updated_at": "2020-04-24T23:39:12.116Z"
                },
                {
                    "id": 1016,
                    "text": "sampled a reindeer eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 339,
                    "created_at": "2020-04-24T23:39:12.121Z",
                    "updated_at": "2020-04-24T23:39:12.121Z"
                },
                {
                    "id": 1017,
                    "text": "played a Harmonica in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 339,
                    "created_at": "2020-04-24T23:39:12.127Z",
                    "updated_at": "2020-04-24T23:39:12.127Z"
                }
            ]
        }
    },
    {
        "id": "340",
        "type": "card",
        "attributes": {
            "strategy": "Take away the elements in order of apparent non-importance",
            "notes": [
                {
                    "id": 1018,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 340,
                    "created_at": "2020-04-24T23:39:12.132Z",
                    "updated_at": "2020-04-24T23:39:12.132Z"
                },
                {
                    "id": 1019,
                    "text": "sampled a gnat eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 340,
                    "created_at": "2020-04-24T23:39:12.138Z",
                    "updated_at": "2020-04-24T23:39:12.138Z"
                },
                {
                    "id": 1020,
                    "text": "played a Electric Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 340,
                    "created_at": "2020-04-24T23:39:12.143Z",
                    "updated_at": "2020-04-24T23:39:12.143Z"
                }
            ]
        }
    },
    {
        "id": "341",
        "type": "card",
        "attributes": {
            "strategy": "The inconsistency principle",
            "notes": [
                {
                    "id": 1021,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 341,
                    "created_at": "2020-04-24T23:39:12.148Z",
                    "updated_at": "2020-04-24T23:39:12.148Z"
                },
                {
                    "id": 1022,
                    "text": "sampled a wolf eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 341,
                    "created_at": "2020-04-24T23:39:12.154Z",
                    "updated_at": "2020-04-24T23:39:12.154Z"
                },
                {
                    "id": 1023,
                    "text": "played a Organ in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 341,
                    "created_at": "2020-04-24T23:39:12.160Z",
                    "updated_at": "2020-04-24T23:39:12.160Z"
                }
            ]
        }
    },
    {
        "id": "342",
        "type": "card",
        "attributes": {
            "strategy": "The most important thing is the thing most easily forgotten",
            "notes": [
                {
                    "id": 1024,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 342,
                    "created_at": "2020-04-24T23:39:12.166Z",
                    "updated_at": "2020-04-24T23:39:12.166Z"
                },
                {
                    "id": 1025,
                    "text": "sampled a mole eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 342,
                    "created_at": "2020-04-24T23:39:12.171Z",
                    "updated_at": "2020-04-24T23:39:12.171Z"
                },
                {
                    "id": 1026,
                    "text": "played a Harmonica in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 342,
                    "created_at": "2020-04-24T23:39:12.176Z",
                    "updated_at": "2020-04-24T23:39:12.176Z"
                }
            ]
        }
    },
    {
        "id": "343",
        "type": "card",
        "attributes": {
            "strategy": "The tape is now the music",
            "notes": [
                {
                    "id": 1027,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 343,
                    "created_at": "2020-04-24T23:39:12.182Z",
                    "updated_at": "2020-04-24T23:39:12.182Z"
                },
                {
                    "id": 1028,
                    "text": "sampled a dinosaur eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 343,
                    "created_at": "2020-04-24T23:39:12.189Z",
                    "updated_at": "2020-04-24T23:39:12.189Z"
                },
                {
                    "id": 1029,
                    "text": "played a Accordion in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 343,
                    "created_at": "2020-04-24T23:39:12.196Z",
                    "updated_at": "2020-04-24T23:39:12.196Z"
                }
            ]
        }
    },
    {
        "id": "344",
        "type": "card",
        "attributes": {
            "strategy": "Think of the radio",
            "notes": [
                {
                    "id": 1030,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 344,
                    "created_at": "2020-04-24T23:39:12.210Z",
                    "updated_at": "2020-04-24T23:39:12.210Z"
                },
                {
                    "id": 1031,
                    "text": "sampled a tortoise eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 344,
                    "created_at": "2020-04-24T23:39:12.215Z",
                    "updated_at": "2020-04-24T23:39:12.215Z"
                },
                {
                    "id": 1032,
                    "text": "played a Harmonica in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 344,
                    "created_at": "2020-04-24T23:39:12.221Z",
                    "updated_at": "2020-04-24T23:39:12.221Z"
                }
            ]
        }
    },
    {
        "id": "345",
        "type": "card",
        "attributes": {
            "strategy": "Tidy up",
            "notes": [
                {
                    "id": 1033,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 345,
                    "created_at": "2020-04-24T23:39:12.226Z",
                    "updated_at": "2020-04-24T23:39:12.226Z"
                },
                {
                    "id": 1034,
                    "text": "sampled a llama eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 345,
                    "created_at": "2020-04-24T23:39:12.232Z",
                    "updated_at": "2020-04-24T23:39:12.232Z"
                },
                {
                    "id": 1035,
                    "text": "played a Harp in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 345,
                    "created_at": "2020-04-24T23:39:12.238Z",
                    "updated_at": "2020-04-24T23:39:12.238Z"
                }
            ]
        }
    },
    {
        "id": "346",
        "type": "card",
        "attributes": {
            "strategy": "Towards the insignificant",
            "notes": [
                {
                    "id": 1036,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 346,
                    "created_at": "2020-04-24T23:39:12.246Z",
                    "updated_at": "2020-04-24T23:39:12.246Z"
                },
                {
                    "id": 1037,
                    "text": "sampled a shark eating Sprouts",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 346,
                    "created_at": "2020-04-24T23:39:12.253Z",
                    "updated_at": "2020-04-24T23:39:12.253Z"
                },
                {
                    "id": 1038,
                    "text": "played a Piano in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 346,
                    "created_at": "2020-04-24T23:39:12.258Z",
                    "updated_at": "2020-04-24T23:39:12.258Z"
                }
            ]
        }
    },
    {
        "id": "347",
        "type": "card",
        "attributes": {
            "strategy": "Trust in the you of now",
            "notes": [
                {
                    "id": 1039,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 347,
                    "created_at": "2020-04-24T23:39:12.265Z",
                    "updated_at": "2020-04-24T23:39:12.265Z"
                },
                {
                    "id": 1040,
                    "text": "sampled a beaver eating Custard Apples Daikon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 347,
                    "created_at": "2020-04-24T23:39:12.270Z",
                    "updated_at": "2020-04-24T23:39:12.270Z"
                },
                {
                    "id": 1041,
                    "text": "played a Acoustic Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 347,
                    "created_at": "2020-04-24T23:39:12.276Z",
                    "updated_at": "2020-04-24T23:39:12.276Z"
                }
            ]
        }
    },
    {
        "id": "348",
        "type": "card",
        "attributes": {
            "strategy": "Turn it upside down",
            "notes": [
                {
                    "id": 1042,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 348,
                    "created_at": "2020-04-24T23:39:12.281Z",
                    "updated_at": "2020-04-24T23:39:12.281Z"
                },
                {
                    "id": 1043,
                    "text": "sampled a grasshopper eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 348,
                    "created_at": "2020-04-24T23:39:12.287Z",
                    "updated_at": "2020-04-24T23:39:12.287Z"
                },
                {
                    "id": 1044,
                    "text": "played a Oboe in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 348,
                    "created_at": "2020-04-24T23:39:12.292Z",
                    "updated_at": "2020-04-24T23:39:12.292Z"
                }
            ]
        }
    },
    {
        "id": "349",
        "type": "card",
        "attributes": {
            "strategy": "Use an old idea",
            "notes": [
                {
                    "id": 1045,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 349,
                    "created_at": "2020-04-24T23:39:12.298Z",
                    "updated_at": "2020-04-24T23:39:12.298Z"
                },
                {
                    "id": 1046,
                    "text": "sampled a goose eating Tomatoes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 349,
                    "created_at": "2020-04-24T23:39:12.304Z",
                    "updated_at": "2020-04-24T23:39:12.304Z"
                },
                {
                    "id": 1047,
                    "text": "played a Violin in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 349,
                    "created_at": "2020-04-24T23:39:12.311Z",
                    "updated_at": "2020-04-24T23:39:12.311Z"
                }
            ]
        }
    },
    {
        "id": "350",
        "type": "card",
        "attributes": {
            "strategy": "Use an unacceptable colour",
            "notes": [
                {
                    "id": 1048,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 350,
                    "created_at": "2020-04-24T23:39:12.320Z",
                    "updated_at": "2020-04-24T23:39:12.320Z"
                },
                {
                    "id": 1049,
                    "text": "sampled a fox eating Mandarins",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 350,
                    "created_at": "2020-04-24T23:39:12.327Z",
                    "updated_at": "2020-04-24T23:39:12.327Z"
                },
                {
                    "id": 1050,
                    "text": "played a Piano in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 350,
                    "created_at": "2020-04-24T23:39:12.333Z",
                    "updated_at": "2020-04-24T23:39:12.333Z"
                }
            ]
        }
    },
    {
        "id": "351",
        "type": "card",
        "attributes": {
            "strategy": "Use fewer notes",
            "notes": [
                {
                    "id": 1051,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 351,
                    "created_at": "2020-04-24T23:39:12.339Z",
                    "updated_at": "2020-04-24T23:39:12.339Z"
                },
                {
                    "id": 1052,
                    "text": "sampled a turtle  eating Watermelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 351,
                    "created_at": "2020-04-24T23:39:12.346Z",
                    "updated_at": "2020-04-24T23:39:12.346Z"
                },
                {
                    "id": 1053,
                    "text": "played a Clarinet in the key of D",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 351,
                    "created_at": "2020-04-24T23:39:12.352Z",
                    "updated_at": "2020-04-24T23:39:12.352Z"
                }
            ]
        }
    },
    {
        "id": "352",
        "type": "card",
        "attributes": {
            "strategy": "Use filters",
            "notes": [
                {
                    "id": 1054,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 352,
                    "created_at": "2020-04-24T23:39:12.361Z",
                    "updated_at": "2020-04-24T23:39:12.361Z"
                },
                {
                    "id": 1055,
                    "text": "sampled a coyote eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 352,
                    "created_at": "2020-04-24T23:39:12.367Z",
                    "updated_at": "2020-04-24T23:39:12.367Z"
                },
                {
                    "id": 1056,
                    "text": "played a Flute in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 352,
                    "created_at": "2020-04-24T23:39:12.376Z",
                    "updated_at": "2020-04-24T23:39:12.376Z"
                }
            ]
        }
    },
    {
        "id": "353",
        "type": "card",
        "attributes": {
            "strategy": "Use 'unqualified' people",
            "notes": [
                {
                    "id": 1057,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 353,
                    "created_at": "2020-04-24T23:39:12.382Z",
                    "updated_at": "2020-04-24T23:39:12.382Z"
                },
                {
                    "id": 1058,
                    "text": "sampled a monkey eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 353,
                    "created_at": "2020-04-24T23:39:12.388Z",
                    "updated_at": "2020-04-24T23:39:12.388Z"
                },
                {
                    "id": 1059,
                    "text": "played a Acoustic Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 353,
                    "created_at": "2020-04-24T23:39:12.393Z",
                    "updated_at": "2020-04-24T23:39:12.393Z"
                }
            ]
        }
    },
    {
        "id": "354",
        "type": "card",
        "attributes": {
            "strategy": "Water",
            "notes": [
                {
                    "id": 1060,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 354,
                    "created_at": "2020-04-24T23:39:12.399Z",
                    "updated_at": "2020-04-24T23:39:12.399Z"
                },
                {
                    "id": 1061,
                    "text": "sampled a gorilla eating Sultanas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 354,
                    "created_at": "2020-04-24T23:39:12.404Z",
                    "updated_at": "2020-04-24T23:39:12.404Z"
                },
                {
                    "id": 1062,
                    "text": "played a Acoustic Guitar in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 354,
                    "created_at": "2020-04-24T23:39:12.409Z",
                    "updated_at": "2020-04-24T23:39:12.409Z"
                }
            ]
        }
    },
    {
        "id": "355",
        "type": "card",
        "attributes": {
            "strategy": "What are the sections sections of? Imagine a caterpillar moving",
            "notes": [
                {
                    "id": 1063,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 355,
                    "created_at": "2020-04-24T23:39:12.414Z",
                    "updated_at": "2020-04-24T23:39:12.414Z"
                },
                {
                    "id": 1064,
                    "text": "sampled a platypus eating Cumquat",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 355,
                    "created_at": "2020-04-24T23:39:12.420Z",
                    "updated_at": "2020-04-24T23:39:12.420Z"
                },
                {
                    "id": 1065,
                    "text": "played a Harmonica in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 355,
                    "created_at": "2020-04-24T23:39:12.425Z",
                    "updated_at": "2020-04-24T23:39:12.425Z"
                }
            ]
        }
    },
    {
        "id": "356",
        "type": "card",
        "attributes": {
            "strategy": "What are you really thinking about just now?",
            "notes": [
                {
                    "id": 1066,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 356,
                    "created_at": "2020-04-24T23:39:12.431Z",
                    "updated_at": "2020-04-24T23:39:12.431Z"
                },
                {
                    "id": 1067,
                    "text": "sampled a baboon eating Oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 356,
                    "created_at": "2020-04-24T23:39:12.437Z",
                    "updated_at": "2020-04-24T23:39:12.437Z"
                },
                {
                    "id": 1068,
                    "text": "played a Clarinet in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 356,
                    "created_at": "2020-04-24T23:39:12.444Z",
                    "updated_at": "2020-04-24T23:39:12.444Z"
                }
            ]
        }
    },
    {
        "id": "357",
        "type": "card",
        "attributes": {
            "strategy": "What is the reality of the situation?",
            "notes": [
                {
                    "id": 1069,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 357,
                    "created_at": "2020-04-24T23:39:12.449Z",
                    "updated_at": "2020-04-24T23:39:12.449Z"
                },
                {
                    "id": 1070,
                    "text": "sampled a hamster eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 357,
                    "created_at": "2020-04-24T23:39:12.456Z",
                    "updated_at": "2020-04-24T23:39:12.456Z"
                },
                {
                    "id": 1071,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 357,
                    "created_at": "2020-04-24T23:39:12.462Z",
                    "updated_at": "2020-04-24T23:39:12.462Z"
                }
            ]
        }
    },
    {
        "id": "358",
        "type": "card",
        "attributes": {
            "strategy": "What mistakes did you make last time?",
            "notes": [
                {
                    "id": 1072,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 358,
                    "created_at": "2020-04-24T23:39:12.468Z",
                    "updated_at": "2020-04-24T23:39:12.468Z"
                },
                {
                    "id": 1073,
                    "text": "sampled a seal  eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 358,
                    "created_at": "2020-04-24T23:39:12.474Z",
                    "updated_at": "2020-04-24T23:39:12.474Z"
                },
                {
                    "id": 1074,
                    "text": "played a Accordion in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 358,
                    "created_at": "2020-04-24T23:39:12.480Z",
                    "updated_at": "2020-04-24T23:39:12.480Z"
                }
            ]
        }
    },
    {
        "id": "359",
        "type": "card",
        "attributes": {
            "strategy": "What wouldn't you do?",
            "notes": [
                {
                    "id": 1075,
                    "text": "wrote a song for the Capricornus constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 359,
                    "created_at": "2020-04-24T23:39:12.492Z",
                    "updated_at": "2020-04-24T23:39:12.492Z"
                },
                {
                    "id": 1076,
                    "text": "sampled a gnu eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 359,
                    "created_at": "2020-04-24T23:39:12.498Z",
                    "updated_at": "2020-04-24T23:39:12.498Z"
                },
                {
                    "id": 1077,
                    "text": "played a Organ in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 359,
                    "created_at": "2020-04-24T23:39:12.505Z",
                    "updated_at": "2020-04-24T23:39:12.505Z"
                }
            ]
        }
    },
    {
        "id": "360",
        "type": "card",
        "attributes": {
            "strategy": "What would your closest friend do?",
            "notes": [
                {
                    "id": 1078,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 360,
                    "created_at": "2020-04-24T23:39:12.512Z",
                    "updated_at": "2020-04-24T23:39:12.512Z"
                },
                {
                    "id": 1079,
                    "text": "sampled a woodchuck eating Cavalo",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 360,
                    "created_at": "2020-04-24T23:39:12.520Z",
                    "updated_at": "2020-04-24T23:39:12.520Z"
                },
                {
                    "id": 1080,
                    "text": "played a Xylophone in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 360,
                    "created_at": "2020-04-24T23:39:12.526Z",
                    "updated_at": "2020-04-24T23:39:12.526Z"
                }
            ]
        }
    },
    {
        "id": "361",
        "type": "card",
        "attributes": {
            "strategy": "Work at a different speed",
            "notes": [
                {
                    "id": 1081,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 361,
                    "created_at": "2020-04-24T23:39:12.533Z",
                    "updated_at": "2020-04-24T23:39:12.533Z"
                },
                {
                    "id": 1082,
                    "text": "sampled a oyster eating Bush Tomato",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 361,
                    "created_at": "2020-04-24T23:39:12.539Z",
                    "updated_at": "2020-04-24T23:39:12.539Z"
                },
                {
                    "id": 1083,
                    "text": "played a Saxophone in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 361,
                    "created_at": "2020-04-24T23:39:12.546Z",
                    "updated_at": "2020-04-24T23:39:12.546Z"
                }
            ]
        }
    },
    {
        "id": "362",
        "type": "card",
        "attributes": {
            "strategy": "Would anybody want it?",
            "notes": [
                {
                    "id": 1084,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 362,
                    "created_at": "2020-04-24T23:39:12.553Z",
                    "updated_at": "2020-04-24T23:39:12.553Z"
                },
                {
                    "id": 1085,
                    "text": "sampled a hyena eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 362,
                    "created_at": "2020-04-24T23:39:12.560Z",
                    "updated_at": "2020-04-24T23:39:12.560Z"
                },
                {
                    "id": 1086,
                    "text": "played a Harmonica in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 362,
                    "created_at": "2020-04-24T23:39:12.569Z",
                    "updated_at": "2020-04-24T23:39:12.569Z"
                }
            ]
        }
    },
    {
        "id": "363",
        "type": "card",
        "attributes": {
            "strategy": "You are an engineer",
            "notes": [
                {
                    "id": 1087,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 363,
                    "created_at": "2020-04-24T23:39:12.575Z",
                    "updated_at": "2020-04-24T23:39:12.575Z"
                },
                {
                    "id": 1088,
                    "text": "sampled a wildebeest eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 363,
                    "created_at": "2020-04-24T23:39:12.581Z",
                    "updated_at": "2020-04-24T23:39:12.581Z"
                },
                {
                    "id": 1089,
                    "text": "played a Harmonica in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 363,
                    "created_at": "2020-04-24T23:39:12.588Z",
                    "updated_at": "2020-04-24T23:39:12.588Z"
                }
            ]
        }
    },
    {
        "id": "364",
        "type": "card",
        "attributes": {
            "strategy": "You can only make one dot at a time",
            "notes": [
                {
                    "id": 1090,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 364,
                    "created_at": "2020-04-24T23:39:12.594Z",
                    "updated_at": "2020-04-24T23:39:12.594Z"
                },
                {
                    "id": 1091,
                    "text": "sampled a elephant eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 364,
                    "created_at": "2020-04-24T23:39:12.600Z",
                    "updated_at": "2020-04-24T23:39:12.600Z"
                },
                {
                    "id": 1092,
                    "text": "played a Piano in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 364,
                    "created_at": "2020-04-24T23:39:12.606Z",
                    "updated_at": "2020-04-24T23:39:12.606Z"
                }
            ]
        }
    },
    {
        "id": "365",
        "type": "card",
        "attributes": {
            "strategy": "You don't have to be ashamed of using your own ideas",
            "notes": [
                {
                    "id": 1093,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 365,
                    "created_at": "2020-04-24T23:39:12.612Z",
                    "updated_at": "2020-04-24T23:39:12.612Z"
                },
                {
                    "id": 1094,
                    "text": "sampled a weasel eating Custard Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 365,
                    "created_at": "2020-04-24T23:39:12.619Z",
                    "updated_at": "2020-04-24T23:39:12.619Z"
                },
                {
                    "id": 1095,
                    "text": "played a Trumpet in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 365,
                    "created_at": "2020-04-24T23:39:12.625Z",
                    "updated_at": "2020-04-24T23:39:12.625Z"
                }
            ]
        }
    },
    {
        "id": "366",
        "type": "card",
        "attributes": {
            "strategy": "[blank white card]",
            "notes": [
                {
                    "id": 1096,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 366,
                    "created_at": "2020-04-24T23:39:12.632Z",
                    "updated_at": "2020-04-24T23:39:12.632Z"
                },
                {
                    "id": 1097,
                    "text": "sampled a lizard eating Strawberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 366,
                    "created_at": "2020-04-24T23:39:12.638Z",
                    "updated_at": "2020-04-24T23:39:12.638Z"
                },
                {
                    "id": 1098,
                    "text": "played a Harmonica in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 366,
                    "created_at": "2020-04-24T23:39:12.644Z",
                    "updated_at": "2020-04-24T23:39:12.644Z"
                }
            ]
        }
    },
    {
        "id": "367",
        "type": "card",
        "attributes": {
            "strategy": "Abandon desire",
            "notes": [
                {
                    "id": 1099,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 367,
                    "created_at": "2020-04-24T23:39:12.652Z",
                    "updated_at": "2020-04-24T23:39:12.652Z"
                },
                {
                    "id": 1100,
                    "text": "sampled a pig eating Lemon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 367,
                    "created_at": "2020-04-24T23:39:12.660Z",
                    "updated_at": "2020-04-24T23:39:12.660Z"
                },
                {
                    "id": 1101,
                    "text": "played a Saxophone in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 367,
                    "created_at": "2020-04-24T23:39:12.666Z",
                    "updated_at": "2020-04-24T23:39:12.666Z"
                }
            ]
        }
    },
    {
        "id": "368",
        "type": "card",
        "attributes": {
            "strategy": "Abandon normal instructions",
            "notes": [
                {
                    "id": 1102,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 368,
                    "created_at": "2020-04-24T23:39:12.673Z",
                    "updated_at": "2020-04-24T23:39:12.673Z"
                },
                {
                    "id": 1103,
                    "text": "sampled a gnu eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 368,
                    "created_at": "2020-04-24T23:39:12.679Z",
                    "updated_at": "2020-04-24T23:39:12.679Z"
                },
                {
                    "id": 1104,
                    "text": "played a Drums in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 368,
                    "created_at": "2020-04-24T23:39:12.686Z",
                    "updated_at": "2020-04-24T23:39:12.686Z"
                }
            ]
        }
    },
    {
        "id": "369",
        "type": "card",
        "attributes": {
            "strategy": "Accept advice",
            "notes": [
                {
                    "id": 1105,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 369,
                    "created_at": "2020-04-24T23:39:12.694Z",
                    "updated_at": "2020-04-24T23:39:12.694Z"
                },
                {
                    "id": 1106,
                    "text": "sampled a ferret eating Sultanas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 369,
                    "created_at": "2020-04-24T23:39:12.700Z",
                    "updated_at": "2020-04-24T23:39:12.700Z"
                },
                {
                    "id": 1107,
                    "text": "played a Cello in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 369,
                    "created_at": "2020-04-24T23:39:12.707Z",
                    "updated_at": "2020-04-24T23:39:12.707Z"
                }
            ]
        }
    },
    {
        "id": "370",
        "type": "card",
        "attributes": {
            "strategy": "Adding on",
            "notes": [
                {
                    "id": 1108,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 370,
                    "created_at": "2020-04-24T23:39:12.714Z",
                    "updated_at": "2020-04-24T23:39:12.714Z"
                },
                {
                    "id": 1109,
                    "text": "sampled a sheep eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 370,
                    "created_at": "2020-04-24T23:39:12.720Z",
                    "updated_at": "2020-04-24T23:39:12.720Z"
                },
                {
                    "id": 1110,
                    "text": "played a Flute in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 370,
                    "created_at": "2020-04-24T23:39:12.728Z",
                    "updated_at": "2020-04-24T23:39:12.728Z"
                }
            ]
        }
    },
    {
        "id": "371",
        "type": "card",
        "attributes": {
            "strategy": "A line has two sides",
            "notes": [
                {
                    "id": 1111,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 371,
                    "created_at": "2020-04-24T23:39:12.734Z",
                    "updated_at": "2020-04-24T23:39:12.734Z"
                },
                {
                    "id": 1112,
                    "text": "sampled a porcupine eating Cranberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 371,
                    "created_at": "2020-04-24T23:39:12.741Z",
                    "updated_at": "2020-04-24T23:39:12.741Z"
                },
                {
                    "id": 1113,
                    "text": "played a Piano in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 371,
                    "created_at": "2020-04-24T23:39:12.747Z",
                    "updated_at": "2020-04-24T23:39:12.747Z"
                }
            ]
        }
    },
    {
        "id": "372",
        "type": "card",
        "attributes": {
            "strategy": "Always the first steps",
            "notes": [
                {
                    "id": 1114,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 372,
                    "created_at": "2020-04-24T23:39:12.754Z",
                    "updated_at": "2020-04-24T23:39:12.754Z"
                },
                {
                    "id": 1115,
                    "text": "sampled a hyena eating Mango",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 372,
                    "created_at": "2020-04-24T23:39:12.770Z",
                    "updated_at": "2020-04-24T23:39:12.770Z"
                },
                {
                    "id": 1116,
                    "text": "played a Ukelele in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 372,
                    "created_at": "2020-04-24T23:39:12.777Z",
                    "updated_at": "2020-04-24T23:39:12.777Z"
                }
            ]
        }
    },
    {
        "id": "373",
        "type": "card",
        "attributes": {
            "strategy": "Ask people to work against their better judgement",
            "notes": [
                {
                    "id": 1118,
                    "text": "sampled a clam eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 373,
                    "created_at": "2020-04-24T23:39:12.791Z",
                    "updated_at": "2020-04-24T23:39:12.791Z"
                },
                {
                    "id": 1119,
                    "text": "played a Flute in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 373,
                    "created_at": "2020-04-24T23:39:12.798Z",
                    "updated_at": "2020-04-24T23:39:12.798Z"
                },
                {
                    "id": 1400,
                    "text": "hi mark",
                    "url": "https://www.instagram.com",
                    "card_id": 373,
                    "created_at": "2020-06-02T20:16:35.983Z",
                    "updated_at": "2020-06-02T20:16:35.983Z"
                }
            ]
        }
    },
    {
        "id": "374",
        "type": "card",
        "attributes": {
            "strategy": "Ask your body",
            "notes": [
                {
                    "id": 1120,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 374,
                    "created_at": "2020-04-24T23:39:12.805Z",
                    "updated_at": "2020-04-24T23:39:12.805Z"
                },
                {
                    "id": 1121,
                    "text": "sampled a wasp eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 374,
                    "created_at": "2020-04-24T23:39:12.813Z",
                    "updated_at": "2020-04-24T23:39:12.813Z"
                },
                {
                    "id": 1122,
                    "text": "played a Harmonica in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 374,
                    "created_at": "2020-04-24T23:39:12.823Z",
                    "updated_at": "2020-04-24T23:39:12.823Z"
                }
            ]
        }
    },
    {
        "id": "375",
        "type": "card",
        "attributes": {
            "strategy": "Be dirty",
            "notes": [
                {
                    "id": 1125,
                    "text": "played a Flute in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 375,
                    "created_at": "2020-04-24T23:39:12.844Z",
                    "updated_at": "2020-04-24T23:39:12.844Z"
                },
                {
                    "id": 1123,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 375,
                    "created_at": "2020-04-24T23:39:12.829Z",
                    "updated_at": "2020-04-24T23:39:12.829Z"
                },
                {
                    "id": 1124,
                    "text": "sampled a cricket eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 375,
                    "created_at": "2020-04-24T23:39:12.837Z",
                    "updated_at": "2020-04-24T23:39:12.837Z"
                }
            ]
        }
    },
    {
        "id": "376",
        "type": "card",
        "attributes": {
            "strategy": "Be extravagant",
            "notes": [
                {
                    "id": 1126,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 376,
                    "created_at": "2020-04-24T23:39:12.851Z",
                    "updated_at": "2020-04-24T23:39:12.851Z"
                },
                {
                    "id": 1127,
                    "text": "sampled a cricket eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 376,
                    "created_at": "2020-04-24T23:39:12.857Z",
                    "updated_at": "2020-04-24T23:39:12.857Z"
                },
                {
                    "id": 1128,
                    "text": "played a Electric Guitar in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 376,
                    "created_at": "2020-04-24T23:39:12.863Z",
                    "updated_at": "2020-04-24T23:39:12.863Z"
                }
            ]
        }
    },
    {
        "id": "377",
        "type": "card",
        "attributes": {
            "strategy": "Be less critical",
            "notes": [
                {
                    "id": 1129,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 377,
                    "created_at": "2020-04-24T23:39:12.870Z",
                    "updated_at": "2020-04-24T23:39:12.870Z"
                },
                {
                    "id": 1130,
                    "text": "sampled a gnu eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 377,
                    "created_at": "2020-04-24T23:39:12.877Z",
                    "updated_at": "2020-04-24T23:39:12.877Z"
                },
                {
                    "id": 1131,
                    "text": "played a Harp in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 377,
                    "created_at": "2020-04-24T23:39:12.883Z",
                    "updated_at": "2020-04-24T23:39:12.883Z"
                }
            ]
        }
    },
    {
        "id": "378",
        "type": "card",
        "attributes": {
            "strategy": "Breathe more deeply",
            "notes": [
                {
                    "id": 1132,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 378,
                    "created_at": "2020-04-24T23:39:12.890Z",
                    "updated_at": "2020-04-24T23:39:12.890Z"
                },
                {
                    "id": 1133,
                    "text": "sampled a walrus eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 378,
                    "created_at": "2020-04-24T23:39:12.895Z",
                    "updated_at": "2020-04-24T23:39:12.895Z"
                },
                {
                    "id": 1134,
                    "text": "played a Harp in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 378,
                    "created_at": "2020-04-24T23:39:12.901Z",
                    "updated_at": "2020-04-24T23:39:12.901Z"
                }
            ]
        }
    },
    {
        "id": "379",
        "type": "card",
        "attributes": {
            "strategy": "Bridges -build -burn",
            "notes": [
                {
                    "id": 1135,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 379,
                    "created_at": "2020-04-24T23:39:12.907Z",
                    "updated_at": "2020-04-24T23:39:12.907Z"
                },
                {
                    "id": 1136,
                    "text": "sampled a squirrel eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 379,
                    "created_at": "2020-04-24T23:39:12.914Z",
                    "updated_at": "2020-04-24T23:39:12.914Z"
                },
                {
                    "id": 1137,
                    "text": "played a Ukelele in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 379,
                    "created_at": "2020-04-24T23:39:12.922Z",
                    "updated_at": "2020-04-24T23:39:12.922Z"
                }
            ]
        }
    },
    {
        "id": "380",
        "type": "card",
        "attributes": {
            "strategy": "Change ambiguities to specifics",
            "notes": [
                {
                    "id": 1138,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 380,
                    "created_at": "2020-04-24T23:39:12.928Z",
                    "updated_at": "2020-04-24T23:39:12.928Z"
                },
                {
                    "id": 1139,
                    "text": "sampled a scorpion eating Currants",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 380,
                    "created_at": "2020-04-24T23:39:12.934Z",
                    "updated_at": "2020-04-24T23:39:12.934Z"
                },
                {
                    "id": 1140,
                    "text": "played a Piano in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 380,
                    "created_at": "2020-04-24T23:39:12.941Z",
                    "updated_at": "2020-04-24T23:39:12.941Z"
                }
            ]
        }
    },
    {
        "id": "381",
        "type": "card",
        "attributes": {
            "strategy": "Change nothing and continue consistently",
            "notes": [
                {
                    "id": 1141,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 381,
                    "created_at": "2020-04-24T23:39:12.948Z",
                    "updated_at": "2020-04-24T23:39:12.948Z"
                },
                {
                    "id": 1142,
                    "text": "sampled a chimpanzee eating Melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 381,
                    "created_at": "2020-04-24T23:39:12.955Z",
                    "updated_at": "2020-04-24T23:39:12.955Z"
                },
                {
                    "id": 1143,
                    "text": "played a Xylophone in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 381,
                    "created_at": "2020-04-24T23:39:12.961Z",
                    "updated_at": "2020-04-24T23:39:12.961Z"
                }
            ]
        }
    },
    {
        "id": "382",
        "type": "card",
        "attributes": {
            "strategy": "Change specifics to ambiguities",
            "notes": [
                {
                    "id": 1144,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 382,
                    "created_at": "2020-04-24T23:39:12.968Z",
                    "updated_at": "2020-04-24T23:39:12.968Z"
                },
                {
                    "id": 1145,
                    "text": "sampled a salmon eating Honeydew melon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 382,
                    "created_at": "2020-04-24T23:39:12.980Z",
                    "updated_at": "2020-04-24T23:39:12.980Z"
                },
                {
                    "id": 1146,
                    "text": "played a Electric Guitar in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 382,
                    "created_at": "2020-04-24T23:39:12.986Z",
                    "updated_at": "2020-04-24T23:39:12.986Z"
                }
            ]
        }
    },
    {
        "id": "383",
        "type": "card",
        "attributes": {
            "strategy": "Consider transitions",
            "notes": [
                {
                    "id": 1147,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 383,
                    "created_at": "2020-04-24T23:39:12.993Z",
                    "updated_at": "2020-04-24T23:39:12.993Z"
                },
                {
                    "id": 1148,
                    "text": "sampled a caribou eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 383,
                    "created_at": "2020-04-24T23:39:12.999Z",
                    "updated_at": "2020-04-24T23:39:12.999Z"
                },
                {
                    "id": 1149,
                    "text": "played a Drums in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 383,
                    "created_at": "2020-04-24T23:39:13.006Z",
                    "updated_at": "2020-04-24T23:39:13.006Z"
                }
            ]
        }
    },
    {
        "id": "384",
        "type": "card",
        "attributes": {
            "strategy": "Courage!",
            "notes": [
                {
                    "id": 1150,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 384,
                    "created_at": "2020-04-24T23:39:13.013Z",
                    "updated_at": "2020-04-24T23:39:13.013Z"
                },
                {
                    "id": 1151,
                    "text": "sampled a crow eating Papaw",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 384,
                    "created_at": "2020-04-24T23:39:13.020Z",
                    "updated_at": "2020-04-24T23:39:13.020Z"
                },
                {
                    "id": 1152,
                    "text": "played a Harp in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 384,
                    "created_at": "2020-04-24T23:39:13.027Z",
                    "updated_at": "2020-04-24T23:39:13.027Z"
                }
            ]
        }
    },
    {
        "id": "385",
        "type": "card",
        "attributes": {
            "strategy": "Cut a vital connection",
            "notes": [
                {
                    "id": 1153,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 385,
                    "created_at": "2020-04-24T23:39:13.033Z",
                    "updated_at": "2020-04-24T23:39:13.033Z"
                },
                {
                    "id": 1154,
                    "text": "sampled a mammoth eating Sultanas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 385,
                    "created_at": "2020-04-24T23:39:13.040Z",
                    "updated_at": "2020-04-24T23:39:13.040Z"
                },
                {
                    "id": 1155,
                    "text": "played a Drums in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 385,
                    "created_at": "2020-04-24T23:39:13.046Z",
                    "updated_at": "2020-04-24T23:39:13.046Z"
                }
            ]
        }
    },
    {
        "id": "386",
        "type": "card",
        "attributes": {
            "strategy": "Decorate, decorate",
            "notes": [
                {
                    "id": 1156,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 386,
                    "created_at": "2020-04-24T23:39:13.052Z",
                    "updated_at": "2020-04-24T23:39:13.052Z"
                },
                {
                    "id": 1157,
                    "text": "sampled a buffalo eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 386,
                    "created_at": "2020-04-24T23:39:13.058Z",
                    "updated_at": "2020-04-24T23:39:13.058Z"
                },
                {
                    "id": 1158,
                    "text": "played a Electric Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 386,
                    "created_at": "2020-04-24T23:39:13.064Z",
                    "updated_at": "2020-04-24T23:39:13.064Z"
                }
            ]
        }
    },
    {
        "id": "387",
        "type": "card",
        "attributes": {
            "strategy": "Destroy nothing; Destroy the most important thing",
            "notes": [
                {
                    "id": 1159,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 387,
                    "created_at": "2020-04-24T23:39:13.070Z",
                    "updated_at": "2020-04-24T23:39:13.070Z"
                },
                {
                    "id": 1160,
                    "text": "sampled a tortoise eating Nashi Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 387,
                    "created_at": "2020-04-24T23:39:13.077Z",
                    "updated_at": "2020-04-24T23:39:13.077Z"
                },
                {
                    "id": 1161,
                    "text": "played a Drums in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 387,
                    "created_at": "2020-04-24T23:39:13.085Z",
                    "updated_at": "2020-04-24T23:39:13.085Z"
                }
            ]
        }
    },
    {
        "id": "388",
        "type": "card",
        "attributes": {
            "strategy": "Discard an axiom",
            "notes": [
                {
                    "id": 1162,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 388,
                    "created_at": "2020-04-24T23:39:13.093Z",
                    "updated_at": "2020-04-24T23:39:13.093Z"
                },
                {
                    "id": 1163,
                    "text": "sampled a salmon eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 388,
                    "created_at": "2020-04-24T23:39:13.099Z",
                    "updated_at": "2020-04-24T23:39:13.099Z"
                },
                {
                    "id": 1164,
                    "text": "played a Harmonica in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 388,
                    "created_at": "2020-04-24T23:39:13.105Z",
                    "updated_at": "2020-04-24T23:39:13.105Z"
                }
            ]
        }
    },
    {
        "id": "389",
        "type": "card",
        "attributes": {
            "strategy": "Disciplined self-indulgence",
            "notes": [
                {
                    "id": 1165,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 389,
                    "created_at": "2020-04-24T23:39:13.112Z",
                    "updated_at": "2020-04-24T23:39:13.112Z"
                },
                {
                    "id": 1166,
                    "text": "sampled a rhinoceros eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 389,
                    "created_at": "2020-04-24T23:39:13.119Z",
                    "updated_at": "2020-04-24T23:39:13.119Z"
                },
                {
                    "id": 1167,
                    "text": "played a Trumpet in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 389,
                    "created_at": "2020-04-24T23:39:13.125Z",
                    "updated_at": "2020-04-24T23:39:13.125Z"
                }
            ]
        }
    },
    {
        "id": "390",
        "type": "card",
        "attributes": {
            "strategy": "Discover your formulas and abandon them",
            "notes": [
                {
                    "id": 1168,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 390,
                    "created_at": "2020-04-24T23:39:13.132Z",
                    "updated_at": "2020-04-24T23:39:13.132Z"
                },
                {
                    "id": 1169,
                    "text": "sampled a herring eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 390,
                    "created_at": "2020-04-24T23:39:13.139Z",
                    "updated_at": "2020-04-24T23:39:13.139Z"
                },
                {
                    "id": 1170,
                    "text": "played a Clarinet in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 390,
                    "created_at": "2020-04-24T23:39:13.146Z",
                    "updated_at": "2020-04-24T23:39:13.146Z"
                }
            ]
        }
    },
    {
        "id": "391",
        "type": "card",
        "attributes": {
            "strategy": "Display your talent",
            "notes": [
                {
                    "id": 1171,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 391,
                    "created_at": "2020-04-24T23:39:13.152Z",
                    "updated_at": "2020-04-24T23:39:13.152Z"
                },
                {
                    "id": 1172,
                    "text": "sampled a skunk eating Jarrahdale pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 391,
                    "created_at": "2020-04-24T23:39:13.159Z",
                    "updated_at": "2020-04-24T23:39:13.159Z"
                },
                {
                    "id": 1173,
                    "text": "played a Drums in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 391,
                    "created_at": "2020-04-24T23:39:13.165Z",
                    "updated_at": "2020-04-24T23:39:13.165Z"
                }
            ]
        }
    },
    {
        "id": "392",
        "type": "card",
        "attributes": {
            "strategy": "Distort time",
            "notes": [
                {
                    "id": 1174,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 392,
                    "created_at": "2020-04-24T23:39:13.172Z",
                    "updated_at": "2020-04-24T23:39:13.172Z"
                },
                {
                    "id": 1175,
                    "text": "sampled a crab eating Pomegranate",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 392,
                    "created_at": "2020-04-24T23:39:13.179Z",
                    "updated_at": "2020-04-24T23:39:13.179Z"
                },
                {
                    "id": 1176,
                    "text": "played a Organ in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 392,
                    "created_at": "2020-04-24T23:39:13.185Z",
                    "updated_at": "2020-04-24T23:39:13.185Z"
                }
            ]
        }
    },
    {
        "id": "393",
        "type": "card",
        "attributes": {
            "strategy": "Do nothing for as long as possible",
            "notes": [
                {
                    "id": 1177,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 393,
                    "created_at": "2020-04-24T23:39:13.193Z",
                    "updated_at": "2020-04-24T23:39:13.193Z"
                },
                {
                    "id": 1178,
                    "text": "sampled a donkey eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 393,
                    "created_at": "2020-04-24T23:39:13.199Z",
                    "updated_at": "2020-04-24T23:39:13.199Z"
                },
                {
                    "id": 1179,
                    "text": "played a Cello in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 393,
                    "created_at": "2020-04-24T23:39:13.205Z",
                    "updated_at": "2020-04-24T23:39:13.205Z"
                }
            ]
        }
    },
    {
        "id": "394",
        "type": "card",
        "attributes": {
            "strategy": "Don't avoid what is easy",
            "notes": []
        }
    },
    {
        "id": "395",
        "type": "card",
        "attributes": {
            "strategy": "Don't break the silence",
            "notes": [
                {
                    "id": 1183,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 395,
                    "created_at": "2020-04-24T23:39:13.239Z",
                    "updated_at": "2020-04-24T23:39:13.239Z"
                },
                {
                    "id": 1184,
                    "text": "sampled a mammoth eating Oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 395,
                    "created_at": "2020-04-24T23:39:13.246Z",
                    "updated_at": "2020-04-24T23:39:13.246Z"
                },
                {
                    "id": 1185,
                    "text": "played a Piano in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 395,
                    "created_at": "2020-04-24T23:39:13.252Z",
                    "updated_at": "2020-04-24T23:39:13.252Z"
                }
            ]
        }
    },
    {
        "id": "396",
        "type": "card",
        "attributes": {
            "strategy": "Don't stress one thing more than another",
            "notes": [
                {
                    "id": 1186,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 396,
                    "created_at": "2020-04-24T23:39:13.259Z",
                    "updated_at": "2020-04-24T23:39:13.259Z"
                },
                {
                    "id": 1187,
                    "text": "sampled a gerbil eating Passionfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 396,
                    "created_at": "2020-04-24T23:39:13.265Z",
                    "updated_at": "2020-04-24T23:39:13.265Z"
                },
                {
                    "id": 1188,
                    "text": "played a Electric Guitar in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 396,
                    "created_at": "2020-04-24T23:39:13.279Z",
                    "updated_at": "2020-04-24T23:39:13.279Z"
                }
            ]
        }
    },
    {
        "id": "397",
        "type": "card",
        "attributes": {
            "strategy": "Do something boring",
            "notes": [
                {
                    "id": 1189,
                    "text": "wrote a song for the Litte Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 397,
                    "created_at": "2020-04-24T23:39:13.287Z",
                    "updated_at": "2020-04-24T23:39:13.287Z"
                },
                {
                    "id": 1190,
                    "text": "sampled a clam eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 397,
                    "created_at": "2020-04-24T23:39:13.294Z",
                    "updated_at": "2020-04-24T23:39:13.294Z"
                },
                {
                    "id": 1191,
                    "text": "played a Violin in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 397,
                    "created_at": "2020-04-24T23:39:13.300Z",
                    "updated_at": "2020-04-24T23:39:13.300Z"
                }
            ]
        }
    },
    {
        "id": "398",
        "type": "card",
        "attributes": {
            "strategy": "Do something sudden, destructive and unpredictable",
            "notes": [
                {
                    "id": 1192,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 398,
                    "created_at": "2020-04-24T23:39:13.307Z",
                    "updated_at": "2020-04-24T23:39:13.307Z"
                },
                {
                    "id": 1193,
                    "text": "sampled a mallard eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 398,
                    "created_at": "2020-04-24T23:39:13.331Z",
                    "updated_at": "2020-04-24T23:39:13.331Z"
                },
                {
                    "id": 1194,
                    "text": "played a Ukelele in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 398,
                    "created_at": "2020-04-24T23:39:13.338Z",
                    "updated_at": "2020-04-24T23:39:13.338Z"
                }
            ]
        }
    },
    {
        "id": "399",
        "type": "card",
        "attributes": {
            "strategy": "Do the last thing first",
            "notes": [
                {
                    "id": 1195,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 399,
                    "created_at": "2020-04-24T23:39:13.345Z",
                    "updated_at": "2020-04-24T23:39:13.345Z"
                },
                {
                    "id": 1196,
                    "text": "sampled a yak eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 399,
                    "created_at": "2020-04-24T23:39:13.351Z",
                    "updated_at": "2020-04-24T23:39:13.351Z"
                },
                {
                    "id": 1197,
                    "text": "played a Bass Guitar in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 399,
                    "created_at": "2020-04-24T23:39:13.364Z",
                    "updated_at": "2020-04-24T23:39:13.364Z"
                }
            ]
        }
    },
    {
        "id": "400",
        "type": "card",
        "attributes": {
            "strategy": "Do the words need changing?",
            "notes": [
                {
                    "id": 1198,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 400,
                    "created_at": "2020-04-24T23:39:13.372Z",
                    "updated_at": "2020-04-24T23:39:13.372Z"
                },
                {
                    "id": 1199,
                    "text": "sampled a mammoth eating Incaberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 400,
                    "created_at": "2020-04-24T23:39:13.379Z",
                    "updated_at": "2020-04-24T23:39:13.379Z"
                },
                {
                    "id": 1200,
                    "text": "played a Oboe in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 400,
                    "created_at": "2020-04-24T23:39:13.386Z",
                    "updated_at": "2020-04-24T23:39:13.386Z"
                }
            ]
        }
    },
    {
        "id": "401",
        "type": "card",
        "attributes": {
            "strategy": "Emphasize differences",
            "notes": [
                {
                    "id": 1201,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 401,
                    "created_at": "2020-04-24T23:39:13.392Z",
                    "updated_at": "2020-04-24T23:39:13.392Z"
                },
                {
                    "id": 1202,
                    "text": "sampled a giraffe eating Mulberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 401,
                    "created_at": "2020-04-24T23:39:13.399Z",
                    "updated_at": "2020-04-24T23:39:13.399Z"
                },
                {
                    "id": 1203,
                    "text": "played a Piano in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 401,
                    "created_at": "2020-04-24T23:39:13.405Z",
                    "updated_at": "2020-04-24T23:39:13.405Z"
                }
            ]
        }
    },
    {
        "id": "402",
        "type": "card",
        "attributes": {
            "strategy": "Emphasize the flaws",
            "notes": [
                {
                    "id": 1204,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 402,
                    "created_at": "2020-04-24T23:39:13.412Z",
                    "updated_at": "2020-04-24T23:39:13.412Z"
                },
                {
                    "id": 1205,
                    "text": "sampled a zebra eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 402,
                    "created_at": "2020-04-24T23:39:13.419Z",
                    "updated_at": "2020-04-24T23:39:13.419Z"
                },
                {
                    "id": 1206,
                    "text": "played a Violin in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 402,
                    "created_at": "2020-04-24T23:39:13.426Z",
                    "updated_at": "2020-04-24T23:39:13.426Z"
                }
            ]
        }
    },
    {
        "id": "403",
        "type": "card",
        "attributes": {
            "strategy": "Faced with a choice, do both (from Dieter Rot)",
            "notes": [
                {
                    "id": 1207,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 403,
                    "created_at": "2020-04-24T23:39:13.432Z",
                    "updated_at": "2020-04-24T23:39:13.432Z"
                },
                {
                    "id": 1208,
                    "text": "sampled a reindeer eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 403,
                    "created_at": "2020-04-24T23:39:13.439Z",
                    "updated_at": "2020-04-24T23:39:13.439Z"
                },
                {
                    "id": 1209,
                    "text": "played a Clarinet in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 403,
                    "created_at": "2020-04-24T23:39:13.446Z",
                    "updated_at": "2020-04-24T23:39:13.446Z"
                }
            ]
        }
    },
    {
        "id": "404",
        "type": "card",
        "attributes": {
            "strategy": "Find a safe part and use it as an anchor",
            "notes": [
                {
                    "id": 1210,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 404,
                    "created_at": "2020-04-24T23:39:13.452Z",
                    "updated_at": "2020-04-24T23:39:13.452Z"
                },
                {
                    "id": 1211,
                    "text": "sampled a elk eating Strawberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 404,
                    "created_at": "2020-04-24T23:39:13.459Z",
                    "updated_at": "2020-04-24T23:39:13.459Z"
                },
                {
                    "id": 1212,
                    "text": "played a Trumpet in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 404,
                    "created_at": "2020-04-24T23:39:13.465Z",
                    "updated_at": "2020-04-24T23:39:13.465Z"
                }
            ]
        }
    },
    {
        "id": "405",
        "type": "card",
        "attributes": {
            "strategy": "Give the game away",
            "notes": [
                {
                    "id": 1213,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 405,
                    "created_at": "2020-04-24T23:39:13.472Z",
                    "updated_at": "2020-04-24T23:39:13.472Z"
                },
                {
                    "id": 1214,
                    "text": "sampled a hornet eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 405,
                    "created_at": "2020-04-24T23:39:13.478Z",
                    "updated_at": "2020-04-24T23:39:13.478Z"
                },
                {
                    "id": 1215,
                    "text": "played a Bass Guitar in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 405,
                    "created_at": "2020-04-24T23:39:13.485Z",
                    "updated_at": "2020-04-24T23:39:13.485Z"
                }
            ]
        }
    },
    {
        "id": "406",
        "type": "card",
        "attributes": {
            "strategy": "Give way to your worst impulse",
            "notes": [
                {
                    "id": 1216,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 406,
                    "created_at": "2020-04-24T23:39:13.492Z",
                    "updated_at": "2020-04-24T23:39:13.492Z"
                },
                {
                    "id": 1217,
                    "text": "sampled a seal  eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 406,
                    "created_at": "2020-04-24T23:39:13.498Z",
                    "updated_at": "2020-04-24T23:39:13.498Z"
                },
                {
                    "id": 1218,
                    "text": "played a Violin in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 406,
                    "created_at": "2020-04-24T23:39:13.505Z",
                    "updated_at": "2020-04-24T23:39:13.505Z"
                }
            ]
        }
    },
    {
        "id": "407",
        "type": "card",
        "attributes": {
            "strategy": "Go outside. Shut the door.",
            "notes": [
                {
                    "id": 1219,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 407,
                    "created_at": "2020-04-24T23:39:13.512Z",
                    "updated_at": "2020-04-24T23:39:13.512Z"
                },
                {
                    "id": 1220,
                    "text": "sampled a monkey eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 407,
                    "created_at": "2020-04-24T23:39:13.518Z",
                    "updated_at": "2020-04-24T23:39:13.518Z"
                },
                {
                    "id": 1221,
                    "text": "played a Acoustic Guitar in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 407,
                    "created_at": "2020-04-24T23:39:13.524Z",
                    "updated_at": "2020-04-24T23:39:13.524Z"
                }
            ]
        }
    },
    {
        "id": "408",
        "type": "card",
        "attributes": {
            "strategy": "Go to an extreme, come part way back",
            "notes": [
                {
                    "id": 1222,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 408,
                    "created_at": "2020-04-24T23:39:13.531Z",
                    "updated_at": "2020-04-24T23:39:13.531Z"
                },
                {
                    "id": 1223,
                    "text": "sampled a rhinoceros eating Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 408,
                    "created_at": "2020-04-24T23:39:13.537Z",
                    "updated_at": "2020-04-24T23:39:13.537Z"
                },
                {
                    "id": 1224,
                    "text": "played a Cello in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 408,
                    "created_at": "2020-04-24T23:39:13.544Z",
                    "updated_at": "2020-04-24T23:39:13.544Z"
                }
            ]
        }
    },
    {
        "id": "409",
        "type": "card",
        "attributes": {
            "strategy": "How would someone else do it?",
            "notes": [
                {
                    "id": 1225,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 409,
                    "created_at": "2020-04-24T23:39:13.550Z",
                    "updated_at": "2020-04-24T23:39:13.550Z"
                },
                {
                    "id": 1226,
                    "text": "sampled a cockroach eating Rockmelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 409,
                    "created_at": "2020-04-24T23:39:13.558Z",
                    "updated_at": "2020-04-24T23:39:13.558Z"
                },
                {
                    "id": 1227,
                    "text": "played a Drums in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 409,
                    "created_at": "2020-04-24T23:39:13.565Z",
                    "updated_at": "2020-04-24T23:39:13.565Z"
                }
            ]
        }
    },
    {
        "id": "410",
        "type": "card",
        "attributes": {
            "strategy": "How would you have done it?",
            "notes": [
                {
                    "id": 1228,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 410,
                    "created_at": "2020-04-24T23:39:13.571Z",
                    "updated_at": "2020-04-24T23:39:13.571Z"
                },
                {
                    "id": 1229,
                    "text": "sampled a beaver eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 410,
                    "created_at": "2020-04-24T23:39:13.576Z",
                    "updated_at": "2020-04-24T23:39:13.576Z"
                },
                {
                    "id": 1230,
                    "text": "played a Harmonica in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 410,
                    "created_at": "2020-04-24T23:39:13.582Z",
                    "updated_at": "2020-04-24T23:39:13.582Z"
                }
            ]
        }
    },
    {
        "id": "411",
        "type": "card",
        "attributes": {
            "strategy": "In total darkness, or in a very large room, very quietly",
            "notes": [
                {
                    "id": 1231,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 411,
                    "created_at": "2020-04-24T23:39:13.589Z",
                    "updated_at": "2020-04-24T23:39:13.589Z"
                },
                {
                    "id": 1232,
                    "text": "sampled a goose eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 411,
                    "created_at": "2020-04-24T23:39:13.595Z",
                    "updated_at": "2020-04-24T23:39:13.595Z"
                },
                {
                    "id": 1233,
                    "text": "played a Violin in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 411,
                    "created_at": "2020-04-24T23:39:13.602Z",
                    "updated_at": "2020-04-24T23:39:13.602Z"
                }
            ]
        }
    },
    {
        "id": "412",
        "type": "card",
        "attributes": {
            "strategy": "Is it finished?",
            "notes": [
                {
                    "id": 1234,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 412,
                    "created_at": "2020-04-24T23:39:13.609Z",
                    "updated_at": "2020-04-24T23:39:13.609Z"
                },
                {
                    "id": 1235,
                    "text": "sampled a eagle eating Cantaloupe",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 412,
                    "created_at": "2020-04-24T23:39:13.615Z",
                    "updated_at": "2020-04-24T23:39:13.615Z"
                },
                {
                    "id": 1236,
                    "text": "played a Harp in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 412,
                    "created_at": "2020-04-24T23:39:13.622Z",
                    "updated_at": "2020-04-24T23:39:13.622Z"
                }
            ]
        }
    },
    {
        "id": "413",
        "type": "card",
        "attributes": {
            "strategy": "Is something missing?",
            "notes": [
                {
                    "id": 1237,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 413,
                    "created_at": "2020-04-24T23:39:13.628Z",
                    "updated_at": "2020-04-24T23:39:13.628Z"
                },
                {
                    "id": 1238,
                    "text": "sampled a ferret eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 413,
                    "created_at": "2020-04-24T23:39:13.639Z",
                    "updated_at": "2020-04-24T23:39:13.639Z"
                },
                {
                    "id": 1239,
                    "text": "played a Oboe in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 413,
                    "created_at": "2020-04-24T23:39:13.646Z",
                    "updated_at": "2020-04-24T23:39:13.646Z"
                }
            ]
        }
    },
    {
        "id": "414",
        "type": "card",
        "attributes": {
            "strategy": "Is the style right?",
            "notes": [
                {
                    "id": 1240,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 414,
                    "created_at": "2020-04-24T23:39:13.652Z",
                    "updated_at": "2020-04-24T23:39:13.652Z"
                },
                {
                    "id": 1241,
                    "text": "sampled a trout eating Lemon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 414,
                    "created_at": "2020-04-24T23:39:13.659Z",
                    "updated_at": "2020-04-24T23:39:13.659Z"
                },
                {
                    "id": 1242,
                    "text": "played a Harp in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 414,
                    "created_at": "2020-04-24T23:39:13.665Z",
                    "updated_at": "2020-04-24T23:39:13.665Z"
                }
            ]
        }
    },
    {
        "id": "415",
        "type": "card",
        "attributes": {
            "strategy": "It is simply a matter or work",
            "notes": [
                {
                    "id": 1243,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 415,
                    "created_at": "2020-04-24T23:39:13.672Z",
                    "updated_at": "2020-04-24T23:39:13.672Z"
                },
                {
                    "id": 1244,
                    "text": "sampled a fly eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 415,
                    "created_at": "2020-04-24T23:39:13.678Z",
                    "updated_at": "2020-04-24T23:39:13.678Z"
                },
                {
                    "id": 1245,
                    "text": "played a Bass Guitar in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 415,
                    "created_at": "2020-04-24T23:39:13.684Z",
                    "updated_at": "2020-04-24T23:39:13.684Z"
                }
            ]
        }
    },
    {
        "id": "416",
        "type": "card",
        "attributes": {
            "strategy": "Just carry on",
            "notes": [
                {
                    "id": 1246,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 416,
                    "created_at": "2020-04-24T23:39:13.691Z",
                    "updated_at": "2020-04-24T23:39:13.691Z"
                },
                {
                    "id": 1247,
                    "text": "sampled a cheetah eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 416,
                    "created_at": "2020-04-24T23:39:13.698Z",
                    "updated_at": "2020-04-24T23:39:13.698Z"
                },
                {
                    "id": 1248,
                    "text": "played a Bass Guitar in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 416,
                    "created_at": "2020-04-24T23:39:13.704Z",
                    "updated_at": "2020-04-24T23:39:13.704Z"
                }
            ]
        }
    },
    {
        "id": "417",
        "type": "card",
        "attributes": {
            "strategy": "Listen to the quiet voice",
            "notes": [
                {
                    "id": 1249,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 417,
                    "created_at": "2020-04-24T23:39:13.711Z",
                    "updated_at": "2020-04-24T23:39:13.711Z"
                },
                {
                    "id": 1250,
                    "text": "sampled a cricket eating Custard Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 417,
                    "created_at": "2020-04-24T23:39:13.718Z",
                    "updated_at": "2020-04-24T23:39:13.718Z"
                },
                {
                    "id": 1251,
                    "text": "played a Xylophone in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 417,
                    "created_at": "2020-04-24T23:39:13.725Z",
                    "updated_at": "2020-04-24T23:39:13.725Z"
                }
            ]
        }
    },
    {
        "id": "418",
        "type": "card",
        "attributes": {
            "strategy": "Look at the order in which you do things",
            "notes": [
                {
                    "id": 1252,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 418,
                    "created_at": "2020-04-24T23:39:13.731Z",
                    "updated_at": "2020-04-24T23:39:13.731Z"
                },
                {
                    "id": 1253,
                    "text": "sampled a bat eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 418,
                    "created_at": "2020-04-24T23:39:13.739Z",
                    "updated_at": "2020-04-24T23:39:13.739Z"
                },
                {
                    "id": 1254,
                    "text": "played a Oboe in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 418,
                    "created_at": "2020-04-24T23:39:13.745Z",
                    "updated_at": "2020-04-24T23:39:13.745Z"
                }
            ]
        }
    },
    {
        "id": "419",
        "type": "card",
        "attributes": {
            "strategy": "Magnify the most difficult details",
            "notes": [
                {
                    "id": 1255,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 419,
                    "created_at": "2020-04-24T23:39:13.751Z",
                    "updated_at": "2020-04-24T23:39:13.751Z"
                },
                {
                    "id": 1256,
                    "text": "sampled a cattle eating Prunes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 419,
                    "created_at": "2020-04-24T23:39:13.757Z",
                    "updated_at": "2020-04-24T23:39:13.757Z"
                },
                {
                    "id": 1257,
                    "text": "played a Saxophone in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 419,
                    "created_at": "2020-04-24T23:39:13.764Z",
                    "updated_at": "2020-04-24T23:39:13.764Z"
                }
            ]
        }
    },
    {
        "id": "420",
        "type": "card",
        "attributes": {
            "strategy": "Make it more sensual",
            "notes": [
                {
                    "id": 1258,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 420,
                    "created_at": "2020-04-24T23:39:13.771Z",
                    "updated_at": "2020-04-24T23:39:13.771Z"
                },
                {
                    "id": 1259,
                    "text": "sampled a raven eating Longan",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 420,
                    "created_at": "2020-04-24T23:39:13.780Z",
                    "updated_at": "2020-04-24T23:39:13.780Z"
                },
                {
                    "id": 1260,
                    "text": "played a Saxophone in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 420,
                    "created_at": "2020-04-24T23:39:13.786Z",
                    "updated_at": "2020-04-24T23:39:13.786Z"
                }
            ]
        }
    },
    {
        "id": "421",
        "type": "card",
        "attributes": {
            "strategy": "Make what's perfect more human",
            "notes": [
                {
                    "id": 1261,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 421,
                    "created_at": "2020-04-24T23:39:13.793Z",
                    "updated_at": "2020-04-24T23:39:13.793Z"
                },
                {
                    "id": 1262,
                    "text": "sampled a bear eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 421,
                    "created_at": "2020-04-24T23:39:13.799Z",
                    "updated_at": "2020-04-24T23:39:13.799Z"
                },
                {
                    "id": 1263,
                    "text": "played a Harp in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 421,
                    "created_at": "2020-04-24T23:39:13.806Z",
                    "updated_at": "2020-04-24T23:39:13.806Z"
                }
            ]
        }
    },
    {
        "id": "422",
        "type": "card",
        "attributes": {
            "strategy": "Move towards the unimportant",
            "notes": [
                {
                    "id": 1264,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 422,
                    "created_at": "2020-04-24T23:39:13.813Z",
                    "updated_at": "2020-04-24T23:39:13.813Z"
                },
                {
                    "id": 1265,
                    "text": "sampled a wasp eating Strawberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 422,
                    "created_at": "2020-04-24T23:39:13.819Z",
                    "updated_at": "2020-04-24T23:39:13.819Z"
                },
                {
                    "id": 1266,
                    "text": "played a Piano in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 422,
                    "created_at": "2020-04-24T23:39:13.824Z",
                    "updated_at": "2020-04-24T23:39:13.824Z"
                }
            ]
        }
    },
    {
        "id": "423",
        "type": "card",
        "attributes": {
            "strategy": "Not building a wall; making a brick",
            "notes": [
                {
                    "id": 1267,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 423,
                    "created_at": "2020-04-24T23:39:13.830Z",
                    "updated_at": "2020-04-24T23:39:13.830Z"
                },
                {
                    "id": 1268,
                    "text": "sampled a goldfish eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 423,
                    "created_at": "2020-04-24T23:39:13.837Z",
                    "updated_at": "2020-04-24T23:39:13.837Z"
                },
                {
                    "id": 1269,
                    "text": "played a Violin in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 423,
                    "created_at": "2020-04-24T23:39:13.844Z",
                    "updated_at": "2020-04-24T23:39:13.844Z"
                }
            ]
        }
    },
    {
        "id": "424",
        "type": "card",
        "attributes": {
            "strategy": "Once the search has begun, something will be found",
            "notes": [
                {
                    "id": 1270,
                    "text": "wrote a song for the Orion constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 424,
                    "created_at": "2020-04-24T23:39:13.851Z",
                    "updated_at": "2020-04-24T23:39:13.851Z"
                },
                {
                    "id": 1271,
                    "text": "sampled a gnu eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 424,
                    "created_at": "2020-04-24T23:39:13.858Z",
                    "updated_at": "2020-04-24T23:39:13.858Z"
                },
                {
                    "id": 1272,
                    "text": "played a Acoustic Guitar in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 424,
                    "created_at": "2020-04-24T23:39:13.865Z",
                    "updated_at": "2020-04-24T23:39:13.865Z"
                }
            ]
        }
    },
    {
        "id": "425",
        "type": "card",
        "attributes": {
            "strategy": "Only a part, not the whole",
            "notes": [
                {
                    "id": 1273,
                    "text": "wrote a song for the Cancer constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 425,
                    "created_at": "2020-04-24T23:39:13.871Z",
                    "updated_at": "2020-04-24T23:39:13.871Z"
                },
                {
                    "id": 1274,
                    "text": "sampled a mule eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 425,
                    "created_at": "2020-04-24T23:39:13.877Z",
                    "updated_at": "2020-04-24T23:39:13.877Z"
                },
                {
                    "id": 1275,
                    "text": "played a Oboe in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 425,
                    "created_at": "2020-04-24T23:39:13.884Z",
                    "updated_at": "2020-04-24T23:39:13.884Z"
                }
            ]
        }
    },
    {
        "id": "426",
        "type": "card",
        "attributes": {
            "strategy": "Only one element of each kind",
            "notes": [
                {
                    "id": 1276,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 426,
                    "created_at": "2020-04-24T23:39:13.890Z",
                    "updated_at": "2020-04-24T23:39:13.890Z"
                },
                {
                    "id": 1277,
                    "text": "sampled a porpoise eating Kiwiberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 426,
                    "created_at": "2020-04-24T23:39:13.897Z",
                    "updated_at": "2020-04-24T23:39:13.897Z"
                },
                {
                    "id": 1278,
                    "text": "played a Saxophone in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 426,
                    "created_at": "2020-04-24T23:39:13.903Z",
                    "updated_at": "2020-04-24T23:39:13.903Z"
                }
            ]
        }
    },
    {
        "id": "427",
        "type": "card",
        "attributes": {
            "strategy": "Openly resist change",
            "notes": [
                {
                    "id": 1279,
                    "text": "wrote a song for the Ursa Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 427,
                    "created_at": "2020-04-24T23:39:13.909Z",
                    "updated_at": "2020-04-24T23:39:13.909Z"
                },
                {
                    "id": 1280,
                    "text": "sampled a grasshopper eating Limes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 427,
                    "created_at": "2020-04-24T23:39:13.916Z",
                    "updated_at": "2020-04-24T23:39:13.916Z"
                },
                {
                    "id": 1281,
                    "text": "played a Organ in the key of Db",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 427,
                    "created_at": "2020-04-24T23:39:13.922Z",
                    "updated_at": "2020-04-24T23:39:13.922Z"
                }
            ]
        }
    },
    {
        "id": "428",
        "type": "card",
        "attributes": {
            "strategy": "Pae White's non-blank graphic metacard",
            "notes": [
                {
                    "id": 1283,
                    "text": "sampled a gnat eating Watermelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 428,
                    "created_at": "2020-04-24T23:39:13.935Z",
                    "updated_at": "2020-04-24T23:39:13.935Z"
                },
                {
                    "id": 1284,
                    "text": "played a Saxophone in the key of E",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 428,
                    "created_at": "2020-04-24T23:39:13.942Z",
                    "updated_at": "2020-04-24T23:39:13.942Z"
                },
                {
                    "id": 1399,
                    "text": "Test",
                    "url": "https://www.google.com",
                    "card_id": 428,
                    "created_at": "2020-05-20T14:16:11.984Z",
                    "updated_at": "2020-05-20T14:16:11.984Z"
                }
            ]
        }
    },
    {
        "id": "429",
        "type": "card",
        "attributes": {
            "strategy": "Question the heroic",
            "notes": [
                {
                    "id": 1285,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 429,
                    "created_at": "2020-04-24T23:39:13.949Z",
                    "updated_at": "2020-04-24T23:39:13.949Z"
                },
                {
                    "id": 1286,
                    "text": "sampled a sea lion eating Starfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 429,
                    "created_at": "2020-04-24T23:39:13.957Z",
                    "updated_at": "2020-04-24T23:39:13.957Z"
                },
                {
                    "id": 1287,
                    "text": "played a Cello in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 429,
                    "created_at": "2020-04-24T23:39:13.963Z",
                    "updated_at": "2020-04-24T23:39:13.963Z"
                }
            ]
        }
    },
    {
        "id": "430",
        "type": "card",
        "attributes": {
            "strategy": "Remember quiet evenings",
            "notes": [
                {
                    "id": 1288,
                    "text": "wrote a song for the Virgo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 430,
                    "created_at": "2020-04-24T23:39:13.970Z",
                    "updated_at": "2020-04-24T23:39:13.970Z"
                },
                {
                    "id": 1289,
                    "text": "sampled a porcupine eating Banana",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 430,
                    "created_at": "2020-04-24T23:39:13.976Z",
                    "updated_at": "2020-04-24T23:39:13.976Z"
                },
                {
                    "id": 1290,
                    "text": "played a Flute in the key of G",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 430,
                    "created_at": "2020-04-24T23:39:13.983Z",
                    "updated_at": "2020-04-24T23:39:13.983Z"
                }
            ]
        }
    },
    {
        "id": "431",
        "type": "card",
        "attributes": {
            "strategy": "Remove a restriction",
            "notes": [
                {
                    "id": 1291,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 431,
                    "created_at": "2020-04-24T23:39:13.989Z",
                    "updated_at": "2020-04-24T23:39:13.989Z"
                },
                {
                    "id": 1292,
                    "text": "sampled a termite eating Papaya",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 431,
                    "created_at": "2020-04-24T23:39:13.997Z",
                    "updated_at": "2020-04-24T23:39:13.997Z"
                },
                {
                    "id": 1293,
                    "text": "played a Cello in the key of A",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 431,
                    "created_at": "2020-04-24T23:39:14.004Z",
                    "updated_at": "2020-04-24T23:39:14.004Z"
                }
            ]
        }
    },
    {
        "id": "432",
        "type": "card",
        "attributes": {
            "strategy": "Repetition is a form of change",
            "notes": [
                {
                    "id": 1294,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 432,
                    "created_at": "2020-04-24T23:39:14.012Z",
                    "updated_at": "2020-04-24T23:39:14.012Z"
                },
                {
                    "id": 1295,
                    "text": "sampled a mallard eating Lemon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 432,
                    "created_at": "2020-04-24T23:39:14.018Z",
                    "updated_at": "2020-04-24T23:39:14.018Z"
                },
                {
                    "id": 1296,
                    "text": "played a Harmonica in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 432,
                    "created_at": "2020-04-24T23:39:14.024Z",
                    "updated_at": "2020-04-24T23:39:14.024Z"
                }
            ]
        }
    },
    {
        "id": "433",
        "type": "card",
        "attributes": {
            "strategy": "Retrace your steps",
            "notes": [
                {
                    "id": 1297,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 433,
                    "created_at": "2020-04-24T23:39:14.030Z",
                    "updated_at": "2020-04-24T23:39:14.030Z"
                },
                {
                    "id": 1298,
                    "text": "sampled a mole eating Dates",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 433,
                    "created_at": "2020-04-24T23:39:14.037Z",
                    "updated_at": "2020-04-24T23:39:14.037Z"
                },
                {
                    "id": 1299,
                    "text": "played a Violin in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 433,
                    "created_at": "2020-04-24T23:39:14.044Z",
                    "updated_at": "2020-04-24T23:39:14.044Z"
                }
            ]
        }
    },
    {
        "id": "434",
        "type": "card",
        "attributes": {
            "strategy": "Reverse",
            "notes": [
                {
                    "id": 1300,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 434,
                    "created_at": "2020-04-24T23:39:14.050Z",
                    "updated_at": "2020-04-24T23:39:14.050Z"
                },
                {
                    "id": 1301,
                    "text": "sampled a caribou eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 434,
                    "created_at": "2020-04-24T23:39:14.057Z",
                    "updated_at": "2020-04-24T23:39:14.057Z"
                },
                {
                    "id": 1302,
                    "text": "played a Electric Guitar in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 434,
                    "created_at": "2020-04-24T23:39:14.063Z",
                    "updated_at": "2020-04-24T23:39:14.063Z"
                }
            ]
        }
    },
    {
        "id": "435",
        "type": "card",
        "attributes": {
            "strategy": "Simple Subtraction",
            "notes": [
                {
                    "id": 1303,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 435,
                    "created_at": "2020-04-24T23:39:14.070Z",
                    "updated_at": "2020-04-24T23:39:14.070Z"
                },
                {
                    "id": 1304,
                    "text": "sampled a elephant eating Fingerlime",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 435,
                    "created_at": "2020-04-24T23:39:14.077Z",
                    "updated_at": "2020-04-24T23:39:14.077Z"
                },
                {
                    "id": 1305,
                    "text": "played a Clarinet in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 435,
                    "created_at": "2020-04-24T23:39:14.083Z",
                    "updated_at": "2020-04-24T23:39:14.083Z"
                }
            ]
        }
    },
    {
        "id": "436",
        "type": "card",
        "attributes": {
            "strategy": "Slow preparation, fast execution",
            "notes": [
                {
                    "id": 1306,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 436,
                    "created_at": "2020-04-24T23:39:14.090Z",
                    "updated_at": "2020-04-24T23:39:14.090Z"
                },
                {
                    "id": 1307,
                    "text": "sampled a sardine eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 436,
                    "created_at": "2020-04-24T23:39:14.104Z",
                    "updated_at": "2020-04-24T23:39:14.104Z"
                },
                {
                    "id": 1308,
                    "text": "played a Acoustic Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 436,
                    "created_at": "2020-04-24T23:39:14.111Z",
                    "updated_at": "2020-04-24T23:39:14.111Z"
                }
            ]
        }
    },
    {
        "id": "437",
        "type": "card",
        "attributes": {
            "strategy": "State the problem as clearly as possible",
            "notes": [
                {
                    "id": 1309,
                    "text": "wrote a song for the Lyra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 437,
                    "created_at": "2020-04-24T23:39:14.118Z",
                    "updated_at": "2020-04-24T23:39:14.118Z"
                },
                {
                    "id": 1310,
                    "text": "sampled a wallaby eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 437,
                    "created_at": "2020-04-24T23:39:14.131Z",
                    "updated_at": "2020-04-24T23:39:14.131Z"
                },
                {
                    "id": 1311,
                    "text": "played a Drums in the key of A#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 437,
                    "created_at": "2020-04-24T23:39:14.138Z",
                    "updated_at": "2020-04-24T23:39:14.138Z"
                }
            ]
        }
    },
    {
        "id": "438",
        "type": "card",
        "attributes": {
            "strategy": "Take a break",
            "notes": [
                {
                    "id": 1312,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 438,
                    "created_at": "2020-04-24T23:39:14.145Z",
                    "updated_at": "2020-04-24T23:39:14.145Z"
                },
                {
                    "id": 1313,
                    "text": "sampled a moose eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 438,
                    "created_at": "2020-04-24T23:39:14.152Z",
                    "updated_at": "2020-04-24T23:39:14.152Z"
                },
                {
                    "id": 1314,
                    "text": "played a Organ in the key of Ab",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 438,
                    "created_at": "2020-04-24T23:39:14.158Z",
                    "updated_at": "2020-04-24T23:39:14.158Z"
                }
            ]
        }
    },
    {
        "id": "439",
        "type": "card",
        "attributes": {
            "strategy": "Take away the important parts",
            "notes": [
                {
                    "id": 1315,
                    "text": "wrote a song for the Pisces constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 439,
                    "created_at": "2020-04-24T23:39:14.166Z",
                    "updated_at": "2020-04-24T23:39:14.166Z"
                },
                {
                    "id": 1316,
                    "text": "sampled a macaw eating Kiwi Fruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 439,
                    "created_at": "2020-04-24T23:39:14.173Z",
                    "updated_at": "2020-04-24T23:39:14.173Z"
                },
                {
                    "id": 1317,
                    "text": "played a Organ in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 439,
                    "created_at": "2020-04-24T23:39:14.180Z",
                    "updated_at": "2020-04-24T23:39:14.180Z"
                }
            ]
        }
    },
    {
        "id": "440",
        "type": "card",
        "attributes": {
            "strategy": "The inconsistency principle",
            "notes": [
                {
                    "id": 1318,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 440,
                    "created_at": "2020-04-24T23:39:14.187Z",
                    "updated_at": "2020-04-24T23:39:14.187Z"
                },
                {
                    "id": 1319,
                    "text": "sampled a cattle eating Blueberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 440,
                    "created_at": "2020-04-24T23:39:14.193Z",
                    "updated_at": "2020-04-24T23:39:14.193Z"
                },
                {
                    "id": 1320,
                    "text": "played a Organ in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 440,
                    "created_at": "2020-04-24T23:39:14.199Z",
                    "updated_at": "2020-04-24T23:39:14.199Z"
                }
            ]
        }
    },
    {
        "id": "441",
        "type": "card",
        "attributes": {
            "strategy": "The most easily forgotten thing is the most important",
            "notes": [
                {
                    "id": 1321,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 441,
                    "created_at": "2020-04-24T23:39:14.206Z",
                    "updated_at": "2020-04-24T23:39:14.206Z"
                },
                {
                    "id": 1322,
                    "text": "sampled a louse eating Corella Pear",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 441,
                    "created_at": "2020-04-24T23:39:14.213Z",
                    "updated_at": "2020-04-24T23:39:14.213Z"
                },
                {
                    "id": 1323,
                    "text": "played a Accordion in the key of Cb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 441,
                    "created_at": "2020-04-24T23:39:14.219Z",
                    "updated_at": "2020-04-24T23:39:14.219Z"
                }
            ]
        }
    },
    {
        "id": "442",
        "type": "card",
        "attributes": {
            "strategy": "Think - inside the work -outside the work",
            "notes": [
                {
                    "id": 1324,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 442,
                    "created_at": "2020-04-24T23:39:14.225Z",
                    "updated_at": "2020-04-24T23:39:14.225Z"
                },
                {
                    "id": 1325,
                    "text": "sampled a mallard eating Cherries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 442,
                    "created_at": "2020-04-24T23:39:14.232Z",
                    "updated_at": "2020-04-24T23:39:14.232Z"
                },
                {
                    "id": 1326,
                    "text": "played a Accordion in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 442,
                    "created_at": "2020-04-24T23:39:14.238Z",
                    "updated_at": "2020-04-24T23:39:14.238Z"
                }
            ]
        }
    },
    {
        "id": "443",
        "type": "card",
        "attributes": {
            "strategy": "Tidy up",
            "notes": [
                {
                    "id": 1327,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 443,
                    "created_at": "2020-04-24T23:39:14.245Z",
                    "updated_at": "2020-04-24T23:39:14.245Z"
                },
                {
                    "id": 1328,
                    "text": "sampled a salmon eating Mangosteens",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 443,
                    "created_at": "2020-04-24T23:39:14.251Z",
                    "updated_at": "2020-04-24T23:39:14.251Z"
                },
                {
                    "id": 1329,
                    "text": "played a Electric Guitar in the key of G#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 443,
                    "created_at": "2020-04-24T23:39:14.257Z",
                    "updated_at": "2020-04-24T23:39:14.257Z"
                }
            ]
        }
    },
    {
        "id": "444",
        "type": "card",
        "attributes": {
            "strategy": "Try faking it (from Stewart Brand)",
            "notes": [
                {
                    "id": 1330,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 444,
                    "created_at": "2020-04-24T23:39:14.264Z",
                    "updated_at": "2020-04-24T23:39:14.264Z"
                },
                {
                    "id": 1331,
                    "text": "sampled a pig eating Grapes",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 444,
                    "created_at": "2020-04-24T23:39:14.270Z",
                    "updated_at": "2020-04-24T23:39:14.270Z"
                },
                {
                    "id": 1332,
                    "text": "played a Drums in the key of Bb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 444,
                    "created_at": "2020-04-24T23:39:14.277Z",
                    "updated_at": "2020-04-24T23:39:14.277Z"
                }
            ]
        }
    },
    {
        "id": "445",
        "type": "card",
        "attributes": {
            "strategy": "Turn it upside down",
            "notes": [
                {
                    "id": 1333,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 445,
                    "created_at": "2020-04-24T23:39:14.283Z",
                    "updated_at": "2020-04-24T23:39:14.283Z"
                },
                {
                    "id": 1334,
                    "text": "sampled a porcupine eating Custard Apples",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 445,
                    "created_at": "2020-04-24T23:39:14.290Z",
                    "updated_at": "2020-04-24T23:39:14.290Z"
                },
                {
                    "id": 1335,
                    "text": "played a Clarinet in the key of F",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 445,
                    "created_at": "2020-04-24T23:39:14.298Z",
                    "updated_at": "2020-04-24T23:39:14.298Z"
                }
            ]
        }
    },
    {
        "id": "446",
        "type": "card",
        "attributes": {
            "strategy": "Use an old idea",
            "notes": [
                {
                    "id": 1336,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 446,
                    "created_at": "2020-04-24T23:39:14.305Z",
                    "updated_at": "2020-04-24T23:39:14.305Z"
                },
                {
                    "id": 1337,
                    "text": "sampled a grasshopper eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 446,
                    "created_at": "2020-04-24T23:39:14.313Z",
                    "updated_at": "2020-04-24T23:39:14.313Z"
                },
                {
                    "id": 1338,
                    "text": "played a Electric Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 446,
                    "created_at": "2020-04-24T23:39:14.319Z",
                    "updated_at": "2020-04-24T23:39:14.319Z"
                }
            ]
        }
    },
    {
        "id": "447",
        "type": "card",
        "attributes": {
            "strategy": "Use cliches",
            "notes": [
                {
                    "id": 1339,
                    "text": "wrote a song for the Leo constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 447,
                    "created_at": "2020-04-24T23:39:14.326Z",
                    "updated_at": "2020-04-24T23:39:14.326Z"
                },
                {
                    "id": 1340,
                    "text": "sampled a trout eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 447,
                    "created_at": "2020-04-24T23:39:14.332Z",
                    "updated_at": "2020-04-24T23:39:14.332Z"
                },
                {
                    "id": 1341,
                    "text": "played a Xylophone in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 447,
                    "created_at": "2020-04-24T23:39:14.338Z",
                    "updated_at": "2020-04-24T23:39:14.338Z"
                }
            ]
        }
    },
    {
        "id": "448",
        "type": "card",
        "attributes": {
            "strategy": "Use filters",
            "notes": [
                {
                    "id": 1342,
                    "text": "wrote a song for the Sagittarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 448,
                    "created_at": "2020-04-24T23:39:14.345Z",
                    "updated_at": "2020-04-24T23:39:14.345Z"
                },
                {
                    "id": 1343,
                    "text": "sampled a cicada eating Butternut pumpkin",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 448,
                    "created_at": "2020-04-24T23:39:14.351Z",
                    "updated_at": "2020-04-24T23:39:14.351Z"
                },
                {
                    "id": 1344,
                    "text": "played a Violin in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 448,
                    "created_at": "2020-04-24T23:39:14.357Z",
                    "updated_at": "2020-04-24T23:39:14.357Z"
                }
            ]
        }
    },
    {
        "id": "449",
        "type": "card",
        "attributes": {
            "strategy": "Use something nearby as a model",
            "notes": [
                {
                    "id": 1345,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 449,
                    "created_at": "2020-04-24T23:39:14.364Z",
                    "updated_at": "2020-04-24T23:39:14.364Z"
                },
                {
                    "id": 1346,
                    "text": "sampled a ant eating Blood oranges",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 449,
                    "created_at": "2020-04-24T23:39:14.370Z",
                    "updated_at": "2020-04-24T23:39:14.370Z"
                },
                {
                    "id": 1347,
                    "text": "played a Oboe in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 449,
                    "created_at": "2020-04-24T23:39:14.377Z",
                    "updated_at": "2020-04-24T23:39:14.377Z"
                }
            ]
        }
    },
    {
        "id": "450",
        "type": "card",
        "attributes": {
            "strategy": "Use 'unqualified' people",
            "notes": [
                {
                    "id": 1348,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 450,
                    "created_at": "2020-04-24T23:39:14.383Z",
                    "updated_at": "2020-04-24T23:39:14.383Z"
                },
                {
                    "id": 1349,
                    "text": "sampled a coyote eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 450,
                    "created_at": "2020-04-24T23:39:14.389Z",
                    "updated_at": "2020-04-24T23:39:14.389Z"
                },
                {
                    "id": 1350,
                    "text": "played a Clarinet in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 450,
                    "created_at": "2020-04-24T23:39:14.396Z",
                    "updated_at": "2020-04-24T23:39:14.396Z"
                }
            ]
        }
    },
    {
        "id": "451",
        "type": "card",
        "attributes": {
            "strategy": "Use your own ideas",
            "notes": [
                {
                    "id": 1351,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 451,
                    "created_at": "2020-04-24T23:39:14.402Z",
                    "updated_at": "2020-04-24T23:39:14.402Z"
                },
                {
                    "id": 1352,
                    "text": "sampled a yellowjacket eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 451,
                    "created_at": "2020-04-24T23:39:14.408Z",
                    "updated_at": "2020-04-24T23:39:14.408Z"
                },
                {
                    "id": 1353,
                    "text": "played a Violin in the key of D#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 451,
                    "created_at": "2020-04-24T23:39:14.415Z",
                    "updated_at": "2020-04-24T23:39:14.415Z"
                }
            ]
        }
    },
    {
        "id": "452",
        "type": "card",
        "attributes": {
            "strategy": "Voice your suspicions",
            "notes": [
                {
                    "id": 1354,
                    "text": "wrote a song for the Auriga constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 452,
                    "created_at": "2020-04-24T23:39:14.422Z",
                    "updated_at": "2020-04-24T23:39:14.422Z"
                },
                {
                    "id": 1355,
                    "text": "sampled a macaw eating Blackberries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 452,
                    "created_at": "2020-04-24T23:39:14.429Z",
                    "updated_at": "2020-04-24T23:39:14.429Z"
                },
                {
                    "id": 1356,
                    "text": "played a Ukelele in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 452,
                    "created_at": "2020-04-24T23:39:14.436Z",
                    "updated_at": "2020-04-24T23:39:14.436Z"
                }
            ]
        }
    },
    {
        "id": "453",
        "type": "card",
        "attributes": {
            "strategy": "Water",
            "notes": [
                {
                    "id": 1357,
                    "text": "wrote a song for the Aquarius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 453,
                    "created_at": "2020-04-24T23:39:14.442Z",
                    "updated_at": "2020-04-24T23:39:14.442Z"
                },
                {
                    "id": 1358,
                    "text": "sampled a hippopotamus eating Watermelon",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 453,
                    "created_at": "2020-04-24T23:39:14.448Z",
                    "updated_at": "2020-04-24T23:39:14.448Z"
                },
                {
                    "id": 1359,
                    "text": "played a Trumpet in the key of Eb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 453,
                    "created_at": "2020-04-24T23:39:14.455Z",
                    "updated_at": "2020-04-24T23:39:14.455Z"
                }
            ]
        }
    },
    {
        "id": "454",
        "type": "card",
        "attributes": {
            "strategy": "What context would look right?",
            "notes": [
                {
                    "id": 1360,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 454,
                    "created_at": "2020-04-24T23:39:14.461Z",
                    "updated_at": "2020-04-24T23:39:14.461Z"
                },
                {
                    "id": 1361,
                    "text": "sampled a guinea pig eating Aubergine",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 454,
                    "created_at": "2020-04-24T23:39:14.467Z",
                    "updated_at": "2020-04-24T23:39:14.467Z"
                },
                {
                    "id": 1362,
                    "text": "played a Electric Guitar in the key of C#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 454,
                    "created_at": "2020-04-24T23:39:14.473Z",
                    "updated_at": "2020-04-24T23:39:14.473Z"
                }
            ]
        }
    },
    {
        "id": "455",
        "type": "card",
        "attributes": {
            "strategy": "What is the simplest solution?",
            "notes": [
                {
                    "id": 1363,
                    "text": "wrote a song for the Canis Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 455,
                    "created_at": "2020-04-24T23:39:14.480Z",
                    "updated_at": "2020-04-24T23:39:14.480Z"
                },
                {
                    "id": 1364,
                    "text": "sampled a walrus eating Bush Tomato",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 455,
                    "created_at": "2020-04-24T23:39:14.487Z",
                    "updated_at": "2020-04-24T23:39:14.487Z"
                },
                {
                    "id": 1365,
                    "text": "played a Bass Guitar in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 455,
                    "created_at": "2020-04-24T23:39:14.493Z",
                    "updated_at": "2020-04-24T23:39:14.493Z"
                }
            ]
        }
    },
    {
        "id": "456",
        "type": "card",
        "attributes": {
            "strategy": "What mistakes did you make last time?",
            "notes": [
                {
                    "id": 1366,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 456,
                    "created_at": "2020-04-24T23:39:14.500Z",
                    "updated_at": "2020-04-24T23:39:14.500Z"
                },
                {
                    "id": 1367,
                    "text": "sampled a swan eating Elderberry",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 456,
                    "created_at": "2020-04-24T23:39:14.507Z",
                    "updated_at": "2020-04-24T23:39:14.507Z"
                },
                {
                    "id": 1368,
                    "text": "played a Clarinet in the key of Gb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 456,
                    "created_at": "2020-04-24T23:39:14.513Z",
                    "updated_at": "2020-04-24T23:39:14.513Z"
                }
            ]
        }
    },
    {
        "id": "457",
        "type": "card",
        "attributes": {
            "strategy": "What to increase? What to reduce? What to maintain?",
            "notes": [
                {
                    "id": 1369,
                    "text": "wrote a song for the Big Dipper constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 457,
                    "created_at": "2020-04-24T23:39:14.521Z",
                    "updated_at": "2020-04-24T23:39:14.521Z"
                },
                {
                    "id": 1370,
                    "text": "sampled a dinosaur eating Pears",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 457,
                    "created_at": "2020-04-24T23:39:14.527Z",
                    "updated_at": "2020-04-24T23:39:14.527Z"
                },
                {
                    "id": 1371,
                    "text": "played a Accordion in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 457,
                    "created_at": "2020-04-24T23:39:14.534Z",
                    "updated_at": "2020-04-24T23:39:14.534Z"
                }
            ]
        }
    },
    {
        "id": "458",
        "type": "card",
        "attributes": {
            "strategy": "What were you really thinking about just now?",
            "notes": [
                {
                    "id": 1372,
                    "text": "wrote a song for the Canis Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 458,
                    "created_at": "2020-04-24T23:39:14.541Z",
                    "updated_at": "2020-04-24T23:39:14.541Z"
                },
                {
                    "id": 1373,
                    "text": "sampled a goldfish eating Nectarines",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 458,
                    "created_at": "2020-04-24T23:39:14.547Z",
                    "updated_at": "2020-04-24T23:39:14.547Z"
                },
                {
                    "id": 1374,
                    "text": "played a Ukelele in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 458,
                    "created_at": "2020-04-24T23:39:14.553Z",
                    "updated_at": "2020-04-24T23:39:14.553Z"
                }
            ]
        }
    },
    {
        "id": "459",
        "type": "card",
        "attributes": {
            "strategy": "What wouldn't you do?",
            "notes": [
                {
                    "id": 1375,
                    "text": "wrote a song for the Scorpius constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 459,
                    "created_at": "2020-04-24T23:39:14.560Z",
                    "updated_at": "2020-04-24T23:39:14.560Z"
                },
                {
                    "id": 1376,
                    "text": "sampled a walrus eating Fingerlime",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 459,
                    "created_at": "2020-04-24T23:39:14.567Z",
                    "updated_at": "2020-04-24T23:39:14.567Z"
                },
                {
                    "id": 1377,
                    "text": "played a Electric Guitar in the key of B",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 459,
                    "created_at": "2020-04-24T23:39:14.574Z",
                    "updated_at": "2020-04-24T23:39:14.574Z"
                }
            ]
        }
    },
    {
        "id": "460",
        "type": "card",
        "attributes": {
            "strategy": "What would your closest friend do?",
            "notes": [
                {
                    "id": 1378,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 460,
                    "created_at": "2020-04-24T23:39:14.580Z",
                    "updated_at": "2020-04-24T23:39:14.580Z"
                },
                {
                    "id": 1379,
                    "text": "sampled a rat eating Feijoa",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 460,
                    "created_at": "2020-04-24T23:39:14.586Z",
                    "updated_at": "2020-04-24T23:39:14.586Z"
                },
                {
                    "id": 1380,
                    "text": "played a Saxophone in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 460,
                    "created_at": "2020-04-24T23:39:14.592Z",
                    "updated_at": "2020-04-24T23:39:14.592Z"
                }
            ]
        }
    },
    {
        "id": "461",
        "type": "card",
        "attributes": {
            "strategy": "When is it for?",
            "notes": [
                {
                    "id": 1381,
                    "text": "wrote a song for the Gemini constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 461,
                    "created_at": "2020-04-24T23:39:14.599Z",
                    "updated_at": "2020-04-24T23:39:14.599Z"
                },
                {
                    "id": 1382,
                    "text": "sampled a cockroach eating Snowpeas",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 461,
                    "created_at": "2020-04-24T23:39:14.605Z",
                    "updated_at": "2020-04-24T23:39:14.605Z"
                },
                {
                    "id": 1383,
                    "text": "played a Harp in the key of E#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 461,
                    "created_at": "2020-04-24T23:39:14.612Z",
                    "updated_at": "2020-04-24T23:39:14.612Z"
                }
            ]
        }
    },
    {
        "id": "462",
        "type": "card",
        "attributes": {
            "strategy": "Where is the edge?",
            "notes": [
                {
                    "id": 1384,
                    "text": "wrote a song for the Leo Minor constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 462,
                    "created_at": "2020-04-24T23:39:14.618Z",
                    "updated_at": "2020-04-24T23:39:14.618Z"
                },
                {
                    "id": 1385,
                    "text": "sampled a zebra eating Guava",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 462,
                    "created_at": "2020-04-24T23:39:14.624Z",
                    "updated_at": "2020-04-24T23:39:14.624Z"
                },
                {
                    "id": 1386,
                    "text": "played a Flute in the key of C",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 462,
                    "created_at": "2020-04-24T23:39:14.630Z",
                    "updated_at": "2020-04-24T23:39:14.630Z"
                }
            ]
        }
    },
    {
        "id": "463",
        "type": "card",
        "attributes": {
            "strategy": "Which parts can be grouped?",
            "notes": [
                {
                    "id": 1387,
                    "text": "wrote a song for the Ursa Major constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 463,
                    "created_at": "2020-04-24T23:39:14.637Z",
                    "updated_at": "2020-04-24T23:39:14.637Z"
                },
                {
                    "id": 1388,
                    "text": "sampled a mole eating Passionfruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 463,
                    "created_at": "2020-04-24T23:39:14.644Z",
                    "updated_at": "2020-04-24T23:39:14.644Z"
                },
                {
                    "id": 1389,
                    "text": "played a Bass Guitar in the key of Fb",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 463,
                    "created_at": "2020-04-24T23:39:14.651Z",
                    "updated_at": "2020-04-24T23:39:14.651Z"
                }
            ]
        }
    },
    {
        "id": "464",
        "type": "card",
        "attributes": {
            "strategy": "Work at a different speed",
            "notes": [
                {
                    "id": 1390,
                    "text": "wrote a song for the Libra constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 464,
                    "created_at": "2020-04-24T23:39:14.657Z",
                    "updated_at": "2020-04-24T23:39:14.657Z"
                },
                {
                    "id": 1391,
                    "text": "sampled a giraffe eating Grapefruit",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 464,
                    "created_at": "2020-04-24T23:39:14.664Z",
                    "updated_at": "2020-04-24T23:39:14.664Z"
                },
                {
                    "id": 1392,
                    "text": "played a Cello in the key of F#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 464,
                    "created_at": "2020-04-24T23:39:14.671Z",
                    "updated_at": "2020-04-24T23:39:14.671Z"
                }
            ]
        }
    },
    {
        "id": "465",
        "type": "card",
        "attributes": {
            "strategy": "Would anyone want it?",
            "notes": [
                {
                    "id": 1393,
                    "text": "wrote a song for the Aries constellation",
                    "url": "https://www.instagram.com/p/B8jMuquFDrk/",
                    "card_id": 465,
                    "created_at": "2020-04-24T23:39:14.678Z",
                    "updated_at": "2020-04-24T23:39:14.678Z"
                },
                {
                    "id": 1394,
                    "text": "sampled a sardine eating Berries",
                    "url": "https://m.soundcloud.com/markdenardo/sets/yoga",
                    "card_id": 465,
                    "created_at": "2020-04-24T23:39:14.685Z",
                    "updated_at": "2020-04-24T23:39:14.685Z"
                },
                {
                    "id": 1395,
                    "text": "played a Ukelele in the key of B#",
                    "url": "https://www.instagram.com/p/B678grvlA1P/",
                    "card_id": 465,
                    "created_at": "2020-04-24T23:39:14.692Z",
                    "updated_at": "2020-04-24T23:39:14.692Z"
                }
            ]
        }
    },
    {
        "id": "466",
        "type": "card",
        "attributes": {
            "strategy": "Your mistake was a hidden intention",
            "notes": []
        }
    }
]
// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(cards))
// })

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/cards', (request, response) => {
    response.json(cards)
})

app.get('/api/cards/:id', (request, response) => {
    const id = request.params.id
    const card = cards.find(card => {
        console.log(card.id, typeof card.id, id, typeof id, card.id === id)
        return card.id === id
    })
    console.log(card)
    response.json(card)
})

app.delete('/api/cards/:id', (request, response) => {
    const id = Number(request.params.id)
    cards = cards.filter(card => card.id !== id)

    response.status(204).end()
})

app.post('/api/cards', (request, response) => {
    const card = request.body
    console.log(card)

    response.json(card)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)


