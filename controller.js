function changePage(side) {
  model.app.currentPage = side;
  updateView();
}
function logInUser() {
  model.users.forEach((users, index) => {
    let currentUser = model.users[index];
    console.log(currentUser);
    if (
      currentUser.mail == model.input.userLogin &&
      currentUser.password == model.input.userPassword
    ) {
      // setter current user til den innloggede brukeren
      model.app.currentUserName = model.users[index].firstName;
      model.app.currentUserID = model.users[index].id;
      model.app.currentPage = "homePage";
      //kalle på view
      console.log(model.users[index]);
      //sette hvilken side
    }
    // else{(model.app.userLogin == null);
    //     alert("Nice try")

    //     return true;
    // }
  });
  updateView();
}

function NewUser() {
  let newUser = {};

  (newUser.id = model.userId),
    (newUser.firstName = model.input.regInfo.regFirstName),
    (newUser.lastName = model.input.regInfo.regLastName),
    (newUser.mail = model.input.regInfo.regMail),
    (newUser.password = model.input.regInfo.regPassword),
    (newUser.password = model.input.regInfo.regConfirmPW),
    (newUser.chosenCat = model.input.regInfo.regSelectBreed),
     model.userId++;
     model.users.push(newUser);

//regInfo: {
  //id: null,
    //model.app.currentPage = "homePage";
  updateView();
}

function EditUser() {
  if(model.app.currentUserName == '') 
  alert("Vennligst skriv en ny bruker navn. ")
  if(model.input.regInfo.regPassword != model.input.regInfo.newPassword)
  {model.input.regInfo.regPassword == model.input.regInfo.newPassword}
  
  alert('Passordet har blitt lagret!')
   updateView();
}

function sortRatings() {
  model.sortedList =[];
  for (let i = 0; i < model.chooseCat.length; i++) {
    let objekt = {}
    objekt.id = model.chooseCat[i].id 
    objekt.img = model.chooseCat[i].image
    objekt.score = model.chooseCat[i].ratingInfo.totalrating
    model.sortedList.push(objekt)
  }
  model.sortedList.sort(compareScore);
}

function compareScore( a, b )
  {
  if ( a.score > b.score){
    return -1;
  }
  if ( a.score < b.score){
    return 1;
  }
  return 0;
}

function rate1perUser(catImageId) {
  // let usersWhoHaveRated = model.chooseCat.usersWhoHaveRated;
  let currentUserID = model.app.currentUserID;
  if(model.users[currentUserID-1].allreadyRated.includes(model.chooseCat[catImageId].id)){
    alert("Du har allerede vurdert denne katten.")
    return;
  }
    console.log ('already rated')
    model.users[currentUserID-1].allreadyRated.push(model.chooseCat[catImageId].id);
  // sjekke om bruker har allerede rata --> c
  changePage('ratingsWindow')
}

function submitToForum() {
  let output = model.input.output;
  let textBox = model.input.forum.textBoxOne;
  for (let index = 0; index < textBox.length; index++) {
    if (textBox != '') {
      output.push(textBox[index])}  
  }
  updateView();
}
function submitToForum2() {
  let output = model.input.output;
  let textBox = model.input.forum.textBoxTwo;
  for (let index = 0; index < textBox.length; index++) {
    if (textBox != '') {
      output.push(textBox[index])}  
  }
  updateView();
}

/*/UploadBtn/*/
function _(el) {
  return document.getElementById(el);
}

function uploadFile() {
  var file = _("file1").files[0];
  // alert(file.name+" | "+file.size+" | "+file.type);
  var formdata = new FormData();
  formdata.append("file1", file);
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false);
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);
  ajax.open("POST", "file_upload_parser.php"); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
  //use file_upload_parser.php from above url
  ajax.send(formdata);
}

function progressHandler(event){
	_("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
	var percent = (event.loaded / event.total) * 100;
	_("progressBar").value = Math.round(percent);
	_("status").innerHTML = Math.round(percent)+"% uploaded... please wait";
}


function completeHandler(event){
	_("status").innerHTML = event.target.responseText;
	_("progressBar").value = 0;
}
function errorHandler(event){
	_("status").innerHTML = "Upload Failed";
}
function abortHandler(event){
	_("status").innerHTML = "Upload Aborted";
}


