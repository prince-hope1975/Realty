import React, {
  PropsWithChildren,
  useContext,
  useState,
  useReducer,
  useEffect,
//   DispatchWithoutAction,
} from "react";
import reducer, { initialState } from "./reducer";

const AppContext = React.createContext(
  {} as {
    dispatch: React.Dispatch<{
      type: "SET_FALLBACK";
      payload: "myalgo" | "pera";
    }>;
    state: any;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;
    appState: {
      fallback: null | "myalgo" | "pera";
    };
  }
);
export const AppProvider = ({ children }: PropsWithChildren) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({});
  useEffect(()=>{
    console.log(state)
  },[state])
  return (
    <AppContext.Provider
      value={{
        dispatch,
        state,
        setState,
        appState,
        wallet,
        setWallet
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
