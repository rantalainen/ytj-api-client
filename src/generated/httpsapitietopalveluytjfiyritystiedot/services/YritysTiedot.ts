import { YritysTiedotSoap } from "../ports/YritysTiedotSoap";
import { YritysTiedotSoap12 } from "../ports/YritysTiedotSoap12";

export interface YritysTiedot {
    readonly YritysTiedotSoap: YritysTiedotSoap;
    readonly YritysTiedotSoap12: YritysTiedotSoap12;
}
