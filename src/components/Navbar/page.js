"use client";

import styles from "./navbar.module.css";
import {
  IoSearchOutline,
  IoHelpBuoyOutline,
  IoPersonOutline,
  IoCartOutline,
} from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { CgToolbox } from "react-icons/cg";
import Link from "next/link";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const leftSidemenu = () => {
    setIsSidebarOpen(true);
  };

  const hideLeftSideMenu = () => {
    setIsSidebarOpen(false);
  };

  const navItems = [
    { icon: <CgToolbox />, label: "Swiggy Corporate", path: "/corporate" },
    { icon: <IoSearchOutline />, label: "Search", path: "/search" },
    {
      icon: <RiDiscountPercentLine />,
      label: "Offers",
      path: "/offers",
      sub: "New",
    },
    { icon: <IoHelpBuoyOutline />, label: "Help", path: "/help" },
    {
      icon: <IoPersonOutline />,
      label: "Sign-In",
      path: "/#",
      onclick: leftSidemenu,
    },
    { icon: <IoCartOutline />, label: "Cart", path: "/cart" },
  ];

  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [referralError, setReferralError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetForm();
  };

  const resetForm = () => {
    setPhone("");
    setEmail("");
    setReferralCode("");
    setPassword("");
    setPhoneError("");
    setEmailError("");
    setReferralError("");
  };

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]{10}$/;
    setPhoneError(phonePattern.test(value) ? "" : "Invalid phone number");
  };

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailPattern.test(value) ? "" : "Invalid email address");
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    validatePhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isLogin) validateEmail(e.target.value);
  };

  const validateReferralCode = (value) => {
    const referralPattern = /^[a-zA-Z0-9]{6}$/;
    setReferralError(
      referralPattern.test(value) ? "" : "Invalid referral code"
    );
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const closedSideBar = () => {
    setIsSidebarOpen(false);
  };

  const handleReferralCodeChange = (e) => {
    setReferralCode(e.target.value);
    validateReferralCode(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!phone || phoneError) {
      return alert("Enter phone number first");
    }
    resetForm();
    window.location.reload();
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (
      !phone ||
      phoneError ||
      !email ||
      emailError ||
      !password ||
      referralError
    ) {
      return alert("Fill all the fields first");
    }
    resetForm();
    window.location.reload();
  };

  return (
    <>
      <div
        onClick={hideLeftSideMenu}
        className={styles.overlay}
        style={{
          opacity: isSidebarOpen ? 1 : 0,
          visibility: isSidebarOpen ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={styles.sideMenu}
          style={{ right: isSidebarOpen ? "0%" : "-100%" }}
        >
          <div className={styles.container}>
            <div
              className={styles.formContainer}
              style={{ transform: isLogin ? "scale(1)" : "scale(1.05)" }}
            >
              <div className={styles.closeIcon}>
                <RxCross1 onClick={closedSideBar} />
              </div>
              {isLogin ? (
                <div className={styles.form}>
                  <h2>Login</h2>
                  <p>
                    or{" "}
                    <span className={styles.link} onClick={toggleForm}>
                      create an account
                    </span>
                  </p>
                  <input
                    type="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`${styles.input} ${
                      phoneError ? styles.error : ""
                    }`}
                  />

                  {phoneError && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {phoneError}
                    </p>
                  )}
                  <button
                    className={styles.button}
                    // disabled={isLoginButtonDisabled}
                    onClick={handleLogin}
                    disabled={phoneError}
                  >
                    Login
                  </button>
                  <p className={styles.terms}>
                    By clicking on Login, I accept the Terms & Conditions &
                    Privacy Policy
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <h2>Create an Account</h2>
                  <p>
                    or{" "}
                    <span className={styles.link} onClick={toggleForm}>
                      login
                    </span>
                  </p>
                  <input
                    type="phone"
                    placeholder="Phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`${styles.input} ${
                      phoneError ? styles.error : ""
                    }`}
                  />
                  {phoneError && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {phoneError}
                    </p>
                  )}

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`${styles.input} ${
                      emailError ? styles.error : ""
                    }`}
                  />
                  {emailError && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {emailError}
                    </p>
                  )}

                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                  />
                  <span
                    className={styles.togglePassword}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? "Hide" : "Show"} Password
                  </span>

                  <input
                    type="text"
                    placeholder="Referral Code (Optional)"
                    value={referralCode}
                    onChange={handleReferralCodeChange}
                    className={`${styles.input} ${
                      referralError ? styles.error : ""
                    }`}
                  />
                  {referralError && (
                    <p style={{ color: "red", fontSize: "12px" }}>
                      {referralError}
                    </p>
                  )}

                  <button
                    className={styles.button}
                    disabled={phoneError || emailError}
                    onClick={handleCreateAccount}
                    // disabled={isCreateAccountButtonDisabled}
                  >
                    Create Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.onclick ? (
              <Link
                href={item.path}
                className={styles.navLink}
                onClick={leftSidemenu}
              >
                {item.icon}
                {item.label}
              </Link>
            ) : (
              <Link href={item.path} className={styles.navLink}>
                {item.icon}
                {item.label}
                <sub> {item.sub}</sub>
              </Link>
            )}
          </li>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
