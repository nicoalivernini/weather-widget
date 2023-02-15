let APIKey = 'dddfdf818b35e8a44795a3ce3303374f';
let cityName = ['London', 'Milan', 'Bangkok', 'Los Angeles', 'Nairobi'];
let dataCity = [];

$(document).ready(
  $.each(cityName, (i, element) => {
    $.ajax(
      {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${APIKey}&units=metric`,
        method: 'GET',
        success: (data, state) => {
          dataCity.push(data)
          console.log(data, state, data.name, dataCity)
        },
        error: (error) => {
          alert(`E avvenuto un errore ${error}`)
        }
      }
    )
  })
)