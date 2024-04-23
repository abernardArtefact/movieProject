import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-container w-full h-full bg-blue-900 flex justify-center flex-col items-center">
      <h1 className="text-2xl text-white text-center pt-16 ">Enregistrement</h1>
      <form className="py-8 flex flex-col pt-14 lg:pt-24 lg:w-[500px] items-center ">
        <input
          className="bg-blue-700 text-center py-8  mb-4 lg:w-full rounded px-12"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your name"
        ></input>
        <input
          className="bg-blue-700 text-center py-8  mb-4 lg:w-full rounded px-12"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Your email"
        ></input>
        <input
          className="bg-blue-700 text-center py-8 mb-4  lg:w-full rounded px-12"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Your password"
        ></input>
        <input
          className="bg-blue-700 text-center lg:py-6 py-4 mb-4 w-24 rounded-full lg:w-40 text-white hover:text-blue-900 cursor-pointer mt-4 lg:mt-8 "
          type="submit"
          value="envoyer"
        ></input>
      </form>
    </div>
  );
};

export default Register;
