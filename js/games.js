            import { UI } from "./ui.js";
            import { DetailsApi } from "./details.js";
            export class games {


                    constructor() {
                        this.gamesApi("mmorpg");

                        document.querySelectorAll(".menu a").forEach((link) => {
                        link.addEventListener("click", (e) => {
                            document.querySelector(".menu .active").classList.remove("active");
                            e.target.classList.add("active");
                            this.gamesApi(e.target.textContent);
                        });
                        });
                
                        this.ui = new UI();
                    }

            async gamesApi(category) {
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
                `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
                options
                );

                const data = await api.json();
                this.ui.showGames(data, category);
                this.Event();
                loading.classList.add("d-none");
            }

            Event() {
                
                let items = document.querySelectorAll(".parent");


                items.forEach((item) => {
                    item.addEventListener("click", () => {
                        this.showDetail(item.dataset.id);
                    });
                })
                
                

            }
        
            showDetail(idGame) {
                
                document.querySelector(".games").classList.add("d-none");
                document.querySelector(".details").classList.remove("d-none");
                const details = new DetailsApi(idGame);
            }
}




