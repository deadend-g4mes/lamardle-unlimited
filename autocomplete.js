const songTitles = [
// Overly Dedicated

    "The Heart Pt. 2",
    "Growing Apart (To Get Closer)",
    "Night of the Living Junkies",
    "P&P 1.5",
    "Alien Girl (Today, W/ Her)",
    "Opposites Attract (Tomorrow, W/O Her)",
    "Michael Jordan",
    "Ignorance Is Bliss",
    "R.O.T.C. (Interlude)",
    "Barbed Wire",
    "Average Joe",
    "H.O.C",
    "Cut You Off (To Grow Closer)",
    "Heaven & Hell",
    "She Needs Me (remix)",
    "I Do This (Remix)",

// Section.80
    "Fuck Your Ethnicity",
    "Hol' Up",
    "A.D.H.D",
    "No Make-Up (Her Vice)",
    "Tammy's Song (Her Evils)",
    "Chapter Six",
    "Ronald Reagan Era (His Evils)",
    "Poe Mans Dreams (His Vice)",
    "The Spiteful Chant",
    "Chapter Ten",
    "Keisha's Song (Her Pain)",
    "Rigamortis",
    "Kush & Corinthians (His Pain)",
    "Blow My High (Members Only)",
    "Ab-Soul's Outro",
    "HiiiPoWeR",

// good kid, m.A.A.d city
    "Sherane A.K.A Master Splinter's Daughter",
    "Bitch, Don't Kill My Vibe",
    "Backseat Freestyle",
    "The Art of Peer Pressure",
    "Money Trees",
    "Poetic Justice",
    "Good Kid",
    "M.A.A.D City",
    "Swimming Pools (Drank)",
    "Sing About Me, I'm Dying of Thirst",
    "Real",
    "Compton",
    "The Recipe",
    "Black Boy Fly",
    "Now or Never",
    "The Recipe (Black Hippy Remix)",
    "Bitch Don't Kill My Vibe - Remix",

// To Pimp a Butterfly
    "Wesley's Theory",
    "For Free? (Interlude)",
    "King Kunta",
    "Institutionalized",
    "These Walls",
    "u",
    "Alright",
    "For Sale? (Interlude)",
    "Momma",
    "Hood Politics",
    "How Much a Dollar Cost",
    "Complexion (A Zulu Love)",
    "The Blacker the Berry",
    "You Ain't Gotta Lie (Momma Said)",
    "i",
    "Mortal Man",

// Untitled Unmastered
    "Untitled 01 | 08.19.2014.",
    "Untitled 02 | 06.23.2014.",
    "Untitled 03 | 05.28.2013.",
    "Untitled 04 | 08.14.2014.",
    "Untitled 05 | 09.21.2014.",
    "Untitled 06 | 06.30.2014.",
    "Untitled 07 | 2014–2016",
    "Untitled 08 | 09.06.2014.",

// DAMN.
    "BLOOD.",
    "DNA.",
    "YAH.",
    "ELEMENT.",
    "FEEL.",
    "LOYALTY.",
    "PRIDE.",
    "HUMBLE.",
    "LUST.",
    "LOVE.",
    "XXX.",
    "FEAR.",
    "GOD.",
    "DUCKWORTH.",

// Black Panther Soundtrack
    "Black Panther",
    "All the Stars",
    "X",
    "The Ways",
    "Opps",
    "I Am",
    "Paramedic!",
    "Bloody Waters",
    "King's Dead",
    "Redemption Interlude",
    "Redemption",
    "Seasons",
    "Big Shot",
    "Pray for Me",

// Mr. Morale & the Big Steppers
    "United in Grief",
    "N95",
    "Worldwide Steppers",
    "Die Hard",
    "Father Time",
    "Rich (interlude)",
    "Rich Spirit",
    "We Cry Together",
    "Purple Hearts",
    "Count Me Out",
    "Crown",
    "Silent Hill",
    "Savior (interlude)",
    "Savior",
    "Auntie Diaries",
    "Mr. Morale",
    "Mother I Sober",
    "Mirror",
    "The Heart Part 5",

// GNX
    "Wacced Out Murals",
    "Squabble Up",
    "Luther",
    "Man at the Garden",
    "Hey Now",
    "Reincarnated",
    "TV Off",
    "Dodger Blue",
    "Peekaboo",
    "Heart Pt. 6",
    "GNX",
    "Gloria",
]


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            // if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            // check if the song title contains the query
            if (arr[i].toUpperCase().includes(val.toUpperCase())) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = arr[i]
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += '<input type="hidden" value="' + arr[i] + '">';
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                if (a.childElementCount < 5) // only show top 5 results
                    a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
                document.getElementById("guess-button").click()
            }
        }
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
        if (arr.includes(inp.value)) {
            document.getElementById("guess-button").disabled = false;
        } else {
            document.getElementById("guess-button").disabled = true;
        }
    });
}

autocomplete(document.getElementById("search-input"), songTitles);
