function forumPage() {
    html = `
      <div class="page">
          <div class="header">
              <h1 class="title">Forum</h1>
          </div>
               <div class="menu">${mainMenu()}
              </div>
      
          <div class="mainContent">
              <input class="searchBar" type="text" placeholder="Søk..."/>
      
                <div class="forumContainer">
              <div class="grid-item">Vi har en jentepus på 2.5 år. Hun er svært lite kosete...<button class="a1">Les mer</button></div>
              <div class="grid-item">Kan katten høre at det er eieren som kommer gående?<button class="a1">Les mer</button></div>
              <div class="grid-item">Hvorfor hater katter å få vann på seg?<button class="a1">Les mer</button></div>
              <div class="grid-item">Hvor fort kan en katt løpe?<button class="a1">Les mer</button></div>
              <div class="grid-item">Hvor langt går katter?<button class="a1">Les mer</button></div> 
               </div>
               <img class="forumCat" src="https://media.istockphoto.com/photos/cat-picture-id465391017?k=20&m=465391017&s=612x612&w=0&h=H8qvhyq4whmRtUgA0kj3MpPhhORYFDP4w2nbWiWDxbo="/>
               <img class="CatForum" src="https://www.westend61.de/images/0000367126j/portrait-of-tabby-kitten-felis-silvestris-catus-in-front-of-black-background-MJOF000084.jpg"/>
    </div>
      `;
  
    return html;
  }