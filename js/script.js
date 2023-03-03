
// al click del pulsante "genera" viene generata una griglia di 10*10 quadrati
// inserisco nelle celle i numeri progressivi da 1 a 100

// al click di una cella quest'ultima si colora di azzurro e stampa in console il numero inserito precedentemente dentro la cella


// grid generator button
let buttonGeneratorElement = document.getElementById("generator-btn");

// grid container
let gridContainerElement = document.getElementById("grid-container");

// grid rows and columns
let rowsAndColumns = 10 * 10;


// al click del pulsante generatore creo la griglia
buttonGeneratorElement.addEventListener("click", function(){

    // creo un ciclo di creazione della griglia
    for (let i = 1; i <= rowsAndColumns; i++) {
        
        // dichiaro la variabile corrispondente al nuovo elmento creato
        let newCell = document.createElement("div");

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


    // fa eseguire il click una sola volta
},{once : true});
