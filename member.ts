import { Filehandle } from "./filehandle";

export interface Member {
  id: number;
  nom: string;
  email: string;
  motdepasse: string;
  nomduclub:string;
  memberImages:Filehandle[];
  role:String;
}
