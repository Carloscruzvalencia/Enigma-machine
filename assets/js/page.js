document.addEventListener("DOMContentLoaded", function () {
    // si
    letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // we create the warning that lets the user know that this program has the option to generate a plugboard configuration
    // or he can chose to create is ow plugboard configuration
    plugBoard = document.getElementById("plugBoard")
    plugWarning = document.createElement("span");
    plugWarning.setAttribute('id', "warningSpan")
    plugWarning.innerHTML = "if the letters are not changed, new letters will be chosen randomly"
    plugBoard.appendChild(plugWarning);

    // this variable controls when the content has to jump to the next block
    org = 0

    // this section is only made for eliminate repetitive code made by me in the html and also helps wen the styles are madded
    // there i will create 4 things: 2 div / 1 span / 1 input
    // the first div is used for making groups of 3 div inside i create groups of 9 div (also know as second div)
    // the 2 div is used to contain: 1 span and 1 input
    for (i = 0 ;i!= 3 ;i++){
        // first the creation of the first div  (its inside a loop so will create 3 div)
        plugDiv = document.createElement("div")
        plugDiv.setAttribute("id","separator"+i)
        plugBoard.appendChild(plugDiv)
        
        for (j = 0, k = 9; j != k; j++) {
            // then i create the 9 groups of div 
            plugDivOrg = document.createElement("div")
            plugDivOrg.setAttribute("id","content"+org)
            plugDiv.appendChild(plugDivOrg)

            // here i create the span tha only says what letter is
            plugBoardSpan = document.createElement("span");
            plugBoardSpan.setAttribute('id', "spanLetter-" + letterArray[org])
            plugBoardSpan.innerHTML = letterArray[org]
            
            // here i create the input that will be used to make the first phase of encryption
            plugInput = document.createElement("input");
            plugInput.setAttribute("type", "text");
            plugInput.setAttribute('id', "letter-" + org, )

            // this is what says when the content has to jump to the next block
            if (org <= 9){
                // the first group and his 9 elements
                plugOrg = document.getElementById("content"+org)
                plugOrg.appendChild(plugBoardSpan);
                plugOrg.appendChild(plugInput);
            }
            else if(org >= 10 && org <= 20){
                // the second group and his 9 elements
                plugOrg = document.getElementById("content"+org)
                plugOrg.appendChild(plugBoardSpan);
                plugOrg.appendChild(plugInput);
            }

            else if (org >= 20 && org <=27){
                // the third group and his 9 elements
                plugOrg = document.getElementById("content"+org)
                plugOrg.appendChild(plugBoardSpan);
                plugOrg.appendChild(plugInput);
            }
            org++
        }
    }

    // this button is used to get the user input and send it to the plugboard  
    sendPlugBoardConf = document.createElement("input");
    sendPlugBoardConf.setAttribute('type', "button");
    sendPlugBoardConf.setAttribute('id', "plugData");
    plugBoard.appendChild(sendPlugBoardConf);

    // here i warn the user to make an input of numbers 
    rotorWarning = document.createElement("span")
    rotorWarning.innerHTML = "put a number between 0 and 27 in each rotor or let the program decide"
    rotors.appendChild(rotorWarning)

    // here i create the rotors
    for (i = 1, j = 4; i != j; i++) {
        rotors = document.getElementById("rotors")

        rotorOrg = document.createElement("div")

        rotorOrg.setAttribute("id","rotorOrg"+i)

        rotor = document.createElement("input")
        rotor.setAttribute('type', "number");
        rotor.setAttribute('id', "rotor-" + i);
        rotor.setAttribute("min",0)
        rotor.setAttribute("max",27)

        rotors.appendChild(rotorOrg)
        rotorOrg.appendChild(rotor)
    }
});

// creating html elements with javascript 
// first create a variable like in the example in the ("") you select the type of item you want to create
// rotors = document.createElement("input")
// then yu set the the attribute ("type","something") 
// you also can add a id 
// rotors.setAttribute('id', "rotor-"+i);
// and to finish you ned to add the element to the variable you create earlier