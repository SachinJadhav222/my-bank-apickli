@cmpcbo-999
Feature: CMPCBO-9999 - APICKLI user Client Details Endpoint
  I As user
  want to check
  the SOA Response

  Scenario: Workflow Retrieve
    Given I set Header Name:"Content-Type" to Value:"application/json"
    And I set Header Name:"Party-Id" to Value:"3234567892"
    Then I set body to {"workflowId": "4000000009"}
    When I POST Request to the Endpoint "/retrieve" of base URI "/cmp/api/service/v1/client/workflow"
    Then response code should be 200
    And response header Content-Type should be application/json
    And response body path $.success should be true
    And response body path $.workflowId should be 4000000009
    And response body path $.customerData.user.emailAddress should be bla@bla.com
    And response body path $.customerData.user.firstName should be John
    And response body path $.customerData.user.username should be FAILEDRSA
    And response body path $.customerData.user.country should be United Kingdom
    And response body path $.customerData.assignedRole.isOCB should be true
    And response body path $.customerData.selectedHomepage should be Accounts by entity






