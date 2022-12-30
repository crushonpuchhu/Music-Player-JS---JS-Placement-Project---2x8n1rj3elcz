const d=document;
let count=0;
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
})

const img1=d.querySelectorAll(".im34");
const img2=d.querySelectorAll(".im35");
img1.forEach((e,i)=>{
    
    
   e.addEventListener("click",()=>{
             count=count+1;
           e.style.visibility="hidden";
           img2[i].style.visibility="visible";
            })

            img2[i].addEventListener("click",()=>{
                count=count+1;
                e.style.visibility="visible";
           img2[i].style.visibility="hidden";
            })
})

//-------------------------------------------------------------card js------------------------------------------------------------------//

