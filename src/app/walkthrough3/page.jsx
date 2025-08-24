"use client";
import "../sass/walkthrough3.scss";
import { IoIosMusicalNote } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosRadio } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Walkthrough3() {
  const router = useRouter();

  const handleSkip = () => {
    router.push("/featured"); 
  };

  return (
    <div className="walkthrough3-container">
      <div className="headline-and-text-under-background-image">
        <h1>
          Music is the
          <br />
          Universal Language
        </h1>
        <p>
          Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo.
          Vestibulum pellentesque lacinia eleifend.
        </p>
      </div>

      <section className="paths">
        <div className="icon-circle">
          <IoIosRadio className="radio-icon" />
        </div>

        <div className="icon-circle">
          <FaHeart className="heart-icon" />
        </div>

        <div className="icon-circle note-bg">
          <IoIosMusicalNote className="note-icon" />
        </div>
      </section>

      <div className="wrapper">
        <button className="skip-button" onClick={handleSkip}>
          SKIP
        </button>
      </div>
    </div>
  );
}
