function homePage() {
    html = `
      <div class="page">

          <div class="menu">${mainMenu()}</div>
          <div class="mainContent">
              <h1 class="title">Ukens Vinnere!</h1>`;
  
    for (let i = 0; i < model.images.length; i++) {
      html += `
      
      <input type="checkbox" id="pic-1"/>
      <label for="pic-1" class="lightbox"><img src="${model.images[i].NorskSkogKatt}"></img></label>
      <input type="checkbox" id="pic-2"/>
      <label for="pic-2" class="lightbox"><img src="${model.images[i].MaineCoon}"></img></label>
      <input type="checkbox" id="pic-3"/>
      <label for="pic-3" class="lightbox"><img src="${model.images[i].Ragdoll}"></img></label>
      <input type="checkbox" id="pic-4"/>
      <label for="pic-4" class="lightbox"><img src="${model.images[i].AmericanCurl}"></img></label>
      <input type="checkbox" id="pic-5"/>
      <label for="pic-5" class="lightbox"><img src="${model.images[i].ScottishFold}"></img></label>
      <input type="checkbox" id="pic-6"/>
      <label for="pic-6" class="lightbox"><img src="${model.images[i].Siamese}"></img></label>
  
      <div class="grid1">
        <label for="pic-1" class="grid-item1"><img class="img1" src="${model.images[i].NorskSkogKatt}"></img></label>
        <label for="pic-2" class="grid-item1"><img class="img2" src="${model.images[i].MaineCoon}"></img></label>
        <label for="pic-3" class="grid-item1"><img class="img3" src="${model.images[i].Ragdoll}"></img></label>
        <label for="pic-4" class="grid-item1"><img class="img4" src="${model.images[i].AmericanCurl}"></img></label>
        <label for="pic-5" class="grid-item1"><img class="img5" src="${model.images[i].ScottishFold}"></img></label>
        <label for="pic-6" class="grid-item1"><img class="img6" src="${model.images[i].Siamese}"></img></label>
        </div>
  
  
      
    
      `;
      
    }
    html += `
      </div>
      
      </div>`;
      return html;
    
  }
