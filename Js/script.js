
const codeLines = [
"using System;",
"using System.Collections.Generic;",
"",
"namespace Portfolio",
"{",
"    public class Developer",
"    {",
"        public string Name { get; set; } = \"Mo Saleem\";",
"        public string Role { get; set; } = \"Full Stack .NET Developer\";",
"        public string Location { get; set; } = \"Lucknow, India\";",
"",
"        public List<string> Skills { get; set; } = new List<string>",
"        {",
"            \"ASP.NET Core\",",
"            \"C#\",",
"            \"JavaScript\",",
"            \"Bootstrap\",",
"            \"SQL Server\"",
"        };",
"",
"        public string Passion { get; set; } = \"Clean Code & Scalable Apps\";",
"        public string Status { get; set; } = \"Available for Work\";",
"    }",
"}"
];

const codeEl = document.getElementById("code");
const speed = 40;

// Function to add syntax highlighting
function highlight(line) {
  return line
    .replace(/(using|namespace|public|class|string|List|new)/g, '<span class="keyword">$1</span>')
    .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
    .replace(/(Portfolio|Developer)/g, '<span class="type">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
}

let i = 0;

function typeCode() {
  if (i < codeLines.length) {
    const coloredLine = highlight(codeLines[i]);
    codeEl.innerHTML += coloredLine + "\n";
    i++;
    setTimeout(typeCode, speed * 3);
  }
}

window.onload = typeCode;



const scrollTop = document.getElementById("scroll-top");

window.onscroll = function() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }
};


 // Toggle mobile menu

const toggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

toggle.onclick = () => {
    navMenu.classList.add('active');
    overlay.classList.add('active');
};

closeBtn.onclick = () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
};

overlay.onclick = () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
};

document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
    });
});





  