let url = "https://randomuser.me/api/?results=100&noinfo&gender=male";
let btn = document.getElementById('dataBtn');
let nameCard = document.getElementById("nameCard");

btn.addEventListener('click', getData);

async function getData() {
    try {

        let fetchData = await fetch(url);
        let data = await fetchData.json();
        console.log(data);
        let output ="";

        data["results"].forEach(e => {
            output += `
                       <li>${e.name.title +" "+ e.name.first + " "+ e.name.last}</li>
                           `
        });

        nameCard.innerHTML = output;

    } catch (error) {
        console.log(error);
        nameCard.innerHTML = alert(error);
    }

}