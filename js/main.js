var head=document.getElementById("head");

var button=document.getElementById("add");

var div1;

var paras;

var btn1;

var btn2;

var btn3;
 

button.addEventListener("click",function(){
      var view=document.getElementById("input");
      var click=view.value;

  div1=document.createElement("div");
  div1.classList.add("group");
   head.appendChild(div1);
 
   paras=document.createElement("p");
    paras.classList.add("para1");
    div1.appendChild(paras);
    
    paras.innerHTML=click;


   btn1 =document.createElement("button");
  div1.appendChild(btn1);
  btn1.classList.add("delete");
  btn1.innerHTML="Delete";

  btn2=document.createElement("button");
  div1.appendChild(btn2);
  btn2.classList.add("edit");
  btn2.innerHTML="Edit";

  btn3=document.createElement("button");
  div1.appendChild(btn3);
  btn3.classList.add("done")
  btn3.innerHTML="Done";



  btn1.addEventListener("click",function(){
    this.parentNode.remove();
   })
    btn2.addEventListener("click",function(){
        this.parentNode.firstChild.contentEditable=true;
        this.nextElementSibling.classList.add("close");
        this.parentNode.firstChild.style.backgroundColor="#ffff";
        this.parentNode.firstChild.style.color="#060606";
        

    })
    btn3.addEventListener("click",function(){
        this.parentNode.firstChild.contentEditable=false;
        this.classList.remove("close");
        this.parentNode.firstChild.style.backgroundColor="#E006F6";
        this.parentNode.firstChild.style.color="#ffff";
        })
})

            
        