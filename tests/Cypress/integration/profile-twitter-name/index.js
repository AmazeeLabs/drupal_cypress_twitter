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
