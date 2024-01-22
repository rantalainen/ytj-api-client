import { VirheTiedot } from "./VirheTiedot";

/**
 * YTieto
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YTieto {
    /** s:string */
    Tieto?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:string */
    TietoLahdeKoodi?: string;
    /** s:string */
    TietoLahdeTeksti?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
}
