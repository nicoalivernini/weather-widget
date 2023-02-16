let APIKey = "dddfdf818b35e8a44795a3ce3303374f";
let cityName = ["London", "Milan", "Bangkok", "Los Angeles", "Nairobi"];
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

let touchStartX = 0;
let touchEndX = 0;
let elementCard = "";

$(document).ready(() => {
  let elementCard = document.getElementById("ok");

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
    } else if (touchEndX > touchStartX && counterSlide > 1 && counterSlide <= 5) {
      swipeDirection = "right";
      increaseDecreaseSlide("-");
      $('.weatherWidgetCardContent').removeClass('active');
      $(`.weatherWidgetCardContent:nth-child(${counterSlide})`).addClass("active");
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
