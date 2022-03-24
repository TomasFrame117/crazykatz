//let html = document.getElementById('app');
    

function show() {
    html = `
    
    <img class="blackC" src="bilder/black.jpg"/>
    <div class="box"><h2>Logg inn</h2>
    <input class="log" type="text" onchange="userName=this.value" placeholder="E-post:"/> <br/>
    <input class="log2" type="password" placeholder="Passord:"/><br/>
    <button class="in" onclick="godkjenLogin(),homePage()">Log inn</button></br>
    <button class="reg" onclick="regPage()">Registrer</button>
    </div>`;
    document.getElementById('app').innerHTML = html;
    //updateView();
    }
    
    // function showBar(){
    //     let html =
    // }



function homePage() {
    html = `
    <h1>Crazy Katz</h1>
    <h1>Ukens Vinnere!</h1>

    <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
    `;
    html +=`<div class"First-container">`
    for (let i = 0; i < model.chooseCat.length; i++) {
        // let first = i % 3 == 0 ? 'first' : '';
        html += `
        <div class="weeklyWin">
        <img class="pussyWinner" src="${model.chooseCat[i].image}"></img>
        </div>
        `;
    }
    html +=`</div>`
   model.app.currentPage = 'homePage';
   document.getElementById('app').innerHTML = html;
}

function regPage(){
    html = `
     <h1>Lag ny bruker</h1>
     <input class="Uname1" type="text" placeholder="Fornavn:"/><br/>
     <input class="Lname1" type="text" placeholder="Etternavn:"/></br>
     <input class="UserEm1" type="text" placeholder="E-post:"/></br>
     <input class="Upass1" type="text" placeholder="Passord:"/></br>
     <input class="BUpass1" type="text" placeholder="Gjenta Passord:"/></br>

    <button class="reg" onclick="homePage()">Registrer</button></br>
    `;
    document.getElementById('app').innerHTML = html;
}

function myProfile(){
    html = `
    <h1>Min profil</h1>
    <div class="profileText">
    <h3 class="prinfo">Profil informasjon</h3>
    <h3 class="profbilde">Legg til profil bilde</h3>
    </div>
    <input class="Uname" type="text" placeholder="Fornavn:"/>
    <input class="Lname" type="text" placeholder="Etternavn:"/>
     <input class="UserEm" type="text" placeholder="E-post:"/>
     <input class="Upass" type="text" placeholder="Passord:"/>
     <input class="BUpass" type="text" placeholder="Gjenta Passord:"/>

     <button class="edit" onclick="">Rediger</button>
     <button class="browse" onclick="">Browse</button>
     <button class="legg" onclick="">Legg til</button>

     <button class="myProfile" onclick="myProfile()">Terje</button>
     <div class="container"> 
     <button class="myProfile" onclick="myProfile()">Terje</button>
     
         <button class="homeMenu" onclick="homePage()">Hjem</button></br>
         <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
         <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
         <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
         <button class="homeMenu" onclick="humorPage()">Humor</button></br>
         <button class="homeMenu" onclick="searchPage()">Søk</button></br>
         <button class="homeMenu" onclick="calendarPage()">Calendar</button>
         </div>
     `;
     document.getElementById('app').innerHTML = html;
}
    
function ratingsPage(){
    html = `
    <img class="rateCatImg"></img>

    <div class="rateButtons">

    <button>Page Left</button>
    <button>Page Right</button>
    
    <button onclick="ratingsWindow()">Rate</button>
    </div>

    <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
    </div>
    `;

    for (let i = 0; i < model.chooseCat.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `
        <div class="rateCatImg ${first}">
        <img class="pussyPics" src="${model.chooseCat[i].image}"></img>
        </div>
        `;
    }
    document.getElementById('app').innerHTML = html;
}

function ratingsWindow() {
    html = `
    <img class="rateCatImg"></img>

    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    <input type="radio"/>
    
    <button class="rate">Rate</button>

    <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
    </div>
    
    `;
    
    document.getElementById('app').innerHTML = html;
}

function calendarPage(){
    html = `
    <input type="date"/>
    <input type="searchbar"/>

    <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
    
    `;
    document.getElementById('app').innerHTML = html;
}

function forumPage(){
    html = `
    <div class="forumBox">
    
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <input class="searchBar" type="searchbar"/>
    </div>

    <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
    `;
    //model.app.currentPage = 'homePage'
    document.getElementById('app').innerHTML = html;
}

function infoPage(){
   html = `
   <h1>Norsk Skogkatt</h1>
   <div class="infoText"><pre>
   Norsk skogkatt er en katterase som første gang ble anerkjent av FIFé i 1977, 
   men som har røtter som går langt tilbake i tid. 
   Som rase ble den skapt i Norge på 1930-tallet, 
   men den er trolig mer vanlig i Sverige.

   Opprinnelse og alder
   Rasen har sin opprinnelse i de langhårete skaukattene som fantes i Skandinavia. 
   De har vært kjent her i flere hundre år. 
   Det er kjent at genmutasjonen som gir lang pels oppsto i området mellom Svartehavet og Kaspihavet,
   så kanskje var det vikingene som fraktet med seg
   langhårede katter tilbake til Norden.
   </pre>
   </div>
   
   <img class="infoCatImg" src="bilder/skogkatt.jpg"/>
   <img class="infoCatImg"/>
   <img class="infoCatImg"></img>
   
   <div class="container"> 
    <button class="myProfile" onclick="myProfile()">Terje</button>
    
        <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br>
        <button class="homeMenu" onclick="calendarPage()">Calendar</button>
        </div>
   `; 
   
    
    
    // html +=`<div>`
    // // for(let i = 0; i < model.chooseCat[i].length; i++) {
    // //     html += `<img src="${model.chooseCat[i].image}">`
    // // };
    
    // html +=`</div>`
    document.getElementById('app').innerHTML = html;
    
}

updateView();
    function updateView() {
    const side = model.app.currentPage;
    if (side == 'loginPage') loginPage();
    if (side == 'regPage') regPage();
    if (side == 'myProfile') myProfile();
    if (side == 'homePage') homePage();
    //together
    if (side == 'ratingsPage') ratingsPage();   
    if (side == 'ratingsWindow') ratingsWindow(); 
    if (side == 'calendarPage') calendarPage();
    if (side == 'forumPage') forumPage();

    if (side == 'infoPage') infoPage();
    } 
