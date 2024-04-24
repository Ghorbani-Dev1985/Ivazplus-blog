import { useAuthActions } from "@/Context/AuthContext";
import useTitle from "@/Hooks/useTitle";
import Http from "@/Services/HttpService";
import TextField from "@/UI/TextField";
import { Button, Divider } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

const Login = () => {
  const title = useTitle(" ورود به حساب کاربری | ایوازپلاس")
  const router = useRouter();
  const dispatch = useAuthActions();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const LoginHandler = (data) => {
    dispatch({type: "login" , payload: data})
   // router.push('/')
  };
  return (
    <>
      <h2 className="text-xl mb-3"> ورود به حساب کاربری</h2>
      <form
        onSubmit={handleSubmit(LoginHandler)}
        className="w-full max-w-sm space-y-5 mb-4"
      >
        <TextField
          name="email"
          placeholder="لطفا ایمیل خود را وارد نمایید"
          label=" ایمیل "
          required
          register={register}
          validationSchema={{
            required: "لطفا ایمیل خود را وارد نمایید",
            minLength: {
              value: 6,
              message: "حداقل ۶ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 30,
              message: "حداکثر ۳۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g,
              message: "لطفا ایمیل صحیح وارد نمایید",
            },
          }}
          errors={errors}
        />
        <TextField
          name="password"
          type={isShowPassword ? "text" : "password"}
          placeholder="لطفا کلمه عبور خود را وارد نمایید"
          label="   کلمه عبور "
          required
          register={register}
          validationSchema={{
            required: "لطفا عبور خود را وارد نمایید",
            minLength: {
              value: 8,
              message: "حداقل ۸ کاراکتر وارد نمایید  ",
            },
            maxLength: {
              value: 20,
              message: "حداکثر ۲۰ کاراکتر وارد نمایید",
            },
            pattern: {
              value:
                /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
              message:
                "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
            },
          }}
          errors={errors}
        >
          <button type="button"
            className="absolute h-full left-2 top-0"
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            {isShowPassword ? (
              <HiOutlineEyeOff className="size-5 stroke-slate-600" />
            ) : (
              <HiOutlineEye className="size-5 stroke-slate-600" />
            )}
          </button>
        </TextField>
        <Button
          type="submit"
          color="primary"
          className="w-full hover:bg-secondary hover:opacity-100 py-6"
        >
          ورود به حساب کاربری
        </Button>
        <Link href="/rule" className="flex text-sm tracking-tight my-3 hover:text-primary">
        با ورود و یا ثبت نام، شما شرایط و قوانین حریم خصوصی آن
                                را می‌پذیرید
        </Link>
      </form>
      <Divider />
      <div className="flex-center gap-1 p-5 text-primary text-sm">
        <span>اگر قبلا ثبت نام نکرده اید از اینجا وارد شوید </span>
        <Link href="/register" className="font-extrabold">
          ثبت نام
        </Link>
      </div>
    </>
  );
};

export default Login;
