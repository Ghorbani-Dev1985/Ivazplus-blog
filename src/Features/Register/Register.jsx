import TextField from "@/UI/TextField";
import { Button, Checkbox, Divider } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
      } = useForm();
      const RegisterHandler = (data) => {
      console.log(data)
      }
    return ( 
          <>
                  <h2 className="text-xl mb-3">عضویت در فروشگاه</h2>
                  <form onSubmit={handleSubmit(RegisterHandler)} className="w-full max-w-sm space-y-5 mb-4">
                  <TextField
            name="FullName"
            placeholder="لطفا نام کامل خود را وارد نمایید"
            label="  نام کامل"
            required
            register={register}
            validationSchema={{
                required: "لطفا نام کامل را وارد نمایید",
              minLength: {
                value: 6,
                message: "حداقل ۶ کاراکتر وارد نمایید  ",
              },
              maxLength: {
                  value: 30,
                  message: "حداکثر ۳۰ کاراکتر وارد نمایید",
              },
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/g,
                message: "لطفا فقط حروف فارسی وارد نمایید",
            },
            }}
            errors={errors}
          />
           <TextField
          name="Email"
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
            name="PhoneNumber"
            type="tel"
            placeholder="لطفا تلفن تماس خود را وارد نمایید"
            label="   تلفن تماس"
            required
            register={register}
            validationSchema={{
                required: "لطفا تلفن تماس خود را وارد نمایید",
              minLength: {
                  value: 11,
                message: "حداقل ۱۱ کاراکتر وارد نمایید  ",
            },
              maxLength: {
                  value: 11,
                message: "حداکثر ۱۱ کاراکتر وارد نمایید",
              },
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                message: "لطفا تلفن تماس را صحیح وارد نمایید",
              },
            }}
            errors={errors}
          />
                   <TextField
            name="Password"
            type="password"
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
                value: /^^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
                message: "کلمه عبور  باید شامل حروف بزرگ و کوچک و عدد و کاراکتر باشد",
            },
        }}
        errors={errors}
          />
        <div>
          <Controller 
           control={control}
           {...register("isAcceptRule" ,{ required: "لطفا قوانین سایت را مطالعه و بپذیرید" })}
           render={({field: {onChange , value}})=> (
          <Checkbox  defaultSelected color="secondary" onChange={onChange} isSelected={value}>
            <div className="flex-center">
            <p>با ثبت نام، تمام </p>
        <Link href="/rule" className="px-1 font-extrabold">
           قوانین و مقررات
        </Link>
        <p>سایت را می پذیرم</p>
            </div>
            </Checkbox>
           )}
           />
           {
          errors.isAcceptRule && <span className="block text-right text-rose-500 text-base">{errors.isAcceptRule.message}</span>
       }
        </div>
                
        
          <div className="w-full flex-center my-8">
            <Button type="submit" color="primary" className="w-full hover:bg-secondary hover:opacity-100">
      عضویت
    </Button>
          </div>
                  </form>
            <Divider />
            <div className="flex-center gap-1 p-5 text-primary">
                <span>قبلا ثبت نام کرده اید؟</span>
               <Link href="/login" className="font-extrabold">
                ورود
               </Link>
            </div>
           </>
     );
}
 
export default Register;