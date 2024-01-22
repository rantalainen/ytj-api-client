
/**
 * TunnistusTiedot
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface TunnistusTiedot {
    /** s:string */
    AsiakasNimi?: string;
    /** s:string */
    Tiketti?: string;
    /** s:int */
    PyyntojenMaara?: string;
    /** s:string */
    PyyntoPvm?: string;
    /** LoginStatus|s:string|SUCCESS,INVALID_VOUCHER,INVALID_HASHVALUE,INVALID_TIMESTAMP,INVALID_INPUT_DATA,OTHER_ERROR,ACCOUNT_INACTIVE,TEST_ACCOUNT_MAX_EXCEEDED,CUSTOMER_NOT_FOUND */
    TunnistusStatus?: string;
}
