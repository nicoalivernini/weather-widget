let APIKey = 'dddfdf818b35e8a44795a3ce3303374f';
let cityName = ['London', 'Milan', 'Bangkok', 'Los Angeles', 'Nairobi'];
//let dataCity = [];

 /* $(document).ready(
  $.each(cityName, (i, element) => {
    $.ajax(
      {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${APIKey}&units=metric`,
        method: 'GET',
        success: (data, state) => {
          //dataCity.push(data)
          $('.weatherWidgetContent').append(
            `<div class="weatherWidgetCardContainer">
              <div class="weatherWidgetCardContent">
                <p>${data.name}</p>
                <p>${data.main.temp}</p>
                <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png";
              </div>
            </div>`)
          console.log(data)
        },
        error: (error) => {
          alert(`E avvenuto un errore ${error}`)
        }
      }
    )
  })
) */

/* function forecast() {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=41.53&lon=12.32&appid=dddfdf818b35e8a44795a3ce3303374f`,
    method: 'GET',
    success: (data, state) => {
      console.log(data)
    }
  })
}  */

  let touchstartX = 0;
  let touchendX = 0;
  let gesuredZone = '';

  $(document).ready(() => {
    let gesuredZone = document.getElementById('ok');

    gesuredZone.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
  }, true);

  gesuredZone.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      checkTypeSwipe();
  }, true); 

  function checkTypeSwipe() {
    let swipeDirection = '';
    let counterSlide = 1;
    if (touchendX < touchstartX) {
      swipeDirection = 'left'
    } else if (touchendX > touchstartX) {
      swipeDirection = 'right'
    }
    if(swipeDirection === 'left') {
      console.log(swipeDirection, 'if');
      $('.active').addClass('next');
      //counterSlide+
      console.log(counterSlide)
    } else if (swipeDirection === 'right') {
      console.log(swipeDirection, 'if');
      $('.active').removeClass('next')
      //counterSlide-
      console.log(counterSlide)
    }
  } 
})

  
