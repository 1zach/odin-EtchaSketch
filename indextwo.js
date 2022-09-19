const container = document.getElementById("container")

const smallGrid = document.getElementById("small")
const mediumGrid = document.getElementById("medium")
const largeGrid = document.getElementById("large")

let opacityReducer = false;
let rainbows = false;
let gridSize = 8;
const space = document.getElementById("container")

let randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

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

function make(rowNum) {
     for( i = 0; i < rowNum; i++) {
      for (r = 0; r < rowNum; r++) {
      let grid = document.createElement("div");
         grid.classList.add("box");
         grid.style.width = (640/rowNum) + "px";
         grid.style.height = (640/rowNum) + "px";
         container.appendChild(grid);
          
     }
 }
}


let gridResetBtn = document.getElementById("gridReset")
    gridResetBtn.addEventListener("click", gridResetClear)



let erasers = document.getElementById("eraser")
erasers.addEventListener("click", eraser)
       
function eraser() {
        let eraser = Array.from(document.getElementsByClassName("box"))
        
       for (i=0; i < eraser.length; i++) {
            eraser[i].style.backgroundColor = "blue"
            eraser[i].style.opacity = 1
        
    }
    
    }
function gridReset() {
    let gridRemove = Array.from(document.getElementsByClassName("box"))
    gridRemove.forEach(box => {
    box.remove()
    })
    opacity = true;
    paintBrush(opacity)
}
//this function starts over completely
function gridResetClear() {

    let gridRemove = Array.from(document.getElementsByClassName("box"))
    gridRemove.forEach(box => {
    box.remove()
})
    smallGridMake()
}







let opacity = true;
let paintWhiter = false;
let rainbow = false;

    const opacityBtn = document.getElementById("fade")
    opacityBtn.addEventListener("click", function () {
        opacity = true;
        rainbow = false;
        paintWhiter = false;
        box(opacity)
    });

    const rainbowBtn = document.getElementById("rainbow")
    rainbowBtn.addEventListener("click", function () {
        opacity = false;
        rainbow = true;
        paintWhiter = false;
        box(rainbow)
    })

    const white = document.getElementById("white")
    white.addEventListener("click", function () {
        opacity = false;
        rainbow = false;
        paintWhiter = true;
        box.removeEventListener("click", opacityReduce)
        box(paintWhiter)
    })
        
          

           


    let boxes = Array.from(document.getElementsByClassName("box"))
        boxes.forEach(box => {
    if (x == opacity) {
        console.log(boxes)
        //box.removeEventListener("mouseover", rainbow, true)
        //box.removeEventListener("mouseover", rainbow, false)
        let opacity = 1
        function opacityReduce() {
            box.classList.remove("white")
            opacity -=.1
            box.style.opacity = opacity;
            console.log("this is running")
        }
        box.addEventListener("mouseover", opacityReduce)  
    }

    else if (x == paintWhiter) {
        box.removeEventListener("mouseover", opacityReduce)
        console.log(boxes)
        
            function paintWhite() {
                box.style.opacity = 1;
                box.classList.add("white")
                
            }
        box.addEventListener("mouseover", paintWhite)  
            
        }
    
    
    else if (x == rainbow) {
        console.log("rainbow")
        
            //box.removeEventListener("mouseover", paintWhite)
            function rainbow() {
                let randomColor = randColor()
                box.style.backgroundColor = randomColor
                
            }
            box.addEventListener('mouseover', rainbow, true)
            box.addEventListener('mouseover', rainbow, false)
                
                
                //box.classList.remove("white")
                //box.style.opacity = 1;
                //let randomColor = randColor()
               // console.log(randomColor)
                //box.style.backgroundColor = randomColor
            
        

    }
})


smallGridMake()