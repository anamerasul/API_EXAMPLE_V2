const loadCountries=()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>displayCountries(data))
}

loadCountries();

const displayCountries=countries=>{
        console.log(countries)

        // for(const country of countries){
        //         console.log(country.name)
        // }
        // const countriesDiv=document.getElementById('countries');
        // countries.forEach(country=>{
        //         console.log(country)
        //         const h3=document.createElement('h3');
        //         h3.innerText=country.name;
        //         countriesDiv.appendChild(h3)
        // })
 const countriesDiv=document.getElementById('countries');
        countries.forEach(country=>{
        const countryName=country.name.common
       let countryCapital=country.capital        
                // console.log(country.name.common)
             
                const div =document.createElement('div');
                div.classList.add('country')
// const h3=document.createElement('h3');
// const p=document.createElement('p');

// h3.innerText=country.name.common;



// if(countryCapital===undefined){
//         return false
// } 
// else{
//         countryCapital=country.capital 
// } 


// div.appendChild(h3)
// div.appendChild(p);

div.innerHTML=`<h3>
                ${countryName}</h3>
                <p>${countryCapital}</p>
                <button onclick="loadcountrybyname('${countryName}')">Details</button>
                `

countriesDiv.appendChild(div);
        })
}

const loadcountrybyname=name=>{
        // console.log(name)

        const url=`https://restcountries.com/v3.1/name/${name}`

        console.log(url)

        fetch(url)
        .then(res=>res.json())
        .then(data =>displayCountryDetails(data[0]));

}

const displayCountryDetails=country=>{
        console.log(country)

        const countriDiv=document.getElementById('country-detail')

        countriDiv.innerHTML=`<h4>${country.name.common}</h4>
        <p>${country.capital}</p>
        <img width=200px src="${country.flags.png}">`
}


// const loadcountrybyname=name=>{
//         const url = `https://restcountries.eu/rest/v2/name/${name}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => displayCountryDetail(data[0]));
//     }
    
//     const displayCountryDetail = country => {
//         console.log(country);
//         const countryDiv = document.getElementById('country-detail');
//         countryDiv.innerHTML = `
//             <h5>${country.name}</h4>
//             <p>population: ${country.population}</p>
//             <img width="200px" src="${country.flag}">
//         `
//     }
   
// const loadCountries = () => {
//     fetch('https://restcountries.eu/rest/v2/all')
//         .then(res => res.json())
//         .then(data => displayCountries(data));
// }
// loadCountries();

// const displayCountries = counties => {
//     // for (const country of counties) {
//     //     console.log(country);
//     // }
//     const countriesDiv = document.getElementById('countries');
//     counties.forEach(country => {
//         // console.log(country);
//         const div = document.createElement('div');
//         div.classList.add('country')
//         div.innerHTML = `
//             <h3>${country.name}</h3>
//             <p>${country.capital}</p>
//             <button onclick="loadCountryByName('${country.name}')">Details</button>
//         `;
//         countriesDiv.appendChild(div);
//     });
// }

// const loadCountryByName = name => {
//     const url = `https://restcountries.eu/rest/v2/name/${name}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCountryDetail(data[0]));
// }

// const displayCountryDetail = country => {
//     console.log(country);
//     const countryDiv = document.getElementById('country-detail');
//     countryDiv.innerHTML = `
//         <h5>${country.name}</h4>
//         <p>population: ${country.population}</p>
//         <img width="200px" src="${country.flag}">
//     `
// }
