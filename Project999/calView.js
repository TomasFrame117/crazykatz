function openModal() {

  html = `
    <div class="modalContainer">
    <div class="mainContentModal">
        
  
        <div class="cal-container">
        <div id="calendar"></div>
        <button class="closeCal" onclick="closeModal()">Close</button>
         </div>  
             
    </div>
    </div>
                  `;
  html += `
    <div class="header">
    <h1></h1>
            </div>
            `;

  
  model.modal = html;
  
  
  updateView();
  initCalander();
}

function initCalander(){
  let calendarEl = document.getElementById('calendar');
    
    let calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      initialDate: new Date(),
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      selectable: true,
     
      events: [
        {
          title: 'Pussy Party',
          start: '2022-04-04',
          constraint: 'businessHours',
          color: 'red',
        },
        {
          title: 'Meeting',
          start: '2022-04-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Conference',
          start: '2022-04-22',
          end: '2020-09-20'
        },
        {
          title: 'Party',
          start: '2020-09-29T20:00:00'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-09-11T10:00:00',
          end: '2020-09-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-09-13T10:00:00',
          end: '2020-09-13T16:00:00',
          display: 'background'
        },

        // red areas where no events can be dropped
        {
          start: '2020-09-24',
          end: '2020-09-28',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2020-09-06',
          end: '2020-09-08',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        }
      ]
    });
  calendar.render();

}

function closeModal() {
  model.modal = "";
  console.log("close")
  updateView();
}

