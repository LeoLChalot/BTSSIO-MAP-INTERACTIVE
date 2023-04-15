import data from "./data.js";

let pinWrapper = document.querySelector("#pin_wrapper");
pinWrapper.style.padding = "2em";

var map = L.map("map").setView([48.85317244414032, 2.3493559567298306], 12);

for (let i = 0; i < data.length; i++) {
	let lat = data[i]["lat"];
	let lon = data[i]["lng"];
	let name = data[i]["name"];

	let pinCard = document.createElement("div");
	pinCard.classList.add("card");
	let title = document.createElement("h4");
	title.classList.add("name");
	title.textContent = name;

	pinCard.style.width = "150px";
	pinCard.style.height = "200px";
	pinCard.style.padding = "1em";
	pinCard.style.display = "flex";
	pinCard.style.border = "2px double rgba(184, 231, 255, 1)";
	pinCard.style.boxShadow = "9px 8px 0px 0px rgba(184, 231, 255, 1)";
	pinCard.style.justifyContent = "flex-start";
	pinCard.style.alignItems = "flex-start";
	title.style.fontSize = ".8em";

	pinCard.appendChild(title);
	pinWrapper.appendChild(pinCard);

	console.log(lat, lon, name);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	L.marker([lat, lon]).addTo(map).bindPopup(`${name}`).closePopup();

	pinCard.addEventListener("click", (event) => {
		console.log(event.target);
		map.setView([lat, lon], 13);
		L.marker([lat, lon]).addTo(map).bindPopup(`${name}`).openPopup();
		console.log(L.marker([lat, lon]));
		
	});
};

map.addEventListener("click", (event) => {
	var popup = L.popup().setLatLng(latlng).setContent("<p>Hello world!<br />This is a nice popup.</p>").openOn(map);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);
});

window.addEventListener('click', (event) => {
	console.log(event.target);
});

