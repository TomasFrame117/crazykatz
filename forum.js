function frm1(){
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Forum</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    <div class="mainContent">
    <textarea class="forumtxt" rows="3" cols="120" placeholder="Write Something..." onchange="model.input.forum.textBoxOne = this.value"></textarea>
    <button class="sub" onclick="submitToForum()">Submit</button>
        <div class="forumContainer">
        <div class="gridz-item">Vi har en jentepus på 2.5 år. Hun er svært lite kosete, hun er sky og veldig skvetten. Hun trives ikkje sammen med barna, og vil helst ikkje vere inne når de er hjemme og våkne. Hun tar aldri initiativ til kos, og liker ikkje å vere i nærheten av oss.

        Var liksom ikkje slik eg så for meg at en familiekatt skulle vere. Vil gjerne at barna skal ha mer glede av kjæledyret vårt.
        
        Så da lurer eg på om vi skal få oss en katt til. Hva anbefales da? Kattunge? Voksen katt? Hannkatt? Hunnkatt? Noen som har gode råd?</div>
        <div class="gridz-item2">${model.input.forum.textBoxOne}</div>
    </div>
        <img class="frmjpg" src="https://media.istockphoto.com/photos/gray-kitten-on-black-background-picture-id924327272?k=20&m=924327272&s=612x612&w=0&h=vxbi6SzmNptSKV17xGEiCulB2_gKn9bX4lvP1LxdWFI="/>
    </div>

    `;/* <button class="myProfile" onclick="changePage('myProfile')">${model.app.currentUserName}</button></br>
    <input class="ab" type="text" onchange="model.app.currentUserName = this.value" placeholder="Fornavn:">
    <button class="edit" onclick="NewUser(); EditUser()">Rediger</button>*/
    return html;
}

function frm2(){
   html = `
   <div class="page">
   <div class="header">
       <h1 class="title">Forum</h1>
   </div>
       <div class="menu">${mainMenu()}
   </div>
   <div class="mainContent">
   <textarea class="forumtxt" rows="3" cols="120" placeholder="Write Something..." onchange="model.input.forum.textBoxTwo = this.value"></textarea>
   <button class="sub" onclick="submitToForum2()">Submit</button>
       <div class="forumContainer">
       <div class="gridz-item">Kan katten høre at det er eieren som kommer gående?</div>
       <div class="gridz-item2">${model.input.forum.textBoxTwo}</div>
   </div>
       <img class="frmjpg" src="https://media.istockphoto.com/photos/gray-kitten-on-black-background-picture-id924327272?k=20&m=924327272&s=612x612&w=0&h=vxbi6SzmNptSKV17xGEiCulB2_gKn9bX4lvP1LxdWFI="/>
   </div>

   `;;
    return html;
}
function frm3(){
   html = `
   <div class="page">
   <div class="header">
       <h1 class="title">Forum</h1>
   </div>
       <div class="menu">${mainMenu()}
   </div>
   <div class="mainContent">
   <textarea class="forumtxt" rows="3" cols="120" placeholder="Write Something..." onchange="model.input.forum.textBox = this.value"></textarea>
   <button class="sub" onclick="submitToForum()">Submit</button>
       <div class="forumContainer">
       <div class="gridz-item">Hvorfor hater katter å få vann på seg?</div>
       <div class="gridz-item2">${model.input.forum.textBoxThree}</div>
   </div>
       <img class="frmjpg" src="https://media.istockphoto.com/photos/gray-kitten-on-black-background-picture-id924327272?k=20&m=924327272&s=612x612&w=0&h=vxbi6SzmNptSKV17xGEiCulB2_gKn9bX4lvP1LxdWFI="/>
   </div>

   `;;
    return html;
}
function frm4(){
    html = `
    <div class="page">
    <div class="header">
        <h1 class="title">Forum</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    <div class="mainContent">
    <textarea class="forumtxt" rows="3" cols="120" placeholder="Write Something..." onchange="model.input.forum.textBox = this.value"></textarea>
    <button class="sub" onclick="submitToForum()">Submit</button>
        <div class="forumContainer">
        <div class="gridz-item">Hvor fort kan en katt løpe?</div>
        <div class="gridz-item2">${model.input.forum.textBoxFour}</div>
    </div>
        <img class="frmjpg" src="https://media.istockphoto.com/photos/gray-kitten-on-black-background-picture-id924327272?k=20&m=924327272&s=612x612&w=0&h=vxbi6SzmNptSKV17xGEiCulB2_gKn9bX4lvP1LxdWFI="/>
    </div>

    `;;
    return html;
}
function frm5(){
    html =`
    <div class="page">
    <div class="header">
        <h1 class="title">Forum</h1>
    </div>
        <div class="menu">${mainMenu()}
    </div>
    <div class="mainContent">
    <textarea class="forumtxt" rows="3" cols="120" placeholder="Write Something..." onchange="model.input.forum.textBox = this.value"></textarea>
    <button class="sub" onclick="submitToForum()">Submit</button>
        <div class="forumContainer">
        <div class="gridz-item">Hvor langt går katter?</div>
        <div class="gridz-item2">${model.input.forum.textBoxFive}</div>
    </div>
        <img class="frmjpg" src="https://media.istockphoto.com/photos/gray-kitten-on-black-background-picture-id924327272?k=20&m=924327272&s=612x612&w=0&h=vxbi6SzmNptSKV17xGEiCulB2_gKn9bX4lvP1LxdWFI="/>
    </div>

    `;
    return html;
}










