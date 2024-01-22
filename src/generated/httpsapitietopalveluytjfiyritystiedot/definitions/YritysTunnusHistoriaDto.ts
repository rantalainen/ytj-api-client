import { VirheTiedot } from "./VirheTiedot";

/**
 * YritysTunnusHistoriaDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YritysTunnusHistoriaDto {
    /** s:string */
    YTunnusVanha?: string;
    /** s:string */
    YTunnusUusi?: string;
    /** s:string */
    Syy?: string;
    /** s:string */
    Muutospvm?: string;
    /** s:string */
    Muutostyyppi?: string;
    /** s:string */
    Teksti?: string;
    /** s:string */
    Tietolahde?: string;
    /** s:string */
    Tapahtuma?: string;
    /** s:string */
    Selite?: string;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** s:string */
    Salkdi?: string;
    /** s:string */
    SalkdiPvm?: string;
}
