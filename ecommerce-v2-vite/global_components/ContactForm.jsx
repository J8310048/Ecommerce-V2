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
    <section className="p-4 phonemin:p-8 tabletmin:p-12 desktop:p-16">
      <div className="flex justify-center">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="flex flex-col w-full max-w-lg"
        >
          <input 
            {...register("FirstName", { 
              required: "First Name is required", 
              maxLength: { value: 50, message: "First Name cannot exceed 50 characters" }
            })} 
            placeholder="Firstname" 
            className="border mb-4 p-2 rounded"
          />
          {errors.FirstName && <p className="text-red-500">{errors.FirstName.message}</p>}
          
          <input 
            {...register("Email", { 
              required: "Must fill out Email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address"
              }
            })} 
            placeholder="Email" 
            className="border mb-4 p-2 rounded"
          />
          {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
          
          <textarea 
            {...register("Comment", { 
              maxLength: { value: 500, message: "Comment cannot exceed 500 characters" }
            })} 
            placeholder="Comment" 
            className="border mb-4 p-2 rounded"
            rows="4"
          />
          {errors.Comment && <p className="text-red-500">{errors.Comment.message}</p>}
          
          <input 
            type="submit" 
            value="Submit"
            className="rounded-full text-center bg-slate-600 text-white p-2 cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
