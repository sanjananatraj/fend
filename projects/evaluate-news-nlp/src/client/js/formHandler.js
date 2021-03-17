import "regenerator-runtime/runtime";

function handleSubmit(event) {
    event.preventDefault()
    
    let formText = document.getElementById('name').value

    if(Client.validateURL(formText)) {
        console.log("::: Form Submitted :::")    
    
        postData('http://localhost:5000/all', {url: formText})
        .then(function(data) {
            console.log(data);
            document.getElementById('results').innerHTML += data.agreement + "<br>" + data.confidence + "<br>" + data.irony + "<br><br>";
        })
    } else {
        alert('Invalid URL');
    }
}

const postData = async (url = '', data = {}) => {
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