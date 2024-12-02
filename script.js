

// Fade-in Sections on Scroll
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Google Search on Enter Key Press
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
const searchTerm = searchInput.value.trim();

// If there's a search term, redirect to Google
if (searchTerm) {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.location.href = googleSearchURL;
}
}
});




document.querySelectorAll('.portfolio-card').forEach(card => {
    const voiceIndicator = card.querySelector('.voice-indicator');
    let currentSpeech = null;

    // Helper function to update the voice indicator icon
    function updateVoiceIndicator(isSpeaking) {
        if (isSpeaking) {
            voiceIndicator.classList.add('active');
            voiceIndicator.classList.replace('bi-volume-up', 'bi-volume-mute');
        } else {
            voiceIndicator.classList.remove('active');
            voiceIndicator.classList.replace('bi-volume-mute', 'bi-volume-up');
        }
    }

    // Add mouseenter event for starting speech
    card.addEventListener('mouseenter', () => {
        // Stop any existing speech if it's already running
        if (currentSpeech) {
            window.speechSynthesis.cancel();
        }

        // Get voice text from data attribute
        const voiceText = card.getAttribute('data-voice-text');

        // Create and speak the utterance with customized properties
        const utterance = new SpeechSynthesisUtterance(voiceText);
        utterance.pitch = 1.1; // Slightly higher pitch for clearer speech
        utterance.rate = 1;   // Standard speech rate
        utterance.volume = 1; // Max volume

        // Optional: Choose a specific voice from available voices (example for English)
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(voice => voice.lang === 'en-US'); // Example: US English
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // Start speaking the text
        window.speechSynthesis.speak(utterance);

        // Update voice indicator
        updateVoiceIndicator(true);

        // Track current speech
        currentSpeech = utterance;

        // Remove active state and reset icon when speech ends
        utterance.onend = () => {
            updateVoiceIndicator(false);
            currentSpeech = null;
        };
    });

    // Add mouseleave event for stopping speech
    card.addEventListener('mouseleave', () => {
        // Stop speech immediately when mouse leaves
        if (currentSpeech) {
            window.speechSynthesis.cancel();
            updateVoiceIndicator(false);
            currentSpeech = null;
        }
    });
});




