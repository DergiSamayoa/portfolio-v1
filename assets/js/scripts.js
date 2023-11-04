function getYear() {
    const dataYear = document.getElementById("copy");
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    dataYear.textContent = year;
}


console.dir(window);

console.dir(document)