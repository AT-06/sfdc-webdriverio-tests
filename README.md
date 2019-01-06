# sfdc-wdio-tests

[![Build status](https://travis-ci.com/AT-08/sfdc-wdio-tests.svg?branch=develop)](https://travis-ci.com/AT-08/sfdc-wdio-tests) 

[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=AT-08_sfdc-wdio-tests&metric=alert_status)](https://sonarcloud.io/dashboard/index/AT-08_sfdc-wdio-tests)

Sales Force Automation project has as main objective to automate
acceptance test cases of Sales Force web using wdio,Mocha 
and Chai library.

# Features Tested
The following main features are implemented in this framework:
    
- Account(Create,Update,Delete)
- Contacts(Create,Update,Delete)

# Requirements and Configurations
- **Installing** 

The tools needed to execute the tests are the following:
    
    - node js version 8.11.3
    - Download the project:https://github.com/AT-08/sfdc-wdio-tests


- **Executing tests**

In order to execute the tests is necessary these configurations:
    
 - Open a the command prompt in the project's root directory 
 and download all project's dependencies
  
        npm install
  
 - Open the **environment.json**  and set the required parameters:
    
- To execute the tests open a command prompt 
where dependencies where downloaded  and write:
    
        npm test  
