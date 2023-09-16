import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';
export const Form = () => {
   
    const schema = yup.object().shape({
        fullName: yup.string().required("Your fullname is required"),
        email: yup.string().email().required("Your email is required"),
        age: yup.number().positive().integer().required(),
        password: yup.string().min(4).max(20).required("Your password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],"password must match").required()
    })

    const {register,handleSubmit, formState:{errors}} = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const handleForm = (data) => {
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(handleForm)}>
            <input type="text" placeholder="Full Name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age" {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confrim password" {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    )
}