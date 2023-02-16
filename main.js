let APIKey = "dddfdf818b35e8a44795a3ce3303374f";
let cityName = ["London", "Milan", "Bangkok", "Los Angeles", "Nairobi"];
let touchStartX = 0;
let touchEndX = 0;
let elementCard = "";

$(document).ready(() => {
  //API Openweather No Forecast
  /* $.each(cityName, (i, element) => {
    $.ajax(
      {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${APIKey}&units=metric`,
        method: 'GET',
        success: (data, state) => {
          $('.weatherWidgetCardContainer').append(
            `<div class="weatherWidgetCardContent">
              <p>${data.name}</p>
              <p>${data.main.temp}</p>
              <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png";
            </div>`)
          console.log(data)
          //SET DOTS
          $('.weatherWidgetDotContent').append(
            `<i class="fa-regular fa-circle"></i>`
          )
          $(`.weatherWidgetCardContent:first-child`).addClass("active");
          $(`.fa-circle:first-child`).addClass("fa-solid");
        },
        error: (error) => {
          alert(`E avvenuto un errore ${error}`)
        }
      }
    )
  }) */

  //API VisualCrossing
  $.each(cityName, (i, element) => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${element}/today?unitGroup=metric&iconSet=icons2&key=3WC7H3VP8NCUE6Z575DXTKTN7&contentType=json`, {
      "method": "GET",
      "headers": {
      }
    })
    .then(response => {
      return response.json()
    })
    .then((data) => {
      //console.log(data)
      $('.weatherWidgetCardContainer').append(
        `<div class="weatherWidgetCardContent">
          <p>${data.address}</p>
          <p>${data.currentConditions.temp}</p>
          <img src="./assets/icons/${data.currentConditions.icon}.png";
          assets/icons/cloudy.png
        </div>`)
      console.log(data)
      //SET DOTS
      $('.weatherWidgetDotContent').append(
        `<i class="fa-regular fa-circle"></i>`
      )
      $(`.weatherWidgetCardContent:first-child`).addClass("active");
      $(`.fa-circle:first-child`).addClass("fa-solid");
    })
    .catch(err => {
      console.error(err);
    });
  })

  let elementCard = document.getElementById("carousel-container");

  elementCard.addEventListener("touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
    },true
  );

  elementCard.addEventListener("touchend",
    function (event) {
      touchEndX = event.changedTouches[0].screenX;
      checkTypeSwipe();
    },true
  );
  
  let counterSlide = 1;


  function checkTypeSwipe() {
    let swipeDirection = "";
  
    if (touchEndX < touchStartX && counterSlide > 0 && counterSlide <= 4) {
      swipeDirection = "left";
      increaseDecreaseSlide("+");
      $(`.weatherWidgetCardContent:nth-child(${counterSlide})`).addClass("active");
      $(`.weatherWidgetCardContent:nth-child(${counterSlide-1})`).removeClass("active");
      $(`.fa-circle:nth-child(${counterSlide})`).addClass("fa-solid");
      $(`.fa-circle:nth-child(${counterSlide-1})`).removeClass("fa-solid");
    } else if (touchEndX > touchStartX && counterSlide > 1 && counterSlide <= 5) {
      swipeDirection = "right";
      increaseDecreaseSlide("-");
      $('.weatherWidgetCardContent').removeClass('active');
      $(`.weatherWidgetCardContent:nth-child(${counterSlide})`).addClass("active");
      $('.fa-circle').removeClass('fa-solid');
      $(`.fa-circle:nth-child(${counterSlide})`).addClass("fa-solid");
    }
  }

  function increaseDecreaseSlide(value) {
    if (value === "+") {
      return counterSlide++;
    } else if (value === "-") {
      return counterSlide--;
    }
  }
});
