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

// comandi per prima card
var img1 = document.createElement("img");
img1.src = members[0].Foto;
const imgDiv = document.getElementsByClassName("card-image");
imgDiv[0].appendChild(img1);

var h31 = document.createElement("h3");
h31 = members[0].Nome;
const textDiv = document.getElementsByClassName("card-text");
textDiv[0].append(h31);

var p1 = document.createElement("p");
p1 = members[0].Ruolo;
textDiv[0].append(p1);

// comandi per seconda card
var img2 = document.createElement("img");
img2.src = members[1].Foto;
imgDiv[1].appendChild(img2);

var h32 = document.createElement("h3");
h32 = members[1].Nome;
textDiv[1].append(h32);

var p2 = document.createElement("p");
p2 = members[1].Ruolo;
textDiv[1].append(p2);

// comandi per terza card
var img3 = document.createElement("img");
img3.src = members[2].Foto;
imgDiv[2].appendChild(img3);

var h33 = document.createElement("h3");
h33 = members[2].Nome;
textDiv[2].append(h33);

var p3 = document.createElement("p");
p3 = members[2].Ruolo;
textDiv[2].append(p3);

// comandi per quarta card
var img4 = document.createElement("img");
img4.src = members[3].Foto;
imgDiv[3].appendChild(img4);

var h34 = document.createElement("h3");
h34 = members[3].Nome;
textDiv[3].append(h34);

var p4 = document.createElement("p");
p4 = members[3].Ruolo;
textDiv[3].append(p4);

// comandi per quinta card
var img5 = document.createElement("img");
img5.src = members[4].Foto;
imgDiv[4].appendChild(img5);

var h35 = document.createElement("h3");
h35 = members[4].Nome;
textDiv[4].append(h35);

var p5 = document.createElement("p");
p5 = members[4].Ruolo;
textDiv[4].append(p5);

// comandi per sesta card
var img6 = document.createElement("img");
img6.src = members[5].Foto;
imgDiv[5].appendChild(img6);

var h36 = document.createElement("h3");
h36 = members[5].Nome;
textDiv[5].append(h36);

var p6 = document.createElement("p");
p6 = members[5].Ruolo;
textDiv[5].append(p6);

// function help (numEl) {
//     var img(numEl) = document.createElement("img");
//     img(numEl).src = members[numEl].Foto;
//     const imgDiv = document.getElementsByClassName("card-image");
//     imgDiv[numEl].appendChild(img(numEl));
// }

// for (i=0; teamCont.length < 5; i++) {
//     help(0);
// }