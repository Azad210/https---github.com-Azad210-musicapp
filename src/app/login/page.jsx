"use client"; 

import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { FaSpotify } from "react-icons/fa";
import "../sass/login.scss";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosKey } from "react-icons/io";
import { IoIosFingerPrint } from "react-icons/io";

export default function LoginForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

 
    router.push("/walkthrough");
  };

  return (
    <>
      <h1>Log in</h1>
      <form className="Login-formular" onSubmit={handleSubmit}>
        <div>
          <p className="text-over-input">Username</p>
          <input
            placeholder="Enter your username"
            type="text"
            id="username"
            name="username"
            required
          />
          <BsPersonCircle />
        </div>

        <div>
          <p className="text-over-input">Password</p>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            name="password"
            required
          />
          <IoIosKey />
        </div>

        <button className="button-in-login" type="submit">
          Login
        </button>

        <div className="fingerprint">
          <IoIosFingerPrint className="fingerprint-icon" />
        </div>
        <p className="text-under-fingerprint">One-Touch Login</p>
     


   <div className="spotify-login">
  <Link
    href={
     `https://accounts.spotify.com/authorize?`
					+ `response_type=code`
					+ `&client_id=${process.env.CLIENT_ID}`
					+ `&scope=user-read-private%20user-read-email`
					+ `&redirect_uri=${process.env.CALLBACK_URL}`
    }
    className="spotify-button"
  >
    Log in with <FaSpotify />
  </Link>
</div>
 </form>
    </>
  );
}


