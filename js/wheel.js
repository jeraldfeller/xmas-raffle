
// var padding = { top: 0, right: 0, bottom: 0, left: 0 },
// w = 400 - padding.left - padding.right,
// h = 400 - padding.top - padding.bottom,
// r = Math.min(w, h) / 2,
// rotation = 0,
// oldrotation = 0,
// picked = 100000,
// oldpick = [];
// color = d3.scale.category20();//category20c()
// var data;
// var svg;
// var container;
// var vis;
// var pie;
// var arc;
// var arcs;
const lottery_audio = document.getElementById('wheel');
const success_audio = document.getElementById('success');
const firework = document.getElementById('firework');

async function loadParticles(options) {
    await loadFireworksPreset(tsParticles);

    await tsParticles.load(options);

    document.body.style.overflowY = "scroll";
    document.querySelector('.github').style.top = "70%";
}

const configs = { 
    preset: "fireworks",
    background: {
        color: {
            value: "#E3001E"
        }
    }, 
};

// // loadParticles(configs);
// // jQuery(function(){
// //    jQuery('#tsparticles6709 img').click();
// //    console.log('Hello')
// // });
// // window.onload(function () {
// // $('#tsparticles6709 > img' ).click(function() {
// //   alert( "Handler for .click() called." );
// // });
 
// // });
// // -----wheel-spin-js------
// function wheel(finalNameList) {
    
    
//     data = finalNameList;
    

//     svg = d3.select('#spinwheel')
//         .append("svg")
//         .data([data])
//         .attr("xmlns", "http://www.w3.org/2000/svg")
//         .attr('viewBox', '0 0 ' + w + ' ' + w + '')
//         .attr("width", w)
//         .attr("height", h + padding.top + padding.bottom);

//     container = svg.append("g")
//         .attr("class", "chartholder")
//         .attr("transform", "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")");

//     vis = container.append("g");

//     pie = d3.layout.pie().sort(null).value(function (d) { return 1; });

//     // declare an arc generator function
//     arc = d3.svg.arc().outerRadius(r);

//     // select paths, use arc generator to draw
//     arcs = vis.selectAll("g.slice")
//         .data(pie)
//         .enter()
//         .append("g")
//         .attr("class", "slice");

//     arcs.append("path")
//         .attr("fill", function (d, i) { return color(i); })
//         .attr("d", function (d) { return arc(d); });

//     // add the text
//     arcs.append("text").attr("transform", function (d) {
//         d.innerRadius = 0;
//         d.outerRadius = r;
//         d.angle = (d.startAngle + d.endAngle) / 2;
//         return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius - 2) + ")";
//     }).attr('font-size', '17').attr('fill', '#ffffff').attr('margin-left', '20').attr('font-weight', '500')
//         .attr("text-anchor", "end")
//         .text(function (d, i) {
//             return data[i];
//         });
//     $('#spin').on("click", spin);

// container.append("circle")
//     .attr("cx", 0)
//     .attr("cy", 0)
//     .attr("r", 18)
//     .style({ "fill": "#ffffff" });
// }


// function spin(d) {
//     $('#spin').on("click", null);

//     lottery_audio.play();

//     //all slices have been seen, all done
    
//     //console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//     if (oldpick.length == data.length) {
//         console.log("done");
//         $('#spin').on("click", null);
//         return;
//     }
//     var ps = 360 / data.length,
//     pieslice = Math.round(1440 / data.length),
//     rng = Math.floor((Math.random() * 1440) + 360)*100;

//     rotation = (Math.round(rng / ps) * ps);
//     //console.log(rotation);

//     picked = Math.round(data.length - (rotation % 360) / ps) + 2;

//     picked = picked >= data.length ? (picked % data.length) : picked;

//     if (oldpick.indexOf(picked) !== -1) {
//         d3.select(this).call(spin);
//         return;
//     } else {
//         oldpick.push(picked);
//     }
//     rotation += 90 - Math.round(ps / 1);
//     var interval = setInterval(function () {
//         $('.wheeldots').addClass('active-dots');
//         setTimeout(function () {
//             $('.wheeldots').removeClass('active-dots');
//         }, 100);
//     });

//     vis.transition()
//         .duration(10000)
//         .attrTween("transform", rotTween)
//         .each("end", function () {
//             clearInterval(interval);

//             data[picked] = 'MCJ5Y6 Ne'
//             //mark question as seen\
//             d3.select(".slice:nth-child(" + (picked+1) + ") path")
//             //populate question
//             d3.select("#question h1").text(data[picked].question);
//             oldrotation = rotation;
//             console.log(data[picked + 1]);
//             lottery_audio.pause();
//             // Pass winner list to the modal

//             var winner = 'MCJ5Y6 NELO <span><img width="70" src="https://countryflagsapi.netlify.app/flag/DE.svg"></span>'
//             $("#winnername").html(winner)
//             $("#winnerDescription").html('for winning a Tesla Model Y')
//             $("#winnerimage").html('<img src="https://images.unsplash.com/photo-1651120210960-eabb36a3e764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" class="mx-auto" style="max-width:50%;" alt="">')
               
//             // Show modal
//             $('#exampleModal').modal('show');
//             success_audio.play()
//             // On CLosing the modal update the text of block
//             loadParticles(configs);
//             $('#headerNames').hide()
//             firework.play();

//             $('#exampleModal').on('hidden.bs.modal', function () {
//                 $('.github').show()
//             });

//             setTimeout(function () {
//                 // hide the modal
//                 $('#exampleModal').modal('hide');
//                 // Show final div
//                 $('.github').show()

//             }, 10000);
//         });
// }





// function rotTween(to) {
//     var i = d3.interpolate(oldrotation % 360, rotation);
//     return function (t) {
//         return "rotate(" + i(t) + ")";
//     };
// }


// // function getRandomNumbers() {
// //     var array = new Uint16Array(1000);
// //     var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
// //     if (window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function") {
// //         window.crypto.getRandomValues(array);
// //         console.log("works");
// //     } else {
// //         //no support for crypto, get crappy random numbers
// //         for (var i = 0; i < 1000; i++) {
// //             array[i] = Math.floor(Math.random() * 100000) + 1;
// //         }
// //     }
// //     return array;
// // }



// Cache our elements.
let wheel = document.getElementById('finalwheel')
let button = document.getElementById('button');



// Initialise a random number variable. As zero.
let  rando = 0;



// When we click the button...
spin_wheel = function () {
    let lastDraw = button.getAttribute('data-final');
    console.log(wheel);
    lottery_audio.play();
    $("#button").hide()
    // Generate a random number that'll determine how many degrees the wheel spins.
    // We want it to spin 8 times (2880 degrees) and then land somewhere, so we'll add between 0 and 360 degrees to that.
    // We add this to the already-created "rando" variable so that we can spin the wheel multiple times.
    rando = (!lastDraw ? (2880*40) + + 360 + 235 : (2880*40) + + 360 + 610)
    
    // And spin the wheel to the random position we just generated!
    // Gotta cover ourselves with vendor prefixes.
    wheel.style.webkitTransform = "rotate(" + rando + "deg)";
    wheel.style.mozTransform = "rotate(" + rando + "deg)";
    wheel.style.msTransform = "rotate(" + rando + "deg)";
    wheel.style.transform = "rotate(" + rando + "deg)";


    setTimeout(function() {
    
        if(!lastDraw){
            var data = setWinnerList.bmwWinners;
            var prize = 'BMW i8 Gran Coupe';
        }else{
            var data = setWinnerList.PorscheWinners;
            var prize = 'Porsche 718 Spyder';
        }
        var setWinner = data.find(function(item) {
            return item.winner === true;
        });

        var winner = `${setWinner.code} ${setWinner.name} &nbsp;<span><img width="70" src="https://countryflagsapi.netlify.app/flag/${setWinner.countryCode}.svg"> <small>(${setWinner.country})</small></span>`;



        $("#winnername").html(winner)
        $("#winnerDescription").html('for winning a ' + prize);
        if(prize == 'BMW i8 Gran Coupe'){
            $("#winnerimage").html('<img src="/assets/images/bmw.jpg" class="mx-auto" style="max-width:50%;" alt="">')    
        }else{
            $("#winnerimage").html('<img src="/assets/images/porsche.jpg" alt="">')
        }
        
        // Show modal
        $('#exampleModal').modal('show');

        $('#button').show()
        if(lastDraw){
            confetti.start();
            winningSound.play();
            lottery_audio.pause();
            success_audio.play()
            // On CLosing the modal update the text of block
          
            $('#headerNames').hide()
            $('#finalwheel').hide()
            
       

            

            $('#button').hide()

            $('#exampleModal').on('hidden.bs.modal', function () {
                $('.github').show()
            });


            setTimeout(function () {
                confetti.remove();
                // hide the modal
                $('#exampleModal').modal('hide');
                // Show final div
                $('.github').show()
                loadParticles(configs);
                firework.play();
               

            }, 10000);
        }else{
            lottery_audio.pause();


            confetti.start();
            winningSound.play();

            wheel.style.webkitTransform = "rotate(0deg)";
            wheel.style.mozTransform = "rotate(0deg)";
            wheel.style.msTransform = "rotate(0deg)";
            wheel.style.transform = "rotate(0deg)";
            // Show modal
            $('#exampleModal').modal('show'); 

            $("#all-names").empty();



            $("#name-rotation-block").show()
           
            $('#finalNameList').empty()
            $('#nextDraw').hide()
            $('#firstDraw').show()
            // On CLosing the modal update the text of block
            $('#all-names').html('<h1 class="mb-0" id="headerNames">Draw for the <span class="primary-color">Porsche 718 Spyder</span></h1>')
            $("#the-final-wheel").hide()
        }


    }, 20500);


}



// button.addEventListener("click", spin_wheel, false);

$('#button').on("click", spin_wheel);


