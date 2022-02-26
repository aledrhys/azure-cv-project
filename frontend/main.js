window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://getcvcounter.azurewebsites.net/api/GetCVCounter?code=NWCz1yGg4CTaF7c5DvAeKessC10nE9HJIctoNSPQAFH/lDy3EXbzFA=='
const localFunctionApiUrl = 'http://localhost:7071/api/GetCVCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}