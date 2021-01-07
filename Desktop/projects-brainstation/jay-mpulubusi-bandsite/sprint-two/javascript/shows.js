let showTable = document.createElement("div");
let showTitle = document.createElement('h1');
let showDate = document.createElement('p');
let showVenue = document.createElement('p');
let showLocation = document.createElement("p");
let showBtn = document.createElement("button");
let showDateText = document.createElement('p');
let showVenueText = document.createElement('p');
let showLocationText = document.createElement('p');


showBtn.innerHTML = "BUY TICKETS";
showLocation.innerText = "LOCATION";
showVenue.innerText = "VENUE";
showDate.innerText = "DATE";
showTitle.innerText = "Shows";
showVenueText.innerText = 'Ronald Lane';
showDateText.innerText = 'Mon Dec 17 2018';
showLocationText.innerText = 'San Fancisco, CA'
let shows =document.getElementById('shows');
shows.appendChild(showTitle);
showTable.appendChild(showDate);
showTable.appendChild(showDateText);
showTable.appendChild(showVenue);
showTable.appendChild(showVenueText);
showTable.appendChild(showLocation);
showTable.appendChild(showLocationText);
showTable.appendChild(showBtn);


showTable.classList.add('show');
showDate.classList.add('show__date');
showLocation.classList.add('show__location');
showVenue.classList.add('show__venue');
showDateText.classList.add('show__date-text');
showLocationText.classList.add('show__location-text');
showVenueText.classList.add('show__venue-text');
showTitle.classList.add('show__title');
showBtn.classList.add('show__btn')


for(let i = 0; i < 6; i++){
    let newShowTable = showTable.cloneNode(true);
    newShowTable.id=('newShow')
    shows.appendChild(newShowTable);
   
}






