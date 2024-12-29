import React from "react";
import styles from "./footer.module.css";
import {
  FaLinkedin,
  FaFacebookF,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1>For better experience,download the Swiggy app now</h1>
      <div className={styles.image}></div>
      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinkeds}>
            {/* <div className={styles.image}>
              <img src="/images/logo.png" />
            </div> */}
            <h4>Company</h4>
            <Link href={"/"}>
              <p>About Us</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy Corporate</p>
            </Link>
            <Link href={"/"}>
              <p>Careers</p>
            </Link>
            <Link href={"/"}>
              <p>Teams</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy One</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy Instamart</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy Dineout</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy Genie</p>
            </Link>
          </div>
          <div className={styles.footerLinkeded}>
            <h4>Contact Us</h4>
            <Link href={"/"}>
              <p>Help & Support</p>
            </Link>
            <Link href={"/"}>
              <p>Partner With Us</p>
            </Link>
            <Link href={"/"}>
              <p>Ride With Us</p>
            </Link>
          </div>
          <div className={styles.links}>
            <h4>Legal</h4>
            <Link href={"/"}>
              <p>Terms & Condition</p>
            </Link>
            <Link href={"/"}>
              <p>Cookie Policy</p>
            </Link>
            <Link href={"/"}>
              <p>Privacy Policy</p>
            </Link>
            <Link href={"/"}>
              <p>Investor Relation</p>
            </Link>
          </div>
          <div className={styles.available}>
            <h4>Available in:</h4>
            <Link href={"/"}>
              <p>Bangalore</p>
            </Link>
            <Link href={"/"}>
              <p>Gurgaon</p>
            </Link>
            <Link href={"/"}>
              <p>Hyderabad</p>
            </Link>
            <Link href={"/"}>
              <p>Delhi</p>
            </Link>
            <Link href={"/"}>
              <p>Mumbai</p>
            </Link>
            <Link href={"/"}>
              <p>Pune</p>
            </Link>
          </div>
          <div className={styles.lifes}>
            <h4>Life at Swiggy</h4>
            <Link href={"/"}>
              <p>Explore with Swiggy</p>
            </Link>
            <Link href={"/"}>
              <p>Swiggy News</p>
            </Link>
            <Link href={"/"}>
              <p>Snackables</p>
            </Link>
          </div>
          <div className={styles.social}>
            <h4>Social Links</h4>
            <div className={styles.socialMedia}>
              <p>
                <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.bing.com%2F">
                  <FaLinkedin />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/accounts/login/?hl=en">
                  <FaInstagram />
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </p>
              <p>
                <a href="https://in.pinterest.com/">
                  <FaPinterest />
                </a>
              </p>
              <p>
                <a href="https://x.com/?lang=en">
                  <FaXTwitter />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className={styles.footerBelow}>
          <div className={styles.footerCopyright}>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
