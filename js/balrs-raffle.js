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
          "TSF7FR Hermann Wenning",
          "1N7H2D CEO WorldOneVision",
          "0VTU45 Hermann Wenning",
          "M62VES Hildegard Wenning",
          "75D2MS CEO WorldOneVision",
          "D8DY1P Hildegard Wenning",
          "8HIEEY laetitia wakantanka",
          "5140Q4 Manuel Gramoso",
          "CKRWV5 Manuel Gramoso",
          "Y8F665 Onani Loboo",
          "65MQIT Manuel Gramoso",
          "X7VQOF Sitrek Mitrekbir",
          "J9W24K Sitrek Mitrekbir",
          "3LO296 Omer Hayri",
          "CWI6CD Omer Hayri",
          "ME19R7 Cihan Aleyna",
          "520HO6 Cihan Aleyna",
          "2KK94P Katharina Paul",
          "U03Z7Z Bon Jovi",
          "G5K55K Bon Jovi",
          "104RD6 DIOM Maurice",
          "08WL57 Katharina MilitaruGohn",
          "005TS9 Letizia Zaehringer",
          "8OQ4F2 Nori MilitaruGohn",
          "B95ZCU Titzi MilitaruGohn",
          "6W34XV Letty Zaehringer",
          "RPE5HP Alfred Eins",
          "P288V3 Samy Porta",
          "443119 Clothild Varche",
          "AQMNXM Colbi Kara",
          "0P9G4P Steffi Katze",
          "1JRRYR Christine Traub",
          "U7WCK0 Annette Schmitt",
          "QDW5P1 Shadi Thogersen",
          "2ML2K1 Juergen Engel",
          "9Z0PUQ NilMahmoud ElDasouky",
          "4HHXK9 Rob Langhammer",
          "EJ058P Berthold Gruber",
          "8P23P7 Berthold Gruber",
          "ELD8JM Berthold Gruber",
          "ANEEY5 Berthold Gruber",
          "BUR6H4 Berthold Gruber",
          "XKB8OW Berthold Gruber",
          "4Q0N08 Berthold Gruber",
          "I1H80Y Berthold Gruber",
          "572N14 Cat Cat",
          "J6PKKG Florian Pittroff",
          "040RJ1 peterhaupt Steinle",
          "D212T3 Talata Hnafie",
          "J03F72 Brigitte Buchinger",
          "438M34 Daniel Wenk",
          "V6885B Jeanlouis Mora",
          "N440YE PUNAURAM MANDLE",
          "L2QGE7 Dominique Beres",
          "QHZ9KS Kevin Ninnemann",
          "JX5S98 Dora Joerg",
          "8F6QL8 Mia FB",
          "V1PLWA Birgit Buchsbaum",
          "761B2T Sukru Ogutur",
          "68E08X Maurizio DeBlasi",
          "S866M3 Team Lechfeld",
          "P79ETE JulieUN lapenseeLU",
          "Q0O75Q Levi Streakk",
          "6J0J6D Philou Doumayrou",
          "878D4K Fabienne Abegg",
          "70O9V8 EarnWorld MoonShip",
          "Y55G9K George Marsh",
          "D09M0Y Michael Birrer",
          "7DH9S8 Nadia Jouini",
          "UR6GZK EARN WORLD",
          "SOJFI8 Linn Boss",
          "4632M2 christian bulber",
          "Y2T2K5 Adi Streakk",
          "NG0AL3 Michael Kotsimbos",
          "1IZXF1 Monika Kotsimbos",
          "0PI239 Multe Vigdal",
          "Q2QPE1 Chapristy Lortho",
          "4H0K3U Ines Huber",
          "CRTJD7 Robin Hinte",
          "J7PTZL Aidan Faherty",
          "NA1R68 Francoise CHENELONG",
          "2TGXQ3 Team Engelwurz",
          "E718RJ Julie LEBRETON",
          "78PUIR MAX GAERTNER",
          "91T286 Sankt Jakob",
          "03918W Dani Sahne",
          "N44160 Maria Gruber",
          "UK37KJ Tanja Grabner",
          "722OMN Maria Gruber",
          "S3X77E Maria Gruber",
          "881IN2 Maria Gruber",
          "1L606N La Sella",
          "0Q1GOG Daniel Wenk",
          "1T3737 Rudolf Neudert",
          "6BRBFZ Dani Sahni",
          "R0402U Daniela Schwartz",
          "G39B2C Frisi Hellberg",
          "22GA84 Nassim Mansari",
          "041NMH Tim Spoden",
          "6E5AR9 Josef Petermichl",
          "3TQO21 Tobias Buchhop",
          "H9YI6J Saif Chouai",
          "50E6F3 Hanin Ahmed",
          "Q6124L Gundula ReiseggerDrei",
          "SZ9J7L Chapristy Lortho",
          "X0740W Vildan Tev",
          "F4SAB1 GEORGES BEKOMBO",
          "Z73R06 Bassem Maraoui",
          "XH098N Julie MULDER",
          "283HJZ Jochen Ewald",
          "JRR76B Jochen Ewald",
          "OTHO8U Richard Gascoine",
          "240V95 Lawrence Timb",
          "V2X728 Maja Persic",
          "H7F7F0 Manuel Gramoso",
          "MBFD1N Familie Schmitz",
          "C25IZ7 Juliefor Borres",
          "7JX0F1 Ibrahim Yousry",
          "EUD6LM Marko Bajec",
          "5QU61G Juliefor Borres",
          "COE23Y Sven Reimold",
          "1H69PC Sven Reimold",
          "M12UT4 Sven Reimold",
          "K8906Y Sven Reimold",
          "4OL6R9 Sven Reimold",
          "A7CRX9 Sven Reimold",
          "FTB8Y4 Jonastre Batstrand",
          "HN8V80 Lio Amort",
          "R941O5 Rudolf Neudert",
          "T7P1PC Mitja Zupanek",
          "9K4136 Lexi Silfverskiold",
          "J3Z09C Tim Haeusermann",
          "51B4Z6 Melanie Spoden",
          "I21CDB FRANCK SALIS",
          "J24D5U Gautam Choudhury",
          "7F0ND1 Sinem Koseuc",
          "CVW18P Better Bizz",
          "161852 Amany Effat",
          "06PR79 Krypto Elf",
          "11ELA6 Hesham Elseht",
          "LRDI2Y Mathreeux Ruel",
          "33G3L3 Jonasto Batstrand",
          "4O8E22 final finaleins",
          "09YF77 wow wow",
          "12Q476 DanyVII Hamon",
          "4O5H6U Benita Kunze",
          "QJHRBZ Patricia Brosius",
          "134T3C Michael Boehme",
          "A1S5T4 Paul May",
          "R64BWA Paul May",
          "68897C Hilde streakk",
          "6N5JGV Francuz Boguslawa",
          "4G8C30 Robert Lajnesek",
          "FE97RM Pushpendrasinh Kosamia",
          "0LA36W Tanja Grabner",
          "X1C3NE CRB SiebZehn",
          "6R41D8 Team BeachFour",
          "HG42OE Thomas Heiduczek",
          "994GZM drake Manpatilan",
          "5R73R6 Juergen Engel",
          "V2AU37 EarnWorld Albatros",
          "5Z070H Sonia Abcede",
          "JQVFUY Ervin Agrez",
          "WRL547 Louis IACCARINI",
          "9OH6PV Good Live",
          "TZOCI5 Inge Pysny",
          "08N68W Humaid Alzahmi",
          "117911 Louis Messi",
          "6951RL Rene Lehmann",
          "955VNJ Majda Vrecnak",
          "7X996B Doreen Schulte",
          "3CVH37 DianaEins Schuck",
          "5D002E Erika Kostanjsek",
          "042O3N DomeNine Springmann",
          "I8A128 DomeNine Springmann",
          "R1265Z DomeNine Springmann",
          "62A97N DomeNine Springmann",
          "D1LQ69 hanf drei",
          "X134UQ CHARLINE CHARLINE",
          "7R8AEU Toty Soso",
          "TF5GBM fuenfk fuenfk",
          "0NKJAF Excellium Earn",
          "1C36I7 EarnWorld SVA",
          "2R1010 Walid Shaker",
          "L68Q63 Tommy DXB",
          "915MQ5 Silke Bollgoehn",
          "590K41 Joerg Grossner",
          "RB17EJ Bernd Krueger",
          "9M493K HartmutC Belz",
          "JH86F8 HartmutC Belz",
          "KP4145 Leonie Schmehl",
          "5010W0 Earncrypto Invest",
          "03P45G Soraya Celik",
          "8MC888 Jeanlouis Mora",
          "ON5927 Jeanlouis Mora",
          "852L81 Sven Boetel",
          "42D3N7 Josef Horak",
          "EVCY9N George Marsh",
          "5TJR61 Claudia Moeser",
          "5V8B6R George Marsh",
          "9B42M2 Claudia Moeser",
          "U5IKZ5 Mathias Eins",
          "2MTQ4O Ruediger Wolf",
          "91LK0U Ruediger Wolf",
          "MQ2JGS Thomas Naef",
          "0K32V6 Zbigniew Wiacek",
          "03X00A Michael Poetter",
          "K71H6K Christian Zacherl",
          "BMFD82 Manfreddrei Eckert",
          "975AP9 Manfreddrei Eckert",
          "G6JH48 Saskia Gotowy",
          "GWT86N Anna Gotowy",
          "HEJ8TZ Diamond Asia",
          "1W584G Kerstin Gotowy",
          "95O2A7 Theodore Cabier",
          "GY2U1C Christian Zacherl",
          "9HKFVZ Claudia Moeser",
          "7YB0KE Excellium Invest",
          "IM8U65 Sascha Voh",
          "1XE615 AHMED ALQARNI",
          "45TDH7 Cat Cat",
          "H1T11J Rajesh Vansh",
          "COA3LX Elmalak Mekhael",
          "1T412J Trading Infra",
          "XTIC8P Marie Scheucher",
          "4N6GOV Gundula ReiseggerDrei",
          "66HHY9 Ramona Lehmann",
          "4EAG0X Franzi Hue",
          "A351OD ElMagic Earn",
          "132WH0 Eman Elsayed",
          "6U649H Ja Ni",
          "20Z6FK Tina Pretnar",
          "R9A1K6 AnnasechsAndrea earnworldAndrea",
          "O3D87C Rene Salupan",
          "ZH4B6O Anja Streakk",
          "0A7V05 Henio Mekle",
          "O45294 Sky Blue",
          "47ZQ0T Marco wBiMaIII",
          "736U0S Brigitte iBiBrVI",
          "6RG9NX Erich Radtke",
          "8P8K08 Largo Trading",
          "Y6UKJI Phillip Richter",
          "J71WD5 Knut Hantschel",
          "4Z771O Sylvio Doelz",
          "5JYFZI Bok Key",
          "6U0VWX Sajeertharan Jaykumar",
          "8X1SJ6 Sajeertharan Jaykumar",
          "0WEZS0 Tim Bald",
          "IW88G3 Ernest Schmid",
          "3FM5E5 Sylvio Doelz",
          "G81UX0 Daniel Michel",
          "4PF921 Familie Schmitz",
          "WN7KQ8 Daniel Wenk"
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

                
                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won $1,000 infra</h1>')
              
                $('#firstDraw').hide()


                $("#winnerimage").html('<img src="/assets/images/infra.jpg" alt="">')
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
                  
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                    
                }, modalRollTime);
                

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">iPhone 15</span></h1>')

            }, rollTime); // 30 seconds
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

            // }, 300);

            // winningSound.pause();
        }

        else if (count == 2) {
           
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
                  
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                    
                }, modalRollTime);
                

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">MacBook</span></h1>')

            }, rollTime); // 30 seconds
            winningSound.pause();
        }

        else if (count == 3) {
          
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

                $("#winnerimage").html('<img src="/assets/images/RtITeu.gif" alt="">')
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
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                }, modalRollTime);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Gold Ring</span></h1>')

            }, rollTime); // 30 seconds
            winningSound.pause();
        }
        
        else if (count == 4) {
          
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

                $("#winnerimage").html('<img src="/assets/images/gold-ring.jpg" alt="">')
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
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                }, modalRollTime);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Ignite Turkiye</span></h1>')

            }, rollTime); // 30 seconds
            winningSound.pause();
        }
        
        else if (count == 5) {
        
            $("#maldivesWinnerList").empty();
            // Code for the 5th draw (Ignite Turkiye)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won Ignite Turkiye</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="/assets/images/ignite.jpg" alt="">')
                $('#winnerDescription').html('You won Ignite Turkiye')

                setWinnerList.fifthDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.fifthDraw, 'prize':'Ignite Turkiye'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                }, modalRollTime);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Apple Kit</span></h1>')

            }, 40000); // 40 seconds
            winningSound.pause();
        }
        
        else if (count == 6) {
          
            $("#maldivesWinnerList").empty();
            // Code for the 6th draw (Apple Kit)
            setTimeout(function(){ 
                clearInterval(intervalHandle); 
                $('#sunburst').show()
                $('#firstDraw').show()
                confetti.start();

                slotMachine.pause();
                winningSound.play();
                $("#maldivesWinnerList").empty();

                $("#all-names").empty();
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations! You won an Apple Kit ( iPad + iPhone + Watch)</h1>')
                $('#firstDraw').hide()

                $("#winnerimage").html('<img src="/assets/images/apple-kit.jpg" alt="">')
                $('#winnerDescription').html('You won an Apple Kit ( iPad + iPhone + Watch)')

                setWinnerList.sixthDraw.forEach(function (data, i) {
                    var project_card = `<div class="col-md-2 mt-4"><div class="card"><div class="card-body text-center"><h5 class="mb-0">${data.name}<br>${data.lastName}<br><span><img width="56" src="https://countryflagsapi.netlify.app/flag/${data.countryCode}.svg">  <br> <small>(${data.country})</small> </span></h5></div></div></div>`;
                    setTimeout(function () {
                        $("#maldivesWinnerList").append(project_card).slideDown();
                    }, 1000 * i);
                });

                $('#exampleModal').modal('show'); 

                winnerList.push({'winners':setWinnerList.sixthDraw, 'prize':'Apple Kit ( iPad + iPhone + Watch)'}) 

                setTimeout(function () {
                    $("#firstDraw").html('Start');
                    $('#firstDraw').show()
                }, modalRollTime);

                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">50Gm Gold </span></h1>')

            }, rollTime); // 30 seconds
            winningSound.pause();
        }else if(count == 7){
            // Show animation for first winner
          
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
                


                var winner = `${setWinnerList.seventhDraw.code} ${setWinnerList.seventhDraw.name} ${setWinnerList.seventhDraw.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.seventhDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'50Gm Gold'}) 

                console.log(winnerList);
                // Pass winner list to the modal
                $("#maldivesWinnerList").empty();
                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning 50Gm Gold')
                $("#winnerimage").html('<img src="/assets/images/gold.jpg" alt="">')
               
                $("#maldivesWinnerList").empty();
                // Show modal
                $('#exampleModal').modal('show'); 


                // On CLosing the modal update the text of block
                // $('#headerNames').text('Click below to start the 4th raffle')

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">3N/4D Atlantis the Royal + Private Yacht tour</span></h1>')

            }, rollTime);

            winningSound.pause();
        }

        else if(count == 8){
            // Show animation for eighth winner
          
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()
                
                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.eightDrawA.code} ${setWinnerList.eightDrawA.name} ${setWinnerList.eightDrawA.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.eightDrawA.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'3N/4D Atlantis the Royal + Private Yacht tour'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning 3N/4D Atlantis the Royal + Private Yacht tour')
                $("#winnerimage").html('<img src="/assets/images/atlantis.jpg" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Trip to Las Vegas</span></h1>')

            }, rollTime);

            winningSound.pause();
        }

        else if(count == 9){
            // Show animation for eighth winner
          
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.eightDraw.code} ${setWinnerList.eightDraw.name} ${setWinnerList.eightDraw.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.eightDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'Trip to Las Vegas'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning Trip to Las Vegas')
                $("#winnerimage").html('<img src="/assets/images/las-vegas.jpg" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">3N/4D Formula 1</span></h1>')

            }, rollTime);

            winningSound.pause();
        }
        else if(count == 10){
            // Show animation for ninth winner
          
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.ninthDraw.code} ${setWinnerList.ninthDraw.name} ${setWinnerList.ninthDraw.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.ninthDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'3N/4D Formula 1'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning 3N/4D Formula 1')
                $("#winnerimage").html('<img src="/assets/images/f1.jpg" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Rolex</span></h1>')

            }, rollTime);

            winningSound.pause();
        }
        else if(count == 11){
            // Show animation for tenth winner
           
            $("#maldivesWinnerList").empty();
            setTimeout(function(){ 
                clearInterval(intervalHandle); 

                confetti.start();
                
                slotMachine.pause();
                winningSound.play();

                $('#sunburst').show()
                $('#firstDraw').show()

                // get the winner name in a variable & push it to winnerList
                var winner = `${setWinnerList.tenthDraw.code} ${setWinnerList.tenthDraw.name} ${setWinnerList.tenthDraw.lastName} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinnerList.tenthDraw.countryCode}.svg"></span>`;
                winnerList.push({'name':winner, 'prize':'Rolex'}) 

                console.log(winnerList);
                // Pass winner list to the modal

                $("#winnername").html(winner)
                $("#winnerDescription").html('for winning Rolex')
                $("#winnerimage").html('<img src="/assets/images/rolex.jpg" alt="">')
               
                // Show modal
                $('#exampleModal').modal('show'); 

                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">BMW i8 Gran Coupe</span></h1>')

            }, rollTime);

            winningSound.pause();
        }else if(count == 12){
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

                winnerList.push({'name':winner, 'prize':'BMW i8 Gran Coupe'}) 

               
                
                // Send Final Name List to wheeel
                // wheel(teslaDraw);
                
                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations on reaching one step closer to winning a BMW i8 Gran Coupe.</h1>').slideDown()

                // tadaa_audio.play();

                generateWheel(setWinnerList.bmwWinners);

                passFinalNamesToDiv(setWinnerList.bmwWinners)


            }, rollTime);
        }

        else if(count == 13){
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

                winnerList.push({'name':winner, 'prize':'Porsche 718 Spyder'}) 

               
                
                // Send Final Name List to wheeel
                // wheel(teslaDraw);
                
                $("#all-names").empty();
                  
                // On CLosing the modal update the text of block
                $('#all-names').html('<h1 class="mb-0" id="headerNames">Congratulations on reaching one step closer to winning a Porsche 718 Spyder.</h1>').slideDown()

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


            }, rollTime);
        }

        
        $('#exampleModal').on('hidden.bs.modal', function () {
            confetti.remove();
        });

        
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