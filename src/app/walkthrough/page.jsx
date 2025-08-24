"use client"; // vigtigt for at kunne bruge hooks i Next.js

import "../sass/walkthrough.scss";
import { IoIosMusicalNote } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Walkthrough() {
  const router = useRouter();

  const handleSkip = () => {
    router.push("/walkthrough2"); 
  };

  return (
    <>
      <div className="background-image-in-walkthrough"></div>

      <div className="headline-and-text-under-background-image">
        <h1>No Music No Life</h1>
        <p>
          Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo.
          Vestibulum pellentesque lacinia eleifend.
        </p>
      </div>

      <section className="paths">
        <div className="icon-circle radio-bg">
          <IoIosRadio className="radio-icon" />
        </div>

        <div className="icon-circle">
          <FaHeart className="heart-icon" />
        </div>

        <div className="icon-circle">
          <IoIosMusicalNote className="note-icon" />
        </div>
      </section>

      <div className="wrapper">
        <button className="skip-button" onClick={handleSkip}>
          SKIP
        </button>
      </div>
    </>
  );
}
