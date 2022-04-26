function homePage() {
    html = `
      <div class="page">
        <div class="header">
        <h1 class="title">Ukens Vinnere!</h1>
        
        </div>
        <div class="menu">${mainMenu()}</div>
            `;
              
              sortRatings(); 
           //model.images.highestScore.length
    
      html += `
      <input type="checkbox" id="pic-1"/>
      <label for="pic-1" class="lightbox"><img src="${model.sortedList[0].img}" alt="First Place"></label>
      <input type="checkbox" id="pic-2"/>
      <label for="pic-2" class="lightbox"><img src="${model.sortedList[1].img}" alt="Second Place"></label>
      <input type="checkbox" id="pic-3"/>
      <label for="pic-3" class="lightbox"><img src="${model.sortedList[2].img}" alt="Third Place"></label>
      
      <div class="grid1">
      <label for="pic-1" class="grid-item1"><img class="img1" src="${model.sortedList[0].img}" alt="First Place"></label>
      <div class="TotalScore1">Rating:${model.sortedList[0].score}</div> 
      <label for="pic-2" class="grid-item1"><img class="img2" src="${model.sortedList[1].img}" alt="Second Place"></label>
      <div class="TotalScore2">Rating:${model.sortedList[1].score}</div>
      <label for="pic-3" class="grid-item1"><img class="img3" src="${model.sortedList[2].img}" alt="Third Place"></label>
      <div class="TotalScore3">Rating:${model.sortedList[2].score}</div>
      
      </div>    
      `;
    
    html += `
      </div>
      
      </div>`;
      return html;
    
  }