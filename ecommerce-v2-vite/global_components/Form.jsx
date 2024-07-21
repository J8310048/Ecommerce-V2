import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="phonemin:flex flex-col justify-center items-center">
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} className="border-solid border-2 border-rich-black"/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} className="border-solid border-2 border-rich-black"/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" className="border-solid border-2 border-rich-black"/>
    </form>
  );
}

export default Form;