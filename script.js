const speed = document.querySelector('#speed');

const bar = document.querySelector('#speed-bar');

const video = document.querySelector('#video');

speed.addEventListener('mousemove', function(e){

    const y = e.pageY - this.offsetTop;

    const percent = y / this.offsetHeight;

    const min = 0.6;

    const max = 4.01;

    const height = Math.round(percent * 100) + '%';

    const playbackRate = percent * (max - min) + min;


    bar.style.height = height;

    bar.textContent = playbackRate.toFixed(2) + 'x';

    if(bar.style.height < 19){

        bar.style.height = 19 + '%';

    }

    video.playbackRate = playbackRate;

    console.log(height);

})


//
//
//The following code is to for finding the youtube video which belongs to user URL
//
//

function searchVideo(){

    let userURL = document.getElementById('youtubeURL').value;

    video.src = userURL;

}

const searchButton = document.getElementById('search');

searchButton.addEventListener('click', searchVideo);