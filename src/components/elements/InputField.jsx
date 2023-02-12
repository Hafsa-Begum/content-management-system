import React from 'react'

const InputField = ({InputLabel, InputName}) => {
    
  return (
    <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor={InputName}>
            {InputLabel}
          </label>
          <input
              className='w-full my-4 p-2 rounded-3'
              placeholder='Name'
              value={name || ""}
              name='name'
              type='text'
              onChange={handleInputChange}
          />
    </div>
  )
}

export default InputField