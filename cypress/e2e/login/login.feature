Feature: User Login

  Scenario Outline: Login with different credentials
    Given I open the login page
    When I enter the username "<username>" and password "<password>"
    Then I should see a "<message>"
    And I should be navigated to "<page>"

    Examples:
      | username  | password      | message                      | page       |
      | admin     | admin         | Login successful!            | /dashboard |
      | wronguser | wrongpassword | Invalid username or password | /          |
