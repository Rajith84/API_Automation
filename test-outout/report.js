$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Createnewdeckcards.feature");
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
  "name": "Validate the response body for the 2 remaing value 52",
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
  "duration": 3913912472,
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
  "duration": 80604256,
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
  "duration": 1395801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 139184678,
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
  "duration": 73705738,
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
  "duration": 157730,
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
  "duration": 133459410,
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
  "duration": 130225407,
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
  "duration": 171774,
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
  "name": "Validate the response body for the 2 remaing value 52",
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
  "duration": 126228145,
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
  "duration": 1929980926,
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
  "duration": 133423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 129144527,
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
  "duration": 66593851,
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
  "duration": 119918,
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
  "name": "Validate the response body for the 2 remaing value 54",
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
  "duration": 116692514,
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
  "duration": 89098439,
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
  "duration": 232273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "name": "Validate the response body for the 1 remaing value 52",
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
  "duration": 118873722,
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
  "duration": 53814496,
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
  "duration": 22679063,
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
  "duration": 1210523388,
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
  "duration": 311138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "name": "2 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;2-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Validate the response body for the 1 remaing value 48",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 14619177,
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
  "duration": 140502153,
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
  "duration": 163132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "name": "3 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;3-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "Draw the 52 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Validate the response body for the 1 remaing value 0",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 19139325,
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
  "duration": 114743578,
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
  "duration": 142605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "name": "4 draw the deck count is 53 and error message should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;4-draw-the-deck-count-is-53-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-53-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Draw the 53 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 53 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 42897107,
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
  "duration": 131633092,
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
  "duration": 170694,
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
  "duration": 18660194,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "5 draw the deck count is 52",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;5-draw-the-deck-count-is-52",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Draw the 5 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Validate the response body for the 1 remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 5 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 22540239,
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
  "duration": 123909733,
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
  "duration": 172855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "duration": 12255930,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "6 Create of new cards with valid end point along with jokers_enabled",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;6-create-of-new-cards-with-valid-end-point-along-with-jokers-enabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Draw the 0 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Validate the response body for the 1 remaing value 54",
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
  "duration": 131749769,
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
  "duration": 73312494,
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
  "duration": 19596849,
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
  "duration": 116355448,
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
  "duration": 157730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
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
  "name": "7 draw the deck count is 56 and error message should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-56-and-error-message-should-be-displayed-\"not-enough-cards-remaining-to-draw-56-additional\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 51,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "Draw the 56 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 56 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 25281065,
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
  "duration": 116767598,
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
  "duration": 118297,
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
  "duration": 32638728,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "7 draw the deck count is 4",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;7-draw-the-deck-count-is-4",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Get the reaming count of the deck",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "Draw the 4 cards from the avaible deck_id by postrequest",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "verify response code 200",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Validate the response body for the 1 remaing value 0",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "error messsage should be displayed \"Not enough cards remaining to draw 4 additional\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Drawcards.Get_the_reaming_count_of_the_deck()"
});
formatter.result({
  "duration": 31404438,
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
  "duration": 112058391,
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
  "duration": 30394319,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "8 500 error for  cards along with  jokers_enabled\u003dtrue",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;8-500-error-for--cards-along-with--jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 66,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Draw the by postrequest \"https://deckofcardsapi.com/api/deck//draw/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
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
  "duration": 117992165,
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
  "duration": 67547253,
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
  "duration": 25795307,
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
  "duration": 90335970,
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
  "duration": 166373,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "9 404 error for  cards along with  jokers_enabled\u003dtrue",
  "description": "",
  "id": "draw-one-or-more-cards-from-the-avaible-deck;9-404-error-for--cards-along-with--jokers-enabled\u003dtrue",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 74,
      "name": "@TestcaseId2"
    }
  ]
});
formatter.step({
  "line": 76,
  "name": "the api are up and runnig for \"https://deckofcardsapi.com/api/deck/new/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "A user perform post request \"http://deckofcardsapi.com/api/deck/new/?jokers_enabled\u003dtrue\"",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "count of deck is \"54\"",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Draw the by postrequest \"https://deckofcardsapi.com/api/deck/%3C%3Cdeck_id%3E%3E/draw/\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
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
  "duration": 200591271,
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
  "duration": 66584668,
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
  "duration": 16139758,
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
  "duration": 72334245,
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
  "duration": 135583,
  "status": "passed"
});
});