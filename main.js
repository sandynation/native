fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "d05ab61138mshfb2139175f7c8dap165e5ejsn52aadba66971"
	}
})
.then(response => response.json())
.then(data => {
   const name = item.l;
   const poster = item.i.imageurl;
   const movie = '<li><img src="${poster}" ></h2></li>'
   document.querySelector('.movies').innerHTML += movie;

   })

.catch(err => {
	console.error(err);
});