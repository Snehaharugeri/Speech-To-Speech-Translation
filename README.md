# Speech-To-Speech-Translation using NLP
This project converts spoken input in one language into spoken output in another language using modern NLP models. It integrates Speech-to-Text (ASR) → Neural Machine Translation (NMT) → Text-to-Speech (TTS) to provide real-time multilingual speech translation.

🚀 Features
Supports multilingual translation (20+ languages)
End-to-end pipeline: Speech → Text → Translation → Speech
Real-time response with a user-friendly interface
High accuracy using transformer-based models
Noise reduction for better speech recognition
🛠️ Technologies Used
ASR: Whisper / Wav2Vec2
NMT: Transformer / MarianMT
TTS: Tacotron2 / HiFi-GAN
Frontend: HTML + CSS + JS (Mic Input UI)
Backend: Python (Flask / FastAPI)
Libraries: PyTorch, Transformers, SpeechRecognition

📌 How It Works
User speaks through the microphone
Audio gets converted to text using ASR
Text is translated to the target language using NMT
Final translated text is converted back to speech using TTS
Output audio is played to the user

🌟 Advantages
Multiple language support
Automated end-to-end translation
Good accuracy with transformer models
Real-time response
Noise reduction improves results

⚠️ Limitations
Requires internet connection 
Slower for long/complex sentences
More resource usage on low-end devices

📈 Future Enhancements
Add more regional and low-resource languages
Add emotion and sentiment detection
Improve performance using cloud-based large models
Fully hands-free interaction

📂 Project Structure (Example)
├── app.py
├── models/
│   ├── asr_model/
│   ├── nmt_model/
│   └── tts_model/
├── static/
│   ├── style.css
│   └── script.js
├── templates/
│   └── index.html
└── README.md

📝 Installation & Run (Simple)
pip install -r requirements.txt
python app.py
