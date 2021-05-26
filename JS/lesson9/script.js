    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then (response => response.json())
        .then(user =>{
                 fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id)
                     .then (response => response.json())
                     .then(posts =>{
                         console.log(posts);
                     })
        })
