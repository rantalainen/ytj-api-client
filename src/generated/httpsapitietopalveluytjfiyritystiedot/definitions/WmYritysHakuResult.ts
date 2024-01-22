import { YritysHaku } from "./YritysHaku";
import { TunnistusTiedot } from "./TunnistusTiedot";
import { VirheTiedot } from "./VirheTiedot";

/**
 * wmYritysHakuResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface WmYritysHakuResult {
    /** YritysHaku */
    YritysHaku?: YritysHaku;
    /** TunnistusTiedot */
    TunnistusTiedot?: TunnistusTiedot;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
}
