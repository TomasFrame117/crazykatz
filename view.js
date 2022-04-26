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
  if (side == "uploadPage") html = uploadPage();
  
  if (side == "forumPage") html = forumPage();
  if (side == "humorPage") html = humorPage();
  if (side == "infoPage") html = infoPage();

  if (side == "norskSkogKatt") html = norskSkogKatt();
  if (side == "Siameser") html = Siameser();
  if (side == "Curl") html = Curl();
  if (side == "Ragdoll") html = Ragdoll();
  /*/HumorPage/*/
  if (side == "fnyvideos") html = fnyvideos();
  if (side == "fnypix") html = fnypix();
  if (side == "hmr1") html = hmr1();
  if (side == "hmr2") html = hmr2();
  if (side == "hmr3") html = hmr3();
  /*/ForumPages/*/
  if (side == "frm1") html = frm1();
  if (side == "frm2") html = frm2();
  if (side == "frm3") html = frm3();
  if (side == "frm4") html = frm4();
  if (side == "frm5") html = frm5();
  document.getElementById("app").innerHTML = html;
}
mainMenu();
function mainMenu() {
  return `
  <div class="menu"> 
  ${model.modal}      
  <button class="myProfile" onclick="changePage('myProfile')">${model.app.currentUserName}</button></br>
  <button class="a" onclick="changePage('homePage')">Hjem</button></br>
  <button class="b" onclick="changePage('ratingsPage')">Ratings</button></br>
  <button class="c" onclick="changePage('forumPage')">Katt Forum</button></br>
  <button class="d" onclick="changePage('infoPage')">Info om Katter</button></br>
  <button class="e" onclick="changePage('humorPage')">Humor</button></br>
        </div>
        <time onclick="openModal()" datetime="2022-04-04" class="icon">04/04/22
        <em>Kalender</em>
        <strong>Events</strong>
        <span>28</span></time>
       
        
    `;
}

function uploadPage() {
  html = `
  <div class="page">
      <div class="header">
          <h1 class="title">Upload</h1>
          </div>
      <div class="menu">${mainMenu()}</div>
      <div class="mainContent">
        <h2>Del dine bilder!</h2>
          <form id="upload_form" enctype="multipart/form-data" method="post">
           <input type="file" name="file1" id="file1" onchange="uploadFile()"><br>
            <progress id="progressBar" value="0" max="100" style="width:300px;"></progress>
      <h3 id="status"></h3>
      <p id="loaded_n_total"></p>
        </form>
  
          </div>
  </div>`;
  return html;
}
function _(app){
  return document.getElementById('app');
}