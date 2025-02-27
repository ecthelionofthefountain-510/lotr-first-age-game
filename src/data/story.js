const storyData = {
  Beren: [
    { location: "Doriath", text: "Beren har flytt till Doriath och möter Lúthien.", image: "/assets/locations/Doriath.png" },
    { location: "Menegroth", text: "Beren står inför Thingol och ges uppdraget att hämta en Silmaril.", image: "/assets/locations/Menegroth.png" },
    { location: "Angband", text: "Beren smyger in i Angband för att stjäla en Silmaril.", image: "/assets/locations/Angband.png" }
  ],
  Túrin: [
    { location: "Dor-lómin", text: "Túrins barndom i skuggornas land, innan han flyr.", image: "/assets/locations/Nirnaeth-Arnoediad.png" },
    { location: "Doriath", text: "Túrin tas in i kung Thingols hov och uppfostras där.", image: "/assets/locations/Doriath.png" },
    { location: "Nargothrond", text: "Túrin leder alverna i strid, men hans stolthet leder till fördärv.", image: "/assets/locations/Nargothrond.png" },
    { location: "Cabed-en-Aras", text: "Túrin konfronterar Glaurung och tar ett tragiskt öde.", image: "/assets/locations/Thangorodrim.png" }
  ],
  Fingolfin: [
    {
      location: "Barad Eithel",
      text: "Fingolfin prepares for his final stand. He watches as Morgoth’s armies march across Beleriand, realizing the end is near.",
      image: "/assets/locations/Belegost.png",
      choices: [
        { text: "Ride alone to Angband and challenge Morgoth.", next: 1 },
        { text: "Rally the remaining Noldor and fight defensively.", next: 2 }
      ]
    },
    {
      location: "Thangorodrim",
      text: "Fingolfin rides alone to Angband and challenges Morgoth in single combat. The duel shakes the earth as Morgoth himself descends to battle.",
      image: "/assets/locations/Thangorodrim.png",
      choices: [
        { text: "Fight!", next: "battle-fingolfin" } // Stridssystemet startar här
      ]
    },
    {
      location: "Eithel Sirion",
      text: "Fingolfin chooses to defend his people instead. Though noble, this choice prolongs the inevitable defeat of the Noldor.",
      image: "/assets/locations/Nargothrond.png",
      choices: [
        { text: "Lead a final charge against the enemy.", next: 5 },
        { text: "Retreat and protect the last survivors.", next: 6 }
      ]
    },
    {
      location: "Thangorodrim",
      text: "Fingolfin wounds Morgoth, striking his foot and causing the Dark Lord to limp forever. But the battle takes its toll, and he ultimately falls.",
      image: "/assets/locations/Thangorodrim.png",
      choices: []
    },
    {
      location: "Thangorodrim",
      text: "Fingolfin dodges Morgoth’s first blows, but the Dark Lord’s power is too overwhelming. Eventually, he is crushed under Morgoth’s hammer, Grond.",
      image: "/assets/locations/Thangorodrim.png",
      choices: []
    },
    {
      location: "Fingolfin's Fall",
      text: "Fingolfin lies broken before the gates of Angband. Morgoth, limping from his wounds, crushes the Elf-lord beneath his great foot. His body is taken by Thorondor, the mighty eagle, and carried away.",
      image: "/assets/locations/Thangorodrim.png",
      choices: []
    }
  ],
  Ecthelion: [
    { location: "Gondolin", text: "Ecthelion försvarar Gondolin mot Morgoths styrkor.", image: "/assets/locations/Gondolin.png" },
    { location: "Fallen Gates", text: "Ecthelion slåss mot Gothmog, Balrogarnas herre.", image: "/assets/locations/Nargothrond.png" }
  ],
  Tuor: [
    { location: "Belegost", text: "Tuor färdas genom dvärgarnas rike Belegost.", image: "/assets/locations/Belegost.png" },
    { location: "Menegroth", text: "Tuor besöker alvernas stora sal Menegroth.", image: "/assets/locations/Menegroth.png" },
    { location: "Gondolin", text: "Tuor når den gömda staden och blir en rådgivare.", image: "/assets/locations/Gondolin.png" }
  ],
  Azaghal: [
    {
      location: "Belegost",
      text: "Azaghal, Lord of Belegost, receives word that Morgoth’s armies are marching. The Dwarves must decide their course of action.",
      image: "/assets/locations/Belegost.png",
      choices: [
        { text: "March to war and support the Elves.", next: 1 },
        { text: "Stay in Belegost and fortify against invasion.", next: 2 }
      ]
    },
    {
      location: "Nirnaeth Arnoediad",
      text: "Azaghal and his dwarves arrive at the battlefield. Their iron-clad warriors charge against Morgoth’s forces, wielding axes and fire.",
      image: "/assets/locations/Nirnaeth-Arnoediad.png",
      choices: [
        { text: "Engage Glaurung, the Father of Dragons.", next: "battle-azaghal" } // Stridssystemet startar här
      ]
    },
    {
      location: "Belegost",
      text: "The dwarves remain in their mountain halls, avoiding destruction but forsaking their allies. Belegost is spared, but at what cost?",
      image: "/assets/locations/Belegost.png",
      choices: []
    },
    {
      location: "Angband",
      text: "Azaghal fights Glaurung, piercing the dragon’s belly with his dagger before being crushed beneath its weight.",
      image: "/assets/locations/Angband.png",
      choices: []
    },
    {
      location: "Nirnaeth Arnoediad",
      text: "Azaghal’s warriors break through Morgoth’s orcish ranks, dealing massive damage before being forced to retreat.",
      image: "/assets/locations/Nirnaeth-Arnoediad.png",
      choices: []
    }
  ],
  Húrin: [
    {
      location: "Nirnaeth Arnoediad",
      text: "Húrin fights alongside Turgon, holding the western flank. The battle turns into chaos as Morgoth’s forces encircle them.",
      image: "/assets/story-scenes/hurin-turgon.png",
      choices: [
        { text: "Stay and hold the line to let Turgon escape.", next: 1 },
        { text: "Try to break through with your warriors.", next: 2 }
      ]
    },
    {
      location: "Nirnaeth Arnoediad",
      text: "Húrin stands his ground, buying time for Gondolin’s king to flee. One by one, his warriors fall, until he alone remains.",
      image: "/assets/locations/Nirnaeth-Arnoediad.png",
      choices: [
        { text: "Fight until the last breath.", next: "battle-hurin" } // Stridssystemet startar här
      ]
    },
    {
      location: "Ered Wethrin",
      text: "Húrin leads a desperate charge, but Morgoth’s armies crush his forces. Captured, he is taken to Thangorodrim.",
      image: "/assets/locations/Ered-Wethrin.png",
      choices: []
    },
    {
      location: "Thangorodrim",
      text: "Húrin slays countless orcs, shouting 'Aurë entuluva!' but is eventually overwhelmed. Morgoth binds him in chains to watch the downfall of his family.",
      image: "/assets/story-scenes/hurin-chained.png",
      choices: []
    },
    {
      location: "Thangorodrim",
      text: "Surrendering to Morgoth is not a choice. Húrin is dragged to Angband and cursed to witness his bloodline’s doom.",
      image: "/assets/locations/Thangorodrim.png",
      choices: []
    }
  ],
  Eönwë: [
    { location: "Valinor", text: "Eönwë kallas till strid av Manwë och samlar Valars armé.", image: "/assets/locations/Belegost.png" },
    { location: "Beleriand", text: "Eönwë leder Valars här i det Stora Slaget.", image: "/assets/locations/Nargothrond.png" },
    { location: "Angband", text: "Eönwë besegrar Morgoth och kedjar honom i tomrummet.", image: "/assets/locations/Angband.png" }
  ],
  Lúthien: [
    {
      location: "Doriath",  // Index 0
      text: "In the enchanted forests of Doriath, Lúthien dances beneath the moon. She has yet to meet Beren, but fate is already weaving their paths together.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Continue dancing in the moonlight", next: 1 },
        { text: "Return to Menegroth", next: 2 }
      ]
    },
    {
      location: "Forest Glade",  // Index 1
      text: "As Lúthien dances, she hears a strange voice singing in the distance. It is Beren, a mortal man who has wandered into her realm. Their eyes meet, and destiny is set in motion.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Help Beren escape the hunters", next: 3 }
      ]
    },
    {
      location: "Menegroth",  // Index 2
      text: "In the halls of Menegroth, King Thingol learns of Beren and Lúthien's love. Enraged, he demands a Silmaril from Morgoth's crown as bride-price, hoping to send Beren to his death.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Accept Thingol's judgment", next: 4 },
        { text: "Defy your father openly", next: 5 }
      ]
    },
    {
      location: "Tol-in-Gaurhoth",  // Index 3
      text: "Learning that Beren has been captured by Sauron, Lúthien escapes her confinement in Doriath. She makes her way to Sauron's isle, where dark powers hold dominion.",
      image: "/assets/locations/Tol-in-Gaurhoth.png",
      choices: [
        { text: "Confront Sauron", next: "battle-luthien" }
      ]
    },
    {
      location: "Tol-in-Gaurhoth",  // Index 4
      text: "Defying her father openly brings swift consequences. Thingol orders her confined to a house high in the branches of Hírilorn, but Lúthien's determination cannot be contained.",
      image: "/assets/locations/Tol-in-Gaurhoth.png",
      choices: [
        { text: "Use your magic to escape", next: 3 }
      ]
    },
    {
      location: "Dungeon of Tol-in-Gaurhoth",  // Index 5
      text: "With Sauron defeated and his tower fallen, Lúthien finds Beren in the dungeons. Together with Huan, the great wolfhound, they prepare for their next challenge.",
      image: "/assets/story-scenes/luthien-saves-beren.png",
      choices: [
        { text: "Journey towards Angband", next: 6 }
      ]
    },
    {
      location: "Anfauglith",  // Index 6
      text: "Crossing the vast plain before Angband, Lúthien, Beren, and Huan devise their plan. They must somehow bypass Morgoth's defenses and reach the Iron Crown itself.",
      image: "/assets/locations/Anfauglith.png",
      choices: [
        { text: "Use song and enchantment to enter", next: 7 },
        { text: "Attempt to sneak in through stealth", next: 7 }
      ]
    },
    {
      location: "Angband",  // Index 7
      text: "Through Lúthien's power and enchantment, they enter Morgoth's fortress. In his great hall, the Dark Lord himself sits upon his throne, intrigued by Lúthien's dance.",
      image: "/assets/locations/Angband.png",
      choices: [
        { text: "Dance before Morgoth", next: 8 }
      ]
    },
    {
      location: "Morgoth's Throne",  // Index 8
      text: "Lúthien's dance entrances Morgoth and his entire court. As her spell takes hold, the Dark Lord's eyelids grow heavy with sleep. This is their moment.",
      image: "/assets/story-scenes/luthien-sings-to-morgoth.png",
      choices: [
        { text: "Complete the enchantment", next: 9 }
      ]
    },
    {
      location: "Victory",  // Index 9
      text: "As Morgoth slumbers, Beren cuts a Silmaril from his crown. The jewel blazes with holy light in his hand. But greed takes him, and he attempts to take another...",
      image: "/assets/story-scenes/beren-cuts-silmaril.png",
      choices: [
        { text: "Try to stop Beren", next: 10 }
      ]
    },
    {
      location: "Morgoth Awakens",  // Index 10
      text: "The knife slips, cutting Morgoth's cheek. The Dark Lord's eyes snap open, and his roar of fury shakes the very foundations of Angband. The spell is broken. Take flight!",
      image: "/assets/story-scenes/greedy-beren.png",
      choices: [
        { text: "Flee with Beren", next: 11 }
      ]
    },
    {
      location: "Gates of Angband",  // Index 11
      text: "Racing through the halls of Angband, they reach the gates. But there waits Carcharoth, the mightiest of all wolves. The Silmaril blazes in Beren's hand.",
      image: "/assets/characters/Carcharoth.png",
      choices: [
        { text: "Try to pass the wolf", next: 12 }
      ]
    },
    {
      location: "Carcharoth's Challenge",  // Index 12
      text: "Beren holds up the Silmaril, hoping to terrify the wolf with its holy light. But Carcharoth, maddened by Morgoth's evil and his own rage, bites off Beren's hand, swallowing both it and the Silmaril.",
      image: "/assets/story-scenes/carcharoth-rage.png",
      choices: [
        { text: "Escape while the wolf writhes in pain", next: 13 }
      ]
    },
    {
      location: "The Flight",  // Index 13
      text: "As Carcharoth runs wild with pain from the burning Silmaril within him, Lúthien tends to Beren's grievous wound. Behind them, Morgoth's armies pour forth from Angband. They must flee quickly.",
      image: "/assets/story-scenes/beren-luthien-huan-escape.png",
      choices: []
    }
],
  Thingol: [
    { location: "Menegroth", text: "Thingol styr över Doriath från sin gyllene sal.", image: "/assets/locations/Menegroth.png" },
    { location: "Doriath", text: "Thingol förkastar dvärgarnas krav och skapar konflikt.", image: "/assets/locations/Doriath.png" },
    { location: "Menegroth", text: "Dvärgarna stormar Menegroth och Thingol möter sitt öde.", image: "/assets/locations/Menegroth.png" }
  ]
};

export default storyData;