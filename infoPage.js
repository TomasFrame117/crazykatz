function infoPage() {
    html = `
      <div class="page">
          <div class="header">
              <h1 class="title">Norsk Skogkatt</h1>
          </div>
              <div class="menu">${mainMenu()}
          </div>
  
     <div class="mainContent">
          <img class="infoImg" src="https://rajaamajid.files.wordpress.com/2014/10/sweet6.jpg?w=600"/>
  
          <div class="infoCat"><pre>
          Norsk skogkatt er en katterase som første gang ble anerkjent av FIFé i 1977, 
          men som har røtter som går langt tilbake i tid. 
          Som rase ble den skapt i Norge på 1930-tallet, 
          men den er trolig mer vanlig i Sverige.
  
          Opprinnelse og alder
          Rasen har sin opprinnelse i de langhårete skaukattene som fantes i Skandinavia. 
          De har vært kjent her i flere hundre år. 
          Det er kjent at genmutasjonen som gir lang pels oppsto i området mellom Svartehavet og Kaspihavet,
          så kanskje var det vikingene som fraktet med seg
          langhårede katter tilbake til Norden.
                  </pre>
          </div>
      
  
      </div>
      
     </div>
     `;
    return html;
  }