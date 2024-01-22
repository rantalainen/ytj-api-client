import { NykyinenTieto } from "./NykyinenTieto";
import { VirheTiedot } from "./VirheTiedot";
import { TunnistusTiedot } from "./TunnistusTiedot";

/**
 * wmToiminimiResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface WmToiminimiResult {
    YTunnus?: string;
    YritysNimi?: string;
    Ingressi?: string;
    TiedonNimi?: string;
    /** NykyinenTieto */
    NykyinenTieto?: NykyinenTieto;
    /** EdellinenTieto */
    EdellinenTieto?: NykyinenTieto;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** TunnistusTiedot */
    TunnistusTiedot?: TunnistusTiedot;
}
