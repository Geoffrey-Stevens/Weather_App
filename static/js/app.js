// all imports at top, import config to access api-key
import Config from '../../config.js';

//create an instance of the config class
let config = new Config();

console.log(config.getKey());
// render the navbar into the header
$.get('../../components/header.html', function(res) {

  $('header').html(res);
});


function convert(num){
  let deg = (num - 273.15) * 9/5 +32
  return deg.toFixed(2);
}
//create a function that logs the city entered in the form
function searchCity(e){
  let city = $('#city_search').val();

  let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}`;

  $.get(url, function(res){
    console.log(res);
    var maxConvert = (`${res.main.temp_max}`- 273.15) * 9/5 +32
    var minConvert = (`${res.main.temp_min}` -273.15) * 9/5 +32

  $('#city_name').text(`${res.name}, ${res.sys.country}`);
  $('#high').html(`${convert(res.main.temp_max)}&deg;`)
  $('#low').html(`${convert(res.main.temp_min)}&deg;`)
  $('#forecast').text(`${res.weather[0].description}`)
  $('#humidity').text(`${res.main.humidity}%`)

  $('#weather-info').css('display', 'block');
  });
}

  //$('#high').text(`${res.main.country}`)
//check to see if the submit button is pressed, if it is, stop the even from refreshing the page, and call searchCity()
$('#submit-btn').click(function(e){
  e.preventDefault();
  searchCity();
});

//make search information not appear until they submit a city
$('#weather-info').css('display', 'none');
