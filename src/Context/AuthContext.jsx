import Http from "@/Services/HttpService";
import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext()

const AuthContextDispatcher = createContext();

const InitialState = {
  user: null,
  loading: false,
  error: null
}

const reducer = (state , action) => {
    
  switch (action.type) {
    case "login":{
        Http.post('/user/signin' , action.payload)
        .then(({data}) => {
         toast.success("ورود شما با موفقیت انجام شد")
        })
        .catch((err) => toast.error(`${err?.response?.data?.message}`))
    }  
        break;
    case "register" : {

    }
    default: return {...state}
  }
}

const asyncActionHandlers = {
    SLEEP: ({ dispatch }) => async (action) => {
      dispatch({ type: 'START_LOGIN' });
      await new Promise(r => setTimeout(r, action.ms));
      dispatch({ type: 'END_LOGIN' });
    },
  };


const AuthProvider = ({children}) => {
    const [user , dispatch] = useReducerAsync(reducer , InitialState , asyncActionHandlers);

    return (
        <AuthContext.Provider value={user}>
           <AuthContextDispatcher.Provider value={dispatch}>
              {children}
           </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);