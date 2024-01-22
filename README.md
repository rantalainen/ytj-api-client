# ytj-api-client

**YtjApiClient** is a third party api client for NodeJS. It is a wrapper around a SOAP client that has been [automatically generated](https://github.com/dderevjanik/wsdl-tsclient) using the [WSDL schema](https://api.tietopalvelu.ytj.fi/yritystiedot.asmx?WSDL) provided by YTJ.

## Installation

Add to project's package.json:

```
npm install @rantalainen/ytj-api-client
```

### Import

```javascript
import { YtjApiClient } from '@rantalainen/ytj-api-client';
```

## Authentication / Setup client

In order to obtain a user id and api key, please contact YTJ API support. User id and apikey is needed to access all API functions.

```javascript
const ytjApiClient = new YtjApiClient({
  userId: 'your-user',
  apiKey: 'your-apikey'
});
```

SOAP client handles authentication based on YtjApiClient userId and apiKey.

```javascript
// Set up SOAP client for calling functions
const client = await ytjApiClient.createSoapClient();
```

Example usage after initialization:

```javascript
const [companyForms] = await client.wmYritysMuodotAsync();
console.log(companyForms);
```

:warning: NOTE: All parameters for methods are mandatory. For example wmYritysHakuAsync requires a complete WmYritysHaku object:

```javascript
const organizationId = 'my_organizationid';

const [company] = await client.wmYritysHakuAsync({
  ytunnus: organizationId,
  yritysmuoto: '',
  sanahaku: 'false',
  voimassaolevat: 'true',
  hakusana: ''
});
console.log(company);
```

Available methods can be found in the [API documentation](https://api.tietopalvelu.ytj.fi/yritystiedot.asmx).
