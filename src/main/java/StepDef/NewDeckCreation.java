 package StepDef;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import general.card_draw_reusable;
import io.restassured.response.Response; 

public class NewDeckCreation extends card_draw_reusable  {
	String url;
	static Response response;
	String endpoint; 
	public static  Response response1;
	
 

@Given("^the api are up and runnig for \"([^\"]*)\"$")
public void the_api_are_up_and_runnig_for(String url) throws Throwable
  {
	 
	newcard(url);
	response_code(200, upandrunning());  
		 		
	}
	@When("^A user perform post request \"([^\"]*)\"$")
	public void A_user_perform_post_request(String endpoint) throws Throwable {
		;
		System.out.println(Drawnewcard(endpoint));
	 
	}
	 
	@Then("^user receives (\\d+) response$")
	public void user_receives_response(int code) throws Throwable {
		 
		response_code(code,get_DrawcardStatus());
		 
		 
		 
		    
	}
	  
	
}
 