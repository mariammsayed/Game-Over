
export class UI{

    async showGames(games , category) {
        
        let gamesView =``;
        for(let i = 0 ; i < games.length ; i++){
            gamesView += ` <div class="col-lg-3 col-md-6 col-sm-12">
                    <div data-id="${games[i].id}"   class=" parent p-3 bg-transparent text-white border-1 border rounded border-dark">
                        <div class="photo">
                            <img src="${games[i].thumbnail}" alt="#" class="w-100 mb-2 img-game">
                        </div>
                        <div class="cap1-game d-flex justify-content-between align-items-center mb-2">
                            <span>${games[i].title}</span>
                            <span class="text-end p-1 rounded">Free</span>
                        </div>
                        <div class="cap2-game  text-center  mb-2">
                        <p class="text-muted">${games[i].short_description.split(" ", 8)}</p></div>
                        <div class=" card-footer bg-transparent d-flex justify-content-between">
                            <span class="text-footer p-1 rounded">${category}</span>
                            <span class="text-footer p-1 rounded">${games[i].platform}</span>
                        </div>
                    </div>
                </div>`
            
        }
        document.getElementById('data').innerHTML = gamesView;
        
    }

    async showDetails(game) {

        
        const details = document.querySelector(".details");
        details.innerHTML = `        <div class="header-details d-flex justify-content-between align-items-center">
            <h1>Details Game</h1>
            <span id="close"><i class="fa-solid fa-xmark"  style="color: #8A8B8D; font-size: 30px; cursor: pointer;"></i></span>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="img-details">
                    <img src="${game.thumbnail}" class="w-100" alt="#">
                </div>
            </div>
            <div class="col-md-8">
                <div class="content-details">
                    <h2>Title: Tarisland</h2>
                    <p>Category : <span class="bg-info p-1 rounded text-dark">${game.title}</span></p>
                    <p>Platform : <span class="bg-info p-1 rounded text-dark">${game.platform}</span></p>
                    <p>Status : <span class="bg-info p-1 rounded text-dark">${game.status}</span></p>
                    <p>${game.description}</p>
                    <a class="btn btn-outline-warning" href="${game.game_url}" target="_blank">Show Game</a>
                </div>
            </div>
        </div>`
        
        const btnClose = document.getElementById('close');
        
        await btnClose.addEventListener('click', () => {
            document.querySelector('.details').classList.add('d-none');
            document.querySelector('.games').classList.remove('d-none');
        })
    }


}