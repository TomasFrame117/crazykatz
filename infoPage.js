function infoPage() {
    html = `
      <div class="page">
          <div class="header">
              <h1 class="title">Info om katter</h1>
          </div>
              <div class="menu">${mainMenu()}
          </div>
  
     <div class="mainContent">
     <button class="norskSkog" onclick="changePage('norskSkogKatt')"><p class="skogtxt">Norsk Skogkatt</p></button>
     <button class="siameseJPG" onclick="changePage('Siameser')"><p class="siamestxt">Siameser</p></button>
     <button class="curlJPG" onclick="changePage('Curl')"><p class="Curltxt">American Curl</p></button>
     <button class="ragdollJPG" onclick="changePage('Ragdoll')"><p class="Ragdolltxt">Ragdoll</p></button>
  
          
</div>
</div>
</div>

     `;
    return html;
  }
  function norskSkogKatt() {
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Norsk Skogkatt</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    
<div class="mainContent">
    <img class="infoImg" src="https://rajaamajid.files.wordpress.com/2014/10/sweet6.jpg?w=600"/>

    <div class="infoCat">${model.chooseCat[0].info}</div>
    
    <button class="gob1" onclick="changePage('infoPage')">&#8634;</button>
    <button class="gob2" onclick="changePage('Siameser')">&#8594;</button>
    

    
</div>

</div>`

  
    return html;
  }
  function Siameser() {
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Siameser</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>

<div class="mainContent">
    <img class="infoImg" src="https://indienikole.com/img/lifestyle/14/get-know-siamese.jpg"/>

    <div class="infoCat">${model.chooseCat[1].info}
</div>
<button class="gob" onclick="changePage('norskSkogKatt')">&#8592;</button>
    <button class="gob" onclick="changePage('infoPage')">&#8634;</button>
    <button class="gob" onclick="changePage('Curl')">&#8594;</button>
</div>
</div>`

  
    return html;
  }
  function Curl() {
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">American Curl</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>

<div class="mainContent">
    <img class="infoImg" src="https://cf.ltkcdn.net/cats/images/std/258488-800x515r1-american-curl-cat-breed-profile.jpg"/>

    <div class="infoCat">${model.chooseCat[2].info}
    </div>
    <button class="gob" onclick="changePage('Siameser')">&#8592;</button>
    <button class="gob" onclick="changePage('infoPage')">&#8634;</button>
    <button class="gob" onclick="changePage('Ragdoll')">&#8594;</button>
</div>
</div>`

  
    return html;
  }

  function Ragdoll() {
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Ragdoll</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>

<div class="mainContent">
    <img class="infoImg" src="https://thumbs.dreamstime.com/b/awesome-ragdoll-cat-beautiful-cushion-adorable-ragdoll-cat-beautiful-cushion-172354412.jpg"/>

    <div class="infoCat">${model.chooseCat[5].info}
    
</div>
<button class="gob" onclick="changePage('Curl')">&#8592;</button>
    <button class="gob" onclick="changePage('infoPage')">&#8634;</button>
    <button class="gob" onclick="changePage('Ragdoll')">&#8594;</button>
</div>
</div>`

  
    return html;
  }