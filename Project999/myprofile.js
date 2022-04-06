function myProfile() {
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