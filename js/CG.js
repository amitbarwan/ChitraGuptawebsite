function TabContentOver(event,TabName){
   let Overbtn =  document.getElementsByClassName("btnclass");
   let tabcontents = document.getElementsByClassName('tabContent');
   for(let i=0;i<tabcontents.length;++i)
   {
      tabcontents[i].style.display="none";
   }

    let para = document.getElementById(TabName);
    para.style.display="block";
   //  evt.currentTarget.className += " active";
}
// function TabContentOut(TabName){
//    let Outbtn =  document.getElementsByClassName("btnclass");
//    let para = document.getElementById(TabName);
//    para.style.display="none";
// }