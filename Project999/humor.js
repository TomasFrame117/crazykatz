function humorPage() {
    html = `
      <div class="page">
          <div class="header">
              <h1 class="title">Humor</h1>
              </div>
          <div class="menu">${mainMenu()}
              </div>
          <div class="mainContent">
        <button onclick="changePage('fnyvideos')" class="hmrbtn">Funny Cat Videos</button>
        <button onclick="changePage('fnypix')" class="hmrbtn1">Funny Cat Memes</button>          
             <img src="https://media.istockphoto.com/photos/furry-british-cat-white-color-on-isolated-black-background-picture-id813499652?k=20&m=813499652&s=612x612&w=0&h=U1wOmvDijig8IP2ngmvzcd-PM0OxanU6tkHFW06MUY8="/>
             <img src="https://media.istockphoto.com/photos/gorgeous-ginger-cat-on-isolated-black-background-picture-id1018078858?k=20&m=1018078858&s=612x612&w=0&h=N8HorY5Ipk-RibWqx3zPERGpdB0ZT8mIhCvkDPRql6A="/>
              </div>
      </div>
     `;
    return html;
  }
  function fnypix(){
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">CATS MEMES</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    
    <div class="mainContent">
    <img class="infoImg" src="https://www.rd.com/wp-content/uploads/2020/11/redo-cat-meme6.jpg?fit=696,696"/><br>
    
    <button class="gob4" onclick="changePage('hmr1')">&#8594;</button>
   


</div>
</div>`

  
    return html;
  }
  function hmr1(){
      html=`
      <div class="page">
      <div class="header">
          <h1 class="title">CATS MEMES</h1>
      </div>
          <div class="menu">${mainMenu()}
      </div>
      <div class="mainContent">
    <img class="infoImg" src="https://cattime.com/assets/uploads/gallery/25-funny-cat-memes/funny-cat-meme.jpg"/><br>
    <button class="gob4"onclick="changePage('fnypix')">&#8592;</button>
    <button class="gob4" onclick="changePage('hmr2')">&#8594;</button>
   
  </div>
  </div>`
  return html;
  }
  function hmr2(){
    html=`
    <div class="page">
    <div class="header">
        <h1 class="title">CATS MEMES</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    <div class="mainContent">
  <img class="infoImg" src="https://cattime.com/assets/uploads/gallery/25-funny-cat-memes/funny-cat-meme.jpg"/><br>
  <button class="gob4"onclick="changePage('hmr1')">&#8592;</button>
  <button class="gob4" onclick="changePage('hmr3')">&#8594;</button>
 
</div>
</div>`
return html;
}
function hmr3(){
    html=`
    <div class="page">
    <div class="header">
        <h1 class="title">CATS MEMES</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    <div class="mainContent">
  <img class="infoImg" src="https://i.pinimg.com/originals/e0/10/63/e0106389f474c19797208df30759b600.jpg"/><br>
  <button class="gob4"onclick="changePage('hmr2')">&#8592;</button>
  
 
</div>
</div>`
return html;
}

  function fnyvideos(){
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Funny videos</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>

<div class="mainContent">
<iframe width="660" height="415" src="https://www.youtube.com/embed/4vbi29WrLjQ" title="YouTube video player" frameborder="1vh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    
    
</div>
</div>`

  
    return html;
  }