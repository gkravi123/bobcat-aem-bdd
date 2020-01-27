Feature: Title Component

  Background:
    Given I login and create a test title page

  Scenario: Validate title authoring value
    When I open the test title page
    And I configure the Text component text field to be Test Page Title
    And I save the dialog and switch to Preview mode
    Then I should see the Header Text is "Test Page Title"