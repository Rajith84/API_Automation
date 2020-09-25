# Finra Test
## Install Java
1. Download Java SDK 1.8  https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
2. Select Start -> Computer -> System Properties -> Advanced system settings -> Environment Variables -> System variables -> PATH. set the JAVA_HOME
3. Prepend C:\Program Files\Java\jdk1.6.0_27\bin; to the beginning of the PATH variable.
4. Install Maven https://maven.apache.org/download.cgi 
5. set the MAVEN_HOME path similar to JAVA_HOME 

## Step to download the project:   
Down load the below project https://github.com/Rajith84/FINRA_API_Assignment into youre local system.
1.open the eclipse
2.Click File menu
3.In file menu click Import
4.A window is open Now click General Folder
5.Now click Existing project into workspace
6.Then click the select from root directory
7.Browse the loaction where you dowloaded the project 


## Step to run the project
## One method 
1.Go to POM.XML IN  project FINRA_API_Assignment and verify for the assocaited depedences and plugin
1.Go to  runner  class in scr/main/java of the project FINRA_API_Assignment
2.Change the features path with your feature path or loaction(right click on feature->properties->path or loaction)
3.Go to testrunner class right click run as JUnit test
## Running through Command line
1.Run->cmd->(Go the path where it present)
2.mvn -Dtest=<Provide the Runner class name> test (Eg of my run:mvn -Dtest=TestRunner test)
3.Check the output created in the 

##Software requirment:
System installed with eclipse with maven project and assocaited depedences and plugin are added in pom.xml file


##Information:
for complex project:
Can use datatable or datadriven in features table will make more effective reuse of the methods.
Using java Map to compare more respone result
Can use interface and abstract class to make more effectiv way. 
