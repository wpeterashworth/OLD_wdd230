const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const year = document.querySelector("#date");
year.innerHTML = `&copy${currentYear}`;

let lastModifiedDate = document.querySelector("#lastModified")
lastModifiedDate.innerHTML = new Date(document.lastModified);