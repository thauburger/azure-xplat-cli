// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=teststorage101;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers><SignedIdentifier><Id>containerpolicy01</Id><AccessPolicy><Start>2015-12-01T00:00:00.0000000Z</Start><Expiry>2100-12-31T00:00:00.0000000Z</Expiry><Permission>rwdl</Permission></AccessPolicy></SignedIdentifier><SignedIdentifier><Id>containerpolicy02</Id><AccessPolicy><Start>2014-12-01T00:00:00.0000000Z</Start><Expiry>2099-12-31T00:00:00.0000000Z</Expiry><Permission>rl</Permission></AccessPolicy></SignedIdentifier></SignedIdentifiers>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 13 Mar 2015 03:50:54 GMT',
  etag: '"0x8D22B580A281265"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '690c1a2e-0001-0053-51e2-8cb121000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:50:54 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/storageclitest?restype=container&comp=acl', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 13 Mar 2015 03:50:54 GMT',
  etag: '"0x8D22B580A701AB2"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '190b54ff-0001-003f-7fe7-488946000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:50:53 GMT' });
 return result; }]];