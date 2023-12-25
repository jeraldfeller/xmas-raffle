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
 
        var namesList = [
            '7UY84W	Emmanuella',
            '8899B4	Moses',
            '6E5IH7	Jani',
            '0ZT7P9	STKKfuenfeindr',
            '90887P	CLAUDIO',
            'LKMS44	Mani',
            '2U4WQ4	hyunchoi',
            'O75AJG	Fabrizio',
            '0XKD24	STKK',
            '260B0I	STREAKK',
            'S7VL23	yusuf',
            '02O55W	Kr',
            'I10742	Kr',
            'Q16EF1	Streakk',
            '302Q88	Harry',
            'D36441	Harry',
            'K0248B	Harry',
            '8H7419	Harry',
            '5S2YYO	Harry',
            '896QFO	Kr',
            '30Y8BR	Kr',
            '56F7H8	sister',
            '509664	serge',
            'PXWK3T	Emilia',
            '5CDI49	Sebastian',
            '0T67FU	Nico',
            'XHZ0P1	Nico',
            'EQ74YV	Nico',
            'A04MHO	Nico',
            'BCRZ86	Nico',
            'TZ9952	Nico',
            'V61684	Nico',
            '0770KD	Nico',
            '2F3VS6	Nico',
            '8QLB6N	Nico',
            '399P5L	Nico',
            '85KJ7F	Nico',
            'L9323H	Tatiana',
            '9R125A	Krzysztof',
            '3X9291	Achim',
            '5FSVW0	Freude',
            'HRO43T	PRO',
            '45P5SY	Cashbackdrei',
            '1638ET	Power',
            'R5MD76	Kornelia',
            'AN48GL	Klaus',
            'VM3J0H	Papa',
            '3756JQ	Ingrid',
            '3OWB6U	Lina',
            'HX08LE	Honorata',
            '8S2RSE	Rosi',
            'O5Q8XK	AtussaHinedi',
            '5V90HZ	STREAKK',
            '4658SL	Michael',
            'ZZ8O4M	Eric',
            '44U1LH	shamimu',
            'K46K24	Tomasz',
            '6X043Y	Jan',
            'LX8PK4	Vikrant',
            '65N9SA	Kaja',
            'RA0GB8	Damian',
            'UT4LM4	michel',
            'KJO629	michel',
            '14U0TF	michel',
            '1C4TIF	michel',
            'WMKMGV	Manuelstkkzwei',
            '9630AP	Ewa',
            'K3RU15	Manuelstkkdrei',
            'K30007	Vishal',
            'T4R3MG	Stefan',
            '1985BF	Stefan',
            'IQ2EPM	Jccinq',
            'OXL4M3	STREAKK',
            '8C2496	STREAKK',
            '2QX99X	STREAKK',
            'H4MT9R	STREAKK',
            'KW0F5J	Gordon',
            '611YXQ	LMC',
            '3151Q8	Sstef',
            'CAT83A	harry',
            'Z88256	Mira',
            '8826AH	Roman',
            '58X155	Schein',
            'VQ5DI1	Zofia',
            'LQA0QO	Heidi',
            '49CW4N	Sonnen',
            'I28Z3B	Sebastian',
            'X174Z6	Christoph',
            '7X0W8I	Kraft',
            '37M29Q	Sam',
            '7KD2YO	Schoepfer',
            '77SZ5M	MC',
            '7IPCP4	Licht',
            'D99SPL	Familie',
            'KXRK79	Patrice',
            'VPLX9N	Vera',
            'E1X51S	Robert',
            '8OHPDR	Jakub',
            '4ZLJO1	Friebe',
            '23N7OS	Luke',
            '5YMTTY	Margarethe',
            'Q4Q15B	Friebe',
            'U825JK	Tarkan',
            '4FM2UR	Michael',
            'F7KLB7	VENERANDA',
            'DG0J94	CashFlowPool',
            '6CS269	marion',
            '90367Q	Davide',
            'SB71XS	Lina',
            '0461D4	Jan',
            'JXAIAK	Jan',
            'J19VX1	Global',
            'C708VF	STKKOneNarender',
            '0ORIK1	Michael',
            'G2T23H	Daniel',
            'H6P7H7	Enes',
            '58606T	Andre',
            '44SGXC	Andre',
            '7290QP	Andre',
            '2X454E	Marc',
            'Z8Z1I7	Jose',
            '4IUE12	Monique',
            '0Z783B	Kr',
            'DHS13F	ceylin',
            '6NM527	ceylin',
            '8Q2J21	ceylin',
            'A3X072	ceylin',
            'Z6155X	Asya',
            '256N1V	Asya',
            'E11S19	Asya',
            '4TS7OC	NwakInga',
            '5EZFLN	Gordon',
            '74G6M6	Asya',
            '4J4U3Z	Marcin',
            'GBG3QU	Jan',
            '572KM4	Cat',
            'ZHG23B	Steffi',
            '20T4D7	Giovanni',
            '90W902	Richest',
            '239ZA2	Kornelia',
            'FU78A1	Adam',
            '432NQ0	Lina',
            'P04F3N	Emilia',
            '25KDJI	Jan',
            '662O3W	Dagmara',
            '01EU96	Costel',
            'PY0X2O	Bastian',
            'B00DBY	Melanie',
            '9451W1	BenFinn',
            'GBV3UK	Strategy',
            'V3CM44	Billion',
            'PTLWX8	Adam',
            '799253	Adam',
            '1V15K8	Karolina',
            '0MYD38	Viktor',
            '3192GE	Online',
            'A247B9	Joel',
            '35LY22	Katrin',
            'AISR90	Anke',
            'Z2V7ZF	Swathi',
            'J738PQ	Nafie',
            '07631T	Anne',
            '6698HZ	Hummer',
            '3TWNNN	Bentley',
            'UI9402	Steffi',
            'JYH4NY	Wilhelm',
            '8WOL86	Masoud',
            'ICF6FC	Pankaj',
            'PA00X0	Gamma',
            'A068HH	Shex',
            '7S90QL	Arbaa',
            'DDOW92	Artur',
            'I9O1O1	Artur',
            '0RQHMY	Artur',
            'VMQJXV	Artur',
            '12F2CS	Gordon',
            'S038JK	Global',
            'R42Y26	Adeline',
            '7S0B6E	Crypto',
            '1BCB2V	Crypto',
            'X8S0Y9	Crypto',
            '6FA8E4	Crypto',
            'U1F99K	Crypto',
            'Z3LE33	ONURCAN',
            'ALLH1H	ONURCAN',
            '2KM439	Krystyna',
            'J6S226	Krystyna',
            'YRWY61	Kalam',
            '6HKIG0	Emilia',
            '4641X2	Crypto',
            '52JJ8Z	Third',
            'LA6059	Yakamoz',
            'R116NT	Cashflow',
            '98YG1M	SGA',
            '50F09U	Roland',
            '988Z59	dinh',
            'VJRE60	Anita',
            'X41DT0	GAURAV',
            '3P68XQ	Kamil',
            '3K2Y9E	Juhi',
            '052C5G	berat',
            '4G000V	Dominik',
            '52GT88	Nicole',
            'W4305X	Crypto',
            'UPFX58	Crypto',
            'JU7I4H	Joanna',
            '3B1AW9	Monika',
            '0LOXLT	Andreas',
            'SS93I4	Petra',
            'L3X50O	Petra',
            'DK2X26	Sophia',
            'Y39HR0	Emily',
            '5NQVPS	Mardan',
            'JAH9BK	Sebastian',
            '36M9DC	First',
            '6QHE1H	Adam',
            'XEXB6Y	Franky',
            '451D58	Krzysztof',
            'AHL31T	Farzana',
            'J8S166	Mohammad',
            '0MF486	Kalam',
            'O4206U	jacqueline',
            '2W41EJ	Frank',
            'T80595	Wieslawa',
            'UJPWA4	MC',
            'K766R1	nelo',
            'MCJ5Y6	nelo',
            'Q75L0J	daria',
            'FH1P15	daria',
            '20754	maja',
            '91FOX8	Krzysztof',
            '23A0C7	Roy',
            'BLL9R3	Debjani',
            '395722	Adam',
            '0MOPLR	Pardeep',
            '0R7O2C	KUSUMA',
            '7L09Z6	Kamil',
            'I78928	Chinwa',
            '8E000X	Martin',
            'TY457N	Gaurahari',
            'FV6YG8	NwakInga',
            'LVU67X	Crypto',
            '37FCW4	Ayan',
            '49CYX9	Janine',
            '39F044	Mariane',
            '0TM15I	PetraMack',
            'T79153	Frederik',
            '24Y75Q	Chinwa',
            'M575EX	Pawel',
            'LIVF2Z	Joerg',
            '13QGC6	Krzysztof',
            'QVMT79	maja',
            '098G4D	Coralie',
            '5Y2M24	Farzana',
            'GKZ7TD	Krystian',
            '3999M4	Mohamed',
            '89DO4M	Enrique',
            '24D94J	Koyote',
            'F2791A	Dilip',
            '6LS29V	maciej',
            'X176ID	marion',
            '13Y71F	STREAKK',
            '8V03I8	Tom',
            'ZHEHV4	Adam',
            '628E2C	Michael',
            'T2MS40	ABM',
            '0X3W21	Hyunsuk',
            'I6QTR8	Vijender',
            'A37Q60	AARTI',
            '07IYA9	Wolfgang',
            '6X2M4D	STKKfuenfeinzw',
            '9075K2	STKKfuenfeindr',
            '32G471	Krystian',
            'S87821	Fj',
            'PFVO8J	SeungEun',
            'BLR7IB	Crypto',
            'IS0325	Crypto',
            '442OB3	Crypto',
            '28PO4Z	Kay',
            '489504	Renate',
            '05Y8C7	Christoph',
            '12TRSV	Dorith',
            'AISFYD	Marc',
            'IXHX84	Marc',
            '96Y5RQ	Marc',
            'QU83P0	Fabian',
            '041H0D	Wambui',
            'E49EO6	Krzysztof',
            'OA944I	Lina',
            'FDRSH3	Annalisa',
            'IPZ2O9	MOHSIN',
            'YF793F	Moma',
            '0TMSP6	Steffen',
            'H122OG	Sabine',
            'X4SK03	Electra',
            'Z10JPQ	Tanja',
            '7V3576	Dariusz',
            '82H7KJ	Justin',
            '7AEDIO	Crypto',
            'R2Z41L	Krzysztof',
            'MLP22Y	Tomasz',
            'MT0497	Krzysztof',
            'ZSE6SR	Joel',
            'H4A5BU	Ola',
            '83LH8F	Grzegorz',
            '62L597	NwakInga',
            'JYAHGD	Crypto',
            'KBMX2J	Mattis',
            '68830W	Yasmin',
            '45QJ9X	Cep',
            'I03V8V	Alexander',
            'WZ598M	Elite',
            '32922K	Elite',
            '2R0164	Davide',
            'PWB4W2	Anita',
            'UJ69M4	Krystian',
            '9VD92J	Crypto',
            '81989R	New',
            '7L8727	Robert',
            'T85353	Davide',
            'T10N14	Adam',
            '9OI61A	Artur',
            'YDMJ93	Oliver',
            'NXH752	Malena',
            'Z73G03	Wieslawa',
            '7BRGL9	Francesco',
            '439SEA	Crypto',
            'I5Y5D4	Wieslawa',
            'QT4LR0	Holger',
            '8ROD29	Khalid',
            '6JFGG6	Birgit',
            'Q62QVM	Reise',
            'EHU0C5	Johann',
            'V5T7J9	Mario',
            'K2Q50Y	Werner',
            'XDM5JM	Marion',
            'O90R32	Streakk',
            '9H4VD9	CashFlow',
            '2LFV5E	Cashflow',
            '36EVG7	Michael',
            'HK094D	Nicole',
            '25YTKG	Coralie',
            '604HZ1	Steffi',
            'X9N5RN	Steffi',
            '4Y35JV	Who',
            'PHG49C	Who',
            'LX0XFR	Who',
            'E2934O	Who',
            '3X3ADF	Who',
            'S5888Q	CRB',
            '8VT4YQ	maja',
            '3P89K2	Michal',
            'K3LE9T	Bertrand',
            'J16X5X	Ranu',
            '39221R	Barbara',
            '22W6F5	Marcel',
            'K2D843	Marcel',
            'BM6O5X	STREAKK',
            'IDM1RL	STREAKK',
            '281Y10	STREAKK',
            '5P77PQ	STREAKK',
            'E1S6SB	Mari',
            '1BOO8M	Universal',
            'Z81O0V	STREAKK',
            '6B23H2	Maya',
            'Q6WH2Z	PetraMack',
            'K67SN3	Iman',
            '48OQJU	Streakk',
            'NXZCZC	Antonia',
            '94MP74	Sitta',
            'BJR526	Irene',
            '8IMELC	Emilia',
            '6G2038	Arjun',
            '58JZ23	jeanmarc',
            '77T58H	Janusz',
            '7OIY24	Cat',
            '5XCCHZ	Franziska',
            'YYWM41	Dirk',
            'AXJ18G	Dirk',
            'NAB9M3	Dirk',
            '0UIUJ3	Dirk',
            'CP33UD	Dirk',
            '572KI3	Dirk',
            'O38TW4	Dirk',
            'RUIRE7	Dirk',
            'HOB91N	Dirk',
            '22S7PB	Dirk',
            '62NLTR	Kacper',
            '7946X5	Crypto',
            '9DMQQW	Ja',
            'E0ON39	Madeleine',
            'VQ645N	Jacques',
            '7QHZZY	Marin',
            'M52K9K	Alexander',
            'L3Q74Z	Ayz',
            'V53926	Aliayaz',
            '2RKVZ5	Roy',
            'Z52DDW	Tomasz',
            'H86NPN	Daniel',
            '6FTB35	Markus',
            'B47E3P	Sabrina',
            '628467	Mick',
            '4SL16V	atakan',
            'W61J8J	Mick',
            'T02DAC	Dan',
            '8B90Z8	Damian',
            '3YOU17	STREAKK',
            'KJ34V4	STREAKK',
            '8D1083	STREAKK',
            '2U8PU9	STKK',
            'M7VMQ9	Rainer',
            '9FU064	Talata',
            'D59CGU	Chiara',
            'R6Q0OE	Doris',
            '5KY982	Patrick',
            '878GM7	Yuecel',
            'M661Q5	Lella',
            'E61667	Livia',
            '544207	Vimal',
            '3VT808	ramazan',
            '56A5VW	Bernard',
            'GW41ZH	FATMA',
            'DRUXGI	Rico',
            'R15O2Z	Koyotesatu',
            '7DP7PF	Prapotnik',
            '233I72	Tamer',
            '2IRR6D	Frank',
            'I5G4FW	Annabelle',
            '5ND292	Constantin',
            '1H302O	Rosa',
            '9V61DE	Simeon',
            '1UMW7W	Harrald',
            '0I4UX7	Richard',
            '5Y2CSB	Alfred',
            'RFF9XW	Farooq',
            '8075H5	Peter',
            'UU1M69	Elman',
            'GZ5SIN	Elman',
            'WV4L24	Elman',
            'T332M4	Elman',
            'R2G610	Elman',
            '85J3UN	Elman',
            'VCXMIP	Elman',
            '459VGS	Elman',
            'ZBKZU4	Elman',
            '9PZAZI	Elman',
            '33JXA2	Ulviya',
            '59192G	Ulviya',
            'DK834Q	Ulviya',
            'YKV71V	Ulviya',
            '8NQ0Z2	Ulviya',
            'S9AWUN	Ulviya',
            '22JL6O	Ewa',
            '6FB144	Ulvi',
            '22E04X	Ulvi',
            '4GGI7C	Sascha',
            '31TGZ6	RuK',
            '939389	Paolo',
            '8X0KQ4	Roman',
            '1J5044	Cengiz',
            'QLNW9W	Sanjay',
            'ZW6JXV	Christian',
            'BV9UH1	Christian',
            '35R9WU	Christian',
            'IZ048X	Christian',
            '69RE2U	Michael',
            'EZ4979	Karin',
            'C5YJ4A	Tammy',
            'J112I5	Wojciech',
            '5E162S	Gregor',
            '5710LJ	Marie',
            'PQ2WL8	Janu',
            '0Z58M2	Helene',
            '8I7M30	Marc',
            'ZSZ4I6	Ulviya',
            '8HE9SU	Ulviya',
            '21KA04	Ulviya',
            '6C601Z	Ulviya',
            'ADG87I	Andreas',
            '000O26	Andreas',
            '3N3ZK4	Andreas',
            'H0UDS8	Andreas',
            'W9Y2LS	Andreas',
            'UX6KL6	Ulvi',
            '1QL8UA	Sebastian',
            'E16D6U	Sebastian',
            'LL44KM	Bas',
            'MS5PF1	Star',
            '60QVI6	Iris',
            'A60WO1	Bas',
            '813Q36	Bas',
            '3BW902	Di',
            'WPRB93	STKK',
            'ZDIS4J	Power',
            '7D1N4Z	Naomi',
            '771J4R	Naomi',
            'U95UFK	Naomi',
            '43PNT9	Naomi',
            'K2O064	Thomas',
            'CK6F6B	Naomi',
            '3U82J3	Naomi',
            'G3IS1G	Dominik',
            '53VRZ5	Tino',
            'DGY8IY	Tino',
            '28W6YJ	Teresa',
            'H51V97	Tadeusz',
            '03MAB1	Grzegorz',
            '436GKT	Marin',
            '8404A1	Familyaufreisen',
            '3F2TDV	Ewa',
            'K6SDG5	Patrick',
            'EF853P	Dawid',
            'DWLWDN	Uta',
            '89QW72	Antonia',
            '9R424S	Hanko',
            'NB5872	Sangeeta',
            'H890H2	Mario',
            'V4ZZ95	Masrio',
            '3CRFWP	Jeremy',
            '55DY13	Ilgar',
            '8V911V	Ilgar',
            '1WIHCF	Silas',
            'A9P88G	Dieter',
            '4R5731	Eddy',
            'F77P16	Richard',
            'UN41WP	Sam',
            '068TZ3	Andrea',
            'VV3K82	Marleen',
            '5LLGK8	oliwier',
            'Z81D2J	Thomas',
            '9K9ASQ	Thirdlegsix',
            'OXYSDB	Teo',
            'FE395R	Juergen',
            'V2O58D	Marie',
            'SPJ6T4	Mario',
            '8X7FJ2	Ilgar',
            '9OPM4C	Maximilian',
            'FZ93L3	Louis',
            'M91FKW	Hannah',
            '1UG685	Hannah',
            '7D4Y90	Josan',
            'B2459T	Josan',
            '6VM7LO	Henning',
            'WLF7N2	Atul',
            '2418U2	Magdalena',
            'A9210X	Anushrav',
            'Y1PZ56	Dorit',
            '8HYO7K	Tino',
            'ZNTK55	Tino',
            '489900	Grzegorz',
            '3EH72D	Dennis',
            '4ZQL7D	Joerg',
            'C1818W	Global',
            '1TJ2WQ	STREAKK',
            'D8913X	BuB',
            'NT7681	Melanie',
            'Q9H6WI	Markus',
            '7I787F	Markus',
            'T64RX2	Suliko',
            '6X0140	DreiDreiZwei',
            'W9Y90C	Krzysztof',
            'GL8R68	Didi',
            '9E4UPF	Bikky',
            '726ALY	Kimberly',
            'B21264	Smitakshi',
            'F2GS70	Sean',
            '6B317A	Coralie',
            '4O13UM	Coralie',
            '3CLADO	Maya',
            'U01SX9	Cleo',
            '237G5C	Maria',
            '79Z96R	TomTom',
            '5KKQ42	Maria',
            '1KW037	Melanie',
            '9KOYBU	Nicola',
            'QFJH5O	MariaTeresa',
            'TMA37R	Marco',
            '7OCLC6	Milena',
            '252862	CashFlowBox',
            '6YT2IR	Matthias',
            'AQA6G8	Matthias',
            '64C0CN	Cashflowbox',
            'GFG2RJ	CashflowBox',
            '3223YS	Antonio',
            '2WF468	CashFlowBox',
            'PM7LN6	Cashflow',
            '0Z0P1X	Karin',
            'VPEWKC	Cashflow',
            '8G78JJ	Holding',
            'KX1X27	Cashcow',
            'NXLKHD	CashFlowBox',
            'S2C4UR	Grandchamp',
            '33Q137	Tomasz',
            '89P42Y	Hubert',
            '1GM4R1	Ufuk',
            '3K7C7W	Monika',
            'W3NR65	Manuela',
            '62267F	Tomasz',
            '9FHBSI	Tomasz',
            'TF5PNH	Tomasz',
            'QR8N09	Monika',
            '93L4JP	Monika',
            'R8HO03	Jakub',
            '87D8T5	Monika',
            '9OQYDK	Monika',
            'N48Q67	Katarzyna',
            '8K55NM	Monika',
            'QQNMJ3	Monika',
            'MG9X3Q	Monika',
            'W25A36	Monika',
            'Z6YP6E	Monika',
            '49EU6B	Monika',
            '4WU1J6	Monika',
            '12E6X7	Monika',
            'VPQD03	Monika',
            '9A19LJ	Monika',
            'K4HBVH	Aaisha',
            '78X5G7	Daniela',
            'CHO371	STREAKK',
            'H9K3O4	STREAKK',
            'TQ2B4T	Jannis',
            '66445	Jannis',
            '9DU4Q6	Marko',
            'A638Y7	Masrio',
            'PD403Y	Andrea',
            'E75FFU	Daniel',
            'L5YD45	Mayank',
            'TQG44Z	Ralf',
            '8676TY	Ralf',
            'H75937	Ralf',
            'RTR667	Ralf',
            '8D5UHC	Cat',
            '38X5K6	Cat',
            '5S57U0	Steffi',
            'Q9EIRJ	Steffi',
            '8203VF	Steffi',
            'O6U131	Steffi',
            '5EUIOC	Steffi',
            'G4ZM6J	LMC',
            '3S8H4K	Serdar',
            'FJIINM	Silvana',
            'BK75ID	Steffen',
            '3G08Q9	Steffen',
            'U13Y1X	YES',
            '037YSY	Kripto',
            'QH67MF	Benita',
            'UL1LX8	Francesco',
            'QIUKV0	Alexander',
            'N6T5O0	Krzysztof',
            '3755UG	Thomas',
            'MK197R	Marin',
            '6UQX58	Harald',
            '38N2OT	Amrita',
            'Q947NT	Maria',
            '6B9V4Q	Larissa',
            'C3L2OP	Crypto',
            '0OMKG9	Birgit',
            '0X1XVR	Anar',
            '584939	Annika',
            '83J9U6	Leon',
            'KY4C3S	Sabine',
            '2956NJ	Pawel',
            'V9G703	Valerie',
            '939405	Patrick',
            '514S1X	Lukasz',
            '77357X	STREAKK',
            '2G4B92	Silvia',
            '7U729P	Marta',
            '64NG6O	Ralph',
            'G14NVW	Silvia',
            'DD844W	Filip',
            '051EB8	Malgorzata',
            'M0S6BW	Gold',
            'XFQ0TD	Jochen',
            '6D0FOQ	Bernd',
            '84W14B	Adam',
            '014JA8	Oskar',
            'Q770W0	Franzi',
            'K15WH9	christine',
            'KY767Q	Crypto',
            'T3U58F	JayDees',
            '3G2AWF	Wojciech',
            '3D9Y95	Online',
            'S7894U	Gitau',
            'XZ21SN	ForConstantin',
            'B4RLXK	Rakesh',
            '778SQX	Puja',
            '9DLB9A	Blockchain',
            '653OW9	Max',
            'RDZ4A8	Pavel',
            'MZ71XL	Pavel',
            'Q882D9	Pavel',
            'XLC3Z1	Constantin',
            '2Y2534	MC',
            'MM08NG	Martine',
            'WIWQPZ	Jochen',
            'F7A1EO	LILLY',
            '2VCLYT	STREAKK',
            'C0H54V	Dawid',
            'Y7K6SD	Jannis',
            'V1Q4Y8	Star',
            '1O282Z	angelino',
            'P8HU8U	Steffi',
            'P7EJQK	Steffi',
            '96L51N	Piergiorgio',
            'OCF3LB	Friebe',
            'C6RCJO	Klaus',
            'O1YCO2	Pahelero',
            'SK5WA5	Coralie',
            'R1WW45	Coralie',
            '490Y09	Coralie',
            'G25181	Phillip',
            'Q73GQS	Philippe',
            'GCF098	Petronilla',
            '2S7373	Krystian',
            '8S827F	Ursula',
            '91IQS1	buse',
            'Y61D14	beren',
            '766525	Jeniffer',
            'F70317	Atina',
            'R195P6	Gessl',
            'DMJ78E	francis',
            'D61IO1	Coralie',
            'Z2Q0K0	Coralie',
            '4N5VG6	Christian',
            '0TM3XG	Coralie',
            '528737	Kraft',
            'H8Y230	Max',
            '44PW19	Adam',
            'QRT268	Paul',
            'Z1N348	Helene',
            '7QW15Q	Silas',
            '37V7A7	Wojciech',
            '6ATI9K	Cat',
            '019KL3	Enes',
            '09N5H2	Ulas',
            'VX00C1	murat',
            'AX94K6	Lina',
            '11GPVK	Bcnmessager',
            'SQ7NB2	Martin',
            '4MIW6I	Kathrin',
            'V4L48A	Karin',
            'QC7PB5	Patrick',
            '97HYBF	Pony',
            '8IXS9F	Martin',
            '51N8A0	Antje',
            '2D87S3	Marion',
            '351UC0	Asia',
            'RP6IW3	Pawan',
            '5O2Q6L	cedric',
            'D4BJ6P	Harald',
            'L6V14A	Larissa',
            '89Q171	Ola',
            'R7LB3T	Tina',
            '1FE0B4	STREAKK',
            '17ZJK6	STREAKK',
            'W969P3	STREAKK',
            '7MB0AC	STREAKK',
            'DP3F85	STREAKK',
            '22Q05E	STREAKK',
            'QH906T	STREAKK',
            'M9926N	STREAKK',
            'DSA020	STREAKK',
            'USGIA9	STREAKK',
            '1EU00K	STREAKK',
            '2NYO8P	Radomir',
            '2YXN5P	Marta',
            'VQJHUZ	Coralie',
            '1OOOOT	Coralie',
            '5671H5	Coralie',
            '2V1T98	Coralie',
            'SQ1N63	Coralie',
            'HZXP0E	Coralie',
            'N445IM	Edson',
            'B1P2D5	Jolly',
            'P1ZY66	Renate',
            'ZM52IE	Itnein',
            '896E2P	Emilia',
            'A5P4JW	Martina',
            'X6HL34	Martin',
            '85A17Y	Holger',
            'F074FO	Filip',
            'P598V0	Sissi',
            'K2XHGR	Universal',
            'CRQ9JU	Jerome',
            'O5FF48	HANSPETER',
            '6297M3	HANSPETER',
            'H5XYUW	Online',
            '7J24B0	streakk',
            'PSUV02	Heribert',
            '0NJA5L	Luise',
            '54J6UA	Krystyna',
            'G39E16	Paul',
            'F80MGO	hesna',
            'H3G234	Meer',
            'FJ5N2E	Taosin',
            'X1229V	Christian',
            'QIKRFV	Crypto',
            '3C182F	Crypto',
            'ETNYY0	Frei',
            '219MYA	Coralie',
            'F60C81	Richard',
            '4OZ621	Richard',
            '81YH30	STREAKK',
            'QLQI35	Desi',
            'Y05949	Elsa',
            'EXJX43	Julia',
            '72O934	OdaSophia',
            '45BM59	Guillaume',
            '9PVR82	Piotr',
            'DH6YJ9	Piotr',
            'PTQ9C0	Paula',
            'XT29H4	Leo',
            'QO2B3L	Richard',
            'WBWMA2	ZweiDreiEins',
            '44CPS7	EinsDreiEins',
            '7Z445E	STREAKK',
            '0CI4Q9	STREAKK',
            'PU4Q6T	ZweiVierZwei',
            'PT9J0X	ZweiVierZwei',
            '236C56	ZweiVierDrei',
            'KO0Q2O	EinsVierEins',
            'NK32PK	EinsVierEins',
            'ZSQ1QR	EinsVierZwei',
            '01G2NX	EinsVierZwei',
            '03F4JA	EinsVierDrei',
            'ZQ7WLY	Willi',
            '1095YS	Abbas',
            'VTM78X	Cristina',
            '6Q5R65	Josch',
            '92M9F7	Patrick',
            '294M23	Ewelina',
            'T2ACG9	Ewelina',
            '5OVGL7	Steffi',
            '9948AW	Leonid',
            '2QU58B	Mia',
            '8JY708	Zenon',
            'WQPK6H	Ilgar',
            'X19P34	Ilgar',
            '7ZR041	Ilgar',
            '990XI3	Ilgar',
            'QD99NG	Global',
            '17BAEW	Ilgar',
            'TVX9SM	Naman',
            '3R7A0V	Astrid',
            '9Y3Q85	Karolina',
            'FNZ9PC	Ilgar',
            '6F0S63	Monika',
            '522YEQ	Ilgar',
            'TD0UKP	Monika',
            '11SU03	Michael',
            '7Q7Q15	Monika',
            '27T766	Monika',
            'T2EKN5	mehmet',
            '1SK3K8	Ksawery',
            'QM7GCQ	Jojo',
            'DW38XI	Daniela',
            'XG1QZ9	Celeste',
            'Q57JGL	Coralie',
            'W6V328	CHRISTOPHE',
            '555XL8	CHRISTOPHE',
            'Q5GLF4	CHRISTOPHE',
            'IH8881	CHRISTOPHE',
            'BN24Y5	Ania',
            'A7J8E9	Masilin',
            '57A7N3	Ebrista',
            'B253C9	Shivi',
            'RDN542	MEHMET',
            'X0LII6	CEMALETTIN',
            '7P1RIJ	MEHMET',
            '5V2Y1X	CEMALETTIN',
            '1Q99AZ	michelthomas',
            'BY2C2Q	michelthomas',
            'U4PY13	Hubert',
            'H992HS	CHRISTOPHE',
            '99V28C	Paolo',
            '3559N7	Lina',
            '9CKSJJ	Tugrul',
            'TKD32U	Tugrul',
            '274T2S	Stefan',
            '89L6UD	SONU',
            '325GKO	Michael',
            '0A6XQ4	Pradeepkumar',
            'D3NVM4	Ranvir',
            'DF307M	Ashwani',
            'ZI12SM	Pal',
            '4GO4W7	Andreas',
            'VKW0U7	EinsDreiZwei',
            '4HYZ78	EinsDreiZwei',
            'W1OKK1	EinsDreiDrei',
            'N073A1	EinsDreiDrei',
            'L3D931	ZweiDreiZwei',
            '9G1BY5	ZweiDreiZwei',
            '9SK37G	ZweiDreiDrei',
            '1NDAT2	ZweiDreiDrei',
            'N8NF49	Sarina',
            'II40XE	Krzysztof',
            '8BYXR0	Ilgar',
            'MK0UN9	Ilgar',
            '3B5O89	CHRISTOPHE',
            '2IG9V9	CHRISTOPHE',
            'SS91W2	CHRISTOPHE',
            '117J21	CHRISTOPHE',
            '3D9AHZ	Olivia',
            'FY4SQ9	CHRISTOPHE',
            'D6ZR1A	CHRISTOPHE',
            '648911	Julian',
            'W10J75	Alessio',
            '6SG7BE	Norbert',
            'O9M5U7	VAuSO',
            'YY8VXH	Milan',
            '42986E	PASCAL',
            'QUF275	Martin',
            '8PTX46	michelthomas',
            'L43X9R	michelthomas',
            '61KI79	Ilgar',
            'DXY4SG	Ilgar',
            '5S0KZS	Godwin',
            'HRUAT5	CHRISTOPHE',
            '6PE06W	CHRISTOPHE',
            '1K88NX	WAZEE',
            'IUGLLS	Ilgar',
            '57U41E	Mahmut',
            'E1Y7R8	Ursula',
            'SJCH7I	Anchal',
            'R2W25H	Maria',
            'CRSF1N	Mariusz',
            'C4H0Z0	Fabian',
            'SJPS39	Laurent',
            'D6BL65	Shakuntala',
            'A9IHG6	Power',
            '7LB5AH	Henry',
            'J3U7NP	Patrick',
            '898392	Helmut',
            'IXU7QE	KARINE',
            'K0B732	Peter',
            '8E89VS	Ilgar',
            'DUYXOH	Jseb',
            '584C8D	Stefan',
            '62ODGE	Dragan',
            'WH0M53	STREAKK',
            '1D5H36	STREAKK',
            'H279Q1	Godwin',
            '9S631S	CHRISTOPHE',
            '185I51	Rosa',
            'GM6T59	Alfred',
            '4FY538	Radomir',
            'U45LK9	Tammy',
            'YWITEK	Rani',
            'G761C7	Kevin',
            '9Z6995	Piotr',
            'YIB2CE	Hanno',
            '05U99R	Leo',
            'B4U40Z	Paula',
            '08911U	Damian',
            '2MU7BW	CaritasThree',
            '93X0H8	CaritasThree',
            '2O5T0A	Artur',
            '8DUZG9	Artur',
            '0D9G93	Lucie',
            '5Z48BA	STKKfuenfeinzw',
            'HXGYSC	STKKfuenfeinzw',
            'T189L9	STKKfuenfeinzw',
            '492UJ5	STKKfuenfeinzw',
            'QXM961	Helmut',
            'UW0NB5	Andreas',
            'F1OGX3	STKKfuenfeindr',
            'MXF1K6	STKKfuenfeindr',
            '8C1207	STKKfuenfeindr',
            'O7ZL9B	STKKfuenfeindr',
            '65G28I	STKKfuenfeindr',
            '39TXEI	SHAIK',
            'O5877Y	HANSPETER',
            '0A294W	HANSPETER',
            'G06IN7	ManuelSTKKvier',
            '41XNM3	ManuelSTKKvier',
            'Z64MJ6	Manuelstkkvier',
            'OBI8JO	YES',
            'D4426L	Pawel',
            'K5M022	Lets',
            '273LAD	Holger',
            'FY0L91	Investment',
            '1X9SIR	Mirco',
            'E00K35	Steffi',
            '1HB974	Daniel',
            'C845N7	Daniel',
            '7410WE	Stefan',
            'XUZU38	Michal',
            'ZNAYTM	Ania',
            '4PJM62	Susanne',
            '0505D6	STKKfuenfeindr',
            'F54Z5I	Stefan',
            '05GER3	Hermance',
            'NZ0W0V	STKK',
            '1GO894	Paco',
            'ZP03O5	Manuelstkkvier',
            '19MOTQ	STKKfuenfeins',
            'PLPIM2	STKKfuenfeins',
            'FS0KA6	Franz',
            'BTVBL8	Emilia',
            'A377P8	Marko',
            'B7Y2QJ	Piotr',
            '53S2E8	Haiman',
            'D4M3M8	Maja',
            '95L80W	Gregor',
            'FV0VIM	Thomas',
            '33L444	Thomas',
            '15W26H	Raffaeli',
            'RCI87X	Raffaeli',
            '97X240	Nicola',
            'V1E4Q1	Victor',
            'K3P869	Ivan',
            '4M954P	Braga',
            'L63X0R	Elena',
            'M6QYS3	Juergen',
            '49LX99	Victor',
            '8ZWX2I	CaritasTwo',
            '8RY4Z8	Dmitrii',
            'C9H006	Alexandru',
            '874ARV	Ion',
            'VIQ512	Snejana',
            'K9JJ11	Mihai',
            'WB5IV9	Veaceslav',
            '33B06G	Alexandru',
            'BFKV9V	Ilie',
            '424CU7	Tamara',
            '4PGKJZ	Grigore',
            '991441	Liudmila',
            '1REG66	Lilian',
            '31YHEQ	Andrei',
            'U9Y3CE	Emilia',
            'C939W7	Anna',
            '7V8825	Victoria',
            'ASZZB1	Dumitru',
            '21T552	Stefan',
            'Y6VY5Q	Artur',
            'C5W661	HP',
            'CD7O1V	HP',
            '7D7179	STKKfuenfeinzw',
            'V21ORZ	HP',
            '32KNKU	QAISAR',
            '1BZ93Z	Ralf',
            '3T7233	Tanja',
            '0A70Q9	Tanja',
            '3R1T22	Tanja',
            '193912	Tanja',
            'EC4CX8	Tanja',
            'A7Y9KF	Tanja',
            'XK46KH	Aniket',
            'D980U3	Bcnmessager',
            'DG9WOT	Krachl',
            'VTAZ7A	Stefan',
            'OPDRFX	Stefan',
            '9HI58P	Katarzyna',
            'WL69Q5	Philip',
            '59OUA3	BVeit',
            'S5511G	Marina',
            'R168O8	Gitti',
            '2CQACB	Live',
            '1Q9GNV	Tobias',
            'G87V1M	Rieke',
            '38Y1Z0	Anas',
            'F1A51Z	Clemencia',
            'U1D1QU	Philip',
            'LN5P51	Valentina',
            '7PM87N	Valentina',
            '2094CN	Valentina',
            'YMAT46	Valentina',
            'H134P5	Valentina',
            'D71D98	Valentina',
            'FRXOM2	Elvira',
            '90X8S7	Laurean',
            '79918B	Maxim',
            'ZDFJ94	Piotr',
            'JVR6PB	BodilV',
            '2095SD	MC',
            'JTVK94	Holger',
            'X37G88	Margarethe',
            '0X47K5	Steffi',
            '25R945	Annika',
            'MLM5MU	Soonjeong',
            '35H8IC	laurent',
            '44G522	Ingrid',
            '31IV57	Jana',
            'YCQ5ML	Ludmilla',
            '50717T	Ludmilla',
            '3BLYT9	Ludmilla',
            '0PXXC8	Ludmilla',
            'Q655D8	Joginder',
            'X0I746	Anna',
            'WJC823	Kathrin',
            'YV2C72	Pilarvic',
            'TKUAG6	Caroledouze',
            'W159PC	Jan',
            '3491B3	Patrick',
            '0PU2BP	JUYOUNG',
            '751E5W	Bettina',
            '9TTO7K	Elias',
            'NZLZFP	Luisa',
            'G01ATJ	Noah',
            'Y0BW5U	Manoj',
            'AU9000	Ludmilla',
            'Y42ILG	Ludmilla',
            '7D1P25	Frank',
            '1Y5122	Kathrin',
            'R5LO19	CaritasTwo',
            '475N66	Pilar',
            '17Y0O8	myriam',
            'U9P44J	Wolfgang',
            '65X2H4	Niko',
            '60OZBV	Niko',
            'M3CD3Z	Niko',
            '8Z68T5	Niko',
            '28ME3P	Franka',
            '3470K8	Frank',
            '5YPWH2	Frank',
            'ST757S	LVL',
            '93L1B2	Alice',
            '66GKCC	Simran',
            'VVFKT4	Steffi',
            'A9R690	Steffi',
            '166F3V	Steffi',
            '3241DK	Cat',
            'QP3G3U	Steffi',
            '98CP01	christine',
            'YH6TG8	Niko',
            'CL740Z	Jens',
            '1783N9	Artur',
            '26CDV4	Joerg',
            '9180ID	Artur',
            'UA7101	Peter',
            '4SS714	DAU',
            '7HV578	Christoph',
            '90RI93	Arben',
            'P854GO	Magdalena',
            'ZLT869	Jaroslaw',
            'A5Z09N	Magdalena',
            'KN5IVC	Magdalena',
            'OV3BQ9	Magdalena',
            'K4J705	Sophia',
            '4CJV57	Michael',
            '12JWD3	Tim',
            'S8MLC2	Niko',
            'KZ8TO1	Crypto',
            'Q897II	Pia',
            'ZIU996	Matthieu',
            'EBL4FI	Teresa',
            'W6KJ15	Ranvir',
            'IPZ318	Monika',
            '9B4YVE	Monika',
            '7O06Y1	Monika',
            '78DRBI	Monika',
            '5AL7AV	Monika',
            '3HSC9C	Robert',
            '8TTQF5	Hridya',
            '8US053	Elmar',
            '78Q6XO	Brigitte',
            '5I9WK6	Britta',
            '185570	nida',
            '44XJSR	Christine',
            'J8Q6Q2	Stefano',
            'HL4C5T	Laura',
            'W0C656	nida',
            'U8M98H	Sujatha',
            'H0SJPO	Irina',
            'P54FO3	Matthias',
            '4QH1K7	Matthias',
            '0BN242	Maksim',
            '32575D	Rafal',
            '8185QF	Mario',
            'U5G41S	Marek',
            'N89VZB	Jan',
            '35OF64	Steve',
            'A22RE5	Nicolas',
            '8J2ET7	Stefan',
            'Z0BENO	Maximilian',
            '678147	Reise',
            '6N96QV	Live',
            '7QP7OQ	Abdul',
            '750SL0	ARoger',
            'VZ82LU	JULIEN',
            '84TVH5	NKCC',
            'I17Y84	Steffen',
            'DM5UR7	Manisha',
            'JR4K02	Fynn',
            'YZPXDJ	PatrickJames',
            'H9B9XX	Robert',
            '6O9I6T	Lilli',
            'S22OU7	Gerda',
            '152460	Familie',
            '65OF17	Gerda',
            '6F3R38	Gerda',
            '935I09	Gerda',
            'SUDYT4	Andre',
            '44ZA4U	Andre',
            'V1X7HY	Tom',
            'CJQ9K2	DAU',
            '4HFQ3G	Anthony',
            '37IN1B	Joanna',
            'W34H1G	Frederik',
            'FP75JU	Online',
            '19Z8T8	Blauer',
            'DR5PL8	Silvio',
            '6GE6PC	Silvio',
            '917HJ7	Johanna',
            'KQ41YY	Birgit',
            '2K2YO2	Bernhard',
            'J2OZ9O	Bernhard',
            '0XA067	Bernhard',
            '1E3FME	Bernhard',
            'I4G405	Bernhard',
            '619L03	Alex',
            '878V55	HelenePaula',
            'B0G82P	HelenePaula',
            '823383	Karl',
            'L7D1I5	Karl',
            '30XL35	Melody',
            '59FM2F	Tim',
            'LZ3W48	Harald',
            'TRK6AJ	Dieter',
            '6XTVM7	Sergio',
            '6M64BQ	Ewa',
            '0Q89V9	Andre',
            'PF98J2	Andre',
            '7105R5	yann',
            '14TQKS	Ireneusz',
            'N4Z7A0	Tilo',
            'GNK4Q5	Manuelstkksechs',
            '0GO3ZS	Frederik',
            'E57TTE	Rolando',
            '97GZHU	Paul',
            'RHNO4D	Andrea',
            '46R5C8	Nicole',
            '15S6S3	Juergen',
            'PHW1NA	Schwarzer',
            'BB12F3	Grauer',
            'Q21AS3	mehmet',
            'IL110W	Friederike',
            'XE7C62	Manuelstkksechs',
            'O92Y53	Christian',
            '81II41	Minoo',
            'WXWE0T	Ayten',
            'Q77YZ3	christelle',
            '6G08QF	serge',
            'K500DC	Cemalettin',
            '185Z00	Rasime',
            'LKV453	Dawud',
            '8U5Q5R	STKKfuenfeinzw',
            '7OJQ68	STKKfuenfeinzw',
            '1L9D1Q	STKKfuenfeinzw',
            'G39173	Stefan',
            'ZRN9MP	Daniel',
            'S65WLZ	Sophia',
            'CM4603	Mali',
            'G283UD	HANSPETER',
            '56P911	Oda',
            '9J02L7	Dagmara',
            '1ESP6Y	Sophia',
            'B6J6BE	Tim',
            '1Y3H3B	Sophia',
            'AH530Q	Sophia',
            '90G6G4	Oda',
            'STOC4A	Maxime',
            'BJ8625	Jako',
            '85C61E	Jako',
            'Z3BL7H	Jako',
            'L548K9	Jako',
            '8X4R16	Jako',
            '14E8N3	Jako',
            '3JYHJ8	Jako',
            '7PSL70	Jako',
            'EZ40B9	Jako',
            '2RM0V8	Jako',
            'P0MCM7	Krzysztof',
            '0A9J4S	Dave',
            'P9BAQG	Dave',
            '7ZYN5O	Dave',
            '6333F3	Dave',
            'F2XEX2	Dave',
            'VJ3774	Manuelstkkeins',
            '18Q23I	Thomas',
            '7XFZ40	MC',
            'R14P76	Waldemar',
            'B60PWW	Megan',
            'U72473	Roxy',
            '62279U	Mali',
            'UM7N06	Sophia',
            'O49073	Marek',
            '0TIE44	Marko',
            'SWCH07	Stefan',
            'PFG39A	Stefan',
            'VPK0G4	Sylwia',
            'WX346F	Renate',
            '7AB1R5	Sylwia',
            '294AU0	Sylwia',
            '74L0E1	Sylwia',
            'H09UTW	Sylwia',
            'HCG3A9	Sylwia',
            '604BZ6	Sylwia',
            'FCGV49	Sylwia',
            '6QEHHQ	Sylwia',
            '36QF7D	Sylwia',
            '2D0FZH	Sylwia',
            'JJQ1BK	Sylwia',
            '4CC4Q7	Ahmed',
            'LXXKOQ	Sylwia',
            '4S8526	Ahmed',
            '8P44N5	Jakob',
            '020HKP	Esther',
            'FO4B71	Tamer',
            '7ZFAET	Fatima',
            'ADY8TE	Dragan',
            'OBA4IQ	Anneliese',
            '3M364D	Mariza',
            '622GFQ	Stefan',
            '50OTI0	Steffi',
            '191K8I	Susanne',
            '1LQL6S	Alexander',
            'XNH06F	Uwe',
            '53400X	Mariusz',
            '4686Y0	CashFlow',
            '7A30M1	CashFlow',
            'H7ZX39	CashFlow',
            'V2G836	CashFlow',
            'IQNPZW	oliwier',
            '621418	MaFa',
            'Q0X48I	MC',
            '019F8L	Cat',
            '79I18Y	Investment',
            'L22M9J	Jochen',
            '599CO9	Zoliwe',
            '45C0O2	Nazila',
            'H99809	Alesandra',
            'O55WPA	Dennis',
            '88594R	Samuel',
            'ZC49DD	Pawan',
            '85MRF1	Bernd',
            'N9S4O3	Mario',
            'YJ1S1A	Yash',
            '15GDW4	Dariusz',
            '05BFV0	Rafal',
            '5FOSOU	Damian',
            '27Z863	Sandeep',
            '8N5BFU	Beata',
            'T4X12A	Steffi',
            '9R0U38	Steffi',
            '05XLK8	Steffi',
            'L79N3E	Steffi',
            'Y98P8X	Steffi',
            'U4C3VB	Steffi',
            '3IWCS9	Tom',
            'JNR223	LauraDaniel',
            'B3P3I4	Nicole',
            '4UM0SG	Christian',
            '8Q2SXX	Daniel',
            '50X00T	Bartosz',
            'X2776U	mattcaro',
            '679X9W	KrzysztofI',
            'E87PG9	AgnieszkaII',
            '5J27BR	AgnieszkaIII',
            '6YMQ1D	KRZYSZTOFIV',
            'C05CQ0	Christoph',
            '7CI7PN	Silvio',
            'R2K11K	Lisa',
            '10PV98	Jessica',
            '76Q58A	Nadine',
            '4EEUWY	AgnieszkaV',
            '627CLE	Anna',
            'OU3056	KRZYSZTOFVII',
            'Y6NN5N	KRZYSZTOFIX',
            '738Y87	Mohammed',
            'G0S8UQ	Maciej',
            '91R0YV	YANGSOON',
            'J473GO	Sascha',
            'E1DWDO	Global',
            'ERG0Y7	Friebe',
            '37CS64	Grzegorz',
            '3A05F9	Lisa',
            '4A2ZDM	Jessica',
            '9KNC19	Sheila',
            'B7227Y	Manuelstkkeins',
            '9W4539	Manuelstkkdrei',
            'AZT0N3	Manuelstkkzwei',
            'DZ0XI6	Michael',
            '7S2R94	Ahmad',
            'NN1978	Sarah',
            'FQ60S8	Anna',
            '5S4J74	Shahriat',
            'C5IG7J	FATMA',
            'FHK24Z	Mohammed',
            'DLF2ZS	Wojciech',
            'DR4238	Ingoaaa',
            'D5DAD9	Ingoaaa',
            '6K1V64	Ingoaa',
            'C99K5V	Simona',
            'GX3PD6	Raphael',
            '83B11F	Ingoc',
            'Q105B6	Ingoc',
            'X51495	Manfred',
            '1N0388	Tarquin',
            'BFV47G	Eva',
            'K8E82K	TomTom',
            '42A8M8	AARADHYA',
            '3NH4W7	Holger',
            '31T0GS	Rudra',
            'S5P689	Jakub',
            '9M86LJ	Klaus',
            '4CD68H	Sergej',
            'KQK4R6	Manfred',
            'Q2V2TE	Anila',
            '7U7R0O	kar',
            '68C3PM	Volkan',
            'VFQN78	Horst',
            'W00F3W	MaFa',
            '3RI17H	Madita',
            '3XRUA6	Matthias',
            'FDP2UB	Universal',
            'K8269O	Cep',
            'P44482	Khaled',
            '0GJGU2	Streakk',
            'Z01AY9	Stefanie',
            'Z78SKS	Arber',
            '1RM6GR	ANSHIKA',
            'MA22M8	AARAV',
            'S2L429	Krystyna',
            'VF14W6	jane',
            'F9K048	Manfred',
            '3GJ8UW	Emine',
            '17B1BB	Beppe',
            'HEC425	Paolo',
            'FTOK06	IZKA',
            'CKO593	Mirko',
            'RD9367	Mirko',
            '8YKD0T	Mariusz',
            '2U7716	Familie',
            '0R7RD8	Bieti',
            '5ZO1D0	Caterina',
            '3717BO	Monika',
            'H15Q7I	Gichura',
            'Q351FB	Holding',
            '44E78A	Peter',
            '0B317E	Udo',
            'XK923X	Elisa',
            'P92XPK	CHRISTOPHE',
            'AO99X9	PATRYCZEK',
            'W21OBE	Syed',
            '5T57MW	PATRYNIO',
            'F3HU0N	dominika',
            '37JP2T	dookyung',
            'DQ8RCO	MC',
            '9438AZ	Silvia',
            'AOI9V3	Maria',
            '56HTO4	Yvonne',
            'ZA0FGZ	Gisela',
            '74IRQ8	Bhushan',
            '11Y48G	CarloAlberto',
            '9H0PHT	CHRISTOPHE',
            '710W01	Shakina',
            'JAW8AJ	Mourya',
            '916B90	Rajkumar',
            'C07P04	Ben',
            '2EV419	Sandeep',
            '1Q2N5O	Vasile',
            '2ZO7HL	Stefan',
            '2X6O7S	Doctor',
            '42VY5B	Melissa',
            '90OWY1	Maher',
            '634AB6	Magdalena',
            '8DVZ33	Jonas',
            '48PUS9	Elizabeth',
            'XX2S4L	BONI',
            'ID5Q1L	AgnieszkaXI',
            '312PR1	AgnieszkaXI',
            '0EPFV1	Volker',
            'KQFO7D	AgnieszkaXII',
            'GQOA5Q	AgnieszkaXII',
            '7K9UVC	Kerstin',
            '01N4OT	dominik',
            '6KY88D	dominik',
            '1MCS54	KRZYSZTOFXIII',
            'EFBK5W	KRZYSZTOFXIII',
            'T1X4I3	Johanna',
            'X7699Z	Karola',
            '295627	Charly',
            '9KD242	Papilou',
            'LX352N	PATRY',
            '4500H7	Mau',
            '53TNJ5	Hellen',
            '6Y1Y08	Elin',
            '040T80	Jseb',
            'YEYT15	Cat',
            'OZ5ZPI	Cat',
            '31CS57	Kay',
            'R86CG7	Rani',
            'K59SOG	Fahad',
            '4T3ZH3	Massimo',
            'ZPM7KJ	ramazan',
            '291F00	RAJESH',
            '16ZUBY	Mirabelle',
            'TR9JT2	Mirabelle',
            'R6HT78	Mirabelle',
            'Q8S14R	Mirabelle',
            '7HWR31	Zbigniew',
            '8MH088	dominik',
            '0X87D0	Franz',
            'XGXXW8	Muzafferuc',
            'T6E2FB	Frank',
            'F01497	Senol',
            '021L5B	Hartmut',
            '5WR13V	Suleyman',
            'PERITS	Yvette',
            '95288A	Loretta',
            'RVECK3	Thomas',
            'NM2AK4	Daniela',
            '70957M	Micaela',
            'CA12GG	Suleyman',
            '925797	Andrea',
            'RNC1D2	Nathalie',
            '1SLRB3	Joshua',
            'BU406W	Saskia',
            'E7M794	Sabine',
            'BT4L09	Alexander',
            '8MW8RJ	Michaela',
            '23UCM5	Kevin',
            'QY013E	Claudia',
            'ZLH0VO	Claudia',
            '7P3D73	Ingrid',
            '3QEA38	Familie',
            'F83255	duru',
            'XIG6M9	Holding',
            'QMKE0P	Tolga',
            '5NZ1SL	Nico',
            '1WVB1E	Nico',
            'O4OBQ7	Nico',
            '10R44I	Nico',
            '0715M8	Nico',
            '8XY2G4	Nico',
            '6337PK	Joao',
            '542EAD	Medi',
            '03596F	Ewa',
            'W61672	Thomas',
            'AP3DHK	Emmanuella',
            '76EKIW	Jennifer',
            '72N5W7	Jennifer',
            'YPT67H	Billion',
            '1E3J18	Matthies',
            '4VU94X	Carl',
            '4KNGIA	Claudia',
            'M2QD3X	Jarek',
            '9B8V31	SeungEun',
            'FFYV0W	Jannis',
            'U7W7SX	Jannis',
            'PD95IB	Jannis',
            'G63M38	Jannis',
            'I0B3H0	Invest',
            '014XBO	Wenzeslaus',
            '04S7FO	Wenzeslaus',
            'G9X282	Rainer',
            'IS3N0U	Oliver',
            'HEMC7H	Georg',
            'VZV7NG	Emerald',
            'UP45V2	Basil',
            '3SBGO3	Luke',
            '8N76JM	Aslan',
            'TW6OMT	Silver',
            '6OAHXS	MC',
            'G5AV96	Max',
            '966581	Krzysztof',
            '47H4N8	Giovanni',
            '2C215Q	Giovanni',
            '790551	GIOVANNI',
            '060U80	GIOVANNI',
            'M6WYA1	Giovanni',
            'ORM3MM	Krystyna',
            'EIJ7V9	Krystyna',
            '6KMLXA	Francesco',
            'O09DC7	Alpha',
            '8KG6T8	Sonja',
            'RYI84R	Emilia',
            '5UW2G8	Emilia',
            'JX3335	CashflowMaster',
            'U2AI6V	Ajay',
            '62E61J	Sangeeta',
            '8JNO3F	Monika',
            '6KP98B	Amal',
            'PU81Q4	Global',
            '41154N	Andreas',
            'F5109Z	Andreas',
            '7D4TK4	Andreas',
            'SIFL2E	Bernhard',
            'V246A2	Anna',
            '573CQW	Lena',
            '26D941	AnnaLena',
            '8X3PB9	Albert',
            'JM2HHD	Daniela',
            '236V2T	buse',
            'D7AN4R	Albert',
            '6E8909	Eckhard',
            'R2I88F	Albert',
            'A16B4J	Christina',
            '32M4ZM	Willi',
            'Y7T73H	Selim',
            'K1D17P	Werner',
            '5RU4HE	Nico',
            'ROJC1T	MARIEGABRIELE',
            'SZ9DD6	Gamma',
            '2XREV6	steve',
            '7L0A89	john',
            'Z2YB2L	Khalid',
            '40VM8O	Colin',
            'A53XXN	Ross',
            '2A9V8P	sam',
            '5MR4I9	Iris',
            'XNJ4UO	Emmanuel',
            '0R437P	Tomasz',
            '1L590G	Ewa',
            '866DM2	Remigiusz',
            '15Q1NY	Remigiusz',
            '737IN0	Remigiusz',
            '0F85B9	Lisa',
            'JFYD15	Leon',
            'W44Q82	Kiki',
            '8Z3O26	Tomasz',
            'C9W44D	Marco',
            'T24481	Hendryk',
            'LUYYAJ	Sefa',
            '39391N	Zumra',
            '81B7YC	Philine',
            'U4S553	Eduardo',
            '2AD679	Kim',
            'R8OO6Z	Sophia',
            'FZ998P	Long',
            '78592W	Andreas',
            '8YADRQ	Julia',
            '31LTN5	Nils',
            '3R0131	Paul',
            'R45685	lajos',
            '84Q919	Miklos',
            '96F524	Miklos',
            '744171	Miklos',
            '2BUVB3	Miklos',
            '3BBU6M	Miklos',
            'U4LYDU	Miklos',
            '2U7621	Miklos',
            'L932V1	Miklos',
            '4927WR	Oscar',
            '32CTQ0	Thomas',
            '000B9B	Thomas',
            '9GK783	ares',
            '56Y23T	Thomas',
            '7ZO8LH	Miklos',
            'BWV116	ilhan',
            '9SP274	Thorsten',
            '762P27	SeungEun',
            '3QTB89	SeungEun',
            'Q0040A	SeungEun',
            '50Y415	Franca',
            '2H2I9P	Daniele',
            '43JV60	Martin',
            'C18015	Simone',
            'MCWR86	Simran',
            '07O25V	Altan',
            'KL5CZX	Dani',
            '274HV4	Hubert',
            '8517EU	CHRISTOPHE',
            'PZZSI7	Nicola',
            'H54767	MANSOO',
            '24PK19	Vincent',
            '0B11CS	Stefan',
            'KF60C8	Jonas',
            'M59L7W	Jonas',
            'GW1Z2B	Lina',
            'EGU8N7	Petra',
            'MMBRJV	Giuseppe',
            '9BHGC8	BASSABI',
            'P4O9C1	Pahelero',
            'M56MW5	Pahelero',
            'W0N696	richard',
            'VCO25B	victor',
            'TP79AC	vivian',
            'HAC7CJ	Oliver',
            'ZPG7YG	Oliver',
            'F7XM8U	Oliver',
            '81I9HN	Oliver',
            '2B8730	Oliver',
            'HKBB3L	Regina',
            'HRINN0	Clint',
            'L9Z1ES	Online',
            'Z8B218	Daniel',
            'KMN25B	Doreen',
            'UNNI8S	Ulvi',
            'OU2445	Muzeyyem',
            'ZEE1IM	Levent',
            '1E6ZCG	Muzeyyem',
            'B22IK7	lajos',
            'U617O9	Muzeyyem',
            '8YV3DN	Milena',
            '615078	Rudolfo',
            'Z777R8	Tomasz',
            '82LD5U	Tomasz',
            '9GT299	Tomasz',
            '3JUPQ6	Tomasz',
            'EWWEB8	Piotr',
            'G03W13	Piotr',
            '6277XB	Piotr',
            '5M3277	richard',
            'D8Q59W	Christof',
            '5J14P2	HUNG',
            '842RC7	Lucy',
            'X84FI4	Steffi',
            '50DU3W	Guy',
            '5MC0I3	Joel',
            '3756DY	Joel',
            '149SY8	Joel',
            'M24MRN	Sophia',
            '2348SQ	Sophia',
            'F6CED0	Oda',
            '67PQZ8	Florian',
            'KJQ6VP	Giovanni',
            '65XQ63	Joven',
            '76449H	Joven',
            '5P4U1I	ANTONIO',
            '721ZK0	SAQueen',
            '056XNH	Frank',
            '1I9730	Manfred',
            '0TT94Y	Canan',
            'Q4DGWI	Canan',
            '2W1701	Triyogeshwar',
            'LJ2V5L	Ilgar',
            '7G722F	Ilgar',
            '0V480G	Ilgar',
            'F2YKD0	Karin',
            'R10863	Ralph',
            '9RQ8FE	josiah',
            'TNPZS1	Matthias',
            'BTL4E7	HANSPETER',
            '2IXW7W	HANSPETER',
            '87H825	Elisabeth',
            'G818HJ	christine',
            '7Z6XU5	Wojciech',
            'DKOMZS	Sutathip',
            'DNR286	Sandeep',
            'IY3215	Matic',
            'Y2OV72	Ilgar',
            'N54626	Elise',
            '333VLB	Marlene',
            'J2V926	Marcelina',
            '5589R5	Niraj',
            '61T338	Dietmar',
            'PDET6K	Dietmar',
            '2XS71W	Sharwan',
            '11EB7H	Dietmar',
            'RPT0DV	Dietmar',
            '3O5M47	Dietmar',
            'OZXG66	Lil',
            'WUQE95	Odette',
            '0L147W	steve',
            'KX034M	john',
            '4E14QZ	Friday',
            'XFBPM4	Grzegorz',
            'JKT86F	MDMIZANURRAHMAN',
            '468751	Marco',
            'TN7976	Marco',
            'DU9Z39	Marco',
            'YHDM0X	Marco',
            'S49PE6	Marco',
            'LB1F98	Max',
            'OB4L0M	Shemuel',
            'JB60GC	ethan',
            '40STR9	hyunchoi',
            'AZQ866	hyunchoi',
            '41QH2G	HYUN',
            '906A87	hyunchoi',
            '17X15G	hyunchoi',
            'L0G8BW	hyunchoi',
            '6C403Z	hyunchoi',
            'LN6UI4	YUNGHON',
            'PK12W1	hyunchoi',
            'UUEHF1	Helmar',
            'X82FS6	Reiner',
            '5419TG	Manuelstkk',
            '42WQH1	Manuelstkk',
            'IVNBK2	Manuelstkk',
            'YNU02N	Faisal',
            'BB42T9	Merry',
            'N71VY3	ManfredEinsEins',
            '6GOR50	ManfredEinsEins',
            '120T9M	blessedlifeEiEi',
            '17KO1N	blessedlifeEiEi',
            'KIKP81	blessedlifeZwEi',
            'Q56AOQ	Anne',
            'SU4KTF	Lea',
            '20G88X	Leonard',
            '94X09B	Abdullah',
            '29I770	Reinhard',
            '82660U	Jase',
            '958OUR	PRO',
            'LM5WVB	STREAKK',
            '80T340	STREAKK',
            '6G5136	STREAKK',
            '252DS6	Cep',
            '56S63I	Cahit',
            '9E19FO	Cahit',
            '8578C9	Crypto',
            'P2F471	Korbinian',
            'P3D33G	Pierre',
            '4913M4	Tarik',
            'A5T654	Pankaj',
            '6C2S5A	Piotr',
            '6867C5	Florian',
            'U73382	Emilia',
            'DRM675	Emilia',
            '8JPL52	Emilia',
            'D3H1IK	Emilia',
            '49I384	Emilia',
            'B6B15Z	Emilia',
            'FG40E4	ethan',
            'G91SGU	Holger',
            'C95208	Jonas',
            '91271D	Dorota',
            'WRA4PP	Remigiusz',
            '2WZY44	Remigiusz',
            'AGXQ20	Remigiusz',
            '82543	Stefan',
            '511057	Stefan',
            '0SS5YN	Stefan',
            '52742O	Stefan',
            '9QD054	Gernot',
            '7C69E4	Christoph',
            'X4P95Q	mateutonicus',
            'L1MYIY	Ritvij',
            '1C5338	Dayne',
            '83S994	Sanjay',
            '3O8U75	Ricki',
            'HB2PA3	Takam',
            'WDBI59	Strategia',
            'T4C7VA	Strategia',
            '3E04SR	Layan',
            '8ZD43P	Haya',
            '9K4593	Antonio',
            '1MU433	hyunchoi',
            '0078M7	Heinz',
            '9X43J6	Silver',
            '74036E	Dmytro',
            '8Q2Q6I	panagiotis',
            'I82Q7B	Domenico',
            'C2974J	Dimitrios',
            'IXT8KE	Karl',
            '1UNSCP	Anja',
            '25HN6Y	Florian',
            '5Q5K8Y	hyunchoi',
            '5AL51N	Valentin',
            'OXO4D1	Tobias',
            'P0225S	Paula',
            'LQ8205	Pascal',
            '16FI57	Paula',
            '3KTD3M	Raylin',
            '1WLD6L	nedret',
            'DR7A8Z	duygu',
            '9SB55A	Frederik',
            '7SS1T7	Pascal',
            '8999B2	Crypto',
            'X336B6	Vegas',
            '5OX649	Piotr',
            'L3L4Y2	Suresh',
            '5XD830	Hossam',
            'ZL77YY	Pierre',
            'T894S2	Guido',
            'YL5SQ8	MC',
            'QLXL95	MC',
            'Z15468	Heiner',
            'P751EE	Global',
            '82W03Z	mustafa',
            '2K51D2	Daniel',
            'KMTZU7	Rafa',
            'F356AV	Alexxxx',
            'NC2649	Cemo',
            '0BFU9W	Diana',
            '1VY9A4	Ahil',
            'JG2A75	Dirk',
            '192J69	Dirk',
            '8U5HN5	Steffen',
            '504439	Steffen',
            '571F04	Marion',
            'GD6502	Cat',
            'M0J69L	Steffi',
            'O658S0	agamblessed',
            'XM5FGR	Anastasia',
            '5T6WJK	hyunchoi',
            '916GAM	Michaela',
            '904A5B	Rana',
            'YO2SPB	Jacek',
            '8VL19R	Shankar',
            'OD07FN	Dirk',
            'R5Q63U	Dirk',
            'KFASSO	Power',
            'GE3489	Amit',
            'EKVK4Q	Jacek',
            '1A1I9N	Ursula',
            '4MKI0X	Samuel',
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

        if (count == 5) {

            shuffle(maldivesNamesList);

            confetti.remove();      

            intervalHandle = setInterval(function () {
                
                $("#all-names").prepend('<h1 class="mb-0" id="headerNames">'+ maldivesNamesList[i++ % maldivesNamesList.length] +'</h1>')
            
            }, 15);

            slotMachine.play();


            
        }
        else {
            
            shuffle(namesList);
            confetti.remove();      

            intervalHandle = setInterval(function () {
                
                $("#all-names").prepend('<h1 class="mb-0" id="headerNames">'+ namesList[i++ % namesList.length] +'</h1>')
            
            }, 15);

            slotMachine.play();

        }
        

        // Check for click count

        if (count == 1) {

            $('.total-entry-count').hide()
            
            // $("#firstDraw").html('<b>Start 10th Draw</b>');
            
            // Show animation for forth winner
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                
                slotMachine.pause();
                winningSound.play();

                
                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won $1,000 infra</h1>')
                $('#firstDraw').hide()


                $("#winnerimage").html('<img src="" alt="">')
                $('#winnerDescription').html('You won $1,000 infra')

                setWinnerList.firstDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                    
                });

               
                      // Show modal
                $('#exampleModal').modal('show'); 


                winnerList.push({'winners':setWinnerList.firstDraw, 'prize':'$1,000 Infra'}) 

                setTimeout(function () {
                  
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                    
                }, 11000);
                

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">iPhone 15</span></h1>')

            }, 30000); // 30 seconds
            winningSound.pause();


            // // Show animation for first winner
            // setTimeout(function(){ 
            //     clearInterval(intervalHandle); 

            //     confetti.start();
                
            //     slotMachine.pause();
            //     winningSound.play();


            //     // $("#firstDraw").html('<b>Start 14th Draw</b>');
            //     $('#sunburst').show()
            //     $('#firstDraw').show()

            //     // get the winner name in a variable & push it to winnerList
            //     var winner = $('#headerNames').text();
                


            //     var winner = `${setWinnerList.firstDraw.code} ${setWinnerList.firstDraw.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.firstDraw.countryCode}.svg"></span>`;
            //     winnerList.push({'name':winner, 'prize':'iPad'}) 

            //     console.log(winnerList);
            //     // Pass winner list to the modal

            //     $("#winnername").html(winner)
            //     $("#winnerDescription").html('for winning iPad')
            //     $("#winnerimage").html('<img src="/assets/images/apple-ipad.gif" alt="">')
               
                
            //     // Show modal
            //     $('#exampleModal').modal('show'); 


            //     // On CLosing the modal update the text of block
            //     // $('#headerNames').text('Click below to start the 4th raffle')

            //     $("#all-names").empty();
                  
            //     // On CLosing the modal update the text of block
            //     $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">iPhone</span></h1>')

            // }, 30000);

            // winningSound.pause();
        }

        else if (count == 2) {
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            // $("#firstDraw").html('<b>Start 10th Draw</b>');
            
            // Show animation for forth winner
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                
                slotMachine.pause();
                winningSound.play();

                
                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won iPhone 15</h1>')
                $('#firstDraw').hide()


                $("#winnerimage").html('<img src="/assets/images/apple-apple-iphone.gif" alt="">')
                $('#winnerDescription').html('You won iPhone 15')

                setWinnerList.secondDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                    
                });

               
                      // Show modal
                $('#exampleModal').modal('show'); 


                winnerList.push({'winners':setWinnerList.secondDraw, 'prize':'iPhone 15'}) 

                setTimeout(function () {
                  
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                    
                }, 11000);
                

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">MacBook</span></h1>')

            }, 30000); // 30 seconds
            winningSound.pause();
        }

        else if (count == 3) {
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            // Code for the 3rd draw (Macbook)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won a MacBook</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="/assets/images/apple-macbook.gif" alt="">')
                $('#winnerDescription').html('You won a MacBook')

                setWinnerList.thirdDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.thirdDraw, 'prize':'MacBook'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                }, 11000);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Gold Ring</span></h1>')

            }, 30000); // 30 seconds
            winningSound.pause();
        }
        
        else if (count == 4) {
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            // Code for the 4th draw (Gold Ring)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won a Gold Ring</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="/assets/images/gold-ring.gif" alt="">')
                $('#winnerDescription').html('You won a Gold Ring')

                setWinnerList.fourthDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.fourthDraw, 'prize':'Gold Ring'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                }, 11000);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Ignite Turkiyea</span></h1>')

            }, 30000); // 30 seconds
            winningSound.pause();
        }
        
        else if (count == 5) {
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            // Code for the 5th draw (Ignite Turkiyea)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won Ignite Turkiyea</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="/assets/images/ignite-turkiyea.gif" alt="">')
                $('#winnerDescription').html('You won Ignite Turkiyea')

                setWinnerList.fifthDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.fifthDraw, 'prize':'Ignite Turkiyea'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                }, 11000);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Apple Kit</span></h1>')

            }, 40000); // 40 seconds
            winningSound.pause();
        }
        
        else if (count == 6) {
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            // Code for the 6th draw (Apple Kit)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won an Apple Kit</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="" alt="">')
                $('#winnerDescription').html('You won an Apple Kit')

                setWinnerList.sixthDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.sixthDraw, 'prize':'Apple Kit'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Next Draw');
                    $('#firstDraw').show()
                }, 11000);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">50Gm Gold </span></h1>')

            }, 30000); // 30 seconds
            winningSound.pause();
        }else if(count == 7){
            // Show animation for first winner
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();


                // $("#firstDraw").html('<b>Start 14th Draw</b>');
                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = $('#headerNames').text();
                


                var winner = `${setWinnerList.seventhDraw.code} ${setWinnerList.seventhDraw.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.seventhDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'50Gm Gold'}) 

                console.log(winnerList);
                // Pass winner list to the modal
                $("#maldivesWinnerList").empty();
                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning 50Gm Gold')
                $("#winnerimage").html('<img src="" alt="">')
               
                $("#maldivesWinnerList").empty();
                // Show modal
                $('#exampleModal').modal('show'); 


                // On CLosing the modal update the text of block
                // $('#headerNames').text('Click below to start the 4th raffle')

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">3N/4D Atlantis the Royal + Private Yacht tour</span></h1>')

            }, 30000);

            winningSound.pause();
        }

        else if(count == 8){
            // Show animation for eighth winner
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.eighthDraw.code} ${setWinnerList.eighthDraw.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.eighthDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'Trip to Las Vegas'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning Trip to Las Vegas')
                $("#winnerimage").html('<img src="/assets/images/las-vegas.gif" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">3N/4D Formula 1</span></h1>')

            }, 30000);

            winningSound.pause();
        }
        else if(count == 9){
            // Show animation for ninth winner
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.ninthDraw.code} ${setWinnerList.ninthDraw.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.ninthDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'3N/4D Formula 1'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning 3N/4D Formula 1')
                $("#winnerimage").html('<img src="/assets/images/formula-1.gif" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Rolex</span></h1>')

            }, 3000);

            winningSound.pause();
        }
        else if(count == 10){
            // Show animation for tenth winner
            $('.total-entry-count').hide()
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.tenthDraw.code} ${setWinnerList.tenthDraw.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.tenthDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'Rolex'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning Rolex')
                $("#winnerimage").html('<img src="/assets/images/rolex.gif" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">BMW</span></h1>')

            }, 30000);

            winningSound.pause();
        }else if(count == 11){
            $("#maldivesWinnerList").empty();
            $('.total-entry-count').show()
            $("#maldivesWinnerList").hide()
            $("#all-names").empty();
            confetti.remove();
            
            // Show animation for fifth winner
            setTimeout(function () { 
                
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                // $('#firstDraw').show()

                confetti.start();

                slotMachine.pause();
                winningSound.play();
                
                // var winner = $('#headerNames').text();

                // First Prize Winner 
        
                var setWinner = setWinnerList.bmwWinners.find(function(item) {
                    return item.winner === true;
                });

                var winner = `${setWinner.code} ${setWinner.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinner.countryCode}.svg"></span>`;

                winnerList.push({'name':winner, 'prize':'BMW'}) 

               
                
                // Send Final Name List to wheeel
                // wheel(teslaDraw);
                
                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations on reaching one step closer to winning a BMW.</h1>').slideDown()

                // tadaa_audio.play();

                generateWheel(setWinnerList.bmwWinners);

                passFinalNamesToDiv(setWinnerList.bmwWinners)


            }, 30000);
        }

        else if(count == 12){
            $("#maldivesWinnerList").empty();
            $('.total-entry-count').show()
            $("#maldivesWinnerList").hide()
            $("#all-names").empty();
            confetti.remove();
            
            // Show animation for fifth winner
            setTimeout(function () { 
                
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                // $('#firstDraw').show()

                confetti.start();

                slotMachine.pause();
                winningSound.play();
                
                // var winner = $('#headerNames').text();

                // First Prize Winner 
        
                var setWinner = setWinnerList.PorscheWinners.find(function(item) {
                    return item.winner === true;
                });

                var winner = `${setWinner.code} ${setWinner.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinner.countryCode}.svg"></span>`;

                winnerList.push({'name':winner, 'prize':'Porsche'}) 

               
                
                // Send Final Name List to wheeel
                // wheel(teslaDraw);
                
                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations on reaching one step closer to winning a Porsche.</h1>').slideDown()

                // tadaa_audio.play();

                generateWheel(setWinnerList.PorscheWinners);

                passFinalNamesToDiv(setWinnerList.PorscheWinners)

                $('#button').attr('data-final', '1');
                $('#button').attr('data-prize', 'Porche');


                // Send Winner List to Final Popup
                console.log(winnerList);
                winnerList.forEach(function(winner){
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


            }, 30000);
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

