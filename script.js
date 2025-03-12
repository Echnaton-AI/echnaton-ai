function loadAssistant() {
    const select = document.getElementById("assistantSelect");
    const iframe = document.getElementById("assistantFrame");
    const url = select.value;
    if (url) {
        iframe.src = url;
    }
}

console.log("Echnaton AI geladen!");