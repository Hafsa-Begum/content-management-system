import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import InputField from "../../components/elements/InputField";
import addContentData from "../../redux/thunk/contents/addContentData";
import fetchSingleContent from "../../redux/thunk/contents/fetchSingleContent";

const AddContent = () => {
  const { register, handleSubmit } = useForm();
  const {id} = useParams()
  const content = useSelector((state)=> state.content.content)
  const dispatch = useDispatch();
    

    useEffect(async()=>{
     if(id){
      await dispatch(fetchSingleContent(id))
     }
      console.log('content', id,content)
    },[id,dispatch])

  const submit = (data) => {
    const newContent = {
      title: data.title,
      createdBy: data.author,
      topic: data.topic,
      status: data.status === "true" ? true : false,
      image: data.image,
      learningOutcome: [
        data.learningOutcome1,
        data.learningOutcome2,
        data.learningOutcome3,
      ],
    };
    console.log(newContent);
    // dispatch(addContentData(newContent));
  };

  return (
    <div className='pl-16 pt-1'>
      <h1 className="py-5 text-3xl text-center"> 
      { 
      id? <span>Update </span> : <span>Add </span>
      }
       Content</h1>
      <form
        className='shadow-lg p-10 rounded-md justify-between bg-white w-full'
        onSubmit={handleSubmit(submit)}
      >
        <div className='w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-red-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='text' id='title' {...register(content?.title ? content?.title : "title")} />
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Email Address
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**" />
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='author'>
            Author
          </label>
          <input className="border p-1 rounded" type='text' id='author' {...register("author")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input className="border p-1 rounded" type='text' name='image' id='image' {...register("image")} />
        </div>
        {/* <InputField InputLabel="Image" InputName="image" Input="image"/> */}
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='topic'>
            Topic
          </label>
          <select className="border p-1 rounded" name='topic' id='topic' {...register("topic")}>
            <option value='javascript'>Javascript</option>
            <option value='react'>React</option>
            <option value='next'>Next</option>
            <option value='vue'>Vue</option>
            <option value='nuxt'>Nuxt</option>
            <option value='aws'>AWS</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='learningOutcome1'>
            Learning Outcome 1
          </label>
          <input
            className="border p-1 rounded"

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
            className="border p-1 rounded"
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
            className="border p-1 rounded"
            type='text'
            name='learningOutcome3'
            id='learningOutcome3'
            {...register("learningOutcome3")}
          />
        </div>
        
        <div className='flex justify-between items-center w-full py-5'>
          <button
            className=' px-20 py-2 bg-yellow-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
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