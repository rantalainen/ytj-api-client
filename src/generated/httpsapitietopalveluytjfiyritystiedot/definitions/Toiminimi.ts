import { Tietolahde } from "./Tietolahde";
import { VirheTiedot } from "./VirheTiedot";

/**
 * Toiminimi
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface Toiminimi {
    /** s:string */
    Toiminimi?: string;
    /** s:string */
    AlkuPvm?: string;
    /** s:string */
    LoppuPvm?: string;
    /** TietoLahde */
    TietoLahde?: Tietolahde;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
