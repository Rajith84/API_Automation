package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features= "C:/Users/RAJITH/Desktop/Javamain/New folder/Restfullproject/src/main/java/Feature/"  
		,glue={"StepDef"}///Path of test defination Rest.src.main.java.
		,format={"pretty","html:test-outout","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}
		 ,monochrome = true// display the console out put in a roper way
		,strict = true //Will check if any step defination is missed in step definaion file
		,dryRun = false //will check the mapping feature file and step definition file
		,tags={"@TestcaseId1,@TestcaseId2"}		     
		)
 
public class TestRunner {

}
