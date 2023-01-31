const API_KEY = "OKR3qJdMfieUmQunnrdEdTKn3K4";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resulsModal = new bootstrap.Modal(document.getElementById('resulstModal'));


document.getElementById("status").addEventListener('click', e => getStatus(e));

async function getStatus(e){
    const queryString = `${API_URL}?api_key = ${API_KEY}`;
    
    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok)
    console.log(data.expirety)
}
