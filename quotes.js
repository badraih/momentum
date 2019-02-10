/* eslint-disable space-before-blocks */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable indent */


axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=bb0b1f10f6bad7022186b356fd9f4ccf',
})
.then((response) => {
    console.log(response);
    const value = response.data.main.temp;
   const value1 = response.data.name;
   const iconValue = response.data.weather[0].icon;
//    const urlIcon = 'http://openweathermap.org/img/w/10d.png';
//    const urlIcon = `http://openweathermap.org/img/w/${iconValue}`;
//    console.log(urlIcon);
      $('.temp img').attr('src', `http://openweathermap.org/img/w/${iconValue}`);
      $('.temp').append(`<div> ${value} ºF </div>`);
      $('.name').append(`<div>${value1}</div>`);
    })
    .catch((error) => {
        console.log(error);
    });

axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
})
.then((response) => {
    
    $('.textQuote').append(response.data.quoteText);
    $('.author').append(response.data.quoteAuthor);
})
.catch((error) => {
   console.log(error);
});

axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=9634d670dc9c044489874c1073a77fb409b3bb3facbccfec91b84816d7a492ce',
  })
    .then((response) => {
      $('body').attr('background', response.data.urls.regular);
 })
    .catch((error) => {
       console.log(error);
});
$('#Date').text(moment().format('h:mm A'));
