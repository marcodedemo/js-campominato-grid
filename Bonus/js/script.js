
// al click del pulsante "genera" viene generata una griglia di 10*10 quadrati
// inserisco nelle celle i numeri progressivi da 1 a 100

// al click di una cella quest'ultima si colora di azzurro e stampa in console il numero inserito precedentemente dentro la cella


// grid generator button
let buttonGeneratorElement = document.getElementById("generator-btn");

// grid container
let gridContainerElement = document.getElementById("grid-container");

// difficulty selector
let difficultySelectorElement = document.getElementById("grid-difficulty");

// grid rows and columns
let rowsAndColumns;





// al click del pulsante generatore creo la griglia
buttonGeneratorElement.addEventListener("click", function(){

    // controllo il coefficiente di difficoltà della griglia generata e creo una griglia diversa in base all'input
    if(difficultySelectorElement.value == "Difficoltà-1"){

        // imposto la griglia 10*10 nella difficoltà-1
        rowsAndColumns = 10 * 10;

    }else if(difficultySelectorElement.value == "Difficoltà-2"){

        // imposto la griglia 9*9 nella difficoltà-2
        rowsAndColumns = 9 * 9;

    }else if(difficultySelectorElement.value == "Difficoltà-3"){

        // imposto la griglia 7*7 nella difficoltà-3
        rowsAndColumns = 7 * 7;
    }

    // creo un ciclo di creazione della griglia
    for (let i = 1; i <= rowsAndColumns; i++) {
        
        // dichiaro la variabile corrispondente al nuovo elmento creato
        let newCell = document.createElement("div");

        // attribuisco una dimensione diversa alle singole celle in base alla quantità di celle da creare
        if(rowsAndColumns == 100){
            newCell.style.width = "63px";
            newCell.style.height = "63px";

        }else if(rowsAndColumns == 81){
            newCell.style.width = "70px";
            newCell.style.height = "70px";

        }else if(rowsAndColumns == 49){
            newCell.style.width = "90px";
            newCell.style.height = "90px";
        }

        // ad ogni elemento creato attribuisco una classe comune 
        newCell.classList.add("grid-square");

        // dentro ad ogni elemento creato scrivo il valore di i 
        newCell.innerText = i;

        // aggiungo l'evento click alle celle
        newCell.addEventListener("click", function(){

            // al click della cella aggiungo la classe active
            newCell.classList.toggle("active");
            
            // scrivo in console il numero della cella cliccata
            console.log(newCell.innerText)
        })

        // attribuisco la genitorialità al container dell'elemento creato
        gridContainerElement.append(newCell);

        
    }



},{once : true});
