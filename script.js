const simpleWords = [
  "apple", "book", "cat", "dog", "egg", "fish", "go", "hat", "ice", "jam",
  "kite", "lamp", "man", "nose", "open", "pen", "queen", "red", "sun", "top",
  "up", "van", "wet", "yes", "zoo", "ball", "car", "day", "ear", "fun",
  "gift", "hill", "ink", "jar", "key", "love", "mom", "net", "old", "pig",
  "quiz", "run", "sit", "toy", "use", "view", "win", "xray", "yell", "zero",
  "ant", "bag", "cook", "door", "eat", "farm", "game", "hand", "ice", "job",
  "kid", "leg", "moon", "name", "owl", "pet", "rain", "sea", "tree", "unit",
  "vote", "walk", "box", "yard", "zip", "ask", "bake", "cold", "duck", "elf",
  "fast", "good", "hot", "iron", "jump", "kind", "line", "mud", "nice", "oil",
  "path", "queen", "rope", "stop", "tall", "ugly", "vast", "warm", "xmas", "young",
  "able", "back", "call", "deep", "each", "face", "gold", "hard", "idea", "join",
  "keep", "long", "milk", "new", "open", "play", "rest", "ship", "time", "under",
  "very", "wash", "year", "zebra", "air", "blue", "cake", "dark", "even", "feel",
  "give", "hope", "iron", "jack", "king", "land", "made", "near", "once", "part",
  "quiz", "road", "shop", "talk", "unit", "vote", "wake", "xray", "yarn", "zone",
  "art", "bed", "city", "dry", "end", "frog", "green", "hat", "ice", "jam",
  "kick", "laugh", "man", "nose", "old", "pop", "quiet", "ride", "star", "top",
  "use", "voice", "wave", "yes", "zip", "act", "bank", "coat", "draw", "egg",
  "farm", "gift", "heat", "in", "joke", "kind", "leaf", "mouse", "nail", "open",
  "paint", "queen", "rope", "smile", "toys", "under", "vase", "walk", "xray", "young",
  "zoo", "about", "before", "clean", "dance", "every", "funny", "glass", "happy", "inside",
  "jelly", "kitten", "lemon", "magic", "never", "outside", "party", "quiet", "ready", "small",
  "tiger", "until", "visit", "water", "extra", "yellow", "again", "because", "climb", "drive", "early",
  "family", "garden", "house", "idea", "jungle", "kitchen", "listen", "music", "night", "orange",
  "people", "quick", "rabbit", "school", "today", "under", "voice", "window", "xylophone", "yesterday",
  "zipper", "answer", "bounce", "candy", "doctor", "elephant", "friend", "grape", "hello", "important",
  "jacket", "kangaroo", "letter", "morning", "number", "ocean", "pencil", "quietly", "rainbow", "snow",
  "table", "umbrella", "vacation", "wagon", "xenon", "yard", "zucchini", "animal", "bread", "circle",
  "desert", "engine", "feather", "giant", "honey", "island", "jewel", "koala", "library", "monkey",
  "needle", "octopus", "pirate", "quilt", "rocket", "sugar", "turtle", "uncle", "valley", "whale"
];

const textContainer = document.getElementById('text-container');
const timerElement = document.getElementById('timer');
const tryAgainButton = document.getElementById('try-again');
const finalScoreElement = document.getElementById('final-score');

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

let totalTyped = '';
let currentCharIndex = 0;
let errors = 0;
let longText = generateLongText();
let timeLeft = 60;
let timerInterval;
let typingStarted = false;

// Shuffle the words Array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Combine shuffled words into one long string with spaces
function generateLongText() {
    const shuffledWords = shuffleArray([...simpleWords]);
    return shuffledWords.join(' ');
}

// Start Countdown Timer
function startTimer() {
    if (!typingStarted) {
        typingStarted = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                endTest();
            }
        }, 1000);
    }
}
// End the test and dispaly the final score
function endTest() {
    timerElement.textContent = `Time's Up!`;
    finalScoreElement.textContent = `Final WPM: ${calculateWPM()}`;
    textContainer.style.display = 'none';
    tryAgainButton.style.display = 'block';
}

// Calculate word-per-minute with error adjustment
function calculateWPM() {
    const wordsTyped = totalTyped.trim().split(/\s+/).length;
    const baseWPM = Math.round((wordsTyped / 60) * 60);
    const adjustedWPM = Math.max(baseWPM - errors, 0);
    return adjustedWPM;
}

// Handle typing over the displayed text and score
document.addEventListener('keydown', (e) => {
    startTimer();

    if(e.key === 'Backspace') {
        if(totalTyped.length > 0) {
            currentCharIndex = Math.max(currentCharIndex - 1, 0);
            totalTyped = totalTyped.slice(0, -1);
        }
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        totalTyped += e.key;
        currentCharIndex ++;
    }
   
    const textArray = longText.split('');
    textContainer.innerText = '';

    errors = 0;

    for (let i = 0; i < textArray.length; i++) {
        const span = document.createElement('span');

        if (i < totalTyped.length) {
            if (totalTyped[i] === textArray[i]) {
                span.classList.add('correct');
            } else {
                span.classList.add('error');
                errors++;
            }
        }
        
        span.textContent = textArray[i];
        textContainer.appendChild(span);
    }
    
    // Scroll the container only after 20 characters
    if (totalTyped.length >= 20) {
        const scrollAmount = (totalTyped.length - 20) * 14;
        textContainer.scrollLeft = scrollAmount;
    }
});

// Reset th Test
function  resetTest() {
    clearInterval(timerInterval);
    timeLeft = 60;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    finalScoreElement.textContent = '';
    textContainer.style.display = 'block';
    tryAgainButton.style.display = 'none';
    totalTyped = '';
    typingStarted = false;
    currentCharIndex = 0;
    errors = 0;
    textContainer.scrollLeft = 0;
    longText = generateLongText();
    init();
}

// Initialize the Test
function init() {
    if (isMobileDevice()) {
        showMobileMessage();
    } else {
        textContainer.innerText = longText;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
    }
}

// Try Again Button listener
tryAgainButton.addEventListener('click', resetTest);

// Detect if the device is Mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 800 ;
}

// Show message for Mobile users 
function showMobileMessage() {
    textContainer.textContent = 'This typing test is designed for desktop use only!';
}

// Startup
init();

// Light-Dark Mode
function toggleDarkLightMode(isDark) {
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    textContainer.style.backgroundColor = isDark ? 'rgb(255 255 255 / 25%)' : 'rgb(255 255 255)';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
       toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);
    }else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Switch Theme Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}
