 // Change of data Url for a new Superhero

api_url_data = 'https://api.rawg.io/api/games?key=ff2b34ded9e249519c96feeb0ac2404c&page=10&page_size=12';
let content_block = document.querySelector('#gameid');
let hero = document.querySelector('.hero');

let next = document.querySelector('#next');
let prev = document.querySelector('#prev');

let assets = 'https://0mzz447i.directus.app/assets/';


// API function to fetch API data for the html elements that have asked for it
async function getData() {
  let response_data = await fetch(api_url_data);
  let data_info = await response_data.json();


  //Himg.src = data_image["url"];
  //game_title.innerHTML = data_info["name"];
  //game_image.src = data_info["background_image"];
  info = data_info["results"];

  let bgimg = info[0].background_image;

  let game_image2 = document.querySelector('.gameimg2')
  game_image2.style.backgroundImage = "url(" + bgimg +")";

  let game_title = document.querySelector('.heading');
  game_title.innerHTML = info[0].name;

  let bodybg = document.querySelector('.bodybg')
  bodybg.style.backgroundImage = "url(" + bgimg +")";




  for (let i = 0; i < info.length; i++) {
    let col = document.createElement("div")
    col.classList.add(".col");
    content_block.append(col)

    col.addEventListener('click', function() {
      hero.classList.remove("non_active");
      hero.classList.add("active");
      game_image2.style.backgroundImage = "url(" + info[i].background_image + ")";
      game_title.innerHTML = info[i].name;
      bodybg.style.backgroundImage = "url(" + info[i].background_image + ")";
      content_block.style.display = "none"
      });

      col.addEventListener('mouseenter', function() {
        bodybg.style.backgroundImage = "url(" + info[i].background_image + ")";
        });

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

let close = document.querySelector('.close');

close.addEventListener('click', function() {
  hero.classList.remove('active');
  hero.classList.add('non_active');
  content_block.style.display = "flex"
});

next.addEventListener('click', function() {
 
  async function getData2() {
    let response_data = await fetch(api_url_data);
    let data_info = await response_data.json();

    api_url_data = data_info["next"];

    response_data = await fetch(api_url_data);
    data_info = await response_data.json();
     

  
     console.log(api_url_data);
     console.log(api_url_data);
  
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
  
  getData2();
});

prev.addEventListener('click', function() {
    
    async function getData3() {
      let response_data = await fetch(api_url_data);
      let data_info = await response_data.json();
  
      api_url_data = data_info["previous"];
  
      response_data = await fetch(api_url_data);
      data_info = await response_data.json();
    
      //Himg.src = data_image["url"];
      //game_title.innerHTML = data_info["name"];
      //game_image.src = data_info["background_image"];
      info = data_info["results"];
    
      for (let i = 12; i >= info.length; i--) {
        
        let col = document.querySelector('.col');
        content_block.remove(col);
        
      }
    }
    
    getData3();
  });