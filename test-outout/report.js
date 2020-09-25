<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Createnewdeckcards.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Feature/Createnewdeckcards.feature");
>>>>>>> main
formatter.feature({
  "line": 1,
  "name": "Create of new cards with joker and with or without joker",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "1 Create of new cards with valid end point",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;1-create-of-new-cards-with-valid-end-point",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user receives 200 response",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
<<<<<<< HEAD
  "name": "Validate the response body for the 2 remaing value 52",
=======
  "name": "Validate the response body for the \"New\" remaing value 52",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 3913912472,
=======
  "duration": 4604884342,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/new/",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 80604256,
=======
  "duration": 86065567,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1395801,
=======
  "duration": 2311935,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "2",
      "offset": 35
    },
    {
      "val": "52",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 936936163,
=======
      "val": "New",
      "offset": 36
    },
    {
      "val": "52",
      "offset": 55
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 613095,
>>>>>>> main
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "2 validate  the invalid end point  for new cards",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;2-validate--the-invalid-end-point--for-new-cards",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/ \"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user receives 404 response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 139184678,
=======
  "duration": 179112854,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/ ",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 73705738,
=======
  "duration": 133328976,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 157730,
=======
  "duration": 167453,
>>>>>>> main
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "3 validate of new cards with invalid  end point with jokers_enabled\u003dtrue",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;3-validate-of-new-cards-with-invalid--end-point-with-jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "A user perform post request \"https://deckofcardsapi.com/api/deck/news/\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user receives 500 response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 133459410,
=======
  "duration": 172560031,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/news/",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 130225407,
=======
  "duration": 227907110,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 171774,
=======
  "duration": 169614,
>>>>>>> main
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "4 validate of new cards with  end point with jokers_enabled\u003dtrue",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;4-validate-of-new-cards-with--end-point-with-jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "A user perform post request \"https://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dflase\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user receives 200 response",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
<<<<<<< HEAD
  "name": "Validate the response body for the 2 remaing value 52",
=======
  "name": "Validate the response body for the \"New\" remaing value 52",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 126228145,
=======
  "duration": 206117121,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dflase",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1929980926,
=======
  "duration": 677989027,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 133423,
=======
  "duration": 153409,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "2",
      "offset": 35
    },
    {
      "val": "52",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 15131799,
=======
      "val": "New",
      "offset": 36
    },
    {
      "val": "52",
      "offset": 55
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 464548,
>>>>>>> main
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "5 Invalid end point or resource not found",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;5-invalid-end-point-or-resource-not-found",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck//?jokers_enabled\u003dtrue\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user receives 404 response",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 129144527,
=======
  "duration": 134954353,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck//?jokers_enabled\u003dtrue",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 66593851,
=======
  "duration": 58521668,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 119918,
=======
  "duration": 173396,
>>>>>>> main
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "6 Create of new cards with invalid end point end point with jokers_enabled\u003dtrue",
  "description": "",
  "id": "create-of-new-cards-with-joker-and-with-or-without-joker;6-create-of-new-cards-with-invalid-end-point-end-point-with-jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@TestcaseId1"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "A user perform post request \"https://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user receives 200 response",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
<<<<<<< HEAD
  "name": "Validate the response body for the 2 remaing value 54",
=======
  "name": "Validate the response body for the \"New\" remaing value 54",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 116692514,
=======
  "duration": 138324484,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 89098439,
=======
  "duration": 100836024,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "NewDeckCreation.user_receives_response(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 232273,
=======
  "duration": 165292,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "2",
      "offset": 35
    },
    {
      "val": "54",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 21428567,
  "status": "passed"
});
formatter.uri("Drawoneormorecards.feature");
=======
      "val": "New",
      "offset": 36
    },
    {
      "val": "54",
      "offset": 55
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 765424,
  "status": "passed"
});
formatter.uri("src/test/resource/Feature/Drawoneormorecards.feature");
>>>>>>> main
formatter.feature({
  "line": 1,
  "name": "Draw one or more cards from the avaible deck",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "1 Create of new cards with valid end point",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;1-create-of-new-cards-with-valid-end-point",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "count of deck is \"52\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Draw the 0 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 10,
<<<<<<< HEAD
  "name": "Validate the response body for the 1 remaing value 52",
=======
  "name": "Validate the response body for the \"Drawncard\" remaing value 52",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 118873722,
=======
  "duration": 225710232,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/new/",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 53814496,
=======
  "duration": 105834774,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 18
    }
  ],
  "location": "Drawcards.count_of_deck_is(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 22679063,
=======
  "duration": 7325007846,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 1210523388,
=======
  "duration": 658512053,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 311138,
=======
  "duration": 220390,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "52",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 34443438,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "52",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 43598344,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
>>>>>>> main
  "name": "2 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;2-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 12,
=======
      "line": 13,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 14,
=======
  "line": 15,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 15,
=======
  "line": 16,
>>>>>>> main
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 16,
=======
  "line": 17,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 17,
  "name": "Validate the response body for the 1 remaing value 48",
=======
  "line": 18,
  "name": "Validate the response body for the \"Drawncard\" remaing value 48",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 14619177,
=======
  "duration": 18537615,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 140502153,
=======
  "duration": 142216422,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 163132,
=======
  "duration": 119918,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "48",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 34051274,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "48",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 20435778,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
>>>>>>> main
  "name": "3 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;3-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 19,
=======
      "line": 20,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 21,
=======
  "line": 22,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 22,
=======
  "line": 23,
>>>>>>> main
  "name": "Draw the 52 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 23,
=======
  "line": 24,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 24,
  "name": "Validate the response body for the 1 remaing value 0",
=======
  "line": 25,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 19139325,
=======
  "duration": 24554048,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "52",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 114743578,
=======
  "duration": 130478489,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 142605,
=======
  "duration": 166373,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 64917702,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 70764122,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
>>>>>>> main
  "name": "4 draw the deck count is 53 and error message should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;4-draw-the-deck-count-is-53-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-53-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 26,
=======
      "line": 28,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 28,
=======
  "line": 30,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 29,
=======
  "line": 31,
>>>>>>> main
  "name": "Draw the 53 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 30,
=======
  "line": 32,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 31,
=======
  "line": 33,
>>>>>>> main
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 42897107,
=======
  "duration": 51696598,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 131633092,
=======
  "duration": 113929788,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 170694,
=======
  "duration": 261443,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not enough cards remaining to draw 53 additional",
      "offset": 36
    }
  ],
  "location": "Drawcards.error_messsage_should_be_displayed(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 18660194,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
=======
  "duration": 18601895,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
>>>>>>> main
  "name": "5 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;5-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 33,
=======
      "line": 35,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 35,
=======
  "line": 37,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 36,
=======
  "line": 38,
>>>>>>> main
  "name": "Draw the 5 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 37,
=======
  "line": 39,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 38,
  "name": "Validate the response body for the 1 remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
=======
  "line": 40,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
>>>>>>> main
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 5 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 22540239,
=======
  "duration": 15956674,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 123909733,
=======
  "duration": 115026336,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 172855,
=======
  "duration": 185819,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 12033921,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 13869451,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not enough cards remaining to draw 5 additional",
      "offset": 36
    }
  ],
  "location": "Drawcards.error_messsage_should_be_displayed(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 12255930,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
=======
  "duration": 20881960,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
>>>>>>> main
  "name": "6 Create of new cards with valid end point along with jokers_enabled",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;6-create-of-new-cards-with-valid-end-point-along-with-jokers-enabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 41,
=======
      "line": 43,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 43,
=======
  "line": 45,
>>>>>>> main
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 44,
=======
  "line": 46,
>>>>>>> main
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 45,
=======
  "line": 47,
>>>>>>> main
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 46,
=======
  "line": 48,
>>>>>>> main
  "name": "Draw the 0 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 47,
=======
  "line": 49,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 48,
  "name": "Validate the response body for the 1 remaing value 54",
=======
  "line": 50,
  "name": "Validate the response body for the \"Drawncard\" remaing value 54",
>>>>>>> main
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 131749769,
=======
  "duration": 125212355,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 73312494,
=======
  "duration": 86721336,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54",
      "offset": 18
    }
  ],
  "location": "Drawcards.count_of_deck_is(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 19596849,
=======
  "duration": 16595697,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 116355448,
=======
  "duration": 302149938,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 157730,
=======
  "duration": 231194,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "54",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 15905864,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "54",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 20702083,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
>>>>>>> main
  "name": "7 draw the deck count is 56 and error message should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-56-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-56-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 51,
=======
      "line": 53,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 53,
=======
  "line": 55,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 54,
=======
  "line": 56,
>>>>>>> main
  "name": "Draw the 56 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 55,
=======
  "line": 57,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 56,
=======
  "line": 58,
>>>>>>> main
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 25281065,
=======
  "duration": 24717179,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 116767598,
=======
  "duration": 116096956,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 118297,
=======
  "duration": 161511,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not enough cards remaining to draw 56 additional",
      "offset": 36
    }
  ],
  "location": "Drawcards.error_messsage_should_be_displayed(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 32638728,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
=======
  "duration": 44736485,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
>>>>>>> main
  "name": "7 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 58,
=======
      "line": 60,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 60,
=======
  "line": 62,
>>>>>>> main
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 61,
=======
  "line": 63,
>>>>>>> main
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 62,
=======
  "line": 64,
>>>>>>> main
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 63,
  "name": "Validate the response body for the 1 remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
=======
  "line": 65,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
>>>>>>> main
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 4 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
<<<<<<< HEAD
  "duration": 31404438,
=======
  "duration": 38424038,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "Drawcards.Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 112058391,
=======
  "duration": 134849559,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 162592,
=======
  "duration": 126940,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< HEAD
      "val": "1",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 51
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(int,int)"
});
formatter.result({
  "duration": 15007020,
=======
      "val": "Drawncard",
      "offset": 36
    },
    {
      "val": "0",
      "offset": 61
    }
  ],
  "location": "Drawcards.Validate_the_response_body_for_the_remaing_value(String,int)"
});
formatter.result({
  "duration": 14565731,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not enough cards remaining to draw 4 additional",
      "offset": 36
    }
  ],
  "location": "Drawcards.error_messsage_should_be_displayed(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 30394319,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
=======
  "duration": 14780179,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
>>>>>>> main
  "name": "8 500 error for  cards along with  jokers_enabled\u003dtrue",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;8-500-error-for--cards-along-with--jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 66,
=======
      "line": 68,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 68,
=======
  "line": 70,
>>>>>>> main
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 69,
=======
  "line": 71,
>>>>>>> main
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 70,
=======
  "line": 72,
>>>>>>> main
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 71,
=======
  "line": 73,
>>>>>>> main
  "name": "Draw the by postrequest \"https://deckofcardsapi.com/api/deck//draw/\"",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 72,
=======
  "line": 74,
>>>>>>> main
  "name": "verify response code 500",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 117992165,
=======
  "duration": 133967999,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 67547253,
=======
  "duration": 78121262,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54",
      "offset": 18
    }
  ],
  "location": "Drawcards.count_of_deck_is(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 25795307,
=======
  "duration": 20253741,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck//draw/",
      "offset": 25
    }
  ],
  "location": "Drawcards.Draw_the_by_postrequest(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 90335970,
=======
  "duration": 112167207,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 166373,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
=======
  "duration": 134503,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
>>>>>>> main
  "name": "9 404 error for  cards along with  jokers_enabled\u003dtrue",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;9-404-error-for--cards-along-with--jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
<<<<<<< HEAD
      "line": 74,
=======
      "line": 76,
>>>>>>> main
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "line": 76,
=======
  "line": 78,
>>>>>>> main
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
<<<<<<< HEAD
  "line": 77,
=======
  "line": 79,
>>>>>>> main
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 78,
=======
  "line": 80,
>>>>>>> main
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
<<<<<<< HEAD
  "line": 79,
=======
  "line": 81,
>>>>>>> main
  "name": "Draw the by postrequest \"https://deckofcardsapi.com/api/deck/%3C%3Cdeck_id%3E%3E/draw/\"",
  "keyword": "Then "
});
formatter.step({
<<<<<<< HEAD
  "line": 80,
=======
  "line": 82,
>>>>>>> main
  "name": "verify response code 404",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/new/",
      "offset": 31
    }
  ],
  "location": "NewDeckCreation.the_api_are_up_and_runnig_for(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 200591271,
=======
  "duration": 122243030,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue",
      "offset": 29
    }
  ],
  "location": "NewDeckCreation.A_user_perform_post_request(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 66584668,
=======
  "duration": 57443486,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54",
      "offset": 18
    }
  ],
  "location": "Drawcards.count_of_deck_is(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 16139758,
=======
  "duration": 17472396,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://deckofcardsapi.com/api/deck/%3C%3Cdeck_id%3E%3E/draw/",
      "offset": 25
    }
  ],
  "location": "Drawcards.Draw_the_by_postrequest(String)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 72334245,
=======
  "duration": 110072961,
>>>>>>> main
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 21
    }
  ],
  "location": "Drawcards.verify_response_code(int)"
});
formatter.result({
<<<<<<< HEAD
  "duration": 135583,
=======
  "duration": 253880,
>>>>>>> main
  "status": "passed"
});
});