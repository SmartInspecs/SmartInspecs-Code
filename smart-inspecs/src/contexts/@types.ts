import { UserInfo } from "firebase/auth";
import { DocumentData } from "firebase/firestore";

export interface iDefaultProviderProps {
    children: React.ReactNode;
  }

export interface iUserContext{
  createUser: any | null,
  loginUser: void | null, 
  logoutUser: Promise<void>, 
  user: UserInfo[] | null
  userDb: DocumentData | null,
  getObras: Promise<void> | null,
  obraSelected: iNovaObra | null;
}

export interface iObrasContext{
  
}

export interface iNovaObra{
  id: string;
  nome: string;
  endereco: string;
  cep: string;
  respTecnico: string;
  respSegQual: string;
  prazo: string;
  princMetConst: string;
  tiposEPCs: string;
  area: string;
  tipoObra: string;
  inspecoes: [];
  url: string;
}

export interface iObraCardProps {
  obra: {
    nome: string;
    endereço: string;
    inspecoes: [];
    imgUrl: string;
  };
}