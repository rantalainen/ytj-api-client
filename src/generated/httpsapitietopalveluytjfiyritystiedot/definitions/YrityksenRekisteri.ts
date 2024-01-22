import { VirheTiedot } from "./VirheTiedot";

/**
 * YrityksenRekisteri
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YrityksenRekisteri {
    /** s:string */
    Viranomainen?: string;
    /** s:string */
    Rekisteri?: string;
    /** s:string */
    Paatosstatus?: string;
    /** s:string */
    Rekisterikoodi?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:string */
    Paatospvm?: string;
    /** s:string */
    Tila?: string;
    /** s:string */
    RekisteriSeloste?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
