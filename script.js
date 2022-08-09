console.log("Welcome to Song sung");
//Initialize the variables
let songIndex  = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName  = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));


let song = [
  {songName: "Dil Ka dariya- Arijit Singh", filePath: "song/1.mp3", coverpath: "covers/cover1.jpg"},
  {songName: "ek ladki ko dekha to aisa laga- Darshan Raval", filePath: "song/2.mp3", coverpath: "covers/cover2.jpg"},
  {songName: "kesariya- Arijit Singh", filePath: "song/3.mp3", coverpath: "covers/cover3.jpg"},
  {songName: "toofan- Arijit Singh ", filePath: "song/4.mp3", coverpath: "covers/cover4.jpg"},
  {songName: "Agar tum mil jao- Udita goswami", filePath: "song/5.mp3", coverpath: "covers/cover5.jpg"},
  {songName: "Ankho me teri- K.K", filePath: "song/6.mp3", coverpath: "covers/cover6.jpg"},
  {songName: "Raataan Lambiyan- Jubin Nautiyal,Asees Kaur", filePath: "song/.mp3", coverpath: "covers/cover7.jpg"},
  {songName: "Yeh Dil Deewana- Sonu Nigam", filePath: "song/8.mp3", coverpath: "covers/cover8.jpg"},
  {songName: "Chaiyya Chaiyya- Sukhwider Singh", filePath: "song/9.mp3", coverpath: "covers/cover9.jpg"},
  
]

songItems.forEach((element, i)=>{
 
  element.getElementsByTagName("img")[0].src = song[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

//Handle play/pause  click
masterPlay.addEventListener('click', ()=>{
  if(audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
     gif.style.opacity = 0;
  }
  
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myProgressBar.value = progress;
  
})

 myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
  
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click', (e)=>{
    
    makeAllPlays();
      

    songIndex =parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src =`song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    gif.style.opacity = 1;

    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
    
  })
})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex >=9){
    songIndex =0;
  }
  else{
    songIndex +=1;
  }
  audioElement.src =`song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  
})
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex <=0){
    songIndex =9;
  }
  else{
    songIndex -=1;
  }
  audioElement.src =`song/${songIndex+1}.mp3`;
  masterSongName.innerText = song[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  
})
