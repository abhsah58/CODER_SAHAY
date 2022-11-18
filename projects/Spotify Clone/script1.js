console.log("Welcome to spotify")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let myProgressbar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    { songName: "Salam-e-Ishq 0", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Salam-e-Ishq 1", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Salam-e-Ishq 2", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Salam-e-Ishq 3", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Salam-e-Ishq 4", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Salam-e-Ishq 5", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Salam-e-Ishq 6", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Salam-e-Ishq 7", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Salam-e-Ishq 8", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Salam-e-Ishq 9", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
});
// handle play/pause click
masterPlay.addEventListener('click', () => {

    if (audioElement.paused)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else 
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// Listen  to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseFloat(audioElement.currentTime / audioElement.duration) * 100;
    // console.log(progress);
    myProgressbar.value = progress;
});

myProgressbar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressbar.value) * (audioElement.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

forward.addEventListener('click', () => {

    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = song[songIndex].filePath;
    console.log(song[songIndex].songName);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

backward.addEventListener('click', () => {
    if (songIndex == 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = song[songIndex].filePath;
    console.log(song[songIndex].songName);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})