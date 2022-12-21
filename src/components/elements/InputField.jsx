import React from 'react'
import { useForm } from "react-hook-form";

const InputField = ({InputLabel, InputName, Input}) => {
    const { register} = useForm();
  return (
    <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor={InputName}>
            {InputLabel}
          </label>
          <input className="border p-1 rounded" type='text' name={InputName} id={InputName} {...register(Input)}/>
        </div>
  )
}

export default InputField