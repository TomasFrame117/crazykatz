updateView();
function updateView() {
  let html = "";
  let side = model.app.currentPage;
  if (side == "loginPage") html = loginPage();
  if (side == "regPage") html = regPage();
  if (side == "myProfile") html = myProfile();
  if (side == "homePage") html = homePage();

  if (side == "ratingsPage") html = ratingsPage();
  if (side == "ratingsWindow") html = ratingsWindow();
  if (side == "calendarPage") html = calendarPage();
  if (side == "forumPage") html = forumPage();

  if (side == "humorPage") html = humorPage();
  if (side == "infoPage") html = infoPage();

  document.getElementById("app").innerHTML = html;
}

mainMenu();
function mainMenu() {
  return `
  ${model.modal}      
        <div class="menu"> 
        
        <button class="myProfile" onclick="changePage('myProfile')">${model.app.currentUserName}</button></br>

            <button class="a" onclick="changePage('homePage')">Hjem</button></br>
            <button class="b" onclick="changePage('ratingsPage')">Ratings</button></br>
            <button class="c" onclick="changePage('forumPage')">Katt Forum</button></br>
            <button class="d" onclick="changePage('infoPage')">Info om katter</button></br>
            <button class="e" onclick="changePage('humorPage')">Humor</button></br>
            
        </div>
      
        <time onclick="openModal()" datetime="2022-04-04" class="icon">04/04/22
        <em>Mandag</em>
        <strong>April</strong>
        <span>04</span></time></button>
       
        
    `;
}
function calendarPage() {
  html += `<div id="calendar"></div>`
  calendar.render();
          return html;
}
