// CypressOnRails: dont remove these command
Cypress.Commands.add('appCommands', function(body) {
  cy.log('APP: ' + JSON.stringify(body));
  cy.request({
    method: 'POST',
    url: '/__cypress__/command',
    body: JSON.stringify(body),
    log: true,
    failOnStatusCode: true
  });
});

Cypress.Commands.add('app', function(name, command_options) {
  cy.appCommands({ name: name, options: command_options });
});

Cypress.Commands.add('scenario', function(name, options = {}) {
  cy.app('scenarios/' + name, options);
});
