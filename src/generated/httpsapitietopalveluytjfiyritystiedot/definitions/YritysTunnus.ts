import { VirheTiedot } from "./VirheTiedot";

/**
 * YritysTunnus
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YritysTunnus {
    /** s:string */
    YTunnus?: string;
    /** s:string */
    Status?: string;
    /** s:string */
    Alkupvm?: string;
    /** s:string */
    Loppupvm?: string;
    /** s:boolean */
    YritysLopetettu?: string;
    /** s:string */
    YrityksenLopettamisenSyy?: string;
    /** s:string */
    YrityksenLopettaminenTietolahde?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
}
