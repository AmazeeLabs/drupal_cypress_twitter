Feature: Twitter name on user profiles
  As an authenticated user of the website
  I want to link my profile page to my Twitter account
  So visitors don't have to search me on Twitter and are more likely to follow.

  Scenario: Add twitter account to profile
    Given the user is authenticated
    And the user is viewing the profile edit mask
    When the user enters "@pmelab" into the field labeled "Twitter"
    And the user saves the profile
    Then a success message is displayed

  Scenario: Display twitter link on profile
    Given the user is not authenticated
    And there is a user with name "pmelab" and twitter account "@pmelab"
    When the user is viewing the profile of "pmelab"
    Then there is the text "@pmelab" linked to the "@pmelab" twitter account
