//JUNE 5, 2022 : NEXT STEPS
//How to get the Player Info div to show content from the LogName function, not just the Total Wins?
//Put a "Previous Season" on the bottom left and "Next Season" on the bottom right of the left-side inforgraphic that toggles to that season?
//Set up the right-side info box the same way as the left, with the dynamic inner-HTML or inner-image just replacing the previous?
//Is there a way to highlight the entire row if you input a year? Like all three boxes, or one of the other two rows (Won WS, Year, but not Record)

var userName = document.getElementById("name").value;
var yanksYearRecord = document.querySelectorAll(`[id^="yrrecord"]`);

//Turns table data into an array
const table = document.querySelectorAll('table')[3]
console.log(table)
const arr = [...table.rows].map(r => [...r.querySelectorAll('td, th')].map(td => td.textContent))
const yanksarr = Array.from(document.querySelectorAll('tr'), tr =>
    Array.from(tr.querySelectorAll('td'), td =>
      td.textContent
    )
  )
  yanksarr.splice(0,7);
console.log(yanksarr)
// const arr2 = [...table.rows].map(r => [...r.querySelectorAll('td')].map(td => td.textContent))
console.log(arr);
//This next line causes an error in line 123 for not recognizing "split"
// arr.shift();
var yanksOverallRecord = [];
yanksOverallRecord.push(arr);
yanksOverallRecord.shift();
console.log(yanksOverallRecord)

var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
console.log(yanksWsProperties);
var yanksWsPropertiesArray = Array.from(yanksWsProperties);
console.log(yanksWsPropertiesArray[0].innerHTML);
var yanksYearProperties = document.querySelectorAll(`[id^="year"]`);
var yanksYearPropertiesArray = Array.from(yanksYearProperties);
console.log(yanksYearPropertiesArray);
console.log(yanksWsProperties);

// for (i = 0; i < yanksOverallRecord.length; i++) {
// }
// yanksOverallRecord.push(yanksOverallRecord[i]);
// console.log(yanksOverallRecord);
// console.log(yanksOverallRecord[i]);



var yanksArray = [];
var wins100 = [];
var wins90 = [];
var wins90s = [];
var yanksLosses = [];
var yanksGames = [];
var yanksRecordArray = [];
var yanksPercentage = [];
var yanksTotalArray = [];
// console.log(yanksOverallRecord);

  //Extract from Array
  //Extract from List
  //Match Array to List
  //If Array Contains "Won World Series", then "Year" (matched to variable) shows X color

// yanksOverallRecord.push(yanksOverallRecord[i]);
// console.log(yanksOverallRecord)


function yanksWins() {
  arr.forEach((n) => {
    let record = n[1];
    console.log(record);
    let yanksWinsLosses = record.split("-");
    console.log(yanksWinsLosses);
    console.log(yanksWinsLosses[1]);
    yanksLosses.push(yanksWinsLosses[1]);
    yanksOverallRecord.push(arr[0]);
    console.log(yanksLosses);
    const totalGames = Number(yanksWinsLosses[0]) + Number(yanksWinsLosses[1]);
    console.log(totalGames);
    yanksArray.push(yanksWinsLosses[0]);
    if (yanksWinsLosses[0] >= 99) {
      console.log("Yoyo");
      wins100.push(yanksWinsLosses[0]);
      console.log(wins100);
    }
    if ((yanksWinsLosses[0] >= 90)) {
      console.log("Greater than 90");
      wins90.push(yanksWinsLosses[0]);
      console.log(wins90);
    }
    if ((yanksWinsLosses[0] >= 90) && (yanksWinsLosses[0] <= 99)) {
    console.log("Between 90 and 99");
    wins90s.push(yanksWinsLosses[0]);
    console.log(wins90s);
    }
  });
  yanksArray.shift();
  yanksLosses.shift();
  console.log(yanksArray);
  console.log(yanksLosses);
  // yanksOverallRecord.forEach((n) => {
  //   let overallResult = n[2]
  //   yanksOverallRecord.push(overallResult);
  // });
  // yanksOverallRecord.splice(0,28);
  // console.log(yanksOverallRecord);
}
yanksWins();

function winningRecord() {
  //Checks if the team had at least 81 wins
  const winsover81 = (wins) => wins >= 81;
  console.log(yanksArray.every(winsover81));
  //How do you write logic to account for seasons shorter than 162 games?
  arr.forEach((n) => {
    let record = n[1];
    console.log(record);
    let yanksWinsLosses = record.split("-");
    yanksLosses.push(yanksWinsLosses[1]);
    const totalGames = Number(yanksWinsLosses[0]) + Number(yanksWinsLosses[1]);
    console.log(totalGames);
    yanksGames.push(totalGames);
    const totalPercentage = (Number(yanksWinsLosses[0]) / Number(totalGames));
    console.log(totalPercentage);
    yanksPercentage.push(totalPercentage);
  });
  yanksGames.shift();
  yanksPercentage.shift();
  console.log(yanksGames);
  console.log(yanksPercentage);
  for (i = 0; i < yanksPercentage.length; i++) {
    console.log(yanksPercentage[i]);
    if (yanksPercentage[i] > 0.50000) {
      console.log("Winning Season");
    } else {
      console.log("Losing Season");
    }
  }
}
winningRecord();

function logName() {
  var userName = document.getElementById("name").value;
  console.log(userName);

  var yanksWonWS = document.querySelectorAll(`[id^="wonworldseries"]`);
  for (i = 0; i < yanksWonWS.length; i++) {
    console.log(yanksWonWS[i].innerHTML);
    // oriolesMissed.push(yanksMissedProperties[i].innerHTML);
  }
  console.log(yanksOverallRecord)
  // console.log(oriolesMissed);

  for (i = 0; i < yanksYearRecord.length; i++) {
    let yanksWinsLosses = yanksArray[i].split("-");
    const yankswins100 = yanksWinsLosses.filter((number) => number >= 100);
    console.log(yankswins100);
    if (userName === yanksYearRecord[i].innerHTML || userName === yanksWinsLosses[0]) {
      yanksYearRecord[i].style.backgroundColor = 'black';
      yanksYearRecord[i].style.color = 'white';
    }
    if (userName === "100+") {
      if (yanksWinsLosses[0] > 99) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
        //FYI this says 3, not 4 (because one record has two instances, 101 wins)
        console.log(yanksWinsLosses[0].length);
      } else {
        //This works as a "clear" function where if a user highlighted other records, this clears those and only highlights 100+ win seasons
        yanksYearRecord[i].style.backgroundColor = 'inherit';
        yanksYearRecord[i].style.color = 'inherit';
      }
    }
    if (userName === "90+") {
      if (yanksWinsLosses[0] > 90) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
      } else {
        yanksYearRecord[i].style.backgroundColor = 'inherit';
      }
    }
    if (userName === "90-99") {
      if ((yanksWinsLosses[0] > 90) && (yanksWinsLosses[0] < 100)) {
        yanksYearRecord[i].style.backgroundColor = 'black';
        yanksYearRecord[i].style.color = 'white';
      } else {
        yanksYearRecord[i].style.backgroundColor = 'inherit';
      }
    }
    if (userName === "Winning record" || userName === "winning record" || userName === "Winning season" || userName === "winning season") {
      for (i = 0; i < yanksPercentage.length; i++) {
        console.log(yanksPercentage[i]);
        if (yanksPercentage[i] > 0.50000) {
          console.log("Winning Season");
          yanksYearRecord[i].style.backgroundColor = 'black';
          yanksYearRecord[i].style.color = 'white';
        } else {
          console.log("Losing Season");
          yanksYearRecord[i].style.backgroundColor = 'inherit';
        }
      }
    }
    if (userName === "Losing record" || userName === "losing record" || userName === "Losing season" || userName === "losing season") {
      for (i = 0; i < yanksPercentage.length; i++) {
        console.log(yanksPercentage[i]);
        if (yanksPercentage[i] < 0.50000) {
          console.log("Losing Season");
          yanksYearRecord[i].style.backgroundColor = 'red';
        } else {
          console.log("Winning Season");
          yanksYearRecord[i].style.backgroundColor = 'inherit';
        }
      }
    }
  }
}

function resetForm() {
  var formData = document.getElementById("name");
  console.log("Hi!");
  formData.value = '';
}

function displayName() {
  console.log("Testing");
  var userName = document.getElementById("name").value;

  if (userName.length >= 1) {
  document.getElementById("playerinfo").innerHTML = ""
  }
}

function yankeeResult() {
  console.log("Testing");
  var userName = document.getElementById("name").value;
  //Sets up a string with the ability to replace with a bold-face or Italics element, etc.
  var yanks100str = "There have been" + " " + wins100.length + " " + "100-win seasons for the Yankees since 1995"
  var yanks90str = "There have been" + " " + wins90.length + " " + "90-win seasons for the Yankees since 1995"
  var yanks9099str = "There have been" + " " + wins90s.length + " " + "seasons where the Yankees have won between 90 and 99 games"
  var substr = wins100.length;
  var substr2 = wins90.length;
  var substr3 = wins90s.length;
  yanks100str.replace(substr, '<b>' + substr + '</b>')
  yanks90str.replace(substr2, '<b>' + substr2 + '</b>');
  yanks9099str.replace(substr2, '<b>' + substr3 + '</b>');

  if (userName === "Won the WS") {
    console.log("High as a kite" + arr)
    // arr[i][0].style.backgroundColor = 'pink';
    }

  //Why does this block of code execute in this function, but not in the others like LogName or TotalWins?
  if (userName === "100+") {
    console.log("Plus 100");
    document.getElementById("playerinfo").innerHTML = yanks100str.replace(substr, '<b>' + substr + '</b>');
  }
  if (userName === "90+") {
    console.log("Plus 90");
    document.getElementById("playerinfo").innerHTML = yanks90str.replace(substr2, '<b>' + substr2 + '</b>');
  }
  if (userName === "90-99") {
    console.log("Between 90-99");
    document.getElementById("playerinfo").innerHTML = yanks9099str.replace(substr3, '<b>' + substr3 + '</b>');
  }
  const wsbox = document.querySelectorAll(`[id^="wonworldseries"]`);
  console.log(wsbox.length);
  var yankswsstring = "The Yankees have won" + " " + wsbox.length + " " + "World Series titles since 1996";
  var substrws = wsbox.length;
  yankswsstring.replace(substrws, '<b>' + substrws + '</b>');

  // if (userName === "Won World Series" || userName === "won world series" || userName === "WON WORLD SERIES")
  if (userName === "Won it all") {
    // This works unlike the one in LogName
    // document.getElementById("playerinfo").innerHTML = "The result was: " + yankeesHistory[1] + "!";
    document.getElementById("year2").style.backgroundColor = '#D4AE0B';
    document.getElementById("year4").style.backgroundColor = '#D4AE0B';
    document.getElementById("year5").style.backgroundColor = '#D4AE0B';
    document.getElementById("year6").style.backgroundColor = '#D4AE0B';
    document.getElementById("year15").style.backgroundColor = '#D4AE0B';
    document.getElementById("playerinfo").innerHTML = yankswsstring.replace(substrws, '<b>' + substrws + '</b>');
    for (i = 0; i < wsbox.length; i++) {
      wsbox[i].style.backgroundColor = '#D4AE0B';
      console.log(wsbox[i].innerHTML)
      // document.getElementById("year1").style.backgroundColor = '#D4AE0B';
      wsbox.forEach(element => {
        console.log(element.textContent);
        // if (element.textContent.includes("Won World Series")) {
        //   console.log("This year they won the Seeeeeries")
        // }
      });
    }
    // for (i = 0; i < yanksOverallRecord; i++) {
    //   console.log(yanksOverallRecord[i])
    // }
  } else if (userName === "ALCS" || userName === "alcs") {
    const alcsbox = document.querySelectorAll(`[id^="alcs"]`);
    for (i = 0; i < alcsbox.length; i++) {
      alcsbox[i].style.backgroundColor = '#4A84B0';
      alcsbox.forEach(element => {
        console.log(element.textContent);
        });
      }
    } else if (userName === "Lost World Series" || userName === "lost world series" || userName === "LOST WORLD SERIES") {
      const lostwsbox = document.querySelectorAll(`[id^="ws"]`);
      for (i = 0; i < lostwsbox.length; i++) {
        lostwsbox[i].style.backgroundColor = 'green';
        lostwsbox.forEach(element => {
          console.log(element.textContent);
        });
      }
  } else if (userName === "Win WS") {
    for (i = 0; i < yanksarr.length; i++) {
      console.log("SUPPPPPP" + yanksarr[i][0]);
      if (yanksarr[i].includes("Won World Series")) {
        for (i = 0; i < yanksYearPropertiesArray.length; i++) {
          console.log(yanksYearPropertiesArray[i]);
          // yanksYearPropertiesArray[i].style.backgroundColor = 'pink';
        }
        // console.log("SUPPPPPP" + yanksarr[i][0]);
        // yanksYearPropertiesArray[0].style.backgroundColor = 'pink';
        // yanksarr[i][0] === yanksYearPropertiesArray[i][0]
      }
      // var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
      // var yanksYearProperties = document.querySelectorAll(`[id^="year"]`);
    }
  } if (userName === "1995") {
      document.getElementById("alds95").style.backgroundColor = 'red';
  } else if (userName === "1996") {
    document.getElementById("wonworldseries96").style.backgroundColor = '#D4AE0B';
    document.getElementById("year2").style.backgroundColor = '#D4AE0B';
    var playerInfoBox = document.getElementById("playerinfo");
  } else if (userName === "1997") {
    document.getElementById("alds97").style.backgroundColor = 'red';
  } else if (userName === "1998") {
    document.getElementById("wonworldseries98").style.backgroundColor = '#D4AE0B';
  } else if (userName === "1999") {
    document.getElementById("wonworldseries99").style.backgroundColor = '#D4AE0B';
  } else if (userName === "2000") {
    document.getElementById("wonworldseries00").style.backgroundColor = '#D4AE0B';
  } else if (userName === "2001") {
    document.getElementById("ws01").style.backgroundColor = 'green';
  } else if (userName === "2002") {
    document.getElementById("alds02").style.backgroundColor = 'red';
  } else if (userName === "ALDS" || userName === "alds" || userName === "Lost ALDS" || userName === "lost alds") {
    const aldsbox = document.querySelectorAll(`[id^="alds"]`);
    for (i = 0; i < aldsbox.length; i++) {
      aldsbox[i].style.backgroundColor = 'red';
      aldsbox.forEach(element => {
        console.log(element.textContent);
      });
    }
    console.log(aldsbox);
  } else if (userName === "2003") {
    var ws03 = document.getElementById("ws03");
    var yr2003 = document.getElementById("year9");
    ws03.style.backgroundColor = 'green';
    yr2003.style.backgroundColor = 'green';
  } else if (userName === "2004") {
    var alcs04 = document.getElementById("alcs04");
    alcs04.style.backgroundColor = '#4A84B0';
  } else if (userName === "2005") {
    var alds05 = document.getElementById("alds05");
    alds05.style.backgroundColor = 'red';
  } else if (userName === "2006") {
    var alds06 = document.getElementById("alds06");
    alds06.style.backgroundColor = 'red';
  } else if (userName === "2007") {
    var alds07 = document.getElementById("alds07");
    alds07.style.backgroundColor = 'red';
  } else if (userName === "2008" || userName === "Missed" || userName === "MISSED" || userName === "missed" || userName === "Missed Playoffs" || userName === "Missed playoffs") {
    // document.getElementById("missed").style.backgroundColor = 'black';
    // document.getElementById("missed").style.textDecoration = 'line-through';
    // document.getElementById("missed").style.color = 'white';
    var yanksMissedProperties = document.querySelectorAll(`[id^="missed"]`);
    for (i = 0; i < yanksMissedProperties.length; i++) {
      yanksMissedProperties[i].style.backgroundColor = 'black';
      yanksMissedProperties[i].style.textDecoration = 'line-through';
      yanksMissedProperties[i].style.color = 'white';
    }
  } else if (userName === "2009") {
    document.getElementById("wonworldseries09").style.backgroundColor = '#D4AE0B';
  } else if (userName === "Highlight all" || userName === "highlight all" || userName === "Highlight All" || userName === "Show all") {
    var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
    var yanksYearProperties = document.querySelectorAll(`[id^="year"]`);
    // for (i = 0; i < yanksYearProperties.length; i++) {
    // //   yanksYearProperties[i].style.backgroundColor = 'black';
    // //   yanksYearProperties[i].style.color = 'white';
    // }
    for (i = 0; i < yanksWsProperties.length; i++) {
      yanksWsProperties[i].style.backgroundColor = '#D4AE0B';
      document.getElementById("year2").style.backgroundColor = '#D4AE0B';
      document.getElementById("year4").style.backgroundColor = '#D4AE0B';
      document.getElementById("year5").style.backgroundColor = '#D4AE0B';
      document.getElementById("year6").style.backgroundColor = '#D4AE0B';
      document.getElementById("year15").style.backgroundColor = '#D4AE0B';
    }
    var yanksLostWsProperties = document.querySelectorAll(`[id^="ws"]`);
    for (i = 0; i < yanksLostWsProperties.length; i++) {
      yanksLostWsProperties[i].style.backgroundColor = 'green';
    }
    var yanksAldsProperties = document.querySelectorAll(`[id^="alds"]`);
    for (i = 0; i < yanksAldsProperties.length; i++) {
      yanksAldsProperties[i].style.backgroundColor = 'maroon';
      // yanksAldsProperties[i].style.backgroundColor = 'red';
    }
    var yanksAlcsProperties = document.querySelectorAll(`[id^="alcs"]`);
    for (i = 0; i < yanksAlcsProperties.length; i++) {
      yanksAlcsProperties[i].style.backgroundColor = '#4A84B0';
    }
    var yanksMissedProperties = document.querySelectorAll(`[id^="missed"]`);
    for (i = 0; i < yanksMissedProperties.length; i++) {
      yanksMissedProperties[i].style.backgroundColor = 'black';
      yanksMissedProperties[i].style.textDecoration = 'line-through';
      yanksMissedProperties[i].style.color = 'white';
    }
    var yanksMissedProperties = document.querySelectorAll(`[id^="wc"]`);
    for (i = 0; i < yanksMissedProperties.length; i++) {
      yanksMissedProperties[i].style.backgroundColor = 'red';
    }
  }
  var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
  var yanksYears = document.querySelectorAll(`[id^="year1"]`);
  var yanksYearProperties = document.querySelectorAll(`[id^="year"]`);
  for (i = 0; i < yanksYears.length; i++) {
  // console.log(yanksYears[i].innerHTML);
  }
  // var yanksWsYears = document.querySelectorAll(arr)
  // console.log(yanksWsYears)
  if (userName === "Win a WS" && arr[i].includes("Won World Series")) {
      for (i = 0; i < arr.length; i++) {
      console.log("SUPPPPPP");
      console.log(arr[i])
      console.log(arr[i][0]);
    } for (i = 0; i < wsbox.length; i++) {
      if (arr[i].includes("Won World Series") && wsbox[i].innerHTML === "Won World Series") {
        console.log("HERE IS BOTH YO!")
      }
    }
    // if (userName === "Won the WS") {
    //   console.log("High as a kite" + arr[i][2])
    //   arr[i][0].style.backgroundColor = 'pink';
    // }
  }
  console.log(yanksWsProperties);
  for (i = 0; i < arr.length; i++) {
    yanksOverallRecord.push(arr[i]);
    // yanksOverallRecord.push(arr[i][0]);
    // yanksOverallRecord.push(arr[i][2]);
  }
  for (i = 0; i < yanksWsProperties.length; i++) {
    // if (userName === "Won the World Series") {
      console.log(yanksWsProperties[i].innerHTML);
      // yanksWsProperties[i] === arr[i][0];
      // console.log(yanksWsProperties[i])
      // console.log(yanksWsProperties[i])
      // yanksWsProperties[i].style.backgroundColor = 'pink';
    // }
  }
  for (i = 0; i < yanksYears.length; i++) {
    // console.log(yanksYears[i]);
  }
  // if (arr[1])
  yanksOverallRecord.splice(0,29);
  // console.log(arr[i]);
  if (userName === "Won World Series" || userName === "Won the World Series" || userName === "won world series") {
  for (i = 0; i < yanksOverallRecord.length; i++) {
    // console.log(yanksOverallRecord[i]);
    for (j = 0; j < yanksWsProperties.length; j++) {
    // console.log(yanksWsProperties[j].innerHTML);
    for (k = 0; k < yanksYearPropertiesArray.length; k++) {
      // console.log(yanksYearPropertiesArray[k].innerHTML);
      for (l = 0; l < yanksYearProperties.length; l++) {
    if (yanksOverallRecord[i][2] === "Won World Series" && yanksOverallRecord[i][0] === yanksYearPropertiesArray[k].innerHTML
        && yanksOverallRecord[i][0] === yanksYearProperties[i].innerHTML && yanksOverallRecord[i][2] === yanksWsProperties[j].innerHTML) {
      // console.log("THIS");
      // console.log(yanksYearPropertiesArray[k].innerHTML)
      // console.log(yanksYearProperties[i].innerHTML);
      yanksYearProperties[i].style.backgroundColor = "#D4AE0B";
      yanksWsProperties[j].style.backgroundColor = "#D4AE0B";
      // console.log(yanksWsProperties[j].innerHTML);
      // console.log(yanksOverallRecord[i][0]);
      // if (yanksOverallRecord[i][0] === yanksWsProperties[j]) {
      // if (yanksOverallRecord[i][0] === "2000" && yanksWsProperties[j].innerHTML === "Won World Series") {
      //   console.log("I BELIEVE I CAN FLY!");
        // if (yanksOverallRecord[i][0] === yanksYearPropertiesArray[k].innerHTML) {
        //   console.log("FART KNOCKERS");
        //     }
        // yanksOverallRecord[i].style.backgroundColor = 'pink';
          // }
          }
        }
      }
    }
    // }
  }
    //This only adds all 81 items into the array as a whole, not individually by groups of three based on the 27 years
    // console.log(yanksOverallRecord[i][0]);
    // console.log(yanksOverallRecord[i][1]);
    // console.log(yanksOverallRecord[i][2]);
    // yanksTotalArray.push(yanksOverallRecord[i][0]);
    // yanksTotalArray.push(yanksOverallRecord[i][1]);
    // yanksTotalArray.push(yanksOverallRecord[i][2]);
    // console.log(yanksTotalArray);
    //If we could get the Overall Record index to equal the Year thing it would work
    if (userName === "Won a WS" && yanksOverallRecord[i][0] === "1999") {
      document.getElementById("year4").style.backgroundColor = 'pink';
      console.log("These were the times that the Yankees:" + " " + yanksOverallRecord[i][2]);
      console.log(yanksWsProperties[i] + " " + "Hi" + " " + yanksOverallRecord[i][0]);
      if (yanksOverallRecord[i][0] === yanksWsProperties[i]) {
        console.log(yanksOverallRecord[i][0]); //LETS BUILD ON THIS!
        //Extract from Array
        //Extract from List
        //Match Array to List
        //If Array Contains "Won World Series", then "Year" (matched to variable) shows X color
        console.log("MATCHES!")
        }
      // if (yanksOverallRecord[i][2] === ""
      }
    }
}

//WILL THIS FUNCTION WORK IF IT IS PULLING "Won World Series" from an array? Seems kind of useless right now
  function yankeeColors() {
    var results = document.getElementById("wonworldseries96").innerHTML;
    console.log(results);
    if (results === 'Won World Series') {
      results = results.toUpperCase();
      console.log(results);
    }
  }
  yankeeColors();

//NEXT UP (6/5): How do I get it to toggle without hiding between 1996 and 1999 when they have the same div?
function hideGraphic() {
  var hidden = document.getElementById("infographic1");
  var hidden2 = document.getElementById("infographic2");
  var hidden3 = document.getElementById("infographic3");
  var innerhidden = document.getElementById("infographicinner1");
  var yankeesubhead1 = document.getElementById("yankeesubhead1")
  var yankeesubhead2 = document.getElementById("yankeesubhead2")
  var yankeesubhead3 = document.getElementById("yankeesubhead3")
  innerhidden.innerHTML = "In 1996, the Yankees won the first of four World Series titles in a five-year span by defeating the Atlanta Braves in six games."
  yankeesubhead1.innerHTML = "Joe Torre (1st yr.)"
  yankeesubhead2.innerHTML = "Tino Martinez (44)"
  yankeesubhead3.innerHTML = "Andy Pettitte (18)"
  console.log("^^^^" + hidden.style.visibility);
  console.log(hidden);
  if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
}

function hideGraphic2() {
  var hidden2 = document.getElementById("infographic2")
  var hidden = document.getElementById("infographic1");
  var hidden3 = document.getElementById("infographic3");
  console.log(hidden2);
  if (hidden2.style.visibility === "hidden" || hidden2.style.visibility === "") {
      hidden2.style.visibility = "visible";
      hidden.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
}

function hideGraphic3() {
  var hidden3 = document.getElementById("infographic3");
  var hidden2 = document.getElementById("infographic2");
  var hidden = document.getElementById("infographic1");
  console.log(hidden3);
  if (hidden3.style.visibility === "hidden" || hidden3.style.visibility === "") {
      hidden3.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
  } else {
      hidden3.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden.style.visibility = "hidden";
  }
}

function hideGraphic4() {
  console.log("hideGraphic4)")
  var hidden = document.getElementById("infographic1");
  var innerhidden = document.getElementById("infographicinner1");
  innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
  var yankeesubhead1 = document.getElementById("yankeesubhead1")
  var yankeesubhead2 = document.getElementById("yankeesubhead2")
  var yankeesubhead3 = document.getElementById("yankeesubhead3")
  yankeesubhead1.innerHTML = "Joe Torre (4th yr.)"
  yankeesubhead2.innerHTML = "Tino Martinez (28)"
  yankeesubhead3.innerHTML = "Orlando Hernandez (17)"

  var hidden2 = document.getElementById("infographic2");
  var hidden3 = document.getElementById("infographic3");

  if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
  }
}

document.getElementById("year4").addEventListener("click", hideGraphic4);

function hideGraphic5() {
    var hidden3 = document.getElementById("infographic3");
    var hidden2 = document.getElementById("infographic2");
    var hidden = document.getElementById("infographic1");
    var yankeesubhead1 = document.getElementById("yankeesubhead1")
    var yankeesubhead2 = document.getElementById("yankeesubhead2")
    var yankeesubhead3 = document.getElementById("yankeesubhead3")
    console.log("NUMBER FIVE")
    var innerhidden = document.getElementById("infographicinner1");
    if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
        hidden.style.visibility = "visible";
        hidden2.style.visibility = "hidden";
        hidden3.style.visibility = "hidden";
        innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship."
        yankeesubhead1.innerHTML = "Joe Torre (5th yr.)"
        yankeesubhead2.innerHTML = "Bernie Williams (30)"
        yankeesubhead3.innerHTML = "Andy Pettitte (19)"
    } else {
        hidden.style.visibility = "hidden";
        hidden2.style.visibility = "hidden";
        hidden3.style.visibility = "hidden";
        // innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years, and 26th overall championship."
    }
  }

function hideGraphic6() {
    var hidden3 = document.getElementById("infographic3");
    var hidden2 = document.getElementById("infographic2");
    var hidden = document.getElementById("infographic1");
    var yankeesubhead1 = document.getElementById("yankeesubhead1")
    var yankeesubhead2 = document.getElementById("yankeesubhead2")
    var yankeesubhead3 = document.getElementById("yankeesubhead3")
    console.log("NUMBER SIX")
    var innerhidden = document.getElementById("infographicinner1");
    innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks."
    if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    }
}

function hideGraphic7() {
    var hidden3 = document.getElementById("infographic3");
    var hidden2 = document.getElementById("infographic2");
    var hidden = document.getElementById("infographic1");
    var yankeesubhead1 = document.getElementById("yankeesubhead1")
    var yankeesubhead2 = document.getElementById("yankeesubhead2")
    var yankeesubhead3 = document.getElementById("yankeesubhead3")
    console.log("NUMBER SEVEN")
    var innerhidden = document.getElementById("infographicinner1");
    innerhidden.innerHTML = "In 2002, the Yankees failed to reach the ALCS for the first time in five seasons, losing in five games to the eventual-champion Angels."
    if (hidden.style.visibility === "hidden" || hidden.style.visibility === "") {
      hidden.style.visibility = "visible";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    } else {
      hidden.style.visibility = "hidden";
      hidden2.style.visibility = "hidden";
      hidden3.style.visibility = "hidden";
    }
}

function prevYear() {
  var innerhidden = document.getElementById("infographicinner1");
  var yankeesGraphic98 = document.getElementById("infographic3");
  var yankeesGraphic97 = document.getElementById("infographic2");
  var yankeesGraphic96 = document.getElementById("infographic1");
  var yankeesubhead1 = document.getElementById("yankeesubhead1");
  var yankeesubhead2 = document.getElementById("yankeesubhead2");
  var yankeesubhead3 = document.getElementById("yankeesubhead3");
    if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2001") != -1) && (yankeesGraphic96.style.visibility = "visible")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      console.log("Clicking on 2000");
      innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.";
      yankeesubhead1.innerHTML = "Joe Torre (5th yr.)"
      yankeesubhead2.innerHTML = "Bernie Williams (30)"
      yankeesubhead3.innerHTML = "Andy Pettitte (19)"
    }
    else if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2002") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks.";
      yankeesubhead1.innerHTML = "Joe Torre (6th yr.)"
      yankeesubhead2.innerHTML = "Tino Martinez (34)"
      yankeesubhead3.innerHTML = "Roger Clemens (20)"
    }
    else if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2003") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2002, the Yankees failed to reach the ALCS for the first time in five seasons, losing in five games to the eventual-champion Angels.";
    }
  }

function nextYear() {
  var innerhidden = document.getElementById("infographicinner1");
  var yankeesGraphic98 = document.getElementById("infographic3");
  var yankeesGraphic97 = document.getElementById("infographic2");
  var yankeesGraphic96 = document.getElementById("infographic1");
  var yankeesubhead1 = document.getElementById("yankeesubhead1");
  var yankeesubhead2 = document.getElementById("yankeesubhead2");
  var yankeesubhead3 = document.getElementById("yankeesubhead3");
    if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 1996") != -1) && (yankeesGraphic96.style.visibility = "visible")) {
      yankeesGraphic97.style.visibility = "visible";
      yankeesGraphic96.style.visibility = "hidden";
      yankeesGraphic98.style.visibility = "hidden";
      console.log("Clicking on 96");
    }
    else if (yankeesGraphic97.style.visibility = "visible") {
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "hidden";
      yankeesGraphic98.style.visibility = "visible";
      console.log("Clicking on 97");
    }
    else if (yankeesGraphic98.style.visibility = "visible") {
      console.log("Clicking on 98");
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      // yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 1999, the Yankees won their third World Series in four years. They set a Wild Card-era record by by going 11-1 in the postseason, a feat only matched once since."
    }
    if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 1999") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2000, the Yankees won their fourth World Series in five years by dispatching the cross-town rival Mets in five games. The title represented the franchise's 26th overall championship.";
      yankeesubhead1.innerHTML = "Joe Torre (5th yr.)"
      yankeesubhead2.innerHTML = "Bernie Williams (30)"
      yankeesubhead3.innerHTML = "Andy Pettitte (19)"
    }
    else if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2000") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2001, the Yankees came one game away from a fourth straight World Series title, falling in seven games to the Arizona Diamondbacks.";
      yankeesubhead1.innerHTML = "Joe Torre (6th yr.)"
      yankeesubhead2.innerHTML = "Tino Martinez (34)"
      yankeesubhead3.innerHTML = "Roger Clemens (20)"
    }
    else if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2001") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2002, the Yankees failed to reach the ALCS for the first time in five seasons, losing in five games to the eventual-champion Angels.";
    }
    else if ((document.getElementById('infographicinner1').innerHTML.indexOf("In 2002") != -1) && (yankeesGraphic97.style.visibility = "hidden") && (yankeesGraphic98.style.visibility = "hidden")) {
      yankeesGraphic98.style.visibility = "hidden";
      yankeesGraphic97.style.visibility = "hidden";
      yankeesGraphic96.style.visibility = "visible";
      innerhidden.innerHTML = "In 2003, the Yankees won their sixth pennant in an eight-year span, but were beaten in six games by the Florida Marlins in the World Series.";
    }
}

// function nextYear2() {
//   var innerhidden = document.getElementById("infographicinner1");
//   var yankeesGraphic98 = document.getElementById("infographic3");
//   var yankeesGraphic97 = document.getElementById("infographic2");
//   var yankeesGraphic96 = document.getElementById("infographic1");
//     if ((yankeesGraphic97.style.visibility = "visible") && (yankeesGraphic98.style.visibility = "hidden")) {
//       yankeesGraphic97.style.visibility = "hidden";
//       yankeesGraphic96.style.visibility = "hidden";
//       yankeesGraphic98.style.visibility = "visible";
//     }
// }


function hideWsLogo() {
  var hidden96 = document.getElementById("worldseriesgraphic");
  var hidden97 = document.getElementById("dsgraphic97");
  var hidden98 = document.getElementById("wsgraphic98")
  console.log("^^^^" + hidden96.style.visibility);
  console.log(hidden96);
  if (hidden96.style.visibility === "hidden" || hidden96.style.visibility === "") {
      hidden96.style.visibility = "visible";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  } else {
      hidden96.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  }
}

function hideWsLogo2() {
  var hidden97 = document.getElementById("dsgraphic97")
  var hidden96 = document.getElementById("worldseriesgraphic");
  var hidden98 = document.getElementById("wsgraphic98")
  console.log(hidden97);
  if (hidden97.style.visibility === "hidden" || hidden97.style.visibility === "") {
      hidden97.style.visibility = "visible";
      hidden96.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
  } else {
      hidden98.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  }
}

function hideWsLogo3() {
  var hidden98 = document.getElementById("wsgraphic98");
  var hidden97 = document.getElementById("dsgraphic97");
  var hidden96 = document.getElementById("worldseriesgraphic");
  console.log(hidden97);
  if (hidden98.style.visibility === "hidden" || hidden98.style.visibility === "") {
      hidden98.style.visibility = "visible";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  } else {
      hidden98.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden96.style.visibility = "hidden";
  }
}

function hideWsLogo4() {
  var hidden96 = document.getElementById("worldseriesgraphic");
  var hidden98 = document.getElementById("wsgraphic98");
  var hidden97 = document.getElementById("dsgraphic97");
  var ws96image = document.getElementById("worldseriesgraphic96");
  var ws99image = document.getElementById("worldseriesgraphic99");
  console.log(ws99image.src);

  if (hidden96.style.visibility === "hidden" || hidden96.style.visibility === "" && ws96image.style.visibility === "hidden" || ws96image.style.visibility === "") {
      hidden96.style.visibility = "visible";
      // ws99image.style.visibility = "visible";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
      ws96image.style.visibility = "hidden";
      ws99image.style.visibility = "visible";
  } else {
      hidden96.style.visibility = "hidden";
      hidden97.style.visibility = "hidden";
      hidden98.style.visibility = "hidden";
      ws96image.style.visibility = "hidden";
      ws99image.style.visibility = "visible"
  }
}

    document.getElementById("wonworldseries96").addEventListener("click", hideWsLogo);
    document.getElementById("alds97").addEventListener("click", hideWsLogo2);
    document.getElementById("wonworldseries98").addEventListener("click", hideWsLogo3);

function resetProperties() {
  console.log("Reset Properties");
  var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
  for (i = 0; i < yanksWsProperties.length; i++) {
    yanksWsProperties[i].style.backgroundColor = 'inherit';
    yanksWsProperties[i].style.textDecoration = '#none';
    yanksWsProperties[i].style.color = 'black';
    yanksWsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksLostWsProperties = document.querySelectorAll(`[id^="ws"]`);
  for (i = 0; i < yanksLostWsProperties.length; i++) {
    yanksLostWsProperties[i].style.backgroundColor = 'inherit';
    yanksLostWsProperties[i].style.textDecoration = '#none';
    yanksLostWsProperties[i].style.color = 'black';
    yanksLostWsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksMissedProperties = document.querySelectorAll(`[id^="missed"]`);
  for (i = 0; i < yanksMissedProperties.length; i++) {
    yanksMissedProperties[i].style.backgroundColor = 'inherit';
    yanksMissedProperties[i].style.textDecoration = 'none';
    yanksMissedProperties[i].style.color = 'black';
    yanksMissedProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksAldsProperties = document.querySelectorAll(`[id^="alds"]`);
  for (i = 0; i < yanksAldsProperties.length; i++) {
    yanksAldsProperties[i].style.backgroundColor = 'inherit';
    yanksAldsProperties[i].style.textDecoration = 'none';
    yanksAldsProperties[i].style.color = 'black';
    yanksAldsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksAlcsProperties = document.querySelectorAll(`[id^="alcs"]`);
  for (i = 0; i < yanksAlcsProperties.length; i++) {
    yanksAlcsProperties[i].style.backgroundColor = 'inherit';
    yanksAlcsProperties[i].style.textDecoration = 'none';
    yanksAlcsProperties[i].style.color = 'black';
    yanksAlcsProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
  var yanksRecordProperties = document.querySelectorAll(`[id^="yrrecord"]`);
  for (i = 0; i < yanksRecordProperties.length; i++) {
    yanksRecordProperties[i].style.backgroundColor = 'inherit';
    yanksRecordProperties[i].style.textDecoration = 'none';
    yanksRecordProperties[i].style.color = 'black';
    yanksRecordProperties.forEach(element => {
      console.log(element.textContent);
    });
  }
}

  // function highlightYear() {
  //   var yanksWsProperties = document.querySelectorAll(`[id^="wonworldseries"]`);
  //   var yanksYears = document.querySelectorAll(`[id^="year1"]`);
  //   var yanksYearsAll = document.querySelectorAll(`[id^="year"]`);
  //   for (i = 0; i < yanksYears.length; i++) {
  //   console.log(yanksYears[i].innerHTML);
  //   console.log(arr[i][2])
  //   }
  //   for (i = 0; i < arr.length, i < yanksYearsAll; i++) {
  //   // if (arr[i][2] === "Won World Series" && userName === "DOG") {
  //     console.log("BUTTS" + "" + arr[i][2] + "" + yanksYearsAll[i]);
  //     // }
  //   }
  // }
  // highlightYear();

//HAMBURGER MENU CODE PASTED FROM INTERNET
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

function showMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function totalWins() {
//   var userName = document.getElementById("name").value;
//   if (userName === "100+") {
//     document.getElementById("playerinfo").innerHTML = "100+"
//   }
//   for (i = 0; i < yanksYearRecord.length; i++) {
//     let yanksWinsLosses = yanksArray[i].split("-")
//     console.log(yanksWinsLosses[0]);
//     if (userName === yanksYearRecord[i].innerHTML || userName === yanksWinsLosses[0]) {
//       yanksYearRecord[i].style.backgroundColor = 'black';
//       yanksYearRecord[i].style.color = 'white';
//       document.getElementById("playerinfo").innerHTML = userName;
//       // document.getElementById("playerinfo").innerHTML = yanksWinsLosses[0] + "Hi!"
//     }
//   }
// }
// totalWins();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("alds95");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addEventListener("click", logName);
addEventListener("click", displayName);
addEventListener("click", yankeeResult);
addEventListener("onload", yankeeColors);
// addEventListener("onload", highlightYear);
// addEventListener("click", totalWins);
addEventListener("onload", yanksWins);
// addEventListener("onload", over100);
document.getElementById("year1").addEventListener("click", hideGraphic);
document.getElementById("year2").addEventListener("click", hideGraphic2);
document.getElementById("year3").addEventListener("click", hideGraphic3);
