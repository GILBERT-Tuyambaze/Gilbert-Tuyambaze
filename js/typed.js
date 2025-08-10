  var typed = new Typed('#typed', {
    strings:['A Fronted developer',' Youtuber','Blogger','A Backend developer','Passionate Programmer','Visionary Graphic Designer','a Creative Web Developer'],
    backSpeed: 1,
    loop: true
  });

/* ========= toggle icon navbar =========*/
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* ========= Scroll Sections Active Link =========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if( top>= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });
}
                                  
                                         
    








