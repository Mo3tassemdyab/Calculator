/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });





  


const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');




calculatorContainer.addEventListener('click', e =>{
    if (e.target.nodeName == "BUTTON") {
        switch (e.target.textContent) {
            case "C":
                clearArea();
                break;
            case "DEL":
                deleteOneValue();
                break;
            case "=":
                evaluate();
                break;
                default:
                    addToDisplayArea(e.target.textContent);    

        
        }
    }
})

function clearArea(){
    displayArea.textContent = "";
}

function addToDisplayArea(value){
    displayArea.textContent += value;
}

function deleteOneValue(){
    let currentContent = displayArea.textContent;
    displayArea.textContent = currentContent.substring(0,currentContent.length -1);
}

function evaluate(){
    try{
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
        
    }catch(error){
        displayArea.textContent = "Invalid Operation";
        console.error(error);
    }
}
    