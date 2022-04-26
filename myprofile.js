function myProfile() {
    html = `
      <div class="page">
          <div class="header">
          <h1 class="title">Min profil</h1>
          </div>
              <div class="menu">${mainMenu()}</div>
  
      <div class="mainContent">
      <div class="mainContent"><button class="logut" onclick="changePage('loginPage')">Logg ut</button>
          
      <div class="profileContainar">
              <h3 class="profTitle">Profil informasjon</h3>
              
                
                  <input class="ab" type="text" onchange="model.app.currentUserName = this.value, model.input.regInfo.regFirstName = this.value" placeholder="${model.app.currentUserName}"/><br>
                  <input class="cd" type="text" onchange="model.input.regInfo.regLastName = this.value" placeholder="Etternavn:"/><br>
                   <input class="ef" type="text" onchange="model.input.regInfo.regMail = this.value" placeholder="E-post:"/><br>
                   <input class="gh" type="password" onchange="model.input.regInfo.regPassword = this.value" placeholder="Passord:"/><br>
                   <input class="ij" type="password" onchange="model.input.regInfo.regConfirmPW = this.value" placeholder="Gjenta Passord:"/> <br>
                  <button class="edit" onclick="NewUser(); EditUser()">Rediger</button>
                  
                  
                  <button class="legg" onclick="">Legg til profilbilde</button>
                  
                  <img class="blackCorn" src="https://media.istockphoto.com/photos/furry-british-cat-white-color-on-isolated-black-background-picture-id813499684?k=20&m=813499684&s=612x612&w=0&h=KYoDrE307ne0Emr3md0mbaKHmeor-E9bGA_gr4n08Tc=">
                  <img class="catBg" src="https://img.wallpapic.com/i9591-945-139/medium/katter-svart-katt-svarte-morket-bakgrunn.jpg"></img>
                  </div>
                  </div>
                  </div>
                  
                  `;
  
    return html;
  }
