var guessword = "";
var rest;
var spell;
var httpword;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function pickone() {
  var progress = getCookie("inprogl");
  if (progress != 1) {
    var p=1;
    var ret="";
    while (p < 6){
      var r = Math.floor(Math.random() * 10);
      var t = ret.includes(r);
      if (t == false){
        ret += r;
        p++;
      }
      
    }
    
   // ret += "a";
   
    rest = ret;
    console.log(rest);
    setCookie("inprogn", 1, 365);
    setCookie("lp1", "null", 365);
    setCookie("lp2", "null", 365);
    setCookie("lp3", "null", 365);
    setCookie("lp4", "null", 365);
    setCookie("lp5", "null", 365);
    setCookie("badnum", "null", 365);
    setCookie("curnum", rest, 365);
  }
  if (progress == 1) {
    rest = getCookie("curnum");
    var ip1 = getCookie("lp1");
    var c1 = getCookie("lc1");
    var ip2 = getCookie("lp2");
    var c2 = getCookie("lc2");
    var ip3 = getCookie("lp3");
    var c3 = getCookie("lc3");
    var ip4 = getCookie("lp4");
    var c4 = getCookie("lc4");
    var ip5 = getCookie("lp5");
    var c5 = getCookie("lc5");
    var badlets = getCookie("badnum");
    var table = document.getElementById("result");
    document.getElementById("instructions").style.display = "none";
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }

    var d = 0;
    if (badlets !== "null") {
      while (d !== badlets.length) {
        document.getElementById(badlets[d]).style.background = "#a9a9a9";
        d++;
      }
    }

    if (ip1 !== "null") {
      var row = table.insertRow(0);
      var i = 0;
      var op = "";
      while (i < 11) {
        if (c1[i] == "G") {
          op += '<td id="G">';
          op += ip1[i];
          op += "</td>";
        }

        if (c1[i] == "R") {
          op += '<td id="R">';
          op += ip1[i];
          op += "</td>";
        }

        if (c1[i] == "-") {
          op += "<td>";
          op += ip1[i];
          op += "</td>";
        }
        i++;
        i++;
      }
      row.innerHTML = op;
    }

    op = "";
    if (ip2 !== "null") {
      row = table.insertRow(0);
      i = 0;
      while (i < 11) {
        if (c2[i] == "G") {
          op += '<td id="G">';
          op += ip2[i];
          op += "</td>";
        }

        if (c2[i] == "R") {
          op += '<td id="R">';
          op += ip2[i];
          op += "</td>";
        }

        if (c2[i] == "-") {
          op += "<td>";
          op += ip2[i];
          op += "</td>";
        }

        i++;
        i++;
      }
      row.innerHTML = op;
    }
    op = "";
    if (ip3 !== "null") {
      row = table.insertRow(0);
      i = 0;
      while (i < 11) {
        if (c3[i] == "G") {
          op += '<td id="G">';
          op += ip3[i];
          op += "</td>";
        }

        if (c3[i] == "R") {
          op += '<td id="R">';
          op += ip3[i];
          op += "</td>";
        }

        if (c3[i] == "-") {
          op += "<td>";
          op += ip3[i];
          op += "</td>";
        }

        i++;
        i++;
      }
      row.innerHTML = op;
    }
    op = "";
    if (ip4 !== "null") {
      row = table.insertRow(0);
      i = 0;
      while (i < 11) {
        if (c4[i] == "G") {
          op += '<td id="G">';
          op += ip4[i];
          op += "</td>";
        }

        if (c4[i] == "R") {
          op += '<td id="R">';
          op += ip4[i];
          op += "</td>";
        }

        if (c4[i] == "-") {
          op += "<td>";
          op += ip4[i];
          op += "</td>";
        }

        i++;
        i++;
      }
      row.innerHTML = op;
    }
    op = "";
    if (ip5 !== "null") {
      row = table.insertRow(0);
      i = 0;
      while (i < 11) {
        if (c5[i] == "G") {
          op += '<td id="G">';
          op += ip5[i];
          op += "</td>";
        }

        if (c5[i] == "R") {
          op += '<td id="R">';
          op += ip5[i];
          op += "</td>";
        }

        if (c5[i] == "-") {
          op += "<td>";
          op += ip5[i];
          op += "</td>";
        }

        i++;
        i++;
      }
      row.innerHTML = op;
    }
  }
}

function guess(letter) {
  guessword += letter;
  document.getElementById("word").innerHTML = guessword;
  document.getElementById("error").innerHTML = "";
  document.getElementById("instructions").style.display = "none";
}

function dels() {
  if (guessword.length > 0) {
    var newguess = guessword.slice(0, -1);
    guessword = newguess;
    document.getElementById("word").innerHTML = guessword;
  }
}

function clearz() {
  while (guessword.length > 0) {
    var newguess = guessword.slice(0, -1);
    guessword = newguess;
    document.getElementById("word").innerHTML = guessword;
  }
}

function guessgo() {
  var word = Array.from(rest);
  var enter = guessword;
  var guess = Array.from(enter);
  var colour = Array.from("");
  var op = "";
  var spell = "wrong";
  guessword = "";
  document.getElementById("word").innerHTML = "";
  // Check it is a real word
  //check if it is 5 letters
  if (guess.length != 5) {
    document.getElementById("error").innerHTML = "Only 5 Numbers";
  } else {
    spell = "correct";

    if (spell != "correct") {
      document.getElementById("error").innerHTML = "Guess not in word list";
      document.getElementById("guessword").value = "";
    } else {
      document.getElementById("error").innerHTML = "";
      var j = 0;
      while (j < 5) {
        var letterin = word.includes(guess[j]);
        if (letterin == true) {
          colour[j] = "R";
        } else {
          colour[j] = "-";
          var wrong = document.getElementById("w2").innerHTML;
          var leterbad = wrong.includes(guess[j]);

          if (leterbad == false) {
            wrong += guess[j];
            wrong += " ";
            // document.getElementById("w2").innerHTML = wrong;
            document.getElementById(guess[j]).style.background = "#a9a9a9";

            var badlets = getCookie("badnum");

            if (badlets == "null") {
              setCookie("badnum", guess[j], 365);
            } else {
              badlets += guess[j];
              setCookie("badnum", badlets, 365);
            }
          }
        }
        j++;
      }

      // Check if any of the letters are in the right position
      var i = 0;
      while (i < 5) {
        if (word[i] == guess[i]) {
          colour[i] = "G";
        }
        i++;
      }

      var table = document.getElementById("result");
      var row = table.insertRow(0);

      var tab;

      i = 0;
      while (i < 5) {
        if (colour[i] == "G") {
          op += '<td id="G">';
          op += guess[i];
          op += "</td>";
        }

        if (colour[i] == "R") {
          op += '<td id="R">';
          op += guess[i];
          op += "</td>";
        }

        if (colour[i] == "-") {
          op += "<td>";
          op += guess[i];
          op += "</td>";
        }

        i++;
      }

      var rt = table.rows.length;
      console.log("rows num: " + table.rows.length);
      var rs = "lp" + rt;
      var rc = "lc" + rt;

      setCookie(rs, guess, 365);

      setCookie(rc, colour, 365);

      //op += "</tr>"
      row.innerHTML = op;
      // document.getElementById("result").innerHTML = op;

      if (colour == "G,G,G,G,G") {
        cookwin(table.rows.length);
        setCookie("inprogn", 0, 365);
        var win = "Well done!<br> The word was:";
        win += "<b>";
        win += rest;
        win += "</b><br>";
        win += " You win in: ";
        var gameswon = 0;
        var k = 1;
        var sum = 0;
        var res = 0;
        while (k < 6) {
          sum = getCookie("n"+ k);
          res = parseInt(sum);
          if (res > 0) {
            gameswon = gameswon + res;
          }
          k++;
        }

        win += table.rows.length;
        win += "<br>";
        win += "This was game number ";
        win += getCookie("numberz");
        win += "<br>You have won: ";
        var winper = (gameswon / getCookie("numberz")) * 100;
        win += Math.round(winper);
        win += "%";

        win +=
          '<br><br><b>Your Game Stats</b><br><br><table id="score"><tr><td>';
        var cwin = Math.round((getCookie("n"+1) / gameswon) * 100);
        if (cwin > 0) {
          win += cwin;
        } else {
          win += 0;
        }
        win += "%</td><td>";
        var cwin = Math.round((getCookie("n"+2) / gameswon) * 100);
        if (cwin > 0) {
          win += cwin;
        } else {
          win += 0;
        }
        win += "%</td><td>";
        var cwin = Math.round((getCookie("n"+3) / gameswon) * 100);
        if (cwin > 0) {
          win += cwin;
        } else {
          win += 0;
        }
        win += "%</td><td>";
        var cwin = Math.round((getCookie("n"+4) / gameswon) * 100);
        if (cwin > 0) {
          win += cwin;
        } else {
          win += 0;
        }
        win += "%</td><td>";
        var cwin = Math.round((getCookie("n"+5) / gameswon) * 100);
        if (cwin > 0) {
          win += cwin;
        } else {
          win += 0;
        }
        win +=
          "%</td></tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></table>";
        win += '<br><a href="https://letrz.co.uk/numberz.html">New Game</a>';

        document.getElementById("gamesdone").innerHTML = win;
        document.getElementById("myModal").style.display = "block";
        var x = document.getElementById("guessword");
        document.getElementById("keyz").style.display = "none";

        var x = document.getElementById("createbuttin");
      }

      if (table.rows.length == 5) {
        if (colour == "G,G,G,G,G") {
          cookwin(table.rows.length);
          setCookie("inprogn", 0, 365);
          var win = "Well done!<br> The word was:";
          win += "<b>";
          win += rest;
          win += "</b><br>";
          win += " You win in: ";

          var gameswon = 0;
          var k = 1;
          var sum = 0;
          var res = 0;
          while (k < 6) {
            sum = getCookie("n"+ k);
            res = parseInt(sum);
            if (res > 0) {
              gameswon = gameswon + res;
            }
            k++;
          }

          win += table.rows.length;
          win += "<br>";
          win += "This was game number ";
          win += getCookie("numberz");
          win += "<br>You have won: ";
          var winper = (gameswon / getCookie("numberz")) * 100;
          win += Math.round(winper);
          win += "%";
          win +=
            '<br><br><b>Your Game Stats</b><br><br><table id="score"><tr><td>';
          var cwin = Math.round((getCookie("n"+1) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+2) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+3) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+4) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+5) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win +=
            "%</td></tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></table>";
          win += '<br><a href="https://letrz.co.uk">New Game</a>';
          document.getElementById("gamesdone").innerHTML = win;
          document.getElementById("myModal").style.display = "block";
          var x = document.getElementById("guessword");
          document.getElementById("keyz").style.display = "none";
          var x = document.getElementById("createbuttin");
        } else {
          cookloose();
          setCookie("inprogn", 0, 365);
          var win = "Bad luck! The word was <b>";
          win += rest;
          var gameswon = 0;
          var k = 1;
          var sum = 0;
          var res = 0;
          while (k < 6) {
            sum = getCookie("n"+k);
            res = parseInt(sum);
            if (res > 0) {
              gameswon = gameswon + res;
            }
            k++;
          }

          win += "</b><br>";

          win += "This was game number ";
          win += getCookie("numberz");
          win += "<br>You have won: ";
          var winper = (gameswon / getCookie("numberz")) * 100;
          win += Math.round(winper);
          win += "%";
          win +=
            '<br><br><b>Your Game Stats</b><br><br><table id="score"><tr><td>';
          var cwin = Math.round((getCookie("n"+1) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+2) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+3) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+4) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win += "%</td><td>";
          var cwin = Math.round((getCookie("n"+5) / gameswon) * 100);
          if (cwin > 0) {
            win += cwin;
          } else {
            win += 0;
          }
          win +=
            "%</td></tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></table>";
          win += '<br><a href="https://letrz.co.uk/numberz.html">New Game</a>';
          document.getElementById("gamesdone").innerHTML = win;
          document.getElementById("myModal").style.display = "block";
          var x = document.getElementById("guessword");
          document.getElementById("keyz").style.display = "none";
          var x = document.getElementById("createbuttin");
        }

        document.getElementById("answ").innerHTML = win;
        var x = document.getElementById("guessword");

        var x = document.getElementById("createbuttin");
      }

      // document.getElementById("guessword").value = "";
    }
  }
}

function cookwin(turns) {
  let goes = getCookie("numberz");
  let turn = getCookie(turns);
  if (goes == null) {
    setCookie("numberz", 1, 365);
  } else {
    goes++;
    setCookie("numberz", goes, 365);
  }

  if (turn == null) {
    setCookie("n"+turns, 1, 365);
  } else {
    turn++;
    setCookie("n"+turns, turn, 365);
  }
  setCookie("lp1", null, 365);
  setCookie("lp2", null, 365);
  setCookie("lp3", null, 365);
  setCookie("lp4", null, 365);
  setCookie("lp5", null, 365);
  setCookie("lc1", null, 365);
  setCookie("lc2", null, 365);
  setCookie("lc3", null, 365);
  setCookie("lc4", null, 365);
  setCookie("lc5", null, 365);
  setCookie("badnum", "null", 365);
}

function cookloose() {
  let goes = getCookie("numberz");
  if (goes == null) {
    setCookie("numberz", 1, 365);
  } else {
    goes++;
    setCookie("numberz", goes, 365);
  }
  setCookie("lp1", null, 365);
  setCookie("lp2", null, 365);
  setCookie("lp3", null, 365);
  setCookie("lp4", null, 365);
  setCookie("lp5", null, 365);
  setCookie("lc1", null, 365);
  setCookie("lc2", null, 365);
  setCookie("lc3", null, 365);
  setCookie("lc4", null, 365);
  setCookie("lc5", null, 365);
  setCookie("badnum", "null", 365);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
