function changePage(side) {
  model.app.currentPage = side;
  model.app.innhold = "";
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

  //  model.app.currentPage = "homePage";
  updateView();
}

function EditUser() {
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

  //  model.app.currentPage = "homePage";
  updateView();
}

//   function saveRating(){ // hvilken katt trykket dere på?

//     // ta hent input som brukern har trykket radio-buttons
//     // lag en rating obj..

//     let newRating = {
//         rateTail: [tailValue],
//         rateFur: [FurValue],
//         rateHead: [HeadValue],
//         rateColor: [ColorValue],
//         rateEars: [EarsValue],
//         rateOverall: [],
//     }

/*
            ratingInfo: {
            rateTail: [],
            rateFur: [],
            rateHead: [],
            rateColor: [],
            rateEars: [],
            rateOverall: [],
            maxPoints: 100,
        },
    */

// push det til katten

// updateView();

//   }

//   function addPicture(){
//       let newImage = {}
//       newImage = model.
//   }
