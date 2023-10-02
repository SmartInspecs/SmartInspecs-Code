import { createContext, useContext, useEffect, useState } from "react";
import { iDefaultProviderProps, iNovaObra } from "./@types";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
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
  const [modalEditInfo, setModalEditInfo] = useState(false);
  const [modalEditFunc, setModalEditFunc] = useState(false);
  const [addFunc, setAddFunc] = useState(false);

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
            obrasData.push({ id: doc.id, ...doc.data() });
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

  const updateObra = async (obraId: string, obra: iNovaObra) => {
    try {
      const empresaId = empresa?.id;

      if (empresaId) {
        const obraRef = doc(
          db,
          `empresas/${empresaId.toString()}/obras/${obraId}`
        );
        await updateDoc(obraRef, {
          nome: obra.nome,
          cep: obra.cep || "",
          respTecnico: obra.respTecnico || "",
          respSegQual: obra.respSegQual || "",
          prazo: obra.prazo || "",
          princMetConst: obra.princMetConst || "",
          tiposEPCs: obra.tiposEPCs || "",
          area: obra.area || "",
          tipoObra: obra.tipoObra || "",
          updatedAt: serverTimestamp(),
        });
        console.log("Obra atualizada com sucesso!");
        setModalEditInfo(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar obra:", error);
    }
  };

  const updateWorkers = async (obraId: string, workers: any[]) => {
    try {
      const empresaId = empresa?.id;

      if (empresaId) {
        const obraRef = doc(
          db,
          `empresas/${empresaId.toString()}/obras/${obraId}`
        );
        await updateDoc(obraRef, {
          funcionarios: workers,
        });
        console.log("Funcionário adicionado com sucesso!");
        setModalEditInfo(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar obra:", error);
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
        setModalEditInfo,
        modalEditInfo,
        updateObra,
        updateWorkers,
        modalEditFunc,
        setModalEditFunc,
        addFunc,
        setAddFunc,
      }}
    >
      {children}
    </ObrasContexts.Provider>
  );
};
