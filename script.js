let i, tabcontent, tablinks;
 tabcontent = document.getElementsByClassName("tabcontent");
 tabcontent[0].style.display = "block";
 tablinks[0].className +=" active";

function openCity(evt, cityName) {
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}