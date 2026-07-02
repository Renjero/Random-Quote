// console.log(fetch('https://dummyjson.com/quotes/random'))


// fetch('https://dummyjson.com/quotes/random')
// .then((response)=>console.log(response.json()))
// .then((data) => console.log(data))
// .catch(()=>{console.log("error in getting data")})


// let h1 = document.querySelector('h1')
// let p = document.querySelector('p')

//  const fetchQuote = async ()=>{
//     const response = await fetch('https://dummyjson.com/quotes/random');
//     const data = await response.json();

//      quoteElement.innerText = data.quote;
//     // authorElement.innerText = `— ${data.author}`;
//     authorElement.innerText = data.author

//     console.log(data);
// }
// fetchQuote();


// fetchQuote();


const quoteElement = document.getElementById("quote-text");
const authorElement = document.getElementById("author");
const button = document.getElementById("generateBtn");

const fetchQuote = async () => {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();

    quoteElement.innerText = data.quote;
    authorElement.innerText = data.author;

    console.log(data);
};

// auto calling
// setInterval(() => {
//     fetchQuote();
//     console.log("settimeout called")
//  }, 5000)



// on click
button.addEventListener("click", fetchQuote);