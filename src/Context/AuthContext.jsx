import Http from "@/Services/HttpService";
import Router from "next/router";
import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext()

const AuthContextDispatcher = createContext();

const InitialState = {
  user: null,
  loading: true,
  error: null
}

const reducer = (state , action) => {
    
  switch (action.type) {
    case "PENDING":
       return { user: null , error: false , loading: true}
    case "SUCCESS":
        return { user: action.payload , error : null , loading: false}  
    case "REJECT":
        return {user: null , error: action.error , loading: false }
    default: return {...state}
  }
}

const asyncActionHandlers = {
    
    LOGIN: ({ dispatch }) => (action) => {
        dispatch({type: 'PENDING'})
        Http.post('/user/signin' , action.payload)
        .then(({data}) => {
         toast.success("ورود شما با موفقیت انجام شد")
         Router.push('/')
         dispatch({type: 'SUCCESS' , payload: data})
        })
        .catch((err) => {
            dispatch({type: 'REJECT' , error : err?.response?.data?.message})
            toast.error(`${err?.response?.data?.message}`)
        })
    },
    GET_USER_INFOS : ({dispatch}) => (action) => {
            dispatch({type: 'PENDING'})
            Http.get('/user/load')
            .then(({data}) => {
             dispatch({type: 'SUCCESS' , payload: data})
            })
            .catch((err) => {
                dispatch({type: 'REJECT' , error : err?.response?.data?.message})
            })
    },
    REGISTER: ({dispatch}) => (action) =>{
        dispatch({type: 'PENDING'})
        Http.post('/user/signup' , action.payload)
        .then(({data}) => {
         toast.success("ثبت نام شما با موفقیت انجام شد")
         Router.push('/')
         dispatch({type: 'SUCCESS' , payload: data})
        })
        .catch((err) => {
            dispatch({type: 'REJECT' , error : err?.response?.data?.message})
            toast.error(`${err?.response?.data?.message}`)
        })
    },
    LOGOUT: ({dispatch}) => (action) =>{
        dispatch({type: 'PENDING'})
        Http.get('/user/logout')
        .then(({data}) => {
         toast.success("خروج با موفقیت انجام شد")
         window.location.href = '/';
         dispatch({type: 'SUCCESS'})
        })
        .catch((err) => {
            dispatch({type: 'REJECT' , error : err?.response?.data?.message})
            toast.error(`${err?.response?.data?.message}`)
        })
    },
  };


const AuthProvider = ({children}) => {
    const [user , dispatch] = useReducerAsync(reducer , InitialState , asyncActionHandlers);
    useEffect(() => {
   dispatch({type: "GET_USER_INFOS"})
    },[])
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