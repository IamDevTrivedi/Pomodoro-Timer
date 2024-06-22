console.log('dev trivedi activated');

const audio = new Audio('1.mp3');
const audio2 = new Audio('23.mp3');


let option1 = document.querySelector(".option-1");
let option2 = document.querySelector(".option-2");
let option3 = document.querySelector(".option-3");

let clock1 = document.querySelector(".clock-1");
let clock2 = document.querySelector(".clock-2");
let clock3 = document.querySelector(".clock-3");

let startBtn1 = document.querySelector(".start-button-1");
let startBtn2 = document.querySelector(".start-button-2");
let startBtn3 = document.querySelector(".start-button-3");

let body = document.querySelector("body");
let content = document.querySelector(".content-box");

option1.addEventListener("click", () => {

    document.querySelector('title').innerText = "25:00 - Time to Focus!";

    option1.classList.add("active-option");
    option2.classList.remove("active-option");
    option3.classList.remove("active-option");

    clock1.classList.remove("hidden");
    clock2.classList.add("hidden");
    clock3.classList.add("hidden");

    body.style.backgroundColor = "#BA4949";
    content.style.backgroundColor = "#C15C5C";
    startBtn1.style.color = "#BA4949";
})

option2.addEventListener("click", () => {

    document.querySelector('title').innerText = "05:00 - Time for a Break!";

    option2.classList.add("active-option");
    option1.classList.remove("active-option");
    option3.classList.remove("active-option");

    clock2.classList.remove("hidden");
    clock1.classList.add("hidden");
    clock3.classList.add("hidden");

    body.style.backgroundColor = "#38858A";
    content.style.backgroundColor = "#4C9196";
    startBtn2.style.color = "#38858A";
})

option3.addEventListener("click", () => {

    document.querySelector('title').innerText = "15:00 - Time for a Break!";

    option3.classList.add("active-option");
    option2.classList.remove("active-option");
    option1.classList.remove("active-option");

    clock3.classList.remove("hidden");
    clock2.classList.add("hidden");
    clock1.classList.add("hidden");

    body.style.backgroundColor = "#397097";
    content.style.backgroundColor = "#4D7FA2";
    startBtn3.style.color = "#397097";
})

startBtn1.addEventListener("click", () => {
    handler1(1, startBtn1.innerText);
    startBtn1.innerText = startBtn1.innerText === "Start" ? "Pause" : "Start";
});

startBtn2.addEventListener("click", () => {
    handler2(2, startBtn2.innerText);
    startBtn2.innerText = startBtn2.innerText === "Start" ? "Pause" : "Start";
});

startBtn3.addEventListener("click", () => {
    handler3(3, startBtn3.innerText);
    startBtn3.innerText = startBtn3.innerText === "Start" ? "Pause" : "Start";
});

function convertToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60) + seconds;
}

{
    var updateTimer1;
    function handler1(option_index, methodStr) {
        if (methodStr === "Start") {
            let second = convertToSeconds(clock1.children[0].innerText);

            if (updateTimer1) {
                clearInterval(updateTimer1);
            }

            updateTimer1 = setInterval(() => {
                let min = Math.floor(second / 60);
                let sec = second % 60;
                second--;

                let displayOut = document.getElementsByClassName("1")[0];

                let displayMin = min.toString().padStart(2, '0');
                let displaySec = sec.toString().padStart(2, '0');

                console.log(displayMin + ":" + displaySec);

                if (displayOut) {
                    displayOut.innerText = `${displayMin}:${displaySec}`;
                }

                if (second < 0) {
                    audio.play();
                    displayOut.innerText = "00:10";
                    clearInterval(updateTimer1);
                    startBtn1.innerText = "Start";
                }

            }, 1000);
        } else {
            clearInterval(updateTimer1);
        }
    }
}

{
    var updateTimer2;

    function handler2(option_index, methodStr) {
        if (methodStr === "Start") {
            let second = convertToSeconds(clock2.children[0].innerText);


            if (updateTimer2) {
                clearInterval(updateTimer2);
            }

            updateTimer2 = setInterval(() => {
                let min = Math.floor(second / 60);
                let sec = second % 60;
                second--;


                let displayOut = document.getElementsByClassName("2")[0];

                let displayMin = min.toString().padStart(2, '0');
                let displaySec = sec.toString().padStart(2, '0');

                console.log(displayMin + ":" + displaySec);


                if (displayOut) {
                    displayOut.innerText = `${displayMin}:${displaySec}`;
                }

                if (second < 0) {
                    audio2.play();
                    displayOut.innerText = "05:00";
                    clearInterval(updateTimer2);
                    startBtn2.innerText = "Start";
                }

            }, 1000);
        } else {
            clearInterval(updateTimer2);
        }
    }
}


{
    var updateTimer3;

    function handler3(option_index, methodStr) {
        if (methodStr === "Start") {
            let second = convertToSeconds(clock3.children[0].innerText);


            if (updateTimer3) {
                clearInterval(updateTimer3);
            }

            updateTimer3 = setInterval(() => {
                let min = Math.floor(second / 60);
                let sec = second % 60;
                second--;


                let displayOut = document.getElementsByClassName("3")[0];

                let displayMin = min.toString().padStart(2, '0');
                let displaySec = sec.toString().padStart(2, '0');

                console.log(displayMin + ":" + displaySec);


                if (displayOut) {
                    displayOut.innerText = `${displayMin}:${displaySec}`;
                }

                if (second < 0) {
                    audio2.play();
                    displayOut.innerText = "15:00";
                    clearInterval(updateTimer3);
                    startBtn3.innerText = "Start";
                }

            }, 1000);
        } else {
            clearInterval(updateTimer3);
        }
    }

}
