 package StepDef;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static io.restassured.RestAssured.given; 
import java.util.Map;
import io.restassured.RestAssured; 
import io.restassured.response.Response; 
import org.junit.Assert;
 
public class NewDeckCreation  {

 
	String url;
	static Response response;
	 String endpoint; 
	 static  Response response1;
	 Map<String, Object> responseMap;
	 Map<String, String> query;
 

@Given("^the api are up and runnig for \"([^\"]*)\"$")
public void the_api_are_up_and_runnig_for(String url) throws Throwable
  {
	this.url=url;
		 response = given().when().get(url);
		 Assert.assertEquals(200, response.getStatusCode());	 
		 Thread. sleep(30) ;		
	}
	@When("^A user perform post request \"([^\"]*)\"$")
	public void A_user_perform_post_request(String endpoint) throws Throwable {
		this.endpoint= endpoint;
		response1=  RestAssured.get(endpoint);
	 
	}
	 
	@Then("^user receives (\\d+) response$")
	public void user_receives_response(int code) throws Throwable {
		 
		 Assert.assertEquals(code, response1.getStatusCode());
		 
		 
		    
	}
	  
	
}
 