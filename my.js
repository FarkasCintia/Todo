let teendoBox = document.getElementById("teendoBox");
let hozzaadInput = document.getElementById("UjElem");

let teendokData = null;

$(document).ready(function(){
    Beolvas();
})

function Beolvas() {
    $.ajax({
        url: "todo.json",
        method: "get",
        dataType: "json",
        success: function (data){
            teendokData = data;
            console.log(teendokData);

            teendokData.forEach(element => {
                let doboz = document.createElement("div");
                let checkBox = document.createElement("input");
                checkBox.type = "checkBox";
                let span = document.createElement("span");
                span.innerHTML = element.teendők;
                doboz.appendChild(span);
                doboz.appendChild(checkBox);
                teendoBox.appendChild(doboz);

                element.checkBox = checkBox;

                checkBox.onchange = function(){
                    if(checkBox.checked){
                        span.style.textDecoration = "line-through";
                    }else{
                        span.style.textDecoration = "initial";
                    }

                    console.log(teendokData);
                }
            });
        }
    })
}

function Pipal(ertek) {
    teendokData.forEach(element => {
        element.checkBox.checked = ertek;
        element.checkBox.onchange();
    });
}

function KijeloltTorles() {
    let fennMaradoElemek = [];

    for (let index = 0; index < teendokData.length; index++) {
        let teendo = teendokData[index];

        if(teendo.checkBox.checked){
            teendoBox.removeChild(teendo.checkBox.parentNode);
        }else{
            fennMaradoElemek.push(teendo);
        }
    }

    teendokData = fennMaradoElemek;
}


function hozzaad(){
    let nev = hozzaadInput.value;

    let element = {
        teendők: nev
    }
    teendokData.push(element);


    let doboz = document.createElement("div");
    let checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    let span = document.createElement("span");
    span.innerHTML = element.teendők;
    doboz.appendChild(span);
    doboz.appendChild(checkBox);
    teendoBox.appendChild(doboz);

    element.checkBox = checkBox;

    checkBox.onchange = function(){
        if(checkBox.checked){
            span.style.textDecoration = "line-through";
        }else{
            span.style.textDecoration = "initial";
        }
    }
}