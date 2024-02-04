
//initialize the variables:
let songIndex = 0;
let audioElement = new Audio ('./songs/song1.mp3')
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar')
let songlist = Array.from( document.getElementsByClassName('songlist'))




let songs = [
    { songName: "Leke-Prabhu-Ka-Naam", filepath: "./songs/best1.mp3", coverpath: "./images/best1.jpg" },
    { songName: "Mann-Jogiya", filepath: "./songs/best2.mp3", coverpath: "./images/best2.jpg" },
    { songName: "Oonchi-Oonchi-Deewarein", filepath: "./songs/song2.mp3", coverpath: "./images/best3.jpg" },
    { songName: "Ruaan", filepath: "./songs/best4.mp3", coverpath: "./images/best4.jpg" },
    { songName: "Satranga", filepath: "./songs/best5.mp3", coverpath: "./images/best5.jpg" },
    { songName: "Jaanam", filepath: "./songs/best6.mp3", coverpath: "./images/best6.jpg" },
  ];
  
  songs.forEach((song, i) => {
    let imgElement = document.querySelectorAll('.songlist .songimg')[i];
    let songNameElement = document.querySelectorAll('.songlist .songName')[i];
  
    imgElement.src = song.coverpath;
    songNameElement.innerText = song.songName;
  });
  


//Play/Pause
masterplay.addEventListener('click', ()=> {
    if (audioElement.paused || songs.currentTime<=0){
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
}
else{
audioElement.pause();
masterplay.classList.remove('fa-pause-circle');
masterplay.classList.add('fa-play-circle');}
})

// ProgressBar
audioElement.addEventListener('timeupdate', ()=> {
    progress= parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', () =>{
audioElement.currentTime= myProgressBar.value* audioElement.
duration/100

})



const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element,i) => {
    element.addEventListener('click', (e) => {
        console.log(e)
        makeAllPlays();
        let songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.src = songs[i].filepath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
  
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
  });
  
  document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
      songIndex = songs.length - 1;
    } else {
      songIndex -= 1;
    }
  
    audioElement.src = songs[songIndex].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
  });
  