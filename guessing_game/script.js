let result = Math.floor(Math.random()*101);

const limit = 0;
let count = 6;
let button = document.querySelector('button');

button.addEventListener('click',function(){
  let input = document.querySelector('input').value;
  let response = document.querySelector('.response')
  let times_left = document.querySelector('.times_left')
  let image = document.querySelector('.main_image')

  hantei();
  
  function hantei (){
    count--;

    if(input == result){
      image.setAttribute('src','./assets/img/correct.png')
      response.innerHTML = `<p class="alert alert-success mt-5">Correct！</p>`
      count++
      }

    if(count <= limit){
      image.setAttribute('src','./assets/img/game_over.jpeg')
      times_left.innerHTML = `<p>oportunities left 0 </p>`
      response.innerHTML = 
        `<p class="alert alert-danger mt-5">You are such a looser...</p>
        <p>The answer was ${result} <br>Do you wanna try it again?</p>
        <button type="button" class="btn btn-secondary ms-2 mb-5 reset">Reset</button>`        
      let restart = document.querySelector('.reset')
      let rect = restart.getBoundingClientRect()
      let position = rect.top

      scrollTo(0,position);
      console.log(top);

      restart.addEventListener('click',function(){
        location.reload();
      })
      return false;
    }else{
      times_left.innerHTML = `<p>oportunities left ${count}</p>`
    }

    if(input > result){
      response.innerHTML = `<p class="alert alert-warning mt-5">Too large！</p>`
    }else if(input < result){
      response.innerHTML = `<p class="alert alert-info mt-5">Too small！</p>`
    }
  }
})
