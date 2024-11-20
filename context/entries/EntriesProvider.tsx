import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Crear componente de Navbar",
      status: "pending",
      createdAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      description: "En-Progreso Crear componente de Sidebar",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Finalizada - Crear componente de Button",
      status: "finished",
      createdAt: Date.now() - 1000000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createdAt: Date.now(),
    };
    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };
  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Entry-Updated", payload: entry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
