import { ReactNode, useState } from "react";
import NameContext from "./context";

interface Props {
  children: ReactNode;
}

const NameContextProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContextProvider;
