$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestFB.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook scenario",
  "description": "",
  "id": "test-facebook-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test with Login credentials",
  "description": "",
  "id": "test-facebook-scenario;test-with-login-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Firefox and start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Valid \"\u003cusername\u003e\" and Valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the application Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-facebook-scenario;test-with-login-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "test-facebook-scenario;test-with-login-credentials;;1"
    },
    {
      "cells": [
        "satheesh_kb",
        "Test@123"
      ],
      "line": 11,
      "id": "test-facebook-scenario;test-with-login-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Test with Login credentials",
  "description": "",
  "id": "test-facebook-scenario;test-with-login-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Firefox and start Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter Valid \"satheesh_kb\" and Valid \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "close the application Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.open_Firefox_and_start_Application()"
});
formatter.result({
  "duration": 8696681733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satheesh_kb",
      "offset": 15
    },
    {
      "val": "Test@123",
      "offset": 39
    }
  ],
  "location": "smokeTest.Login(String,String)"
});
formatter.result({
  "duration": 131679524,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 1123155170,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.close_the_application_Browser()"
});
formatter.result({
  "duration": 2406973865,
  "status": "passed"
});
});