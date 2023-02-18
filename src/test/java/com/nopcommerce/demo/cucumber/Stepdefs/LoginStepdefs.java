package com.nopcommerce.demo.cucumber.Stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {

    @Given("^User on Home Page$")
    public void userOnHomePage() {
    }
    @And("^I click on loginlink$")
    public void iClickOnLoginlink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I see the \"([^\"]*)\"message$")
    public void iSeeTheMessage(String msg)  {
        Assert.assertEquals(msg,new LoginPage().verifyWelcomeText());
    }

    @And("^I enter email address \"([^\"]*)\"to email field$")
    public void iEnterEmailAddressToEmailField(String email)  {
       new LoginPage().enterEmailId(email);
    }

    @And("^I enter password to \"([^\"]*)\" password field$")
    public void iEnterPasswordToPasswordField(String pswd)  {
       new LoginPage().enterPassword(pswd);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }


    @Then("^I see the error message$")
    public void iSeeTheErrorMessage() {
        new LoginPage().verifyErrorMessage();
    }

    @Then("^I see the LogOut link is display$")
    public void iSeeTheLogOutLinkIsDisplay() {
    }

    @And("^I click on LogOut button$")
    public void iClickOnLogOutButton() {
    }

    @Then("^I can See Login link is Display$")
    public void iCanSeeLoginLinkIsDisplay() {
    }



}
