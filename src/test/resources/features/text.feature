Feature: Text Component

  Background:
    Given I login and create a text page

  Scenario: Validate title authoring value
    When I open the new text page
    And I configure the Text component text field to be Test Page Text
    And I save the dialog then switched to Preview mode
    Then I should see the Component Text is "Test Page Text"