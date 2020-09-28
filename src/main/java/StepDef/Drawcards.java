 package StepDef;
 import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import general.card_draw_reusable;
import io.restassured.response.Response;
import org.junit.Assert;

 
public class Drawcards extends card_draw_reusable    {
	
	String endpoint;	
	String url;	 
	static String deck_id;
	static int numbe;
	public static Response draw_response;
	 
 
	
	@Given("^count of deck is \"([^\"]*)\"$")
	public void count_of_deck_is(String value) throws Throwable  {
		 
		int code=Integer.parseInt(value);  
		response_code(new_remaining(), code);
	}
	
	
	@Then("^Draw the (\\d+) cards from the avaible deck_id by postrequest$")	
	public void Draw_the_cards_from_the_avaible_deck_id_by_postrequest(int drawnumber) throws Throwable {
		 
		draw_number(drawnumber);
	
		    
	}
	
	@Then("^verify response code (\\d+)$")
	public void verify_response_code(int value) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		response_code(value,get_drawn_respcode()); 
	}
	
	@Given("^Get the reaming count of the deck$")
	public void Get_the_reaming_count_of_the_deck() throws Throwable {
		 
		card_remaining();
	 

	}
	@Then("^error messsage should be displayed \"([^\"]*)\"$")
	public void error_messsage_should_be_displayed(String value) throws Throwable {
		Assert.assertEquals(value, error() );
	}
	@Then("^Draw the by postrequest \"([^\"]*)\"$")
	public void Draw_the_by_postrequest(String path) throws Throwable {
	    // Express the Regexp above with the code you wish you had
		draw_cards(path);
	}
	

@Then("^Validate the response body for the \"([^\"]*)\" remaing value (\\d+)$")
public void Validate_the_response_body_for_the_remaing_value(String type1, int numbe)  throws Throwable{
		
		try{
			int  count;//will check if new card or old card 
		
		if (type1=="New"){
			 count = new_remaining();
		}
		else    {
			 
			count = Integer.parseInt(card_remaining());
		}
		 response_code(numbe, count); 
		}
		catch(Exception e){
			System.out.println(e);
		}		
	}
}
