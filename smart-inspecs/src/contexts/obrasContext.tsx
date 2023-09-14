import { createContext, useContext, useEffect, useState } from "react";
import { iDefaultProviderProps, iNovaObra } from "./@types";
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import UserContext from "./userContext";
import { db } from "../services/firebaseConfig";

export const ObrasContexts = createContext<any | null>(null);

export const ObrasContextProvider = ({ children }: iDefaultProviderProps) => {
  const [empresa, setEmpresa] = useState<any | null>(null);
  const [obras, setObras] = useState<any[] | null>(null);
  const [loadingObra, setLoadingObra] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [obraSelected, setObraSelected] = useState<iNovaObra | null>(null); // [TODO] - Criar contexto para obra selecionada
  const [modalObra, setModalObra] = useState(false);

  const { userDb } = useContext(UserContext);

  useEffect(() => {
    if (userDb) {
      (async () => {
        await getEmpresa(db, userDb?.empresa);
        const empresaId = empresa?.id;
        const obrasData: any[] = [];
        if (empresaId) {
          const obrasSnapshot = await getDocs(
            collection(db, "empresas", empresaId, "obras")
          );
          obrasSnapshot.forEach((doc) => {
            obrasData.push(doc.data());
          });
          setObras(obrasData);
          setLoadingObra(false);
        }
      })();
    }
  }, [empresa?.id, userDb]);

  const getEmpresa = async (db: Firestore, empresaName: string) => {
    const empresaQuery = query(
      collection(db, "empresas"),
      where("nome", "==", empresaName)
    );
    const empresaSnapshot = await getDocs(empresaQuery);
    empresaSnapshot.forEach((doc) => {
      setEmpresa({ id: doc.id, empresa: doc.data() });
    });
  };

  const addObras = async (novaObra: iNovaObra) => {
    try {
      const empresaId = empresa?.id;
      if (empresaId) {
        const obraRef = collection(db, "empresas", empresaId, "obras");
        await addDoc(obraRef, novaObra);
      }
    } catch (error) {
      console.error("Erro ao adicionar obra:", error);
    }
  };

  return (
    <ObrasContexts.Provider
      value={{
        empresa,
        obras,
        addObras,
        loadingObra,
        modalOpen,
        setModalOpen,
        setObraSelected,
        obraSelected,
        modalObra,
        setModalObra,
      }}
    >
      {children}
    </ObrasContexts.Provider>
  );
};
