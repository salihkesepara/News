angular.module('services.injects', [
// Lib
'ionic',
'ngCordova',
  
// Directives
'directives.image',

// Modules
'modules.dash',  
'modules.menu',

// Services
'services.nav',
'services.xmlToJson',
'services.source',
'services.builder',
'services.getlink',
'services.loading',
'service.dateParser',

// Resource
'resource.config',
'resource.db',
'resource.init',

// Remote
'remote.config',
'remote.http',

// Request
'request.rssfeed',
  
// Parsers
'parsers.hurriyet',
])