import { Tietolahde } from "./Tietolahde";
import { VirheTiedot } from "./VirheTiedot";

/**
 * Konkurssitieto
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface Konkurssitieto {
    /** s:string */
    Seloste?: string;
    /** s:boolean */
    Aktiivinen?: string;
    /** Tietolahde */
    Tietolahde?: Tietolahde;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:string */
    Koodi?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
