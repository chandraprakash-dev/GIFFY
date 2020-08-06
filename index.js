function getNewGif() {
    let searchText = form.search.value;
    getGifs(searchText);
}
async function getGifs(searchText) {
    console.log(searchText);
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EpfyNb2OrFNqvry00bN6vGPqpS57oWhs&s=${searchText}`, {mode: 'cors'});
    const Data = await response.json();
    image.src = Data.data.images.original.url;
}

const image = document.querySelector('img');

const form = document.querySelector('form');
const submit = form.querySelector('input[type="button"]');

const search = document.querySelector('#search');
search.addEventListener('keydown', function (e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        submit.click();
    }
})

getGifs(form.search.value);

const newGif = document.querySelector('#newGif');
newGif.addEventListener('click', getNewGif);

submit.addEventListener('click',getNewGif);

