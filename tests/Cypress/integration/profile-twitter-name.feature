Feature: Twitter name on user profiles
  As an authenticated user of the website
  I want to link my profile page to my Twitter account
  So visitors don't have to search me on Twitter and are more likely to follow.

  Scenario: Add twitter account to profile and display it
    Given the user is authenticated
    And the user visits "/user"
    And the user clicks on the "Edit" tab
    When the user enters "@pmelab" into the field "#field-twitter"
    And the user clicks the "#submit" button
    Then user sees a link with title "@pmelab" and href "https://twitter.com/pmelab"
