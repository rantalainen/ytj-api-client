import { YrityksenHenkilo } from "./YrityksenHenkilo";
import { YrityksenPostiOsoite } from "./YrityksenPostiOsoite";
import { YrityksenRekisterit } from "./YrityksenRekisterit";
import { YritysTunnus } from "./YritysTunnus";
import { Konkurssitieto } from "./Konkurssitieto";
import { Toiminimi } from "./Toiminimi";
import { Rinnakkaistoiminimet } from "./Rinnakkaistoiminimet";
import { YritystunnusHistoria } from "./YritystunnusHistoria";
import { YrityksenYhteystiedot } from "./YrityksenYhteystiedot";
import { VirheTiedot } from "./VirheTiedot";
import { TunnistusTiedot } from "./TunnistusTiedot";

/**
 * wmYritysTiedotResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.ytj.fi/`
 */
export interface WmYritysTiedotResult {
    /** YrityksenHenkilo */
    YrityksenHenkilo?: YrityksenHenkilo;
    /** YrityksenPostiOsoite */
    YrityksenPostiOsoite?: YrityksenPostiOsoite;
    /** YrityksenKayntiOsoite */
    YrityksenKayntiOsoite?: YrityksenPostiOsoite;
    /** YrityksenUlkomainenOsoite */
    YrityksenUlkomainenOsoite?: YrityksenPostiOsoite;
    /** YrityksenRekisterit */
    YrityksenRekisterit?: YrityksenRekisterit;
    /** YrityksenRekisteriHistoria */
    YrityksenRekisteriHistoria?: YrityksenRekisterit;
    /** s:boolean */
    YritysEnnakkoperintaRekisterissa?: string;
    YrityksenSeuraavaTarkistusPvm?: string;
    /** YritysTunnus */
    YritysTunnus?: YritysTunnus;
    /** Konkurssitieto */
    Konkurssitieto?: Konkurssitieto;
    /** Saneeraustieto */
    Saneeraustieto?: Konkurssitieto;
    /** Selvitystilatieto */
    Selvitystilatieto?: Konkurssitieto;
    /** Keskeytystieto */
    Keskeytystieto?: Konkurssitieto;
    /** Yritysmuoto */
    Yritysmuoto?: Konkurssitieto;
    /** Kotipaikka */
    Kotipaikka?: Konkurssitieto;
    /** Toimiala */
    Toimiala?: Konkurssitieto;
    /** YrityksenKieli */
    YrityksenKieli?: Konkurssitieto;
    /** ElinkeinoToiminta */
    ElinkeinoToiminta?: Konkurssitieto;
    /** Toiminimi */
    Toiminimi?: Toiminimi;
    /** Rinnakkaistoiminimet */
    Rinnakkaistoiminimet?: Rinnakkaistoiminimet;
    /** Aputoiminimet */
    Aputoiminimet?: Rinnakkaistoiminimet;
    /** AputoiminimenKaannokset */
    AputoiminimenKaannokset?: Rinnakkaistoiminimet;
    /** YritystunnusHistoria */
    YritystunnusHistoria?: YritystunnusHistoria;
    /** YrityksenYhteystiedot */
    YrityksenYhteystiedot?: YrityksenYhteystiedot;
    /** VirheTiedot */
    VirheTiedot?: VirheTiedot;
    /** TunnistusTiedot */
    TunnistusTiedot?: TunnistusTiedot;
}
