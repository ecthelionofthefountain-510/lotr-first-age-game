const storyData = {
  Beren: [
    {
      location: "Dorthonion",
      text: "Du är Beren, son av Barahir, sista överlevande i ditt folk i Dorthonions högländer. I år har du fört ett ensamt krig mot Morgoths tjänare, hämnandes din fars död. Men jakten kommer närmare, och du måste fly eller bli tillfångatagen.",
      image: "/assets/story-scenes/beren-dorthonion.jpg",
      choices: [
        { text: "Korsa Skräckens berg", next: 1 },
        { text: "Gör ett sista motstånd i Dorthonion", next: 2 }
      ]
    },
    {
      location: "Nan Dungortheb",
      text: "Du väljer den farliga vägen över Ered Gorgoroth, Skräckens berg. Dalarna mellan bergen är fyllda med Ungoliants avkomma—jättespindlar vars gift framkallar galenskap och död. Få har någonsin överlevt denna överfart.",
      image: "/assets/locations/Nan-Dungortheb.jpg",
      choices: [
        { text: "Fortsätt genom dödens dal", next: 3 }
      ]
    },
    {
      location: "Bakhåll i Dorthonion",
      text: "Du vägrar att överge ditt hemland och förbereder ett bakhåll för dina förföljare. Även om du dräper många, är Morgoths styrkor oräkneliga. Sårad och överväldigad flyr du i sista stund, med fienden tätt i hälarna.",
      image: "/assets/story-scenes/beren-ambush.jpg",
      choices: [
        { text: "Fly över Skräckens berg", next: 1 }
      ]
    },
    {
      location: "Doriaths gränser",
      text: "Mot alla odds överlever du överfarten. Utmattad och nästan knäckt snubblar du in på Doriaths gränser. En osynlig barriär stoppar dig—Melians gördel, som hindrar obehöriga från att komma in. Desperation driver dig framåt.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Använd din mors ring för att söka inträde", next: 4 },
        { text: "Hitta en annan väg runt", next: 5 }
      ]
    },
    {
      location: "Neldoreths skogar",
      text: "På något sätt tränger ditt behov igenom förtrollningen. Du vandrar genom Doriaths uråldriga skogar, omgiven av skönhet du aldrig tidigare skådat. Det är här, i en glänta badad i månljus, som du först hör sången.",
      image: "/assets/locations/Neldoreth.jpg",
      choices: [
        { text: "Följ sången", next: 6 }
      ]
    },
    {
      location: "Esgalduin",
      text: "Du tar den längre vägen runt förtrollningen, följandes floden Esgalduin. Efter veckor av vandrande, hör du en underbar sång eka genom skogen. Du följer ljudet, oförmögen att motstå dess skönhet.",
      image: "/assets/locations/Esgalduin.jpg",
      choices: [
        { text: "Sök efter sångens källa", next: 6 }
      ]
    },
    {
      location: "Första mötet",
      text: "I den månbelysta gläntan ser du henne—Lúthien Tinúviel, dansandes bland vårens blommor. I det ögonblicket faller du handlöst för henne, och ropar 'Tinúviel!' Efter er första konversation vet du att ditt hjärta är förlorat för evigt.",
      image: "/assets/story-scenes/beren-luthien-first-meeting.jpg",
      choices: [
        { text: "Förklara din kärlek", next: 7 },
        { text: "Vinn hennes förtroende över tid", next: 7 }
      ]
    },
    {
      location: "Menegroth",
      text: "Din kärlek till Lúthien leder dig till Menegroth, där du står inför hennes far, kung Thingol. Rasande över din djärvhet kräver han en Silmaril från Morgoths krona som brudpris. En omöjlig uppgift, avsedd att sända dig till din död.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Acceptera uppgiften", next: 8 },
        { text: "Försök förhandla med Thingol", next: 9 }
      ]
    },
    {
      location: "Resa mot Angband",
      text: "Du tar farväl av Lúthien och ger dig ut på din hopplösa färd. Du söker hjälp hos Noldor i Nargothrond, där kung Finrod Felagund känner sig bunden av en ed till din far och erbjuder sig att följa med dig.",
      image: "/assets/locations/Nargothrond.png",
      choices: [
        { text: "Fortsätt mot Angband med Finrod", next: 10 }
      ]
    },
    {
      location: "Thingols vrede",
      text: "Dina försök till förhandling möts med vrede och förakt. Thingol hotar att döda dig på fläcken och Melian varnar för farlig stolthet. Du står fast och lovar att återvända med en Silmaril, vilket gör att Thingol med motvillig respekt låter dig gå.",
      image: "/assets/story-scenes/thingol-anger.jpg",
      choices: [
        { text: "Resa mot Angband", next: 8 }
      ]
    },
    {
      location: "Tol-in-Gaurhoth",
      text: "På vägen till Angband, faller du och Finrod i ett bakhåll av Sauron på Varulvarnas ö. Maskerade med formskiftande magi blir ni avslöjade när Sauron sjunger en kraftfull sång. Finrod kämpar tillbaka med sin egen sång, men Saurons styrka är för stor.",
      image: "/assets/locations/Tol-in-Gaurhoth.png",
      choices: [
        { text: "Fängslas i Saurons fängelsehåla", next: 11 }
      ]
    },
    {
      location: "Saurons fängelsehåla",
      text: "En efter en dödas dina följeslagare av en varulv som släpps in i er cell. När det blir Finrods tur att dö, använder han sina sista krafter för att rädda dig, dödandes varulven men förlorar sitt eget liv. Ensam i mörkret, har hoppet nästan övergivit dig.",
      image: "/assets/story-scenes/beren-dungeon.jpg",
      choices: [
        { text: "Invänta ditt öde", next: 12 }
      ]
    },
    {
      location: "Lúthiens räddning",
      text: "I din mörkaste stund hör du en bekant sång. Lúthien har kommit för att rädda dig, tillsammans med Huan, Valinors mäktigaste hund. De besegrade Sauron och störtade hans torn. Återförenade, måste ni bestämma hur ni ska fortsätta ert uppdrag.",
      image: "/assets/story-scenes/luthien-saves-beren.png",
      choices: [
        { text: "Övertyga Lúthien att återvända till säkerheten", next: 13 },
        { text: "Acceptera hennes hjälp för att fortsätta", next: 14 }
      ]
    },
    {
      location: "Anfauglith",
      text: "Du försöker få Lúthien att återvända, men hennes kärlek och beslutsamhet är starkare än din oro. Tillsammans korsar ni den stora ödemarken Anfauglith med riktning mot Angband. Hon skapar en förtrollning av skuggor för att dölja er.",
      image: "/assets/locations/Anfauglith.png",
      choices: [
        { text: "Närma er Thangorodrim", next: 14 }
      ]
    },
    {
      location: "Thangorodrim",
      text: "Förklädd i Thuringwethils och Drauglins skepnader – fiender som Lúthien och Huan besegrade – närmar ni er Angbands portar. Carcharoth, den mäktiga vargen, vaktar ingången. Genom Lúthiens sång faller monstret i sömn och ni tar er in i Morgoths fästning.",
      image: "/assets/locations/Thangorodrim.png",
      choices: [
        { text: "Träd in i Morgoths hall", next: 15 }
      ]
    },
    {
      location: "Morgoths tronsal",
      text: "I den stora tronsalen står Morgoth själv, förundrad över Lúthiens dans. Hennes förtrollande skönhet bryter genom din förklädnad, men hon använder sin maia-kraft för att kasta en förtrollning av djup sömn över Morgoth och hans hov.",
      image: "/assets/story-scenes/luthien-sings-to-morgoth.png",
      choices: [
        { text: "Skär en Silmaril från Morgoths krona", next: 16 }
      ]
    },
    {
      location: "Silmarilens erövring",
      text: "När den mörka herren sover, skär du med din kniv en av de tre Silmarilerna från hans järnkrona. Juvelen flammar med ett heligt ljus i din hand. Men girighet griper tag i dig, och du försöker ta ytterligare en...",
      image: "/assets/story-scenes/beren-cuts-silmaril.png",
      choices: [
        { text: "Fly med den enda Silmarilen", next: 17 },
        { text: "Försök ta en till Silmaril", next: 18 }
      ]
    },
    {
      location: "Flykt från Angband",
      text: "Med en Silmaril säkrad, flyr du och Lúthien genom Angbands korridorer. Vid porten vaknar Carcharoth, men juvelen i din hand lyser så starkt att vargen ryggar tillbaka. Ni rusar förbi när hans uppmärksamhet tillfälligt är försvagad.",
      image: "/assets/story-scenes/beren-luthien-escape.jpg",
      choices: [
        { text: "Återvänd till Doriath", next: 19 }
      ]
    },
    {
      location: "Ödesdigert misstag",
      text: "Kniven halkar och skär Morgoths kind. Den mörka herrens ögon flyger upp och hans vredgade vrål skakar Angbands grundvalar. Ni flyr genom korridorerna med Morgoths styrkor efter er. Vid porten möter ni Carcharoth, och i desperation höjer du Silmarilen.",
      image: "/assets/story-scenes/greedy-beren.png",
      choices: [
        { text: "Visa Silmarilen för att skrämma vargen", next: 20 }
      ]
    },
    {
      location: "Doriathas hall",
      text: "Ni återvänder till Menegroth, där du triumferande men ödmjukt presenterar Silmarilen för kung Thingol. Mäktig av din bedrift men rörd av din och Lúthiens kärlek, ger han sitt välsignelse till er förening. Ni tituleras Beren Erchamion och Lúthien den Sköna.",
      image: "/assets/story-scenes/beren-returns.jpg",
      choices: [
        { text: "Leva med Lúthien i frid", next: 21 }
      ]
    },
    {
      location: "Carcharodths anfall",
      text: "Vargen, vansinnig av smärta och Morgoths ondska, biter av din hand med Silmarilen i. När juvelen bränner sig genom Carcharodths inälvor, flyr den vansinniga vargen över Beleriand. Du faller, blödande, i Lúthiens armar medan Morgoths styrkor närmar sig.",
      image: "/assets/story-scenes/beren-loses-hand.jpg",
      choices: [
        { text: "Fly med Lúthien", next: 22 }
      ]
    },
    {
      location: "Tol Galen",
      text: "Efter många äventyr och även döden självt, lever du och Lúthien på den gröna ön i floden Adurant. Hon valde döden själv för att vara med dig, och tillsammans har ni skapat ett liv i lugn, skild från världens konflikter. Men Carcharoth härjar fortfarande i Doriath.",
      image: "/assets/locations/Tol-Galen.jpg",
      choices: [
        { text: "Stanna på Tol Galen i fred", next: "end-beren-peaceful" },
        { text: "Återvänd till Doriath för att avsluta uppdraget", next: 23 }
      ]
    },
    {
      location: "Doriath igen",
      text: "Du flyr med Lúthien och Huan, och med hjälp av Thorondors stora örnar når ni slutligen säkerheten. Efter att du återhämtat dig från dina skador, presenterar du dig för Thingol igen och förklarar att Silmarilen faktiskt är i din hand – men din hand är i Carcharoths mage.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Delta i jakten på Carcharoth", next: 23 }
      ]
    },
    {
      location: "Jakten på Carcharoth",
      text: "Du ansluter dig till jakten på Carcharoth tillsammans med kung Thingol, Huan, Mablung och Beleg. Vargen, driven till vansinnigt raseri av Silmarilens brännande, stöter på jaktlaget i skogarna och kastar sig mot dig för ett sista möte.",
      image: "/assets/story-scenes/hunting-carcharoth.jpg",
      choices: [
        { text: "Strid mot Carcharoth", next: "battle-beren" }
      ]
    }
  ],
  Túrin: [
    {
      location: "Dor-lómin",
      text: "You are Túrin, son of Húrin and Morwen, born in the troubled land of Dor-lómin. Your father has been captured after the Nirnaeth Arnoediad, and Morgoth’s curse lies upon your family. As Easterlings invade your homeland, your mother makes a difficult decision.",
      image: "/assets/story-scenes/turin-childhood.jpg",
      choices: [
        { text: "Be sent to Doriath for safety", next: 1 },
        { text: "Stay and protect your mother and sister", next: 2 }
      ]
    },
    {
      location: "Journey to Doriath",
      text: "Reluctantly, you accept your mother’s decision. With only two guides, you begin the dangerous journey through the wilderness to the elven kingdom of Doriath. The journey is harsh, and your guides fall to weather and wandering foes.",
      image: "/assets/locations/Ered-Wethrin.png",
      choices: [
        { text: "Continue alone to Doriath", next: 3 }
      ]
    },
    {
      location: "Fall of Dor-lómin",
      text: "You refuse to leave your family and vow to protect them. Your courage is admirable, but you are still a child. When the Easterlings arrive, many who resist are slain. Your mother eventually convinces you to flee for your own safety.",
      image: "/assets/story-scenes/dor-lomin-fall.jpg",
      choices: [
        { text: "Flee toward Doriath", next: 1 }
      ]
    },
    {
      location: "Meeting with Beleg",
      text: "Exhausted and nearly lost in the woods near Doriath, you are found by Beleg Cúthalion, master archer of Doriath. He leads you through Melian’s Girdle into the protected realm and presents you at the court of King Thingol.",
      image: "/assets/story-scenes/turin-beleg-meeting.jpg",
      choices: [
        { text: "Accept Thingol’s protection", next: 4 }
      ]
    },
    {
      location: "Menegroth",
      text: "King Thingol welcomes you as a foster-son, honoring Húrin. In Menegroth, you receive an education worthy of an elven prince. You grow swiftly, and your courage and skill in battle become legendary. But pride and a quick temper also shape your character.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Focus on combat training with Beleg", next: 5 },
        { text: "Learn wisdom from Melian", next: 6 }
      ]
    },
    {
      location: "Combat Training",
      text: "Under Beleg’s guidance, you become a fearsome warrior. You learn archery and swordplay from the best of the elves, and your strength grows beyond most. You long to prove yourself in real battle against the forces of Morgoth.",
      image: "/assets/story-scenes/turin-combat-training.jpg",
      choices: [
        { text: "Request to join the border guards", next: 7 }
      ]
    },
    {
      location: "Melian’s Wisdom",
      text: "The wise Maia Melian offers you knowledge of the world’s mysteries and the history of the elves. She warns you of your own pride and hints that a dark fate follows you. You listen, but the warrior’s path calls more strongly.",
      image: "/assets/story-scenes/melian-teaching.jpg",
      choices: [
        { text: "Seek adventure at the borders", next: 7 }
      ]
    },
    {
      location: "Borderlands",
      text: "You join Beleg’s company, patrolling the borders of Doriath. Here you find your calling—hunting orcs and other servants of Morgoth. Your fame spreads, and many flock to your banner. But an incident changes everything.",
      image: "/assets/locations/Doriath-borders.jpg",
      choices: [
        { text: "Continue patrolling with Beleg", next: 8 }
      ]
    },
    {
      location: "Saeros’s Provocation",
      text: "In Menegroth, Saeros, one of the king’s counselors, insults your mother and your people. In a rage, you attack him. The next day, Saeros ambushes you, but you defeat him and chase him naked through the woods. In panic, he falls into a ravine and dies.",
      image: "/assets/story-scenes/turin-saeros.jpg",
      choices: [
        { text: "Flee from Doriath before judgment is passed", next: 9 },
        { text: "Stay and face justice", next: 10 }
      ]
    },
    {
      location: "Self-Chosen Exile",
      text: "Believing you will not receive fair judgment, you flee Doriath. You take to a lawless life in the wild and join a band of outlaws, soon becoming their leader. During this time, you call yourself Neithan, 'The Wronged'.",
      image: "/assets/story-scenes/turin-outlaw.jpg",
      choices: [
        { text: "Lead the outlaws toward a nobler purpose", next: 11 }
      ]
    },
    {
      location: "Thingol’s Pardon",
      text: "You stand before Thingol to be judged. Mablung testifies that Saeros attacked you first and that you did not intend to kill him. Thingol pardons you, but your pride and shame lead you to reject his forgiveness. You leave Doriath, despite Beleg’s attempts to stop you.",
      image: "/assets/story-scenes/turin-thingol-pardon.jpg",
      choices: [
        { text: "Venture into the wilderness", next: 9 }
      ]
    },
    {
      location: "Battlefield at Amon Rûdh",
      text: "Under your leadership, the outlaws become defenders of the innocent, striking Morgoth’s forces wherever they can. In one battle, your old friend Beleg reenters your fate. Beleg, who searched for you for months, helps you defeat an orc force.",
      image: "/assets/story-scenes/battle-amon-rudh.jpg",
      choices: [
        { text: "Welcome Beleg into your band", next: 12 },
        { text: "Reject Beleg out of pride", next: 13 }
      ]
    },
    {
      location: "Bar-en-Danwedh",
      text: "You and Beleg establish a stronghold on Amon Rûdh. Your group becomes known as the Helm and you regain some lost honor. Beleg gives you the sword Anglachel, forged by Eöl. One day, a dwarf named Mîm arrives, seeking your protection.",
      image: "/assets/story-scenes/bar-en-danwedh.jpg",
      choices: [
        { text: "Offer Mîm protection in exchange for shelter", next: 14 }
      ]
    },
    {
      location: "Belegost",
      text: "After reuniting with you, Beleg tries to persuade you to return to Doriath. When you refuse, he leaves for his homeland. Alone with the outlaws, you continue your private war against Morgoth, but without Beleg’s wisdom, your actions grow more reckless.",
      image: "/assets/locations/Belegost.png",
      choices: [
        { text: "Continue the fight against Morgoth", next: 14 }
      ]
    },
    {
      location: "Mîm’s Betrayal",
      text: "Still bitter over the deaths of his sons, Mîm betrays your hideout to the orcs. In the ensuing siege, many of your men fall, and you are captured. Beleg, who has just returned with the elf-warrior Gwindor from Nargothrond, finds the place in ruins.",
      image: "/assets/story-scenes/mim-betrayal.jpg",
      choices: [
        { text: "Beleg and Gwindor follow the orc trail", next: 15 }
      ]
    },
    {
      location: "The Night of Tragedy",
      text: "Beleg and Gwindor track the orcs who captured you. They find you bound and unconscious. In the darkness, as Beleg cuts your bonds with Anglachel, lightning flashes and you awake with a start. Mistaking him for an orc, you kill him with his own sword.",
      image: "/assets/story-scenes/beleg-death.jpg",
      choices: [
        { text: "Despair over your mistake", next: 16 }
      ]
    },
    {
      location: "Ivrin",
      text: "Crushed by grief over killing your best friend, you nearly lose your mind. Gwindor leads you to the healing waters of Ivrin. Slowly, you recover your senses, though the pain remains deep. You take Anglachel—the sword that killed Beleg—and swear to avenge all injustice.",
      image: "/assets/story-scenes/turin-ivrin.jpg",
      choices: [
        { text: "Follow Gwindor to Nargothrond", next: 17 }
      ]
    },
    {
      location: "Nargothrond",
      text: "Gwindor brings you to his home, the hidden elven city of Nargothrond. There you assume the name Agarwaen, 'Blood-stained', to hide your identity. Anglachel is reforged and named Gurthang, 'Iron of Death'. Your skill in battle earns great respect among the elves.",
      image: "/assets/locations/Nargothrond.png",
      choices: [
        { text: "Gain influence in Nargothrond", next: 18 }
      ]
    },
    {
      location: "Council of Orodreth",
      text: "King Orodreth admires your military expertise. Your influence grows until you practically lead the city’s policy. You convince them to abandon their secretive, defensive strategy in favor of open war against Morgoth. Finduilas, the king’s daughter, develops feelings for you.",
      image: "/assets/story-scenes/orodreth-council.jpg",
      choices: [
        { text: "Lead the elves into open warfare", next: 19 },
        { text: "Acknowledge Finduilas’s feelings", next: 20 }
      ]
    },
    {
      location: "Talath Dirnen",
      text: "Under your leadership, Nargothrond’s warriors grow aggressive and clear the region of Morgoth’s servants. For a time, the strategy works, and you are called Mormegil, 'The Black Sword'. But this success also draws Morgoth’s attention to Nargothrond.",
      image: "/assets/story-scenes/talath-dirnen.jpg",
      choices: [
        { text: "Build a bridge to move the army faster", next: 21 }
      ]
    },
    {
      location: "Conversation with Finduilas",
      text: "Finduilas’s love is clear, but your heart is still heavy with grief and guilt. You see her as a friend but cannot return her feelings. When Gwindor reveals your true identity to her, your position in Nargothrond grows even more complicated.",
      image: "/assets/story-scenes/finduilas-turin.jpg",
      choices: [
        { text: "Gently reject Finduilas", next: 19 }
      ]
    },
    {
      location: "Fall of Nargothrond",
      text: "Your strategy leads to disaster. Morgoth sends a vast army led by the dragon Glaurung. The bridge you built now gives the enemy a direct path to the once-hidden city. In the doomed battle, you are entranced by the dragon’s gaze, frozen as the city falls.",
      image: "/assets/story-scenes/fall-of-nargothrond.jpg",
      choices: [
        { text: "Confront Glaurung", next: 22 }
      ]
    },
    {
      location: "Glaurung’s Enchantment",
      text: "Under the dragon’s hypnotic gaze, he paralyzes you with false guilt. He convinces you that your mother and sister suffer in Dor-lómin and that you must save them instead of chasing Finduilas, who is captured by orcs. Shamed, you obey the dragon’s cunning advice.",
      image: "/assets/story-scenes/glaurung-spell.jpg",
      choices: [
        { text: "Journey to Dor-lómin", next: 23 }
      ]
    },
    {
      location: "Return to Dor-lómin",
      text: "You return to your childhood home only to discover that your mother and sister left long ago, seeking refuge in Doriath. Realizing that the dragon tricked you, you turn your attention back to Finduilas—but it is too late. On your path, you encounter a girl named Niënor...",
      image: "/assets/story-scenes/dor-lomin-return.jpg",
      choices: [
        { text: "Search for Finduilas", next: 24 }
      ]
    },
    {
      location: "Haudh-en-Elleth",
      text: "You track the orcs to the Crossings of Teiglin, but arrive too late. The men of Brethil tell you they tried to save the captives, but Finduilas was slain. They buried her in a mound now called Haudh-en-Elleth, 'Mound of the Elf-maid'. Crushed, you settle among the Haleth-folk.",
      image: "/assets/story-scenes/haudh-en-elleth.jpg",
      choices: [
        { text: "Stay with the Haleth-folk in Brethil", next: 25 }
      ]
    },
    {
      location: "Brethil",
      text: "Among the Haleth-folk, you take a new name—Turambar, 'Master of Fate'—trying to escape Morgoth’s curse. You find some peace and become a leader among these forest people. One day, you rescue a confused young woman pursued by orcs.",
      image: "/assets/story-scenes/brethil-forest.jpg",
      choices: [
        { text: "Care for the confused woman", next: 26 }
      ]
    },
    {
      location: "House of Haldad",
      text: "The woman, who remembers nothing of her past, is called Níniel, 'Tear-maiden'. Neither of you knows she is actually Niënor—your sister—enchanted by Glaurung when she searched for you. Over time, love grows between you, and you marry. For a while, you know happiness.",
      image: "/assets/story-scenes/haldad-house.jpg",
      choices: [
        { text: "Live in peace with Níniel", next: 27 }
      ]
    },
    {
      location: "Glaurung’s Return",
      text: "Peace is broken when the dragon Glaurung approaches Brethil. As leader, you must organize the defense. Níniel is pregnant and terrified, but you feel that you must face your old enemy one final time.",
      image: "/assets/story-scenes/glaurung-returns.jpg",
      choices: [
        { text: "Face Glaurung at Cabed-en-Aras", next: 28 }
      ]
    },
    {
      location: "Cabed-en-Aras",
      text: "At the deep ravine of Cabed-en-Aras, where the Teiglin river rushes, you put your plan into action. As Glaurung tries to cross the gorge, his soft underbelly is exposed. You drive Gurthang deep into his heart.",
      image: "/assets/story-scenes/cabed-en-aras.jpg",
      choices: [
        { text: "Inspect the dragon", next: 29 }
      ]
    },
    {
      location: "The Dying Dragon",
      text: "As Glaurung dies, he opens his eyes one last time and lifts the enchantment over you. In that moment, as Níniel comes looking for you, the dragon delivers one final cruel truth—Níniel is your sister. When she understands, she throws herself into the raging river.",
      image: "/assets/story-scenes/glaurung-dying.jpg",
      choices: [
        { text: "Return to the House of Haldad", next: 30 }
      ]
    },
    {
      location: "Túrin’s Doom",
      text: "Overwhelmed by the cruel end of your fate, you return to the House of Haldad. There, you confront the dwarf Mîm, who confesses his betrayal at Amon Rûdh. After avenging Beleg, you take your sword Gurthang and ask it to take your life, ending Morgoth’s curse.",
      image: "/assets/story-scenes/turin-suicide.jpg",
      choices: [
        { text: "End your tragic tale", next: "end-turin" }
      ]
    }
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
    {
      location: "Gondolin",
      text: "You are Ecthelion, Lord of the House of the Fountain and one of King Turgon's mightiest warriors. In the hidden city of Gondolin, you serve as the guard of the Seventh Gate, the Gate of Steel. Your flute music and silver helm are known throughout the city.",
      image: "/assets/locations/Gondolin.png",
      choices: [
        { text: "Perform your duties as a guard", next: 1 },
        { text: "Take part in the city council", next: 2 }
      ]
    },
    {
      location: "House of the Fountain",
      text: "Your house trains diligently in the arts of war, with the spear as its favored weapon. The peace of the city has lasted for hundreds of years, but you feel danger is never far off. Your warriors are among the most disciplined in Gondolin, always ready to answer the call of the drums.",
      image: "/assets/story-scenes/house-fountain.jpg",
      choices: [
        { text: "Lead your warriors in drills", next: 3 }
      ]
    },
    {
      location: "Hall of Turgon",
      text: "In the king’s council, troubling reports are discussed. Maeglin, the king’s nephew, argues for increased isolation, while Tuor, the human messenger from Ulmo, warns that the city must prepare for a coming attack. Turgon’s faith in the city’s secrecy remains unshaken.",
      image: "/assets/story-scenes/turgon-hall.jpg",
      choices: [
        { text: "Support Tuor’s warnings", next: 4 },
        { text: "Trust in Gondolin’s defenses", next: 5 }
      ]
    },
    {
      location: "Training Grounds",
      text: "You and Glorfindel of the House of the Golden Flower lead your warriors in joint drills. Your friendship and rivalry are legendary in the city. Despite the long peace, you keep your warriors sharp, driven by a sense of looming danger that never leaves you.",
      image: "/assets/story-scenes/training-grounds.jpg",
      choices: [
        { text: "Prepare the city’s defenses", next: 6 }
      ]
    },
    {
      location: "Secret Council",
      text: "You, Tuor, and a few others meet in secret to discuss the city's future. You support Tuor’s proposal to prepare for evacuation but acknowledge that the king will never abandon the city willingly. You begin planning quietly for the dark day that may come.",
      image: "/assets/story-scenes/secret-council.jpg",
      choices: [
        { text: "Expand the guard posts outside the city", next: 5 }
      ]
    },
    {
      location: "City Walls",
      text: "You inspect the city’s fortifications. Gondolin’s walls are strong and its location secret, but Morgoth’s hatred is relentless. You suspect that treachery, not force, will be the city’s undoing. Your suspicions fall on Maeglin, whose eyes often linger on Idril with unsettling intensity.",
      image: "/assets/story-scenes/gondolin-walls.jpg",
      choices: [
        { text: "Speak to Tuor about your suspicions", next: 7 }
      ]
    },
    {
      location: "Preparations",
      text: "You quietly prepare your house for any eventuality. Weapons are sharpened, supplies stored, and escape routes memorized. Other house leaders follow your example, while some citizens view your actions as unnecessary. Turgon notices your efforts but does not interfere.",
      image: "/assets/story-scenes/preparations.jpg",
      choices: [
        { text: "Continue your quiet preparations", next: 8 }
      ]
    },
    {
      location: "Tuor’s House",
      text: "You and Tuor share your concerns. He agrees with your suspicions about Maeglin and reveals that he and Idril have constructed a secret escape route from the city. You make a silent pact—should the worst come, you will protect the retreat while Tuor leads the people to safety.",
      image: "/assets/story-scenes/tuor-house.jpg",
      choices: [
        { text: "Investigate the mountain passage", next: 9 }
      ]
    },
    {
      location: "Midsummer Festival",
      text: "During the city’s midsummer celebration, a sense of unease spreads. Maeglin has been absent for weeks and has recently returned without explanation. Your instincts tell you something is wrong. As night falls, you notice an ominous red glow from the northern mountains.",
      image: "/assets/story-scenes/midsummer-festival.jpg",
      choices: [
        { text: "Raise the alarm", next: 10 }
      ]
    },
    {
      location: "The Hidden Tunnel",
      text: "You examine the secret path that Idril prepared. It leads through a hidden cleft in the mountain behind her house to a concealed trail that eventually reaches Cirith Thoronath, the Eagle’s Cleft. It is narrow and dangerous, but the only escape if the city falls.",
      image: "/assets/story-scenes/secret-tunnel.jpg",
      choices: [
        { text: "Return to the city", next: 8 }
      ]
    },
    {
      location: "Attack on Gondolin",
      text: "The alarm sounds through the city as Morgoth’s armies pour into the hidden valley. Led by Balrogs, dragons, and orcs, they break through the outer defenses. You swiftly rally the House of the Fountain, knowing this is the day long feared.",
      image: "/assets/story-scenes/attack-on-gondolin.jpg",
      choices: [
        { text: "Lead the defense at the Gate of Steel", next: 11 }
      ]
    },
    {
      location: "Defense of the Gate of Steel",
      text: "At the Seventh Gate, you make a heroic stand. Your spear flashes in the firelight as you slay orc after orc. For a time, your position holds, but more of the enemy continue to pour in. A blast of dragon fire forces you to retreat inward.",
      image: "/assets/story-scenes/steel-gate-defense.jpg",
      choices: [
        { text: "Retreat to the city center", next: 12 }
      ]
    },
    {
      location: "The Tumladen",
      text: "The battle now rages in the streets. You lead your warriors from the Fountain at the Tumladen, the city’s great square. Here you make your last stand, knowing Tuor is guiding civilians to the escape tunnel. You see Glorfindel leading a group across the square, pursued by a Balrog.",
      image: "/assets/story-scenes/tumbler-square.jpg",
      choices: [
        { text: "Guard the retreat", next: 13 },
        { text: "Help Glorfindel", next: 14 }
      ]
    },
    {
      location: "Idril’s Escape Route",
      text: "You choose to protect the fleeing civilians, fighting against overwhelming odds. Your warriors fall one by one, but thanks to your sacrifice, hundreds reach safety. As enemies draw nearer, you make your final stand at the entrance to the escape route.",
      image: "/assets/story-scenes/idrils-escape.jpg",
      choices: [
        { text: "Confront Gothmog", next: 15 }
      ]
    },
    {
      location: "Glorfindel’s Duel",
      text: "You rush to aid your friend Glorfindel, who is battling a mighty Balrog. Together, you drive the creature to the edge of the city. In the struggle, Glorfindel sacrifices himself to drag the Balrog off the cliff. With a heavy heart, you must leave your fallen friend to face the next threat.",
      image: "/assets/story-scenes/glorfindel-battle.jpg",
      choices: [
        { text: "Confront Gothmog", next: 15 }
      ]
    },
    {
      location: "Confrontation with the Lord of Balrogs",
      text: "At the Fountain Square, you face Gothmog, Lord of Balrogs. His fiery sword and whip make him Morgoth’s most terrifying warrior. Surrounded by fire and destruction, you ready yourself for your final battle, determined that this enemy will not pass.",
      image: "/assets/story-scenes/gothmog-confrontation.jpg",
      choices: [
        { text: "Fight Gothmog", next: 16 }
      ]
    },
    {
      location: "The Final Battle",
      text: "You strike at Gothmog with your spear, but the Balrog parries your blows. His whip crushes your silver helm and you are wounded. With a final, daring move, you throw yourself at him. The spike of your helm pierces his chest deeply, but he seizes you.",
      image: "/assets/story-scenes/ecthelion-final-battle.jpg",
      choices: [
        { text: "Use your last strength", next: 17 }
      ]
    },
    {
      location: "The King’s Fountain",
      text: "In a final desperate act, you wrap your legs around Gothmog and pull him with you into the deep waters of the fountain. The Balrog, weighed down by your silver armor and pierced by your helm, cannot escape. In the cool embrace of the water, his fiery body is quenched, and you both sink into the depths.",
      image: "/assets/story-scenes/kings-fountain.jpg",
      choices: [
        { text: "Embrace your fate", next: "battle-ecthelion" }
      ]
    }
  ],
  Tuor: [
    {
      location: "Androth",
      text: "You are Tuor, son of Huor, raised by Grey-elves in the caves of Androth after your parents' death. In a dream, Ulmo, Lord of Waters, appears to you and urges you to leave your hiding place and seek the hidden city of Gondolin.",
      image: "/assets/locations/Androth.jpg",
      choices: [
        { text: "Follow Ulmo’s call", next: 1 },
        { text: "First seek more knowledge from the Elves", next: 2 }
      ]
    },
    {
      location: "Vinyamar",
      text: "You follow Ulmo’s guidance to the abandoned halls of Vinyamar by the sea. There you find the armor and sword that Turgon left behind on Ulmo’s command. As you stand at the shore, Ulmo speaks to you directly from the waves.",
      image: "/assets/locations/Vinyamar.jpg",
      choices: [
        { text: "Receive Ulmo’s message", next: 3 }
      ]
    },
    {
      location: "Grey-elves’ Camp",
      text: "You seek advice from the Elves who raised you. They tell you the tale of Gondolin’s founding and how its location is kept secret, even from most Elves. An elder Elf mentions that Ulmo often communicates through dreams to those chosen for great fates.",
      image: "/assets/story-scenes/grey-elves-camp.jpg",
      choices: [
        { text: "Journey to Vinyamar", next: 1 }
      ]
    },
    {
      location: "Ulmo’s Command",
      text: "Ulmo rises from the sea, majestic and awe-inspiring. He gives you a mission to warn Gondolin of its coming fall and to bear his message to King Turgon. A mist rises from the sea, and from it steps an Elf named Voronwë.",
      image: "/assets/story-scenes/ulmo-tuor.jpg",
      choices: [
        { text: "Travel with Voronwë to Gondolin", next: 4 }
      ]
    },
    {
      location: "Journey through Beleriand",
      text: "You and Voronwë travel through dangerous lands. Voronwë, a survivor of one of Turgon’s failed voyages to Valinor, knows hidden paths. Winter comes, and you must be cautious to avoid Morgoth’s spies.",
      image: "/assets/locations/Beleriand.jpg",
      choices: [
        { text: "Take the northern path through the mountains", next: 5 },
        { text: "Follow the waterways protected by Ulmo", next: 6 }
      ]
    },
    {
      location: "Echoriath",
      text: "You choose the perilous northern passage through the Encircling Mountains. The cold is bitter and the trails treacherous. As you push through a snowstorm, you feel the presence of something evil following you...",
      image: "/assets/locations/Echoriath.jpg",
      choices: [
        { text: "Prepare to defend yourselves", next: 7 },
        { text: "Try to escape by taking shelter", next: 8 }
      ]
    },
    {
      location: "The Hidden Way",
      text: "You follow rivers that Ulmo has blessed with his protective power. The waters lead you to the Encircling Mountains, where you discover signs that only those who know may interpret—marks leading to the Hidden Way to Gondolin.",
      image: "/assets/story-scenes/hidden-way.jpg",
      choices: [
        { text: "Follow the signs toward the Hidden City", next: 9 }
      ]
    },
    {
      location: "Ambush",
      text: "You and Voronwë prepare for battle as a group of orcs led by a Balrog approaches. The situation seems hopeless, but just as the attack begins, you hear trumpets sounding. Gondolin’s guards have spotted you and arrive to aid you.",
      image: "/assets/story-scenes/ambush-rescue.jpg",
      choices: [
        { text: "Meet the guards of Gondolin", next: 9 }
      ]
    },
    {
      location: "Ice Cave",
      text: "You take shelter in an ice cave deep in the mountain pass. For days, you wait out the storm and the threat that stalks you. When the calm returns, you continue your journey, more cautious than before. Eventually, you reach a hidden valley leading deeper into the mountains.",
      image: "/assets/story-scenes/ice-cave.jpg",
      choices: [
        { text: "Follow the hidden valley", next: 9 }
      ]
    },
    {
      location: "Gates of Gondolin",
      text: "The guards lead you through the final tunnel, and suddenly the world opens into a wide valley. In the center, on a stone hill, stands Gondolin—the Hidden City—gleaming white in the sunlight. You stand in awe of its beauty and majesty.",
      image: "/assets/locations/Gondolin.png",
      choices: [
        { text: "Enter the Hidden City", next: 10 }
      ]
    },
    {
      location: "Turgon’s Hall",
      text: "You are brought before King Turgon in his marble tower. Clad in Ulmo’s armor, you deliver the Lord of Waters’ warning—the city must be abandoned before it falls. Turgon is skeptical, his trust in the city’s secrecy strong. He allows you to stay but rejects the warning.",
      image: "/assets/story-scenes/turgon-hall.jpg",
      choices: [
        { text: "Argue more strongly for Ulmo’s warning", next: 11 },
        { text: "Accept Turgon’s decision and remain in the city", next: 12 }
      ]
    },
    {
      location: "Council Chamber",
      text: "You passionately plead your case to Turgon and his council, describing Ulmo’s vision of the city’s doom in detail. While some members begin to listen, Turgon remains unmoved. Maeglin, the king’s nephew, argues strongly against you and holds great influence.",
      image: "/assets/story-scenes/council-chamber.jpg",
      choices: [
        { text: "Stay in the city nonetheless", next: 12 }
      ]
    },
    {
      location: "Streets of Gondolin",
      text: "Accepting your failure to convince Turgon, you settle in the Hidden City. You are welcomed into the House of the King’s Eagles and become a respected member of the society. It is here you first meet Idril Celebrindal, the king’s daughter, whose beauty and wisdom captivate your heart.",
      image: "/assets/story-scenes/gondolin-streets.jpg",
      choices: [
        { text: "Seek Idril’s friendship", next: 13 }
      ]
    },
    {
      location: "Fountain of the Eagles",
      text: "You and Idril often meet at the Fountain of the Eagles, sharing thoughts about the world beyond. She listens to your tales of Ulmo’s vision and also fears for Gondolin’s future. Your friendship deepens into love, to Maeglin’s silent fury, who secretly desires Idril himself.",
      image: "/assets/story-scenes/eagles-fountain.jpg",
      choices: [
        { text: "Propose to Idril", next: 14 }
      ]
    },
    {
      location: "The Wedding",
      text: "Against all odds, Turgon allows your marriage. It is the first time a human has wed one of the Eldar. The celebrations last for days, but Maeglin refuses to attend, and his hatred for you grows in silence.",
      image: "/assets/story-scenes/tuor-idril-wedding.jpg",
      choices: [
        { text: "Build a life with Idril in Gondolin", next: 15 }
      ]
    },
    {
      location: "Eärendil Is Born",
      text: "Your son with Idril, Eärendil Half-elven, is born—a child of both Elven and Mortal blood. You sense that his fate will be greater than your own. During these years, Idril secretly constructs an escape tunnel, driven by her foresight and fear.",
      image: "/assets/story-scenes/earendil-birth.jpg",
      choices: [
        { text: "Help Idril with the secret tunnel", next: 16 }
      ]
    },
    {
      location: "The Hidden Tunnel",
      text: "You and Idril secretly work on the underground passage from your house to a hidden exit beyond the city walls. Only your most trusted friends know of the project. Meanwhile, you train the city’s defenders, preparing them for the battle you know will come.",
      image: "/assets/story-scenes/hidden-tunnel.jpg",
      choices: [
        { text: "Prepare for the city’s defense", next: 17 }
      ]
    },
    {
      location: "City Defenses",
      text: "Years pass in relative peace, but you and Idril remain watchful. You help strengthen the city’s defenses and lead the House of the White Eagles. As festival fires are lit to celebrate the Summer Gate, a storm rises from the north. From the darkness come Morgoth’s armies, led by dragons and Balrogs.",
      image: "/assets/story-scenes/city-defenses.jpg",
      choices: [
        { text: "Fight against the invaders", next: "battle-tuor" }
      ]
    }
  ],
  Azaghal: [
    {
      location: "Belegost",
      text: "Azaghal, Lord of Belegost, receives word that Morgoth’s armies are marching. The Dwarves must decide their course of action.",
      image: "/assets/locations/Belegost.png",
      choices: [
        { text: "March to war and support the Elves", next: 1 },
        { text: "Stay in Belegost and fortify against invasion", next: 2 }
      ]
    },
    {
      location: "Nirnaeth Arnoediad",
      text: "Azaghal and his dwarves arrive at the battlefield. Their iron-clad warriors charge against Morgoth’s forces, wielding axes and fire.",
      image: "/assets/locations/Nirnaeth-Arnoediad.png",
      choices: [
        { text: "Engage Glaurung, the Father of Dragons", next: "battle-azaghal" }
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
  Eonwë: [
    {
      location: "Valinor",
      text: "You are Eönwë, herald of Manwë, King of the Valar. For ages, you have served in the shining halls upon Taniquetil, bearing the words of the Lord of Winds to all realms. One day, you are summoned to the Ring of Doom, where the Valar are gathered for a great council.",
      image: "/assets/locations/Valinor.jpg",
      choices: [
        { text: "Enter the Ring of Council", next: 1 },
        { text: "Observe from a distance first", next: 2 }
      ]
    },
    {
      location: "Mahanaxar",
      text: "In the Ring of Doom, the Valar gather in all their majesty. Manwë speaks of the rising darkness in Middle-earth, of Morgoth's ongoing tyranny, and of Eärendil's brave voyage across the sea to plead for aid. 'The time has come,' says Manwë, 'for the Valar to act directly in the fate of Middle-earth.'",
      image: "/assets/locations/Ring-of-doom.jpg",
      choices: [
        { text: "Hear your mission", next: 3 }
      ]
    },
    {
      location: "Peaks of Taniquetil",
      text: "From a high peak of Taniquetil, you observe the council. You see Eärendil, son of mortals, step forth with the Silmaril shining upon his brow. His courage to cross the sea and speak for both Elves and Men touches even the hearts of the Valar. A decision begins to form.",
      image: "/assets/locations/Taniquetil.jpg",
      choices: [
        { text: "Approach the council", next: 1 }
      ]
    },
    {
      location: "Manwë’s Command",
      text: "Manwë gives you the highest task: to lead the Host of the Valar to Beleriand, to finally free Middle-earth from Morgoth’s tyranny. This is the War of Wrath, the greatest force assembled since the shaping of the world—and you are its commander.",
      image: "/assets/locations/Halls-of-Manwe.jpg",
      choices: [
        { text: "Accept the mission", next: 4 },
        { text: "Ask about the mission’s conditions", next: 5 }
      ]
    },
    {
      location: "The Host of the Valar",
      text: "You accept the task with humility and resolve. The army you will lead includes mighty Maiar spirits, led by Valinor’s chief warriors. The Vanyar, the noblest of Elves, march under golden banners, and even many Noldor who remained in Valinor have pledged their swords to your cause.",
      image: "/assets/story-scenes/host-of-valinor.jpg",
      choices: [
        { text: "Prepare to depart", next: 6 }
      ]
    },
    {
      location: "Aulë’s Forge",
      text: "You ask Manwë about the limits of your authority and the nature of your task. The directive is clear: defeat Morgoth, but show mercy where possible. No harm must come to the Three Houses of Men, and Elves must be honored as the Firstborn, no matter their past deeds.",
      image: "/assets/locations/Aule-forge.jpg",
      choices: [
        { text: "Begin to form your strategy", next: 6 }
      ]
    },
    {
      location: "Tol Eressëa",
      text: "The preparations of the host are grand. On the shores of the Teleri, a fleet like none before is built. Weapons and armor forged by Aulë and his people glitter in the sunlight. At last, after thousands of years, the power of the Valar turns once more toward Middle-earth.",
      image: "/assets/locations/Tirion.jpg",
      choices: [
        { text: "Lead the fleet eastward", next: 7 }
      ]
    },
    {
      location: "Waves of Belegaer",
      text: "The fleet sails east across the great sea. Trumpets sound, and the light of Valinor gleams from a thousand spears. On the seventh morning, the shores of Middle-earth come into view. Your strategy is to strike Morgoth’s armies with swift and overwhelming power.",
      image: "/assets/story-scenes/fleet-sailing.jpg",
      choices: [
        { text: "Land in Beleriand", next: 8 }
      ]
    },
    {
      location: "Ruins of Falas",
      text: "Your forces land where once the harbors of Falas stood. The area is now in ruins, ravaged by Morgoth’s war. Surviving Elves, mostly Sindar, emerge from hiding and meet the Host of Valinor with awe and hope—a hope they thought long lost.",
      image: "/assets/story-scenes/falas-ruins.jpg",
      choices: [
        { text: "Meet with the Elven leaders", next: 9 },
        { text: "Immediately march on Angband", next: 10 }
      ]
    },
    {
      location: "Council of the Elves",
      text: "You meet Gil-galad, Círdan, and other Elven leaders who have survived Morgoth’s long war. They speak of the fallen kingdoms, the unbearable losses, and Morgoth’s growing might. From them, you gain vital knowledge of the enemy’s strengths and weaknesses.",
      image: "/assets/story-scenes/council-elves.jpg",
      choices: [
        { text: "Plan the final assault on Angband", next: 10 }
      ]
    },
    {
      location: "Anfauglith",
      text: "Your host marches across the blackened plains of Anfauglith toward Thangorodrim, Morgoth’s stronghold. As word of your coming spreads, Morgoth’s forces gather for a last desperate battle. Orcs, trolls, werewolves, Balrogs, and dragons form under the banner of darkness.",
      image: "/assets/locations/Anfauglith.png",
      choices: [
        { text: "Issue your battle orders", next: 11 }
      ]
    },
    {
      location: "Battlefield of Anfauglith",
      text: "The greatest battle in history begins. Valinor’s horns sound across the plain, answered by Morgoth’s deep drums. Your armies move in perfect formation, shining in the sunlight as they meet the dark horde. You lead the charge, your sword blazing like white fire.",
      image: "/assets/story-scenes/war-of-wrath-battle.jpg",
      choices: [
        { text: "Lead the main assault", next: 12 },
        { text: "Focus on defeating the dragons", next: 13 }
      ]
    },
    {
      location: "Heart of the Battle",
      text: "You lead the charge against Morgoth’s core forces, where the Balrogs spearhead his offense. Your blade and leadership inspire your soldiers to unmatched heroism. The ground shakes with the clash of Light and Darkness.",
      image: "/assets/story-scenes/eonwe-leading.jpg",
      choices: [
        { text: "Face the dragons now unleashed", next: 14 }
      ]
    },
    {
      location: "Sky Battle",
      text: "With the dragons posing the greatest threat, you direct your forces to face them. Thorondor and the Eagles of Crissaegrim join the fight, attacking in the skies. Ancalagon the Black, the greatest of Morgoth’s winged terrors, leads the assault.",
      image: "/assets/story-scenes/eagles-against-dragons.jpg",
      choices: [
        { text: "Call for Eärendil’s aid", next: 14 }
      ]
    },
    {
      location: "Ancalagon’s Assault",
      text: "As the battle rages, Morgoth unleashes his deadliest weapon—Ancalagon the Black and his legion of dragons. Their fury threatens to turn the tide. But then, from the sky comes Eärendil in his ship Vingilot, the Silmaril blazing on his brow.",
      image: "/assets/story-scenes/ancalagon-attack.jpg",
      choices: [
        { text: "Continue the battle while Eärendil faces Ancalagon", next: 15 }
      ]
    },
    {
      location: "Fall of Thangorodrim",
      text: "After a titanic battle, Eärendil slays Ancalagon, whose vast body crashes down and shatters the peaks of Thangorodrim. The turning point is clear—Morgoth’s doom draws near. With his mightiest weapon fallen, his armies begin to collapse in disarray.",
      image: "/assets/story-scenes/ancalagon-falls.jpg",
      choices: [
        { text: "Lead the assault on Angband", next: 16 }
      ]
    },
    {
      location: "Gates of Angband",
      text: "You lead the Host of Valinor to the black gates of Angband. They fall before your might, and your warriors push deep into Morgoth’s fortress. His remaining servants flee or surrender. In the deepest halls, you find Morgoth—once the greatest of the Valar—now reduced and afraid.",
      image: "/assets/story-scenes/gates-of-angband.jpg",
      choices: [
        { text: "Confront Morgoth", next: 17 }
      ]
    },
    {
      location: "Throne Room of Morgoth",
      text: "You find Morgoth in his throne room. Once mighty, he is now weakened, having poured his power into the world itself. He tries to flee into the depths of the earth, but your forces cut off all paths of escape.",
      image: "/assets/story-scenes/morgoth-throne-room.jpg",
      choices: [
        { text: "Battle Morgoth", next: "battle-eonwe" }
      ]
    },
    {
      location: "The Battle with Morgoth",
      text: "Though weakened, Morgoth is still a terrible foe. His hammer, Grond, shakes the earth with every blow. But your speed and skill overcome his brute strength. At last, you defeat him, forcing him to his knees and hewing the feet from under him.",
      image: "/assets/story-scenes/morgoth-defeated.jpg",
      choices: [
        { text: "Imprison Morgoth", next: 18 }
      ]
    },
    {
      location: "Eönwë’s Judgment",
      text: "With Morgoth defeated, a new challenge arises. Two Silmarils have been reclaimed from Morgoth’s iron crown. Fëanor’s sons, Maedhros and Maglor, demand them, invoking their oath and right. But you know their claim is tainted by blood.",
      image: "/assets/story-scenes/eonwe-judgment.jpg",
      choices: [
        { text: "Deny their claim", next: 19 },
        { text: "Consider their claim with mercy", next: 20 }
      ]
    },
    {
      location: "Exile of Darkness",
      text: "Morgoth, now in chains, is taken from the world through the Door of Night into the Timeless Void. There he shall remain until the Dagor Dagorath, the Last Battle. His crown is made into a collar, and his hands are bound forever by Angainor.",
      image: "/assets/story-scenes/morgoth-banished.jpg",
      choices: [
        { text: "Take charge of the Silmarils", next: 21 }
      ]
    },
    {
      location: "Theft of the Fëanorions",
      text: "You deny the brothers’ claim, reminding them of the blood spilled in pursuit of the Silmarils. Enraged and desperate, they resort to theft. In the dead of night, they steal the jewels from your camp, killing several of your guards in the process.",
      image: "/assets/story-scenes/feanorion-theft.jpg",
      choices: [
        { text: "Pursue the thieves", next: 22 }
      ]
    },
    {
      location: "Offer of Forgiveness",
      text: "You acknowledge their heritage but remind them they have forfeited all right to the jewels through their crimes. Yet, in mercy, you offer them a chance to return to Valinor to seek the Valar’s judgment. After long hesitation, they refuse and vanish into the night.",
      image: "/assets/story-scenes/offering-forgiveness.jpg",
      choices: [
        { text: "Prepare the return to Valinor", next: 21 }
      ]
    },
    {
      location: "Fate of the Silmarils",
      text: "The Silmarils have been reclaimed. One is already placed in the sky with Eärendil; the other two are meant to return to Valinor. Your mission nears its end, but one question remains—what shall be done with the Elves and Men who survived Morgoth’s rule?",
      image: "/assets/story-scenes/silmaril-fate.jpg",
      choices: [
        { text: "Offer the Elves a chance to return to Valinor", next: 23 }
      ]
    },
    {
      location: "The Pursuit",
      text: "You send forces after the fleeing brothers. News soon returns—Maedhros, overwhelmed by guilt and despair, throws himself and his Silmaril into a fiery chasm. Maglor, stricken with sorrow, casts his jewel into the sea and wanders the coasts singing in grief.",
      image: "/assets/story-scenes/maedhros-end.jpg",
      choices: [
        { text: "Return to your duties", next: 21 }
      ]
    },
    {
      location: "Choice of the Elves",
      text: "At war’s end, you offer, by Manwë’s command, forgiveness to the Elves of Middle-earth and the right to return west to Valinor. Many accept, weary of sorrow. Others, like Gil-galad and Galadriel, choose to remain. For Men, a new gift is prepared.",
      image: "/assets/story-scenes/elves-choice.jpg",
      choices: [
        { text: "Present the gift to the faithful Men", next: 24 }
      ]
    },
    {
      location: "Rise of Númenor",
      text: "To the Edain, the Men who fought against Morgoth, the Valar offer a great gift—a new island raised from the sea, closer to Valinor than to Middle-earth. This is Númenor, where Elros, son of Eärendil, will become the first king of a great human realm, blessed with long life and wisdom.",
      image: "/assets/story-scenes/numenor-rising.jpg",
      choices: [
        { text: "Conclude your mission", next: 25 }
      ]
    },
    {
      location: "The Return",
      text: "With your task complete, you lead the Host of Valinor back west. Beleriand, weakened by the war, sinks beneath the waves in cataclysmic upheaval. As the Valar withdraw from the world, the Second Age begins. You return to Manwë’s side, ready for future tasks.",
      image: "/assets/story-scenes/eonwe-return.jpg",
      choices: [
        { text: "End the story", next: "end-eonwe" }
      ]
    }
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
    {
      location: "Menegroth",
      text: "You are Elu Thingol, King of Doriath, ruler of the Thousand Caves in the heart of Beleriand. With your queen Melian the Maia, you have long kept your realm hidden behind the Girdle of Enchantment, untouched by the wars of the Noldor and Morgoth’s shadow. But now the world grows darker, and change comes even to Doriath.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Hold council with Melian and your advisors", next: 1 },
        { text: "Send scouts to learn of the outside world", next: 2 }
      ]
    },
    {
      location: "Throne Room of Doriath",
      text: "You gather your court in Menegroth. Melian speaks of visions—of coming sorrow, of the Silmarils, and the wars beyond your borders. Some urge caution, others isolation. But soon, your realm will face its own trials, for a mortal man named Beren has entered your lands—and your daughter Lúthien’s heart.",
      image: "/assets/story-scenes/thingol-throne.jpg",
      choices: [
        { text: "Summon Beren to your throne", next: 3 }
      ]
    },
    {
      location: "Borders of Doriath",
      text: "Your scouts return with troubling news. The lands beyond your borders burn. The Noldor fight desperately against Morgoth’s armies. Many realms have fallen, and your isolation may no longer be enough. You begin to consider whether Doriath should stay hidden or take a more active role.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Maintain Doriath’s secrecy and defense", next: 1 }
      ]
    },
    {
      location: "Menegroth",
      text: "You meet Beren, a mortal man, who claims to love your daughter. Outraged, you challenge him to retrieve a Silmaril from Morgoth’s iron crown as bride-price, thinking it an impossible task. Yet Beren accepts. Melian warns you: 'This doom you shape for others shall shape your own fate.'",
      image: "/assets/story-scenes/thingol-beren.jpg",
      choices: [
        { text: "Ignore Melian’s warning", next: 4 },
        { text: "Begin to worry about the future", next: 5 }
      ]
    },
    {
      location: "Doriath",
      text: "Time passes. To your amazement, Beren returns—grievously wounded, but holding a Silmaril. Your pride turns to awe, but the jewel awakens a terrible desire in your heart. You task the Dwarves of Nogrod with setting it into the Nauglamír, the necklace of the Dwarves. But this decision will cost you dearly.",
      image: "/assets/locations/Doriath.png",
      choices: [
        { text: "Demand the Dwarves return the finished work", next: 6 }
      ]
    },
    {
      location: "Menegroth",
      text: "Your dreams are troubled, and Melian grows distant. You begin to suspect that the Silmaril is not a blessing, but a curse. Still, you cannot part with it. When the Dwarves complete their work and behold the necklace set with the holy gem, their greed is kindled.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Confront the Dwarves over the ownership", next: 6 }
      ]
    },
    {
      location: "Menegroth",
      text: "You deny the Dwarves’ claim, enraging them. They attack you in your own halls, and though you slay some with your own blade, you fall beneath their axes. The halls of Menegroth echo with cries of betrayal. Melian, stricken with grief, departs from the world, and the Girdle of Doriath fades.",
      image: "/assets/story-scenes/thingol-death.jpg",
      choices: [
        { text: "Let your tale end", next: "end-thingol" }
      ]
    }
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