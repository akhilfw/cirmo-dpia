Feature: Log in to DPIA
  
  Scenario Outline: As <role> user, I am able to login and verify title

    Given I am on the login page
    When I login with user <username> having role <role>
    Then I am able to verify title
    And I sign out successfully

    Examples:
      | username | role    |
      | DORGALE  | MPO     |
      | DOND     | Drafter |
      | ANDYA    | CPO     |

  Scenario Outline: As <role> user, I am able to login and verify HomePage URL

    Given I am on the login page
    When I login with user <username> having role <role>
    Then I am able to verify URL
    And I sign out successfully

    Examples:
      | username | role    |
      | DORGALE  | MPO     |
      | DOND     | Drafter |
      | ANDYA    | CPO     |
  
  Scenario Outline: As <role> user, I am able to verify BC Logo

    Given I am on the login page
    When I login with user <username> having role <role>
    Then I am able to verify BC Logo
    And I sign out successfully

    Examples:
      | username | role    |
      | DORGALE  | MPO     |
      | DOND     | Drafter |
      | ANDYA    | CPO     |


  Scenario Outline: Login with Invalid <role> username

    Given I am on the login page
    When I login with user <username> having role <role>
    Then Exceptions should be thrown

    Examples:
      | username | role    |
      | DORGALEs | MPO     |
      | DOND123  | Drafter |
      | ANDYAAA1 | CPO     |

  
  Scenario Outline: Login with Invalid <role> password

    Given I am on the login page
    When I login with user <username> and password <invalidpassword>
    Then Exceptions should be thrown

    Examples:
      | username | role    | invalidpassword |
      | DORGALE  | MPO     | Wrong1   |
      | DOND     | Drafter | Wrong2   |
      | ANDYA    | CPO     | Wrong3   |

