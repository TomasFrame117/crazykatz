// function godkjenLogin(){
//     if (userName != 'Terje'){
//         alert('Feil bruker!')  
//     }
//     show();  
// }

// var userIndex = [];
// var userName = model.users[i].mail.value;
// var userPassword = model.users[i].password.value;

function changePage(side) {
    model.app.currentPage = side;
    model.app.innhold = '';
    updateView();
}

function logInUser() {    
    for(let i = 0; i < model.users.length; i++){
       if(model.users[i].mail == model.input.userLogin  && model.users[i].password == model.input.userPassword) {
        
        // setter current user til den innloggede brukeren
        model.currentUserName = model.users[i].firstName;
        model.currentUserID = model.users[i].id;
           
        //sette hvilken side 
        model.app.currentPage = "homePage";
       //kalle på view
            updateView();
        }
        else{(model.users[i].mail == ''  && model.users[i].password == '');
          alert("ALERT");
              return false;
          }
          return true;
    }
}

function newUser(){
    for (let i = 0; i < model.users.length; i++){
        
    }


    model.app.currentPage = "regPage";
    updateView();
}
