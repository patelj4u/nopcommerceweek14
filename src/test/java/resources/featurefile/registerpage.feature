Feature: Register Test
  As A User I Want to Check Register Page

Scenario:User Should Navigate To Register Page Successfully
  When User on Home page
  And I click on Registerlink
  Then I can see "Register" Text


  Scenario:User Need FirstName LastName Email Password And Confirm Password Fields Are Mandatory
    When User on Home page
    And I click on Registerlink
    And I enter First Name"jiten" in field
    And I enter Last Name "patel" in field
    And I enter email address "jiten123@gmail.com" in field
    And I enter password "12345678" in password field
    And I reenter password "12345678" in confirm field

  @sanity
  Scenario:User Should Create Account Successfully
    When User on Home page
    And I click on Registerlink
    And I click on male redio
    And I enter First Name"jiten" in field
    And I enter Last Name "patel" in field
    And I click DateOfDropDown as "7"
    And I MonthOfDropdown as "6"
    And I ClickYearOfDropdown as "1985"
    And I enter email address "jiten1234@gmail.com" in field
    And I enter password "12345678" in password field
    And I reenter password "12345678" in confirm field
    And I click on Register button
    Then I can see Message "Your registration completed"
