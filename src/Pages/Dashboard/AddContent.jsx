import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addContentData from "../../redux/thunk/contents/addContentData";

const AddContent = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const content = {
      model: data.title,
      brand: data.brand,
      status: data.status === "true" ? true : false,
      price: data.price,
      learningOutcome: [
        data.learningOutcome1,
        data.learningOutcome2,
        data.learningOutcome3,
        data.learningOutcome4,
        data.learningOutcome5,
      ],
      spec: [],
    };
    console.log(content);
    dispatch(addContentData(content));
  };

  return (
    <div className='flex justify-center items-center h-full pl-16 pt-16'>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input type='text' id='title' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='model'>
            Model
          </label>
          <input type='text' id='model' {...register("model")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select name='brand' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Image
          </label>
          <input type='text' name='price' id='price' {...register("price")} />
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome1'>
            Learning Outcome 1
          </label>
          <input
            type='text'
            name='learningOutcome1'
            id='learningOutcome1'
            {...register("learningOutcome1")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome2'>
            Learning Outcome 2
          </label>
          <input
            type='text'
            name='learningOutcome2'
            id='learningOutcome2'
            {...register("learningOutcome2")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome3'>
            Learning Outcome 3
          </label>
          <input
            type='text'
            name='learningOutcome3'
            id='learningOutcome3'
            {...register("learningOutcome3")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome4'>
            Learning Outcome 4
          </label>
          <input
            type='text'
            name='learningOutcome4'
            id='learningOutcome4'
            {...register("learningOutcome4")}
          />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome5'>
            Learning Outcome 5
          </label>
          <input
            type='text'
            name='learningOutcome5'
            id='learningOutcome5'
            {...register("learningOutcome5")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContent;