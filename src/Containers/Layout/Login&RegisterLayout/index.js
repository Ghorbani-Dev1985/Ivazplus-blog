import Image from "next/image";


const LoginRegisterLayout = ({children}) => {
    return ( 
        <main className="w-full h-screen bg-gradient-to-t from-primary to-secondary">
        <section className="container h-screen flex-center">
          <div className="w-full max-w-2xl flex flex-col items-center bg-white rounded-xl p-5">
          <Image
                  width={103}
                  height={110}
                  alt="ghorbani-dev.ir"
                  src="/images/logo/logo.png"
                  className="object-cover"
                />
               {children}
          </div>
        </section>
      </main>
     );
}
 
export default LoginRegisterLayout;