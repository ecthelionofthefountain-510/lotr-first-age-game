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
        { text: "Fight!", next: "battle" }
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
        { text: "Engage Glaurung, the Father of Dragons.", next: 3 },
        { text: "Focus on breaking the orc ranks.", next: 4 }
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
      image: "/assets/locations/Nirnaeth-Arnoediad.png",
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
        { text: "Fight until the last breath.", next: 3 },
        { text: "Surrender to Morgoth’s forces.", next: 4 }
      ]
    },
    {
      location: "Ered Wethrin",
      text: "Húrin leads a desperate charge, but Morgoth’s armies crush his forces. Captured, he is taken to Thangorodrim.",
      image: "/assets/locations/Thangorodrim.png",
      choices: []
    },
    {
      location: "Thangorodrim",
      text: "Húrin slays countless orcs, shouting 'Aurë entuluva!' but is eventually overwhelmed. Morgoth binds him in chains to watch the downfall of his family.",
      image: "/assets/locations/Thangorodrim.png",
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
    { location: "Doriath", text: "Lúthien dansar i månskenet, ovetande om sitt öde.", image: "/assets/locations/Doriath.png" },
    { location: "Menegroth", text: "Lúthien trotsar Thingol och lämnar Doriath för Beren.", image: "/assets/locations/Menegroth.png" },
    { location: "Tol-in-Gaurhoth", text: "Lúthien räddar Beren från Saurons fängelse.", image: "/assets/locations/Tol-in-Gaurhoth.png" }
  ],
  Thingol: [
    { location: "Menegroth", text: "Thingol styr över Doriath från sin gyllene sal.", image: "/assets/locations/Menegroth.png" },
    { location: "Doriath", text: "Thingol förkastar dvärgarnas krav och skapar konflikt.", image: "/assets/locations/Doriath.png" },
    { location: "Menegroth", text: "Dvärgarna stormar Menegroth och Thingol möter sitt öde.", image: "/assets/locations/Menegroth.png" }
  ]
};

export default storyData;