// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// the event is on default mode
function makeGrid(event) {
    event.preventDefault()
    
     //the variable takes the value of gridheight and gridwidth 
    let gridHeight = document.getElementById('inputHeight').value
    let gridWidth = document.getElementById('inputWidth').value
    // getting the document of the table  
    let ikramCanvas = document.getElementById('pixelCanvas')

    resetCanvas()

    // uses grideHeight and gridWidth to loop and creat table rows and cols
    for(let i=0; i < gridHeight; i++) {
      // insert a tr in to the table 
      let canvasGrid = ikramCanvas.insertRow(-1)
      for(let j=0; j < gridWidth; j++) {
           //insert a td to the tr.
           let gridEvent = canvasGrid.insertCell(j)
           //attach an event to the td to chnge background colors.
           gridEvent.addEventListener('click', gridCallback)
      }
    }
}

//this changes color when td gets clicked on.
function gridCallback(event) {
    // get the color value
    let userColor = document.getElementById('colorPicker').value
    let gridColor = event.target.style.backgroundColor
    if( gridColor == '') {
        event.target.style.backgroundColor = userColor
    } else {
        event.target.style.backgroundColor = ''
    }
}

// Reset canvas rows.
function resetCanvas() {
  let pxlCanvas = document.getElementById('pixelCanvas')
  let pxlRows   = pxlCanvas.rows.length
  if( pxlRows > 0 ) {
    pxlCanvas.innerHTML = ''
  }
}