fetch("https://api.escuelajs.co/api/v1/categories")
    .then(response => response.json())
    .then(data => {
        let card =
        `<div>
            
        </div>`

        for (let usuario of data) {
            card +=
        `<div class="card">
            <img src="${usuario.image}" class="card-img-top" alt="img">
            <div class="card-body">
            <h5 class="card-title">${usuario.name}</h5>
            </div>
        </div>`

        }
        document.getElementById("infoCard").innerHTML = card
    })