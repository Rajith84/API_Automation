$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Feature/Createnewdeckcards.feature");
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
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@sanity"
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
  "name": "Validate the response body for the \"New\" remaing value 52",
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
  "duration": 3732846566,
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
  "duration": 127846841,
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
  "duration": 1780947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 670353,
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
      "name": "@regression"
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
  "duration": 127630233,
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
  "duration": 75865004,
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
  "duration": 160432,
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
      "name": "@regression,"
    },
    {
      "line": 14,
      "name": "@sanity"
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
  "duration": 149184178,
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
  "duration": 129633191,
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
  "duration": 166913,
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
      "name": "@regression,"
    },
    {
      "line": 20,
      "name": "@sanity"
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
  "name": "Validate the response body for the \"New\" remaing value 52",
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
  "duration": 125488450,
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
  "duration": 167348004,
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
  "duration": 203644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 480753,
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
      "name": "@regression"
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
  "duration": 142782599,
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
  "duration": 73194934,
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
  "duration": 166913,
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
      "name": "@regression"
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
  "name": "Validate the response body for the \"New\" remaing value 54",
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
  "duration": 124617693,
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
  "duration": 113708378,
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
  "duration": 178257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 655769,
  "status": "passed"
});
formatter.uri("src/test/resource/Feature/Drawoneormorecards.feature");
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
      "name": "@regression,"
    },
    {
      "line": 3,
      "name": "@sanity"
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
  "name": "Validate the response body for the \"Drawncard\" remaing value 52",
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
  "duration": 164664429,
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
  "duration": 63887229,
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
  "duration": 770346390,
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
  "duration": 236420885,
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
  "duration": 1727471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 39251602,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "2 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;2-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@regression,"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Validate the response body for the \"Drawncard\" remaing value 48",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 34668783,
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
  "duration": 171467356,
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
  "duration": 162592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 56532247,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "3 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;3-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Draw the 52 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 42172852,
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
  "duration": 326551833,
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
  "duration": 323563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 107878841,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "4 draw the deck count is 53 and error message should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;4-draw-the-deck-count-is-53-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-53-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Draw the 53 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 82926674,
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
  "duration": 138238672,
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
  "duration": 300335,
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
  "duration": 15748176,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "5 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;5-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@regression,"
    },
    {
      "line": 35,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Draw the 5 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 5 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 37113061,
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
  "duration": 180188974,
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
  "duration": 217149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 34300926,
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
  "duration": 12148469,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "6 Create of new cards with valid end point along with jokers_enabled",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;6-create-of-new-cards-with-valid-end-point-along-with-jokers-enabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@regression,"
    },
    {
      "line": 43,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Draw the 0 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Validate the response body for the \"Drawncard\" remaing value 54",
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
  "duration": 94629501,
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
  "duration": 119398011,
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
  "duration": 19719521,
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
  "duration": 116194251,
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
  "duration": 195002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 29241674,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "7 draw the deck count is 56 and error message should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-56-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-56-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "Draw the 56 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 33063391,
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
  "duration": 111157686,
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
  "duration": 143686,
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
  "duration": 29908247,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "7 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Validate the response body for the \"Drawncard\" remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 4 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 53143747,
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
  "duration": 123141403,
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
  "duration": 122078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 20666442,
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
  "duration": 10393991,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "8 500 error for  cards along with  jokers_enabled\u003dtrue",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;8-500-error-for--cards-along-with--jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Draw the by postrequest \"https://deckofcardsapi.com/api/deck//draw/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
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
  "duration": 97411387,
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
  "duration": 59455658,
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
  "duration": 15737913,
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
  "duration": 102357203,
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
  "duration": 203105,
  "status": "passed"
});
});