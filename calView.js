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
          title: 'Cat Gathering',
          start: '2022-05-04',
          constraint: 'businessHours',
          color: 'red',
        },
        {
          title: 'Cat Conference',
          start: '2022-04-04',
          constraint: 'businessHours',
          color: 'blue',
        },
        {
          title: 'Cat Breeding Seminar at Bleserfjeld Panorama Apartments',
          start: '2022-04-17T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Celebrate!!',
          start: '2022-04-29',
          end: '2020-09-20'
        },
        {
          title: 'Åpen Dag',
          start: '2022-04-28T10:35:00',
          end: '12:00:00',
          color:'blue',
         
        },
    

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-09-11T10:00:00',
          end: '2020-09-11T16:00:00',
          display: 'background'
        },
        {
          groupId: 'available ',
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

