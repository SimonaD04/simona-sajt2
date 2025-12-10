 const button = document.getElementById("dropdownButton");
const menu = document.getElementById("dropdownMenu");

const display = document.getElementById("serviceDisplay");
const img = document.getElementById("serviceImg");
const title = document.getElementById("serviceTitle");
const text = document.getElementById("serviceText");


button.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});


menu.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {

        let service = li.dataset.service;

        if (service === "pedikir") {
            title.textContent = "Pedikir";
            img.src = "../slike/pedikir.jpg";
            text.textContent = "Relaks pedikir za meka, negovana stopala - 1500rsd.";
        }

        if (service === "gel") {
            title.textContent = "Gel lak";
            img.src = "../slike/nails9.jpg";
            text.textContent = "Dugotrajan gel lak sa visokim sjajem - 1300rsd.";
        }

        if (service === "izlivanje") {
            title.textContent = "Izlivanje noktiju";
            img.src = "../slike/izlivanje.jpg";
            text.textContent = "Izlivanje za savršenu dužinu i oblik noktiju - 1500rsd.";
        }
        if (service === "french") {
            title.textContent = "French";
            img.src = "../slike/nails6.jpg";
            text.textContent = "Uvek u trendu, klasičan i sofisticiran. + 200rsd.";
        }

        display.style.display = "block";

    });
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        menu.style.display = "none";
    }
});