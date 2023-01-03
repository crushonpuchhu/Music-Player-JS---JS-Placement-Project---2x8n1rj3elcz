const d=document;
const audio=d.querySelector("#song_player");
const songs_data=new Array();
const input=d.querySelector(".put");
const main=d.querySelector(".stor");
const hit=d.querySelector("#hit");
const move=d.querySelector("#move");
const for_back=d.querySelectorAll(".fa-backward,fa-forward");
hit.addEventListener("click",()=>{
  fetc(input.value);
  input.value="";
})
function fetc(task)
{   const url="https://api.napster.com/v2.2/search?query="+task+"&type=tracks&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj"
    const hit2=async ()=>{
      const ans=await (await fetch(url)).json();
      console.log(ans.search.data.tracks);
      ans.search.data.tracks.forEach((e,i) => {
           songs_data.push(e);
          const div=d.createElement("div");
          div.classList.add("card");
          div.addEventListener("click",()=>{
            run();
            audio.src=e.previewURL;
            d.querySelector(".theme").src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
            audio.play();
            d.querySelector(".fa-play").style.visibility="hidden";
            d.querySelector(".fa-pause").style.visibility="visible";
          })
          ///--------///
          const img=d.createElement("img");
          img.classList.add("poster1");
          img.src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
          img.alt="poster";
          ///-----///
          const h1=d.createElement("input");
          h1.type="text"
          h1.classList.add("name2");
          h1.setAttribute("disabled",'')
          h1.value=e.name;
          ///-----////
          const h3=d.createElement("input");
          h3.type="text"
          h3.setAttribute("disabled",'')
          h3.classList.add("artites");
          h3.value=e.artistName;
          //---//
          div.append(img,h1,h3);
          main.append(div);
        
      });
    }
    hit2();
}

///--------------------palyer------------------------///
let flag=true;
const paly_pous=d.querySelector(".paly_pous");
paly_pous.addEventListener("click",()=>{
    if(flag)
    {
        d.querySelector(".fa-play").style.visibility="hidden";
        d.querySelector(".fa-pause").style.visibility="visible";
        audio.play();
        run()
    }
    else
    {
        d.querySelector(".fa-play").style.visibility="visible";
        d.querySelector(".fa-pause").style.visibility="hidden";
        audio.pause();
    }
    flag=!flag;
})
/////---------------------------forword and backword-----------------///

// let io=0;
//  for_back[0].addEventListener("click",()=>{
//   io=io-1; 
//   if(io>=0)
//  {
//   run();
//   audio.src=songs_data[io].previewURL;
//   d.querySelector(".theme").src="https://api.napster.com/imageserver/v2/albums/"+songs_data[io].albumId+"/images/500x500.jpg";
//   audio.play();
//   d.querySelector(".fa-play").style.visibility="hidden";
//   d.querySelector(".fa-pause").style.visibility="visible";

//  }
// })
// for_back[1].addEventListener("click",()=>{
//   io=io+1; 
//   run();
//   audio.src=songs_data[io].previewURL;
//   d.querySelector(".theme").src="https://api.napster.com/imageserver/v2/albums/"+songs_data[io].albumId+"/images/500x500.jpg";
//   audio.play();
//   d.querySelector(".fa-play").style.visibility="visible";
//   d.querySelector(".fa-pause").style.visibility="hidden";
    
//  })



 //////---------------------movier-----------///
 
let current=audio.ended;
 function run()
 {  
    setTimeout(()=>{
      move.setAttribute("max",Math.floor(audio.duration)) 
    },1500)
 
  const time=setInterval(()=>{
      move.value=audio.currentTime;
      current=audio.ended;
      if(current==true)
       {
        clearInterval(time);
        d.querySelector(".fa-play").style.visibility="visible";
        d.querySelector(".fa-pause").style.visibility="hidden";
        move.value=0;
       }
    },1000)
    
    move.addEventListener("change",(e)=>{
        console.log(e.target.value);
        audio.currentTime=e.target.value;
     })
 }
 

 

