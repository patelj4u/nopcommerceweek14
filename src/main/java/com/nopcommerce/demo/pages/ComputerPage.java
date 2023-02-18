package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")
    WebElement ComputerLink;
    @FindBy(xpath = "//h1[normalize-space()='Computers']")
    WebElement ComputersText;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[normalize-space()='Desktops']")
    WebElement DesktopsLink;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//li[1]//ul[1]//li[1]")
    WebElement NotebooksLink;

    @FindBy(xpath = "//li[@class='active last']//a[normalize-space()='Software']")
    WebElement SoftwareLink;


    public String ComputersText() {
        return getTextFromElement(ComputersText);
    }

    public void mouseHoverOnComputerTab(){
        mouseHoverToElement(ComputerLink);
    }
    public void clickOnDesktopTab() {
        clickOnElement(DesktopsLink);
    }

    public String getNoteBooksLinks1() {
        return getTextFromElement(NotebooksLink);
    }

    public String getSoftwareLink1() {
        return getTextFromElement(SoftwareLink);
    }

    public void clickOnComputerButton() {
        clickOnElement(ComputerLink);
    }
}