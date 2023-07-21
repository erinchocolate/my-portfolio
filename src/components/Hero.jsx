import React, { useEffect, useState } from "react";
import axios from "axios";
import { styles } from "../styles";
import { RoomCanvas } from "./canvas";

const Hero = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [count, setCount] = useState("");

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ user: "meiqiao" }),
      });
      const data = await res.json();
      setCount(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      Hero
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Meiqiao</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my digital home
          </p>
          <p className={"text-lg mt-2 text-white-100"}>
            <span className="text-[#915eff] text-xl font-semibold">
              {count}
            </span>{" "}
            visits to my home so far:)
          </p>
        </div>
      </div>
      <RoomCanvas />
    </section>
  );
};

export default Hero;
