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


  /*/REGPAGE/*/
  function regPage() {
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