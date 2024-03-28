window.onload = function () {    

    // Default variables
    const lottery_audio = document.getElementById('wheel');
    const winning_audio = document.getElementById('achievement');
    const success_audio = document.getElementById('success');
    const tadaa_audio = document.getElementById('tadaa');    
    const ticking = document.getElementById('ticking');    
    const firework = document.getElementById('firework');    
    const slotMachine = document.getElementById('slotMachine');    
    const winningSound = document.getElementById('winningSound');    

    const rollTime = 30000; 
    const modalRollTime = 11000;
    
    
    let i = 0;
    let x = 0;
    let count = 0;

    var namesDiv = document.getElementById("names");
    

        var maldivesNamesList = [
            'Rafal Kluczynski	Poland',
            'Richard Reisegger	Austria',
            'Cashflow Master88	Germany',
            'Francisco Matugas	Philippines',
            'Hed Business	France',
            'Top Ten	Germany',
            'Robert Zielak	Poland',
            'Raju Saini	India',
            'Massimo DiCaterino	Italy',
            'Joachim Frank Seifert	Germany',
            'Christoph Ballhausen	Germany',
            'Maurizio Scuotto	Switzerland',
            'Luce Lafrance	France',
            'Stephen Wanasaye	United Kingdom',
            'Ulvi Huseynli	Azerbaijan',
            'AGNALE THEODORE	Côte dIvoire',
            'HYUNHEE CHAE	South Korea',
            'Abdul Mumin	United Kingdom',
            'Dirk Naumann	Germany',
            'Jackline Mbabazi	United Kingdom',
            'HERVE SALIS	France',
            'Thomas Friebe	Germany',
            'Monika Flisiewicz	Poland',
            'Igor Seretinean	Moldova',
            'LBRTY 1	Switzerland',
            'Mario Leonard	Austria',
            'Janine Shalaby	Germany',
            'Rakesh Prasad	India',
            'Ronny Kuhnert	Germany',
            'Davide Lombardi	Italy',
            'STREAKK GAUSTEAM	Philippines',
            'Christian Horner	Germany',
            'Team All4Life	Austria',
            'IntexMulti Service	India',
            'Antonia Kranvogel	Indonesia',
            'Ralf Fischer	Germany',
            'NIGHTPATROL NC	France',
            'Carlos Santana	Germany',
            'Jochen Vesterling	Germany',
            'Marcin Dratwinski	Poland',
            'Yash Verma	India',
            'Lena Aaron	Spain',
            'Familyaufreisen JessiTobi	Germany',
            'Sebastien Lortholary	France',
            'Mariusz Miesiac	Poland',
            'cigdem cetiner	Turkey',
            'Coralie Rahal	Senegal',
            'Thomas Huehler	Germany',
            'Stefano Migliorino	Italy',
            'Thomas Fink	Germany',
            'Tolga Firat	Turkey',
            'Max Dramisino	Bulgaria',
            'Robin Dill	Germany',
            'Elif Firat	Turkey',
            'Sebastian Bartoszek	Poland',
            'Manuel Streicher	Germany',
            'Renmar Sombilon	Philippines',
            'Gerd Unverwerth	Germany',
            'STKK COIN	Singapore',
            'Laura Ronny	Germany',
            'Sylvio Doelz	Germany',
            'Kacper Mrowinski	Poland',
            'Thomas Weinand	Spain',
            'Jakob Sydlo	Germany',
            'Cash Flow	Germany',
            'APM RKS	Germany',
            'Tatiana Antoni	Germany',
            'Cat Cat	Germany',
            'Brigitte Antoni	Germany',
            'Global Vision	Germany',
            'Arild Folgero	Norway',
            'Powerteam RHMJ	Austria',
            'Ejike Nwankwo	Nigeria',
            'Kay Rothenpieler	Germany',
            'Tomm Butz	Germany',
            'Antonio Montemarano	Switzerland',
            'PRO OrgZ	Syria',
            'Tom DXB	Germany',
        ];
 
        let namesList = [
            "6Y32EQ	Vier WoV",
            "6QZ52O	Cat Cat",
            "58020W	Daniel Wenk",
            "6D9AS1	Mohamed Adel",
            "ASOXUQ	Sama Ahmed",
            "4HF83U	Viktor Streakk",
            "64AB7T	EarnWorld Albatros",
            "XJ420T	EarnWorld Albatros",
            "33BIY7	Michael Boehme",
            "91501C	Nives Drovenik",
            "0B6SJ2	Konrad Eggersdorfer",
            "24H4O4	Konrad Eggersdorfer",
            "JQ3V1M	Konrad Eggersdorfer",
            "50HJVC	Erik Pflaum",
            "62PMV2	Barbara Schreiter",
            "0NML6H	Michael Seemuth",
            "26REI2	Saaaarah Salama",
            "KI1EB3	Saaarah Salama",
            "9V2334	Frank Reiher",
            "LG7X19	Cat Cat",
            "7U31J5	Elke Wierzbinski",
            "N58IIJ	Saaaaarah Salama",
            "OT5Z1D	Juerg Peter",
            "8ORY6X	Katrin Dinter",
            "5LE2Q7	Daniel Wenk",
            "9MV002	Marjo Eijgelshoven",
            "99H7WD	Alby Suster",
            "AIN3TA	Ajitkumar Phukan",
            "0SB58E	Ronny Wilczek",
            "O8494E	Elke Wierzbinski",
            "I375C8	Gisela KruscheTubbesin",
            "9P38IQ	Luis Racz",
            "6NBLM9	Shahd Aboelseoud",
            "HF2U6I	Fabienne Gassmann",
            "5K9PL5	Summer Salama",
            "F04G8S	Samir Sirri",
            "6EC262	Michael Liehmann",
            "B32YJO	Michael Liehmann",
            "9N9U8R	Tom Villeseche",
            "KSO7NR	nabil mehdaoui",
            "K87G66	Diego Lopez",
            "5P65VC	Louis Wanders",
            "2Y885F	Tommy DXB",
            "SN558E	Tommy DXB",
            "YP89JV	Tom DXB",
            "4ON95M	Beatriz Juan",
            "DL7MD8	Tom DXB",
            "TM0IGM	Tom DXB",
            "UL894O	Andrea Seifert",
            "H9E187	Andrea Seifert",
            "344871	Florian Hartwich",
            "XDHL03	Bertaa Streakk",
            "G1X5U1	Noah Becker",
            "15W55H	Noah Becker",
            "7H6915	Marlen Seifert",
            "8M2698	Juerg Peter",
            "I7PL16	Matt Feast ",
            "217BZP	Christos Megarissiotis",
            "P46Y99	Christos Megarissiotis",
            "8B9KEO	Maurizio DeBlasi",
            "0N8461	Linn Boss",
            "Z2Z0IB	Ernest Drei",
            "J8NJ5E	Earn World",
            "BD2X5T	Alfred Eins",
            "0931IL	Alfred Eins",
            "AV8P0B	Darkosedem Filiput",
            "1QMSK6	Tarek Farag",
            "GET65V	Darkosedem Filiput",
            "0P2J02	Darkopet Filiput",
            "2R17RQ	Darkosest Filiput",
            "T8238U	Mirco Seifert",
            "07H9M6	Petra Dinse",
            "YGAH4E	Makpol Elsayed",
            "9QBE9M	Ida Rix",
            "600TAQ	Denise Hammerdinger",
            "H748Z7	Sascha Herterich",
            "H2FV62	Sven Brackrogge",
            "D48FFG	Orhan Kayi",
            "XX4BTY	Omer Hayyam",
            "JX8Q4O	Maria Silfverskiold",
            "0M37A4	Maria Silfverskiold",
            "4K8XH9	Maria Silfverskiold",
            "KUMO3V	Maria Silfverskiold",
            "M69H0K	Cisco Silfverskiold",
            "78E336	Cisco Silfverskiold",
            "05XTI0	Cisco Silfverskiold",
            "H42L2Z	Cisco Silfverskiold",
            "0B6GR1	Katrin Spangler",
            "I8I9F1	Katrin Spangler",
            "T05JS5	Gabi eins",
            "P09VEY	Gabi eins",
            "55884C	Michaela Henkelmann",
            "7FCU22	Cat Cat",
            "ECXZB5	FC Koeln",
            "8J9A0G	FC Koeln",
            "58K4SM	FC Koeln",
            "3YQF69	Vier WoV",
            "QG5KVD	Fuenf WoV",
            "4E5YNM	Sechs WoV",
            "8IA112	Vier WoV",
            "R615Y6	Sechs WoV",
            "MRN4RK	Nicole Duesterhus",
            "4I1745	Nicole Duesterhus",
            "D85V54	Maxi Silfverskiold",
            "D6DHRO	Doncristo Montecristo",
            "8Y61O7	Quirino Memento",
            "6WCJ95	Claudette LEVENEUR",
            "9Z5752	ilhan Cetiner",
            "B1E34S	anna janas",
            "N0S9RQ	Eleonore Niggemann",
            "3639N2	Paul Johannes",
            "AZIFH2	Noah Alexander",
            "6SEI6M	Eleonore Niggemann",
            "YN8998	Annette Then",
            "1P5515	Guenter Weidinger",
            "18G923	Michael Liehmann",
            "LRRGDG	LOUDORCAS KOUADIO",
            "K559D1	Dree Rayman",
            "99A1Z2	Dree Rayman",
            "4A653B	Karolina Poecheim",
            "907165	Sarita Ikigaj",
            "M0DW0R	Richard Gascoine",
            "4R913C	Richard Gascoine",
            "32101L	Evi Schiller",
            "6XB7YV	Ev Schiller",
            "01D0DP	Evs Schiller",
            "EHSPFH	Steffi Katze",
            "C9087S	Stanislaw Chmura",
            "IUVG3M	Tabarek Hameed",
            "JDJ680	Ha Ku",
            "Q73G18	Stefan Machold",
            "569QN7	Raffaella Ugo",
            "W154E2	Noah Alexander",
            "L913A7	Paul Johannes",
            "NQ9213	Soma World",
            "46U24X	Martino Probolone",
            "EZP8XJ	Florian Katz",
            "X7Q71G	Maximilian Weindler",
            "U13C67	Dain Anderson",
            "T8QCZ1	Richard Hack",
            "SX886U	Richard Hack",
            "4K4KF9	Richard Hack",
            "8LMR90	Robert Nytz",
            "37324U	Hatem Wafa",
            "8V90N2	Heike Baumann",
            "478W7Z	Heike Baumann",
            "WB46IQ	Valentin Volkert",
            "XMRC89	Stanislaw Chmura",
            "4XX1KX	Sunbir Yatirim",
            "6C5P40	Sunbir Yatirim",
            "KHDO17	Sunbir Yatirim",
            "ZUV096	Sunbir Yatirim",
            "ZTIY96	Sezen iki",
            "2G1873	Hossam ABOMEDO",
            "O239K7	Mahu Wetin",
            "LVL3D0	Join Now",
            "P6TUY4	Steffi Tom",
            "TJ3I4K	irene speranda",
            "414S4X	Karin Ewert",
            "Z2Z2KR	Sznuc Yatirim",
            "M0PIN6	Luke AA",
            "2J61RH	Steffi One",
            "21T07O	Nofear Mhmuod",
            "UT6I62	Rhmari Fatna",
            "0C33P8	Mahmoud Streak",
            "7WE871	Julie DEUX",
            "M2VP4A	Julie trois",
            "RS5W42	Gerd Unverwerth",
            "LRPIMF	Gerd Unverwerth",
            "CY3FOR	Gerd Unverwerth",
            "UP0IY8	Gerd Unverwerth",
            "PKXL3G	Hour Aly",
            "9T0O38	Ghassan AbouKaf",
            "7VQ228	Erika Burgardt",
            "S072U5	Nicolas Papadopoulos",
            "E746E2	Boris Korosak",
            "B1YN7Y	Omar Saleem",
            "J7604P	Lukas Bauer",
            "PLTZ33	Karim Sobhy",
            "WSS42T	MISTERCRIPTO SL",
            "2QRPYL	Claudine Uwimana",
            "2X777A	Kenneth Magnussen",
            "ZU5BT6	Juergen Braun",
            "A7I863	Juerg Peter",
            "147S5H	Bernd Rudi",
            "3TVL55	Dotcom Tine",
            "57B460	Michael Boehme",
            "21LCRO	Jabbar Nasir",
            "U7IY35	Jonas Barfuss",
            "2B2J48	Ben Tischler",
            "N6O6OL	Noel Tischler",
            "6YH755	Ulli Ti",
            "P9ET55	Moni Amkeih",
            "937392	hesham wahdan",
            "S97SYG	Magda Alshazly",
            "S4PCRQ	Linn Boss",
            "996I47	Chapristy Lortho",
            "579UK6	Chapristy Lortho",
            "3S39KQ	Maria Silfverskiold",
            "2SPSJJ	Maria Silfverskiold",
            "7L2JN7	SUAAD SALEH",
            "F8JZD7	Thomas Haunert",
            "7E6JX0	Daniel Bressler",
            "251850	Joerg Ka",
            "UW3CR4	Daniela Mayer",
            "171878	STREAKK HVS",
            "0A9QVU	Hayrettin Yalcinkaya",
            "403302	Eric Humann",
            "5UJKZX	To Bu",
            "U402U8	Nada Skrinjar",
            "O44CSX	FATEN ELNIMS",
            "10H918	Mathias xfivetrade",
            "U70AVF	Christian Zacherl",
            "RVT112	Christian Zacherl",
            "04TXZ6	Christian Zacherl",
            "28949O	Brigitte Stark",
            "37NXNV	Valentin Volkert",
            "4L98F1	Anita Zagajsek",
            "1Y9A88	Numa Aldbeys",
            "I2Y98D	Michael Liehmann",
            "4BPA21	Michael Liehmann",
            "ND8R99	Quatros Foy",
            "OZC6Y9	Levi Streakk",
            "7M3610	Siggi Streakk",
            "9752YU	Christoph Merx",
            "246569	Nicola Roder",
            "JY4J9T	Patrick Johann",
            "YV0M61	Sameh Shehata",
            "E08N9D	Roland Zwei",
            "PZWQO8	Daniela Stuehler",
            "BXDP0U	Andre Huchthausen",
            "65L46Q	Andre Huchthausen",
            "F55AA5	Andre Huchthausen",
            "8XA806	Andre Huchthausen",
            "2Z59SL	Andre Huchthausen",
            "T54B77	Andre Huchthausen",
            "JM095D	Tommy Harms",
            "C6V46P	Holger Gondring",
            "ZP1L2X	Rossano DiRocco",
            "9740DF	Peter Wagdy",
            "2A7564	Kero Wagdy",
            "958HX6	Michael Liehmann",
            "CIX6KU	Dia One",
            "A938RS	Zuria Trismegistos",
            "G28EJ4	Dina Stegmeier",
            "I085RI	Sarah LuetkeHolz",
            "4W1Q37	Panayiotis Papaiacovou",
            "PQQWL6	Simo Sax",
            "Y02V06	Christian Hintz",
            "4CL0Z3	Christian HintzZehn",
            "L8DSC9	Akeel Ali",
            "1ENL75	Christoph Theile",
            "Y0Y3R7	Mind Energy",
            "1K5305	Wolfgang Dusold",
            "NTJ5S0	Christian Hintz",
            "QV335K	Christian Hintzsechs",
            "R2P49P	Christian Hintzsechs",
            "35E813	Christian HintzNeun",
            "W9U78O	Christian Hintzacht",
            "Y3U298	Christian Hintzacht",
            "62XO62	Solveig Bauer",
            "G0H985	Solveig Bauer",
            "5493K7	Valentina Eberling",
            "H1FJJ0	Jani Sunshine",
            "3VGM54	Christian HintzDrei",
            "2QZLD8	Christian HintzDrei",
            "H07771	Maxi Six",
            "H1K8J7	Maxi Six",
            "H7N0U5	Maxi Six",
            "8C8J2L	Lexi One",
            "V75A40	Lexi One",
            "IO30ZJ	Lexi One",
            "N2S3EW	Lexi Two",
            "246D76	Lexi Two",
            "617C2X	Lexi Two",
            "8X8YPE	Lexi Three",
            "BEYLT9	Lexi Three",
            "90U4O4	Lexi Three",
            "2U44WJ	Steffi Katze",
            "U147L7	Nevio Grimaldi",
            "6TPNB7	Spitz Hacke",
            "64JS1S	NSN NETWORKER",
            "9011SZ	Daniel Wenk",
            "3K0148	Karla Grosswendt",
            "9Q8QI6	Daniel Wenk",
            "5GYS07	Layla Elshowekh",
            "VS98M4	DanyV Hamon",
            "215I84	Gantuya Altangerel",
            "5L8B57	Crispin Kayo",
            "OMXO9F	Abakar Annadif",
            "FE428T	Doniazuzu Eldasouky",
            "QJG985	Doniazuzu Eldasouky",
            "81439A	Thomas Kubicek",
            "9IGU84	Ludmila Molendor",
            "ZOCL13	Andreas Kubicek",
            "N8J41K	Marwa Hemada",
            "05T0XX	John Luca",
            "904G86	John Luca",
            "W8QMNR	John Luca",
            "0JKQ8D	John Luca",
            "H4T471	Michael Liehmann",
            "RRL91G	Michael Liehmann",
            "ON9S18	Ja Ni",
            "6H6CZF	Ja Ni",
            "ID76QA	Andreas Kubicek",
            "I7M382	Christian Hintz",
            "U1GS58	Christian Hintz",
            "IF6684	Christian Hintz",
            "EH3US1	Karola Dasler",
            "I33V70	Kerstin Kur",
            "L43VYY	Feen Volk",
            "67H8C4	Paula Rabe",
            "E0WIGI	Kerstinweb Ich",
            "56E481	Manuel Gramoso",
            "M63107	Fabienne Mayor",
            "B2G17F	Stefan Weideli",
            "E1NY0M	Mehmet Has",
            "6MG138	Joelcinqnew Wahli",
            "AG9SIP	Ruediger Wolf",
            "D500ZS	Mehmet Arslan",
            "XG394D	Martino Probolone",
            "R3Q4BS	VincentVier Serbesis",
            "REXJUI	EarnWorld Austria",
            "OU02K3	Elisa Then",
            "E6G27T	Heinz Rosengarten",
            "520SHG	Kerstin Gotowy",
            "3L76PR	Martin Hollweck",
            "U93471	Hansi Fit",
            "4YB4KA	Don Rosenberger",
            "UKYIAK	Elias Aha",
            "F2Y794	Bernd Rabe",
            "CFYG88	Vier WoV",
            "Y41SM8	Fuenf WoV",
            "SGE868	Cat Cat",
            "1539Z3	Susanne Zoehrer",
            "979S76	Sandra Hopp",
            "0BS1X3	Kaneto Zena",
            "ID7M0V	Fabytrois Mayor",
            "6KFG70	Elisabeth Naumann",
            "3MEG7W	Thomaso Sailer",
            "L5T61E	Thomas Maurer",
            "8QAW73	CryptoChris Betterwithprofi",
            "7X2D0V	Irene Maisinger",
            "7409X2	Irene Maisinger",
            "CMJ08S	Sabine Drei",
            "5M2ARK	Christos Serbesis",
            "6N2UZH	Kennet Meierhoefer",
            "6C4898	AdiMaxelTwoTwo Bialek",
            "73CN43	John Machold",
            "FI8Q0K	Mary Machold",
            "57AU72	Szniki Yatirim",
            "5R6U01	Szniki Yatirim",
            "J9Q05K	Sznuc Yatirim",
            "943QR8	Franck Kovho",
            "GX739T	Kerstin SpeichPavlicek",
            "PQ6LW9	Sznuc Yatirim",
            "6X68R0	Jitul Gogoi",
            "5DD928	ANNA GINTER",
            "RE31Z8	Malin Duerkop",
            "AQ1382	Stefan Duerkop",
            "UH874N	Wolfgang Michelic",
            "HC44M6	Shereen adel",
            "406114	Sznuc Yatirim",
            "203135	Barbara Weinkopf",
            "722556	Szniki Yatirim",
            "14GGJ8	Loi Kloppe",
            "55SL0B	MonikaInfra Schmid",
            "198Q53	Willi Drei",
            "R7QH14	JOLANTA KUSTRA",
            "2U3K45	Ahmed Eldeep",
            "7AU562	Raoul Lortholary",
            "9VRIAU	Daniel Groll",
            "1SRWK8	DanyV Hamon",
            "4WRCJ1	Michael Frank",
            "QUPHHH	Jens Recknagel",
            "853A9V	Erich Runge",
            "853FXJ	Erich Runge",
            "EQ723Z	Sechs WoV",
            "J9SOW0	Power People",
            "76VP68	MC Ikigaj",
            "V58A2D	Enzo Bongiovanni",
            "02MGGN	Andrea Schilling",
            "8VLW1Q	Roman Cavegn",
            "346PNE	Emelda Oppus",
            "6O1B87	Mahboub Aoun",
            "U540N6	Mehmet Ozer",
            "35WC31	Mehmet Ozer",
            "SRN76A	Birgul Ozer",
            "39SGA2	Birgul Ozer",
            "492810	Kubra Ozer",
            "2PO654	Sake Reischuck",
            "IQ0GPQ	Holger BvB",
            "I77AKG	Thomas Dietter",
            "O579PY	CB Krypto",
            "NH0Q67	Martin Zdravkin",
            "8OF9DN	Selim Elwakd",
            "294ZWQ	Cat Cat",
            "70O8GF	Steffi Katze",
            "RA86JE	Steffi Katze",
            "FFQLDJ	Lisa Fleschner",
            "ON5H46	Kati Barth",
            "YHU0W3	Islam Abdelaal",
            "9WB450	Otto Bub",
            "ED45MY	Purzel Buddy",
            "9O4T72	Tushar Upadhya",
            "5GRT9X	Vier WoV",
            "91FV8L	Marian Wagdy",
            "LWD84Q	Stefan Winkler",
            "W91MY2	Raymund Naparota",
            "JLMR41	Martina Stocco",
            "24RC58	rico oppus",
            "4Y0R87	Willi Weidinger",
            "55E5S2	Sandy Kretschmer",
            "Y10L25	Soad Allam",
            "433I8R	Heinz Stocker",
            "B3F792	St Mu",
            "KH35F5	Ervin Agrezz",
            "38P8YE	Ervin Agrez",
            "93ZKHQ	Ervin Agrezzz",
            "N695XP	Franky Boy",
            "H02B4Z	Stefan Knauer",
            "1TB1M8	Ronny Greulich",
            "H1EBED	rico oppus",
            "34L0U8	Regine Naparota",
            "AAL17V	Uwe Stolte",
            "M742T2	Uwe Stolte",
            "80VB96	Hesham Elseht",
            "C36453	Hesham Elseht",
            "MVY5NB	Victoria Schoen",
            "M73421	Armando Fedele",
            "GZ4155	Antonio Rossi",
            "X5LA1J	Armando Fedele",
            "AODA25	Stanislaw Focht",
            "VT07F1	Mehmet Dogrul",
            "HAD43B	Noel Jungi",
            "OCP7E1	Peter Eins",
            "QN88C7	Peter Zwei",
            "4X92IH	Falko Gaspriki",
            "8KP37N	Falko Gaspriki",
            "0R9593	Susann Sparen",
            "86182B	Sandra Classen",
            "V04749	Brigitta Anlage",
            "II69N2	Silvia Pfaff",
            "094I25	Team Johannisbeere",
            "Y80OZ3	Corin Guerotto",
            "MLI12U	Pfanzelt Patricia",
            "TYY042	Michael Boehme",
            "XCK01X	Brigitte Stark",
            "ZT7MP8	Luc Wisbar",
            "O54Q28	Karsten Rolighed",
            "B5TFQ9	Karsten Rolighed",
            "NYJ9DD	Karsten Rolighed",
            "77KDG8	Karsten Rolighed",
            "9Q24C9	Karsten Rolighed",
            "U27HO4	Karsten Rolighed",
            "GTE17Z	EarnWorld Team",
            "80WL2W	Karsten Rolighed",
            "8RTDCR	Karsten Rolighed",
            "X86930	Karsten Rolighed",
            "36XD7M	Karsten Rolighed",
            "T1250F	Karsten Rolighed",
            "28M20S	PRO OrganizationA",
            "KY6659	Karsten Rolighed",
            "KG76W6	Karsten Rolighed",
            "G0NJ9X	Karsten Rolighed",
            "H4TP2D	Karsten Rolighed",
            "EJ7WRV	Nicoy Frigo",
            "QI6U48	karstenC RolighedM",
            "L31YD4	karstenC RolighedM",
            "8G92L6	Arild Peterson",
            "0X09BN	Arild Peterson",
            "P8CWAL	Ada Wpada",
            "JQ944Y	Ada Wpada",
            "AV2642	Ada Wpada",
            "FH44WX	Ada Wpada",
            "4J65X4	Igor Alpner",
            "1D226J	Sarah Weindler",
            "6T714D	Igor Alpner",
            "5T4NH5	Igor Alpner",
            "E18A5N	Ra Boom",
            "CM51LU	Ra Boom",
            "U8GMUM	Bogdan Boki",
            "19UDV2	Bok Eyy",
            "UNS10J	Bok Eyy",
            "IF4D7R	Ruqia abd",
            "G07X8K	Ulli Ti",
            "P8Q0EV	Frei Herr",
            "ES517O	Ben Tischler",
            "89425L	Noel Tischler",
            "4458LY	Bok Eyy",
            "1G9KM6	Richard Muehlboeck",
            "1W6QW4	Fatih Guney",
            "H3D1RH	Nono Mban",
            "3GHA8D	Karsten Rolighed",
            "009ZGE	Michael Schwaiger",
            "UF7FF8	Detlef Busch",
            "ES323N	Detlef Busch",
            "FE91G5	Detlef Busch",
            "6923Y9	Tomek Sondej",
            "F929H7	HeidiZWEI Mattheiss",
            "82OBT5	Peter Drei",
            "N97005	Rahmet Ayse",
            "8U3577	mido Ashraf",
            "FWL8D5	Fatih Guney",
            "WN99X7	Road Runner",
            "X436QH	Luc Wisbar",
            "NH8631	Paul Seibel",
            "64NYB9	Paul Seibel",
            "M5S9UK	Sylvia WollwertCompany",
            "YW3ZD8	Dietmar Boehnke",
            "BNKD69	Dietmar Boehnke",
            "Z392L4	Soma World",
            "67426U	Janearn Karb",
            "Y7AJHP	Carsten Girsch",
            "AZ3NR3	Sinem Koseuc",
            "1C1I01	Kerstin Gotowy",
            "YKG9UB	Carsten Girsch",
            "N7S692	Winfried Heimburger",
            "A901L3	Irmtraut Zubke",
            "7CY585	Ankur Agrawal",
            "PW7EHI	Evita Sabara",
            "JDNAFY	Len Borcherdt",
            "3O5L5R	Lea Borcherdt",
            "3KF47L	Oyuntsetseg Undram",
            "18F1X0	Suzanna Tanev",
            "M2F946	Ole Boshkovska",
            "EZZVLT	Der Dritte",
            "YUAY6U	Enrico Steinberg",
            "CR3S0U	Silvia Heimburger",
            "CN4A97	Bok Eyy",
            "OE644Z	Crypto Yoda",
            "B88417	Maikel Andres",
            "ZM7R7Y	MaikelDA Tenerife",
            "JJ5M1R	Team LuckyTwo",
            "SLOS01	Mahmoud Hatab",
            "O8U14C	Ferhat Arkan",
            "59Y8UD	Malek Koda",
            "H6PG30	Christoph Laura",
            "VY7AV7	Peter Eins",
            "2FO3HD	Karla Grosswendt",
            "7429OB	Streakk World",
            "WW80F7	Andrej Androjna",
            "814QL9	Peter Zwei",
            "9XC7Z6	Peter Drei",
            "31EB01	Peter Eins",
            "VA86V7	Menmen Boghda",
            "4188T4	Attef Eldasouky",
            "16FBY6	VIP CryptoSE",
            "GQ78H5	Peter Zwei",
            "9MEVX8	Branka Androjna",
            "PNCCE2	Herman Bajec",
            "S48QV1	Zvone Simsic",
            "VF2AQ5	Sanjitkumar Let",
            "E02636	Attef Eldasouky",
            "2H3Z4X	Nadescha Stenzel",
            "9EJSHF	Peter Eins",
            "GYK2JI	Peter Zwei",
            "R84VDF	Alex Lan",
            "4G12T7	Josephine Boettge",
            "U1N1CB	Basel Mohamed",
            "98M1YH	Evita Sabara",
            "3MI46R	Sylvio Doelz",
            "LQ2PHK	Miki Danailoski",
            "8P282M	Mickeyy Danailosky",
            "Z8Y0S2	Mickeyyy Danailoski",
            "85QX7B	New Generation",
            "92537O	Michael Moesgaard",
            "BHQF35	sven Ulbricht",
            "R5RFAW	sven Ulbricht",
            "RD2IEC	Samah Ali",
            "Z51V38	Walid Elsherbiny",
            "U97UEP	Ramy Romany"
        ];


    const maldivesWinner = [
        'JOACHIM <br> FRANK SEIFERT <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/DE.svg">  <br> <small>(Germany)</small> </span>',
        'AGNALE <br> THEODORE <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/CI.svg"> <br> <small>(Côte dIvoire)</small></span>',
        'MONIKA <br> FLISIEWICZ <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/PL.svg"> <br> <small>(Poland)</small></span>',
        'TEAM <br> ALL4LIFE <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/AT.svg"> <br> <small>(Austria)</small></span>',
        'YASH <br> VERMA <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/IN.svg"> <br> <small>(India)</small></span>',
        'CIGDEM <br> CETINER <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/TR.svg"> <br> <small>(Turkey)</small></span>',
        'RENMAR <br> SOMBILON <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/PH.svg"> <br> <small>(Philippines)</small></span>',
        'KACPER <br> MROWINSKI <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/PL.svg"> <br> <small>(Poland)</small></span>',
        'POWERTEAM <br> RHMJ <br> <span><img width="56" src="https://countryflagsapi.netlify.app/flag/AT.svg"> <br> <small>(Austria)</small></span>',
        'ANTONIO <br> MONTEMARANO <br> <span><img width="38" src="https://countryflagsapi.netlify.app/flag/CH.svg"> <br> <small>(Switzerland)</small></span>',
    ]

    // Final array of names
    const finalNameList = [
        'MM08NG <br>  MARTINE <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/FR.svg"> <br> <small>(France)</small></span>',
        'AP3DHK  <br> EMMANUELLA <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/NG.svg"> <br> <small>(Nigeria)</small></span>',
        '39221R  <br> BARBARA <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/AT.svg"> <br> <small>(Austria)</small></span>',
        'FJ5N2E  <br> TAOSIN <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/BD.svg"> <br> <small>(Bangladesh)</small></span>',
        'MCJ5Y6  <br> NELO <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/DE.svg"> <br> <small>(Germany)</small></span>'
    ];

    const teslaDraw = [        
        'MM08NG Martine',
        'AP3DHK Emmanuella',
        '39221R Barbara',
        'FJ5N2E Taosin',
        'MCJ5Y6 Nelo'
    ]

    // Array of Winners
    const winnerList = [];

    var textarea        = document.querySelector('textarea#names');
    
    var pickerDiv       = document.getElementById("picker");    
    let intervalHandle  = null;

    if (!Array.isArray(namesList) || !namesList.length) {
        
        namesDiv.style.display  = "block";
        pickerDiv.style.display = "none";
        
    } else {
        
        namesDiv.style.display  = "none";
        pickerDiv.style.display = "block";
        
    }     

    document.getElementById("submitButton").addEventListener("click", function () {

        confetti.remove();
        
        // TODO: Add list of names to array from textarea    
        // Example... namesList = ["Anne","Bob","Gloria"];       
        
        namesList = textarea.value.replace(/\r\n/g,"\n").split("\n");
        
        names.style.display = "none";
        picker.style.display = "block";
    
    });

    function passFinalNamesToDiv(finalNameList) {

        finalNameList.forEach(function(final_name, i){
            var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${final_name.code} <br>  ${final_name.name} <br> <span><img width="46" src="https://countryflagsapi.netlify.app/flag/${final_name.countryCode}.svg"> <br> <small>(${final_name.country})</small></span></h5></div></div></div>`;

            setTimeout(function () {
                $("#finalNameList").append(project_card).slideDown();
            }, 1000 * i);
            
        });

        setTimeout(function () {
            
            $('#nextDraw').show()
            // ticking.play();
            // var timeleft = 5;
            // var downloadTimer = setInterval(function () {
            //     $("#seconds").text(timeleft)
            //     if(timeleft <= 0){
            //         clearInterval(downloadTimer);
            //         confetti.remove();

            //         $("#name-rotation-block").hide()
            //         $("#the-final-wheel").show()
            //         ticking.pause();
            //     }
            //     document.getElementById("progressBar").value = 5 - timeleft;
            //     timeleft -= 1;
            // }, 1000);

            
        }, 6000);


    }

    // Start the name shuffle on button click
    document.getElementById("firstDraw").addEventListener("click", function () {

        count++;

        this.style.display = "none";

        document.getElementById("action-container").style.display = "none";

        shuffle(namesList);
        confetti.remove();      

        intervalHandle = setInterval(function () {
            
            $("#all-names").prepend('<h1 class="mb-0" id="headerNames">'+ namesList[i++ % namesList.length] +'</h1>')
        
        }, 15);

        slotMachine.play();
        

        // Check for click count

        if (count == 1) {

            
            // $("#firstDraw").html('<b>Start 10th Draw</b>');
            
            // Show animation for forth winner
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                
                slotMachine.pause();
                winningSound.play();

        
                var setWinner = setWinnerList.firstDraw.find(function(item) {
                    return item.winner === true;
                });

                var winner = `${setWinner.code} ${setWinner.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinner.countryCode}.svg"> <small>(${setWinner.country})</small></span>`;

                winnerList.push({'name':winner, 'prize':'Mercedes Benz'}); 

               
                
                // Send Final Name List to wheeel
                // wheel(teslaDraw);
                
                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations on reaching one step closer to winning a Mercedes Benz.</h1>').slideDown()

                // tadaa_audio.play();

                generateWheel(setWinnerList.firstDraw);

                passFinalNamesToDiv(setWinnerList.firstDraw)

                $('#button').attr('data-final', '1');
                $('#button').attr('data-prize', 'Mercedes Benz');


                $('#mainText').addClass('d-none');
                $('#yearSection').addClass('d-none');
                $('#name-rotation-block').css('top', '50%');


                // Send Winner List to Final Popup
                console.log(winnerList);
                winnerList.forEach(function(winner){
                    if(typeof winner.winners != 'undefined'){
                        var prizeItem = winner.prize;
                        var winnerListsData = winner.winners;
                        var winnerListHtml = '';
                        winnerListsData.forEach(function(w){
                            winnerListHtml += `${w.code} ${w.name} ${w.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${w.countryCode}.svg"> <small>(${w.country})</small></span><br>`;
                        }); 
                        var table = '<tr><td>'+prizeItem+'</td><td>'+winnerListHtml+'</td></tr>';
                    }else{
                        var table = '<tr><td>'+winner['prize']+'</td><td>'+winner['name']+'</td></tr>';
                                      
                    }
                    $("#final-winner-list").prepend(table);     
                });

            }, rollTime); // 30 seconds
            winningSound.pause();


        
        }
        
    });

    function shuffle(array) {

      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex     = Math.floor(Math.random() * currentIndex);
            currentIndex   -= 1;
            
            // And swap it with the current element.
            temporaryValue      = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex]  = temporaryValue;
        }   
    

        return array;
        
    }    

}


function stopConfetti() {
    confetti.stop();

    $('#sunburst').hide()
}

function finalDraw() {
    confetti.remove();

    $("#name-rotation-block").hide()
    $("#the-final-wheel").show()

}

function showFinalResults(){
    var sampleWinner = [
        {
            "winners": [
                {
                    "code": "1A2B3C",
                    "name": "John",
                    "lastName": "Simons",
                    "countryCode": "US",
                    "country": "United States"
                },
                {
                    "code": "4D5E6F",
                    "name": "Jane",
                    "lastName": "Burnham",
                    "countryCode": "GB",
                    "country": "United Kingdom"
                },
                {
                    "code": "7G8H9I",
                    "name": "Pedro",
                    "lastName": "Gonzalez",
                    "countryCode": "ES",
                    "country": "Spain"
                },
                {
                    "code": "0J1K2L",
                    "name": "Francois",
                    "lastName": "Dupont",
                    "countryCode": "FR",
                    "country": "France"
                },
                {
                    "code": "3M4N5O",
                    "name": "Heinrich",
                    "lastName": "Schmidt",
                    "countryCode": "DE",
                    "country": "Germany"
                }
            ],
            "prize": "$1,000 Infra"
        },
        {
            "winners": [
                {
                    "code": "5ZMEP4",
                    "name": "Maria",
                    "lastName": "Gonzalez",
                    "countryCode": "ES",
                    "country": "Spain"
                },
                {
                    "code": "T8TRKI",
                    "name": "Ken",
                    "lastName": "Tanaka",
                    "countryCode": "JP",
                    "country": "Japan"
                },
                {
                    "code": "MVUJDS",
                    "name": "Mei",
                    "lastName": "Li",
                    "countryCode": "CN",
                    "country": "China"
                },
                {
                    "code": "LQB9HT",
                    "name": "Raj",
                    "lastName": "Patel",
                    "countryCode": "IN",
                    "country": "India"
                },
                {
                    "code": "VFETUC",
                    "name": "Linda",
                    "lastName": "Johnson",
                    "countryCode": "US",
                    "country": "United States"
                }
            ],
            "prize": "iPhone 15"
        },
        {
            "winners": [
                {
                    "code": "C7BEKV",
                    "name": "Carmen",
                    "lastName": "Sanchez",
                    "countryCode": "ES",
                    "country": "Spain"
                },
                {
                    "code": "T2DCLD",
                    "name": "Carlos",
                    "lastName": "Silva",
                    "countryCode": "BR",
                    "country": "Brazil"
                },
                {
                    "code": "ZH2EAW",
                    "name": "Marie",
                    "lastName": "Leblanc",
                    "countryCode": "FR",
                    "country": "France"
                },
                {
                    "code": "ZX11C9",
                    "name": "Luca",
                    "lastName": "Rossi",
                    "countryCode": "IT",
                    "country": "Italy"
                },
                {
                    "code": "CMRC93",
                    "name": "Taro",
                    "lastName": "Yamada",
                    "countryCode": "JP",
                    "country": "Japan"
                }
            ],
            "prize": "MacBook"
        },
        {
            "winners": [
                {
                    "code": "LTH9FT",
                    "name": "Kevin",
                    "lastName": "Smith",
                    "countryCode": "US",
                    "country": "United States"
                },
                {
                    "code": "V6NZE2",
                    "name": "Luis",
                    "lastName": "Garcia",
                    "countryCode": "ES",
                    "country": "Spain"
                },
                {
                    "code": "OCQFK1",
                    "name": "Max",
                    "lastName": "Müller",
                    "countryCode": "DE",
                    "country": "Germany"
                },
                {
                    "code": "I926NI",
                    "name": "Oliver",
                    "lastName": "Taylor",
                    "countryCode": "GB",
                    "country": "United Kingdom"
                },
                {
                    "code": "D4N30Q",
                    "name": "Lucas",
                    "lastName": "Silva",
                    "countryCode": "BR",
                    "country": "Brazil"
                }
            ],
            "prize": "Gold Ring"
        },
        {
            "winners": [
                {
                    "code": "IDZPTB",
                    "name": "Matteo",
                    "lastName": "Ricci",
                    "countryCode": "IT",
                    "country": "Italy"
                },
                {
                    "code": "YRL5LX",
                    "name": "Julia",
                    "lastName": "Silva",
                    "countryCode": "BR",
                    "country": "Brazil"
                },
                {
                    "code": "YHIIQ1",
                    "name": "Sita",
                    "lastName": "Patel",
                    "countryCode": "IN",
                    "country": "India"
                },
                {
                    "code": "BBR8A6",
                    "name": "Giovanni",
                    "lastName": "Rossi",
                    "countryCode": "IT",
                    "country": "Italy"
                },
                {
                    "code": "VY3SWP",
                    "name": "Ling",
                    "lastName": "Wang",
                    "countryCode": "CN",
                    "country": "China"
                },
                {
                    "code": "0P7ZC2",
                    "name": "Priya",
                    "lastName": "Patel",
                    "countryCode": "IN",
                    "country": "India"
                },
                {
                    "code": "QQRWQZ",
                    "name": "Sophia",
                    "lastName": "Müller",
                    "countryCode": "DE",
                    "country": "Germany"
                },
                {
                    "code": "EQWT8R",
                    "name": "Harry",
                    "lastName": "Taylor",
                    "countryCode": "GB",
                    "country": "United Kingdom"
                },
                {
                    "code": "JATCZC",
                    "name": "Hiroshi",
                    "lastName": "Sato",
                    "countryCode": "JP",
                    "country": "Japan"
                },
                {
                    "code": "OSVXTB",
                    "name": "Sofia",
                    "lastName": "Rossi",
                    "countryCode": "IT",
                    "country": "Italy"
                },
                {
                    "code": "0VA2UB",
                    "name": "Arjun",
                    "lastName": "Patel",
                    "countryCode": "IN",
                    "country": "India"
                },
                {
                    "code": "6S4MEF",
                    "name": "Sophie",
                    "lastName": "Taylor",
                    "countryCode": "GB",
                    "country": "United Kingdom"
                },
                {
                    "code": "RWWK1E",
                    "name": "Ana",
                    "lastName": "Silva",
                    "countryCode": "BR",
                    "country": "Brazil"
                },
                {
                    "code": "O5Z1O6",
                    "name": "Wei",
                    "lastName": "Li",
                    "countryCode": "CN",
                    "country": "China"
                },
                {
                    "code": "ZDC0IC",
                    "name": "Giulia",
                    "lastName": "Ricci",
                    "countryCode": "IT",
                    "country": "Italy"
                },
                {
                    "code": "4BI9IQ",
                    "name": "Pierre",
                    "lastName": "Leblanc",
                    "countryCode": "FR",
                    "country": "France"
                },
                {
                    "code": "95NNMT",
                    "name": "Hannah",
                    "lastName": "Müller",
                    "countryCode": "DE",
                    "country": "Germany"
                },
                {
                    "code": "JQZK8K",
                    "name": "Emma",
                    "lastName": "Leblanc",
                    "countryCode": "FR",
                    "country": "France"
                },
                {
                    "code": "8NFRW0",
                    "name": "Amelia",
                    "lastName": "Taylor",
                    "countryCode": "GB",
                    "country": "United Kingdom"
                },
                {
                    "code": "PRWZSK",
                    "name": "Jun",
                    "lastName": "Li",
                    "countryCode": "CN",
                    "country": "China"
                }
            ],
            "prize": "Ignite Turkiye"
        },
        {
            "winners": [
                {
                    "code": "6MZHDF",
                    "name": "Jose",
                    "lastName": "Garcia",
                    "countryCode": "ES",
                    "country": "Spain"
                },
                {
                    "code": "SE1I9I",
                    "name": "Mike",
                    "lastName": "Smith",
                    "countryCode": "US",
                    "country": "United States"
                },
                {
                    "code": "P6X82I",
                    "name": "Luc",
                    "lastName": "Leblanc",
                    "countryCode": "FR",
                    "country": "France"
                }
            ],
            "prize": "Apple Kit"
        },
        {
            "name": "03BG4G Johnattan &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/GB.svg\"></span>",
            "prize": "50Gm Gold"
        },
        {
            "name": "0N3ZG2 Oskar &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/NO.svg\"></span>",
            "prize": "3N/4D Atlantis the Royal + Private Yacht tour"
        },
        {
            "name": "XAIR8V Marco &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/IT.svg\"></span>",
            "prize": "Trip to Las Vegas"
        },
        {
            "name": "R3QJNK Akira &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/JP.svg\"></span>",
            "prize": "3N/4D Formula 1"
        },
        {
            "name": "7K8BZQ Gema &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/FR.svg\"></span>",
            "prize": "Rolex"
        },
        {
            "name": "2A2B3C SEIFERT &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/DE.svg\"></span>",
            "prize": "BMW i8 Gran Coupe"
        },
        {
            "name": "CZ2F1A MROWINSKI &nbsp;<span><img width=\"70\" src=\"https://countryflagsapi.netlify.app/flag/PL.svg\"></span>",
            "prize": "Porsche"
        }
    ];


    sampleWinner.forEach(function(winner){
        if(typeof winner.winners != 'undefined'){
            var prizeItem = winner.prize;
            var winnerListsData = winner.winners;
            var winnerListHtml = '';
            winnerListsData.forEach(function(w){
                winnerListHtml += `${w.code} ${w.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${w.countryCode}.svg"></span><br>`;
            }); 
            var table = '<tr><td>'+prizeItem+'</td><td>'+winnerListHtml+'</td></tr>';
        }else{
            var table = '<tr><td>'+winner['prize']+'</td><td>'+winner['name']+'</td></tr>';
                          
        }
        $("#final-winner-list").prepend(table);     
    });

    confetti.start();
    winningSound.play();
    
    $('.github').show()
}