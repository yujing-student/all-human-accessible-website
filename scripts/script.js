const body = document.querySelector("body"),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});

/*hierboven moet straks weer uitcommented zijn*/
function boeken() {
    // alert("druk op oke om naar de tabel te gaan emt daarin het boete overzicht");
    document.querySelector(".button-boeken").onclick = function openlink() {
        location.href = "boete.index.html";
        // https://www.w3schools.com/jsref/met_win_alert.asp
    }
}

function showdivresults() {/*carousel laten zien*/

    let divresults = document.querySelector(".showresults");
    // seleteer de .showresylts div

    let displaydivresults = window.getComputedStyle(divresults).display;
//     https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
//     https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
    //met deze code word alle css proporties of een element en de inhoud ervan weergegeven

//
    if (displaydivresults === "none") {
        divresults.style.display = "block";
        //     laat re
    }
    // else {
    //     divresults.style.display = "none";
    // }
}

function filtershow() {
    let formresults = document.querySelector(".collaps-open-funtion-boeken");
    // formresults.style.display = "none"; // verbeg formulier

    let button = document.querySelector(".collapsible-boeken"); // selecteer de button
    button.onclick = function () { // klik je op de button dat komt deze if else
        if (formresults.style.display === "none") {
            formresults.style.display = "block"; // laat het formulier zien of verbeg het
        } else {
            formresults.style.display = "none";
        }
    }
}


function clickright() {
    let clickrightbutton = document.querySelector('.klikrechts');
    let carousel = document.querySelector('#carousel');
    if (clickrightbutton) {
        clickrightbutton.addEventListener('click', function () {
            carousel.scrollLeft += 80;
        });
    }
}

function clickleft() {
    let clickrightbutton = document.querySelector('.kliklinks');
    let carousel = document.querySelector('#carousel');
    if (clickrightbutton) {
        clickrightbutton.addEventListener('click', function () {
            carousel.scrollLeft -= 80;
        });
    }
}


function searchfunction() {
    let input, filter, ul, li = [], booktitle, txtValue;
    input = document.getElementById("searchfunciton");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("myUL");

    for (let i = 0; i < ul.length; i++) {
        let all_ul = ul[i];/*verzamleing door de 2 ul */
        let alle_li = all_ul.getElementsByTagName("li");/*alle li itemsn*/

        for (let j = 0; j < alle_li.length; j++) {/*loop door de li items*/
            booktitle = alle_li[j].getElementsByClassName("booktitle")[0];/*haal eerste element op van de li items*/
            txtValue = booktitle.textContent || booktitle.innerText;/*txt is de */
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                alle_li[j].style.display = "";
            } else {
                alle_li[j].style.display = "none";
            }
            li.push(alle_li[j]); // Voeg het li-element toe aan de li-array
        }
    }

    let rest = document.querySelector('.reset');

    rest.addEventListener('click', function () {
        // Selecteer alle li-elementen
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "block"; //laat de resultaten weer zien
        }
    });
}


// function showdivresultslist() {/*carousel laten zien bewaren in geval van button functie*/
//
//     let divresults = document.querySelector(".showresultslist");
//     // seleteer de .showresylts div
//     divresults.style.display = "none"; // Verberg het element initieel
//
//     let button = document.querySelector(".showlist"); // Selecteer de knop
//
//     button.onclick = function () {
//         let displaydivresults = window.getComputedStyle(divresults).display;
//
//         if (displaydivresults === "none") {
//             divresults.style.display = "block"; // Toon het element als erop wordt geklikt
//         } else {
//             divresults.style.display = "none"; // Verberg het element als het al wordt weergegeven
//         }
//     }
// }

// showdivresultslist();

function hidecarusel() {/*carousel laten zien*/

    let divresults = document.querySelector("#carousel");
    // seleteer de .showresylts div
    let button = document.querySelector(".hidecouarsel"); // selecteer de button

    // button.onclick = function () { // klik je op de button dat komt deze if else
    //     if (divresults.style.display === "block") {
    //         divresults.style.display = "none"; // laat het formulier zien of verbeg het
    //     } else {
    //         divresults.style.display = "block";
    //     }
    // }

    button.addEventListener('click', function () {
        if (divresults.style.display === "block") {
            divresults.style.display = "none"; // laat het formulier zien of verbeg het
        } else {
            divresults.style.display = "block";
        }
    });
}

hidecarusel()
// todo deze funcite moet nog werkend met checkboxes
// document.querySelector("form").addEventListener('change', (event) => {
//     let filter = event.target.value;//hier is filter gelijk aan event
//     let unorderedlist = document.getElementById("myUL");
//     const listitems = unorderedlist.getElementsByTagName('li');// de li is verwijzined naar de <li> in html
//
//     // const datafiltersport = document.querySelector('[data-filter="sport"]');
//     // let sport = document.getElementById('onderwerp-sport')
//     // for loop i = 0 en die gaat door alle li's in html tot en met het einde daar staat .lenght ook voor
//     for (let i = 0; i < listitems.length; i++) {
//         listitems[i].dataset.filter
//         for (let i = 0; i < ul.length; i++) {
//             let all_ul = ul[i];/*verzamleing door de 2 ul */
//             let alle_li = all_ul.getElementsByTagName("li");/*alle li itemsn*/
//
//             for (let j = 0; j < alle_li.length; j++) {/*loop door de li items*/
//                  let booktitle = alle_li[j].getElementsByClassName("booktitle")[0];/*haal eerste element op van de li items*/
//                 let txtValue = booktitle.textContent || booktitle.innerText;/*txt is de */
//                 if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                     alle_li[j].style.display = "";
//                 } else {
//                     alle_li[j].style.display = "none";
//                 }
//                 li.push(alle_li[j]); // Voeg het li-element toe aan de li-array
//             }
//     }
// }});

// functie voor button disbale
// <button id="mijnknop" disabled="disabled"><span>submit👍</span></button>
// button[disabled="disabled"]::before
// /*  */
// function isEmpty(){/*dit kan erbij*/
//     let mijnmail = document.getElementById("mijnmail").value;
//     let mijnnaam = document.getElementById("mijnnaam").value;
//     let mijntelefoon = document.getElementById("mijntelefoon").value;
//     let mijnbedrijf = document.getElementById("mijnbedrijf").value;
//     let mijnfunctie = document.getElementById("mijnfunctie").value;
//     let mijnadres = document.getElementById("mijnadres").value;
//     let mijnwebsite = document.getElementById("mijnwebsite").value;
//
//     if (mijnmail!=="" && mijnnaam!=="" && mijntelefoon!=="" && mijnbedrijf!=="" && mijnfunctie!=="" && mijnadres!=="" && mijnwebsite!==""){
//         document.getElementById("mijnknop").removeAttribute("disabled");
//
//
//
//     }
//
//     else if (mijnmail=="" || mijnnaam=="" || mijntelefoon=="" || mijnbedrijf=="" || mijnfunctie=="" || mijnadres=="" || mijnwebsite==""){
//         document.getElementById("mijnknop").setAttribute("disabled" ,"disabled");
//     }
//
//
//
// }
// clickelementright();
// clickelementleft();


// verbegen zoekresulaten


// oude code
//dit is van de ul lijst alleen is die weg
// function showlist() {/*deze functie moet nog wekrend worden*/
//     let showlist = document.querySelector('.ul-explanation');
//     let p = document.querySelector(".more-info-paragraph-list"); // selecteer de button
//     p.onclick = function () { // klik je op de button dat komt deze if else
//         if (showlist.style.display === "none") {
//             showlist.style.display = "block"; // laat het formulier zien of verbeg het
//         } else {
//             showlist.style.display = "none";
//         }
//     }
// }
//
// function show_more_information_welkom() {
//     let formresults = document.querySelector(".more-info-welkom");//dit is de paragraph die geopen mooet worden
//     // formresults.style.display = "block"; // verbeg formulier
//     let button = document.querySelector(".button-info-welkom"); // selecteer de button
//     button.onclick = function () { // klik je op de button dat komt deze if else
//         if (formresults.style.display === "none") {
//             formresults.style.display = "block"; // laat het formulier zien of verbeg het
//         } else {
//             formresults.style.display = "none";
//         }
//     }
// }
//
// function show_more_information() {
//     let formresults = document.querySelector(".more-info");//dit is de paragraph die geopen mooet worden
//     // formresults.style.display = "block"; // verbeg formulier
//     let button = document.querySelector(".button-vraag"); // selecteer de button
//     button.onclick = function () { // klik je op de button dat komt deze if else
//         if (formresults.style.display === "none") {
//             formresults.style.display = "block"; // laat het formulier zien of verbeg het
//         } else {
//             formresults.style.display = "none";
//         }
//     }
// }
//
// function show_more_information2() {
//     let formresults = document.querySelector(".more-info2");//dit is de paragraph die geopen mooet worden
//     // formresults.style.display = "block"; // verbeg formulier
//     let button = document.querySelector(".button-vraag2"); // selecteer de button
//     button.onclick = function () { // klik je op de button dat komt deze if else
//         if (formresults.style.display === "none") {
//             formresults.style.display = "block"; // laat het formulier zien of verbeg het
//         } else {
//             formresults.style.display = "none";
//         }
//     }
// }
// function filtershowdvd() {/*filter funcies*/
//     let formresults = document.querySelector(".collaps-open-funtion-dvd");
//     // formresults.style.display = "block"; // verbeg formulier
//     let button = document.querySelector(".collapsible-dvd"); // selecteer de button
//     button.onclick = function () { // klik je op de button dat komt deze if else
//         if (formresults.style.display === "none") {
//             formresults.style.display = "block"; // laat het formulier zien of verbeg het
//         } else {
//             formresults.style.display = "none";
//         }
//     }
// }
// function searchfunctionmislukt() {
//     let input, filter, ul, li, booktitle, i, txtValue;
//     input = document.getElementById("searchfunciton");
//     filter = input.value.toUpperCase();
//     ul = document.getElementsByClassName("myUL ");
//     li = ul.getElementsByTagName("li");/*dit werkt niet omdat je hiermee de ul volledig aanroept en dit apart moet vanwege de li die erin zit*/
//
//     let rest = document.querySelector('.reset');
//     for (i = 0; i < li.length; i++) {
//         booktitle = li[i].getElementsByClassName("booktitle")[0];
//         txtValue = booktitle.textContent || booktitle.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//
//         }
//
//     }
//     rest.addEventListener('click', function () {
//         // Selecteer alle li-elementen
//         let li = document.getElementsByClassName("myUL").getElementsByTagName("li");
//         for (let i = 0; i < li.length; i++) {
//             li[i].style.display = "block";//laat de resultaten weer zien
//         }
//     });
// }

//https://codepen.io/shooft/pen/yLGyeag
// checkbox filter waarin ik de form selecteerd en de addeventlistener daar word de verandering in
//meegenomen als je op een checkbox klikt dan is dat de event

