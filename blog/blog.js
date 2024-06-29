let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');
menuIcon.forEach(icon => {
  icon.onclick = () => {
    icon.classList.toggle('bx-x');
    navbar.forEach(nav => nav.classList.toggle('active'));
  }
});

// Add an event listener to navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    // Remove 'active' class from navbar
    document.querySelectorAll('.navbar').forEach(nav => {
      nav.classList.remove('active');
    });
    // Toggle the menu icon
    document.querySelectorAll('#menu-icon').forEach(icon => {
      icon.classList.remove('bx-x'); // Remove the 'bx-x' class to close the hamburger menu
    });
  });
});
function search(){
    let box=[...document.querySelectorAll(".fcard")]
    let val=document.getElementById('input');
    
    
    let filter=val.value.toUpperCase().trim();
    console.log(filter)
    console.log(box)
    
    for(let i=0;i<box.length;i++){
      let component=box[i];
      let h2=component.querySelector('h2');
      let componentName=h2.textContent|| h2.innerText;
      console.log(componentName)
      console.log((componentName.toUpperCase().indexOf(filter)))
    
      if(componentName.toUpperCase().indexOf(filter)>-1){
        console.log(`Showing card ${i}: ${componentName}`);
        component.style.display="flex";
      
       
      }
      else{
        console.log(`Hiding card ${i}: ${componentName}`);
        component.style.display="none";
       
      }
    }
    }
    