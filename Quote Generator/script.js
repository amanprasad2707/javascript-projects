const generateBtn = document.getElementById('generate-btn');
const quote = document.getElementById('quote');
const authorName = document.getElementById('author-name');

const getQuote = (async () => {
  const url = 'https://api.quotable.io/random'
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  quote.innerHTML = data.content;
  authorName.innerHTML = `~ ${data.author}`;
})

generateBtn.addEventListener('click', getQuote)