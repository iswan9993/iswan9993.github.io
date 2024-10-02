
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("dark-light");
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');
const line1 = document.querySelector(".teks-carl");
const line2 = document.querySelector(".teks-carl2");
const line6 = document.querySelector(".teks-carl3");
const line7 = document.querySelector(".teks-carl4");
const line3 = document.querySelector(".line-1");
const line4 = document.querySelector(".line-3");
const line5 = document.querySelector(".line-2");
const line8 = document.querySelector(".brand-1");
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const menuIcon1 = document.querySelector(".menu-icon-1");
const menuList1 = document.getElementById("menu-list-1");


const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode"); 
    localStorage.setItem("darkmode", "active");
    
    
    document.querySelector('.teks-1').style.color = 'white';
    navbar.style.backgroundColor = "rgb(51, 46, 46)";
    

    navLinks.forEach(link => {
        link.style.color = 'white'; 
    });

    line1.style.color = 'white';
    line2.style.color = 'white';
    line6.style.color = 'white';
    line7.style.color = 'white';
    line8.style.color = 'white';
    line3.style.borderLeftColor = 'white';
    line4.style.borderLeftColor = 'white';
    line5.style.backgroundColor = 'white';
};


const enableLightmode = () => {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode"); 
    localStorage.setItem("darkmode", "inactive");
    
   
    document.querySelector('.teks-1').style.color = 'black';
    navbar.style.backgroundColor = '#B0E0E6';
    document.querySelector('.line-1').style.color = 'black';
    

    navLinks.forEach(link => {
        link.style.color = 'black'; // Ubah warna teks di navbar menjadi hitam
    });

    line1.style.color = 'black';
    line2.style.color = 'black';
    line6.style.color = 'black';
    line7.style.color = 'black';
    line8.style.color = 'black';
    line3.style.borderLeftColor = 'black';
    line4.style.borderLeftColor = 'black';
    line5.style.backgroundColor = 'black';
};


if (darkmode === "active") {
    enableDarkmode();
} else {
    enableLightmode();
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        enableLightmode();
    }
});

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    
});
menuIcon1.addEventListener("click", () => {
    menuList1.classList.toggle("hidden-1");
    
});

console.log(menuIcon, menuIcon1, menuList, menuList1);








