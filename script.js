// Toon de pop-up als deze in de afgelopen week niet is getoond
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('loginPopup');
    const lastShown = localStorage.getItem('popupLastShown');
    const now = Date.now();
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // 7 dagen in milliseconden

    // Controleer of de pop-up in de afgelopen week is getoond
    if (!lastShown || (now - lastShown) > oneWeekInMs) {
        popup.style.display = 'flex'; // Toon de pop-up
        localStorage.setItem('popupLastShown', now); // Sla de huidige tijd op
    }
});

// Sluit de pop-up
function closePopup() {
    const popup = document.getElementById('loginPopup');
    popup.style.display = 'none';
}

// Open de assistent
function openAssistant(url) {
    const width = screen.width / 2;
    const height = screen.height;
    window.open(url, "AssistantWindow", `width=${width},height=${height},top=0,left=0,toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes`);
}

console.log("Echnaton AI geladen!");