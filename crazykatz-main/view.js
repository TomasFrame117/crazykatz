//let html = document.getElementById('app');

updateView();
function updateView() {
let html = "";
let side = model.app.currentPage;
if (side == 'loginPage') html = loginPage();
if (side == 'regPage') html = regPage();
if (side == 'myProfile') html = myProfile();
if (side == 'homePage') html = homePage();
//together
if (side == 'ratingsPage') html = ratingsPage();   
if (side == 'ratingsWindow') html = ratingsWindow(); 
if (side == 'calendarPage') html = calendarPage();
if (side == 'forumPage') html = forumPage();

if (side == 'infoPage') html = infoPage();

document.getElementById('app').innerHTML = html;
} 

mainMenu();
function mainMenu() {
    return `
    <div class="container"> 
    <button class="myProfile" onclick="changePage('myProfile')">Terje</button>
    
        <button class="homeMenu" onclick="changePage('homePage')">Hjem</button></br>
        <button class="homeMenu" onclick="changePage('ratingsPage')">Ratings</button></br>
        <button class="homeMenu" onclick="changePage('forumPage')">Katt Forum</button></br>
        <button class="homeMenu" onclick="changePage('infoPage')">Info om katter</button></br>
        <button class="homeMenu" onclick="changePage('humorPage')">Humor</button></br>
        <button class="homeMenu" onclick="changePage">Søk</button></br>
        <button class="homeMenu" onclick="changePage('calendarPage')">Calendar</button>
        </div>
    `;
    
}

function loginPage() {
    html = `
    <img class="blackC" src="bilder/black.jpg"/>
    <div class="box">
        <h2>Logg inn</h2>
        <input class="log" type="text" onchange="model.input.userLogin = this.value" placeholder="E-post:"/> <br/>
        <input class="log2" type="password" onchange="model.input.userPassword = this.value" placeholder="Passord:"/><br/>
        <button class="in" onclick="logInUser()">Log inn</button></br>
        <button class="reg" onclick="changePage('regPage')">Registrer</button>
    </div>`;
    
    return html;
    
    }



function homePage() {
    html = `${mainMenu()}`;
    html += `
    <h1>Crazy Katz</h1>
    <h1>Ukens Vinnere!</h1>
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
  // model.app.currentPage = 'homePage';
//    document.getElementById('app').innerHTML = html;
return html;
}

function regPage(){
    // html = `${mainMenu()}`;
    html = `
     <h1>Ny bruker</h1>
     <input class="Uname1" type="text" placeholder="Fornavn:"/><br/>
     <input class="Lname1" type="text" placeholder="Etternavn:"/></br>
     <input class="UserEm1" type="text" placeholder="E-post:"/></br>
     <input class="Upass1" type="text" placeholder="Passord:"/></br>
     <input class="BUpass1" type="text" placeholder="Gjenta Passord:"/></br>

    <button class="reg1" onclick="changePage('loginPage')">Registrer</button></br>
    `;
    return html;
}

function myProfile(){
    html = `${mainMenu()}`;
    html += `
    <h1>Min profil</h1>
    <div class="profileText">
    <h3 class="prinfo">Profil informasjon</h3>
    <h3 class="profbilde">Legg til profil bilde</h3>
    </div>
    <input class="Uname" type="text" onchange="nameSwitch()this.value" placeholder="Fornavn:"/>
    <input class="Lname" type="text" placeholder="Etternavn:"/>
     <input class="UserEm" type="text" placeholder="E-post:"/>
     <input class="Upass" type="text" placeholder="Passord:"/>
     <input class="BUpass" type="text" placeholder="Gjenta Passord:"/>

     <button class="edit" onclick="">Rediger</button>
     <button class="browse" onclick="">Browse</button>
     <button class="legg" onclick="">Legg til</button>

     
     
     `;
    
    return html;
    // <div class="container"> 
    //  <button class="myProfile" onclick="myProfile()"></button>
     
     
    //      <button class="homeMenu" onclick="homePage()">Hjem</button></br>
    //      <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
    //      <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
    //      <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
    //      <button class="homeMenu" onclick="humorPage()">Humor</button></br>
    //      <button class="homeMenu" onclick="searchPage()">Søk</button></br>
    //      <button class="homeMenu" onclick="calendarPage()">Calendar</button>
    //      </div>
}
    
function ratingsPage(){
    html = `${mainMenu()}`;
    html += `
    <img class="rateCatImg"></img>

    <div class="rateButtons">

    <button>Page Left</button>
    <button>Page Right</button>
    
    <button onclick="ratingsWindow()">Rate</button>
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
    return html;
}

function ratingsWindow() {
    html = `${mainMenu()}`;
    html += `
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
    
    `;
    return html;
}

function calendarPage(){
    html = `${mainMenu()}`;
    html += `
    <input type="date"/>
    <input type="searchbar"/>
    
    `;
    return html;
}

function forumPage(){
    html = `${mainMenu()}`;
    html += `
    <div class="forumBox">
    
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <div> forumslide</div>
        <input class="searchBar" type="searchbar"/>
    </div>
    
    `;
    //model.app.currentPage = 'homePage'
    return html;
}

function infoPage(){
    html = `${mainMenu()}`;
    html += `
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
   
   `; 
    return html;
}

