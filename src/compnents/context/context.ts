import { createContext } from "react";

interface NameStructure {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameContext = createContext<NameStructure>({} as NameStructure);

export default NameContext;
