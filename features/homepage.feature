
Feature: Homepage 

  Scenario: Visit Homepage
    Given I am on the homepage
	When I navigate to the login page
	And I enter my credentials
    And I login
    Then I should see admin panel
    And There should be javascript