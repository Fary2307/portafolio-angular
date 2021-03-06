import { Equipo } from './info-equipo.interface';
export interface InfoPage {
    titulo?:         string;
    email?:          string;
    nombre_corto?:   string;
    pagina_autor?:   string;
    facebook?:       string;
    twitter?:        string;
    instagran?:      string;
    tublr?:          string;
    equipo_trabajo?: Equipo[];
}
