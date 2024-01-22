import { Yritysmuodot } from "./Yritysmuodot";
import { TunnistusTiedot } from "./TunnistusTiedot";
import { VirheTiedot } from "./VirheTiedot";

/**
 * wmYritysMuodotResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface WmYritysMuodotResult {
    /** Yritysmuodot */
    Yritysmuodot?: Yritysmuodot;
    /** TunnistusTiedot */
    TunnistusTiedot?: TunnistusTiedot;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
}
