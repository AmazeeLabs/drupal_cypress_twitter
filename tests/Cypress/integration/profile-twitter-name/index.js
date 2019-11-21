beforeEach(() => {
  cy.drupalInstall({profile: 'standard'});
  cy.drush('en drupal_cypress_twitter');
});

// Given the user is authenticated
Given(/^the user is authenticated$/, function () {
  cy.drupalSession({user: 'admin'});
});

// And the user is viewing the profile edit mask
Given(/^the user is viewing the profile edit mask$/, function () {
  cy.visit('/user');
  cy.get('.tabs').contains('Edit').click();
});

// When the user enters "@pmelab" into the field labeled "Twitter"
When(/^the user enters "([^"]*)" into the field labeled "([^"]*)"$/, function (value, label) {
  cy.queryByLabelText(label).type(value);
});

// And the user saves the profile
And(/^the user saves the profile$/, function () {
  cy.queryByText('Save').click();
});

// Then a success message is displayed
Then(/^a success message is displayed$/, function () {
  cy.get('.messages').contains('The changes have been saved.');
});

// Then a success message is displayed
Then(/^an error message is displayed$/, function () {
  cy.get('.messages').contains('Invalid twitter name.');
});

// Given the user is not authenticated
Given(/^the user is not authenticated$/, function () {
  // Grant anonymous users access to profiles. This should be done on project
  // configuration level directly, so we do it manually during the test run.
  cy.drupalScript('drupal_cypress_twitter:integration/profile-twitter-name/grant-access.php');
});

// And there is a user with name "pmelab" and twitter account "@pmelab"
Given(/^there is a user with name "pmelab" and twitter account "@pmelab"$/, function () {
  cy.drupalScript('drupal_cypress_twitter:integration/profile-twitter-name/create-pmelab.php');
});


// When the user is viewing the profile of "pmelab"
When(/^the user is viewing the profile of "([^"]*)"$/, function (name) {
  cy.drupalVisitEntity('user', {name});
});

// Then there is the text "@pmelab" linked to the "@pmelab" twitter account
Then(/^there is the text "([^"]*)" linked to the "([^"]*)" twitter account$/, function (handle) {
  cy.get('a').contains(handle).should('have.attr', 'href', `https://www.twitter.com/${handle.substr(1)}`);
});
