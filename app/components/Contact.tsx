import {
  ChevronDownIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const validationObject = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain at least 3 characters." })
    .max(50, { message: "Name must contain at most 50 characters." })
    .refine((value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value ?? ""), {
      message: "Name should contain only alphabets",
    }),
  mobile: z
    .string()
    .length(10, { message: "Mobile must contain 10 digits." })
    // .max(50, { message: "mobile must contain at most 50 characters." })
    .refine((value) => /^[0-9]?[0-9 ]+$/.test(value ?? ""), {
      message: "Mobile should contain only digits.",
    }),
  // .length(10, { message: "Mobile number must be exactly 10 digits." }),
  email: z
    .string()
    .email()
    .min(5, { message: "Email must be at least 5 characters long." }),
  message: z
    .string()
    .min(20, { message: "Message must contain at least 20 characters." })
    .max(1000, { message: "Message must contain at most 1000 characters." }),
});

// User.parse({ username: "Ludwig" });

// extract the inferred type
type User = z.infer<typeof validationObject>;
// { username: string }

interface UserFormProps {
  onSubmit: (data: User) => void;
}

const Contact = ({ onSubmit }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(validationObject),
  });

  const sendEmail = async (data: User) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/send-email",
        data
      );
      if (response.data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      alert(`An error occurred: `);
    }
  };

  return (
    <div id="contact" className="bg-[#02050a] pt-[4rem] md:pt-[2rem] pb-[1rem]">
      <h1 className="heading">
        CONTACT <span className="text-yellow-400">ME</span>
      </h1>
      {/* <div className="w-[80%] mx-auto items-center justify-between text-white text-[30px] font-semibold">
        Get In Tuch
      </div> */}
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between"></div>
      <div className="contact-container">
        <div>
          <div className="flex items-center gap-[3rem] pt-[2rem]">
            <div className="contact-icon-container">
              <MapIcon className="contact-icon" />
            </div>
            <div>
              <h1 className="contact-item-heading">Address</h1>
              <p className="contact-item-text">
                Mehsana, Gujarat, India-384001.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[3rem] pt-[2rem]">
            <div className="contact-icon-container">
              <DevicePhoneMobileIcon className="contact-icon" />
            </div>
            <div>
              <h1 className="contact-item-heading">Phone</h1>
              <p className="contact-item-text text-nowrap">
                +91 8160-890-337 <br /> +91 8487-824-336
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[3rem] pt-[2rem]">
            <div className="contact-icon-container">
              <EnvelopeIcon className="contact-icon" />
            </div>
            <div>
              <h1 className="contact-item-heading">Send Email</h1>
              <p className="contact-item-text">
                dantaniprakash08@gmail.com <br />
                prakashdantani8@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 container font-semibold">
            <form
              method="POST"
              className="w-[80%]"
              action=""
              onSubmit={handleSubmit((data) => {
                sendEmail(data);
                reset();
              })}
            >
              <div className="grid grid-cols-1">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      placeholder="Enter Name"
                      {...register("name")}
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    {errors.name?.message && (
                      <p className="text-red-600">{errors.name?.message}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2 pt-[1rem]">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      {...register("email")}
                      id="email"
                      autoComplete="email"
                      placeholder="Enter Email ID"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email?.message && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2 pt-[1rem]">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="text"
                      {...register("mobile")}
                      id="mobile"
                      autoComplete="tel"
                      placeholder="Enter Phone Number"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.mobile?.message && (
                      <p className="text-red-600">{errors.mobile?.message}</p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2 pt-[1rem]">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-white"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                    {errors.message?.message && (
                      <p className="text-red-600">{errors.message?.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-yellow-400 px-3.5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#55e6a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
