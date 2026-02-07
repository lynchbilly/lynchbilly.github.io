/* =========================
   Red/Black Flash Cards
   - flip
   - shuffle
   - correct/missed tracking
   - "smart queue": missed cards come back sooner
========================= */

const CARDS = [
  { q: "Which generation of computing is associated with microprocessors?", a: "Fourth" },
  { q: "Which computing generation is associated with the exclusive use of machine languages and punch cards?", a: "First" },
  { q: "Which computing generation is associated with the replacement of machine languages by assembly languages?", a: "Second" },
  { q: "Which computing generation is associated with the first use of thousands of integrated circuits on a single silicon chip?", a: "Fourth" },
  { q: "Which generation of computing is known for the introduction of handheld devices?", a: "Fourth" },

  { q: "What is the component of the data-information-knowledge-wisdom (DIKW) hierarchy that includes basic observations?", a: "Data" },

  { q: "Based on the instructions on the package, a frozen pizza should be baked for 18 minutes at 400°F.\n\nWhich term describes the statement, \"The oven is at 350°F, nearing the needed temperature,\" based on the DIKW hierarchy?", a: "Knowledge" },

  { q: "There are 30 questions on a final exam. The exam will be given in room 126 at 2:00 p.m., and students have one hour to complete it.\n\nWhat DIKW component is exemplified by the value \"2:00\"?", a: "Data" },

  { q: "There are 30 questions on a final exam. The exam will be given in room 126 at 2:00 p.m., and students have one hour to complete it.\n\nWhat DIKW component is exemplified by: \"I have extra time, so I should review my answers\"?", a: "Wisdom" },

  { q: "A final exam has 30 questions, and students have one hour to complete it. The exam is scheduled for 2:00 p.m. in room 126.\n\nWhich term describes: \"It is 1:50 p.m., so I should head to room 126\" (DIKW)?", a: "Wisdom" },

  { q: "A production machine runs from 8:00 a.m. to 5:00 p.m., outputting 1,200 units per hour.\n\nWhich DIKW component is exemplified by the value \"1,200\"?", a: "Data" },

  { q: "A production machine runs from 8:00 a.m. to 5:00 p.m., outputting 1,200 units per hour.\n\nWhich DIKW component is exemplified by: \"The machine starts at 8:00 a.m.\"?", a: "Information" },

  { q: "How are information and knowledge different?", a: "Knowledge involves understanding patterns, but information does not." },

  { q: "Which statement represents a difference between wisdom and information, based on the data pyramid?", a: "Wisdom involves understanding principles, but information does not." },

  { q: "Based on an analysis of a company's needs, a database should be installed so that each line of a simple, delimited text document holds exactly one record.\n\nWhat is the name of the database that satisfies this need?", a: "Flat-file" },

  { q: "The leader of an IT department has decided to use a database in which access to the data is restricted to the paths in the trees and is, therefore, predictable.\n\nWhich type of database is described?", a: "Hierarchical" },

  { q: "The leader of an IT department has decided to use a database in which data is stored in a variety of tables that can be joined together in logical ways.\n\nWhich type of database is described?", a: "Relational" },

  { q: "Based on an analysis of a company's needs, a database should be installed so that records are stored in structures consisting of data and methods.\n\nWhat is the name of the database that satisfies this need?", a: "Object-oriented" },

  { q: "An IT department employee is identifying the integer data in a system.\n\nWhat is one example of this type of data?", a: "The year in which a major event happened" },

  { q: "An IT department employee is identifying the floating point data in a system.\n\nWhat is one example of this type of data?", a: "An approximation of π as 3.14159" },

  { q: "A developer is creating an application and needs a variable to store the scientific name of a tree species.\n\nWhich data type should be used for this purpose?", a: "Character string" },

  { q: "A programmer needs to create a variable that holds an indication of whether a file does or does not have an error in it.\n\nWhat is the name of the data type that should be used?", a: "Boolean" },

  { q: "A database variable needs to be restricted to only accept several alphanumeric characters.\n\nWhat is the name of the appropriate data type?", a: "Character string" },

  { q: "A developer is updating the application layer of a database application.\n\nWhat does this layer of the database application do?", a: "It communicates with the end user and can be fairly complex." },

  { q: "Which operating system is developed by Microsoft, Inc.?", a: "Windows" },
  { q: "Which operating system is used for many mobile devices?", a: "iOS" },
  { q: "Which factor affects the choice of an operating system?", a: "User interface" },
  { q: "Which component of an operating system uses scheduling to control access to shared resources?", a: "Kernel" },
  { q: "Which component of an operating system allows an individual to communicate with the operating system?", a: "User interface" },
  { q: "Which category of software is installed as a trial and can be upgraded for a fee?", a: "Shareware" },
  { q: "What is the purpose of word processing software?", a: "Creating business reports and newsletters" },
  { q: "Which software provides private or shareable file management via the cloud?", a: "Document storage" },
  { q: "Which type of software provides the infrastructure needed to run other types of software?", a: "System" },
  { q: "Which type of software is an application for creating blueprints and 3D renderings of buildings?", a: "Specialized" },

  { q: "What is an example of computer hardware?", a: "Motherboard" },
  { q: "Which hardware component includes registers, a logic component, and an arithmetic component?", a: "Central processing unit (CPU)" },
  { q: "What is the hardware component that contains the circuitry for coordinating computer activity?", a: "Central processing unit (CPU)" },
  { q: "Which hardware component stores data and instructions while they are being used?", a: "Random-access memory (RAM)" },
  { q: "Which hardware component is specifically used for 3D rendering?", a: "Graphics processing unit (GPU)" },
  { q: "Which part of a computer system contains the instructions for initializing various computer components?", a: "Read-only memory (ROM)" },
  { q: "Which component is part of the system unit?", a: "Power supply" },

  { q: "What characterizes a ring network topology?", a: "Every device being connected to exactly two other devices" },
  { q: "What is the name of a network that consists of a collection of computers in a single building or building complex?", a: "Local area network (LAN)" },
  { q: "Which networking technology converts incoming analog data into digital and outgoing digital data into analog?", a: "Modem" },
  { q: "What is the name of the networking technology that reduces network traffic on a local area network by management of network messages?", a: "Switch" },
  { q: "What describes a firewall?", a: "Monitors traffic on the network and blocks it if it triggers safety rules" },
  { q: "Which wired transmission medium is able to transmit the largest volumes of data when compared with other cables?", a: "Fiber-optic cable" },

  { q: "What does a compiler do?", a: "Translates source code into machine language" },
  { q: "What does an interpreter do?", a: "Converts instructions one statement at a time when the program is run" },
  { q: "What is the appropriate categorization of Visual Basic .NET as a programming language?", a: "Compiled" },
  { q: "Which type of language is Java?", a: "Compiled" },
  { q: "A programmer is working with Python. Which type of language is this?", a: "Interpreted" },
  { q: "Which term describes the JavaScript computer coding language?", a: "Interpreted" },

  { q: "How can uptime be improved?", a: "By increasing the amount of time that resources are available for use" },
  { q: "What is a priority of business continuity?", a: "High availability of resources" },
  { q: "Which purpose does business continuity planning have?", a: "Identifying priorities when primary systems are not fully operational" },
  { q: "Which component is an important strategy of business continuity?", a: "Data backups" },

  { q: "What is the phase of the project management life cycle that includes the development of a project charter?", a: "Initiation" },

  // You had a mismatch in your list here; keeping your provided answer exactly:
  { q: "What is the phase of the project management life cycle that includes the development of the work breakdown structure (WBS)?", a: "Risks of the unknown" },

  { q: "Which category represents one of the three broad types of risks that a project may encounter?", a: "Risks in integration" },
  { q: "What is the component of disaster recovery that is characterized by writing copies of data on several devices simultaneously?", a: "Data mirroring" },
  { q: "Which physical location offers an ideal place for storage that needs to be off-site?", a: "Caves" },
  { q: "Which factor is a primary criterion for assessing off-site storage possibilities?", a: "Accessibility" },
  { q: "Which type of storage typically uses innovative equipment?", a: "Hot" },

  { q: "What is a professional organization that publishes a set of ethical IT guidelines?", a: "Association of Information Technology Professionals (AITP)" },
  { q: "What is one example of a professional organization in the IT industry?", a: "Association for the Advancement of Artificial Intelligence (AAAI)" },
  { q: "What is one of the goals of IT professional organizations?", a: "Raising public awareness" },
  { q: "Which entity helps other organizations design and apply appropriate approaches to personal data collection, use, and disclosure?", a: "International Association of Privacy Professionals (IAPP)" },
];

// ---------- DOM ----------
const elCard = document.getElementById("flashcard");
const elQ = document.getElementById("question");
const elA = document.getElementById("answer");

const elIndex = document.getElementById("statIndex");
const elTotal = document.getElementById("statTotal");
const elCorrect = document.getElementById("statCorrect");
const elMissed = document.getElementById("statMissed");
const elProgress = document.getElementById("progressBar");

const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnFlip = document.getElementById("btnFlip");
const btnShuffle = document.getElementById("btnShuffle");
const btnReset = document.getElementById("btnReset");
const btnCorrect = document.getElementById("btnCorrect");
const btnMissed = document.getElementById("btnMissed");

// ---------- State ----------
// queue holds indexes into CARDS.
// We'll reinsert "missed" cards a few positions ahead to show them again soon.
let queue = [];
let pos = 0;

let flipped = false;
let correctCount = 0;
let missedCount = 0;

// Track mastery per card
const mastery = new Map(); // idx -> {correct, missed}

// ---------- Helpers ----------
function shuffleInPlace(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initQueue({ shuffle=true } = {}){
  queue = Array.from({length: CARDS.length}, (_, i) => i);
  if(shuffle) shuffleInPlace(queue);
  pos = 0;
  flipped = false;
  correctCount = 0;
  missedCount = 0;
  mastery.clear();
  setFlipped(false);
  render();
}

function setFlipped(state){
  flipped = state;
  elCard.classList.toggle("isFlipped", flipped);
}

function render(){
  const idx = queue[pos];
  const card = CARDS[idx];

  elQ.textContent = card.q;
  elA.textContent = card.a;

  elTotal.textContent = String(queue.length);
  elIndex.textContent = String(pos + 1);

  elCorrect.textContent = String(correctCount);
  elMissed.textContent = String(missedCount);

  const progress = queue.length ? ((pos + 1) / queue.length) * 100 : 0;
  elProgress.style.width = `${progress}%`;
}

function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

function go(delta){
  pos = clamp(pos + delta, 0, queue.length - 1);
  setFlipped(false);
  render();
}

function mark(result){
  // result: "correct" | "missed"
  const idx = queue[pos];

  const m = mastery.get(idx) ?? { correct: 0, missed: 0 };
  if(result === "correct"){
    m.correct += 1;
    correctCount += 1;
  } else {
    m.missed += 1;
    missedCount += 1;

    // SMART QUEUE:
    // Reinsert this same card a few spots ahead.
    // The more you miss it, the sooner it returns.
    const missFactor = Math.min(3, m.missed); // 1..3
    const insertAhead = 3 - (missFactor - 1); // miss 1 => +3, miss 2 => +2, miss 3 => +1
    const insertPos = clamp(pos + insertAhead, pos + 1, queue.length);

    // Insert duplicate instance to review again soon
    queue.splice(insertPos, 0, idx);
  }

  mastery.set(idx, m);

  // Move forward if possible
  if(pos < queue.length - 1) {
    pos += 1;
    setFlipped(false);
    render();
  } else {
    // End reached — just render the last state
    setFlipped(false);
    render();
  }
}

// ---------- Events ----------
elCard.addEventListener("click", () => setFlipped(!flipped));
elCard.addEventListener("keydown", (e) => {
  if(e.key === "Enter" || e.key === " "){
    e.preventDefault();
    setFlipped(!flipped);
  }
});

btnFlip.addEventListener("click", () => setFlipped(!flipped));
btnPrev.addEventListener("click", () => go(-1));
btnNext.addEventListener("click", () => go(1));

btnCorrect.addEventListener("click", () => mark("correct"));
btnMissed.addEventListener("click", () => mark("missed"));

btnShuffle.addEventListener("click", () => {
  // Keep counts, restart queue fresh
  queue = Array.from({length: CARDS.length}, (_, i) => i);
  shuffleInPlace(queue);
  pos = 0;
  setFlipped(false);
  render();
});

btnReset.addEventListener("click", () => initQueue({ shuffle:true }));

document.addEventListener("keydown", (e) => {
  const k = e.key.toLowerCase();

  // Avoid messing with typing if user later adds inputs
  if(["input","textarea"].includes(document.activeElement?.tagName?.toLowerCase())) return;

  if(k === "arrowleft") go(-1);
  if(k === "arrowright") go(1);
  if(k === " ") { e.preventDefault(); setFlipped(!flipped); }
  if(k === "1") mark("missed");
  if(k === "2") mark("correct");
  if(k === "s") btnShuffle.click();
  if(k === "r") btnReset.click();
});

// ---------- Start ----------
initQueue({ shuffle: true });
