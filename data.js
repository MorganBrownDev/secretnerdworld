 // Change of data Url for a new Superhero
 api_url_data = 'https://api.rawg.io/api/games?key=ff2b34ded9e249519c96feeb0ac2404c&page1&page_size=200';
 let game_title = document.querySelector('.gameid');
 let game_image = document.querySelector('.gameimg');

 
 



// API function to fetch API data for the html elements that have asked for it
async function getData() {
  let response_data = await fetch(api_url_data);
  let data_info = await response_data.json();

  //Himg.src = data_image["url"];
  //game_title.innerHTML = data_info["name"];
  //game_image.src = data_info["background_image"];
  info = data_info["results"];

  for (let i = 0; i < info.length; i++) {
    let h2 = document.createElement("h2")
    let game_image = document.createElement("img")
    game_title.append(h2)
    game_title.append(game_image)
    h2.innerHTML += info[i].name;
    game_image.src += info[i].background_image;

  }
}

getData();

