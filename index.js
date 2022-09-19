//const grid = document.createElement("div")
//grid.classList.add("box")
//document.getElementById("container").appendChild(grid)

const container = document.getElementById("container");
//const gridSize = document.getElementById("gridSize").value

let on = true;
let paintW = false;
const smallGrid = document.getElementById("small")
const mediumGrid = document.getElementById("medium")
const largeGrid = document.getElementById("large")
let randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}




smallGrid.addEventListener('click', function(){
    gridReset()
    gridSize = 8
    make(gridSize)
    opacityReduce()
})
  

function smallGridMake() {
    gridReset()
    gridSize = 8
    make(gridSize)
    opacityReduce()
}



mediumGrid.addEventListener('click', function() {
    gridReset()
    gridSize = 24
    make(gridSize)
    opacityReduce()
})

largeGrid.addEventListener('click', function() {
    gridReset()
    gridSize = 48
    make(gridSize)
    opacityReduce()
})



//make(gridSize)
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
//get the buttons, run the colorchanging functions
const white = document.getElementById("white")
white.addEventListener("click", paintWhite)

const opacityBtn = document.getElementById("fade")
opacityBtn.addEventListener("click", opacityReduce)

const rainbowBtn = document.getElementById("rainbow")
rainbowBtn.addEventListener("click", rainbow)


//paints boxes white
function paintWhite() {
    
    let boxes = Array.from(document.getElementsByClassName("box"))
    boxes.forEach(box => {
        function paintWhiter() {
            box.style.opacity = 1;
            box.classList.add("white")
            
        }
        
        box.removeEventListener("mouseover", rainbow, true)
        box.removeEventListener("mouseover", rainbow, false)
        box.removeEventListener("mouseover", opacityReduce)
        box.addEventListener("mouseover", paintWhiter)  
            
        });
        
}
    

    

//changes box opacity by -.1


function opacityReduce() {
    
    let boxes = Array.from(document.getElementsByClassName("box"))
    boxes.forEach(box => {
        
        
        let opacity = 1
        function opacityReduce() {
            box.classList.remove("white")
            opacity -=.1
            box.style.opacity = opacity;
            console.log("this is running")
        }
        box.removeEventListener("mouseover", rainbow, true)
        box.removeEventListener("mouseover", rainbow, false)
        box.addEventListener("mouseover", opacityReduce)  
}
    )};


    
   
//makes boxes a random color
    

function rainbow() {
    
    console.log('rainbow')
    let boxes=Array.from(document.getElementsByClassName("box"))
        boxes.forEach(box => {
            box.removeEventListener("mouseover", paintWhite)
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
            
        })
}




let erasers = document.getElementById("eraser")
erasers.addEventListener("click", eraser)
   
function eraser() {
    let eraser = Array.from(document.getElementsByClassName("box"))
    
   for (i=0; i < eraser.length; i++) {
        eraser[i].style.backgroundColor = "blue"
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
         opacityReduce()
}
    //this function starts over completely
function gridResetClear() {
    
    let gridRemove = Array.from(document.getElementsByClassName("box"))
    gridRemove.forEach(box => {
    box.remove()
    })
     smallGridMake()
}

smallGridMake()








