package com.nopcommerce.demo.cucumber.Stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.http.util.Asserts;
import org.testng.Assert;

public class RegisterStepdefs {
    @When("^User on Home page$")
    public void userOnHomePage() {
    }

    @And("^I click on Registerlink$")
    public void iClickOnRegisterlink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I can see \"([^\"]*)\" Text$")
    public void iCanSeeText(String Register)  {
        Assert.assertEquals(Register,new RegisterPage().verifyRegisterText());

    }

    @And("^I enter First Name\"([^\"]*)\" in field$")
    public void iEnterFirstNameInField(String name)  {
        new RegisterPage().enterFirstnameField(name);


    }

    @And("^I enter Last Name \"([^\"]*)\" in field$")
    public void iEnterLastNameInField(String Lastname)  {
        new RegisterPage().enterLastnameField(Lastname);

    }
    @And("^I click DateOfDropDown as \"([^\"]*)\"$")
    public void iClickDateOfDropDownAs(String day)  {
       new RegisterPage().ClickDateOfDropDown(day);
    }

    @And("^I MonthOfDropdown as \"([^\"]*)\"$")
    public void iMonthOfDropdownAs(String month)  {
       new RegisterPage().ClickMonthOfDropdown(month);
    }

    @And("^I ClickYearOfDropdown as \"([^\"]*)\"$")
    public void iClickYearOfDropdownAs(String year)  {
       new RegisterPage().ClickYearOfDropdown(year);
    }

    @And("^I enter email address \"([^\"]*)\" in field$")
    public void iEnterEmailAddressInField(String email)  {
        new RegisterPage().enterEmailField(email);

    }

    @And("^I enter password \"([^\"]*)\" in password field$")
    public void iEnterPasswordInPasswordField(String password) {
        new RegisterPage().enterPasswordField(password);

    }

    @And("^I reenter password \"([^\"]*)\" in confirm field$")
    public void iReenterPasswordInConfirmField(String password1){
        new RegisterPage().eneterComfirmPassword(password1);

    }

    @And("^I click on male redio$")
    public void iClickOnMaleRedio() {
        new RegisterPage().cilckMaleFemaleRadio();
    }


    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().CilckOnRegister();
    }

    @Then("^I can see Message \"([^\"]*)\"$")
    public void iCanSeeMessage(String Message)  {
        Assert.assertEquals(Message,new RegisterPage().VerifyRegisterComplateText());

    }


}
