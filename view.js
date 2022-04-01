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
             <h1 class="title1">CrazyCatPeople.no</h1>
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
    
        <div class="profileContainar">
            <h3 class="profTitle">Profilinformasjon</h3>
            
            
                <input class="ab" type="text" onchange="" placeholder="Fornavn:"/><br>
                <input class="cd" type="text" placeholder="Etternavn:"/><br>
                 <input class="ef" type="text" placeholder="E-post:"/><br>
                 <input class="gh" type="text" placeholder="Passord:"/><br>
                 <input class="ij" type="text" placeholder="Gjenta Passord:"/> <br>
                <button class="edit" onclick="">Rediger</button>
                
                <button class="legg" onclick="">Legg til profilbilde</button>
                
                <img class="blackCorn" src="https://media.istockphoto.com/photos/furry-british-cat-white-color-on-isolated-black-background-picture-id813499684?k=20&m=813499684&s=612x612&w=0&h=KYoDrE307ne0Emr3md0mbaKHmeor-E9bGA_gr4n08Tc=">
                <img class="catBg" src="https://img.wallpapic.com/i9591-945-139/medium/katter-svart-katt-svarte-morket-bakgrunn.jpg"></img>
                </div>
                </div>
                </div>
                
                `;
                // <button class="browse" onclick="">Browse</button><br>
    
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
        // let first = i % 3 == 0 ? 'first' : ''; ${first}
        html += `
        <div class="rateCatImg">
            <img class="pussyPics" src="${model.chooseCat[i].image}"/>
            <div>${model.chooseCat[i].ratingInfo.totalrating}</div>
            <button class="rtbtn" onclick="model.input.selectedCatId = ${i};  changePage('ratingsWindow')">Rate</button>
        </div>

        
        `;
    }
    html += `
        <div class="LRButtons">
            <button class="left">Page Left</button>
            <button class="right">Page Right</button>
                
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
    
            <button class="rate" onclick=" saveRating(); makeRatings(); changePage('ratingsPage')">Rate</button>
        
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
    let id = model.input.selectedCatId
    let totalsum = 0;
    for(let i = 0; i < model.chooseCat[id].ratingInfo.rateTail.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateTail.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateTail.length;
         console.log(sum)
         totalsum += sum
     }
     for(let i = 0; i < model.chooseCat[id].ratingInfo.rateFur.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateFur.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateFur.length;
         console.log(sum)
         totalsum += sum
     }
     for(let i = 0; i < model.chooseCat[id].ratingInfo.rateHead.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateHead.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateHead.length;
         console.log(sum)
         totalsum += sum
     }
     for(let i = 0; i < model.chooseCat[id].ratingInfo.rateColor.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateColor.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateColor.length;
         console.log(sum)
         totalsum += sum
     }
     for(let i = 0; i < model.chooseCat[id].ratingInfo.rateEars.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateEars.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateEars.length;
         console.log(sum)
         totalsum += sum
     }
     for(let i = 0; i < model.chooseCat[id].ratingInfo.rateOverall.length; i++){
        let sum =  model.chooseCat[id].ratingInfo.rateOverall.reduce((partialSum, a) => partialSum + a, 0);
        sum = sum/model.chooseCat[id].ratingInfo.rateOverall.length;
         console.log(sum)
         totalsum += sum
     }
     //totalsum = totalsum/6;
     model.chooseCat[id].ratingInfo.totalrating = totalsum;

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

function infoPage() {
    html = `
    <div class="page">
        <div class="header">
            <h1 class="title">Norsk Skogkatt</h1>
        </div>
            <div class="menu">${mainMenu()}
        </div>

   <div class="mainContent">
        <img class="infoImg" src="bilder/skogkatt.jpg"/>

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
            <h1 class="title">Humor (work in progress)</h1>
            </div>
        <div class="menu">${mainMenu()}
            </div>
        <div class="mainContent">
                <p>Humor</p>
    <img class="another" src="https://s1.1zoom.me/big0/132/Cats_Black_background_White_Glance_526523_682x1024.jpg"/>
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



