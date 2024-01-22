import { Tietolahde } from "./Tietolahde";
import { VirheTiedot } from "./VirheTiedot";

/**
 * YrityksenPostiOsoite
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YrityksenPostiOsoite {
    /** s:string */
    Versio?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:int */
    Kieli?: string;
    /** s:string */
    CoNimi?: string;
    /** s:string */
    Katu?: string;
    /** s:string */
    Postilokero?: string;
    /** s:string */
    Talo?: string;
    /** s:string */
    Porras?: string;
    /** s:string */
    Huoneisto?: string;
    /** s:string */
    Jakokirjain?: string;
    /** s:string */
    Postinumero?: string;
    /** s:string */
    Maa?: string;
    /** s:string */
    Ulkomaanosoite?: string;
    /** s:string */
    Lisatieto?: string;
    /** s:string */
    Toimipaikka?: string;
    /** s:boolean */
    Aktiivinen?: string;
    /** Tietolahde */
    Tietolahde?: Tietolahde;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
