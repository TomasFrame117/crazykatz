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
              <div class="TotalScore">Pussy Score:${model.chooseCat[i].ratingInfo.totalrating}</div>
              <div></div><button class="rtbtn" onclick="model.input.selectedCatId = ${i};  changePage('ratingsWindow')">Rate</button>
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


  function makeRadiobuttons(verdi) {
    let html = "";
    console.log(verdi);
    for (let i = 0; i < 10; i++) {
      html += `<input onclick="model.input.ratingInfo.${verdi} = parseInt(this.value)" type="radio" value="${
        i + 1
      }">${i + 1}</input>`;
    }
    return html;
  }
  function makeOverAllRdioBtns(verdi) {
    let html = "";
    console.log(verdi);
    for (let i = 0; i < 5; i++) {
      html += `<input class="" onclick="model.input.ratingInfo.Overall.${verdi} = parseInt(this.value)" type="radio" value="${
        i + 1
      }">${i + 1}</input>`;
    }
    return html;
  }
  function saveRating() {
    let id = model.input.selectedCatId;
    //let ratingCat = model.chooseCat[id].ratingInfo
    model.chooseCat[id].ratingInfo.rateTail.push(model.input.ratingInfo.Tail);
    model.chooseCat[id].ratingInfo.rateFur.push(model.input.ratingInfo.Fur);
    model.chooseCat[id].ratingInfo.rateHead.push(model.input.ratingInfo.Head);
    model.chooseCat[id].ratingInfo.rateColor.push(model.input.ratingInfo.Color);
    model.chooseCat[id].ratingInfo.rateEars.push(model.input.ratingInfo.Ears);
    model.chooseCat[id].ratingInfo.rateOverall.push(
      model.input.ratingInfo.Overall
    );
  
    //gjø dette for alle verdier
  }
  function makeRatings() {
    let id = model.input.selectedCatId;
    let totalsum = 0;
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateTail.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateTail.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateTail.length;
      console.log(sum);
      totalsum += sum;
    }
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateFur.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateFur.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateFur.length;
      console.log(sum);
      totalsum += sum;
    }
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateHead.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateHead.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateHead.length;
      console.log(sum);
      totalsum += sum;
    }
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateColor.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateColor.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateColor.length;
      console.log(sum);
      totalsum += sum;
    }
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateEars.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateEars.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateEars.length;
      console.log(sum);
      totalsum += sum;
    }
    for (let i = 0; i < model.chooseCat[id].ratingInfo.rateOverall.length; i++) {
      let sum = model.chooseCat[id].ratingInfo.rateOverall.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      sum = sum / model.chooseCat[id].ratingInfo.rateOverall.length;
      console.log(sum);
      totalsum += sum;
    }
    //totalsum = totalsum/6;
    model.chooseCat[id].ratingInfo.totalrating = totalsum;
  }