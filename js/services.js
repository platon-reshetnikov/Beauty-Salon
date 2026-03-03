const services = [
    "Haircut - 500 UAH",
    "Beard & moustache trim - 600 UAH",
    "Evening & bridal hairstyles - 1800 UAH",
    "Hair colouring - 400 UAH",
    "Hair perm - 400 UAH",
    "Hair restoration - 1000 UAH",
    "Pedicure: classic / hardware / SPA - 700/900/1100 UAH",
    "SPA hand & foot care - 1500 UAH",
    "Gel-polish coating Shellac CND, Kodi - 1200 UAH",
    "Nail extension & strengthening with gel - 1600 UAH",
    "Makeup - 300-700 UAH",
    "Visage - 250 UAH"
];


const servicesList = document.getElementById("services-list");


services.forEach(service => {
    const listItem = document.createElement("li");
    listItem.textContent = service;
    servicesList.appendChild(listItem);
});
