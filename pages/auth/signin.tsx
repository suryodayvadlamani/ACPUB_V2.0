import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../lib/validators/LoginSchema";
import { BsGoogle } from "react-icons/bs";
import { useForm } from "react-hook-form";

const providers = [
  {
    name: "google",
    Icon: BsGoogle,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const { handleSubmit, register, formState } = useForm<form_data>({
    resolver: yupResolver(loginSchema),
  });

  if (status === "loading") return <h1>Checking Authentication...</h1>;
  if (session) {
    console.log(session);
    push("/");
  }
  const handleOAuthSignIn = (provider) => () => signIn(provider);

  type form_data = {
    email: string;
  };

  const { errors } = formState;

  const submitForm = async (data: form_data, e: any) => {
    e.preventDefault();
    try {
      signIn("email", { email, redirect: false });
    } catch (err) {}
  };
  const mystyle = {
    background: "linear-gradient(to top left,#071421 30%,#cc4e01)",
  };
  return (
    <div>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="light.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Edu Data Hub
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4 first-line:text-skin-header-base">
                          Please login to your account
                        </p>
                        <div className="mb-4">
                          <>
                            <input
                              type="text"
                              id="email"
                              {...register("email")}
                              autoComplete="off"
                              required
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Email"
                            />
                            {errors.email && errors.email?.message}
                          </>
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5   text-white
                           font-medium text-sm leading-tight uppercase rounded shadow-md
                            hover:bg-blue-700 hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition
                            duration-150 ease-in-out w-full mb-3"
                            type="button"
                            style={mystyle}
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={(e) => handleSubmit(submitForm)(e)}
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
                    <div className="text-skin-inverted px-4 py-6 md:p-12 md:mx-6">
                      <ul>
                        {providers.map(({ name, Icon }) => (
                          <li key={name}>
                            <div
                              key={name}
                              className="flex items-center justify-between gap-6 cursor-pointer w-fit bg-blue-400 rounded text-white"
                              onClick={handleOAuthSignIn(name)}
                            >
                              <Icon />
                              <label>Sign in with {name}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
