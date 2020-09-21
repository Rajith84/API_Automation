 package StepDef;
 import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import io.restassured.response.Response;
import io.restassured.response.ResponseBodyExtractionOptions;
import io.restassured.response.ValidatableResponse;
import junit.framework.Assert;
import static io.restassured.RestAssured.given;
import java.io.*;
import org.codehaus.groovy.transform.EqualsAndHashCodeASTTransformation;

import com.sun.tools.javac.sym.CreateSymbols; 
public class Drawcards     {
	
	String endpoint;	
	String url;	 
	static String deck_id;
	static int numbe;
	private static Response draw_response;
	 
	public static String new_deckid() ///will get new_deckid id for the newly 
	{
		return  NewDeckCreation.response1.jsonPath().getString("deck_id").trim();
	}
	public static String new_remaining()//Will get remaining number from the response for the newly created card
	{
		return   NewDeckCreation.response1.jsonPath().getString("remaining").trim();
	}
	public static String card_remaining() ///Will get remaining number from the response for the drawn created card
	{
		return   draw_response.jsonPath().getString("remaining").trim();
	}
	public static String error()//Will get the error message out of card
	{
		return   draw_response.jsonPath().getString("error").trim();
	}
/*
 *  can accommodate more opps concepts and we make use of data table in feature table and to validate map collection  
 *  
 */
	
	@Given("^count of deck is \"([^\"]*)\"$")
	public void count_of_deck_is(String value) throws Throwable  {
		String cardsremaining = NewDeckCreation.response1.jsonPath().getString("remaining");
	     
		 Assert.assertEquals(value,cardsremaining); 
	}
	
	@Then("^Draw the (\\d+) cards from the avaible deck_id by postrequest$")	
	public void Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int draw_number) throws Throwable {
		 
		String path="https://deckofcardsapi.com/api/deck/"+Drawcards.new_deckid()+"/draw/?count="+draw_number;
		 System.out.println("The end point"+path);
		  draw_response= given().contentType(ContentType.JSON).log().all().get(path);  
		// response = given().when().get("https://deckofcardsapi.com/api/deck/v3gdmvsb4gmz/draw/?count=2");
		    
	}
	@Then("^verify response code (\\d+)$")
	public void verify_response_code(int value) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		Assert.assertEquals(value,draw_response.getStatusCode()); 
	}
	
	@Given("^Get the reaming count of the deck$")
	public void Get_the_reaming_count_of_the_deck() throws Throwable {
		 
		System.out.println("The count is "+Drawcards.card_remaining() );  

	}
	@Then("^error messsage should be displayed \"([^\"]*)\"$")
	public void error_messsage_should_be_displayed(String value) throws Throwable {
		Assert.assertEquals(value,Drawcards.error() );
	}
	@Then("^Draw the by postrequest \"([^\"]*)\"$")
	public void Draw_the_by_postrequest(String path) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		 draw_response=given().contentType(ContentType.JSON).log().all().get(path);
	}
	

@Then("^Validate the response body for the \"([^\"]*)\" remaing value (\\d+)$")
public void Validate_the_response_body_for_the_remaing_value(String type1, int numbe)  throws Throwable{
		
		try{
			int  count;//will check if new card or old card 
		
		if (type1=="New"){
			 count = Integer.parseInt(Drawcards.new_remaining());
		}
		else    {
			 
			count = Integer.parseInt(Drawcards.card_remaining());
		}
		 Assert.assertEquals(numbe,count);
		}
		catch(Exception e){
			System.out.println(e);
		}		
	}
}
