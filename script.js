const translations = {
    en: {
        greeting: "Hello!",
        description: "Welcome to our website.",
        button: "Español"
    },
    es: {
        greeting: "¡Hola!",
        description: "Bienvenido a nuestro sitio web.",
        button: "English"
    }
};

let currentLang = 'en';

function switchLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';  // Toggle language
    document.getElementById('greeting').textContent = translations[currentLang].greeting;
    document.getElementById('description').textContent = translations[currentLang].description;
    document.getElementById('languageButton').textContent = translations[currentLang].button;
}
