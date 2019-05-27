Feature: Test Facebook scenario

  Scenario Outline: Test with Login credentials
    Given Open Firefox and start Application
    When I enter Valid "<username>" and Valid "<password>"
    Then User should be able to login successfully
    Then close the application Browser

    Examples: 
      | username    | password |
      | satheesh_kb | Test@123 |
