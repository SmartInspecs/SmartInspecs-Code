import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import {
  getDocs,
  collection,
  addDoc,
  CollectionReference,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../services/firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iDefaultProviderProps } from "./@types";
import { ObrasContexts } from "./obrasContext";
import UserContext from "./userContext";

export const InspecaoContext = createContext<any | null>(null);

export const InspecaoContextProvider = ({
  children,
}: iDefaultProviderProps) => {
  // type iAgendamento = {
  //   date: string;
  //   responsavel: string;
  //   finalidade: string;
  // };

  // const [agendamentos, setAgendamentos] = useState<iAgendamento[] | null>(null);
  // const empresaLocal = localStorage.getItem("@Smart-Inspecs:empresa");
  // const empresa = empresaLocal ? JSON.parse(empresaLocal) : null;
  // const obraSelectedLocal = localStorage.getItem("@Smart-Inspecs:obraSelected");
  // const obraSelected = obraSelectedLocal ? JSON.parse(obraSelectedLocal) : null;

  // const [agendamentosSnapshot, loadingAgendamentos, errorAgendamentos] =
  //   useCollection(
  //     collection(
  //       db,
  //       "empresas",
  //       empresa.id,
  //       "obras",
  //       obraSelected?.id,
  //       "agendamentos"
  //     )
  //   );

  // useEffect(() => {}, []);

  // const addAgendamento = async (data: iAgendamento) => {
  //   const agendamentosRef = collection(
  //     db,
  //     "empresas",
  //     empresa?.id,
  //     "obras",
  //     obraSelected?.id,
  //     "agendamentos"
  //   );
  //   await addDoc(agendamentosRef, {
  //     ...data,
  //     obraId: obraSelected?.id,
  //     createdAt: new Date(),
  //   });
  // };

  // const deleteAgendamento = async (id: string) => {
  //   const agendamentosRef = doc(
  //     db,
  //     "empresas",
  //     empresa?.id,
  //     "obras",
  //     obraSelected?.id,
  //     "agendamentos",
  //     id
  //   );
  //   try {
  //     await deleteDoc(agendamentosRef);
  //     toast.success("Agendamento deletado com sucesso!");
  //   } catch (error) {
  //     toast.error("Erro ao deletar agendamento!");
  //   }
  // };

  // // const getAgendamentos = async (
  // //   empresa: { id: string },
  // //   obraSelected: { id: string }
  // // ) => {
  // //   const agendamentosRef = collection(
  // //     db,
  // //     "empresas",
  // //     empresa?.id,
  // //     "obras",
  // //     obraSelected?.id,
  // //     "agendamentos"
  // //   );
  // //   try {
  // //     const agendamentosSnapshot = await getDocs(agendamentosRef);
  // //     const agendamentosData: any[] = [];
  // //     agendamentosSnapshot.forEach((doc) => {
  // //       agendamentosData.push({ id: doc.id, ...doc.data() });
  // //     });
  // //     setAgendamentos(agendamentosData);
  // //     console.log(agendamentosData);
  // //   } catch (err) {
  // //     toast.error("Erro ao carregar agendamentos!");
  // //   }
  // // };

  // // const addAgendamento = async (data: iAgendamento) => {
  // //   const agendamentosRef = collection(
  // //     db,
  // //     "empresas",
  // //     empresa?.id,
  // //     "obras",
  // //     obraSelected?.id,
  // //     "agendamentos"
  // //   );

  // //   try {
  // //     if (empresa && obraSelected) {
  // //       await addDoc(agendamentosRef, {
  // //         ...data,
  // //         date: new Date(data.date),
  // //         createdAt: new Date(),
  // //       });
  // //       toast.success("Agendamento adicionado com sucesso!");
  // //     }
  // //   } catch (error) {
  // //     console.log(error);
  // //     toast.error("Erro ao adicionar agendamento!");
  // //   }
  // // };

  return (
    <InspecaoContext.Provider
      value={
        {
          // agendamentos,
          // addAgendamento,
          // agendamentosSnapshot,
          // loadingAgendamentos,
          // deleteAgendamento,
          // errorAgendamentos,
        }
      }
    >
      {children}
    </InspecaoContext.Provider>
  );
};
