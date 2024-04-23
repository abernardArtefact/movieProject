import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-container w-full h-full bg-blue-900 flex justify-center flex-col items-center">
      <h1 className="text-2xl text-white text-center pt-16 ">Enregistrement</h1>
      <form className="py-8 flex flex-col pt-14 lg:pt-40 lg:w-[500px] ">
        <input
          className="bg-blue-700 text-center py-8 px-12 mb-4 lg:w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your name"
        ></input>
        <input
          className="bg-blue-700 text-center py-8 px-12 mb-4 lg:w-full"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Your email"
        ></input>
        <input
          className="bg-blue-700 text-center py-8 mb-4 px-12 lg:w-full"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          placeholder="Your password"
        ></input>
      </form>
    </div>
  );
};

export default Register;
