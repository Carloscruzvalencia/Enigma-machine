document.addEventListener("DOMContentLoaded", function () {
    // si
    letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // we create the warning that lets the user know that this program has the option to generate a plugboard configuration
    // or he can chose to create is ow plugboard configuration
    plugwarn = document.createElement("span");
    plugwarn.setAttribute('id', "warningSpan")
    plugBoard.appendChild(plugwarn);

    document.getElementById("warningSpan").innerHTML = "if the letters are not changed, new letters will be chosen randomly";

    for (i = 0, j = 27; i != j; i++) {

        plugBoardSpan = document.createElement("span");
        plugBoardSpan.setAttribute('id', "spanLetter-" + letterArray[i])
        plugBoardSpan.innerHTML = letterArray[i]

        var plugInput = document.createElement("input");
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
        rotors = document.createElement("input")
        rotors.setAttribute('type', "number");
        rotors.setAttribute('id', "rotor-"+i);
    }
});
