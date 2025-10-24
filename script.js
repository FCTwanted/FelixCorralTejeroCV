document.addEventListener("DOMContentLoaded", function () {
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const paletteIcon = document.getElementById("paletteIcon");
    const colorPicker = document.getElementById("colorPicker");

    let isDarkMode = true;

    function applyDarkMode() {
        document.documentElement.style.setProperty('--bg-color-black', '#000000');
        document.documentElement.style.setProperty('--text-color-white', '#ffffff');
        moonIcon.style.display = 'none';  //Oculta la luna
        sunIcon.style.display = 'block';  //Muestra el sol
    }
    function applyLightMode() {
        document.documentElement.style.setProperty('--bg-color-black', '#ffffff');
        document.documentElement.style.setProperty('--text-color-white', '#000000');
        moonIcon.style.display = 'block';  //Muestra la luna
        sunIcon.style.display = 'none';  //Oculta el sol
    }

    //Cambiar entre modos de tema
    moonIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });
    sunIcon.addEventListener("click", function () {
        if (isDarkMode) {
            applyLightMode();
        } else {
            applyDarkMode();
        }
        isDarkMode = !isDarkMode;
    });

    //Cambiar el color de los íconos usando el color picker
    colorPicker.addEventListener("input", function () {
        const selectedColor = this.value;
        document.documentElement.style.setProperty('--main-color', selectedColor);
        sunIcon.setAttribute("fill", selectedColor);
        moonIcon.setAttribute("fill", selectedColor);
        paletteIcon.setAttribute("fill", selectedColor);
    });

    //Aplicar el modo oscuro por defecto
    applyDarkMode();
});
//theme control ends here

//Controlador de la barra de progreso
document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll('.timeline li');

    //Función de observación usando IntersectionObserver
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.6 //10% del elemento debe estar visible para ser activado
    });

    //Observar cada evento de la timeline
    timelineEvents.forEach(event => {
        observer.observe(event);
    });
});

//Cerrar menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.querySelector('.nav__checkbox');
        if (checkbox.checked) {
            checkbox.checked = false;
            // Forzar actualización de variables CSS
            document.documentElement.style.setProperty('--transform-list-menu', 'translateX(-100%)');
            document.documentElement.style.setProperty('--nav-icon-background', 'url("./assets/menu-open.svg")');
        }
    });
});

//Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav');
    const checkbox = document.querySelector('.nav__checkbox');
    
    if (checkbox.checked && !nav.contains(e.target)) {
        checkbox.checked = false;
        document.documentElement.style.setProperty('--transform-list-menu', 'translateX(-100%)');
        document.documentElement.style.setProperty('--nav-icon-background', 'url("./assets/menu-open.svg")');
    }
});