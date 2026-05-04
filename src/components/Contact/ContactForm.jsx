import { useForm } from "react-hook-form";
import ShiftingButton from "../common/ShiftingButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register("fullName", { required: "Name is required" })}
          type="text"
          placeholder="Full Name"
          className={`w-full bg-[#0E1828] border ${errors.fullName ? "border-red-500" : "border-gray-700"} p-4 rounded-sm focus:outline-none focus:border-brand-orange focus:bg-brand-navy placeholder:text-gray-600`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Email Adress"
          className={`w-full bg-[#0E1828] border ${errors.email ? "border-red-500" : "border-gray-700"} p-4 rounded-sm focus:outline-none focus:border-brand-orange focus:bg-brand-navy placeholder:text-gray-600`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone", { required: "Phone number is required" })}
          type="tel"
          placeholder="Phone No."
          className={`w-full bg-[#0E1828] border ${errors.phone ? "border-red-500" : "border-gray-700"} p-4 rounded-sm focus:outline-none focus:border-brand-orange focus:bg-brand-navy placeholder:text-gray-600`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message", { required: "Message cannot be empty" })}
          rows="5"
          placeholder="Your Message"
          className={`w-full resize-none bg-[#0E1828] border ${errors.message ? "border-red-500" : "border-gray-700"} p-4 rounded-sm focus:outline-none focus:border-brand-orange focus:bg-brand-navy placeholder:text-gray-600`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="w-full">
        <ShiftingButton as="div" children="CONTACT US" className="w-full" />
      </button>
    </form>
  );
};

export default ContactForm;
