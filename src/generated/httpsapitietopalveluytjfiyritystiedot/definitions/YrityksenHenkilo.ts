import { Tietolahde } from "./Tietolahde";
import { VirheTiedot } from "./VirheTiedot";

/**
 * YrityksenHenkilo
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YrityksenHenkilo {
    /** s:string */
    Nimi?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** Tietolahde */
    Tietolahde?: Tietolahde;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Hetu?: string;
    /** s:string */
    Salkdi_Hetu?: string;
    /** s:string */
    SalkdiPvm_Hetu?: string;
    /** s:string */
    Salkdi_Nimi?: string;
    /** s:string */
    SalkdiPvm_Nimi?: string;
}
