// Function to fetch quotes from the text file
async function fetchQuotes() {
    const response = await fetch('quotes.txt');
    const data = await response.text();
    return data.split('\n').filter(quote => quote.trim() !== '');
}

// Function to display a random quote
async function displayRandomQuote() {
    const quotes = await fetchQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote-container').textContent = randomQuote;
}

// Call the function to display a quote when the page loads
displayRandomQuote();
