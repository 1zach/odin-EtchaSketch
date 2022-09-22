const container = document.getElementById("container");
const gridbox = document.getElementById("grid")
let on = true;
let paintW = false;
let color = "black"
let box = 1
const smallGrid = document.getElementById("small")
const mediumGrid = document.getElementById("medium")
const largeGrid = document.getElementById("large")

const opacityBtn = document.getElementById("fade")
opacityBtn.addEventListener("click", setColor)

const rainbowBtn = document.getElementById("rainbow")
rainbowBtn.addEventListener("click", setColor)

const blackBtn = document.getElementById("black")
blackBtn.addEventListener("click", setColor)

const colorpickerBtn = document.getElementById("colorpicker")
colorpickerBtn.addEventListener("change", setColor)

let randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}



smallGridMake()

smallGrid.addEventListener('click', function(){
    gridReset()
    gridSize = 8
    make(gridSize)
    
})

function smallGridMake() {
    gridReset()
    gridSize = 8
    make(gridSize)
}

mediumGrid.addEventListener('click', function() {
    gridReset()
    gridSize = 24
    make(gridSize)
})

largeGrid.addEventListener('click', function() {
    gridReset()
    gridSize = 48
    make(gridSize)
})

//make(gridSize)

    function make(rowNum) {
        for( i = 0; i < rowNum; i++) {
         for (r = 0; r < rowNum; r++) {
         let grid = document.createElement("div");
            grid.classList.add("box");
            grid.classList.add(`row${i}`)
            grid.setAttribute('id', `${box}`)
            grid.style.width = (640/rowNum) + "px";
            grid.style.height = (640/rowNum) + "px";
            gridbox.appendChild(grid);
            box += 1
        }
    }

    paintWhite("black")
}

function setColor() {
    if (this.id == "colorpicker") {
        color = this.value
        paintWhite(color)
    }
    else {
        color = this.id
        console.log(color)
        paintWhite(color)
    }
}

//paints boxes white
function paintWhite(color) {
    const boxes = Array.from(document.getElementsByClassName("box"))
    
    if (color == "white") {
    boxes.forEach(box => {
       box.addEventListener("mouseover", paintWhiter) 
       
         function paintWhiter() {
            box.style.opacity = 1;
            console.log("white")
            box.style.backgroundColor = "white"
         }    
        
            }
        )
    }
    else if  (color == "rainbow") {
        boxes.forEach(box => {
            console.log("rainbow")
            function rainbow() {
                let randomColor = randColor()
                box.style.backgroundColor = randomColor
                
            }
            box.addEventListener('mouseover', rainbow)
            }
        )
    }

   else if (color == "fade") { 
   boxes.forEach(box => {
        let opacity = 1
        box.style.opacity = 1
        function opacityReduce() {
            if (this.value == "white") {
                box.style.backgroundColor = "black"
            }
            else {
            opacity -=.1
            box.style.opacity = opacity;
            console.log("fade")
            }
        }
        box.addEventListener("mouseover", opacityReduce) 
            }
        )
   }
    
    else if (color == "black") {
    boxes.forEach(box => {
       box.addEventListener("mouseover", paintWhiter) 
       
         function paintWhiter() {
            box.style.opacity = 1;
            box.style.backgroundColor = "black"
         }    
        
            }
        )
    }

    else  {
        boxes.forEach(box => {
           box.addEventListener("mouseover", paintWhiter) 
          
             function paintWhiter() {
                box.style.opacity = 1;
                box.style.backgroundColor = `${color}`
             }    
            
                }
            )
        }
}
let erasers = document.getElementById("eraser")
erasers.addEventListener("click", eraser)
   
function eraser() {
    let eraser = Array.from(document.getElementsByClassName("box"))
    
   for (i=0; i < eraser.length; i++) {
        eraser[i].style.backgroundColor = "black"
        eraser[i].style.opacity = 1
    }
}


let gridResetBtn = document.getElementById("gridReset")
    gridResetBtn.addEventListener("click", gridResetClear)

   //gridReset removes boxes and then adds new ones into the same space, it solves the overflow problem 
function gridReset() {
       
        let gridRemove = Array.from(document.getElementsByClassName("box"))
        gridRemove.forEach(box => {
        box.remove()
        
        })
}

    //this function starts over completely
function gridResetClear() {
    
    let gridRemove = Array.from(document.getElementsByClassName("box"))
    gridRemove.forEach(box => {
    box.remove()
    })
     smallGridMake()
}










