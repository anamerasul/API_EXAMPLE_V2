const Searchbtn = document.getElementById("button-search");
const txt = document.getElementById("search-input");

txt.addEventListener("keypress", function(event) {
//     event.preventDefault();
    if (event.keyCode == 13){
        Searchbtn.click();
    }
        
});

document.getElementById('error-message').style.display='none';
const searchFood=async ()=>{
        const searchField=document.getElementById('search-input');
        const searchFieldtxt=searchField.value;
        console.log(searchFieldtxt);

        searchField.value='';

        if(searchFieldtxt==''){
                alert('type a field')
        }

        else{
        // load data
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldtxt}`

        console.log(url)

        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>displaySearchResult(data.meals))\
try{
        const res =await fetch(url);

        const data=await res.json();
        displaySearchResult(data.meals)

}
catch(error){

        console.log(error)

        document.getElementById('error-message').style.display='block';
}
    
        }
}

const displaySearchResult=meals=>{
        console.log(meals);

const searchResult=document.getElementById('search-result')
        // searchResult.innerHTML='';
searchResult.textContent='';
if(meals===null){

        const div=document.createElement('div');

        div.classList.add('col')

        div.innerHTML=`
        <div class="card-body">
          <h5 class="card-title">not found</h5>
          <p class="card-text">not found</p>
        </div>
      </div>`;

      searchResult.appendChild(div);
        
}

else{

        meals.forEach(meal=>{
                console.log(meal)
                const div=document.createElement('div');

                div.classList.add('col')

                div.innerHTML=`<div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                </div>
              </div>`;

              searchResult.appendChild(div);
        })

}
      
  


}


        // for(const meal of meals){
        //         console.log(meal[0])
        // }



const loadMealDetails= async mealId=>{
        console.log(mealId)

        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>displayMealDetail(data.meals[0]))
        const res = await fetch(url);
        const data =await res.json();
        displayMealDetail(data.meals[0])
}


const displayMealDetail=meal=>{
        console.log(meal);

        const mealDetails=document.getElementById('meal-details');

        mealDetails.textContent=''

        const div=document.createElement('div');
        div.classList.add('card');
        div.classList.add('mb-3');

        div.innerHTML=`
        <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions}</p>
          <a class="btn btn-primary" href="${meal.strYoutube}">view vido</a>
        </div>`

        mealDetails.appendChild(div);

}