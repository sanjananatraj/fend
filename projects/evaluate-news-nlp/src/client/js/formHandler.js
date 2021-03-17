const urlRegex = https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)

function handleSubmit(event) {
    event.preventDefault()
    
    let formText = document.getElementById('name').value

    if(formText.match(urlRegex)) {
        console.log("::: Form Submitted :::")    
    
        postData('http://localhost:5000/all', {url: formText})
        .then(function(data) {
            console.log(data);
            document.getElementById('results').innerHTML += data.agreement + "<br>";
            document.getElementById('results').innerHTML += data.confidence + "<br>";
            document.getElementById('results').innerHTML += data.irony + "<br><br>";
        })
    } else {
        alert('Invalid URL');
    }
}

const postData = async (url = "", data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        console.log(newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export { handleSubmit }