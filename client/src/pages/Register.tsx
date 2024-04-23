import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main-container w-full h-full bg-blue-900">
      <h1 className="text-2xl text-white text-center pt-16">Enregistrement</h1>
      <form className="py-8 flex flex-col pt-14 lg:pt-40 ">
        <input
          className="bg-blue-700 text-center py-8 mb-4"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your name"
        ></input>
        <input
          className="bg-blue-700 text-center py-8 mb-4"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Your email"
        ></input>
        <input
          className="bg-blue-700 text-center py-8 mb-4"
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
