"use client";
import Image from "next/image";
import { BottomRight, EmptyWishlist, People } from "@/public/images";
import "../styles/home.scss";
import lottie from "lottie-web";
import Link from "next/link";
import { useEffect, useRef } from "react";
import dotGreen from "../public/images/dot_green.json";

export default function Home() {
  let animationRef = useRef(null);
  function loadLottie() {
    lottie.loadAnimation({
      autoplay: true,
      container: animationRef.current,
      loop: true,
      animationData: dotGreen,
    });
  }

  useEffect(() => {
    loadLottie();
  }, []);

  return (
    <div className="base-container">
      <div className="headers">
        <div className="left">
          <a href="" className="btn-header">
            {/* <Image src={EmptyWishlist} alt="logo" width={30} height={30} /> */}
            <p style={{ marginLeft: 8 }}>yuda.</p>
          </a>
        </div>

        <div className="right">
          <Link href="/login" className="btn-header">
            <p>Login</p>
          </Link>
          <Link href="/work" className="btn-header">
            <p>Work</p>
          </Link>
          <a href="" className="btn-header">
            <p>Contact</p>
          </a>
        </div>
      </div>
      <div className="texts">
        <div className="texts-slide">
          <span> Hello,I'm Yuda.</span>
        </div>
        <div className="texts-slide">
          <span> Hello,I'm Yuda.</span>
        </div>
      </div>
      <div className="content">
        <div className="freelance">
          <Image
            src={BottomRight}
            alt="arrow-right"
            width={24}
            height={24}
          ></Image>
          <span>FREELANCE</span>
          <span>MOBILE</span>
          <span>DEVELOPER</span>
          <div style={{ display: "flex" }} className="align-center">
            <div ref={animationRef} style={{ width: 30, height: 30 }}></div>
            <p>Open to work</p>
          </div>
        </div>
        {/* <div className="center-user">
          <Image
            src={People}
            alt="people"
            layout="fill"
            objectFit="cover" // Ensures the image scales to cover the container
            priority={true}
          ></Image>
        </div> */}
        <div className="socmed-wrap">
          <a href="" className="ic">
            IG
          </a>
          <a href="" className="ic">
            Ins
          </a>
          <a href="" className="ic">
            X
          </a>
        </div>
      </div>
    </div>
  );
}
