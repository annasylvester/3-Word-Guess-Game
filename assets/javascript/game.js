
        
///GLOBAL letIABLES
//---------------------------------------
    // Used to record how many times a letter can be pressed
        let doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    //Holds the all the words
        let wordBank =['phoebe',
                        'joey',
                        'ross',
                        'rachel',
                        'monica',
                        'chandler',
                        'phalange',
                        'perk',
                        'unagi',
                        'seven',
                        'armadillo',
                        'lobster',
                        'sandwiches',
                        'dinosaurs',
                        'pivot',
                        'triplets',
                        ];

    //Holds choosenWord
        let choosenWord = "";
    
    //Holds letters in word
        let lettersInWord = [];

    //Holds number of blanks in word
        let numBlanks = 0;

    //Holds Blanks and successful guesses
        let blanksAndSuccesses =[];

    //Holds Wrong guesses
        let wrongLetters = [];

    //Counters
        let winCount = 0;
        let loseCount = 0;
        let guessesLeft = 9;
        let rightGuessCounter = 0;
    


//FUNCTIONS
//----------------------------------------
    function reset(){

        //Chooses word randombly from the wordBank
        choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

        //Splits the choosen word into individual letters
        lettersInWord = choosenWord.split('');

        //Get the number of blanks
        numBlanks = lettersInWord.length;

        //RESET
        letterGuessed = 0;
        rightGuessCounter = 0;
        guessesLeft = 9;
        wrongLetters =[];
        blanksAndSuccesses =[];
        doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        test=false;
        startGame();
    }

    function startGame(){

        //Chooses word randombly from the wordBank
        choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        //Splits the choosen word into individual letters
        lettersInWord = choosenWord.split('');
        //Get the number of blanks
        numBlanks = lettersInWord.length;

        //RESET
        rightGuessCounter = 0;
        guessesLeft = 9;
        wrongLetters =[];
        blanksAndSuccesses =[];
        doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

        //Populate blanks
        for(let i = 0; i< numBlanks; i++){
            blanksAndSuccesses.push('_');
            document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
        }

        //Changes HTML 
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('winCounter').innerHTML = winCount;
        document.getElementById('lossCounter').innerHTML = loseCount;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;
        
        // Testing / Debugging
        console.log(choosenWord);
        console.log(lettersInWord);
        console.log(numBlanks);
        console.log(blanksAndSuccesses);
    }

    function compareLetters(userKey){
        
        console.log('WORKING!');
        //If user key exist in choosen word then perform this function 
        if(choosenWord.indexOf(userKey) > -1){

            //Loops depending on the amount of blanks 
            for(let i = 0; i < numBlanks; i++){

                //Fills in right index with user key
                if(lettersInWord[i] === userKey){
                    rightGuessCounter++;
                    blanksAndSuccesses[i] = userKey;
                    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
                }	
            }
        
            //Test / Debug
            console.log(blanksAndSuccesses);
        }

            //Wrong Keys
            else{
                wrongLetters.push(userKey);
                guessesLeft--;
        
                //Changes HTML
                document.getElementById('numGuesses').innerHTML = guessesLeft;
                document.getElementById('wrongGuesses').innerHTML = wrongLetters;
        
                //Test / Debug
                console.log('Wrong Letters = ' + wrongLetters);
                console.log('Guesses left are ' + guessesLeft);
            }
    }

    function winLose(){

        // When number blanks if filled with right words then you win
        if(rightGuessCounter === numBlanks){

            //Counts Wins 
            winCount++;

            //Changes HTML
            document.getElementById('winCounter').innerHTML = winCount;
            alert('You Win');
            reset();
        }

        // When number of Guesses reaches 0 then You lose
        else if(guessesLeft === 0){

            //Counts losses
            loseCount++;

            //Changes HTML
            document.getElementById('lossCounter').innerHTML = loseCount;
            alert('You Lose');
            reset();
        }
    }

//MAIN PROCCESS
//-------------------------------------------	
//Initiates the Code

startGame();

    document.onkeyup = function(event){

        test = true;
        let letterGuessed = event.key;

        for(let i = 0; i < doubleWord.length; i++){

            if(letterGuessed === doubleWord[i] && test === true){

                let spliceDword = doubleWord.splice(i,1);
        
                //Test / Debug
                console.log('Double word is = ' + doubleWord[i])
                console.log('Spliced Word is = ' + spliceDword);

                compareLetters(letterGuessed);
                winLose();
            }
        }		

}
        



