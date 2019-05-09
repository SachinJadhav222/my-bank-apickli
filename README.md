### Apickli Demo

#### Install

* npm install

and to run cucumber.js via a command

* npm install -g cucumber


#### To Run
`./node_modules/cucumber/bin/cucumber.js test/apickli/features --tags @health`

or

`cucumber.js test/apickli/features --tags @health`

#### Test Breakdown
Features are tagged for contextual tests with the following tags:
```
@intg - Integration tests
	@invalidhmac
	@invalidclientid
	@missingrequiredfields
	@missingrequiredfields
	@missingrequiredfields
	@missingrequiredfields
	@missingrequiredfields
	@foo
	@foobar
@hmac - hmac tests for all verbs
	@hmac-get
	@hmac-post
	@hmac-put
	@hmac-delete
@health - API health tests
	@get-ping
	@get-status
@table - Table example
```

#### File Structure
```
apickli-helloworld
├── README.md
├── package.json
└── test
    ├── apickli
    │   ├── config
    │   │   └── config.json
    │   └── features
    │       ├── errorHandling.feature
    │       ├── fixtures
    │       ├── health.feature
    │       ├── hmac.feature
    │       ├── step_definitions
    │       │   ├── apickli-gherkin.js
    │       │   ├── charges.js
    │       │   ├── computeHMAC.js
    │       │   ├── errorHandling.js
    │       │   ├── factory.js
    │       │   ├── hmac.js
    │       │   ├── init.js
    │       │   └── table.js
    │       ├── support
    │       │   └── env.js
    │       └── table.feature
    └── hmacTools.js
```
