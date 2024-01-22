import { TunnistusTiedot } from "./TunnistusTiedot";

/**
 * YritysMuotoDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface YritysMuotoDto {
    /** s:string */
    Koodi?: string;
    /** s:string */
    Selite?: string;
    /** TunnistusTiedot */
    TunnistusTiedot?: TunnistusTiedot;
}
