import { UI } from "./ui.js";


export class DetailsApi {
    constructor(id) {
        this.detailsApi(id);
    }



    async detailsApi(id) {
        const loading = document.querySelector(".spiner");
        loading.classList.remove("d-none");
        const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": "3d7d23c884mshd0531fe2b0347cfp1b30f7jsnbb61bb5f4cff",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
        };

        const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
        );

        const data = await api.json();
        let ui = new UI();
        ui.showDetails(data);
        loading.classList.add("d-none");
    }
}