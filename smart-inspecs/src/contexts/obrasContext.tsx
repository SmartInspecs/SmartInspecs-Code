import { createContext, useContext, useEffect, useState } from "react";
import { iDefaultProviderProps, iNovaObra } from "./@types";
import {
  Firestore,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import UserContext from "./userContext";
import { db } from "../services/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const obraSelectedLocal = localStorage.getItem("@Smart-Inspecs:obraSelected");
  const obraSelectedParsed = obraSelectedLocal
    ? JSON.parse(obraSelectedLocal)
    : null;

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
          if (obraSelectedParsed) {
            getObra(obraSelectedParsed.id);
          }
          setObras(obrasData);
          setLoadingObra(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [empresa?.id, userDb, obraSelectedParsed?.id]);

  const getEmpresa = async (db: Firestore, empresaName: string) => {
    const empresaQuery = query(
      collection(db, "empresas"),
      where("nome", "==", empresaName)
    );
    const empresaSnapshot = await getDocs(empresaQuery);
    empresaSnapshot.forEach((doc) => {
      localStorage.setItem(
        "@Smart-Inspecs:empresa",
        JSON.stringify({ id: doc.id, empresa: doc.data() })
      );
      setEmpresa({ id: doc.id, empresa: doc.data() });
    });
  };

  const addObras = async (novaObra: iNovaObra) => {
    try {
      const empresaId = empresa?.id;
      if (empresaId) {
        const obraRef = collection(db, "empresas", empresaId, "obras");
        await addDoc(obraRef, novaObra);
        toast.success("Obra adicionada com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao adicionar obra:", error);
      toast.error("Erro ao adicionar obra!");
    }
  };

  const getObra = async (obraId: string) => {
    try {
      const obraRef = doc(db, `empresas/${empresa?.id}/obras/${obraId}`);
      const docObra = await getDoc(obraRef);
      if (docObra.exists()) {
        const obraData = docObra.data();
        const obraSelectedData: iNovaObra = {
          id: docObra.id,
          nome: obraData?.nome || "",
          endereco: obraData?.endereco || "",
          cep: obraData?.cep || "",
          respTecnico: obraData?.respTecnico || "",
          respSegQual: obraData?.respSegQual || "",
          prazo: obraData?.prazo || "",
          princMetConst: obraData?.princMetConst || "",
          tiposEPCs: obraData?.tiposEPCs || "",
          area: obraData?.area || "",
          tipoObra: obraData?.tipoObra || "",
          inspecoes: obraData?.inspecoes || [],
          url: obraData?.url || "",
          funcionarios: obraData?.funcionarios || [],
          updatedAt: obraData?.updatedAt || "",
        };
        setObraSelected(obraSelectedData);
      } else {
        console.log("Obra não encontrada!");
        toast.error("Obra não encontrada!");
      }
    } catch (error) {
      console.error("Erro ao buscar obra:", error);
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
          funcionarios: obra.funcionarios || [],
          inspecoes: obra.inspecoes || [],
          updatedAt: serverTimestamp(),
        });
        console.log("Obra atualizada com sucesso!");
        toast.success("Obra atualizada com sucesso!");
        setModalEditInfo(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar obra:", error);
      toast.error("Erro ao atualizar obra!");
    }
  };

  const updateWorkers = async (
    obraId: string,
    workers: any[],
    type: string
  ) => {
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
        console.log("Funcionário alterado com sucesso!");
        toast.success("Funcionário alterado com sucesso!");
        setModalEditFunc(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar obra:", error);
      toast.error("Erro ao atualizar obra!");
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
        getObra,
      }}
    >
      {children}
    </ObrasContexts.Provider>
  );
};
