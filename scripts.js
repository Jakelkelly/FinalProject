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
    " <td> <a href=Earn_Points.html>Earn Coins</a> </td> <td>•</td>" +
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

        var dealerStart = dealerCard1 + dealerCard2;

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
        sessionStorage.setItem("DealerCardCount", 2);
        sessionStorage.setItem("blackjackDealerValue",dealerStart);
    } if (hitOrStay == "Hit") {
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

    } if (hitOrStay == "Stay") {
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

        if (blackjackDealerValue4 <= 15) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 5);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue4);
        } else if (blackjackDealerValue3 <= 15) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue3);
            sessionStorage.setItem("DealerCardCount", 4);
        } else if (blackjackDealerValue2 <= 15) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 3);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue2);
        } else if (blackjackDealerValue1 <= 15) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 2);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue1);
        } else {
            BlackjackPlayerWin();
        }
    } else {
        if (blackjackDealerValue1 <= 15 && hits == 0) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 2);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue1);
        } else if (blackjackDealerValue2 <= 15 && hits == 1) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue2);
            sessionStorage.setItem("DealerCardCount", 3);
        } else if (blackjackDealerValue3 <= 15 && hits == 2) {
            BlackjackDealerCardImg(1);
            sessionStorage.setItem("DealerCardCount", 4);
            sessionStorage.setItem("blackjackDealerValue", blackjackDealerValue3);
        } else if (blackjackDealerValue4 <= 15 && hits == 3) {
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

function SlotsEffects(output) {
    var num = RandInt(1,2);
    if (num == 1) {
        document.getElementById("Test").src="Images/SCherry.png";
    } if (num == 2) {
        document.getElementById("Test").src="Images/SSeven.png";
    }


}

function SlotsStart() {

    var Slot1 = RandInt(1,128);
    var Slot2 = RandInt(1,128);
    var Slot3 = RandInt(1,128);
    ///var int = setInterval("SlotsEffects('Slot1')",500);
    var slot1 = SlotsID(Slot1, "Slot1");
    var slot2 = SlotsID(Slot2, "Slot2");
    var slot3 = SlotsID(Slot3, "Slot3");
    var slot1b = slot1.search('Bar');
    var slot2b = slot2.search('Bar');
    var slot3b = slot3.search('Bar');

if (slot1 == "Jackpot" && slot2 == "Jackpot" && slot3 == "Jackpot"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 1666 Points Awarded";
    GivePoints(1666);
} else if (slot1 == "Seven" && slot2 == "Seven" && slot3 == "Seven"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 300 Points Awarded";
    GivePoints(300);
} else if (slot1 == "Triple Bar" && slot2 == "Triple Bar" && slot3 == "Triple Bar"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 100 Points Awarded";
    GivePoints(100);
} else if (slot1 == "Double Bar" && slot2 == "Double Bar" && slot3 == "Double Bar"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 50 Points Awarded";
    GivePoints(50);
} else if (slot1 == "Bar" && slot2 == "Bar" && slot3 == "Bar"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 25 Points Awarded";
    GivePoints(25);
} else if (slot1 == "Bar" && slot2 == "Bar" && slot3 == "Bar"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 25 Points Awarded";
    GivePoints(25);
} else if (slot1b > -1 && slot2b > -1 && slot3b > -1){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 12 Points Awarded";
    GivePoints(12);
} else if (slot1 == "Cherry" && slot2 == "Cherry" && slot3 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 12 Points Awarded";
    GivePoints(12);
} else if (slot1 == "Cherry" && slot2 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 6 Points Awarded";
    GivePoints(6);
} else if (slot1 == "Cherry" && slot3 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 6 Points Awarded";
    GivePoints(6);
} else if (slot3 == "Cherry" && slot2 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 6 Points Awarded";
    GivePoints(6);
} else if (slot1 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 3 Points Awarded";
    GivePoints(6);
} else if (slot2 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 3 Points Awarded";
    GivePoints(6);
} else if (slot3 == "Cherry"){
    document.getElementById("dispResultsSlots").innerHTML = "You Win! 3 Points Awarded";
    GivePoints(6);
}

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

//States Quiz

function EarnScore() {

    var earn = sessionStorage.getItem("Earn");
    var Ans9 = document.getElementById("txt9").value;


    if (earn == "State"){
        StatesScoreQuiz();
    }  else if (earn == "Add"){
        AdditionScoreQuiz();
    }  else if (earn == "Sub"){
        SubtractionScoreQuiz();
    } else if (earn == "Mul"){
        MultiplicationScoreQuiz();
    } else if (earn == "Div"){
        DivisionScoreQuiz();
    } else if (Ans9 == "Hidden Coins"){
        GiveCoins(25);
    } else if (earn == "NA") {
    EarnError("Select a problem");
    }



}

function EarnError(error) {

    var errorMes = "*" +error;
    document.getElementById("dispEarnError").innerHTML = errorMes;

}


var ABBREVIATIONS = ["AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
];

var STATES = ["Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
];
var STATES_QUIZ = [];
var CORRECT_ANSWERS = [];
var ENTERED_ANSWERS = [];


function RandomOneOf(list) {
    return list[RandomInt(0, list.length-1)];
}

function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StatesCreateQuiz() {

    document.getElementById("dispEarnError").innerHTML = "";
    document.getElementById("dispEarn").innerHTML = "";

    sessionStorage.setItem("Earn", "State");

    for (i = 0; i < 20; i++){
        STATES_QUIZ.pop;
        CORRECT_ANSWERS.pop;
        ENTERED_ANSWERS.pop;
    }

    var count = 0;

    while (count != 10){

        var stateName = RandomOneOf(STATES);
        var index = STATES.indexOf(stateName);
        if (index !== stateName){
            STATES_QUIZ.push(stateName);
            CORRECT_ANSWERS.push(ABBREVIATIONS[STATES.indexOf(stateName)]);
            count++;
        }

    }
    document.getElementById("div1").innerHTML = STATES_QUIZ[0];
    document.getElementById("div2").innerHTML = STATES_QUIZ[1];
    document.getElementById("div3").innerHTML = STATES_QUIZ[2];
    document.getElementById("div4").innerHTML = STATES_QUIZ[3];
    document.getElementById("div5").innerHTML = STATES_QUIZ[4];
    document.getElementById("div6").innerHTML = STATES_QUIZ[5];
    document.getElementById("div7").innerHTML = STATES_QUIZ[6];
    document.getElementById("div8").innerHTML = STATES_QUIZ[7];
    document.getElementById("div9").innerHTML = STATES_QUIZ[8];
    document.getElementById("div10").innerHTML = STATES_QUIZ[9];

}


function StatesScoreQuiz() {

    for (i = 0; i < 10; i++){
        ENTERED_ANSWERS.pop();
    }
    ENTERED_ANSWERS.push(document.getElementById("txt1").value);
    ENTERED_ANSWERS.push(document.getElementById("txt2").value);
    ENTERED_ANSWERS.push(document.getElementById("txt3").value);
    ENTERED_ANSWERS.push(document.getElementById("txt4").value);
    ENTERED_ANSWERS.push(document.getElementById("txt5").value);
    ENTERED_ANSWERS.push(document.getElementById("txt6").value);
    ENTERED_ANSWERS.push(document.getElementById("txt7").value);
    ENTERED_ANSWERS.push(document.getElementById("txt8").value);
    ENTERED_ANSWERS.push(document.getElementById("txt9").value);
    ENTERED_ANSWERS.push(document.getElementById("txt10").value);

    var correct = 0;

    for (i = 0; i < 10; i++){

        if(CORRECT_ANSWERS[i] == ENTERED_ANSWERS[i].toUpperCase()){
            correct++
        }

    }

    if (correct == 0){
        document.getElementById("dispEarn").innerHTML = "Sorry You Did Gain Any Coins, Try Again!";
    } else {
        document.getElementById("dispEarn").innerHTML = "You've Earned " + correct + " Coins!";
        GiveCoins(correct);
    }

    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("txt6").value = "";
    document.getElementById("txt7").value = "";
    document.getElementById("txt8").value = "";
    document.getElementById("txt9").value = "";
    document.getElementById("txt10").value = "";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
    document.getElementById("div7").innerHTML = "";
    document.getElementById("div8").innerHTML = "";
    document.getElementById("div9").innerHTML = "";
    document.getElementById("div10").innerHTML = "";

    sessionStorage.setItem("Earn", "NA");

}

//Addition


var ADDITION_PROBLEMS = [];

function AddCreateQuiz() {

    document.getElementById("dispEarnError").innerHTML = "";
    document.getElementById("dispEarn").innerHTML = "";

    sessionStorage.setItem("Earn", "Add");

    for (i = 0; i < 20; i++) {
        ADDITION_PROBLEMS.pop();
    }

    var Add1 = RandInt(0,100);
    var Add2 = RandInt(0,100);
    var Add3 = RandInt(0,100);
    var Add4 = RandInt(0,100);
    var Add5 = RandInt(0,100);
    var Add6 = RandInt(0,100);
    var Add7 = RandInt(0,100);
    var Add8 = RandInt(0,100);
    var Add9 = RandInt(0,100);
    var Add10 = RandInt(0,100);
    var Add11 = RandInt(0,100);
    var Add12 = RandInt(0,100);
    var Add13 = RandInt(0,100);
    var Add14 = RandInt(0,100);
    var Add15 = RandInt(0,100);
    var Add16 = RandInt(0,100);
    var Add17 = RandInt(0,100);
    var Add18 = RandInt(0,100);
    var Add19 = RandInt(0,100);
    var Add20 = RandInt(0,100);

    ADDITION_PROBLEMS = [Add1, Add2, Add3, Add4, Add5, Add6, Add7, Add8, Add9, Add10, Add11, Add12, Add13, Add14, Add15, Add16, Add17, Add18, Add19, Add20];

    document.getElementById("div1").innerHTML = Add1 +" + "+Add2;
    document.getElementById("div2").innerHTML = Add3+" + "+Add4;
    document.getElementById("div3").innerHTML = Add5 +" + "+Add6;
    document.getElementById("div4").innerHTML = Add7 +" + "+Add8;
    document.getElementById("div5").innerHTML = Add9 +" + "+Add10;
    document.getElementById("div6").innerHTML = Add11 +" + "+Add12;
    document.getElementById("div7").innerHTML = Add13 +" + "+Add14;
    document.getElementById("div8").innerHTML = Add15 +" + "+Add16;
    document.getElementById("div9").innerHTML = Add17 +" + "+Add18;
    document.getElementById("div10").innerHTML = Add19 +" + "+Add20;
}


function AdditionScoreQuiz() {

    var correct = 0;
    var Ans1 = document.getElementById("txt1").value;
    var Ans2 = document.getElementById("txt2").value;
    var Ans3 = document.getElementById("txt3").value;
    var Ans4 = document.getElementById("txt4").value;
    var Ans5 = document.getElementById("txt5").value;
    var Ans6 = document.getElementById("txt6").value;
    var Ans7 = document.getElementById("txt7").value;
    var Ans8 = document.getElementById("txt8").value;
    var Ans9 = document.getElementById("txt9").value;
    var Ans10 = document.getElementById("txt10").value;

    if (Ans1 == (ADDITION_PROBLEMS[0] + ADDITION_PROBLEMS[1])) {
        correct++;
    } if (Ans2 == (ADDITION_PROBLEMS[2] + ADDITION_PROBLEMS[3])) {
        correct++;
    } if (Ans3 == (ADDITION_PROBLEMS[4] + ADDITION_PROBLEMS[5])) {
        correct++;
    } if (Ans4 == (ADDITION_PROBLEMS[6] + ADDITION_PROBLEMS[7])) {
        correct++;
    } if (Ans5 == (ADDITION_PROBLEMS[8] + ADDITION_PROBLEMS[9])) {
        correct++;
    } if (Ans6 == (ADDITION_PROBLEMS[10] + ADDITION_PROBLEMS[11])) {
        correct++;
    } if (Ans7 == (ADDITION_PROBLEMS[12] + ADDITION_PROBLEMS[13])) {
        correct++;
    } if (Ans8 == (ADDITION_PROBLEMS[14] + ADDITION_PROBLEMS[15])) {
        correct++;
    } if (Ans9 == (ADDITION_PROBLEMS[16] + ADDITION_PROBLEMS[17])) {
        correct++;
    } if (Ans10 == (ADDITION_PROBLEMS[18] + ADDITION_PROBLEMS[19])) {
        correct++;
    }

    if (correct == 0){
        document.getElementById("dispEarn").innerHTML = "Sorry You Did Gain Any Coins, Try Again!";
    } else {
        document.getElementById("dispEarn").innerHTML = "You've Earned " + correct + " Coins!";
        GiveCoins(correct);
    }

    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("txt6").value = "";
    document.getElementById("txt7").value = "";
    document.getElementById("txt8").value = "";
    document.getElementById("txt9").value = "";
    document.getElementById("txt10").value = "";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
    document.getElementById("div7").innerHTML = "";
    document.getElementById("div8").innerHTML = "";
    document.getElementById("div9").innerHTML = "";
    document.getElementById("div10").innerHTML = "";

    sessionStorage.setItem("Earn", "NA");

    for (i = 0; i < 20; i++){
        ADDITION_PROBLEMS.pop;
    }


}


//Subtraction


var SUBTRACTION_PROBLEMS = [];

function SubCreateQuiz() {

    document.getElementById("dispEarnError").innerHTML = "";
    document.getElementById("dispEarn").innerHTML = "";

    sessionStorage.setItem("Earn", "Sub");

    for (i = 0; i < 20; i++) {
        SUBTRACTION_PROBLEMS.pop();
    }

    var Sub1 = RandInt(50,100);
    var Sub2 = RandInt(0,50);
    var Sub3 = RandInt(50,100);
    var Sub4 = RandInt(0,50);
    var Sub5 = RandInt(50,100);
    var Sub6 = RandInt(0,50);
    var Sub7 = RandInt(50,100);
    var Sub8 = RandInt(0,50);
    var Sub9 = RandInt(50,100);
    var Sub10 = RandInt(0,50);
    var Sub11 = RandInt(50,100);
    var Sub12 = RandInt(0,50);
    var Sub13 = RandInt(50,100);
    var Sub14 = RandInt(0,50);
    var Sub15 = RandInt(50,100);
    var Sub16 = RandInt(0,50);
    var Sub17 = RandInt(50,100);
    var Sub18 = RandInt(0,50);
    var Sub19 = RandInt(50,100);
    var Sub20 = RandInt(0,50);

    SUBTRACTION_PROBLEMS = [Sub1, Sub2, Sub3, Sub4, Sub5, Sub6, Sub7, Sub8, Sub9, Sub10, Sub11, Sub12, Sub13, Sub14, Sub15, Sub16, Sub17, Sub18, Sub19, Sub20];

    document.getElementById("div1").innerHTML = Sub1 +" - "+Sub2;
    document.getElementById("div2").innerHTML = Sub3 +" - "+Sub4;
    document.getElementById("div3").innerHTML = Sub5 +" - "+Sub6;
    document.getElementById("div4").innerHTML = Sub7 +" - "+Sub8;
    document.getElementById("div5").innerHTML = Sub9 +" - "+Sub10;
    document.getElementById("div6").innerHTML = Sub11 +" - "+Sub12;
    document.getElementById("div7").innerHTML = Sub13 +" - "+Sub14;
    document.getElementById("div8").innerHTML = Sub15 +" - "+Sub16;
    document.getElementById("div9").innerHTML = Sub17 +" - "+Sub18;
    document.getElementById("div10").innerHTML = Sub19 +" - "+Sub20;
}


function SubtractionScoreQuiz() {

    var correct = 0;
    var Ans1 = document.getElementById("txt1").value;
    var Ans2 = document.getElementById("txt2").value;
    var Ans3 = document.getElementById("txt3").value;
    var Ans4 = document.getElementById("txt4").value;
    var Ans5 = document.getElementById("txt5").value;
    var Ans6 = document.getElementById("txt6").value;
    var Ans7 = document.getElementById("txt7").value;
    var Ans8 = document.getElementById("txt8").value;
    var Ans9 = document.getElementById("txt9").value;
    var Ans10 = document.getElementById("txt10").value;

    
    if (Ans1 == (SUBTRACTION_PROBLEMS[0] - SUBTRACTION_PROBLEMS[1])) {
        correct++;
    } if (Ans2 == (SUBTRACTION_PROBLEMS[2] - SUBTRACTION_PROBLEMS[3])) {
        correct++;
    } if (Ans3 == (SUBTRACTION_PROBLEMS[4] - SUBTRACTION_PROBLEMS[5])) {
        correct++;
    } if (Ans4 == (SUBTRACTION_PROBLEMS[6] - SUBTRACTION_PROBLEMS[7])) {
        correct++;
    } if (Ans5 == (SUBTRACTION_PROBLEMS[8] - SUBTRACTION_PROBLEMS[9])) {
        correct++;
    } if (Ans6 == (SUBTRACTION_PROBLEMS[10] - SUBTRACTION_PROBLEMS[11])) {
        correct++;
    } if (Ans7 == (SUBTRACTION_PROBLEMS[12] - SUBTRACTION_PROBLEMS[13])) {
        correct++;
    } if (Ans8 == (SUBTRACTION_PROBLEMS[14] - SUBTRACTION_PROBLEMS[15])) {
        correct++;
    } if (Ans9 == (SUBTRACTION_PROBLEMS[16] - SUBTRACTION_PROBLEMS[17])) {
        correct++;
    } if (Ans10 == (SUBTRACTION_PROBLEMS[18] - SUBTRACTION_PROBLEMS[19])) {
        correct++;
    }

    if (correct == 0){
        document.getElementById("dispEarn").innerHTML = "Sorry You Did Gain Any Coins, Try Again!";
    } else {
        document.getElementById("dispEarn").innerHTML = "You've Earned " + correct + " Coins!";
        GiveCoins(correct);
    }

    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("txt6").value = "";
    document.getElementById("txt7").value = "";
    document.getElementById("txt8").value = "";
    document.getElementById("txt9").value = "";
    document.getElementById("txt10").value = "";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
    document.getElementById("div7").innerHTML = "";
    document.getElementById("div8").innerHTML = "";
    document.getElementById("div9").innerHTML = "";
    document.getElementById("div10").innerHTML = "";

    sessionStorage.setItem("Earn", "NA");

    for (i = 0; i < 20; i++){
        SUBTRACTION_PROBLEMS.pop;
    }


}


//Multiplication


var MULTIPLICATION_PROBLEMS = [];

function MulCreateQuiz() {

    document.getElementById("dispEarnError").innerHTML = "";
    document.getElementById("dispEarn").innerHTML = "";

    sessionStorage.setItem("Earn", "Mul");

    for (i = 0; i < 20; i++) {
        MULTIPLICATION_PROBLEMS.pop();
    }

    var Mul1 = RandInt(1,20);
    var Mul2 = RandInt(1,20);
    var Mul3 = RandInt(1,20);
    var Mul4 = RandInt(1,20);
    var Mul5 = RandInt(1,20);
    var Mul6 = RandInt(1,20);
    var Mul7 = RandInt(1,20);
    var Mul8 = RandInt(1,20);
    var Mul9 = RandInt(1,20);
    var Mul10 = RandInt(1,20);
    var Mul11 = RandInt(1,20);
    var Mul12 = RandInt(1,20);
    var Mul13 = RandInt(1,20);
    var Mul14 = RandInt(1,20);
    var Mul15 = RandInt(1,20);
    var Mul16 = RandInt(1,20);
    var Mul17 = RandInt(1,20);
    var Mul18 = RandInt(1,20);
    var Mul19 = RandInt(1,20);
    var Mul20 = RandInt(1,20);

    MULTIPLICATION_PROBLEMS = [Mul1, Mul2, Mul3, Mul4, Mul5, Mul6, Mul7, Mul8, Mul9, Mul10, Mul11, Mul12, Mul13, Mul14, Mul15, Mul16, Mul17, Mul18, Mul19, Mul20];

    document.getElementById("div1").innerHTML = Mul1 +" * "+Mul2;
    document.getElementById("div2").innerHTML = Mul3+" * "+Mul4;
    document.getElementById("div3").innerHTML = Mul5 +" * "+Mul6;
    document.getElementById("div4").innerHTML = Mul7 +" * "+Mul8;
    document.getElementById("div5").innerHTML = Mul9 +" * "+Mul10;
    document.getElementById("div6").innerHTML = Mul11 +" * "+Mul12;
    document.getElementById("div7").innerHTML = Mul13 +" * "+Mul14;
    document.getElementById("div8").innerHTML = Mul15 +" * "+Mul16;
    document.getElementById("div9").innerHTML = Mul17 +" * "+Mul18;
    document.getElementById("div10").innerHTML = Mul19 +" * "+Mul20;
}


function MultiplicationScoreQuiz() {

    var correct = 0;
    var Ans1 = document.getElementById("txt1").value;
    var Ans2 = document.getElementById("txt2").value;
    var Ans3 = document.getElementById("txt3").value;
    var Ans4 = document.getElementById("txt4").value;
    var Ans5 = document.getElementById("txt5").value;
    var Ans6 = document.getElementById("txt6").value;
    var Ans7 = document.getElementById("txt7").value;
    var Ans8 = document.getElementById("txt8").value;
    var Ans9 = document.getElementById("txt9").value;
    var Ans10 = document.getElementById("txt10").value;

    if (Ans1 == (MULTIPLICATION_PROBLEMS[0] * MULTIPLICATION_PROBLEMS[1])) {
        correct++;
    } if (Ans2 == (MULTIPLICATION_PROBLEMS[2] * MULTIPLICATION_PROBLEMS[3])) {
        correct++;
    } if (Ans3 == (MULTIPLICATION_PROBLEMS[4] * MULTIPLICATION_PROBLEMS[5])) {
        correct++;
    } if (Ans4 == (MULTIPLICATION_PROBLEMS[6] * MULTIPLICATION_PROBLEMS[7])) {
        correct++;
    } if (Ans5 == (MULTIPLICATION_PROBLEMS[8] * MULTIPLICATION_PROBLEMS[9])) {
        correct++;
    } if (Ans6 == (MULTIPLICATION_PROBLEMS[10] * MULTIPLICATION_PROBLEMS[11])) {
        correct++;
    } if (Ans7 == (MULTIPLICATION_PROBLEMS[12] * MULTIPLICATION_PROBLEMS[13])) {
        correct++;
    } if (Ans8 == (MULTIPLICATION_PROBLEMS[14] * MULTIPLICATION_PROBLEMS[15])) {
        correct++;
    } if (Ans9 == (MULTIPLICATION_PROBLEMS[16] * MULTIPLICATION_PROBLEMS[17])) {
        correct++;
    } if (Ans10 == (MULTIPLICATION_PROBLEMS[18] * MULTIPLICATION_PROBLEMS[19])) {
        correct++;
    }

    if (correct == 0){
        document.getElementById("dispEarn").innerHTML = "Sorry You Did Gain Any Coins, Try Again!";
    } else {
        document.getElementById("dispEarn").innerHTML = "You've Earned " + correct + " Coins!";
        GiveCoins(correct);
    }

    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("txt6").value = "";
    document.getElementById("txt7").value = "";
    document.getElementById("txt8").value = "";
    document.getElementById("txt9").value = "";
    document.getElementById("txt10").value = "";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
    document.getElementById("div7").innerHTML = "";
    document.getElementById("div8").innerHTML = "";
    document.getElementById("div9").innerHTML = "";
    document.getElementById("div10").innerHTML = "";

    sessionStorage.setItem("Earn", "NA");

    for (i = 0; i < 20; i++){
        MULTIPLICATION_PROBLEMS.pop;
    }


}





//Division


var DIVISION_PROBLEMS = [];

function DivCreateQuiz() {

    document.getElementById("dispEarnError").innerHTML = "";
    document.getElementById("dispEarn").innerHTML = "";

    sessionStorage.setItem("Earn", "Div");

    for (i = 0; i < 20; i++) {
        DIVISION_PROBLEMS.pop();
    }

    var Div1 = RandInt(1,20);
    var Div2 = RandInt(1,20);
    var Div3 = RandInt(1,20);
    var Div4 = RandInt(1,20);
    var Div5 = RandInt(1,20);
    var Div6 = RandInt(1,20);
    var Div7 = RandInt(1,20);
    var Div8 = RandInt(1,20);
    var Div9 = RandInt(1,20);
    var Div10 = RandInt(1,20);
    var Div11 = RandInt(1,20);
    var Div12 = RandInt(1,20);
    var Div13 = RandInt(1,20);
    var Div14 = RandInt(1,20);
    var Div15 = RandInt(1,20);
    var Div16 = RandInt(1,20);
    var Div17 = RandInt(1,20);
    var Div18 = RandInt(1,20);
    var Div19 = RandInt(1,20);
    var Div20 = RandInt(1,20);

    DIVISION_PROBLEMS = [Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Div10, Div11, Div12, Div13, Div14, Div15, Div16, Div17, Div18, Div19, Div20];

    document.getElementById("div1").innerHTML = (Div1 * Div2) +" / "+Div2;
    document.getElementById("div2").innerHTML = (Div3 * Div4) +" / "+Div4;
    document.getElementById("div3").innerHTML = (Div5 * Div6) +" / "+Div6;
    document.getElementById("div4").innerHTML = (Div7 * Div8) +" / "+Div8;
    document.getElementById("div5").innerHTML = (Div9 * Div10) +" / "+Div10;
    document.getElementById("div6").innerHTML = (Div11 * Div12) +" / "+Div12;
    document.getElementById("div7").innerHTML = (Div13 * Div14) +" / "+Div14;
    document.getElementById("div8").innerHTML = (Div15 * Div16) +" / "+Div16;
    document.getElementById("div9").innerHTML = (Div17 * Div18) +" / "+Div18;
    document.getElementById("div10").innerHTML = (Div19 * Div20) +" / "+Div20;
}


function DivisionScoreQuiz() {

    var correct = 0;
    var Ans1 = document.getElementById("txt1").value;
    var Ans2 = document.getElementById("txt2").value;
    var Ans3 = document.getElementById("txt3").value;
    var Ans4 = document.getElementById("txt4").value;
    var Ans5 = document.getElementById("txt5").value;
    var Ans6 = document.getElementById("txt6").value;
    var Ans7 = document.getElementById("txt7").value;
    var Ans8 = document.getElementById("txt8").value;
    var Ans9 = document.getElementById("txt9").value;
    var Ans10 = document.getElementById("txt10").value;

    if (Ans1 == (DIVISION_PROBLEMS[0])) {
        correct++;
    } if (Ans2 == (DIVISION_PROBLEMS[2])) {
        correct++;
    } if (Ans3 == (DIVISION_PROBLEMS[4])) {
        correct++;
    } if (Ans4 == (DIVISION_PROBLEMS[6])) {
        correct++;
    } if (Ans5 == (DIVISION_PROBLEMS[8])) {
        correct++;
    } if (Ans6 == (DIVISION_PROBLEMS[10])) {
        correct++;
    } if (Ans7 == (DIVISION_PROBLEMS[12])) {
        correct++;
    } if (Ans8 == (DIVISION_PROBLEMS[14])) {
        correct++;
    } if (Ans9 == (DIVISION_PROBLEMS[16])) {
        correct++;
    } if (Ans10 == (DIVISION_PROBLEMS[18])) {
        correct++;
    }

    if (correct == 0){
        document.getElementById("dispEarn").innerHTML = "Sorry You Did Gain Any Coins, Try Again!";
    } else {
    document.getElementById("dispEarn").innerHTML = "You've Earned " + correct + " Coins!";
    GiveCoins(correct);
    }
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("txt3").value = "";
    document.getElementById("txt4").value = "";
    document.getElementById("txt5").value = "";
    document.getElementById("txt6").value = "";
    document.getElementById("txt7").value = "";
    document.getElementById("txt8").value = "";
    document.getElementById("txt9").value = "";
    document.getElementById("txt10").value = "";

    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    document.getElementById("div3").innerHTML = "";
    document.getElementById("div4").innerHTML = "";
    document.getElementById("div5").innerHTML = "";
    document.getElementById("div6").innerHTML = "";
    document.getElementById("div7").innerHTML = "";
    document.getElementById("div8").innerHTML = "";
    document.getElementById("div9").innerHTML = "";
    document.getElementById("div10").innerHTML = "";

    sessionStorage.setItem("Earn", "NA");

    for (i = 0; i < 20; i++){
        DIVISION_PROBLEMS.pop;
    }


}

