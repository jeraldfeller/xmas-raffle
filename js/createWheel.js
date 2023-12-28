let colors = ['#ff1616', '#ffa500', '#233dff', '#43b14b', '#ffd230', '#FF33AC', '#ABE203', '#FB805F', '#9C5A48', '#3388FF'];
function generateWheel(data){
    
    const canvas = document.getElementById('pieWheel');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2 - 10;

    let startAngle = 0;
    const totalValues = data.length;

    console.log(data)


    data.forEach((item, index) => {
        const sliceAngle = (Math.PI * 2) / totalValues;
        const endAngle = startAngle + sliceAngle;
    
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.fillStyle = getRandomColor(index);
        ctx.fill();
    
        // Draw code and name in the center of the slice
        const sliceMiddleAngle = startAngle + sliceAngle / 2;
        const textX = centerX + (radius / 2) * Math.cos(sliceMiddleAngle);
        const textY = centerY + (radius / 2) * Math.sin(sliceMiddleAngle);
        ctx.fillStyle = index % 2 === 0 ? '#fff' : '#000'; // Alternate between white and black
        ctx.font = 'bold 1.25rem Popins, sans-serif';
        ctx.textAlign = 'center'; // Added this line to center the text
        ctx.save(); // Save the current state
        ctx.translate(textX, textY); // Move to the center of the slice
        ctx.rotate(sliceMiddleAngle - Math.PI / 1); // Rotate to angle the text -45 degrees more
        ctx.fillText(item.code, -20, 0); // Adjusted the y position
        ctx.fillText(item.name, -20, 20); // Adjusted the y position
        ctx.restore(); // Restore to the previous state
    
        startAngle = endAngle;
    });
}


    // Function to generate random colors
   
    function getRandomColor(index) {
        const colorIndex = index % colors.length; // Use modulo to cycle through colors
        return colors[colorIndex];
    }
