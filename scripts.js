function startUp() {

    ActiveUserBar();
    TopTable();

}

function RandInt(bottom, top) {

    return (Math.floor((Math.random() * top) + bottom));

}

function signUpError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispSignUpError").innerHTML = errorMes;

}
function signInError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispSignInError").innerHTML = errorMes;

}

function signUp() {

    var createUsername = document.getElementById("createUsername").value;
    var email = document.getElementById("email").value;
    var createPassword = document.getElementById("CreatePassword").value;
    var confirmPassword = document.getElementById("ConfirmPassword").value;
    var OK = 1;

    if (createUsername == '' || email == '' || createPassword == '' || confirmPassword == '') {
        signUpError("All Fields Are Not Completed");
        var OK = 0;

    }

    if (confirmPassword !== createPassword){
        signUpError("Passwords Do Not Match");
        var OK = 0;
    }

    if (createUsername == localStorage.getItem(createUsername)) {
        signUpError("Username is already in use");
        var OK = 0;
    }

    if (OK == 1){

        var Username = createUsername;
        var Password = createPassword;
        var RecPassword = "a" + Username;
        var UserCoins = "c" + Username;
        var UserPoints = "p" + Username;
        localStorage.setItem(Username, Username);
        localStorage.setItem(RecPassword, Password);
        localStorage.setItem(UserCoins, 3);
        localStorage.setItem(UserPoints, 0);


        window.location.href = "Sign_In.html";

    }
}

function signIn() {

    var usernameLogin = document.getElementById("username").value;
    var passwordLogin = document.getElementById("password").value;

    var testerUser = localStorage.getItem(usernameLogin);
    var testerPass = localStorage.getItem("a" + usernameLogin);

    if (usernameLogin == 'Hidden' && passwordLogin == 'Reset') {

        localStorage.clear();
        alert("Reset")
    }

    if (usernameLogin == '' || passwordLogin == ''){
        signInError("All Fields Are Not Completed");
    }

    if(testerUser == usernameLogin && testerPass == passwordLogin){

        localStorage.setItem("Active", usernameLogin);
        window.location.href = "Help.html";

    } else {
        signInError("Username or Password is Incorrect");

    }

}

function RetActiveUsername() {
    var ActiveUser = localStorage.getItem("Active");

    return (ActiveUser)

}

function RetActiveCoins() {
    var ActiveUser = localStorage.getItem("Active");
    var RetCoins = "c" + ActiveUser;
    var ActiveCoins = parseFloat(localStorage.getItem(RetCoins));

    return (ActiveCoins)

}

function RetActivePoints() {

    var ActiveUser = localStorage.getItem("Active");
    var RetPoints = "p" + ActiveUser;
    var ActivePoints = parseFloat(localStorage.getItem(RetPoints));

    return (ActivePoints)


}

function ActiveUserBar() {

    var ActiveUser = RetActiveUsername();
    var ActiveCoins = RetActiveCoins();
    var ActivePoints = RetActivePoints();


    if (ActiveCoins == null){
        ActiveCoins = 0;
    }
    if (ActivePoints == null){
        ActivePoints = 0;
    }
    if (ActiveUser == null){
        var topBar = ("<a href='Sign_In.html'> Log In</a>");
        document.getElementById("active").innerHTML = topBar;
    }
    else {
    var topBar = ActiveUser + ":" + "    Coins:" + ActiveCoins + "    Points:" +ActivePoints;

    document.getElementById("active").innerHTML = topBar;
}
}

function TopTable() {


    var topTable = ("<table> <tr> <td><a href=Slots.html>Slots</a> </td> <td>•</td>" +
    " <td> <a href=TicTacToe.html>Tic Tac Toe</a> </td> <td>•</td>" +
    " <td> <a href=Blackjack.html>BlackJack</a> </td> <td>•</td>" +
    " <td> <a href=Earn_Points.html>Earn Points</a> </td> <td>•</td>" +
    " <td><a href=Help.html>Help</a> </td><td></tr> </table> ");

    document.getElementById("topTable").innerHTML = topTable;

}

function SignOut() {

    localStorage.removeItem("Active");
}

function GiveCoins(coins) {

    var ActiveCoins = RetActiveCoins();
    var ActiveUser = RetActiveUsername();
    var newerCoins = ActiveCoins + coins;
    localStorage.setItem("c" + ActiveUser, newerCoins);
    startUp()
}
function GivePoints(points) {

    var ActivePoints = RetActivePoints();
    var ActiveUser = RetActiveUsername();
    var newerPoints = ActivePoints + points;
    localStorage.setItem("p" + ActiveUser, newerPoints);
    startUp()
}

// Tic Tac Toe


function TicTacToeError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispTicTacToeError").innerHTML = errorMes;

}

function SelectTic1() {
    TicTacToe("SelectTic1");
}
function SelectTic2() {
    TicTacToe("SelectTic2");
}
function SelectTic3() {
    TicTacToe("SelectTic3");
}
function SelectTic4() {
    TicTacToe("SelectTic4");
}
function SelectTic5() {
    TicTacToe("SelectTic5");
}
function SelectTic6() {
    TicTacToe("SelectTic6");
}
function SelectTic7() {
    TicTacToe("SelectTic7");
}
function SelectTic8() {
    TicTacToe("SelectTic8");
}
function SelectTic9() {
    TicTacToe("SelectTic9");
}

function TicTacToe(Selected) {

    document.getElementById("dispTicTacToeError").innerHTML = " ";

    if (document.getElementById(Selected).innerText == "O" || document.getElementById(Selected).innerText == "X") {
        TicTacToeError("Someone Has Already Played Here");
    } else {
        document.getElementById(Selected).innerText = "X";
        TicTacToeCheckPlayerWin();
    }

}

function TicTacToeCheckPlayerWin() {

    var SelectTic1 = document.getElementById("SelectTic1").innerText;
    var SelectTic2 = document.getElementById("SelectTic2").innerText;
    var SelectTic3 = document.getElementById("SelectTic3").innerText;
    var SelectTic4 = document.getElementById("SelectTic4").innerText;
    var SelectTic5 = document.getElementById("SelectTic5").innerText;
    var SelectTic6 = document.getElementById("SelectTic6").innerText;
    var SelectTic7 = document.getElementById("SelectTic7").innerText;
    var SelectTic8 = document.getElementById("SelectTic8").innerText;
    var SelectTic9 = document.getElementById("SelectTic9").innerText;


    if (SelectTic1 == "X" && SelectTic2 == "X" && SelectTic3 == "X") {
        PlayerWin();
    }
    else if (SelectTic4 == "X" && SelectTic5 == "X" && SelectTic6 == "X") {
        PlayerWin();
    }
    else if (SelectTic7 == "X" && SelectTic8 == "X" && SelectTic9 == "X") {
        PlayerWin();
    }
    else if (SelectTic1 == "X" && SelectTic4 == "X" && SelectTic7 == "X") {
        PlayerWin();
    }
    else if (SelectTic2 == "X" && SelectTic5 == "X" && SelectTic8 == "X") {
        PlayerWin();
    }
    else if (SelectTic3 == "X" && SelectTic6 == "X" && SelectTic9 == "X") {
        PlayerWin();
    }
    else if (SelectTic1 == "X" && SelectTic5 == "X" && SelectTic9 == "X") {
        PlayerWin();
    }
    else if (SelectTic3 == "X" && SelectTic5 == "X" && SelectTic7 == "X") {
        PlayerWin();
    } else {
        TicTacToeCheckTie(1);
    }


        }

function TicTacToeCheckBotWin() {

    var SelectTic1 = document.getElementById("SelectTic1").innerText;
    var SelectTic2 = document.getElementById("SelectTic2").innerText;
    var SelectTic3 = document.getElementById("SelectTic3").innerText;
    var SelectTic4 = document.getElementById("SelectTic4").innerText;
    var SelectTic5 = document.getElementById("SelectTic5").innerText;
    var SelectTic6 = document.getElementById("SelectTic6").innerText;
    var SelectTic7 = document.getElementById("SelectTic7").innerText;
    var SelectTic8 = document.getElementById("SelectTic8").innerText;
    var SelectTic9 = document.getElementById("SelectTic9").innerText;


    if (SelectTic1 == "O" && SelectTic2 == "O" && SelectTic3 == "O") {
        BotWin();
    }
    else if (SelectTic4 == "O" && SelectTic5 == "O" && SelectTic6 == "O") {
        BotWin();
    }
    else if (SelectTic7 == "O" && SelectTic8 == "O" && SelectTic9 == "O") {
        BotWin();
    }
    else if (SelectTic1 == "O" && SelectTic4 == "O" && SelectTic7 == "O") {
        BotWin();
    }
    else if (SelectTic2 == "O" && SelectTic5 == "O" && SelectTic8 == "O") {
        BotWin();
    }
    else if (SelectTic3 == "O" && SelectTic6 == "O" && SelectTic9 == "O") {
        BotWin();
    }
    else if (SelectTic1 == "O" && SelectTic5 == "O" && SelectTic9 == "O") {
        BotWin();
    }
    else if (SelectTic3 == "O" && SelectTic5 == "O" && SelectTic7 == "O") {
        BotWin();
    } else {
        TicTacToeCheckTie();
    }

}

function TicTacToeCheckTie(player) {

    var SelectTic1 = document.getElementById("SelectTic1").innerText;
    var SelectTic2 = document.getElementById("SelectTic2").innerText;
    var SelectTic3 = document.getElementById("SelectTic3").innerText;
    var SelectTic4 = document.getElementById("SelectTic4").innerText;
    var SelectTic5 = document.getElementById("SelectTic5").innerText;
    var SelectTic6 = document.getElementById("SelectTic6").innerText;
    var SelectTic7 = document.getElementById("SelectTic7").innerText;
    var SelectTic8 = document.getElementById("SelectTic8").innerText;
    var SelectTic9 = document.getElementById("SelectTic9").innerText;


    if ((SelectTic1 == "X" || SelectTic1 == "O") && (SelectTic2 == "X" || SelectTic2 == "O") && (SelectTic3 == "X" || SelectTic3 == "O") && (SelectTic4 == "X" || SelectTic4 == "O") && (SelectTic5 == "X" || SelectTic5 == "O") && (SelectTic6 == "X" || SelectTic6 == "O") && (SelectTic7 == "X" || SelectTic7 == "O") && (SelectTic8 == "X" || SelectTic8 == "O") && (SelectTic9 == "X" || SelectTic9 == "O")) {
        TicTie();

    } else if (player == 1){
        TicTacToeAI();
    } else if (player == 2){

    }


}

function PlayerWin(){
    document.getElementById("dispResultsTic").innerHTML = "You Win! 5 Points Awarded";
    GivePoints(5);
    document.getElementById("TicPlayButton").innerHTML = "Play Again <br> Cost 1 Coin";

}

function BotWin(){
    document.getElementById("dispResultsTic").innerHTML = "You Lose";
    document.getElementById("TicPlayButton").innerHTML = "Play Again <br> Cost 1 Coin";

}

function TicTie(){
    document.getElementById("dispResultsTic").innerHTML = "Tie - No Points Awarded";
    document.getElementById("TicPlayButton").innerHTML = "Play Again <br> Cost 1 Coin";

}

function TicTacToePlayButton() {

    var activeCoins = RetActiveCoins();
    if (activeCoins <= 0) {
        TicTacToeError("You have Insufficient Coins")
    } else if (RetActiveUsername() == null){
        TicTacToeError("You need to sign in before you can play")
    } else if (document.getElementById("dispResultsTic").innerHTML == "Tie - No Points Awarded" || document.getElementById("dispResultsTic").innerHTML == "You Lose" || document.getElementById("dispResultsTic").innerHTML == "You Win! 5 Points Awarded") {

        GiveCoins(-1);

        document.getElementById("dispResultsTic").innerHTML = " ";

        document.getElementById("SelectTic1").innerHTML = " ";
        document.getElementById("SelectTic2").innerHTML = " ";
        document.getElementById("SelectTic3").innerHTML = " ";
        document.getElementById("SelectTic4").innerHTML = " ";
        document.getElementById("SelectTic5").innerHTML = " ";
        document.getElementById("SelectTic6").innerHTML = " ";
        document.getElementById("SelectTic7").innerHTML = " ";
        document.getElementById("SelectTic8").innerHTML = " ";
        document.getElementById("SelectTic9").innerHTML = " ";
        document.getElementById("SelectTic1").disabled = false;
        document.getElementById("SelectTic2").disabled = false;
        document.getElementById("SelectTic3").disabled = false;
        document.getElementById("SelectTic4").disabled = false;
        document.getElementById("SelectTic5").disabled = false;
        document.getElementById("SelectTic6").disabled = false;
        document.getElementById("SelectTic7").disabled = false;
        document.getElementById("SelectTic8").disabled = false;
        document.getElementById("SelectTic9").disabled = false;
        document.getElementById("SelectTic1").style.background = 'violet';
        document.getElementById("SelectTic2").style.background = 'violet';
        document.getElementById("SelectTic3").style.background = 'violet';
        document.getElementById("SelectTic4").style.background = 'violet';
        document.getElementById("SelectTic5").style.background = 'violet';
        document.getElementById("SelectTic6").style.background = 'violet';
        document.getElementById("SelectTic7").style.background = 'violet';
        document.getElementById("SelectTic8").style.background = 'violet';
        document.getElementById("SelectTic9").style.background = 'violet';
        document.getElementById("TicPlayButton").innerHTML = "Reset";

    } else if (document.getElementById("TicPlayButton").innerHTML !== "Reset") {

        GiveCoins(-1);
        document.getElementById("SelectTic1").disabled = false;
        document.getElementById("SelectTic2").disabled = false;
        document.getElementById("SelectTic3").disabled = false;
        document.getElementById("SelectTic4").disabled = false;
        document.getElementById("SelectTic5").disabled = false;
        document.getElementById("SelectTic6").disabled = false;
        document.getElementById("SelectTic7").disabled = false;
        document.getElementById("SelectTic8").disabled = false;
        document.getElementById("SelectTic9").disabled = false;
        document.getElementById("SelectTic1").style.background = 'violet';
        document.getElementById("SelectTic2").style.background = 'violet';
        document.getElementById("SelectTic3").style.background = 'violet';
        document.getElementById("SelectTic4").style.background = 'violet';
        document.getElementById("SelectTic5").style.background = 'violet';
        document.getElementById("SelectTic6").style.background = 'violet';
        document.getElementById("SelectTic7").style.background = 'violet';
        document.getElementById("SelectTic8").style.background = 'violet';
        document.getElementById("SelectTic9").style.background = 'violet';
        document.getElementById("TicPlayButton").innerHTML = "Reset";

        var first = RandInt(21, 2);
        if (first == 1) {
            TicTacToeAI();
        }
    } else {

        window.location.href = "TicTacToe.html";

    }

}


function TicTacToeAI() {

    var selectTic = RandInt(1, 9);

    var SelectTic1 = document.getElementById("SelectTic1").innerText;
    var SelectTic2 = document.getElementById("SelectTic2").innerText;
    var SelectTic3 = document.getElementById("SelectTic3").innerText;
    var SelectTic4 = document.getElementById("SelectTic4").innerText;
    var SelectTic5 = document.getElementById("SelectTic5").innerText;
    var SelectTic6 = document.getElementById("SelectTic6").innerText;
    var SelectTic7 = document.getElementById("SelectTic7").innerText;
    var SelectTic8 = document.getElementById("SelectTic8").innerText;
    var SelectTic9 = document.getElementById("SelectTic9").innerText;


    if (SelectTic1 == "X" && SelectTic2 == "X" && (SelectTic3 !== "X" && SelectTic3 !== "O")) {
        document.getElementById("SelectTic3").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic4 == "X" && SelectTic5 == "X" && (SelectTic6 !== "O" && SelectTic6 !== "X")) {
        document.getElementById("SelectTic6").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic7 == "X" && SelectTic8 == "X" && (SelectTic9 !== "X" && SelectTic9 !== "O")) {
        document.getElementById("SelectTic9").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic1 == "X" && SelectTic4 == "X" && (SelectTic7 !== "X" && SelectTic7 !== "O")) {
        document.getElementById("SelectTic7").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic2 == "X" && SelectTic5 == "X" && (SelectTic8 !== "O" && SelectTic8 !== "X")) {
        document.getElementById("SelectTic8").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic3 == "X" && SelectTic6 == "X" && (SelectTic9 !== "X" && SelectTic9 !== "O")) {
        document.getElementById("SelectTic9").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic1 == "X" && SelectTic5 == "X" && (SelectTic9 !== "X" && SelectTic9 !== "O")) {
        document.getElementById("SelectTic9").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic3 == "X" && SelectTic5 == "X" && (SelectTic7 !== "X" && SelectTic7 !== "O")) {
        document.getElementById("SelectTic7").innerText = "O";
        TicTacToeCheckBotWin();

    } else if (SelectTic3 == "X" && SelectTic2 == "X" && (SelectTic1 !== "X" && SelectTic1 !== "O")) {
        document.getElementById("SelectTic1").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic6 == "X" && SelectTic5 == "X" && (SelectTic4 !== "O" && SelectTic4 !== "X")) {
        document.getElementById("SelectTic4").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic9 == "X" && SelectTic8 == "X" && (SelectTic7 !== "X" && SelectTic7 !== "O")) {
        document.getElementById("SelectTic7").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic7 == "X" && SelectTic4 == "X" && (SelectTic1 !== "X" && SelectTic1 !== "O")) {
        document.getElementById("SelectTic1").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic8 == "X" && SelectTic5 == "X" && (SelectTic2 !== "O" && SelectTic2 !== "X")) {
        document.getElementById("SelectTic2").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic9 == "X" && SelectTic6 == "X" && (SelectTic3 !== "X" && SelectTic3 !== "O")) {
        document.getElementById("SelectTic3").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic9 == "X" && SelectTic5 == "X" && (SelectTic1 !== "X" && SelectTic1 !== "O")) {
        document.getElementById("SelectTic1").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic7 == "X" && SelectTic5 == "X" && (SelectTic3 !== "X" && SelectTic3 !== "O")) {
        document.getElementById("SelectTic3").innerText = "O";
        TicTacToeCheckBotWin();

    } else if (SelectTic1 == "X" && SelectTic3 == "X" && (SelectTic2 !== "X" && SelectTic2 !== "O")) {
        document.getElementById("SelectTic2").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic4 == "X" && SelectTic6 == "X" && (SelectTic5 !== "O" && SelectTic5 !== "X")) {
        document.getElementById("SelectTic5").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic7 == "X" && SelectTic9 == "X" && (SelectTic8 !== "X" && SelectTic8 !== "O")) {
        document.getElementById("SelectTic8").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic1 == "X" && SelectTic7 == "X" && (SelectTic4 !== "X" && SelectTic4 !== "O")) {
        document.getElementById("SelectTic4").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic2 == "X" && SelectTic8 == "X" && (SelectTic5 !== "O" && SelectTic5 !== "X")) {
        document.getElementById("SelectTic5").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic3 == "X" && SelectTic9 == "X" && (SelectTic6 !== "X" && SelectTic6 !== "O")) {
        document.getElementById("SelectTic6").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic1 == "X" && SelectTic9 == "X" && (SelectTic5 !== "X" && SelectTic5 !== "O")) {
        document.getElementById("SelectTic5").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (SelectTic3 == "X" && SelectTic7 == "X" && (SelectTic5 !== "X" && SelectTic5 !== "O")) {
        document.getElementById("SelectTic5").innerText = "O";
        TicTacToeCheckBotWin();
        
    } else if (selectTic == 1 && SelectTic1 !== "X" && SelectTic1 !== "O") {
        document.getElementById("SelectTic1").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 2 && SelectTic2 !== "X" && SelectTic2 !== "O") {
        document.getElementById("SelectTic2").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 3 && SelectTic3 !== "X" && SelectTic3 !== "O") {
        document.getElementById("SelectTic3").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 4 && SelectTic4 !== "X" && SelectTic4 !== "O") {
        document.getElementById("SelectTic4").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 5 && SelectTic5 !== "X" && SelectTic5 !== "O") {
        document.getElementById("SelectTic5").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 6 && SelectTic6 !== "X" && SelectTic6 !== "O") {
        document.getElementById("SelectTic6").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 7 && SelectTic7 !== "X" && SelectTic7 !== "O") {
        document.getElementById("SelectTic7").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 8 && SelectTic8 !== "X" && SelectTic8 !== "O") {
        document.getElementById("SelectTic8").innerText = "O";
        TicTacToeCheckBotWin();
    } else if (selectTic == 9 && SelectTic9 !== "X" && SelectTic9 !== "O") {
        document.getElementById("SelectTic9").innerText = "O";
        TicTacToeCheckBotWin();
    } else {
        TicTacToeCheckPlayerWin();
    }
    

}

//Blackjack

function BlackjackError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispBlackjackError").innerHTML = errorMes;

}

function BlackjackPlayButton() {


    var activeCoins = RetActiveCoins();
    if (activeCoins <= 4) {
        BlackjackError("You have Insufficient Coins")
    } else if (RetActiveUsername() == null) {
        BlackjackError("You need to sign in before you can play")
    } else if (document.getElementById("BlackjackPlayButton").innerHTML !== "Reset") {

        GiveCoins(-5);
        document.getElementById("BlackjackHitButton").style.background = 'violet';
        document.getElementById("BlackjackStayButton").style.background = 'violet';
        document.getElementById("BlackjackStayButton").disabled = false;
        document.getElementById("BlackjackHitButton").disabled = false;
        BlackjackDealerCardImg(2);
        document.getElementById("BlackjackPlayButton").innerHTML = "Reset";
        Blackjack("Start");
    } else {

        window.location.href = "Blackjack.html";

    }
}

function BlackjackHit() {
    Blackjack("Hit");
}
function BlackjackStay() {
    Blackjack("Stay");
}

function BlackjackDealerCardImg(number) {

    for (i = 0; i < number; i++) {
        var dealerImg = document.createElement("img");
        dealerImg.src = 'Images/back.bmp';
        dealerImg.setAttribute("height", "100");
        dealerImg.setAttribute("width", "75");
        document.getElementById("BlackjackDealer").appendChild(dealerImg);
    }

}


function Blackjack(hitOrStay) {

    if (hitOrStay == "Start") {

        var dealerCard1 = RandInt(1, 52);
        var dealerCard2 = RandInt(1, 52);
        var dealerCard3 = RandInt(1, 52);
        var dealerCard4 = RandInt(1, 52);
        var dealerCard5 = RandInt(1, 52);
        var dealerCard6 = RandInt(1, 52);
        var dealerCard7 = RandInt(1, 52);
        while (dealerCard1 == dealerCard2 || dealerCard1 == dealerCard3 || dealerCard1 == dealerCard4 || dealerCard1 == dealerCard5 || dealerCard1 == dealerCard6 || dealerCard1 == dealerCard7) {
            dealerCard1 = RandInt(1, 52);
        }
        while (dealerCard2 == dealerCard1 || dealerCard2 == dealerCard3 || dealerCard2 == dealerCard4 || dealerCard2 == dealerCard5 || dealerCard2 == dealerCard6 || dealerCard2 == dealerCard7) {
            dealerCard2 = RandInt(1, 52);
        }
        while (dealerCard3 == dealerCard2 || dealerCard3 == dealerCard1 || dealerCard3 == dealerCard4 || dealerCard3 == dealerCard5 || dealerCard3 == dealerCard6 || dealerCard3 == dealerCard7) {
            dealerCard3 = RandInt(1, 52);
        }
        while (dealerCard4 == dealerCard2 || dealerCard4 == dealerCard3 || dealerCard4 == dealerCard1 || dealerCard4 == dealerCard5 || dealerCard4 == dealerCard6 || dealerCard4 == dealerCard7) {
            dealerCard4 = RandInt(1, 52);
        }
        while (dealerCard5 == dealerCard2 || dealerCard5 == dealerCard3 || dealerCard5 == dealerCard4 || dealerCard5 == dealerCard1 || dealerCard5 == dealerCard6 || dealerCard5 == dealerCard7) {
            dealerCard5 = RandInt(1, 52);
        }
        while (dealerCard6 == dealerCard2 || dealerCard6 == dealerCard3 || dealerCard6 == dealerCard4 || dealerCard6 == dealerCard5 || dealerCard6 == dealerCard1 || dealerCard6 == dealerCard7) {
            dealerCard6 = RandInt(1, 52);
        }
        while (dealerCard7 == dealerCard2 || dealerCard7 == dealerCard3 || dealerCard7 == dealerCard4 || dealerCard7 == dealerCard5 || dealerCard7 == dealerCard6 || dealerCard7 == dealerCard1) {
            dealerCard7 = RandInt(1, 52);
        }

        var playerCard1 = RandInt(1, 52);
        var playerCard2 = RandInt(1, 52);
        var playerCard3 = RandInt(1, 52);
        var playerCard4 = RandInt(1, 52);
        var playerCard5 = RandInt(1, 52);
        var playerCard6 = RandInt(1, 52);
        var playerCard7 = RandInt(1, 52);
        while (playerCard1 == playerCard2 || playerCard1 == playerCard3 || playerCard1 == playerCard4 || playerCard1 == playerCard5 || playerCard1 == playerCard6 || playerCard1 == playerCard7 || playerCard1 == dealerCard1 || playerCard1 == dealerCard2 || playerCard1 == dealerCard3 || playerCard1 == dealerCard4 || playerCard1 == dealerCard5 || playerCard1 == dealerCard6 || playerCard1 == dealerCard7) {
            playerCard1 = RandInt(1, 52);
        }
        while (playerCard2 == playerCard1 || playerCard2 == playerCard3 || playerCard2 == playerCard4 || playerCard2 == playerCard5 || playerCard2 == playerCard6 || playerCard2 == playerCard7 || playerCard2 == dealerCard1 || playerCard2 == dealerCard2 || playerCard2 == dealerCard3 || playerCard2 == dealerCard4 || playerCard2 == dealerCard5 || playerCard2 == dealerCard6 || playerCard2 == dealerCard7) {
            playerCard2 = RandInt(1, 52);
        }
        while (playerCard3 == playerCard2 || playerCard3 == playerCard1 || playerCard3 == playerCard4 || playerCard3 == playerCard5 || playerCard3 == playerCard6 || playerCard3 == playerCard7 || playerCard3 == dealerCard1 || playerCard3 == dealerCard2 || playerCard3 == dealerCard3 || playerCard3 == dealerCard4 || playerCard3 == dealerCard5 || playerCard3 == dealerCard6 || playerCard3 == dealerCard7) {
            playerCard3 = RandInt(1, 52);
        }
        while (playerCard4 == playerCard2 || playerCard4 == playerCard3 || playerCard4 == playerCard1 || playerCard4 == playerCard5 || playerCard4 == playerCard6 || playerCard4 == playerCard7 || playerCard4 == dealerCard1 || playerCard4 == dealerCard2 || playerCard4 == dealerCard3 || playerCard4 == dealerCard4 || playerCard4 == dealerCard5 || playerCard4 == dealerCard6 || playerCard4 == dealerCard7) {
            playerCard4 = RandInt(1, 52);
        }
        while (playerCard5 == playerCard2 || playerCard5 == playerCard3 || playerCard5 == playerCard4 || playerCard5 == playerCard1 || playerCard5 == playerCard6 || playerCard5 == playerCard7 || playerCard5 == dealerCard1 || playerCard5 == dealerCard2 || playerCard5 == dealerCard3 || playerCard5 == dealerCard4 || playerCard5 == dealerCard5 || playerCard5 == dealerCard6 || playerCard5 == dealerCard7) {
            playerCard5 = RandInt(1, 52);
        }
        while (playerCard6 == playerCard2 || playerCard6 == playerCard3 || playerCard6 == playerCard4 || playerCard6 == playerCard5 || playerCard6 == playerCard1 || playerCard6 == playerCard7 || playerCard6 == dealerCard1 || playerCard6 == dealerCard2 || playerCard6 == dealerCard3 || playerCard6 == dealerCard4 || playerCard6 == dealerCard5 || playerCard6 == dealerCard6 || playerCard6 == dealerCard7) {
            playerCard6 = RandInt(1, 52);
        }
        while (playerCard7 == playerCard2 || playerCard7 == playerCard3 || playerCard7 == playerCard4 || playerCard7 == playerCard5 || playerCard7 == playerCard6 || playerCard7 == playerCard1 || playerCard7 == dealerCard1 || playerCard7 == dealerCard2 || playerCard7 == dealerCard3 || playerCard7 == dealerCard4 || playerCard7 == dealerCard5 || playerCard7 == dealerCard6 || playerCard7 == dealerCard7) {
            playerCard7 = RandInt(1, 52);
        }

        var blackjackPlayerValue = BlackjackCardID(playerCard1, "BlackjackPlayer");
        var tempPlayerValue = BlackjackCardID(playerCard2, "BlackjackPlayer");

        blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;

        sessionStorage.setItem("dealerCard1", dealerCard1);
        sessionStorage.setItem("dealerCard2", dealerCard2);
        sessionStorage.setItem("dealerCard3", dealerCard3);
        sessionStorage.setItem("dealerCard4", dealerCard4);
        sessionStorage.setItem("dealerCard5", dealerCard5);
        sessionStorage.setItem("dealerCard6", dealerCard6);
        sessionStorage.setItem("dealerCard7", dealerCard7);


        sessionStorage.setItem("playerCard3", playerCard3);
        sessionStorage.setItem("playerCard4", playerCard4);
        sessionStorage.setItem("playerCard5", playerCard5);
        sessionStorage.setItem("playerCard6", playerCard6);
        sessionStorage.setItem("playerCard7", playerCard7);
        sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
        sessionStorage.setItem("hits", 0);
        sessionStorage.setItem("DealerCardCount", 2)
    }
    else if (hitOrStay == "Hit") {

        var dealerCard1 = parseFloat(sessionStorage.getItem("dealerCard1"));
        var dealerCard2 = parseFloat(sessionStorage.getItem("dealerCard2"));
        var dealerCard3 = parseFloat(sessionStorage.getItem("dealerCard3"));
        var dealerCard4 = parseFloat(sessionStorage.getItem("dealerCard4"));
        var dealerCard5 = parseFloat(sessionStorage.getItem("dealerCard5"));
        var dealerCard6 = parseFloat(sessionStorage.getItem("dealerCard6"));
        var dealerCard7 = parseFloat(sessionStorage.getItem("dealerCard7"));

        var playerCard3 = parseFloat(sessionStorage.getItem("playerCard3"));
        var playerCard4 = parseFloat(sessionStorage.getItem("playerCard4"));
        var playerCard5 = parseFloat(sessionStorage.getItem("playerCard5"));
        var playerCard6 = parseFloat(sessionStorage.getItem("playerCard6"));
        var playerCard7 = parseFloat(sessionStorage.getItem("playerCard7"));

        var hits = parseFloat(sessionStorage.getItem("hits"));

        if (hits == 0) {

            var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue", blackjackPlayerValue));

            var tempPlayerValue = BlackjackCardID(playerCard3, "BlackjackPlayer");
            blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;
            sessionStorage.setItem("hits", 1);
            sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else {
                BlackjackDealerHitOrStay(0);
            }
        } else if (hits == 1) {

            var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue", blackjackPlayerValue));

            var tempPlayerValue = BlackjackCardID(playerCard4, "BlackjackPlayer");
            blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;
            sessionStorage.setItem("hits", 2);
            sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else {
                BlackjackDealerHitOrStay(1);
            }
        } else if (hits == 2) {

            var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue", blackjackPlayerValue));

            var tempPlayerValue = BlackjackCardID(playerCard5, "BlackjackPlayer");
            blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;
            sessionStorage.setItem("hits", 3);
            sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            }
            else {
                BlackjackDealerHitOrStay(2);
            }
        } else if (hits == 3) {

            var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue", blackjackPlayerValue));

            var tempPlayerValue = BlackjackCardID(playerCard6, "BlackjackPlayer");
            blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;
            sessionStorage.setItem("hits", 4);
            sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else {
                BlackjackDealerHitOrStay(3);
            }
        } else if (hits == 4) {

            var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue", blackjackPlayerValue));

            var tempPlayerValue = BlackjackCardID(playerCard7, "BlackjackPlayer");
            blackjackPlayerValue = blackjackPlayerValue + tempPlayerValue;
            sessionStorage.setItem("hits", 5);
            sessionStorage.setItem("blackjackPlayerValue", blackjackPlayerValue);
            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else {
                BlackjackDealerHitOrStay(4);
            }
        } else {
            BlackjackError("Hit too many Times");
            BlackjackCheck();
        }

    } else if (hitOrStay == "Stay") {
        BlackjackDealerHitOrStay("not");
        BlackjackShowHand();
        BlackjackCheck();
    }

}

function BlackjackCheck() {

    var blackjackDealerValue = parseFloat(sessionStorage.getItem("blackjackDealerValue"));
    var blackjackPlayerValue = parseFloat(sessionStorage.getItem("blackjackPlayerValue"));

            if (blackjackPlayerValue > 21) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else if (blackjackDealerValue > 21) {
                BlackjackPlayerWin();
                BlackjackShowHand();
            } else if (blackjackPlayerValue > blackjackDealerValue) {
                BlackjackPlayerWin();
                BlackjackShowHand();
            } else if (blackjackPlayerValue < blackjackDealerValue) {
                BlackjackPlayerLose();
                BlackjackShowHand();
            } else if (blackjackPlayerValue == blackjackDealerValue) {
                BlackjackPlayerTie();
                BlackjackShowHand();
            } else {
                BlackjackPlayerTie();
                BlackjackShowHand();
            }


}

function BlackjackShowHand() {

    var dealerCount = parseFloat(sessionStorage.getItem("DealerCardCount"));
    var div = document.getElementById('BlackjackDealer');
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    if (dealerCount >= 1) {
        var dealerCard1 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard1")), "BlackjackDealer");
    }
    if (dealerCount >= 2) {
        var dealerCard2 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard2")), "BlackjackDealer");
    }
    if (dealerCount >= 3) {
        var dealerCard3 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard3")), "BlackjackDealer");
    }
    if (dealerCount >= 4) {
        var dealerCard4 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard4")), "BlackjackDealer");
    }
    if (dealerCount >= 5) {
        var dealerCard5 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard5")), "BlackjackDealer");
    }
    if (dealerCount >= 6) {
        var dealerCard6 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard6")), "BlackjackDealer");
    }
    if (dealerCount >= 7) {
        var dealerCard7 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard7")), "BlackjackDealer");
    }


}

function BlackjackPlayerLose() {
    document.getElementById("dispResultsBlackjack").innerHTML = "You lose";
    document.getElementById("BlackjackHitButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").disabled = true;
    document.getElementById("BlackjackHitButton").disabled = true;
}
function BlackjackPlayerTie() {
    document.getElementById("dispResultsBlackjack").innerHTML = "You Tied";
    document.getElementById("BlackjackHitButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").disabled = true;
    document.getElementById("BlackjackHitButton").disabled = true;
}
function BlackjackPlayerWin() {
    document.getElementById("dispResultsBlackjack").innerHTML = "You Win! 15 Points Awarded";
    document.getElementById("BlackjackHitButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").style.background = 'lightslategrey';
    document.getElementById("BlackjackStayButton").disabled = true;
    document.getElementById("BlackjackHitButton").disabled = true;
    GivePoints(15);
}

function BlackjackDealerHitOrStay(number) {
    var dealerCard1 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard1")), "NA");
    var dealerCard2 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard2")), "NA");
    var dealerCard3 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard3")), "NA");
    var dealerCard4 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard4")), "NA");
    var dealerCard5 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard5")), "NA");
    var dealerCard6 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard6")), "NA");
    var dealerCard7 = BlackjackCardID(parseFloat(sessionStorage.getItem("dealerCard7")), "NA");

    var hits = parseFloat(sessionStorage.getItem("hits"));

    var blackjackDealerValue1 = dealerCard1 + dealerCard2;
    var blackjackDealerValue2 = blackjackDealerValue1 + dealerCard3;
    var blackjackDealerValue3 = blackjackDealerValue2 + dealerCard4;
    var blackjackDealerValue4 = blackjackDealerValue3 + dealerCard5;
    var blackjackDealerValue5 = blackjackDealerValue4 + dealerCard6;
    var blackjackDealerValue6 = blackjackDealerValue5 + dealerCard7;


    if (number == "not") {

        if (blackjackDealerValue4 <= 17) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 5);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue4);
        } else if (blackjackDealerValue3 <= 17) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue3);
            sessionStorage.setItem("DealerCardCount", 4);
        } else if (blackjackDealerValue2 <= 17) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 3);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue2);
        } else if (blackjackDealerValue1 <= 17) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 2);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue1);
        } else {
            BlackjackPlayerWin();
        }
    }else {
        if (blackjackDealerValue1 <= 17 && hits == 0) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 2);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue1);
        } else if (blackjackDealerValue2 <= 17 && hits == 1) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue2);
            sessionStorage.setItem("DealerCardCount", 3);
        } else if (blackjackDealerValue3 <= 17 && hits == 2) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 4);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue3);
        } else if (blackjackDealerValue4 <= 17 && hits == 3) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 5);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue4);
        }
    }
}

function BlackjackCardID(card, output) {

    if (card == 2) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c02.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 2;

        return cardValue;
    }
    else if (card == 3) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c03.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 3;

        return cardValue;
    }
    else if (card == 4) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c04.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 4;

        return cardValue;

    }
    else if (card == 5) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c05.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 5;

        return cardValue;

    }
    else if (card == 6) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c06.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 6;

        return cardValue;

    }
    else if (card == 7) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c07.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 7;

        return cardValue;

    }
    else if (card == 8) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c08.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 8;

        return cardValue;

    }
    else if (card == 9) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c09.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 9;

        return cardValue;

    }
    else if (card == 10) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c10.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;

    }
    else if (card == 11) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c11.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 12) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c12.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 13) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c13.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 2) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c02.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 2;

        return cardValue;
    }
    else if (card == 3) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c03.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 3;

        return cardValue;
    }
    else if (card == 4) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c04.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 4;

        return cardValue;

    }
    else if (card == 5) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c05.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 5;

        return cardValue;

    }
    else if (card == 6) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c06.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 6;

        return cardValue;

    }
    else if (card == 7) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c07.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 7;

        return cardValue;

    }
    else if (card == 8) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c08.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 8;

        return cardValue;

    }
    else if (card == 9) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c09.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 9;

        return cardValue;

    }
    else if (card == 10) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c10.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;

    }
    else if (card == 11) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c11.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 12) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c12.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 13) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c13.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    //D
    else if (card == 15) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d02.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 2;

        return cardValue;
    }
    else if (card == 16) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d03.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 3;

        return cardValue;
    }
    else if (card == 17) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d04.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 4;

        return cardValue;

    }
    else if (card == 18) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d05.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 5;

        return cardValue;

    }
    else if (card == 19) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d06.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 6;

        return cardValue;

    }
    else if (card == 20) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d07.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 7;

        return cardValue;

    }
    else if (card == 21) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d08.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 8;

        return cardValue;

    }
    else if (card == 22) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d09.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 9;

        return cardValue;

    }
    else if (card == 23) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d10.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;

    }
    else if (card == 24) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d11.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 25) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d12.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 26) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d13.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    //H
    else if (card == 28) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h02.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 2;

        return cardValue;
    }
    else if (card == 29) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h03.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 3;

        return cardValue;
    }
    else if (card == 30) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h04.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 4;

        return cardValue;

    }
    else if (card == 31) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h05.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 5;

        return cardValue;

    }
    else if (card == 32) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h06.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 6;

        return cardValue;

    }
    else if (card == 33) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h07.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 7;

        return cardValue;

    }
    else if (card == 34) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h08.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 8;

        return cardValue;

    }
    else if (card == 35) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h09.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 9;

        return cardValue;

    }
    else if (card == 36) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h10.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;

    }
    else if (card == 37) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h11.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 38) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h12.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 39) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h13.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    //S
    else if (card == 41) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s02.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 2;

        return cardValue;
    }
    else if (card == 42) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s03.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 3;

        return cardValue;
    }
    else if (card == 43) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s04.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 4;

        return cardValue;

    }
    else if (card == 44) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s05.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 5;

        return cardValue;

    }
    else if (card == 45) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s06.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 6;

        return cardValue;

    }
    else if (card == 46) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s07.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 7;

        return cardValue;

    }
    else if (card == 47) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s08.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 8;

        return cardValue;

    }
    else if (card == 48) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s09.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 9;

        return cardValue;

    }
    else if (card == 49) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s10.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;

    }
    else if (card == 50) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s11.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 51) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s12.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    else if (card == 52) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s13.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
        document.getElementById(output).appendChild(playerImg);
        }var cardValue = 10;

        return cardValue;
    }
    //A
    else if (card == 1) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/c01.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
        }var cardValue = 11;

        return cardValue;
    }
    else if (card == 14) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/d01.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
        }var cardValue = 11;

        return cardValue;
    }
    else if (card == 27) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/h01.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
        }var cardValue = 11;

        return cardValue;
    } else if (card == 40) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/s01.bmp';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "75");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
        }var cardValue = 11;

        return cardValue;
    }


}

//Slots  http://vegasclick.com/games/slots/how-they-work


function SlotsPlayButton() {


    var activeCoins = RetActiveCoins();
    if (activeCoins <= 0) {
        SlotsError("You have Insufficient Coins")
    } else if (RetActiveUsername() == null) {
        SlotsError("You need to sign in before you can play")
    } else if (document.getElementById("SlotsPlayButton").innerHTML !== "Reset") {

        GiveCoins(-1);

        SlotsStart();
        document.getElementById("SlotsPlayButton").innerHTML = "Reset";
    } else {

        window.location.href = "Slots.html";

    }
}


function SlotsError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispSlotsError").innerHTML = errorMes;

}

function SlotsStart() {

    var Slot1 = RandInt(1,128);
    var Slot2 = RandInt(1,128);
    var Slot3 = RandInt(1,128);
    SlotsID(128, "Slot1");

}

function SlotsID(number, output) {

    if (number <= 73) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/SBlank.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Blank";
        }
    } else if (number >= 74 && number <= 78) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/SCherry.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Cherry";
        }
    } else if (number >= 79 && number <= 94) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/S1Bar.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Bar";
        }

    } else if (number >= 95 && number <= 107) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/S2Bar.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Double Bar";
        }

    } else if (number >= 108 && number <= 118) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/S3Bar.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Triple Bar";
        }

    } else if (number >= 119 && number <= 126) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/SSeven.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Seven";
        }

    } else if (number >= 127 && number <= 128) {

        var playerImg = document.createElement("img");
        playerImg.src = 'Images/SJackpot.png';
        playerImg.setAttribute("height", "100");
        playerImg.setAttribute("width", "100");
        if (output == "NA") {
            //NA
        } else {
            document.getElementById(output).appendChild(playerImg);
            return "Jackpot";
        }

    }
}