import { NavLink } from "react-router-dom";
import Socials from "./Social-Icons";
import { useForm } from "react-hook-form";

function Footer() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      Email: ""
    }
  });
  const onSubmit = data => console.log(data) 

  return (
    <div className="bg-black py-10 text-white">


{/* below is my newsletter form */}
<form 
          onSubmit={handleSubmit(onSubmit)} 
          className="flex flex-col phonemin:w-full max-w-lg text-center m-auto items-center"
        >
        <h2 className="phonemin:text-5xl mb-5 font-Sports">Join our Newsletter!</h2>
          <input 
            {...register("Email", { 
              required: "Must fill out Email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address"
              }
            })} 
            placeholder="Email" 
            className="border mb-4 p-2 rounded text-black"
          />
          {errors.Email && <p className="text-red-500">{errors.Email.message}</p>}
          
          <input 
            type="submit" 
            value="Submit"
            className=" rounded-full text-center bg-red-600 text-white p-2 cursor-pointer phonemin:w-2/5 tabletmin:"
          />
        </form>


{/* below is are my footer links */}
      <footer className="phonemin:grid grid-flow-row gap-20 tabletmin:grid-flow-col items-center text-center justify-center mt-10 ">
        <div>
          <h1 className="phonemin:text-2xl font-bold tabletmin:text-xl mb-4 font-Sports">Site Links</h1>
            <ul className="flex flex-col text-center space-y-2 font-thin">
           <li>
             <NavLink to="/" className="hover:underline">Home</NavLink>
          </li>
            <li>
              <NavLink to="/movies" className="hover:underline">Movies</NavLink>
            </li>
           <li>
              <NavLink to="/contact" className="hover:underline">Contact Us</NavLink>
            </li>
           <li>
              <a className="hover:underline" href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>


{/* below is are my footer links */}
        <div>
          <h1 className="phonemin:text-2xl font-bold tabletmin:text-xl mb-4 font-Sports">Website Services</h1>
            <ul className="flex flex-col text-center space-y-2 font-thin">
           <li>
           <a className="hover:underline" href="/">FAQ</a>
          </li>
            <li>
            <a className="hover:underline" href="/">Terms of Use</a>
            </li>
           <li>
           <a className="hover:underline" href="/">Legal Notices</a>
            </li>
           <li>
              <a className="hover:underline" href="/">Cookie Preferences</a>
            </li>
          </ul>
        </div>


{/* below is are my footer links */}
        <div>
          <h1 className="phonemin:text-2xl font-bold tabletmin:text-xl mb-4 font-Sports">Purchase Rules</h1>
            <ul className="flex flex-col text-center space-y-2 font-thin">
           <li>
           <a className="hover:underline" href="/">Bidding</a>
          </li>
            <li>
            <a className="hover:underline" href="/">Shipping FAQ</a>
            </li>
           <li>
           <a className="hover:underline" href="/">Purchase Policy</a>
            </li>
           <li>
              <a className="hover:underline" href="/">Return Policy</a>
            </li>
          </ul>
        </div>


        
      


      </footer>
      <div>
        <p className="text-center
font-thin phonemin:px-16 mt-10 tabletmin:px-20 laptop:px-60 desktop:px-96">© 2024 Laser Focus Disc & Co. All footage used is the property of the respective studios: Pixar Animation Studios, Walt Disney Pictures, Paramount Pictures, Columbia Pictures, Metro-Goldwyn-Mayer (MGM), Universal Pictures, Warner Bros., and 20th Century Fox. All rights reserved.</p>

        </div>
        {/* below is are my social media links */}
      <div className="flex flex-row items-center justify-center">
          <Socials />
        </div>

        
      
    </div>
  );
}

export default Footer;
