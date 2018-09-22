var moment = require("moment-timezone");
console.log(moment.tz.names());

let drop = document.querySelector('.uk-select');
let data = [];
for(let i=389;i<417;i++){
    data.push(moment.tz.names()[i]);
}

data.map((zone)=>{
    let option = document.createElement("option");
    option.innerHTML = zone;
    drop.appendChild(option);
})