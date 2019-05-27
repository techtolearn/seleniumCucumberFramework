package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class smokeTest {

	WebDriver driver;

	@Given("^Open Firefox and start Application$")
	public void open_Firefox_and_start_Application() throws Throwable {
		System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.navigate().to("https://www.facebook.com");

	}

	@When("^I enter Valid \"(.*)\" and Valid \"(.*)\"$")
	public void Login(String username, String password) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(username);
		driver.findElement(By.id("pass")).sendKeys(password);
	}

	@Then("^User should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();

	}

	@Then("^close the application Browser$")
	public void close_the_application_Browser() throws Throwable {
		driver.close();
	}

}
