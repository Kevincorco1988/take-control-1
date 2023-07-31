//The main variables and array with quotes
let quoteBtn = document.getElementById("quote-btn");
let quoteOutput = document.getElementById("quote-output");
let quotes = [
    '"Start writing, no matter what. The water does not flow until the faucet is turned on." - Louis LAmour',
    '"The first draft is just you telling yourself the story." - Terry Pratchett',
    '"Start before you are ready." - Steven Pressfield',
    '"First, find out what your hero wants, then just follow him!" Ray Bradbury',
    '"I love deadlines. I like the whooshing sound they make as they fly by." - Douglas Adams',
    '"Pain is inevitable. Suffering is optional." - Haruki Murakami',
    '"Life is tough my darling, but so are you." - Stephanie Bennett Henry',
    '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
    '"The way to get started is to quit talking and begin doing." - Walt Disney',
    '"Life is what happens when you are busy making other plans." - John Lennon',
];

// Randomly choses the quotes when called
quoteBtn.addEventListener('click', function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Fixed "Math" object
    quoteOutput.innerHTML = randomQuote;
});