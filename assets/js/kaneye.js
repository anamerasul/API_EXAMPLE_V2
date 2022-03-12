console.log('connected');

const loadQuotes=()=>{
        fetch('https://api.kanye.rest')
        .then(res =>res.json())
        .then(data=>displayQuates(data))
}


const displayQuates =quate=>{
        // console.log(quate);
        const quoteElement=document.getElementById('quote');
quoteElement.innerText =quate.quote;
}