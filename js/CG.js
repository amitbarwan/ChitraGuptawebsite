function TabContent(){
   let btn =  document.getElementById("btnclass");
   console.log(btn);
   let content = document.getElementsByClassName("tabContent");
   let counts = content.length;
   for(let i=0;i<counts;++i)
   {
        content[i].style.display = "none";

   }
//    console.log(counts);
//     let tabcontent =  document.getElementById("btnHome1");
//    if(btn!="none")
//    {
//     alert("If"); 
//     tabcontent.style.display="Active";
//    }
//    else
//    {
//        alert("Else");
//     tabcontent.style.display="none";
//    }
  
}