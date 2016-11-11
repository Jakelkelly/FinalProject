function startUp() {

    ActiveUserBar();
    TopTable();

}

function RandInt(top, bottom) {

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
        var selected = Selected;
        TicTacToeCheckPlayerWin();
        TicTacToeAI();
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
        PlayerWin()
    }
    else if (SelectTic4 == "X" && SelectTic5 == "X" && SelectTic6 == "X") {
        PlayerWin()
    }
    else if (SelectTic7 == "X" && SelectTic8 == "X" && SelectTic9 == "X") {
        PlayerWin()
    }
    else if (SelectTic1 == "X" && SelectTic4 == "X" && SelectTic7 == "X") {
        PlayerWin()
    }
    else if (SelectTic2 == "X" && SelectTic5 == "X" && SelectTic8 == "X") {
        PlayerWin()
    }
    else if (SelectTic3 == "X" && SelectTic6 == "X" && SelectTic9 == "X") {
        PlayerWin()
    }
    else if (SelectTic1 == "X" && SelectTic5 == "X" && SelectTic9 == "X") {
        PlayerWin()
    }
    else if (SelectTic3 == "X" && SelectTic5 == "X" && SelectTic7 == "X") {
        PlayerWin()
    } else {
        TicTacToeCheckTie();
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
        BotWin()
    }
    else if (SelectTic4 == "O" && SelectTic5 == "O" && SelectTic6 == "O") {
        BotWin()
    }
    else if (SelectTic7 == "O" && SelectTic8 == "O" && SelectTic9 == "O") {
        BotWin()
    }
    else if (SelectTic1 == "O" && SelectTic4 == "O" && SelectTic7 == "O") {
        BotWin()
    }
    else if (SelectTic2 == "O" && SelectTic5 == "O" && SelectTic8 == "O") {
        BotWin()
    }
    else if (SelectTic3 == "O" && SelectTic6 == "O" && SelectTic9 == "O") {
        BotWin()
    }
    else if (SelectTic1 == "O" && SelectTic5 == "O" && SelectTic9 == "O") {
        BotWin()
    }
    else if (SelectTic3 == "O" && SelectTic5 == "O" && SelectTic7 == "O") {
        BotWin()
    } else {
        TicTacToeCheckTie();
    }

}

function TicTacToeCheckTie() {

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
        TicTacToeError("Tie")

    }

        }

function PlayerWin(){
    TicTacToeError("Test");

}

function BotWin(){
    TicTacToeError("Test");

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
    
    
    
    if (selectTic == 1 && SelectTic1 !== "X") {
        document.getElementById("SelectTic1").innerText = "O";
    } else if (selectTic == 2 && SelectTic2 !== "X") {
        document.getElementById("SelectTic2").innerText = "O";
    } else if (selectTic == 3 && SelectTic3 !== "X") {
        document.getElementById("SelectTic3").innerText = "O";
    } else if (selectTic == 4 && SelectTic4 !== "X") {
        document.getElementById("SelectTic4").innerText = "O";
    } else if (selectTic == 5 && SelectTic5 !== "X") {
        document.getElementById("SelectTic5").innerText = "O";
    } else if (selectTic == 6 && SelectTic6 !== "X") {
        document.getElementById("SelectTic6").innerText = "O";
    } else if (selectTic == 7 && SelectTic7 !== "X") {
        document.getElementById("SelectTic7").innerText = "O";
    } else if (selectTic == 8 && SelectTic8 !== "X") {
        document.getElementById("SelectTic8").innerText = "O";
    } else if (selectTic == 9 && SelectTic9 !== "X") {
        document.getElementById("SelectTic9").innerText = "O";
    }
    

}