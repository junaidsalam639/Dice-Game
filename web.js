// Function to roll the dice
function rollTheDice() {
        var randomNumber1 = Math.floor(Math.random() * 5) + 1;
        let array = ["./1.png" ,"./2.png" , "./3.png", "./4.png", "./5.png", "./6.png", ];
       
       document.getElementById("img1").src = array[randomNumber1];
        
        document.getElementById("play1").innerHTML = randomNumber1 + 1 +": Number!";
};

