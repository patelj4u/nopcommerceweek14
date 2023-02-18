Feature: User Login Test
  As A User I Want to Login and Verify

  Background:
    Given User on Home Page
    And I click on loginlink


  Scenario:user Should Navigate To LoginPage SuccessFully
    Then I see the "Welcome, Please Sign In!"message


  Scenario: verify The Error Message With In Valid Credentials
    And I enter email address "Jiten12@gmail.com"to email field
    And I enter password to "123456" password field
    And I click on login button
    Then I see the error message


  Scenario: verify That User Should Log In Success Fully With Valid Credentials
    And I enter email address "Jiten123@gmail.com"to email field
    And I enter password to "12345678" password field
    And I click on login button
    Then I see the LogOut link is display

  @regression
  Scenario:User Should Verify That User Should LogOut SuccessFully
    And I enter email address "Jiten123@gmail.com"to email field
    And I enter password to "12345678" password field
    And I click on login button
    And I click on LogOut button
    Then I can See Login link is Display
