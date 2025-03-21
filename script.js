function openAssistant(url) {
    // Haal de maximale schermgrootte op
    const width = screen.width / 2; // Halve breedte
    const height = screen.height;   // Volledige hoogte
    
    // Open een pop-upvenster met aangepaste grootte
    window.open(url, "AssistantWindow", `width=${width},height=${height},top=0,left=0,toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=yes`);
}

console.log("Echnaton AI geladen!");