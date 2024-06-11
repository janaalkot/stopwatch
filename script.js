const minutes = document.getElementById('min');
const seconde = document.getElementById('sec');
const milliseconde = document.getElementById('millesec');

const startbutton =document.getElementById('startbtn');
const stopbutton =document.getElementById('stopbtn');
const pausebutton =document.getElementById('pausebtn');
const resetbutton =document.getElementById('resetbtn');

const lapList = document.getElementById('laplist');

//time variables
let min =0;
let sec =0;
let millisec =0;
let interval;

startbutton.addEventListener('click',starttiming);
stopbutton.addEventListener('click',stoptiming);
pausebutton.addEventListener('click',pausetiming);
resetbutton.addEventListener('click',resettiming);

//functions
function starttiming()
{
    interval = setInterval(updatedtime,10);
    startbutton.disabled = true;
    pausebutton.disabled = false;
    stopbutton.disabled = false;
}

function stoptiming()
{
    clearInterval(interval);
    addlaplist();
    resettimedata();
    startbutton.disabled = false;
    stopbutton.disabled = true;
}

function pausetiming()
{
    clearInterval(interval);
    pausebutton.disabled = true;
    startbutton.disabled = false;
    stopbutton.disabled = false;
}

function resettiming()
{
    clearInterval(interval);
    resettimedata();
    startbutton.disabled = false;
}
function updatedtime()
{
    millisec++;
    if (millisec===100)
        {
            millisec=0;
            sec++;
            if(sec===60)
                {
                    sec=0;
                    min++;
                }
        }
        displaytimer();
}

function displaytimer()
{
    milliseconde.textContent = padTime(millisec);
    seconde.textContent = padTime(sec);
    minutes.textContent = padTime(min);
}

function padTime(time)
{
    return time.toString().padStart(2 ,'0');
}

function resettimedata()
{
    min = 0;
    sec = 0;
    millisec = 0;
    displaytimer(); 
}
function addlaplist()
{
    const laptime = `${padTime(min)} : ${padTime(sec)} : ${padTime(millisec)}`;
    const listitem = document.createElement('li');
    listitem.innerHTML = `<span>Lap ${lapList.childElementCount +1}: </span>${laptime}`;
    lapList.appendChild(listitem);
}