import { createContext } from "react";

interface ContextProps {
  sidemanuOpen: boolean;
}

export const UIContext = createContext({} as ContextProps);
