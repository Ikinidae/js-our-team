const members = [
    {
        "Nome" : "Wayne Barnett",
        "Ruolo" : "Founder & CEO",
        "Foto" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome" : "Angela Caroll",
        "Ruolo" : "Chief Editor",
        "Foto" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "Nome" : "Walter Gordon",
        "Ruolo" : "Office Manager",
        "Foto" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "Nome" : "Angela Lopez",
        "Ruolo" : "Social Media Manager",
        "Foto" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "Nome" : "Scott Estrada",
        "Ruolo" : "Developer",
        "Foto" : "img/scott-estrada-developer.jpg"
    },
    {
        "Nome" : "Barbara Ramos",
        "Ruolo" : "Graphic Designer",
        "Foto" : "img/barbara-ramos-graphic-designer.jpg"
    }
]

var img1 = document.createElement("img");
img1.src = members[1].Foto;
const div = document.getElementsByClassName("card-image");
div.appendChild(img1);

// var h31 = document.createElement("h3");
// h31 = members[1].Nome;
// const pippo = document.getElementById("card-text");
// pippo.classList.add("")
// pippo.append(h31);

// var p1 = document.createElement("p");
// p1 = members[1].Ruolo;
// pippo.append(p1);
