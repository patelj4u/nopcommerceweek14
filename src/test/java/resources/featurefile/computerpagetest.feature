Feature: Computer Test

  As A User I Want to Check Computer Page

  Scenario:verify User Should Navigate To Computer Page Successfully
    When I click on Computertab
    Then I see "Computers" text


  Scenario: verify User Should Navigate To Desktops Page Successfully
    When I click and mouseHover on Computertab
    And I click on Desktops tab
    Then I can see "Desktops" Text Successfully

  @smoke
  Scenario Outline: User Should Build Your Own Computer And Add Them To Cart Successfully
    When I click and mouseHover on Computertab
    And I click on Desktops tab
    And I click On Build your own computer link
    And I select processor as "<processor>"
   # And I click on ram dropdown
    And I select RAM "<ram>"
    And I select HDD "<hdd>"
    And I select OS "<os>"
    And I select  Software "<software>"
    And I click on add to cart button
    Then I can see "The product has been added to your shopping cart"

    Examples:| processor                                       | ram           | hdd               | os                     | software |
             | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]   |Microsoft Office [+$50.00] |
             | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] |Vista Premium [+$60.00] | Acrobat Reader [+$10.00] |
             | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | VistHome [+$50.00]     | Total Commander [+$5.00] |