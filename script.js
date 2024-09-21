
function clearAll() {
   if (document.querySelector('img') != null ) { document.querySelector('img').remove();}  
   let f = ['quote','author','joke','riddle','riddle_answer'];
   f.forEach( (x) => document.getElementById(x).textContent = "" );
   document.querySelector('.reveal-btn').style.display = "none";
}


function showMeme() {
  clearAll() 
  document.getElementById('intro').textContent = "Here is a funny meme for you :";
  let newImgElement = document.createElement('img');
  newImgElement.src = memes[rn(memes.length)];
  document.querySelector('.content').insertBefore(newImgElement, document.querySelector('#quote'));
  
}

function showJoke() {
  clearAll() 
  document.getElementById('intro').textContent = "Here is a Joke for you :";
  document.getElementById('joke').textContent = jokes[rn(jokes.length)];
  
}

function showQuote() {
  clearAll() 
  let theQuote = quotes[rn(quotes.length)];
  document.getElementById('intro').textContent = "Here is a beautiful Quote for you :";
  document.getElementById('quote').textContent = theQuote.quote;
  document.getElementById('author').textContent = "Author :" + theQuote.author;
  
}

let riddleNo;

function showRiddle() {
  clearAll() ;
  riddleNo = rn(riddles.length);
  document.getElementById('intro').textContent = "Here is a puzzling Riddle for you :";
  document.getElementById('riddle').textContent = riddles[riddleNo].question;
  let revealButton = document.querySelector('.reveal-btn');
  revealButton.style.display = "block"; 
}

function revealAnswers() {
  document.getElementById('riddle_answer').textContent = "Answer: " + riddles[riddleNo].answer;
  document.querySelector('.reveal-btn').style.display = "none"; 
}


function rn(len) {
  return Math.floor(Math.random() * len);
}

// Contents 
// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit

const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Memes-Launching-of-Software.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Hello-World-Jokes.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Front-End-vs-Back-End.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Jokes-HTML-Meme.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Jokes-Artificial-Intelligence.jpg"
];

// Sourced from: http://www.devtopics.com/best-programming-jokes/


const jokes = [
  "You",
  "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
  "There are only 10 kinds of people in this world: those who know binary and those who do not.",
  "All programmers are playwrights, and all computers are lousy actors.",
  "Have you heard about the new Cray super computer?  It is so fast, it executes an infinite loop in 6 seconds.",
  "The generation of random numbers is too important to be left to chance.",
  "Debugging: Removing the needles from the haystack.",
  "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
  "There are two ways to write error-free programs; only the third one works.",
  "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  "How many programmers do it take to change a light bulb? None – It's a hardware problem",
  "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
  "There are only 10 kinds of people in this world: those who know binary and those who don't.",
  "A programmer walks to the butcher shop and buys a kilo of meat. An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
  "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science."
];

// source: https://www.goodreads.com/quotes/tag/programming

const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
  {
    quote:
      "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    author: "Muhammad Waseem"
  },
  {
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard"
  },
  {
    quote:
      "You Can't Write Perfect Software. Did that hurt? It shouldn't. Accept it as an axiom of life. Embrace it. Celebrate it. Because perfect software doesn't exist. No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first. And unless you accept this as a fact, you'll end up wasting time and energy chasing an impossible dream.",
    author: "Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master"
  }
];

// Source: https://www.rd.com/list/challenging-riddles/


const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "I am an English Language word. the first two letters signify a male, the first three letters signify a female, the first four letters signify a great man, while the entire word signifies a great woman. What is the word?",
    answer: "Heroine",
  },
  {
    question:
      "What English word has three consecutive double letters?",
    answer: "Bookkeeper.",
  },
  {
    question:
      "A woman shoots her husband, then holds him underwater for five minutes. Next, she hangs him. Right after, they enjoy a lovely dinner. Explain.",
    answer: "She took a picture of him and developed it in her darkroom.",
  },
  {
    question:
      "I come from a mine and get surrounded by wood always. Everyone uses me. What am I?",
    answer: "Pencil Lead.",
  },
  {
    question:
      "A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there in the family?",
    answer: "Four sisters and three brothers.",
  },
  {
    question:
      "What disappears as soon as you say its name?",
    answer: "Silence.",
  },
  {
    question:
      "How can the number four be half of five?",
    answer: "IV, the Roman numeral for four, which is “half” (two letters) of the word five.",
  },
];

