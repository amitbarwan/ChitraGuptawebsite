function TabContentOver(event,TabName){
   let Overbtn =  document.getElementsByClassName("btnclass");
   let tabcontents = document.getElementsByClassName('tabContent');
   console.log(tabcontents.length)
   console.log(TabName)
   for(let i=0;i<tabcontents.length;++i)
   {
      tabcontents[i].style.display="none";
   }

    let para = document.getElementById(TabName);
    para.style.display="block";
   // let bodyimg = document.getElementsByClassName('bodyimg');
   document.getElementById('backimage').style.display = 'none';
   
   // backImage.style.display="none";
   // console.log(bodyimg);
   // bodyimg.getElementById("img").style.display="none";
    

   //  evt.currentTarget.className += " active";
}
// function TabContentOut(TabName){
//    let Outbtn =  document.getElementsByClassName("btnclass");
//    let para = document.getElementById(TabName);
//    para.style.display="none";
// }
function GetCulturePics(event,GalleryName){

   let button = document.getElementsByClassName("Cultrural");
  let loc = "./ChitraGuptawebsite/images/Papa.Jpg"
  console.log(loc)
  location.href=loc;
  
}