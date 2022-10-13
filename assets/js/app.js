// 1- plug boar cambia 0 - 1 depende DONE
// 2- dependiendo de el orden en el que se coloquen los rotores i el numero elegido 
// 3- en los rotores la letra cambia cambia 7 veces en total son 3 rotores cada uno tiene 26 numeros representado a una letra,
// 4- aparte los tres rotores tienen un numero marcado para hacer cambiar a los demas rotores  
// 5- alfinal la letra puede cambiar si el plug board a sido modificado

// TODO array que guarda las letras que an sido cambiadas por el plug
// TODO recoger los datos de la configuracion de los rotores de la web 


document.addEventListener('keydown', (event) => {
    // variable that contains the value of the key pressed by the user
    var letter = event.key;

    // Array of 27 letters the original enigma machine dont use the character ñ but i added so i use 27 characters instead of 26 characters
    letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    letterArray2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    // the conversion of (event.key) to lowerCase fails (and i dont know how to do it) so i compare the position of letter in both arrays
    // this variable contains the position of the letter in lowercase
    lettPos = letterArray.indexOf(letter)
    // this variable contains the position of the letter in uppercase
    lettPos2 = letterArray2.indexOf(letter)
    // this condition selects only the positive number of both variables (if the user enters a lowerCase leter the upperCase is negative = -1 so the correct answer is the one that get the positive value and also is the current position of the lowerCase/uppercase)
    // also if the value is not a character the utput is -1 so is not a letter or is not the letter expected
    if (lettPos >= 0) {
        position = lettPos
        lettType = "loWercase"
    } else {
        position = lettPos2
        lettType = "upperCase"
    }

    plug = []
    // !!!!!!!! First encryption phase the plug
    letterplug = Math.floor(Math.random() * 27);
    plug.push(letterplug)
    if (lettType == 'loWercase'){
        lettindex = letterArray[letterplug]
    }else{
        lettindex = letterArray2[letterplug]
    }
    // ------------------------------- DATA LOGS ---------------------------------------------------------
    // table for leters and is key number references and the type of leter
    function conData(UserLetter, keyNumber, type) {
        this.UserLetter = UserLetter;
        this.keyNumber = keyNumber;
        this.type = type;
    }
    var rawData = new conData(letter, position, lettType);
    console.warn("rawDATA / user input")
    console.table([rawData]);

    
    function plugData(currentLetter, plugOut,newPlugLetter) {
        this.currentLetter = currentLetter;
        this.plugOut = plugOut;
        this.newPlugLetter = newPlugLetter;
    }
    var plugData = new plugData(letter,plug[0],lettindex);
    console.warn("plug configuration")
    console.table([plugData]);
    // --------------------------------- END OF DATA LOGS ------------------------------------------------

    // // for que te indica cual es tu convinacion en el plug
    // for (i = 0; i != (plug).length; i++) {
    //     if (plug[i] == lettNumber[i]) {
    //         console.log("the letter has no change")
    //     } else {
    //         console.log("the leter " + lettNumber[i] + " equal to " + plug[i] + " equal to " + letras[i])
    //     }
    // }

    // TODO cambiar las letras del switch por numeros (puede que se pueda hacer con un for )
    // switch (letter) {
    //     case 'A':
    //     case 'a': {
    //         console.error("worksa")
    //         break

    //     } case 'B':
    //     case 'b': {
    //         console.error("worksb")
    //         break

    //     } case 'C':
    //     case 'c': {
    //         console.error("worksb")
    //         break

    //     } case 'D':
    //     case 'd': {
    //         console.error("worksb")
    //         break

    //     } case 'E':
    //     case 'e': {
    //         console.error("worksb")
    //         break

    //     } case 'F':
    //     case 'f': {
    //         console.error("worksb")
    //         break

    //     } case 'G':
    //     case 'g': {
    //         console.error("worksb")
    //         break

    //     } case 'H':
    //     case 'h': {
    //         console.error("worksb")
    //         break

    //     } case 'I':
    //     case 'i': {
    //         console.error("worksb")
    //         break

    //     } case 'J':
    //     case 'j': {
    //         console.error("worksb")
    //         break

    //     } case 'K':
    //     case 'k': {
    //         console.error("worksb")
    //         break

    //     } case 'L':
    //     case 'l': {
    //         console.error("worksb")
    //         break

    //     } case 'M':
    //     case 'm': {
    //         console.error("worksb")
    //         break
    //     } case 'N':
    //     case 'n': {
    //         console.error("worksn")
    //         break

    //     } case 'Ñ':
    //     case 'ñ': {
    //         console.error("worksb")
    //         break

    //     } case 'O':
    //     case 'o': {
    //         console.error("worksb")
    //         break

    //     } case 'P':
    //     case 'p': {
    //         console.error("worksb")
    //         break

    //     } case 'Q':
    //     case 'q': {
    //         console.error("worksb")
    //         break

    //     } case 'R':
    //     case 'r': {
    //         console.error("worksb")
    //         break

    //     } case 'S':
    //     case 's': {
    //         console.error("worksb")
    //         break

    //     } case 'T':
    //     case 't': {
    //         console.error("worksb")
    //         break

    //     } case 'U':
    //     case 'u': {
    //         console.error("worksb")
    //         break

    //     } case 'V':
    //     case 'v': {
    //         console.error("worksb")
    //         break

    //     } case 'W':
    //     case 'w': {
    //         console.error("worksb")
    //         break

    //     } case 'X':
    //     case 'x': {
    //         console.error("worksb")
    //         break

    //     } case 'Y':
    //     case 'y': {
    //         console.error("worksb")
    //         break

    //     } case 'Z':
    //     case 'z': {
    //         console.error("worksb")
    //         break

    //     }
    // }
















    // ---------------------------------------- DATA LOGS ---------------------------------------------------
    // function codeData(letter,ascii) {
    //     this.letter = letter;
    //     this.ascii = ascii;
    //   }                                                           

    //   let letAsc = new codeData(letter,asc );
    // //   var peter = new codeData('Peter', 'parker');
    // //   var harry = new codeData('Harry', 'potter');

    // console.table([letAsc]); 
})
