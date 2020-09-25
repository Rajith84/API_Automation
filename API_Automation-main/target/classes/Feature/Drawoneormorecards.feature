Feature: Draw one or more cards from the avaible deck
 
@TestcaseId2
Scenario: 1 Create of new cards with valid end point 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "http://deckofcardsapi.com/api/deck/new/"
	And count of deck is "52"	   
	Then Draw the 0 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then Validate the response body for the "Drawncard" remaing value 52
 
 
@TestcaseId2
Scenario: 2 draw the deck count is 4 
	Given Get the reaming count of the deck  
	Then Draw the 4 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then Validate the response body for the "Drawncard" remaing value 48
 
@TestcaseId2
Scenario: 3 draw the deck count is 52 
	Given Get the reaming count of the deck  
	Then Draw the 52 cards from the avaible deck_id by postrequest
	And verify response code 200
	Then Validate the response body for the "Drawncard" remaing value 0
 
 
@TestcaseId2
Scenario: 4 draw the deck count is 53 and error message should be displayed "Not enough cards remaining to draw 53 additional" 
	Given Get the reaming count of the deck  
	Then Draw the 53 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then error messsage should be displayed "Not enough cards remaining to draw 53 additional"
 	
@TestcaseId2
Scenario: 5 draw the deck count is 52 
	Given Get the reaming count of the deck  
	Then Draw the 5 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then Validate the response body for the "Drawncard" remaing value 0 
	Then error messsage should be displayed "Not enough cards remaining to draw 5 additional"
 	
@TestcaseId2
Scenario: 6 Create of new cards with valid end point along with jokers_enabled 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	And A user perform post request "http://deckofcardsapi.com/api/deck/new/?jokers_enabled=true"
	And count of deck is "54"	   
	Then Draw the 0 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then Validate the response body for the "Drawncard" remaing value 54 
 	

@TestcaseId2
Scenario: 7 draw the deck count is 56 and error message should be displayed "Not enough cards remaining to draw 56 additional" 
	Given Get the reaming count of the deck  
	Then Draw the 56 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then error messsage should be displayed "Not enough cards remaining to draw 56 additional"	
 
@TestcaseId2
Scenario: 7 draw the deck count is 4 
	Given Get the reaming count of the deck  
	Then Draw the 4 cards from the avaible deck_id by postrequest
	And verify response code 200 
	Then Validate the response body for the "Drawncard" remaing value 0 
 	Then error messsage should be displayed "Not enough cards remaining to draw 4 additional"
 	
@TestcaseId2
Scenario: 8 500 error for  cards along with  jokers_enabled=true 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	And A user perform post request "http://deckofcardsapi.com/api/deck/new/?jokers_enabled=true"
	And count of deck is "54"	   
	Then Draw the by postrequest "https://deckofcardsapi.com/api/deck//draw/"
	And verify response code 500
 	
@TestcaseId2
Scenario: 9 404 error for  cards along with  jokers_enabled=true 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	And A user perform post request "http://deckofcardsapi.com/api/deck/new/?jokers_enabled=true"
	And count of deck is "54"
	Then Draw the by postrequest "https://deckofcardsapi.com/api/deck/%3C%3Cdeck_id%3E%3E/draw/"
	And verify response code 404
