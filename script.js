let movie1 = {
   
   name: "Oppenheimer"  ,
   img : "https://th.bing.com/th/id/OIP.Pl3oktdvnp5GmUuXqkHvawHaEK?w=307&h=180&c=7&r=0&o=5&pid=1.7",
}     ;
let movie2 = {
   
   name: "Need for speed"  ,
   img : "https://th.bing.com/th/id/OIP.eiJoExwurl4KmK7jWblAdwHaFj?w=248&h=186&c=7&r=0&o=5&pid=1.7",
}     ;
let movie3 = {
   
   name: "Sonic"  ,
   img : "https://th.bing.com/th/id/OIP.pkKY6gUnq5iWygMuyf6ncwHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7",
}  ;
let movies = []   ;
movies.push(movie1,movie2,movie3)
 
let movieContainer =document.getElementById('container')

 movies.forEach((movie) => {
    movieContainer.innerHTML += `
 <div class="movie">
 <img src="${movie.img}" alt="movie" />
 <h2>${movie.name}</h2>
 </div>
`;
 });
 
 