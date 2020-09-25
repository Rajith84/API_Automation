Feature: Create of new cards with joker and with or without joker

@TestcaseId1	
Scenario: 1 Create of new cards with valid end point 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "http://deckofcardsapi.com/api/deck/new/"
	Then  user receives 200 response
	Then Validate the response body for the "New" remaing value 52
 @TestcaseId1
 Scenario: 2 validate  the invalid end point  for new cards  
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/" 
	When A user perform post request "http://deckofcardsapi.com/api/deck/ "
	Then  user receives 404 response
 @TestcaseId1
Scenario: 3 validate of new cards with invalid  end point with jokers_enabled=true
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "https://deckofcardsapi.com/api/deck/news/"
	Then  user receives 500 response

@TestcaseId1 
Scenario: 4 validate of new cards with  end point with jokers_enabled=true 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "https://deckofcardsapi.com/api/deck/new/?jokers_enabled=flase"
	Then  user receives 200 response
	Then Validate the response body for the "New" remaing value 52
 	
@TestcaseId1
Scenario: 5 Invalid end point or resource not found 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "http://deckofcardsapi.com/api/deck//?jokers_enabled=true"
	Then  user receives 404 response
 
@TestcaseId1
Scenario: 6 Create of new cards with invalid end point end point with jokers_enabled=true 
	Given the api are up and runnig for "https://deckofcardsapi.com/api/deck/new/"
	When A user perform post request "https://deckofcardsapi.com/api/deck/new/?jokers_enabled=true"
	Then  user receives 200 response
	Then Validate the response body for the "New" remaing value 54

