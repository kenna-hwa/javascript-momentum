const quotes = [
    {
        quote: "It is unwise to be too sure of one's own wisdom. It is healthy to be reminded that the strongest might weaken and the wisest might err.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Love is the difficult realization that something other than oneself is real.",
        author: "Iris Murdoch"
    },
    {
        quote: "Just the knowledge that a good book is awaiting one at the end of a long day makes that day happier.",
        author: "Kathleen Norris"
    },
    {
        quote: "The man who doesn't read good books has no advantage over the man who can't read them.",
        author: "Mark Twain"
    },
    {
        quote: "If you would thoroughly know anything, teach it to others.",
        author: "Tryon Edwards"
    },
    {
        quote: "Do not do to others what angers you if done to you by others.",
        author: "Socrates"
    },
    {
        quote: "Why be a man when you can be a success?",
        author: "Bertolt Brecht"
    },
    {
        quote: "One of the greatest victories you can gain over someone is to beat him at politeness.",
        author: "Josh Billings"
    },
    {
        quote: "Quality is never an accident; it is always the result of intelligent effort.",
        author: "John Ruskin"
    },
    {
        quote: "A good plan, violently executed now, is better than a perfect plan next week.",
        author: "George S. Patton"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = () => {
    const num = Math.floor(Math.random()*quotes.length);
    quote.textContent = quotes[num].quote;
    author.textContent = quotes[num].author;
};

todaysQuote();
