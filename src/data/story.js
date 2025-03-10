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
  ],
  Fëanor: [
  {
    location: "Tirion",
    text: "In the shining city of Tirion upon Túna, Fëanor completes his greatest work—the Silmarils. Three jewels of unparalleled beauty, capturing the light of the Two Trees. Their creation has demanded all his skill and much of his spirit.",
    image: "/assets/locations/Tirion.jpg",
    choices: [
      { text: "Present the Silmarils at court", next: 1 },
      { text: "Keep them hidden from others", next: 2 }
    ]
  },
  {
    location: "Court of Finwë",
    text: "The court of the High King Finwë marvels at the Silmarils' radiance. Your father beams with pride, but you notice the hunger in Melkor's eyes as he watches from the shadows. The Valar decree that such treasures should be shared with all.",
    image: "/assets/story-scenes/court-of-finwe.jpg",
    choices: [
      { text: "Share the light with all Valinor", next: 3 },
      { text: "Refuse and guard your creation", next: 4 }
    ]
  },
  {
    location: "Hidden Forge",
    text: "You keep the Silmarils secret, working tirelessly to enhance their protection. Rumors spread nonetheless. One night, you find evidence of an intruder in your forge—someone has been watching. Dark whispers reach your ears of Melkor's interest.",
    image: "/assets/locations/Feanors-forge.jpg",
    choices: [
      { text: "Seek the Valar's protection", next: 3 },
      { text: "Create stronger defenses alone", next: 4 }
    ]
  },
  {
    location: "Taniquetil",
    text: "You bring the Silmarils before Manwë himself. The Lord of the Breath of Arda blesses your creation, decreeing that the jewels shall bring joy to all of Valinor. For a time, peace reigns, though you never fully relinquish your claim.",
    image: "/assets/locations/Taniquetil.jpg",
    choices: [
      { text: "Continue your work in peace", next: 5 }
    ]
  },
  {
    location: "Formenos",
    text: "Your mistrust grows. You fortify your home and forge at Formenos, surrounding yourself with loyal followers. The Silmarils remain locked away, their light hidden from all but a few. Melkor's lies poison the peace between you and your half-brothers.",
    image: "/assets/locations/Formenos.jpg",
    choices: [
      { text: "Confront Melkor about his lies", next: 5 }
    ]
  },
  {
    location: "Darkness Falls",
    text: "Disaster strikes. Melkor and Ungoliant destroy the Two Trees, plunging Valinor into darkness. In the chaos, they attack Formenos. Your father, King Finwë, is slain—the first death in the Blessed Realm. The Silmarils are stolen.",
    image: "/assets/story-scenes/darkening-of-valinor.jpg",
    choices: [
      { text: "Plead with the Valar to pursue Melkor", next: 6 },
      { text: "Swear an oath to recover the Silmarils", next: 7 }
    ]
  },
  {
    location: "Ring of Doom",
    text: "Before the Valar, you demand action, but they seem more concerned with salvaging the Trees. Yavanna reveals that your Silmarils could restore the light, if broken. The choice is impossible—your father's memory or your greatest creation.",
    image: "/assets/locations/Ring-of-doom.jpg",
    choices: [
      { text: "Refuse to break the Silmarils", next: 7 },
      { text: "Consider sacrificing them", next: 8 }
    ]
  },
  {
    location: "Tirion Square",
    text: "In the darkened square of Tirion, before a great crowd, you and your seven sons swear the terrible Oath: to pursue with vengeance any being who withholds a Silmaril from your possession. The words echo with dreadful power, binding you to your fate.",
    image: "/assets/story-scenes/oath-of-feanor2.jpg",
    choices: [
      { text: "Lead the Noldor to Middle-earth", next: 9 }
    ]
  },
  {
    location: "Council of the Valar",
    text: "Your heart wavers. Perhaps the light of the Trees is worth more than your pride. But before you can decide, news arrives—Melkor has fled to Middle-earth. The Valar debate pursuing him, but their deliberation seems endless to your burning grief.",
    image: "/assets/locations/Taniquetil.jpg",
    choices: [
      { text: "Take matters into your own hands", next: 7 }
    ]
  },
  {
    location: "Shores of Alqualondë",
    text: "You lead your people to the shores, demanding ships from the Teleri to pursue Melkor—now called Morgoth. When they refuse, rage consumes you. The first Kinslaying stains the white shores with elven blood. The ships are taken, but at terrible cost.",
    image: "/assets/story-scenes/kinslaying.jpg",
    choices: [
      { text: "Continue the journey with heavy heart", next: 10 },
      { text: "Abandon those who question your actions", next: 11 }
    ]
  },
  {
    location: "Araman",
    text: "The host marches through the freezing wastes of Araman. Doubt spreads among your followers. Mandos himself appears, pronouncing the Doom of the Noldor—exile and sorrow await all who continue. Many repent, but your pride will not be swayed.",
    image: "/assets/locations/Araman.jpg",
    choices: [
      { text: "Press on despite the Doom", next: 11 }
    ]
  },
  {
    location: "Losgar",
    text: "Reaching the far shore, you order the white ships burned. The flames rise high, a signal to those you've left behind—there is no going back. Your brother Fingolfin and his people are abandoned to cross the Helcaraxë or return in shame.",
    image: "/assets/story-scenes/burning-ships-losghar.jpg",
    choices: [
      { text: "March inland to face Morgoth", next: 12 }
    ]
  },
  {
    location: "Mithrim",
    text: "The shores of Middle-earth welcome you with battle. Morgoth's forces, alerted by the burning ships, attack. Your army is victorious but caught unprepared for the full might of the enemy that soon descends upon you.",
    image: "/assets/story-scenes/noldor-mithrim.jpg",
    choices: [
      { text: "Fight Morgoth's forces", next: "battle-feanor" }
    ]
  }
  ],
  Melian: [
  {
    location: "Gardens of Lórien",
    text: "Among the gardens of Lórien in Valinor, you, Melian, sing in the twilight. Your voice carries the wisdom of the Ainur and the beauty of Arda's first music. The Valar cherish your songs, but there is a yearning in your heart to see the wider world.",
    image: "/assets/story-scenes/melian-lorien.jpg",
    choices: [
      { text: "Explore the shores of Middle-earth", next: 1 },
      { text: "Remain in the service of Irmo", next: 2 }
    ]
  },
  {
    location: "Nan Elmoth",
    text: "In the starlit forests of Nan Elmoth, your song fills the night air. The nightingales gather around you, their voices joining yours. Suddenly, a figure emerges from the shadows—Elwë, lord of the Teleri, drawn by your enchanting melody. Time stands still as your eyes meet.",
    image: "/assets/story-scenes/melian-nan-elmoth.jpg",
    choices: [
      { text: "Approach the elven lord", next: 3 }
    ]
  },
  {
    location: "Halls of Ilmarin",
    text: "You remain in Valinor, serving in the gardens of Lórien. The years pass in bliss under the light of the Two Trees, yet dreams often come to you of unwalked shores and unsung songs. Until one day, a summons arrives from Manwë himself.",
    image: "/assets/story-scenes/melian-halls-of-illmarin.jpg",
    choices: [
      { text: "Answer the summons", next: 4 }
    ]
  },
  {
    location: "First Meeting",
    text: "You approach Elwë, your divine light softened to not overwhelm him. For days that stretch into years, you both stand transfixed, wrapped in love's first embrace. When you finally awaken from this trance, the world has changed—his people have mostly departed West without him.",
    image: "/assets/story-scenes/melian-thingol-meeting.jpg",
    choices: [
      { text: "Stay with Elwë in Middle-earth", next: 5 }
    ]
  },
  {
    location: "Halls of Manwë",
    text: "In the highest halls of Taniquetil, Manwë speaks of a purpose for you beyond Valinor. 'The Children of Ilúvatar will need guidance,' he says. 'And you, Melian, might find what your heart seeks in the eastern lands.' His words confirm what you have long felt.",
    image: "/assets/locations/Halls-of-Manwe.jpg",
    choices: [
      { text: "Journey to Middle-earth", next: 1 }
    ]
  },
  {
    location: "Founding of Doriath",
    text: "With Elwë—now called Thingol in the Sindarin tongue—you establish a realm in the great forests. Your wisdom and his leadership draw many of the Sindar to your protection. But darkness grows beyond your borders, and you foresee threats that will come.",
    image: "/assets/locations/Doriath.png",
    choices: [
      { text: "Raise a girdle of enchantment", next: 6 },
      { text: "Build strength through alliances", next: 7 }
    ]
  },
  {
    location: "The Girdle of Melian",
    text: "Drawing upon your power as a Maia, you weave an enchantment around the borders of your realm—the Girdle of Melian. A maze of shadows and dreams that confounds all who would enter unbidden. Doriath becomes an island of safety in a darkening world.",
    image: "/assets/locations/Girdle-of-Melian.jpg",
    choices: [
      { text: "Guide the realm from Menegroth", next: 8 }
    ]
  },
  {
    location: "Council with the Dwarves",
    text: "Thingol forges an alliance with the Dwarves of Nogrod and Belegost. They bring their craft to help build the underground halls of Menegroth, the Thousand Caves. Their skill married with your vision creates a wonder of the age—carved in the likeness of forests above.",
    image: "/assets/locations/Menegroth2.jpg",
    choices: [
      { text: "Oversee the completion of Menegroth", next: 8 }
    ]
  },
  {
    location: "Menegroth",
    text: "From the Thousand Caves, you and Thingol rule Doriath. The years pass in relative peace behind your protective enchantment. A daughter is born to you—Lúthien, fairest of all the Children of Ilúvatar. But beyond your borders, Morgoth's shadow lengthens.",
    image: "/assets/locations/Menegroth3.jpg",
    choices: [
      { text: "Counsel caution to Thingol", next: 9 },
      { text: "Prepare Lúthien for her destiny", next: 10 }
    ]
  },
  {
    location: "Throne Room of Doriath",
    text: "You advise Thingol against involvement in the wars of the Noldor, foreseeing much sorrow to come. 'Their pride will be their undoing,' you warn. Your husband heeds your counsel in part, but his own pride grows with his power, and he begins to covet treasures that will lead to ruin.",
    image: "/assets/story-scenes/thingol-throne.jpg",
    choices: [
      { text: "Try to temper Thingol's pride", next: 11 }
    ]
  },
  {
    location: "Gardens of Menegroth",
    text: "You watch Lúthien grow into her power, teaching her songs and enchantments. In secret, you glimpse fragments of her fate—a mortal love, a quest beyond hope, and a choice that will echo through the ages. You keep these visions close, knowing some paths must be walked alone.",
    image: "/assets/story-scenes/melian-luthien.jpg",
    choices: [
      { text: "Trust in Lúthien's strength", next: 11 }
    ]
  },
  {
    location: "Chamber of Counsel",
    text: "The Silmaril has come to Doriath, won by Beren and Lúthien at terrible cost. You perceive the doom it carries—the oath of Fëanor's sons will not be denied. 'Send it away,' you plead with Thingol. But the jewel has captured his heart, and he will not listen.",
    image: "/assets/story-scenes/silmaril-melian.jpg",
    choices: [
      { text: "Accept that some fates cannot be changed", next: 12 }
    ]
  },
  {
    location: "Ruins of Menegroth",
    text: "Thingol is slain, betrayed by the dwarven craftsmen he hired to set the Silmaril in the Nauglamír. Grief overwhelms you, and as your concentration falters, the Girdle of Melian begins to dissolve. The protection that has kept Doriath safe for centuries fades.",
    image: "/assets/story-scenes/ruins-menegroth.jpg",
    choices: [
      { text: "Depart Middle-earth forever", next: 13 },
      { text: "Seek out Lúthien one last time", next: 14 }
    ]
  },
  {
    location: "Shores of Valinor",
    text: "Your time in Middle-earth is ended. You return to Valinor, bearing the wisdom and grief of centuries among the mortal lands. In the Gardens of Lórien, you sing once more, but your songs now carry the depths of love and loss that only experience could teach.",
    image: "/assets/story-scenes/melian-valinor.jpg",
    choices: [
      { text: "Find peace in Valinor", next: "end-melian" }
    ]
  },
  {
    location: "Tol Galen",
    text: "You find Lúthien and Beren living in mortal happiness on the green isle of Tol Galen. Though the shadow of mortality now lies upon your daughter, there is joy in her eyes. You embrace her one final time, imparting your last blessing before returning to Valinor alone.",
    image: "/assets/story-scenes/melian-beren-luthien.jpg",
    choices: [
      { text: "Return to Valinor with memories to treasure", next: "end-melian" }
    ]
  }
]
};

export default storyData;