const apikey='44c9a2bc2e37a86f7c2b1a6e75305f11';
let callfunction=function(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    fetch(url).then((reponse)=>reponse.json().then((data)=>{
        console.log(data);
    document.querySelector("#city").innerHTML =data.name;
    document.querySelector("#temp").innerHTML ="<i class='fas fa-thermometer-half'></i>"+data.main.temp+'°';
    document.querySelector("#humidity").innerHTML ="<i class='fas fa-tint'></i>"+data.main.humidity+'%';
    document.querySelector("#wind").innerHTML ="<i class='fas fa-wind'></i> "+data.wind.speed+'km/h';
    })).catch((err)=>console.log("Error: ",+err));
};
//ecouteur de d'evenement sur la soulution de la formulaire
document.querySelector('form').addEventListener('submit',function(element){
    element.preventDefault();
    let ville=document.querySelector('#inputcity').value;
    callfunction(ville);
});
callfunction('fes');



/*
fetch("https://zozor54-whois-lookup-v1.p.rapidapi.com/getDomainsFromIp?ip=216.58.213.142", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "zozor54-whois-lookup-v1.p.rapidapi.com",
		"x-rapidapi-key": "27ccb0bc35msh7c209f76a5afdffp151700jsn38ff721c288d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

*/
