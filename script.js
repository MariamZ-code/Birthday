let countDownDate = new Date("Nov 22 , 2023 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();
    let distance = countDownDate - dateNow;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60 )) / 1000);


    document.getElementById("Days").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("Hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("Mints").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("Sec").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (distance<0) {
        clearInterval(counter);
        document.getElementById("overLay").style.display = "block";
        document.getElementById("countDown").style.display = "none";
        document.getElementById("partyImg").style.display="none";
        
       
    }
}, 1000);
