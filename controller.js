var userIndex = [];

function logInUser() {
    for(let i = 0; i < model.users.length; i++){
        if(model.input.userLogin == model.users[i].mail && model.input.userPassword == model.users[i].password) {
            let id = model.users[i].id;
            let currentID = model.app.currentUser;

            currentID.push(id);
            userIndex.push(id);
            console.log("inne", currentID);
            model.input = {};
            homePage();
        }
    }
}