updateView();
function updateView() {
let html = "";
let side = model.app.currentPage;
if (side == 'loginPage') html = loginPage();
if (side == 'regPage') html = regPage();
if (side == 'myProfile') html = myProfile();
if (side == 'homePage') html = homePage();

if (side == 'ratingsPage') html = ratingsPage();   
if (side == 'ratingsWindow') html = ratingsWindow(); 
if (side == 'calendarPage') html = calendarPage();
if (side == 'forumPage') html = forumPage();

if (side == 'humorPage') html = humorPage();
if (side == 'infoPage') html = infoPage();

document.getElementById('app').innerHTML = html;
} 

mainMenu();
function mainMenu() {
    return `
        <div class="menu"> 
        <button class="myProfile" onclick="changePage('myProfile')">${model.app.currentUserName}</button></br>

            <button class="a" onclick="changePage('homePage')">Hjem</button></br>
            <button class="b" onclick="changePage('ratingsPage')">Ratings</button></br>
            <button class="c" onclick="changePage('forumPage')">Katt Forum</button></br>
            <button class="d" onclick="changePage('infoPage')">Info om katter</button></br>
            <button class="e" onclick="changePage('humorPage')">Humor</button></br>
            
        </div>
    `;   
}

function loginPage() {
    html = ` 
    
    <div class="page">
    <img class="black2" src="https://cdn.99images.com/photos/wallpapers/animals-birds/cat%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lgpsk.jpg"/>
    <img class="black" src="https://cdn.99images.com/photos/wallpapers/animals-birds/cat%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lgpsk.jpg"/>
    <div class="container">
        <h2 class="LoginT">Logg inn</h2>
        <input class="log" type="text" onchange="model.input.userLogin = this.value" placeholder="E-post:"/> <br/>
        <input class="log2" type="password" onchange="model.input.userPassword = this.value" placeholder="Passord:"/><br/>
        <button class="in" onclick="logInUser()">Log inn</button></br>
        <button class="reg" onclick="changePage('regPage')">Registrer</button>
    </div>
    </div>
    `;
    return html;    
}

function regPage(){
    
    html = `
    
    <div class="page">
    <img class="blackcorner" src="https://wallpaperaccess.com/full/105676.jpg"/>
    <div class="container">
    <h1 class="hreg">Lag ny bruker</h1><br/>
    <div class="regContainer">
        <input class="Uname1" type="text" onchange="model.input.regInfo.regFirstName = this.value" placeholder="Fornavn:"/><br/>
        <input class="Lname1" type="text" onchange="model.input.regInfo.regLastName = this.value" placeholder="Etternavn:"/></br>
        <input class="UserEm1" type="text" onchange="model.input.regInfo.regMail = this.value" placeholder="E-post:"/></br>
        <input class="Upass1" type="text"  onchange="model.input.regInfo.regPassword = this.value" placeholder="Passord:"/></br>
        <input class="BUpass1" type="text" onchange="model.input.regInfo.regConfirmPW = this.value" placeholder="Gjenta Passord:"/></br>
       
       <select onchange="model.input.regInfo.regSelectBreed" class="selecto0r" name="kattid" >
       <option selected="" value="Default">Velg katterase</option>
       <option value="AF">Norsk Skogkatt</option>
       <option value="AL">Siameser</option>
       <option value="DZ">American Curl Langhår</option>
       <option value="AS">Maine coon</option>
       <option value="AD">Scottish Fold</option>
       <option value="AB">Ragdoll</option>
       </select></br>
       </div>
       <button class="reg" onclick="changePage('loginPage', NewUser())">Registrer</button></br>
       
     </div>
   </div>
    `;
    
    return html;
}

function homePage() {
    html = `
    <div class="page">
        <div class="header">
             <h1 class="title">CrazyCatPeople.no</h1>
             <button class="calendarBtn" onclick="changePage('calendarPage')">Kalender</button>
        </div>
        <div class="menu">${mainMenu()}
        </div>
        <div class="mainContent">
            <h1 class="title">Ukens Vinnere!</h1>`;
        
    for (let i = 0; i < model.chooseCat.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `
        <div class="rateCatImg">
        <img  class="pussyPics ${first}" src="${model.chooseCat[i].image}"></img>
        </div>
        `;
        
    }
    html += `
    </div>
    </div>`;
    return html;
} 

function myProfile(){
    html = `
    <div class="page">
        <div class="header">
        <h1 class="title">Min profil</h1>
        </div>
            <div class="menu">${mainMenu()}
            </div>

    <div class="mainContent">
    <img class="catBg" src="https://img.wallpapic.com/i9591-945-139/medium/katter-svart-katt-svarte-morket-bakgrunn.jpg"></img>
        <div class="profileContainer">
            <h3 class="profTitle">Profil informasjon</h3>
            <h3 class="profImgLoad">Legg til profil bilde</h3>
            <div class="mainContent">
                <input class="ab" type="text" onchange="" placeholder="Fornavn:"/><br>
                <input class="cd" type="text" placeholder="Etternavn:"/><br>
                 <input class="ef" type="text" placeholder="E-post:"/><br>
                 <input class="gh" type="text" placeholder="Passord:"/><br>
                 <input class="ij" type="text" placeholder="Gjenta Passord:"/> <br>
                <button class="edit" onclick="">Rediger</button><br>
                <div class="profPicContainer"
                <button class="browse" onclick="">Browse</button><br>
                <button class="legg" onclick="">Legg til</button><br>
                </div>
                
        </div>
        </div>
     </div>
     
     `;
    
    return html;
}

function ratingsPage() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Ratings</h1>
        </div>
        <div class="menu">${mainMenu()}</div>
    
        <div class="mainContent">
    `;

    for (let i = 0; i < model.chooseCat.length; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `
        <button class="rtbtn" onclick="model.input.selectedCatId = ${i};  changePage('ratingsWindow')">Rate</button></br>
        <div class="rateCatImg ${first}">
        <img class="pussyPics" src="${model.chooseCat[i].image}"><br>
        <div>${model.chooseCat[i].ratingInfo.rateOverall}</div>
        
        </img>
        </div>
        `;
    }
    html += `
        <div class="LRButtons">
            <button>Page Left</button>
            <button>Page Right</button></br>
                
        </div>
    </div>
    </div>`;
    return html;
}

function ratingsWindow() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Ratings</h1>
        </div>
            <div class="menu">${mainMenu()}
            </div>

        <div class="mainContent">
        <div>Hale</div>
        ${makeRadiobuttons("Tail")}
        
   
        <div>Pels</div>
        ${makeRadiobuttons("Fur")}

        <div>Hode</div>
        ${makeRadiobuttons("Head")}

        <div>Farge</div>
        ${makeRadiobuttons("Color")}

        <div>Ører</div>
        ${makeRadiobuttons("Ears")}

        <div>Helhet</div>
        ${makeOverAllRdioBtns("Overall")}
    
            </br>
    
            <button class="rate" onclick=" saveRating(); changePage('ratingsPage')">Rate</button>
        
        </div>
    </div>
    `;
    return html;
}
function makeRadiobuttons(verdi){
    let html = "";
    console.log(verdi)
    for(let i = 0; i < 10; i++){
        html += `<input onclick="model.input.ratingInfo.${verdi} = parseInt(this.value)" type="radio" value="${i+1}">${i+1}</input>`
    }
    return html;
}
function makeOverAllRdioBtns(verdi){
    let html = "";
    console.log(verdi)
    for(let i = 0; i < 5; i++){
        html += `<input class="" onclick="model.input.ratingInfo.Overall.${verdi} = parseInt(this.value)" type="radio" value="${i+1}">${i+1}</input>`
    }
    return html;
}
function saveRating(){
    let id = model.input.selectedCatId
    //let ratingCat = model.chooseCat[id].ratingInfo
    model.chooseCat[id].ratingInfo.rateTail.push(model.input.ratingInfo.Tail);
    model.chooseCat[id].ratingInfo.rateFur.push(model.input.ratingInfo.Fur);
    model.chooseCat[id].ratingInfo.rateHead.push(model.input.ratingInfo.Head);
    model.chooseCat[id].ratingInfo.rateColor.push(model.input.ratingInfo.Color);
    model.chooseCat[id].ratingInfo.rateEars.push(model.input.ratingInfo.Ears);
    model.chooseCat[id].ratingInfo.rateOverall.push(model.input.ratingInfo.Overall);

    
    //gjø dette for alle verdier

}
function makeRatings(){
    for(let i = 0; i < model.chooseCat[i].ratingInfo.rateTail.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateTail.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateTail.length;
         console.log(sum)
     }
     for(let i = 0; i < model.chooseCat[i].ratingInfo.rateFur.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateFur.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateFur.length;
         console.log(sum)
     }
     for(let i = 0; i < model.chooseCat[i].ratingInfo.rateHead.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateHead.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateHead.length;
         console.log(sum)
     }
     for(let i = 0; i < model.chooseCat[i].ratingInfo.rateColor.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateColor.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateColor.length;
         console.log(sum)
     }
     for(let i = 0; i < model.chooseCat[i].ratingInfo.rateEars.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateEars.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateEars.length;
         console.log(sum)
     }
     for(let i = 0; i < model.chooseCat[i].ratingInfo.rateOverall.length; i++){
        let sum =  model.chooseCat[i].ratingInfo.rateOverall.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[i].ratingInfo.rateOverall.length;
         console.log(sum)
     }
}

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
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div> 
             </div>
    
  </div>
    `;

    return html;
}

function infoPage() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Norsk Skogkatt</h1>
        </div>
            <div class="menu">${mainMenu()}
        </div>

   <div class="mainContent">
        <img class="infoCatImg" src="bilder/skogkatt.jpg"/>

        <div class="infoCat"><pre>
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
    

    </div>
    
   </div>
   `; 
    return html;
}

function humorPage() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Humor</h1>
            </div>
        <div class="menu">${mainMenu()}
            </div>
        <div class="mainContent">
                <p>Humor</p>
            </div>
    </div>
   `; 
    return html;
}
function calendarPage() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Events</h1>
            </div>
        <div class="menu">${mainMenu()}
            </div>
        <div class="mainContent">
        <input type="date"/>
        <input type="searchbar"/>
            </div>
    </div>
    `; 
     return html;
    
}



