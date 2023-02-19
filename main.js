let APIKey = "dddfdf818b35e8a44795a3ce3303374f";
/* let cityName = ["London", "Milan", "Bangkok", "Los Angeles", "Nairobi"]; */
let cityName = ["Rome", "Milan"];
let touchStartX = 0;
let touchEndX = 0;
let elementCard = "";
let waves = ["wave", "wave-1", "wave-2", "wave-3", "wave-4"];

$(document).ready(() => {
  //API VisualCrossing
  $.each(cityName, (i, element) => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${element}/next7days?unitGroup=metric&key=CXF9HQ8HT5REEMMCPPZGK49JQ&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let sunrise = data.currentConditions.sunrise.split("", 5).join("");
        let sunset = data.currentConditions.sunset.split("", 5).join("");
        console.log(data.currentConditions.icon, i);
        $(".weatherWidgetCardContainer").append(
          `<div class="weatherWidgetCardContent">
            <div class="wWCurrentConditionsContainer">
              <div class="wWCurrentConditionsContent">
                <p class="wWCurrentConditionsCity">
                  <i class="fa-solid fa-location-pin"></i> ${data.address}
                </p>
                <img class="wWCurrentConditionsIcon"src="./assets/icons/${data.currentConditions.icon}.svg">
                <p class="wWCurrentConditionsTemp">${Math.round(data.currentConditions.temp)}°</p>
                <p class="wWCurrentConditionsMaxMin">Max: ${Math.round(data.days[0].tempmax)}° Min: ${Math.round(data.days[0].tempmin)}°</p>
                <div class="wWCurrentConditionsExtraInfoContainer">
                  <div class="wWCurrentConditionsExtraInfoContent">
                    <span class="wWCCExtraInfoUmidity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>water-percent</title><path d="M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z" /></svg>
                    ${Math.round(data.currentConditions.humidity)}%
                    </span>
                    <span class="wWCCExtraInfoSunrise">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset-up</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" /></svg>
                    ${sunrise}
                    </span>
                    <span class="wWCCExtraInfoSunset">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset-down</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z" /></svg>
                    ${sunset}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="weatherWidgetForecastContainer">
              <div class="weatherWidgetForecastContent">
              ${data.days.slice(1).map((element) => {
                return `
                <div class="weatherWidgetForecastCard">
                    <p class="wWWidgetForecastDate"></p>
                    <img class="wWWidgetForecastIcon" src="./assets/icons/${element.icon}.svg">
                    
                    <p class="wWWidgetForecastTemperature">
                      <span>${Math.round(element.tempmax)}°</span>
                      <span>${Math.round(element.tempmin)}°</span></p>
                  </div>`;
              })}
              </div>
            </div>
            <div class="weatherWidgetWaveContainer">
              <img src="assets/icons/${waves[i]}.svg">
            </div>
          </div>`
        );
        //SET DOTS
        $(".weatherWidgetDotContent").append(`<i class="fa-regular fa-circle"></i>`);
        $(`.weatherWidgetCardContent:first-child`).addClass("active");
        $(`.fa-circle:first-child`).addClass("fa-solid");
        let dinamicBackground = document.getElementsByClassName("weatherWidgetCardContent");
        //Switch background
        
        /* switch (dinamicBackIcon) {
          case 'clear-day':
            dinamicBackground.style.background = "linear-gradient(180deg, #ffffff, #29abe2)"
            break;
          case 'clear-night':
            dinamicBackground.style.background = "linear-gradient(0deg, rgba(62,92,125,1) 0%, rgba(17,60,105,1) 100%)"
            break;
          case 'hail':
            dinamicBackground.style.background = "linear-gradient(180deg, #f5f4eb, #bce1f7)"
            break;
          case "partly-cloudy-day":
            dinamicBackground.style.background = "linear-gradient(180deg, #c7e9ff, #b3c7cc)"
            break;
          case "partly-cloudy-night":
            dinamicBackground.style.background = "linear-gradient(0deg, #222F3D, #3D556E)"
            break;
          case "rain-snow-showers-day":
            dinamicBackground.style.background = "linear-gradient(180deg, #f5f4eb, #bce1f7)"
            break;
          case "rain-snow-showers-night":
            dinamicBackground.style.background = "linear-gradient(90deg, #4088a9, #284e74)"
            break;
          case "rain-snow":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "rain":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "cloudy":
            dinamicBackground.style.background = "linear-gradient(180deg, #c7e9ff, #b3c7cc)"
            break;
          case "fog":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "showers-day":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "showers-night":
            dinamicBackground.style.background = "linear-gradient(90deg, #4088a9, #284e74)"
            break;
          case "sleet":
            dinamicBackground.style.background = "linear-gradient(180deg, #f5f4eb, #bce1f7)"
            break;
          case "snow-showers-day":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "snow-showers-night":
            dinamicBackground.style.background = "linear-gradient(90deg, #4088a9, #284e74)"
            break;
          case "snow":
            dinamicBackground.style.background = "linear-gradient(180deg, #f5f4eb, #bce1f7)"
            break;
          case "thunder-rain":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "thunder-showers-day":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "thunder-showers-night":
            dinamicBackground.style.background = "linear-gradient(90deg, #4088a9, #284e74)"
            break;
          case "thunder":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
          case "wind":
            dinamicBackground.style.background = "linear-gradient(0deg, #cfd9df, #e2ebf0)"
            break;
        } */
      })
      .catch((err) => {
        console.error(err);
      });
  });

  let elementCard = document.getElementById("carousel-container");

  elementCard.addEventListener(
    "touchstart",
    function (event) {
      touchStartX = event.changedTouches[0].screenX;
    },
    true
  );

  elementCard.addEventListener(
    "touchend",
    function (event) {
      touchEndX = event.changedTouches[0].screenX;
      checkTypeSwipe();
    },
    true
  );

  let counterSlide = 1;

  function checkTypeSwipe() {
    let swipeDirection = "";

    if (touchEndX < touchStartX && counterSlide > 0 && counterSlide <= 4) {
      swipeDirection = "left";
      console.log("create right");
      increaseDecreaseSlide("+");
      $(`.weatherWidgetCardContent:nth-child(${counterSlide})`).addClass("active");
      $(`.weatherWidgetCardContent:nth-child(${counterSlide - 1})`).removeClass("active");
      $(`.fa-circle:nth-child(${counterSlide})`).addClass("fa-solid");
      $(`.fa-circle:nth-child(${counterSlide - 1})`).removeClass("fa-solid");
    } else if (touchEndX > touchStartX && counterSlide > 1 && counterSlide <= 5) {
      swipeDirection = "right";
      console.log("create left");
      increaseDecreaseSlide("-");
      $(".weatherWidgetCardContent").removeClass("active");
      $(`.weatherWidgetCardContent:nth-child(${counterSlide})`).addClass("active");
      $(".fa-circle").removeClass("fa-solid");
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

  
}); // CLOSE READY

//COUNTER SLIDER DESKTOP
let counterSliderDesk = 1

function moveSlideArrow(direction) {
  if(direction === 'right' && counterSliderDesk > 0 && counterSliderDesk <= 4) {
    counterSliderDesk++;
    $(`.weatherWidgetCardContent:nth-child(${counterSliderDesk})`).addClass("active");
    $(`.weatherWidgetCardContent:nth-child(${counterSliderDesk - 1})`).removeClass("active");
    $(`.fa-circle:nth-child(${counterSliderDesk})`).addClass("fa-solid");
    $(`.fa-circle:nth-child(${counterSliderDesk - 1})`).removeClass("fa-solid");
    //console.log('next', counterSliderDesk)
  } else if (direction === 'left' && counterSliderDesk > 1 && counterSliderDesk <= 5) {
    counterSliderDesk--;
    $(".weatherWidgetCardContent").removeClass("active");
    $(`.weatherWidgetCardContent:nth-child(${counterSliderDesk})`).addClass("active");
    $(".fa-circle").removeClass("fa-solid");
    $(`.fa-circle:nth-child(${counterSliderDesk})`).addClass("fa-solid");
    //console.log('prev', counterSliderDesk)
  }
}

//WAVE

/* function createWave(valueWave1, valueWave2, valueWave3) {

  let WATER_TOP_COLOR = "#04619f35";
  let WATER_BOTTOM_COLOR = "#000000";
  let htmlCanvas = document.getElementById("canvas");
  let ctx = htmlCanvas.getContext("2d");
  let screenWidth;
  let screenHeight;
  let moveWavesId;
  let wave = {};
  let waveLength = 0;
  let wave2 = {};
  let wave3 = {};
  let waves = {};

  function value(x, width, numberOfWaves) {
    x = ((x * numberOfWaves) / width) * 2 * Math.PI;
    return Math.sin(x);
  }

  function multiplier(x, width) {
    let multiplierVar = 25;

    if (x <= width / 2) {
      return (x * multiplierVar * 2) / width;
    }
    return (width * multiplierVar) / 2 / x;
  }

  function draw() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.beginPath();
    ctx.moveTo(screenWidth, screenHeight);
    for (let x = waveLength - 1; x > 0; x--) {
      ctx.lineTo(x, waves[x]);
    }

    let gradient = ctx.createLinearGradient(0, 0, 0, screenHeight);
    gradient.addColorStop(0.5, WATER_TOP_COLOR);
    gradient.addColorStop(1, WATER_BOTTOM_COLOR);
    ctx.fillStyle = gradient;
    ctx.lineTo(0, screenHeight);
    ctx.fill();
    requestAnimationFrame(draw);
  }

  function initializedWaves() {
    for (let x = 0; x < screenWidth; x++) {
      wave[x] = value(x, screenWidth, valueWave1) * multiplier(x, screenWidth);
      wave2[x] = value(x, screenWidth, valueWave2) * multiplier(x, screenWidth);
      wave3[x] = value(x, screenWidth, valueWave3) * multiplier(x, screenWidth);
    }
    waveLength = Object.keys(wave).length;
  }

  function moveWaves() {
    if (!waveLength) {
      initializedWaves();
    }
    for (let x = waveLength - 1; x >= 0; x--) {
      waves[x] = wave[x] + wave2[x] + wave3[x] + screenHeight / 1.5;
    }
  }

  function startLoop() {
    clearInterval(moveWavesId);
    moveWavesId = setInterval(moveWaves, 8000 / screenWidth);
  }

  function recalculateCanvas() {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    htmlCanvas.width = screenWidth / 2;
    htmlCanvas.height = screenHeight - 100;

    wave = {};
    waveLength = 0;
    wave2 = {};
    wave3 = {};
    waves = {};

    startLoop();
  }

  window.addEventListener("resize", recalculateCanvas);
  //window.removeEventListener("unload", recalculateCanvas);
  recalculateCanvas();
  requestAnimationFrame(draw);
} */
