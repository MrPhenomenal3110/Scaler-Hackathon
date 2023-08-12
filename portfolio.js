particlesJS("marbles", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": false
        }
      },
      "color": {
        "value": "#fff"
      },
      "opacity": {
        "value": 1
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#fff"
        }
      },
      "size": {
        "value": 1
      },
      "line_linked": {
        "enable": true
      },
      "move": {
        "enable": true,
        "speed": 1,
        "random": false,
        "direction": "random",
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "grab": {
          "distance": 250,
          "line_linked": {
            "opacity": 2
          }
        },
        "push": {
          "particles_nb": 10
        }
      }
    }
  });


const colorThemes = document.querySelectorAll('[name = "theme"]');

const storeTheme = (function(theme){
  
  localStorage.setItem("theme",theme);

})
const retreiveTheme = function (){
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption)=>{
    if(themeOption.id === activeTheme){
      themeOption.checked = true;
    }
  });
}

colorThemes.forEach(themeOptions =>{
  themeOptions.addEventListener('click',() =>{
    storeTheme(themeOptions.id);
  })
})

document.onload = retreiveTheme();