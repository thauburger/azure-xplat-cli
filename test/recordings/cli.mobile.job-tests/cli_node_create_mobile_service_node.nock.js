// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services?service=mobileservice&action=register')
  .reply(409, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ConflictError</Code><Message>The resource type mobileservice is already registered for this subscription.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '238',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'd87bbbf60701858d822b3cc586389fd1',
  date: 'Wed, 08 Apr 2015 01:12:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  etag: 'b9eace978d53429a8827dec020c36819:0000',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '5de178086b788e9c887dc29b6ff7c68e',
  date: 'Wed, 08 Apr 2015 01:12:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '2085b204f7cb84648a9630592bf95b5d',
  date: 'Wed, 08 Apr 2015 01:12:21 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4ec62b9f91578fc1b3f6556b2e08a396',
  date: 'Wed, 08 Apr 2015 01:12:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0e980d946055816a8d30c1f948448b6f',
  date: 'Wed, 08 Apr 2015 01:12:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '3807daa4ded28438bdfdc17bc3f39326',
  date: 'Wed, 08 Apr 2015 01:12:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f354650f51af8d96bce500297e1d23e5',
  date: 'Wed, 08 Apr 2015 01:12:44 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '45271a4d65748e12abc756b8f59b40c5',
  date: 'Wed, 08 Apr 2015 01:12:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '02b54598315b830b9fccc8a701f8f3cd',
  date: 'Wed, 08 Apr 2015 01:12:56 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'df28d795d5b38e8c97f2b5e16579f56e',
  date: 'Wed, 08 Apr 2015 01:13:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f7f811d76f248d37a54ba8c59f29937f',
  date: 'Wed, 08 Apr 2015 01:13:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '35b2e0415d3689509ba2350e7224fb5c',
  date: 'Wed, 08 Apr 2015 01:13:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ee0f9b675942803c9de36358c7427e9e',
  date: 'Wed, 08 Apr 2015 01:13:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '9de7408a3c558874abbd6c8d61e648cc',
  date: 'Wed, 08 Apr 2015 01:13:23 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>InProgress</Status></Operation>", { 'cache-control': 'no-cache',
  'content-length': '197',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7312d5dfe7768c62a4fa3cd3570d1d05',
  date: 'Wed, 08 Apr 2015 01:13:28 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/operations/5de178086b788e9c887dc29b6ff7c68e')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>5de17808-6b78-8e9c-887d-c29b6ff7c68e</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '76cc8e3875a68b71bab08177f22f4280',
  date: 'Wed, 08 Apr 2015 01:13:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode6624mobileservice')
  .reply(200, "<Application xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>clitestnode6624mobileservice</Name><Label>clitestnode6624</Label><Description>clitestnode6624</Description><Uri>https://management.core.windows.net/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/applications/clitestnode6624mobileservice</Uri><State>Healthy</State><InternalResources><InternalResource><LogicalName>ZumoMobileService</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.MobileServices.MobileService</Type><Name>clitestnode6624</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/clitestnode6624</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlDatabase_eb13379b34474344abe3beeb3355e369</LogicalName><State>Provisioned</State><Type>Microsoft.WindowsAzure.SQLAzure.DataBase</Type><Name>clitestnode6624_db</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/op94zew7e1/databases/clitestnode6624_db</SelfLinkUri><FailureCode/></InternalResource><InternalResource><LogicalName>ZumoSqlServer_85e9710cdf0e449c9769758721ff8cad</LogicalName><State>ProvisionConfigured</State><Type>Microsoft.WindowsAzure.SQLAzure.Server</Type><Name>op94zew7e1</Name><SelfLinkUri>https://management.core.windows.net:8443/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/sqlservers/servers/op94zew7e1</SelfLinkUri><FailureCode/></InternalResource></InternalResources><ExternalResources/></Application>", { 'cache-control': 'no-cache',
  'content-length': '1596',
  'content-type': 'application/xml; charset=utf-8',
  etag: 'b9eace978d53429a8827dec020c36819:0001',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '0c6ee7d1e50581969910797a51c1cd1d',
  date: 'Wed, 08 Apr 2015 01:13:34 GMT' });
 return result; }]];