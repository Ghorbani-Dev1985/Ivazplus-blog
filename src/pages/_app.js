
import { NextUIProvider } from "@nextui-org/react";
import '@/Styles/globals.css'
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/Context/AuthContext";
import { wrapper } from "src/redux/store";

function App({ Component, pageProps }) {
  return (<AuthProvider><NextUIProvider> <Toaster /><Component {...pageProps} /></NextUIProvider></AuthProvider>)
}

export default wrapper.withRedux(App);