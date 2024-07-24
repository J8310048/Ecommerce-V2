import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      FirstName: "",
      Email: "",
      Comment: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <div >
        <form onSubmit={handleSubmit(onSubmit)} className="phonemax: flex flex-col mt-10 relative m-0 justify-center mx-20">
          <input 
            {...register("FirstName", { 
              required: "First Name is required", 
              maxLength: { value: 50, message: "First Name cannot exceed 50 characters" }
            })} 
            placeholder="Firstname" 
            className="phonemin: border mb-4  pl-2"
          />
          {errors.FirstName && <p className="text-red-500 ml-5">{errors.FirstName.message}</p>}
          
          <input 
            {...register("Email", { 
              required: "Must fill out Email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address"
              }
            })} 
            placeholder="Email" 
            className="phonemin: border mb-4  pl-2"
          />
          {errors.Email && <p className="text-red-500 ml-5">{errors.Email.message}</p>}
          
          <textarea 
            {...register("Comment", { 
              maxLength: { value: 500, message: "Comment cannot exceed 500 characters" }
            })} 
            placeholder="Comment" 
            className="phonemin: border mb-4  pl-2"
            rows="10"
          />
          {errors.Comment && <p className="text-red-500 ml-5">{errors.Comment.message}</p>}
          
          <input 
            type="submit" 
            className="phonemax: border rounded-full text-center bg-white text-black mx-10 p-1.5  tabletmax: "
          />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
