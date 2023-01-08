/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    found = []
    //iterate through all books
    for (let i = 0; i < scannedTextObj.length; i++) {
        //exits the loop and returns an empty array if the search term is empty
        if (searchTerm === "") {
            break;
        }
        //declared and intialized a book variable so it is easier to write
        let book = scannedTextObj[i];
        //iterate through each scanned text
        for (let j = 0; j < book.Content.length; j++) {
            //check if the current text line  contains the search term(".includes" is also case-sensitive)
            /**
             * However this way finds any occurances of the search term so a word containing the search term would return true
             * In order to only search for a word you can use regular expressions:
             * const findWord = new RegExp(`^${searchTerm}$`)
             * findWord.test(book.Content[j]["Text"])
             */
            if (book.Content[j]["Text"].includes(searchTerm)) {
                //put the isbn, page, and line as object and append it onto the array
                found.push({"ISBN": book["ISBN"], "Page": book.Content[j]["Page"], "Line": book.Content[j]["Line"]})
            }
        }

    }

    //Put  the search and found variables into a result object
    var result = {
        "SearchTerm": searchTerm,
        "Results": found
    };
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut2 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }, 
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const twentyLeaguesOut3 = {
    "SearchTerm": "went on",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const twentyLeaguesOut4 = {
    "SearchTerm": "apple",
    "Results": []
}

const twentyLeaguesOut5 = {
    "SearchTerm": "",
    "Results": []
}

const whiteFangIn = [
    {
        "Title": "White Fang",
        "ISBN": " 9780001849129",
        "Content": [] 
    }
]

const whiteFangOut = {
    "SearchTerm": "white",
    "Results": []
}

const nothingIn = []

const nothingOut = {
    "SearchTerm": "no",
    "Results": []
}

const booksIn = [
    {
        "Title": "Little Women",
        "ISBN": "9780671517649",
        "Content": [
            {
                "Page": 26,
                "Line": 13,
                "Text": "As she spoke, Amy showed the handsome flask which"
            },
            {
                "Page": 26,
                "Line": 14,
                "Text": "replaced the cheap one; and looked so earnest and"
            },
            {
                "Page": 26,
                "Line": 10,
                "Text": "humble in her little effort to forget herself, that Meg"
            } 
        ] 
    },
    {
        "Title": "The Jungle",
        "ISBN": "9780743487627",
        "Content": [
            {
                "Page": 7,
                "Line": 8,
                "Text": "Now he is in his glory, dominating the scene. Some of"
            },
            {
                "Page": 7,
                "Line": 9,
                "Text": "the people are eating, some are laughing and talking — but"
            },
            {
                "Page": 7,
                "Line": 10,
                "Text": "of those who does not hear him. His notes are never"
            } 
        ] 
    }
]

const booksOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780671517649",
            "Page": 26,
            "Line": 13
        }, 
        {
            "ISBN": "9780671517649",
            "Page": 26,
            "Line": 14
        },
        {
            "ISBN": "9780743487627",
            "Page": 7,
            "Line": 8
        },
        {
            "ISBN": "9780743487627",
            "Page": 7,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. Also checks for case. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

//Check if a word that shows up in multiple lines works
const test3result = findSearchTermInBooks("and", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

//Test if multiple words return the right result
const test4result = findSearchTermInBooks("went on", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test4result);
}

//Test if a word that doesn't exist returns an empty result
const test5result = findSearchTermInBooks("apple", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut4);
    console.log("Received:", test5result);
}

//Test if an empty search term returns an empty result
const test6result = findSearchTermInBooks("", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut5) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOut5);
    console.log("Received:", test6result);
}

//Test if a book with no scanned texts returns an empty result
const test7result = findSearchTermInBooks("white", whiteFangIn); 
if (JSON.stringify(whiteFangOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", whiteFangOut);
    console.log("Received:", test7result);
}

//Test if a search on no books returns an empty result
const test8result = findSearchTermInBooks("no", nothingIn); 
if (JSON.stringify(nothingOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", nothingOut);
    console.log("Received:", test8result);
}

//Test on multiple lines and multiple books
const test9result = findSearchTermInBooks("the", booksIn); 
if (JSON.stringify(booksOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", booksOut);
    console.log("Received:", test9result);
}