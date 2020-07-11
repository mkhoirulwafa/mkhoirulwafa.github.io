//START OF COUNTDOWN


//Merconn
$('section').fireworks({
    sound: false, // sound effect
    opacity: 0.9,
    width: '100%',
    height: '100%'
});

//CountdownBirthday Func
var countDate = new Date('Nov 12, 2020 00:00:00').getTime(); //Ultah Doi

function birthDay() {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    birthDay();
}, 1000);

//END OF COUNTDOWN