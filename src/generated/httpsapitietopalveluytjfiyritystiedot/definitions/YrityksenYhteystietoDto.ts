import { VirheTiedot } from "./VirheTiedot";

/**
 * YrityksenYhteystietoDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YrityksenYhteystietoDto {
    /** s:string */
    YhteysTieto?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:string */
    TietoLahde?: string;
    /** s:string */
    Seloste?: string;
    /** s:string */
    TietolahdeTeksti?: string;
    /** s:string */
    Laji?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
