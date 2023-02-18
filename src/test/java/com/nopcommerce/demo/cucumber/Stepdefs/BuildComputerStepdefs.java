package com.nopcommerce.demo.cucumber.Stepdefs;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuildComputerStepdefs {
    @When("^I click on Computertab$")
    public void iClickOnComputertab() {
        new ComputerPage().clickOnComputerButton();
    }

    @Then("^I see \"([^\"]*)\" text$")
    public void iSeeText(String computer){
       Assert.assertEquals(computer,new ComputerPage().ComputersText());
    }

    @When("^I click and mouseHover on Computertab$")
    public void iClickAndMouseHoverOnComputertab() {
        new ComputerPage().mouseHoverOnComputerTab();
    }
    @And("^I click on Desktops tab$")
    public void iClickOnDesktopsTab() {
        new ComputerPage().clickOnDesktopTab();
    }

    @Then("^I can see \"([^\"]*)\" Text Successfully$")
    public void iCanSeeTextSuccessfully(String text)  {
        Assert.assertEquals(text,new DesktopsPage().verifyDesktopsText());
    }

    @And("^I click On Build your own computer link$")
    public void iClickOnBuildYourOwnComputerLink() {
        new BuildYourOwnComputerPage().clickOwnComputer();
    }

    @And("^I select processor as \"([^\"]*)\"$")
    public void iSelectProcessorAs(String processor)  {
        new BuildYourOwnComputerPage().clickProcessorDropDown(processor);
    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram)  {
        new BuildYourOwnComputerPage().clickRamDropDown(ram);
    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd)  {
        new BuildYourOwnComputerPage().clickHddRadio();
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os)  {
     new BuildYourOwnComputerPage().clickOsradio();
    }

    @And("^I select  Software \"([^\"]*)\"$")
    public void iSelectSoftware(String soft)  {
        new BuildYourOwnComputerPage().clickSoftware();
    }


    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().AddToCartButton();
    }

    @Then("^I can see \"([^\"]*)\"$")
    public void iCanSee(String basket)  {
        Assert.assertEquals(basket,new BuildYourOwnComputerPage().verifyItemInYourCart());

    }


}
