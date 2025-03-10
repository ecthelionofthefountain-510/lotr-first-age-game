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
      text: "Du är Túrin, son till Húrin och Morwen, född i Dor-lómins hårt prövade land. Din far har tagits till fånga efter Nirnaeth Arnoediad, och Morgoths förbannelse vilar över din familj. När ödemarken invaderas av österlänningarna, tar din mor ett svårt beslut.",
      image: "/assets/story-scenes/turin-childhood.jpg",
      choices: [
        { text: "Skickas till Doriath för säkerhet", next: 1 },
        { text: "Stanna och skydda din mor och syster", next: 2 }
      ]
    },
    {
      location: "Resan till Doriath",
      text: "Motvilligt accepterar du din mors beslut. Med endast två guider påbörjar du den farliga resan genom vildmarken mot alvriket Doriath. Resan är svår och dina guider faller offer för hårda väderförhållanden och yttre faror.",
      image: "/assets/locations/Ered-Wethrin.png",
      choices: [
        { text: "Fortsätta ensam mot Doriath", next: 3 }
      ]
    },
    {
      location: "Dor-lómins fall",
      text: "Du vägrar att lämna din familj och lovar att skydda dem. Ditt mod är beundransvärt, men du är fortfarande bara ett barn. När österlänningarna kommer, dödas många som gör motstånd. Din mor övertygar dig slutligen att fly för ditt eget bästa.",
      image: "/assets/story-scenes/dor-lomin-fall.jpg",
      choices: [
        { text: "Fly mot Doriath", next: 1 }
      ]
    },
    {
      location: "Möte med Beleg",
      text: "Utmattad och nästan vilsen i skogarna kring Doriath, hittas du av Beleg Cúthalion, Doriaths mästerlige bågskytt. Han leder dig genom Melians gördel, in i det beskyddade riket, och presenterar dig vid kung Thingols hov.",
      image: "/assets/story-scenes/turin-beleg-meeting.jpg",
      choices: [
        { text: "Acceptera Thingols beskydd", next: 4 }
      ]
    },
    {
      location: "Menegroth",
      text: "Kung Thingol välkomnar dig som fosterson, till ära av Húrin. I Menegroth får du en utbildning värdig en alvprins. Du växer snabbt och ditt mod och skicklighet i strid blir legendariskt. Men stolthet och ett snabbt humör formar också din karaktär.",
      image: "/assets/locations/Menegroth.png",
      choices: [
        { text: "Fokusera på stridsträning med Beleg", next: 5 },
        { text: "Lära dig visdom från Melian", next: 6 }
      ]
    },
    {
      location: "Stridsträning",
      text: "Under Belegs vägledning blir du en fruktad krigare. Du lär dig bågskytte och svärdsteknik från de bästa alverna, och din styrka växer bortom de flesta alvernas. Du längtar efter att bevisa ditt värde i riktig strid mot Morgoths styrkor.",
      image: "/assets/story-scenes/turin-combat-training.jpg",
      choices: [
        { text: "Ansöka om att ansluta till gränsvakterna", next: 7 }
      ]
    },
    {
      location: "Melians lärdom",
      text: "Den visa Maia Melian erbjuder dig kunskap om världens hemligheter och alvernas historia. Hon varnar dig för din egen stolthet och antyder att ett mörkt öde följer dig. Du lyssnar, men krigarens väg kallar starkare.",
      image: "/assets/story-scenes/melian-teaching.jpg",
      choices: [
        { text: "Söka äventyr vid gränserna", next: 7 }
      ]
    },
    {
      location: "Gränslanden",
      text: "Du ansluter dig till Belegs kompani som patrullerar Doriaths gränser. Här finner du ditt kall, jagandes orcher och andra av Morgoths tjänare. Ditt rykte växer, och många söker sig till ditt följe. Men en incident förändrar allt.",
      image: "/assets/locations/Doriath-borders.jpg",
      choices: [
        { text: "Fortsätt patrullera med Beleg", next: 8 }
      ]
    },
    {
      location: "Saeros provokation",
      text: "I Menegroth förolämpar Saeros, en av kungens rådgivare, din mor och ditt folk. I vredesmod anfaller du honom. Nästa dag lägger Saeros ett bakhåll för dig, men du besegrar honom och jagar honom naken genom skogen. I sin panik faller han i en ravin och dör.",
      image: "/assets/story-scenes/turin-saeros.jpg",
      choices: [
        { text: "Fly från Doriath innan dom fälls", next: 9 },
        { text: "Stanna och möt rättvisan", next: 10 }
      ]
    },
    {
      location: "Självvald exil",
      text: "Övertygad om att du inte kommer att få rättvisa, flyr du från Doriath. Du tar upp en laglös tillvaro i vildmarken och ansluter dig till en grupp fredlösa män, som du snart tar ledningen över. Under denna tid kallar du dig själv Neithan, 'Den förorättade'.",
      image: "/assets/story-scenes/turin-outlaw.jpg",
      choices: [
        { text: "Leda de fredlösa mot ett ädlare syfte", next: 11 }
      ]
    },
    {
      location: "Thingols förlåtelse",
      text: "Du står inför Thingol för att dömas. Mablung vittnar om att Saeros anföll dig först och att du inte hade för avsikt att döda honom. Thingol benådar dig, men din stolthet och skam får dig att avvisa hans förlåtelse. Du lämnar Doriath, trots Belegs försök att stoppa dig.",
      image: "/assets/story-scenes/turin-thingol-pardon.jpg",
      choices: [
        { text: "Vandra ut i vildmarken", next: 9 }
      ]
    },
    {
      location: "Slagfältet vid Amon Rûdh",
      text: "Under ditt ledarskap blir de fredlösa försvarare av oskyldiga, attackerandes Morgoths styrkor var de än hittar dem. Vid en strid blir din vän Beleg återigen inblandad i ditt öde. Beleg, som sökt efter dig i månader, hjälper er att besegra en orchstyrka.",
      image: "/assets/story-scenes/battle-amon-rudh.jpg",
      choices: [
        { text: "Välkomna Beleg till ditt följe", next: 12 },
        { text: "Avvisa Beleg av stolthet", next: 13 }
      ]
    },
    {
      location: "Bar-en-Danwedh",
      text: "Du och Beleg etablerar ett starkt fäste vid Amon Rûdh. Din grupp blir känd som Gorthols hjälm och du återfår något av din förlorade ära. Beleg ger dig svärdet Anglachel, smitt av Eöl. En dag anländer en dvärg som kallar sig Mîm, efterfrågande din hjälp.",
      image: "/assets/story-scenes/bar-en-danwedh.jpg",
      choices: [
        { text: "Erbjuda Mîm skydd i utbyte mot husrum", next: 14 }
      ]
    },
    {
      location: "Belegost",
      text: "Efter Belegs återförening med dig har han försökt övertala dig att återvända till Doriath. När du avslår, lämnar han dig för att återvända till sitt hem. Ensam med de fredlösa, för du ditt privata krig mot Morgoth, men utan Belegs visdom blir dina aktioner allt mer dumdristiga.",
      image: "/assets/locations/Belegost.png",
      choices: [
        { text: "Fortsätta kampen mot Morgoth", next: 14 }
      ]
    },
    {
      location: "Mîms förräderi",
      text: "Mîm, fortfarande hämndfull för sina söners död, förråder ert gömställe till orcherna. I en omringning faller många av dina män, och du själv blir tillfångatagen. Beleg, som just återvänt med alvkrigararen Gwindor från Nargothrond, finner platsen i ruiner.",
      image: "/assets/story-scenes/mim-betrayal.jpg",
      choices: [
        { text: "Beleg och Gwindor följer orchernas spår", next: 15 }
      ]
    },
    {
      location: "Tragedins natt",
      text: "Beleg och Gwindor spårar orcherna som tillfångatagit dig. De hittar dig bunden och medvetslös. I mörkret, medan Beleg skär av dina rep med sitt svärd Anglachel, slår blixten ned och du vaknar med ett ryck. I förvirringen tror du att Beleg är en orch och dödar honom med hans eget svärd.",
      image: "/assets/story-scenes/beleg-death.jpg",
      choices: [
        { text: "Förtvivla över ditt misstag", next: 16 }
      ]
    },
    {
      location: "Ivrin",
      text: "I förtvivlan över att ha dödat din bästa vän, blir du nära galen av sorg. Gwindor leder dig till Ivrins helande vatten. Sakta återfår du ditt förnuft, men smärtan sitter djup. Du tar Anglachel, det svärd som dödade Beleg, och lovar att med det hämnas all orättfärdighet.",
      image: "/assets/story-scenes/turin-ivrin.jpg",
      choices: [
        { text: "Följa Gwindor till Nargothrond", next: 17 }
      ]
    },
    {
      location: "Nargothrond",
      text: "Gwindor tar dig till sitt hem, den dolda alvstaden Nargothrond. Där antar du namnet Agarwaen, 'Blodbesudlad', för att dölja din identitet. Anglachel smids om och döps till Gurthang, 'Dödens järn'. Din skicklighet i strid ger dig stor respekt bland alverna.",
      image: "/assets/locations/Nargothrond.png",
      choices: [
        { text: "Vinna inflytande i Nargothrond", next: 18 }
      ]
    },
    {
      location: "Orodreths rådsal",
      text: "Kung Orodreth beundrar din krigiska expertis. Ditt inflytande ökar tills du praktiskt taget leder stadens politik. Du övertygar dem att överge sin hemliga, defensiva strategi till förmån för öppen krigföring mot Morgoth. Finduilas, kungens dotter, utvecklar känslor för dig.",
      image: "/assets/story-scenes/orodreth-council.jpg",
      choices: [
        { text: "Leda alverna i öppen strid", next: 19 },
        { text: "Uppmärksamma Finduilas känslor", next: 20 }
      ]
    },
    {
      location: "Talath Dirnen",
      text: "Under ditt ledarskap blir Nargothronds krigare aggressiva och rensear området från Morgoths tjänare. För en tid verkar strategin fungera, och du kallas Mormegil, 'Svarta svärdet'. Men denna framgång drar också Morgoths uppmärksamhet till Nargothrond.",
      image: "/assets/story-scenes/talath-dirnen.jpg",
      choices: [
        { text: "Bygga en bro för att påskynda arméns förflyttningar", next: 21 }
      ]
    },
    {
      location: "Samtal med Finduilas",
      text: "Finduilas kärlek är uppenbar, men ditt hjärta är fortfarande tungt av sorg och skuld. Du ser henne som en vän men kan inte besvara hennes känslor. När Gwindor avslöjar din sanna identitet för henne, blir din position i Nargothrond ännu mer komplex.",
      image: "/assets/story-scenes/finduilas-turin.jpg",
      choices: [
        { text: "Avvisa Finduilas milt", next: 19 }
      ]
    },
    {
      location: "Nargothronds fall",
      text: "Din strategi leder till katastrof. Morgoth skickar en massiv armé ledd av draken Glaurung. Bron du byggde ger nu fienden en direkt väg in i den tidigare dolda staden. I de fåfänga strider blir du förhäxad av drakens blick, och står paralyserad medan staden faller.",
      image: "/assets/story-scenes/fall-of-nargothrond.jpg",
      choices: [
        { text: "Konfrontera Glaurung", next: 22 }
      ]
    },
    {
      location: "Glaurungs förhäxning",
      text: "Under drakens hypnotiska blick förlamar han dig med falsk skuld. Han övertygar dig att din mor och syster lever i elände i Dor-lómin, och att du måste rädda dem istället för att jaga efter Finduilas, som tillfångatagits av orcher. Skamfilld, lyder du drakens listiga råd.",
      image: "/assets/story-scenes/glaurung-spell.jpg",
      choices: [
        { text: "Resa till Dor-lómin", next: 23 }
      ]
    },
    {
      location: "Dor-lómin återbesökt",
      text: "Du återvänder till ditt barndomshem bara för att upptäcka att din mor och syster lämnade för länge sedan, sökandes skydd i Doriath. Förstående att draken lurat dig, vänder du din uppmärksamhet till Finduilas, men det är för sent. På vägen möter du en viss Niënor...",
      image: "/assets/story-scenes/dor-lomin-return.jpg",
      choices: [
        { text: "Söka efter Finduilas", next: 24 }
      ]
    },
    {
      location: "Haudh-en-Elleth",
      text: "Du spårar orcherna till Crossings of Teiglin, men kommer för sent. Männen från Brethil berättar att de försökte rädda fångarna, men Finduilas dödades. De begravde henne i en hög som nu kallas Haudh-en-Elleth, 'Alvkvinnans hög'. Förkrossad bosätter du dig bland Halethfolket.",
      image: "/assets/story-scenes/haudh-en-elleth.jpg",
      choices: [
        { text: "Stanna med Halethfolket i Brethil", next: 25 }
      ]
    },
    {
      location: "Brethil",
      text: "Bland Halethfolket antar du ett nytt namn, Turambar, 'Ödets mästare', i ett försök att undfly Morgoths förbannelse. Du finner viss frid och blir en ledare bland dessa skogsfolk. En dag räddar du en förvirrad ung kvinna som förlorat minnet, jagad av orcher.",
      image: "/assets/story-scenes/brethil-forest.jpg",
      choices: [
        { text: "Ta hand om den förvirrade kvinnan", next: 26 }
      ]
    },
    {
      location: "Haldads hus",
      text: "Kvinnan, som inte kommer ihåg sitt förflutna, kallas Níniel, 'Tårflicka'. Ingen av er anar att hon egentligen är Niënor, din egen syster, förhäxad av Glaurung när hon sökte efter dig. Med tiden växer kärlek mellan er, och ni gifter er. För en kort tid finner du glädje.",
      image: "/assets/story-scenes/haldad-house.jpg",
      choices: [
        { text: "Leva i fred med Níniel", next: 27 }
      ]
    },
    {
      location: "Glaurungs återkomst",
      text: "Freden bryts när draken Glaurung närmar sig Brethil. Som ledare måste du organisera försvaret. Níniel väntar ditt barn och är förtvivlad över risken, men du känner att du måste möta ditt öde och konfrontera din gamla fiende en sista gång.",
      image: "/assets/story-scenes/glaurung-returns.jpg",
      choices: [
        { text: "Möta Glaurung vid Cabed-en-Aras", next: 28 }
      ]
    },
    {
      location: "Cabed-en-Aras",
      text: "Vid den djupa ravinen Cabed-en-Aras, där floden Teiglin rusar fram, sätter du din plan i verket. Glaurung försöker korsa ravinen. När draken är mitt över avgrunden, är hans mjuka undersida exponerad. Du sticker in Gurthang djupt i hans hjärta.",
      image: "/assets/story-scenes/cabed-en-aras.jpg",
      choices: [
        { text: "Inspektera draken", next: 29 }
      ]
    },
    {
      location: "Den döende draken",
      text: "När Glaurung dör, öppnar han ögonen en sista gång och häver förtrollningen över dig. I det ögonblicket, när Níniel kommer för att söka dig, gör draken en sista grym handling. Han avslöjar sanningen – Níniel är din syster. När hon förstår, kastar hon sig ned i den rasande floden.",
      image: "/assets/story-scenes/glaurung-dying.jpg",
      choices: [
        { text: "Återvända till Haldads hus", next: 30 }
      ]
    },
    {
      location: "Túrins öde",
      text: "Överväldigad av den slutliga, grymma vändningen av ditt öde, återvänder du till Haldads hus. Där konfronterar du Mîm dvärgern, som erkänner sitt förräderi från Amon Rûdh. Efter att ha hämnat Beleg, tar du ditt svärd Gurthang och begär att det ska ta ditt liv, avslutandes Morgoths förbannelse.",
      image: "/assets/story-scenes/turin-suicide.jpg",
      choices: [
        { text: "Sluta din tragiska berättelse", next: "end-turin" }
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
      text: "Du är Ecthelion, Herre över Silverfontänens hus och en av kung Turgons mäktigaste krigare. I den dolda staden Gondolin tjänar du som vakt vid den sjunde porten, Stålporten. Din flöjtmusik och din silverhjälm är kända i hela staden.",
      image: "/assets/locations/Gondolin.png",
      choices: [
        { text: "Utföra dina plikter som vakt", next: 1 },
        { text: "Delta i stadens råd", next: 2 }
      ]
    },
    {
      location: "Silverfontänens hus",
      text: "Ditt hus tränar hårt i vapenkonster, med spjutet som specialitet. Stadens fred har varat i hundratals år, men du känner att faran aldrig är långt borta. Dina krigare är bland de mest disciplinerade i Gondolin, alltid redo att svara på trummornas kallelse.",
      image: "/assets/story-scenes/house-fountain.jpg",
      choices: [
        { text: "Leda din styrka i övningar", next: 3 }
      ]
    },
    {
      location: "Turgons hall",
      text: "I kungens råd diskuteras oroande rapporter. Maeglin, kungens systerson, argumenterar för ökad isolering, medan Tuor, den mänskliga budbäraren från Ulmo, varnar för att staden måste förberedas för ett kommande anfall. Turgons förtroende för stadens hemliga läge är orubbat.",
      image: "/assets/story-scenes/turgon-hall.jpg",
      choices: [
        { text: "Stödja Tuors varningar", next: 4 },
        { text: "Lita på Gondolins försvar", next: 5 }
      ]
    },
    {
      location: "Övningsfältet",
      text: "Du och Glorfindel från Gyllene Blommans hus leder era styrkor i gemensamma övningar. Er vänskap och tävlan är legendarisk i staden. Trots den långa freden håller du dina krigare alerta, driven av en känsla av kommande fara som aldrig lämnat dig.",
      image: "/assets/story-scenes/training-grounds.jpg",
      choices: [
        { text: "Förbereda stadens försvar", next: 6 }
      ]
    },
    {
      location: "Hemliga rådet",
      text: "Du, Tuor och några få andra möts i hemlighet för att diskutera stadens framtid. Du stödjer Tuors förslag om förberedelser för evakuering, men konstaterar att kungen aldrig kommer att överge staden frivilligt. Ni börjar planera i tysthet för den mörka dag som kan komma.",
      image: "/assets/story-scenes/secret-council.jpg",
      choices: [
        { text: "Utöka vaktposterna utanför staden", next: 5 }
      ]
    },
    {
      location: "Stadens murar",
      text: "Du inspekterar stadens befästningar. Gondolins murar är starka och dess läge hemligt, men Morgoths hat är obevekligt. Du anar att förräderi, inte styrka, kommer att bli stadens fall. Dina misstankar faller på Maeglin, vars blick ofta följer Idril med alarmerande intensitet.",
      image: "/assets/story-scenes/gondolin-walls.jpg",
      choices: [
        { text: "Tala med Tuor om dina misstankar", next: 7 }
      ]
    },
    {
      location: "Förberedelser",
      text: "I tysthet förbereder du ditt hus för alla eventualiteter. Vapen förstärks, förråd lagras, och evakueringsvägar memoreras. Andra husledare följer ditt exempel, medan vissa i staden ser era förberedelser som onödiga. Turgon noterar era aktiviteter men ingriper inte.",
      image: "/assets/story-scenes/preparations.jpg",
      choices: [
        { text: "Fortsätta förberedelserna i det tysta", next: 8 }
      ]
    },
    {
      location: "Tuors hem",
      text: "Du och Tuor diskuterar era farhågor. Han delar dina misstankar om Maeglin och avslöjar att han och Idril byggt en hemlig flyktväg från staden. Ni slår fast ett tyst avtal – om det värsta händer, ska du skydda reträtten medan Tuor leder folket till säkerhet.",
      image: "/assets/story-scenes/tuor-house.jpg",
      choices: [
        { text: "Undersöka bergspassagen", next: 9 }
      ]
    },
    {
      location: "Midsommarfestival",
      text: "Under stadens midsommarfirande sprider sig en känsla av oro. Maeglin har varit frånvarande i flera veckor och nyligen återvänt utan förklaring. Din intuition säger dig att någonting är fel. När natten faller, märker du ett olycksbådande rött sken från de norra bergen.",
      image: "/assets/story-scenes/midsummer-festival.jpg",
      choices: [
        { text: "Slå larm", next: 10 }
      ]
    },
    {
      location: "Den hemliga tunneln",
      text: "Du undersöker den hemliga väg som Idril förberedde. Den leder genom en dold klyfta i berget bakom hennes hus, ut till en dold stig som slutligen når Cirith Thoronathor, Örnarnas passage. Det är en smal och farlig väg, men den enda flykträtten om staden faller.",
      image: "/assets/story-scenes/secret-tunnel.jpg",
      choices: [
        { text: "Återvända till staden", next: 8 }
      ]
    },
    {
      location: "Anfall på Gondolin",
      text: "Larmet ljuder genom staden när Morgoths arméer väller in i den dolda dalen. Anförda av Balroger, drakar och orcher, bryter de genom stadens yttre försvar. Du samlar snabbt Silverfontänens hus till strid, medveten om att detta är den dag ni länge fruktat.",
      image: "/assets/story-scenes/attack-on-gondolin.jpg",
      choices: [
        { text: "Leda försvaret vid Stålporten", next: 11 }
      ]
    },
    {
      location: "Stålportens försvar",
      text: "Vid den sjunde porten gör du ett heroiskt försvar. Ditt spjut glänser i eldskenet när du fäller orch efter orch. Under en tid verkar din position hållbar, men mer av fiendens styrkor fortsätter att välla in. En drakeldsattack tvingar er att retirera inåt.",
      image: "/assets/story-scenes/steel-gate-defense.jpg",
      choices: [
        { text: "Retirera till stadens centrum", next: 12 }
      ]
    },
    {
      location: "Tumlaren",
      text: "Striderna rasar nu på stadens gator. Du leder dina krigare från fontänen på Tumlaren, stadens stora torg. Här gör du ditt sista motstånd, medveten om att Tuor leder civila mot flykttunneln. Du ser Glorfindel leda en grupp över torget, tätt förföljd av en Balrog.",
      image: "/assets/story-scenes/tumbler-square.jpg",
      choices: [
        { text: "Skydda reträtten", next: 13 },
        { text: "Hjälpa Glorfindel", next: 14 }
      ]
    },
    {
      location: "Idrils flyktväg",
      text: "Du väljer att skydda de flyende civila, kämpandes mot allt större odds. Dina krigare faller en efter en, men tack vare er uppoffring lyckas hundratals nå säkerhet. När fienderna tränger närmare, gör du ditt slutliga motstånd vid ingången till flyktvägen.",
      image: "/assets/story-scenes/idrils-escape.jpg",
      choices: [
        { text: "Konfrontera Gothmog", next: 15 }
      ]
    },
    {
      location: "Glorfindels strid",
      text: "Du rusar för att hjälpa din vän Glorfindel, som kämpar mot en mäktig Balrog. Tillsammans pressar ni monstret mot stadens kant. I striden offrar Glorfindel sitt liv för att dra ned Balrogen från klippan. Med tungt hjärta måste du lämna din fallna vän för att möta nästa hot.",
      image: "/assets/story-scenes/glorfindel-battle.jpg",
      choices: [
        { text: "Konfrontera Gothmog", next: 15 }
      ]
    },
    {
      location: "Konfrontation med Balrogarnas herre",
      text: "Vid Fontänens torg möter du Gothmog, Balrogarnas Herre. Hans eldsvärd och piska gör honom till den fruktansvärdaste av Morgoths krigare. Omgiven av eld och förödelse gör du dig redo för din sista strid, besluten att denna fiende inte ska passera.",
      image: "/assets/story-scenes/gothmog-confrontation.jpg",
      choices: [
        { text: "Strida mot Gothmog", next: 16 }
      ]
    },
    {
      location: "Den sista striden",
      text: "Du angriper Gothmog med ditt spjut, men Balrogen parerar dina anfall. Din silverhjälm krossas av hans piska, och du blir sårad. Med ett sista, djärvt utfall kastar du dig mot fienden. Din silverhjälms spets borrar sig djupt in i Balkrogens bröstkorg, men han griper tag i dig.",
      image: "/assets/story-scenes/ecthelion-final-battle.jpg",
      choices: [
        { text: "Använda din sista styrka", next: 17 }
      ]
    },
    {
      location: "Kungens fontän",
      text: "I ett sista desperat försök lindar du dina ben runt Gothmog och drar honom med dig ner i fontänens djupa vatten. Balrogen, tyngd av din silverrustning och genomborrad av din hjälm, kan inte fly. I vattnets svala omfamning slocknar hans eldkropp, och ni sjunker båda mot djupet.",
      image: "/assets/story-scenes/kings-fountain.jpg",
      choices: [
        { text: "Omfamna ditt öde", next: "battle-ecthelion" }
      ]
    }
  ],
  Tuor: [
    {
      location: "Androth",
      text: "Du är Tuor, son till Huor, uppfostrad av grå-alver i grottorna i Androth efter dina föräldrars död. I en dröm kommer Ulmo, Vattnens Herre, till dig och uppmanar dig att lämna ditt gömsle och söka den dolda staden Gondolin.",
      image: "/assets/locations/Androth.jpg",
      choices: [
        { text: "Följ Ulmos uppmaning", next: 1 },
        { text: "Sök mer information från alverna först", next: 2 }
      ]
    },
    {
      location: "Vinyamar",
      text: "Du följer Ulmos vägledning till de övergivna hallarna i Vinyamar vid havet. Där finner du rustningen och svärdet som Turgon lämnade på Ulmos befallning. När du står vid havsstranden, talar Ulmo till dig direkt från vågorna.",
      image: "/assets/locations/Vinyamar.jpg",
      choices: [
        { text: "Ta emot Ulmos meddelande", next: 3 }
      ]
    },
    {
      location: "Grå-alvernas läger",
      text: "Du söker råd från alverna som uppfostrade dig. De berättar historien om Gondolins grundande och hur dess plats hålls hemlig, även för de flesta alver. En äldre alv nämner att Ulmo ofta kommunicerar genom drömmar till de som är utvalda för stora öden.",
      image: "/assets/story-scenes/grey-elves-camp.jpg",
      choices: [
        { text: "Resa till Vinyamar", next: 1 }
      ]
    },
    {
      location: "Ulmos uppdrag",
      text: "Ur vågorna stiger Ulmo, majestätisk och fruktansvärd. Han ger dig ett uppdrag att varna Gondolin om deras kommande fall och att bära hans budskap till kung Turgon. En dimridå stiger från havet, och ur den träder en alv vid namn Voronwë.",
      image: "/assets/story-scenes/ulmo-tuor.jpg",
      choices: [
        { text: "Bege dig med Voronwë mot Gondolin", next: 4 }
      ]
    },
    {
      location: "Resan genom Beleriand",
      text: "Du och Voronwë reser genom det farliga landskapet. Voronwë, en överlevande från en av Turgons misslyckade expeditioner till Valinor, känner de dolda vägarna. Vintern kommer, och ni måste vara försiktiga för att undvika Morgoths spioner.",
      image: "/assets/locations/Beleriand.jpg",
      choices: [
        { text: "Ta den norra vägen genom bergen", next: 5 },
        { text: "Följ vattendragen som Ulmo skyddar", next: 6 }
      ]
    },
    {
      location: "Echoriath",
      text: "Ni väljer den farliga norra passagen genom de Omringande Bergen. Kylan är bitter och vägarna förrädiska. När ni kämpar genom en snöstorm, känner du närvaron av något ondskefullt som följer er...",
      image: "/assets/locations/Echoriath.jpg",
      choices: [
        { text: "Förbereda ett försvar", next: 7 },
        { text: "Försöka undkomma genom att ta skydd", next: 8 }
      ]
    },
    {
      location: "Den Dolda Vägen",
      text: "Ni följer floderna som Ulmo har välsignat med sin skyddande kraft. Vattendragen leder er till de Omringande Bergen, där ni upptäcker märken som endast de som känner till dem kan tolka – tecken på den Dolda Vägen till Gondolin.",
      image: "/assets/story-scenes/hidden-way.jpg",
      choices: [
        { text: "Följa tecknena mot den Dolda Staden", next: 9 }
      ]
    },
    {
      location: "Bakhåll",
      text: "Du och Voronwë förbereder er för strid när en grupp orcher med en Balrog i ledningen närmar sig. Striden verkar hopplös, men när det första anfallet kommer, hör du ljudet av trumpeter. Gondolins vakter har upptäckt er och kommer till er undsättning.",
      image: "/assets/story-scenes/ambush-rescue.jpg",
      choices: [
        { text: "Möta Gondolins vakter", next: 9 }
      ]
    },
    {
      location: "Ishöla",
      text: "Ni tar skydd i en ishöla djupt inne i bergspasset. I flera dagar väntar ni ut stormen och hotet som förföljer er. När lugnet återvänder, fortsätter ni er resa, mer försiktiga än tidigare. Slutligen kommer ni till en dold dal som leder djupare in i bergen.",
      image: "/assets/story-scenes/ice-cave.jpg",
      choices: [
        { text: "Följa den dolda dalen", next: 9 }
      ]
    },
    {
      location: "Gondolins portar",
      text: "Vaktarna för er genom den sista tunneln, och plötsligt öppnar sig världen i en vid dal. Mitt i dalen, på en kulle av sten, ligger Gondolin, den Dolda Staden, glänsande vit i solljuset. Du stannar andlös vid åsynen av dess skönhet och majestät.",
      image: "/assets/locations/Gondolin.png",
      choices: [
        { text: "Träda in i den Dolda Staden", next: 10 }
      ]
    },
    {
      location: "Turgons Hall",
      text: "Du förs inför kung Turgon i hans marmortorn. Klädd i Ulmos rustning framför du Vattnens Herres varning – staden måste överges innan den faller. Turgon är skeptisk, hans förtroende för stadens hemlighet är stark. Han ger dig tillåtelse att stanna men avvisar varningen.",
      image: "/assets/story-scenes/turgon-hall.jpg",
      choices: [
        { text: "Argumentera starkare för Ulmos varning", next: 11 },
        { text: "Acceptera Turgons beslut och stanna i staden", next: 12 }
      ]
    },
    {
      location: "Rådets Kammare",
      text: "Du vädjar passionerat till Turgon och hans råd, beskrivande Ulmos vision av stadens fall i detalj. Medan vissa rådsmedlemmar börjar lyssna, förblir Turgon bestämd. Maeglin, kungens systerson, argumenterar starkt mot dig och hans inflytande är stort.",
      image: "/assets/story-scenes/council-chamber.jpg",
      choices: [
        { text: "Stanna i staden trots allt", next: 12 }
      ]
    },
    {
      location: "Gondolins gator",
      text: "Accepterandes ditt misslyckande att övertyga Turgon, etablerar du dig i den Dolda Staden. Du tillåts att gå Örnarnas hus, och blir en respekterad medlem av samhället. Det är här du först möter Idril Celebrindal, kungens dotter, vars skönhet och visdom fångar ditt hjärta.",
      image: "/assets/story-scenes/gondolin-streets.jpg",
      choices: [
        { text: "Sök Idrils vänskap", next: 13 }
      ]
    },
    {
      location: "Örnarnas Fontän",
      text: "Du och Idril möts ofta vid Örnarnas Fontän, där ni delar tankar om världen utanför. Hon lyssnar på dina berättelser om Ulmos vision och fruktar också för Gondolins framtid. Er vänskap växer till kärlek, till Maeglins tysta vrede, som själv begär Idril.",
      image: "/assets/story-scenes/eagles-fountain.jpg",
      choices: [
        { text: "Fria till Idril", next: 14 }
      ]
    },
    {
      location: "Bröllopet",
      text: "Mot alla odds tillåter Turgon ert äktenskap. Det är första gången en människa har gift sig med en av Eldar. Festligheterna varar i dagar, men Maeglin vägrar att delta och hans hat mot dig växer i det tysta.",
      image: "/assets/story-scenes/tuor-idril-wedding.jpg",
      choices: [
        { text: "Bygga ett liv med Idril i Gondolin", next: 15 }
      ]
    },
    {
      location: "Eärendil föds",
      text: "Din son med Idril, Eärendil Halvalven, föds – ett barn av både alviskt och mänskligt blod. Hans öde, känner du, kommer vara större än sitt eget. Under dessa år bygger Idril i hemlighet en flyktväg från staden, driven av sin fruktan och förutseende.",
      image: "/assets/story-scenes/earendil-birth.jpg",
      choices: [
        { text: "Hjälpa Idril med den hemliga tunneln", next: 16 }
      ]
    },
    {
      location: "Den Dolda Tunneln",
      text: "Du och Idril arbetar i hemlighet med den underjordiska passagen som leder från ert hus till en dold utgång bortom stadens murar. Endast era mest betrodda vänner känner till projektet. Samtidigt tränar du stadens försvarare, förberedande dem för den strid som du vet kommer.",
      image: "/assets/story-scenes/hidden-tunnel.jpg",
      choices: [
        { text: "Förbereda för stadens försvar", next: 17 }
      ]
    },
    {
      location: "Stadens Försvar",
      text: "Åren går i relativ fred, men du och Idril förblir vaksamma. Du hjälper till att stärka stadens försvar och leder Vita Örnarnas hus. När festivaleldar tänds för att fira Sommarporten, kommer ett oväder från norr. Ur mörkret kommer Morgoths arméer, ledda av drakar och Balroger.",
      image: "/assets/story-scenes/city-defenses.jpg",
      choices: [
        { text: "Strid mot inkräktarna", next: "battle-tuor" }
      ]
    }
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
    {
      location: "Valinor",
      text: "Du är Eönwë, härold åt Manwë, Valars konung. I årtusenden har du tjänat i de skinande hallarna på Taniquetil, bärandes Vindarnas Herres ord till alla riken. En dag kallas du till Mahanaxars ring, där Valarna församlats för ett stort råd.",
      image: "/assets/locations/Valinor.jpg",
      choices: [
        { text: "Träda in i rådsringen", next: 1 },
        { text: "Observera från distans först", next: 2 }
      ]
    },
    {
      location: "Mahanaxar",
      text: "I Domsringen samlas Valarna i all sin makt och prakt. Manwë talar om den växande mörkret i Midgård, om Morgoths oavbrutna tyranni, och Eärendils modiga resa över havet för att be om hjälp. Det är dags, förkunnar Manwë, för Valarna att ingripa direkt i Midgårds öde.",
      image: "/assets/locations/Ring-of-doom.jpg",
      choices: [
        { text: "Höra ditt uppdrag", next: 3 }
      ]
    },
    {
      location: "Taniquetils toppar",
      text: "Från en av Taniquetils höga toppar observerar du rådet. Du ser Eärendil, mortalens son, träda fram med sin silmaril lysande på pannan. Hans mod att korsa havet och hans plädering för både alver och människor berör även Valarnas hjärtan. Rådets beslut formas.",
      image: "/assets/locations/Taniquetil.jpg",
      choices: [
        { text: "Närma dig rådet", next: 1 }
      ]
    },
    {
      location: "Manwës uppdrag",
      text: "Manwë ger dig det högsta uppdraget. Du ska leda Valars här mot Beleriand, för att en gång för alla befria Midgård från Morgoths tyranni. Detta är Vrede av Väst, den största styrkan som någonsin formats sedan Världen formades, och du är dess befälhavare.",
      image: "/assets/locations/Halls-of-Manwe.jpg",
      choices: [
        { text: "Acceptera uppdraget", next: 4 },
        { text: "Fråga om villkoren för uppdraget", next: 5 }
      ]
    },
    {
      location: "Valars armé",
      text: "Du antar uppdraget med ödmjukhet och fast beslutsamhet. Armén du ska leda omfattar Maiars mäktiga andar, anförda av Valinors viktigaste krigare. Vanyar, de främsta av alver, marscherar under gyllene banér, och även många Noldor som stannade i Valinor har svurit sina vapen till dig.",
      image: "/assets/story-scenes/host-of-valinor.jpg",
      choices: [
        { text: "Förbereda avfärd", next: 6 }
      ]
    },
    {
      location: "Aulës smedja",
      text: "Du frågar Manwë om gränserna för din befogenhet och ditt uppdrags natur. Direktivet är klart: besegra Morgoth, men visa barmhärtighet där det är möjligt. Ingenting av de Tre Husen av Människor ska skadas, och alver ska respekteras som Iluvatars förstfödda, oavsett tidigare handlingar.",
      image: "/assets/locations/Aule-forge.jpg",
      choices: [
        { text: "Forma din strategi", next: 6 }
      ]
    },
    {
      location: "Tol Eressëa",
      text: "Arméns förberedelser är storslagna. På Teleri, alvfolkets stränder, byggs en flotta utan like. Valinors vapen och rustning, smidda av Aulë och hans folk, glittrar i solljuset. Slutligen, efter tusentals år av separation, vänder Valars makt åter mot Midgård.",
      image: "/assets/locations/Tirion.jpg",
      choices: [
        { text: "Leda flottan österut", next: 7 }
      ]
    },
    {
      location: "Belegaers vågor",
      text: "Flottan seglar österut över det stora havet. Trumpeter ljuder och Valinors ljus glimmar från tusentals spjut. Vid gryningen den sjunde dagen skymtas Midgårds kuster. Din strategi är att möta och övervinna Morgoths styrkor snabbt och med full kraft.",
      image: "/assets/story-scenes/fleet-sailing.jpg",
      choices: [
        { text: "Gå i land i Beleriand", next: 8 }
      ]
    },
    {
      location: "Falas ruiner",
      text: "Dina styrkor landstiger vid det som en gång var hamnarna i Falas. Området ligger nu i ruiner, ödelagt av Morgoths härjningar. Överlevande alver, huvudsakligen Sindars folk, kommer fram ur sina gömställen och möter Valinors här med förundran och hopp, ett hopp de nästan övergivit.",
      image: "/assets/story-scenes/falas-ruins.jpg",
      choices: [
        { text: "Möta de överlevande alvledarna", next: 9 },
        { text: "Omedelbart marschera mot Angband", next: 10 }
      ]
    },
    {
      location: "Alvernas råd",
      text: "Du möter Gil-galad, Círdan och andra av alvledarna som överlevt Morgoths långa belägring. De berättar om de katastrofala förlusterna, de fallna rikena, och Morgoths växande makt. Från dem får du ovärderlig kunskap om fiendens styrka och svaghet inför den kommande striden.",
      image: "/assets/story-scenes/council-elves.jpg",
      choices: [
        { text: "Planera det slutliga anfallet mot Angband", next: 10 }
      ]
    },
    {
      location: "Anfauglith",
      text: "Din här marscherar över det svarta, förbrända slättlandet Anfauglith mot Thangorodrim, Morgoths fästning. När ryktet om er ankomst sprider sig, samlas Morgoths styrkor för en sista desperat strid. Orcher, troll, varulvar, balroger och drakar formerar sig under Mörkets baner.",
      image: "/assets/locations/Anfauglith.png",
      choices: [
        { text: "Utdela stridsorder", next: 11 }
      ]
    },
    {
      location: "Slagfältet vid Anfauglith",
      text: "Historiens största slag börjar. Valinors signalhorn ljuder över slätterna, besvarade av Morgoths djupa trummor. Dina trupper rör sig i perfekt formation, lysandes i solljuset mot den mörka horden. Du leder angreppet, med ditt svärd skinande som en vit låga.",
      image: "/assets/story-scenes/war-of-wrath-battle.jpg",
      choices: [
        { text: "Leda huvudangreppet", next: 12 },
        { text: "Fokusera på att besegra drakarna", next: 13 }
      ]
    },
    {
      location: "Slagets hjärta",
      text: "Du leder anfallet mot Morgoths huvudstyrka, där Balrogerna leder fiendens offensiv. Ditt svärd och ditt ledarskap inspirerar Valinors styrkor till oöverträffade hjältedåd. Anfauglith skakas av kollisionen mellan ljusets och mörkrets makter.",
      image: "/assets/story-scenes/eonwe-leading.jpg",
      choices: [
        { text: "Möta drakarna som släpps lösa", next: 14 }
      ]
    },
    {
      location: "Himlarnas strid",
      text: "Med drakarna identifierade som det största hotet, koncentrerar du dina styrkor på att bekämpa dem. Thorondor och örnarna från Crissaegrim ansluter sig till striden, attackerandes drakarna i luften. Den mäktige Ancalagon den Svarte leder Morgoths bevingade terror.",
      image: "/assets/story-scenes/eagles-against-dragons.jpg",
      choices: [
        { text: "Kalla på Earendils hjälp", next: 14 }
      ]
    },
    {
      location: "Ancalagons anfall",
      text: "Medan striden fortsätter, släpper Morgoth lös sitt sista och mäktigaste vapen – den flygande draken Ancalagon den Svarte och hans legion. Deras anfall hotar att vända slaget. Men i detta ögonblick kommer Eärendil med sitt skepp Vingilot, seglandes genom skyn med Silmarilen lysande på hans panna.",
      image: "/assets/story-scenes/ancalagon-attack.jpg",
      choices: [
        { text: "Fortsätta slaget medan Earendil möter Ancalagon", next: 15 }
      ]
    },
    {
      location: "Thangorodrims fall",
      text: "Efter en episk strid fäller Eärendil Ancalagon, vars massiva kropp krossar Thangorodrims toppar när den faller. Detta vändpunkt i slaget signalerar Morgoths annalkande nederlag. Med hans mäktigaste vapen besegrade, börjar hans styrkor att falla tillbaka i oordning.",
      image: "/assets/story-scenes/ancalagon-falls.jpg",
      choices: [
        { text: "Leda anfallet mot Angband", next: 16 }
      ]
    },
    {
      location: "Angbands portar",
      text: "Du leder Valinors styrkor fram till Angbands svarta portar. De faller inför din här, och ni tränger djupt in i Morgoths fästning. Hans återstående styrkor flyr eller ger upp. I hjärtat av fästningen finner du Morgoth, en gång Arda mäktigaste Valar, nu reducerad och rädd.",
      image: "/assets/story-scenes/gates-of-angband.jpg",
      choices: [
        { text: "Konfrontera Morgoth", next: 17 }
      ]
    },
    {
      location: "Morgoths tronsal",
      text: "Du finner Morgoth i sin djupa tronsal. Den en gång så mäktige Valar är nu utmattad, berövad det mesta av sin kraft som han hällde in i världen självt. Han försöker fly in i jordens djupaste hålor, men dina styrkor blockerar alla vägar ut.",
      image: "/assets/story-scenes/morgoth-throne-room.jpg",
      choices: [
        { text: "Strida mot Morgoth", next: "battle-eonwe" }
      ]
    },
    {
      location: "Striden mot Morgoth",
      text: "Trots sin försvagade tillstånd är Morgoth fortfarande en fruktansvärd motståndare. Hans Grond, Underjordens hammare, skakar marken med varje slag. Men din snabbhet och skicklighet övervinner hans brutala styrka. Slutligen besegrar du honom, tvingar honom till sina knän, och klipper av hans fötter.",
      image: "/assets/story-scenes/morgoth-defeated.jpg",
      choices: [
        { text: "Fängsla Morgoth", next: 18 }
      ]
    },
    {
      location: "Eönwës dom",
      text: "Med Morgoth besegrad ställs du inför en annan utmaning. De två återstående Silmarilerna har återerövrats från Morgoths järnkrona. Fëanors söner Maedhros och Maglor kräver dem tillbaka, hävdandes deras familjs ed och rätt. Men du vet att deras krav är befläckat av blod.",
      image: "/assets/story-scenes/eonwe-judgment.jpg",
      choices: [
        { text: "Neka brödernas anspråk", next: 19 },
        { text: "Överväga deras anspråk med nåd", next: 20 }
      ]
    },
    {
      location: "Mörkrets exil",
      text: "Morgoth, nu i kedjor, förs ur världen genom Dödens dörr till det Tidlösa tomrummet. Där ska han förbli tills Dagor Dagorath, den sista striden. Hans krona hamras till en krage runt hans hals, och hans händer är permanent kedjade med Angainor.",
      image: "/assets/story-scenes/morgoth-banished.jpg",
      choices: [
        { text: "Omhänderta Silmarilerna", next: 21 }
      ]
    },
    {
      location: "Fëanorionernas tjuvnad",
      text: "Du nekar brödernas anspråk, påminnandes dem om deras blodiga handlingar i Silmarilernas namn. Rasande och desperata sjunker de till stöld. I nattens mörker infiltrerar de ditt läger och flyr med juvelerna, dödande flera av dina vakter i processen.",
      image: "/assets/story-scenes/feanorion-theft.jpg",
      choices: [
        { text: "Jaga efter tjuvarna", next: 22 }
      ]
    },
    {
      location: "Erbjudande om förlåtelse",
      text: "Du erkänner deras arvsrätt men påminner dem om att de förverkat all rätt till juvelerna genom sina handlingar. Ändå, i nådens namn, uppmanar du dem att återvända till Valinor för att söka Valars dom och möjlig förlåtelse. Efter lång tvekan vägrar bröderna och försvinner in i natten.",
      image: "/assets/story-scenes/offering-forgiveness.jpg",
      choices: [
        { text: "Förbereda återresa till Valinor", next: 21 }
      ]
    },
    {
      location: "Silmarilernas öde",
      text: "Silmarilerna har tagits om hand. En har redan placerats på himlen med Eärendil, de andra två är avsedda att återföras till Valinor. Din uppgift går mot sitt slut, men en viktig fråga kvarstår – vad ska göras med de människor och alver som överlevt Morgoths tyranni?",
      image: "/assets/story-scenes/silmaril-fate.jpg",
      choices: [
        { text: "Erbjuda alverna att återvända till Valinor", next: 23 }
      ]
    },
    {
      location: "Förföljelsen",
      text: "Du skickar trupper efter de flyende bröderna. Men snart kommer nyheter - Maedhros, övertrumfad av insikten om att hans handlingar bara lett till mer ondska, har kastat sig själv och sin Silmaril i en eldklyfta. Maglor, tyngd av ånger, kastade sin juvel i havet och vandrar nu ensam längs kusterna, sjungandes sin sorg.",
      image: "/assets/story-scenes/maedhros-end.jpg",
      choices: [
        { text: "Återvända till dina plikter", next: 21 }
      ]
    },
    {
      location: "Alvernas val",
      text: "Vid krigets slut erbjuder du, på Manwës befallning, Midgårds alver förlåtelse och rätten att återvända västerut till Valinor. Många accepterar, trötta på Midgårds sorger. Andra, som Gil-galad och Galadriel, väljer att stanna. För människor skapas en ny gåva.",
      image: "/assets/story-scenes/elves-choice.jpg",
      choices: [
        { text: "Presentera gåvan till trogna människor", next: 24 }
      ]
    },
    {
      location: "Númenors uppstigning",
      text: "Till Edain, människorna som kämpade mot Morgoth, erbjuder Valarna en stor gåva – en ö rest från havet, närmare Valinor än Midgård. Detta är Númenor, där Elros, Earendils son, ska bli den första kungen av ett storslaget mänskligt rike, välsignat med långt liv och visdom.",
      image: "/assets/story-scenes/numenor-rising.jpg",
      choices: [
        { text: "Avsluta ditt uppdrag", next: 25 }
      ]
    },
    {
      location: "Återvändandet",
      text: "Med ditt uppdrag slutfört leder du Valars här tillbaka västerut. Beleriand, försvagat av kriget, sjunker under vågorna i kataklysmiska jordbävningar. När Valars inflytande dras tillbaka från världen, inleds den Andra Åldern. Du återvänder till Manwës sida, redo för framtida uppdrag.",
      image: "/assets/story-scenes/eonwe-return.jpg",
      choices: [
        { text: "Avsluta berättelsen", next: "end-eonwe" }
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