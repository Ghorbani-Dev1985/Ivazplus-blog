import { useForm } from "react-hook-form";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
      } = useForm();
      const LoginHandler = () => {
        
      }
    return ( 
      <>
        <h2 className="text-xl mb-3"> ورود به حساب کاربری</h2>
                  <form onSubmit={handleSubmit(LoginHandler)} className="w-full max-w-sm space-y-5 mb-4">

                  </form>
      </>
     );
}
 
export default Login;