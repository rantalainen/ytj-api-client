
/**
 * YritysHakuDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YritysHakuDto {
    /** s:string */
    YTunnus?: string;
    /** s:int */
    Yritysavain?: string;
    /** s:string */
    Yritysnimi?: string;
    /** s:string */
    Yritysmuoto?: string;
    /** s:string */
    Status?: string;
    /** s:dateTime */
    Loppupvm?: string;
    /** s:string */
    Tarkiste?: string;
}
