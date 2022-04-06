function changePage(side) {
    model.app.currentPage = side;
    model.app.innhold = '';
    updateView();
}
function logInUser() {
    model.users.forEach((users, index) => {
       let currentUser = model.users[index];
       console.log(currentUser);
        if(currentUser.mail == model.input.userLogin 
         && currentUser.password == model.input.userPassword) {
         // setter current user til den innloggede brukeren
          model.app.currentUserName = model.users[index].firstName;
          model.app.currentUserID = model.users[index].id;
          model.app.currentPage = "homePage";
          //kalle på view
           updateView();
         console.log(model.users[index]);
         //sette hvilken side 
         }
        //   else{(model.users.mail == 0  && model.users.password == 0);
        //     alert("Nice try");
        //         return false;
        //     }
        //     return true;
     })

}

 function NewUser() {
   let newUser = {};
        
   newUser.id = model.userId,
   newUser.firstName = model.input.regInfo.regFirstName,
   newUser.lastName = model.input.regInfo.regLastName, 
   newUser.mail = model.input.regInfo.regMail, 
   newUser.password = model.input.regInfo.regPassword,    
   newUser.password = model.input.regInfo.regConfirmPW,
   newUser.chosenCat = model.input.regInfo.regSelectBreed,
    
    model.userId++;
    model.users.push(newUser);

    //  model.app.currentPage = "homePage";
     updateView();
 }

 function EditUser() {
    let newUser = {};
         
    newUser.id = model.userId,
    newUser.firstName = model.input.regInfo.regFirstName,
    newUser.lastName = model.input.regInfo.regLastName, 
    newUser.mail = model.input.regInfo.regMail, 
    newUser.password = model.input.regInfo.regPassword,    
    newUser.password = model.input.regInfo.regConfirmPW,
    newUser.chosenCat = model.input.regInfo.regSelectBreed,
     
     model.userId++;
     model.users.push(newUser);
 
     //  model.app.currentPage = "homePage";
      updateView();
  }


