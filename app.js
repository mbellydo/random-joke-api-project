// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    const ajax = new XMLHttpRequest;

    ajax.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    ajax.onreadystatechange = function(){
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            jokeDIV.innerHTML = `${data.value}`
        } else {
            this.onerror = onerror();
        }
    }
    ajax.send();
}

function onerror(){
    jokeDIV.textContent = 'Something has gone wrong!';  
}
