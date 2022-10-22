document.addEventListener("DOMContentLoaded", function () {
    // si
    letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // we create the warning that lets the user know that this program has the option to generate a plugboard configuration
    // or he can chose to create is ow plugboard configuration
    plugBoard = document.getElementById("plugBoard")
    plugwarn = document.createElement("span");
    plugwarn.setAttribute('id', "warningSpan")
    plugBoard.appendChild(plugwarn);

    document.getElementById("warningSpan").innerHTML = "if the letters are not changed, new letters will be chosen randomly";

    for (i = 0, j = 27; i != j; i++) {

        plugBoardSpan = document.createElement("span");
        plugBoardSpan.setAttribute('id', "spanLetter-" + letterArray[i])
        plugBoardSpan.innerHTML = letterArray[i]

        plugInput = document.createElement("input");
        plugInput.setAttribute("type", "text");
        plugInput.setAttribute('id', "letter-" + i,)

        plugBoard.appendChild(plugBoardSpan);
        plugBoard.appendChild(plugInput);
    }
    sendPlugBoardConf = document.createElement("input");
    sendPlugBoardConf.setAttribute('type', "button");
    sendPlugBoardConf.setAttribute('id', "plugData");
    plugBoard.appendChild(sendPlugBoardConf);

    for (i = 0, j = 3; i != j;i++ ){
        rotors = document.getElementById("rotors")
        
        rotor = document.createElement("input")
        rotor.setAttribute('type', "number");
        rotor.setAttribute('id', "rotor-"+i);


        rotors.appendChild(rotor)
    }
});
// TODO add this  part to the documentation 
// creating html elements with javascript 
// first create a variable like in the exsample in the ("") you select the tipe of item you want to create
// rotors = document.createElement("input")
// then yu set the the atribute ("type","something") 
// you also can add a id 
// rotors.setAttribute('id', "rotor-"+i);
// and to finish you ned to add the element to the variable you create earlier

