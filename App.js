const d=document;
const top_track=new Array();
const audi=document.querySelector(".audio");
const poster=d.querySelector("#poster");
const name1=d.querySelector("#name1");
d.querySelector(".pp").innerHTML=audi.duration;
let count=0;
function run()
{
   
const card=d.querySelectorAll("#card12");
const card2=d.querySelectorAll(".gom");
card.forEach((e,i)=>{
    e.addEventListener("mouseenter",()=>{
        
        if(count%2==0)
        {   card2[i].style.visibility="visible";
            img1[i].style.visibility="visible";
        }
        
      })
      e.addEventListener("mouseleave",()=>{
        
        if(count%2==0)
        {    card2[i].style.visibility="hidden";
            img2[i].style.visibility="hidden";
        }
        
        img1[i].style.visibility="hidden";
    })
    d.querySelector(".fa-pause").addEventListener("click",()=>{
        audi.pause();
        play.style.visibility="visible";
        d.querySelector(".fa-pause").style.visibility="hidden";
        card2[i].style.visibility="hidden";
        count=count+1;
     })

     



    
})



const img1=d.querySelectorAll(".im34");
const img2=d.querySelectorAll(".im35");
img1.forEach((e,i)=>{
    
    
   e.addEventListener("click",()=>{
             count=count+1;
             audi.src=top_track[i].previewURL;
             play.style.visibility="hidden";
           
             d.querySelector(".fa-pause").style.visibility="visible";
            
             d.querySelector(".fa-pause").addEventListener("click",()=>{
                audi.pause();
                play.style.visibility="visible";
                d.querySelector(".fa-pause").style.visibility="hidden";
                img2[i].style.visibility="hidden";
                
             })
             audi.setAttribute("controls","");
             audi.setAttribute("autoplay","");
            poster.src="https://api.napster.com/imageserver/v2/albums/"+top_track[i].albumId+"/images/500x500.jpg";
            name1.innerHTML=top_track[i].name;
           e.style.visibility="hidden";
           img2[i].style.visibility="visible";
           setTimeout(() => {
            d.querySelector(".pp").innerHTML=audi.duration
        }, 1000);
        //    d.querySelector(".pp").innerHTML=audi.duration
            })

            img2[i].addEventListener("click",()=>{
                count=count+1;
                audi.pause();
                d.querySelector(".fa-pause").style.visibility="hidden";
                play.style.visibility="visible";
                play.classList.add("up");
                e.style.visibility="visible";
           img2[i].style.visibility="hidden";
           
            })

         




})

}

//-------------------------------------------------------------card js----------end--------------------------------------------------------//

//https://api.napster.com/v2.0/tracks/top?limit=5&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj//

const one=d.querySelector("#first");
const url1="https://api.napster.com/v2.0/tracks/top?limit=5&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj";
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
     ///--------------------------///
     const input2=d.createElement("input");
     input2.setAttribute("disabled","");
     input2.setAttribute("type","text");
     input2.classList.add("h4");
     input2.value=e.artistName;
     ///-------------------------------///
     const div2=d.createElement("div");
      div2.classList.add("gom");
      ///////////---------------/////////
      const img_sub1=d.createElement("img");
      img_sub1.classList.add("im34");
      img_sub1.src="./icons8-play-button-circled-100.png";
      img_sub1.alt="play";
      ///-----------------------//
      const img_sub2=d.createElement("img");
      img_sub2.classList.add("im35");
      img_sub2.src="./icons8-pause-button-stop.png";
      img_sub2.alt="pouse";

      ///----apppends-////
      div2.append(img_sub1,img_sub2);
      div1.append(img_main,input1,input2,div2);
      ////-------------////
      one.append(div1);

      setTimeout(()=>{
        run();
      },2000)
   })



}
get1();

//////-------------------------------//////////////////
 const mid=d.querySelector("#mid1");
const albums=fetch("https://api.napster.com/v2.2/albums/new?limt=1&apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj")
async function get2()
{
   const alb=await (await albums).json()
  // console.log(alb);////
   alb.albums.forEach((e,i)=>{
    // console.log(i,"=",e.id)//
     const tracks2=fetch("https://api.napster.com/v2.2/albums/"+e.id+"/tracks?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj");
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
                ///--------------------------///
                const input2=d.createElement("input");
                input2.setAttribute("disabled","");
                input2.setAttribute("type","text");
                input2.classList.add("h4");
                input2.value=e.artistName;
                ///-------------------------------///
                const div2=d.createElement("div");
                 div2.classList.add("gom");
                 ///////////---------------/////////
                 const img_sub1=d.createElement("img");
                 img_sub1.classList.add("im34");
                 img_sub1.src="./icons8-play-button-circled-100.png";
                 img_sub1.alt="play";
                 ///-----------------------//
                 const img_sub2=d.createElement("img");
                 img_sub2.classList.add("im35");
                 img_sub2.src="./icons8-pause-button-stop.png";
                 img_sub2.alt="pouse";
           
                 ///----apppends-////
                 div2.append(img_sub1,img_sub2);
                 div1.append(img_main,input1,input2,div2);
                 mid.append(div1);


             })


            
        })
     }).catch((err)=>{
        console.log(err);
     })
     
      
   })
}
get2();

console.log(top_track);

// ///v2.0/artists/top
// const albumsq=fetch("https://api.napster.com/v2.0/artists/top?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj")
// albumsq.then((da)=>{
//     da.json().then((dr)=>{
//         //  console.log(dr);
//     })
// })

// console.log("hello");
// //artist//
// const albumsp=fetch("https://api.napster.com/v2.2/artists/Art.28463069/albums?apikey=NTAzOTE3OTMtNGIxNy00YzdkLWExMDAtYTk2MzA5MDM3ZGFj")
// albumsp.then((d)=>{
//     d.json().then((df)=>{
//         console.log(df);
//     })
// })


// ////////////////-------------------------------------------------------------------------------//////////////////////////
const play=d.querySelector("#paly");
const backward=d.querySelector(".fa-backward");
const forward=d.querySelector(".fa-forward");
play.addEventListener("click",()=>{
    count=2;
    audi.play();
    play.style.visibility="hidden";
  
    d.querySelector(".fa-pause").style.visibility="visible";
    d.querySelector(".fa-pause").classList.add("up");
    
    d.querySelector(".fa-pause").addEventListener("click",()=>{
        
        audi.pause();
        play.style.visibility="visible";
        
        d.querySelector(".fa-pause").style.visibility="hidden";
        
        count=2;
    
    })
})


///////====//


