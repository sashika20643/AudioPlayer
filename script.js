
 let id=1;
 let count=0;
 let seek_slider = document.querySelector(".seek_slider");
 const image=document.getElementById("image");
const currenttime=document.querySelector(".current-time");
 let songs=[{"name":"Awathan hade","img":"awathanhade.jpg","audio":"Awathan hade-Harsha Withanage-www.song.lk.mp3"},{"name":"Dilko Karaar Aya","img":"Dil-Ko-Karaar-Aaya-From-Sukoon.jpg","audio":"Dil Ko Karaar Aaya Yasser Desai 320 Kbps.mp3"},{ "name":"Datha dara","img":"dethadara.jpg","audio":"Datha_Dara_Dhanith_Sri_Sarigama_lk.mp3"}]
 var music = new Audio("assets/audio/"+songs[0].audio);
 image.style.backgroundImage=' url("assets/audioimage/'+songs[0].img+'")'
 seek_slider.value = 0;
 document.querySelector(".total-duration").innerHTML=(music.duration/60).toFixed(2);

 changeBg();
 function seekTo() {

    
   let seekto = music.duration * (seek_slider.value / 100);
       music.currentTime = seekto;
  }
 function playAudio(){
  
if(id==1){  
    seekUpdate();
music.play();

setInterval(seekUpdate, 1000); 
document.getElementById("playbtn").innerHTML=' <img src="assets/image/pause.png" alt="" onclick="playAudio()" srcset="">'
document.querySelector(".total-duration").innerHTML=(music.duration/60).toFixed(2);

id=0;
}
else{
    music.pause();   
    document.getElementById("playbtn").innerHTML=' <img src="assets/image/play.png" onclick="playAudio()" alt="" srcset="">'
id=1;
}

}
function playNext(){
    if(count!=songs.length-1){

    count++;
    changeBg();
    music.pause();
    image.style.backgroundImage=' url("assets/audioimage/'+songs[count].img+'")'
     music = new Audio("assets/audio/"+songs[count].audio);
    id=1;
    playAudio();
    document.querySelector(".total-duration").innerHTML=(music.duration/60).toFixed(2);
}
}
function playPrevious(){
 if(count!=0){

        count--;
        changeBg();
        music.pause();
        image.style.backgroundImage=' url("assets/audioimage/'+songs[count].img+'")'    
        music = new Audio("assets/audio/"+songs[count].audio);
       id=1;
       playAudio();
       document.querySelector(".total-duration").innerHTML=(music.duration/60).toFixed(2);

    }

}
document.body.onkeyup = function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.keyCode == 32      
    ) {
       playAudio();
     
    }
  }

  music.onended = function() {
    playNext();
  
}; 

 
function seekUpdate() {
    document.querySelector(".total-duration").innerHTML=(music.duration/60).toFixed(2);

    let seekPosition = 0;
var minute=0;
      seekPosition = (music.currentTime/music.duration)* (100 );
      seek_slider.value = seekPosition;
      if(music.currentTime>=60){
          minute=music.currentTime/60;
          if(minute<10)  currenttime.innerHTML="0"+minute.toFixed(2);
          currenttime.innerHTML=minute.toFixed(2);
      }
      else{      currenttime.innerHTML="00:"+ music.currentTime.toFixed(0);
    }

    
  }

  function changeBg(){
      var colors=["#d03161","#ee8080","#deeff1","#bfd8d1","#178a94","#2b374b","#00a4c0"];
        var color=Math.floor(Math.random() * (7 - 0 + 1) ) + 0;
        document.body.style.backgroundColor = colors[color];
  }