//let html = document.getElementById('app');
    

function show() {
    document.getElementById('app').innerHTML = `
    <div>
        <h1>Crazy Cat People</h1><br/>
        <input class="log" type="text" placeholder="E-post:"/> <br/>
        <input class="log" type="password" placeholder="Passord:"/><br/>
        <button class="in" onclick="homePage()">Log Inn</button></br>
        <button class="reg" onclick="regPage()">Registrer</button>
    </div>
   
    `;
    updateView();
    }



function homePage() {
    document.getElementById('app').innerHTML = `
        <h1>Crazy Katz</h1>
       <div class="container"> <button class="homeMenu" onclick="homePage()">Hjem</button></br>
        <button class="homeMenu" onclick="ratingsPage()">Ratings</button></br>
        <button class="homeMenu" onclick="forumPage()">Katt Forum</button></br>
        <button class="homeMenu" onclick="infoPage()">Info om katter</button></br>
        <button class="homeMenu" onclick="humorPage()">Humor</button></br>
        <button class="homeMenu" onclick="searchPage()">Søk</button></br></div>
    `;
    model.app.currentPage = 'homePage';
    updateView();
}

function regPage(){
    document.getElementById('app').innerHTML = 
    `<h1>Lag ny bruker</h1>
     <input class="Uname1" type="text" placeholder="Fornavn:"/><br/>
     <input class="Lname1" type="text" placeholder="Etternavn:"/></br>
     <input class="UserEm1" type="text" placeholder="E-post:"/></br>
     <input class="Upass1" type="text" placeholder="Passord:"/></br>
     <input class="BUpass1" type="text" placeholder="Gjenta Passord:"/></br>
    <button class="register" onclick="homePage()">Registrer</button></br>
    `;
    updateView();
}

function myProfile(){
    document.getElementById('app').innerHTML = `
    <h1>Min profil</h1>
    <h3 class="prinfo">Profil informasjon</h3>
    <h3 class="profbilde">Legg til profil bilde</h3>
    <input class="Uname" type="text" placeholder="Fornavn:"/>
    <input class="Lname" type="text" placeholder="Etternavn:"/>
     <input class="UserEm" type="text" placeholder="E-post:"/>
     <input class="Upass" type="text" placeholder="Passord:"/>
     <input class="BUpass" type="text" placeholder="Gjenta Passord:"/>

     <button class="edit" onclick="">Rediger</button>
     <button class="browse" onclick="">Browse</button>
     <button class="legg" onclick="">Legg til</button>`
}
function ratingsPage(){
    document.getElementById('app').innerHtml='';
}
function calendarPage(){
    document.getElementById('app').innerHtml='';
}
function forumPage(){
    document.getElementById('app').innerHtml='';
}
function infoPage(){
    document.getElementById('app').innerHtml='';
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
    if (side == 'calendarPage') calendarPage();
    if (side == 'forumPage') forumPage();
    //christian
    if (side == 'infoPage') infoPage();
    } 
