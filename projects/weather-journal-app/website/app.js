/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = 'f7109e7cf4bd6667584b2b3bd939a860';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zip = document.getElementById('zip').value;
    const content = document.getElementById('feelings').value;
    getWeather(baseURL, zip, key)
        .then(function (data) {
            postData('/add', {date: newDate, temp: data.main.temp, content})
        })
        .then(
            updateUI()
        )
}

//function to get data from API
const getWeather = async (baseURL, zip, key)=> {
    const url = `${baseURL}${zip}&appid=${key}`;
    const res = await fetch(url)
    try {
        const data = await res.json();
        console.log("weather data:", data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

//function to post data
const postData = async (url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await res.json();
        console.log("new data:", newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

//function to update UI
const updateUI = async () => {
    const req = await fetch('/all');
    try {
        const allData = await req.json();
        console.log(allData);
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temp;
        document.getElementById('content').innerHTML = allData.content;
    } catch(error) {
        console.log("error", error);
    }
}

