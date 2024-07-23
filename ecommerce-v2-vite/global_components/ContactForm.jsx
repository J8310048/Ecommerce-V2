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
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
          <input 
            {...register("FirstName", { 
              required: "First Name is required", 
              maxLength: { value: 50, message: "First Name cannot exceed 50 characters" }
            })} 
            placeholder="Firstname" 
            className="phonemin: border mb-4 ml-5 mr-5 pl-2"
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
            className="phonemin: border mb-4 ml-5 mr-5 pl-2"
          />
          {errors.Email && <p className="text-red-500 ml-5">{errors.Email.message}</p>}
          
          <textarea 
            {...register("Comment", { 
              maxLength: { value: 500, message: "Comment cannot exceed 500 characters" }
            })} 
            placeholder="Comment" 
            className="phonemin: border mb-4 ml-5 mr-5 pl-2"
            rows="10"
          />
          {errors.Comment && <p className="text-red-500 ml-5">{errors.Comment.message}</p>}
          
          <input 
            type="submit" 
            className="phonemin: border ml-20 mr-20"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
