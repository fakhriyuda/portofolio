"use client";
import { Logo, Google } from "@/public";
import "../../styles/login.scss";
import "../globals.scss";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeOnTerms, setAgreeOnTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="section-login">
      <div className="container">
        <div className="banner-slider"></div>
        <div className="section-form">
          <div className="sf-area">
            <Image src={Logo} alt={Logo}></Image>
            <h2>Hello Again!</h2>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, id
              adipisci autem magnam cum animi beatae perferendis qui!
            </span>
            <div className="form-box">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                className={`show-pass ${showPassword ? "active" : ""}`}
                onClick={togglePasswordVisibility}
              ></div>
            </div>
            <div className="form-box">
              <div className="remember-box">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={agreeOnTerms}
                  onChange={(e) => setAgreeOnTerms(e.target.checked)}
                  style={{ cursor: "pointer", display: "inline" }}
                />
                <label>Remember me</label>
                <a href="" className="recovery">
                  Recovery Password
                </a>
              </div>
            </div>
            <button className="blue-btn" style={{marginTop:30, marginBottom:10}}>Login</button>
            <button className="google-btn">
              <Image src={Google} width={24} height={24} alt={Google}></Image>
              <div style={{display:'inline'}}>
                <span>Sign in with Google</span>
              </div>
            </button>
          </div>
          <div className="sign-up">
            <span>
              Don't have an account? <a href="">Sign Up</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
