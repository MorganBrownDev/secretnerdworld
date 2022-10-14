 // Change of data Url for a new Superhero
 api_url_data = 'https://api.rawg.io/api/games?key=ff2b34ded9e249519c96feeb0ac2404c&page1&page_size=200';
 let content_block = document.querySelector('#gameid');
// API function to fetch API data for the html elements that have asked for it
async function getData() {
  let response_data = await fetch(api_url_data);
  let data_info = await response_data.json();

  //Himg.src = data_image["url"];
  //game_title.innerHTML = data_info["name"];
  //game_image.src = data_info["background_image"];
  info = data_info["results"];

  for (let i = 0; i < info.length; i++) {
    let col = document.createElement("div")
    col.classList.add(".col"); 
    content_block.append(col)

    let game_description = document.createElement("h2")
    game_description.classList.add("description"); 
    col.append(game_description)

    let game_image = document.createElement("div")
    game_image.classList.add("gameimg"); 
    col.append(game_image)

    game_description.innerHTML += info[i].name;
    game_image.style.backgroundImage = "url(" + info[i].background_image +")";

  }
}

getData();

api_url_data = 'https://0mzz447i.directus.app/items/games/1';
 // Change of data Url for a new Superhero

 let game_cms = document.querySelector('#test');
// API function to fetch API data for the html elements that have asked for it

async function getData2() {
  let response_data = await fetch(api_url_data);
  let data_cms = await response_data.json();

  let gimg = data_cms['data']['img'];

  game_cms.src = gimg;

}

getData2();

