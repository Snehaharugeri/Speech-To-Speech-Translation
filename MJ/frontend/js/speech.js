const recordBtn = document.getElementById("recordBtn");
let recognition;

if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recordBtn.addEventListener("click", () => {
    const selectedLang = document.getElementById("sourceLang").value;
    recognition.lang = selectedLang === "en" ? "en-US" : selectedLang;
    recognition.start();
    recordBtn.innerText = "🎙️ Listening...";
  });

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById("inputText").value = transcript;
    recordBtn.innerText = "🎤 Record Speech";
  };

  recognition.onerror = () => {
    recordBtn.innerText = "🎤 Record Speech";
    alert("Speech recognition error. Try again.");
  };
} else {
  recordBtn.disabled = true;
  recordBtn.innerText = "Speech Not Supported";
}
