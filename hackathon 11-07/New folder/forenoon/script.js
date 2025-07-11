const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "There are 7 ittle monkeys hanging over the edge.",
  "The bird is trapped in a golden cage and it is slowly dying everyday.",
  "My favourite animal is a Lion and my favourite bird is parrot.",
  "Let it go, Let it go, can't hold it back anymore.",
  "The king of the jungle is the lion but the king of the lion's family is the lioness.",
  "I am the sole inheritor of all of the property that my father left behind.",
  "I'm very fortunate to have found you when I did.",
  "You dont seem very thrilled about this job.",
  "You look like a rainbow. A Rainbow that happened to occur without rain.",
  "I'm generally a cool person but when I lose my temper, I can be scary.",
  "Hopefully, I'll be out of this house very, very soon.",
  "As long as I finish all of these chores that my stepmum allotted me, I might be able to go to the ball.",
  "I won't even let you anywhere near the dance hall, let alone the ball.",
  "You have anger issues. But you're also lucky.",
  "You mustn't go into that cave at any cost.",
  "I hope you type mistakes.",
  "I'm not in the mood to talk, so go away.",
  "I hope that someday you'll be able to forgive them for their mistakes.",
  "Who has a big heart? Not me.",
  "Even looking at his face is causing me a lot of anxiety.",
  "Then How do we solve this problem now?",
  "@#$%^!@#%^&",
  "You're lucky you didn't get a bunch of symbols and got me instead.",
  "I feel blessed.",
  "What is the longest sentence without any punctuation marks?",
  "I bet you don't have an answer for your behaviour right now.",
  "We are celebrating a special occasion tonight.",
  "I'm drenched in orange juice because of you.",
  "That's not my fault.",
  "Please, You're just making excuses.",
  "Really?? If I'm making excuses then what are you making? Noodles? You are making excuses too.",
  "Do you like horror movies? I don't think you do.",
  "I feel like taking shower with sanitizer instead of water because of how gross you are.",
  "Can we please stop arguing? I'm tired of this constant arguing which isn't even going anywhere anymore.",
  "Which animal would you describe your best friend as??",
  "Please just stop going to that place.",
  "That guy is so damn creepy.",
  "Increase the brightness in your system.",
];


const quoteDisplay = document.getElementById("quoteDisplay");
const quoteInput = document.getElementById("quoteInput");
const timerEl = document.getElementById("timer");
const errorsEl = document.getElementById("errors");
const accuracyEl = document.getElementById("accuracy");
const progressBar = document.getElementById("progress-bar");

let timer = 0;
let interval;
let errorCount = 0;
let charIndex = 0;
let currentSentence = "";

function getNewQuote() {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  quoteDisplay.innerHTML = "";
  for (let char of currentSentence) {
    const span = document.createElement("span");
    span.innerText = char;
    quoteDisplay.appendChild(span);
  }
  quoteInput.value = "";
  charIndex = 0;
  errorCount = 0;
  errorsEl.textContent = 0;
  accuracyEl.textContent = 100;
  progressBar.style.width = "0%";
  clearInterval(interval);
  timer = 0;
  timerEl.textContent = 0;
  interval = setInterval(() => {
    timer++;
    timerEl.textContent = timer;
  }, 1000);
}

quoteInput.addEventListener("input", () => {
  const input = quoteInput.value;
  const chars = quoteDisplay.querySelectorAll("span");
  let correct = 0;
  errorCount = 0;

  chars.forEach((charSpan, index) => {
    const typedChar = input[index];
    if (!typedChar) {
      charSpan.style.textDecoration = "none";
    } else if (typedChar === charSpan.innerText) {
      charSpan.style.textDecoration = "none";
      correct++;
    } else {
      charSpan.style.textDecoration = "underline";
      charSpan.style.textDecorationColor = "red";
      errorCount++;
    }
  });

  errorsEl.textContent = errorCount;
  const accuracy = Math.max(0, Math.floor((correct / input.length) * 100));
  accuracyEl.textContent = accuracy;


  const progress = Math.min((input.length / currentSentence.length) * 100, 100);
  progressBar.style.width = `${progress}%`;


  if (input === currentSentence) {
    clearInterval(interval);
    quoteInput.disabled = true;
  }
});

function restartTest() {
  quoteInput.disabled = false;
  getNewQuote();
}

getNewQuote();
