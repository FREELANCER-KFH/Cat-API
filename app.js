document.addEventListener('DOMContentLoaded', function (){
    catAPI()
    const btnCat = document.querySelector('#cat-button')
    btnCat.addEventListener('click', async function(){
        await catAPI()
    })
})

async function catAPI() {
    const URL = 'https://api.thecatapi.com/v1/images/search';
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      const img = document.querySelector('img');
      img.src = data[0].url;
    } catch (error) {
      console.error(error);
    }
}
