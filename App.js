const d=document;
let pervi;
let h=0;

setTimeout(()=>{
    d.querySelector(".pp").innerHTML=(audi.duration/60).toFixed(2);  //num.toFixed(2)
},200)

const top_track=new Array();
const audi=document.querySelector(".audio");
setTimeout(()=>{
    const ran=Math.round(Math.random()*10);
    audi.src=top_track[ran].previewURL;
    name1.innerHTML=top_track[ran].name;
    poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[ran].albumId+"/images/500x500.jpg";
    audi.setAttribute("controls","");
},800)

const poster=d.querySelector("#poster");
const name1=d.querySelector("#name1");

let count=0;


function run()
{
   
const card=d.querySelectorAll("#card12");
card.forEach((e,i)=>{
     let co=true;
    e.addEventListener("click",()=>{
        audi.src=top_track[i].previewURL;
        name1.innerHTML=top_track[i].name;
        poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[i].albumId+"/images/500x500.jpg";
        audi.setAttribute("controls","");
     
        audio_control()
        // play.style.visibility="hidden";
        // d.querySelector(".fa-pause").style.visibility="visible";
        fuv(i)
       if(co)
       {
        


        
      // audi.setAttribute("autoplay","");
       d.querySelector(".fa-pause").style.visibility="visible";
       play.style.visibility="hidden";
       audi.setAttribute("autoplay","");
       }
       else
       {
        
       
        play.style.visibility="visible";
        d.querySelector(".fa-pause").style.visibility="hidden";
        audi.pause();
       }
       co=!co;
    })


    d.querySelector(".fa-pause").addEventListener("click",()=>{
        audi.pause();
        play.style.visibility="visible";
        d.querySelector(".fa-pause").style.visibility="hidden";
     })
     play.addEventListener("click",()=>{
        audi.play();
        play.style.visibility="hidden";
        d.querySelector(".fa-pause").style.visibility="visible";
     })

    
      
     



    
})

}

run();
//-------------------------------------------------------------card js----------end--------------------------------------------------------//

//https://api.napster.com/v2.0/tracks/top?limit=5&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj//
/////api// cllass//
const one=d.querySelector("#first");
const url1="https://api.napster.com/v2.0/tracks/top?limit=20&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj";
const get1= async ()=>{
   const ans= await(await fetch(url1)).json()
   ans.tracks.forEach((e,i)=>{
     top_track.push(e);

     const div1=d.createElement("div");
     div1.setAttribute("id","card12");
     div1.classList.add("card");
     ///---------///
     const img_main=d.createElement("img");
     img_main.setAttribute("id","im123");
     img_main.src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
     img_main.alt="poster";
     ////-----------------------////
     const input1=d.createElement("input");
     input1.setAttribute("disabled","");
     input1.setAttribute("type","text");
     input1.classList.add("h3");
     input1.value=e.name;
     input1.setAttribute("id","inp23")
     ///--------------------------///
     const input2=d.createElement("input");
     input2.setAttribute("disabled","");
     input2.setAttribute("type","text");
     input2.classList.add("h4");
     input2.value=e.artistName;
     input2.setAttribute("id","inpt23")
     ///-------------------------------///
     

      ///----apppends-////
    
      div1.append(img_main,input1,input2);
      ////-------------////
      one.append(div1);

      setTimeout(()=>{
        run();
      },2000)
   })



}
get1();

//////-------------------------------////////////////// api call second
 const mid=d.querySelector("#mid1");
const albums=fetch("https://api.napster.com/v2.2/albums/new?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj")
async function get2()
{
   const alb=await (await albums).json()
  // console.log(alb);////
   alb.albums.forEach((e,i)=>{
    // console.log(i,"=",e.id)//
     const tracks2=fetch("https://api.napster.com/v2.2/albums/"+e.id+"/tracks?limit=3&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj");
     tracks2.then((data)=>{
        data.json().then((data)=>{

             
             /////////////////-----------////////////// [1,2,3]
             data.tracks.forEach((e,i)=>{

                
                top_track.push(e);

                const div1=d.createElement("div");
                div1.setAttribute("id","card12");
                div1.classList.add("card");
              
                ///---------///
                const img_main=d.createElement("img");
                img_main.setAttribute("id","im123");
                img_main.src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
                img_main.alt="poster";
                ////-----------------------////
                const input1=d.createElement("input");
                input1.setAttribute("disabled","");
                input1.setAttribute("type","text");
                input1.classList.add("h3");
                input1.value=e.name;
                input1.setAttribute("id","inp23")
                ///--------------------------///
                const input2=d.createElement("input");
                input2.setAttribute("disabled","");
                input2.setAttribute("type","text");
                input2.classList.add("h4");
                input2.value=e.artistName;
                input2.setAttribute("id","inpt23")
                ///-------------------------------///
                
           
                 ///----apppends-////
                 
                 div1.append(img_main,input1,input2);
                 mid.append(div1);


             })


            
        })
     }).catch((err)=>{
        console.log(err);
     })
     
      
   })
}
get2();




// ////////////////-------------------------------------------------------------------------------//////////////////////////
const play=d.querySelector("#paly");


play.addEventListener("click",()=>{
    
    audi.play();
    play.style.visibility="hidden";
    d.querySelector(".fa-pause").style.visibility="visible";
    
    audio_control()
    d.querySelector(".fa-pause").addEventListener("click",()=>{
        
        audi.pause();
        play.style.visibility="visible";
        
        d.querySelector(".fa-pause").style.visibility="hidden";
        
        count=2;
        
    })
})

////f

function audio_control()
{
    const p=d.querySelector(".pp");
   
     
    setInterval(()=>{
        
       p.innerHTML="00 :"+Math.floor(audi.duration); 
        d.querySelector(".range").setAttribute("max",Math.floor(audi.duration)) 
         
    },1000)
    

     

    //range=Math.floor(audi.duration); 
   //d.querySelector(".range").setAttribute("range",Math.floor(audi.duration)) ; 
    
  
    let ad=audi.ended;
   const df= setInterval(()=>{
       
            //d.querySelector(".range").value=Math.floor(audi.currentTime)
        
       
        d.querySelector("#po").innerHTML="00:"+Math.floor(audi.currentTime);
        d.querySelector(".range").value=Math.floor(audi.currentTime)
       
        if(ad)
        {   
            clearInterval(df);
            play.style.visibility="visible";
            d.querySelector(".fa-pause").style.visibility="hidden";
            d.querySelector(".range").value=0;
            
        }
       
        ad=audi.ended;
        
        
    },1000)

    document.querySelector(".range").addEventListener("change",(e)=>{
 
        audi.currentTime=e.target.value;
     })
    
}




/////////////--------------/////////////
///volum///
const vol=d.querySelector("#vol");

vol.addEventListener("change",(e)=>{
    
    audi.volume=Number((e.target.value)/10);
})

//////---------------------/////////
 const backward=d.querySelector(".fa-backward");
 backward.addEventListener("click",()=>{
    const ran1=Math.round(Math.random()*10)+"";
    audi.src=top_track[ran1].previewURL;
    audi.play();
    name1.innerHTML=top_track[ran1].name;
    poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[ran1].albumId+"/images/500x500.jpg";
    audi.setAttribute("controls","");
    play.style.visibility="hidden";
    d.querySelector(".fa-pause").style.visibility="visible";
 })

 const forward=d.querySelector(".fa-forward");
 forward.addEventListener("click",()=>{
    const ran1=Math.round(Math.random()*10);
    audi.src=top_track[ran1].previewURL;
    audi.play();
    name1.innerHTML=top_track[ran1].name;
    poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[ran1].albumId+"/images/500x500.jpg";
    audi.setAttribute("controls","");
    play.style.visibility="hidden";
    d.querySelector(".fa-pause").style.visibility="visible";

 })

 



 function fuv(io)
 {  let op=io;
   if(Number.isInteger(op))
  {
   audi.addEventListener("ended",()=>{
    
      //  const ra=Math.round(Math.random()*10)+""+Math.round(Math.random()*10);
      op=op+1;
      pervi=op;
       audi.src=top_track[op].previewURL;
       audi.play();
       name1.innerHTML=top_track[op].name;
       poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[op].albumId+"/images/500x500.jpg";
       audi.setAttribute("controls","");
      
     
     })
  }
}

 function ouv()
 {
  
 
    audi.addEventListener("ended",()=>{
    
      const ra=Math.round(Math.random()*10)+""+Math.round(Math.random()*10);
       
        audi.src=top_track[ra].previewURL;
        audi.play();
        name1.innerHTML=top_track[ra].name;
        poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[ra].albumId+"/images/500x500.jpg";
        audi.setAttribute("controls","");
       
      
      
        
     })
 
 }


 const list_of_topic_100=d.querySelectorAll(".list_of_topic li");
 const filt=d.querySelectorAll(".box");
 list_of_topic_100[0].addEventListener("click",()=>{
   filt[0].style.visibility="visible";
   filt[1].style.visibility="visible";
   
   setTimeout(()=>{
      d.querySelector(".search-items").remove();
       h=0;
   },100)
   // d.querySelector(".middel_section").id="";
 })
 list_of_topic_100[1].addEventListener("click",()=>{
        filt[1].style.visibility="hidden";
        filt[0].style.visibility="visible";
      //   d.querySelector(".middel_section").setAttribute("id","seto");
 })
 list_of_topic_100[2].addEventListener("click",()=>{
   filt[0].style.visibility="hidden";
   filt[1].style.visibility="visible";
   // d.querySelector(".middel_section").setAttribute("id","seto");
 })

 const input_div=d.querySelector(".filletr");
 input_div.addEventListener("keydown",(e)=>{

   if(e.key=="Enter")
   {
      
      if(e.target.value=="all"||e.target.value=="All")
      {
         filt[0].style.visibility="visible";
         filt[1].style.visibility="visible";
      }
      else if(e.target.value=="Top 100 track"||e.target.value=="top 100 track"||e.target.value=="Top 100 "||e.target.value=="top"||e.target.value=="top")
      {
         filt[1].style.visibility="hidden";
        filt[0].style.visibility="visible";
      }
      else if(e.target.value=="New Release"||e.target.value=="new release"||e.target.value=="New"||e.target.value=="release"||e.target.value=="new")
      {
         filt[0].style.visibility="hidden";
         filt[1].style.visibility="visible";
      }
      else
      {

      }
      
     
      ////new fillter///
      if(e.target.value!="")
      {
         const arr=top_track.filter((data)=>{
            return (data.name.startsWith(e.target.value.toUpperCase())||data.name==e.target.value);
   
         })
         // d.querySelector(".search-items").style.visibility="visible";
         filterp(arr);
         
   
      }
      e.target.value="";
   }
  
   
 

 })
 
 input_div.addEventListener("dblclick",(e)=>{
  
      
      if(e.target.value=="all"||e.target.value=="All")
      {
         filt[0].style.visibility="visible";
         filt[1].style.visibility="visible";
      }
      else if(e.target.value=="Top 100 track"||e.target.value=="top 100 track"||e.target.value=="Top 100 "||e.target.value=="top"||e.target.value=="top")
      {
         filt[1].style.visibility="hidden";
        filt[0].style.visibility="visible";
      }
      else if(e.target.value=="New Release"||e.target.value=="new release"||e.target.value=="New"||e.target.value=="release"||e.target.value=="new")
      {
         filt[0].style.visibility="hidden";
         filt[1].style.visibility="visible";
      }
      else
      {

      }
      e.target.value="";
   }
  
   
 

 )

 const sufling=d.querySelector(".fa-shuffle");
 let ru=true;
 sufling.addEventListener("click",()=>{
  
  if(ru)
  {
   const ra=Math.round(Math.random()*10)+""+Math.round(Math.random()*10);
   audi.src=top_track[ra].previewURL;
   audi.play();
   name1.innerHTML=top_track[ra].name;
   poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[ra].albumId+"/images/500x500.jpg";
   audi.setAttribute("controls","");
   play.style.visibility="hidden";
   d.querySelector(".fa-pause").style.visibility="visible";
   audio_control()
   ouv()
  }
  else
  {
   fuv(-1)
  }
 
   sufling.classList.toggle("sade");
   ru=!ru;
 })

 function filterp(data)
 {  
    if(h==0)
    {
      var divb=d.createElement("div");
      divb.classList.add("search-items");
      d.querySelector("#red2").append(divb);
   
    }
   data.forEach((e,i)=>{
      const div1=d.createElement("div");
   div1.setAttribute("id","card12");
   div1.classList.add("card");
   div1.addEventListener("click",()=>{
      
      audi.src=e.previewURL;
      name1.innerHTML=e.name;
      poster.src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
      audi.setAttribute("controls","");
      audi.play();
      audio_control()
       play.style.visibility="hidden";
       d.querySelector(".fa-pause").style.visibility="visible";
      fuv(e)
   })
   ///---------///
   const img_main=d.createElement("img");
   img_main.setAttribute("id","im123");
   img_main.src="https://api.napster.com/imageserver/v2/albums/"+e.albumId+"/images/500x500.jpg";
   img_main.alt="poster";
   ////-----------------------////
   const input1=d.createElement("input");
   input1.setAttribute("disabled","");
   input1.setAttribute("type","text");
   input1.classList.add("h3");
   input1.value=e.name;
   input1.setAttribute("id","inp23")
   ///--------------------------///
   const input2=d.createElement("input");
   input2.setAttribute("disabled","");
   input2.setAttribute("type","text");
   input2.classList.add("h4");
   input2.value=e.artistName;
   input2.setAttribute("id","inpt23")
   ///-------------------------------///
   

    ///----apppends-////
  
    div1.append(img_main,input1,input2);
    ////-------------////
    d.querySelector(".search-items").append(div1);

    setTimeout(()=>{
      run();
    },2000)
   })
   h++;
 }

