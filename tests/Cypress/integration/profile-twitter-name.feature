Feature: Twitter name on user profiles
  As an authenticated user of the website
  I want to link my profile page to my Twitter account
  So visitors don't have to search me on Twitter and are more likely to follow.

  Scenario: Add twitter account to profile
    Given the user is authenticated
    And the user visits "/user"
    And the user clicks on the "Edit" tab
    When the user enters "@pmelab" into the field "#field-twitter"
    And the user clicks the "#submit" button
    Then the user the user account is successfully saved

  Scenario: Display twitter link on profile
    Given the user is authenticated
    And the user visits "/user"
    And the user clicks on the "Edit" tab
    When the user enters "@pmelab" into the field "#field-twitter"
    And the user clicks the "#submit" button
    And the user visists "/user"
    Then user sees a link with title "@pmelab" and href "https://twitter.com/pmelab"
