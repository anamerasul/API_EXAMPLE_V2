const loadBuddies =()=>{
        const url =`https://kiss722.com/v1/api/`
        fetch(url)
        .then(data=>console.log(data[6]))
        }

        loadBuddies ()