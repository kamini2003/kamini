
console.log("welcome to spotify");

var songIndex = 0;
var songNameofPlayer;
const audioElement = new Audio('music/1.mp3');
const masterPlay = document.getElementById('masterPlay');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const songItems = Array.from(document.getElementsByClassName('songItems'));

const songs = [
   {songName:"kachiyaan kachiyaan-Jubin Nautiyal", filePath:"music/1.mp3", coverpath: "img/1.jpg" },
   {songName:"La la la-Neha kakkar", filePath:"music/2.mp3", coverpath: "img/2.jpg" },
   {songName:"Mai Ki Karaan", filePath:"music/3.mp3", coverpath: "img/3.jpg" },
   {songName:"Naach Meri Jaan", filePath:"music/4.mp3", coverpath: "img/4.jpg" },
   {songName:"Pahli Baar -Rochak Kohli", filePath:"music/5.mp3", coverpath: "img/5.jpg" },
   {songName:"Tatto", filePath:"music/6.mp3", coverpath: "img/6.jpg" },
   {songName:"Tera Mera Pyar 2.0 - Yasser Desai", filePath:"music/7.mp3", coverpath: "img/7.jpg" },
   {songName:"Tutt Gya -Stebin Ben", filePath:"music/8.mp3", coverpath: "img/8.jpg" },
   {songName:"Dua Kro -Stebin Ben", filePath:"music/9.mp3", coverpath: "img/9.jpg" },
   {songName:"Hum Nashe Mai To Nahi", filePath:"music/10.mp3", coverpath: "love.jpg"}
];

var songItemPlay='';
var collection = document.getElementsByClassName("songItemPlay");
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
     songNameofPlayer = songs[i].songName;
});


masterPlay.addEventListener("click", () =>{
      if (audioElement.paused|| audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            collection[songIndex].classList.remove('fa-circle-play');
            collection[songIndex].classList.add('fa-circle-pause');
            gif.style.opacity = 1;
      }else{
            audioElement.pause();
            masterPlay.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            collection[songIndex].classList.remove('fa-circle-pause');
            collection[songIndex].classList.add('fa-circle-play'); 
            gif.style.opacity = 0;
      }
});

audioElement.addEventListener('timeupdate', () =>{
    //  console.log("timeupdate");      
      progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
     // console.log(progress);      
      myProgressBar.value = progress;     
});

myProgressBar.addEventListener('change', ()=>{
      audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = ()=>{
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');

      });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i)=>{
      element.addEventListener('click', (e)=>{
          makeAllPlays();
          Index = parseInt(e.target.id);
           e.target.classList.remove('fa-circle-play');
           e.target.classList.add('fa-circle-pause');
           audioElement.src = songs[i].filePath;
      //      audioElement.src = `music/${Index+1}.mp3`;
           audioElement.currentTime = 0;
           audioElement.play();
           masterPlay.classList.remove('fa-circle-play');
           masterPlay.classList.add('fa-circle-pause'); 
           songIndex =  Index;  
         //  console.log("song no." + songIndex);

         document.getElementById("demo").innerText = songs[i].songName;

      });
});

document.getElementById('next').addEventListener('click', ()=>{
       if (songIndex>=9){
           songIndex = 0;
       }else{
            songIndex += 1;
       }
       audioElement.src = `music/${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');  
       collection[songIndex].classList.remove('fa-circle-play');
       collection[songIndex].classList.add('fa-circle-pause');
       collection[songIndex-1].classList.remove('fa-circle-pause');         
       collection[songIndex-1].classList.add('fa-circle-play');         

});
document.getElementById('previous').addEventListener('click', ()=>{
       if (songIndex<=0){
           songIndex = 9;
       }else{
            songIndex -= 1;
       }
       audioElement.src = `music/${songIndex+1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       collection[songIndex].classList.remove('fa-circle-play');
       collection[songIndex].classList.add('fa-circle-pause');
       collection[songIndex+1].classList.remove('fa-circle-pause');         
       collection[songIndex+1].classList.add('fa-circle-play');            

});