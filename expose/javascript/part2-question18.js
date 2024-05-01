// print out the current time every second
function showtime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(showtime, 1000);

