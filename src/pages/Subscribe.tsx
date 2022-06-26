import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import Code from "../assets/Code.png";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1216px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build an entire
            <strong className="text-blue-500"> React application </strong>from
            the scratch
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week, you will master one of the most used technologies
            and with high demand to access the best opportunities on the market.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded w-96">
          <strong className="text-2xl mb-6 block">Sign up for free</strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14 hover:outline hover:outline-1 hover:outline-green-500 focus:outline focus:outline-1 focus:outline-green-500"
              type="text"
              placeholder="Full name"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 hover:outline hover:outline-1 hover:outline-green-500 focus:outline focus:outline-1 focus:outline-green-500"
              type="email"
              placeholder="Your email"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Secure my spot
            </button>
          </form>
        </div>
      </div>
      <img className="mt-10" src={Code} alt="" />
    </div>
  );
}
