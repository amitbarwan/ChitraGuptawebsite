function TabContentOver(TabName){
   let btn =  document.getElementsByClassName("btnclass");
   // alert("Over")
   // console.log(btn);
   console.log(TabName);
   let content = document.getElementsByClassName("tabContent");
   let counts = content.length;
   console.log(counts);
    let para = document.getElementById(TabName);
    para.style.display="block";
}
function TabContentOut(TabName){
   let btn =  document.getElementsByClassName("btnclass");
   // alert("Out");
   let para = document.getElementById(TabName);
   para.style.display="none";
}