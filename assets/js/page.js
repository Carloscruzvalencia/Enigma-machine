document.addEventListener("DOMContentLoaded", function () {
    // si
    letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    userchange = [];
    // we create the input that lets the user decide to change the plugboard configuration or let the prgogram to decide the configuration
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

    document.getElementById("plugData").onclick = function () {
        for (i = 0, j = 27; i != j; i++) {
            ch = document.getElementById("letter-" + [i]).value;
            userchange.push(ch)
        }
        for (i = 0, j = 27; i != j; i++){
            if (letterArray[i] != userchange[i]){
                console.error("letter change")
            }
        }
    }

    // setTimeout(() => {
    //     console.log(document.getElementById("letter-0").value)
    //   }, 2000)
});