import { AuthBody, YtjApiClientOptions } from './interfaces';
import crypto from 'crypto';
import dayjs from 'dayjs';
import path from 'path';
import { HttpsApiTietopalveluYtjFiYritystiedotClient, createClientAsync } from './generated/httpsapitietopalveluytjfiyritystiedot';

export class YtjApiClient {
  private options: YtjApiClientOptions;
  public authBody: AuthBody;

  constructor(options: YtjApiClientOptions) {
    // Check mandatory options
    if (!options.userId) {
      throw new Error('Missing options.userId');
    }
    if (!options.apiKey) {
      throw new Error('Missing options.apiKey');
    }

    // Set default options
    options.apiBaseUrl = options.apiBaseUrl || 'https://api.tietopalvelu.ytj.fi/yritystiedot.asmx';
    options.language = options.language || 'fi';

    options.timestamp = dayjs().format('YYYY-MM-DD HH:mm:ss');

    this.options = options;

    // Set authBody
    this.authBody = {
      kieli: options.language,
      asiakastunnus: options.userId,
      aikaleima: options.timestamp,
      tarkiste: this._generateHeaderMAC(options),
      tiketti: ''
    };
  }

  _generateHeaderMAC(options: YtjApiClientOptions): string {
    const concatenedString = options.userId + options.apiKey + options.timestamp;
    return crypto.createHash('sha1').update(concatenedString, 'utf-8').digest('hex').toUpperCase();
  }

  /** Creates client for SOAP API endpoints */
  async createSoapClient(): Promise<HttpsApiTietopalveluYtjFiYritystiedotClient> {
    try {
      const soapClient = await createClientAsync(path.resolve('./resources/https_api_tietopalvelu_ytj_fi_yritystiedot.wsdl'));

      // Add authBody to all function calls - every function needs authBody as argument
      // https://javascript.plainenglish.io/javascript-how-to-intercept-function-and-method-calls-b9fd6507ff02
      this.interceptMethodCalls(soapClient);

      return soapClient;
    } catch (error) {
      throw error;
    }
  }

  private interceptMethodCalls(obj: HttpsApiTietopalveluYtjFiYritystiedotClient) {
    Object.keys(obj).forEach((key) => {
      const prop = obj[key];

      if (typeof prop === 'function' && key.startsWith('wm')) {
        obj[key] = (...args: any) => {
          // Combine authBody and args
          const combinedArgs = [{ ...this.authBody, ...args[0] }];

          // Add authBody to args
          obj[key].args = combinedArgs;
          return Reflect.apply(prop, obj, combinedArgs);
        };
      }
    });
  }
}
