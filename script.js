const url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){
    const response = await fetch(url);
    //Display loading screen till fetch request in running
    document.querySelector(".loader").style.display = "block";
    if(!response.ok){
        throw new Error("API response delayed");
    }
    //remove loader
    document.querySelector(".loader").style.display = "none";
    const data = await response.json();
    console.log(data);
    data.forEach(card => {
        let card_container = document.querySelector(".card-container");
        let div = document.createElement("div");
        card_container.appendChild(div);
        div.innerHTML = `
            <h1>${card.id}.${card.name}</h1>
            <p>Username : ${card.username}</p>
            <p>Email : ${card.email}</p>
            <p>Address : ${card.address.street} ${card.address.suite} ${card.address.city}-${card.address.zipcode}</p>
            <p>Phone no. : ${card.phone}</p>
            <p>Website : ${card.website}</p>
            <p>Company : ${card.company.name} ${card.company.catchPhrase} ${card.company.bs}</p>
        `
        div.classList.add("card");
    });
}

const fetchButton = document.getElementById("fetch");
fetchButton.addEventListener("click",() => fetchData(url));