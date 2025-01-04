import React, { useEffect, useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { motion } from "motion/react";
import "./custom.css";
import {
  FaUtensils,
  FaHandsHelping,
  FaUsers,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_s6my60j",
        "template_5qj0soi",
        e.target,
        "aGMiPb0a9ldOeR7mn"
      )
      .then(
        (result) => {
          setStatus("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");
    const images = document.querySelectorAll(".gallery__img");

    images.forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
      });
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const parallax = document.querySelector(".hero-section");
      const scrollPosition = window.pageYOffset;
      parallax.style.backgroundPosition = `center ${scrollPosition * 0.7}px`;
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className="home-page">
      <Navbar expand="lg" fixed="top" className="navbar">
        <Navbar.Brand className="navbar-brand">
          <img
            src={"images/f4l_logo_transparent.png"}
            alt="Food4Lives Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          FCS Innovation Academy Food4Lives Club
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Nav.Link onClick={() => scrollToSection("#hero-section")}>
                Home
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Nav.Link onClick={() => scrollToSection("#about-us-section")}>
                About Us
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Nav.Link
                onClick={() => scrollToSection("#get-involved-section")}
              >
                Get Involved
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Nav.Link onClick={() => scrollToSection("#contact-section")}>
                Contact
              </Nav.Link>
            </motion.div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <motion.section
        id="hero-section"
        className="hero-section"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/hero_img.jpg"
          })`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="row align-items-center text-center text-lg-start">
            <motion.div
              className="col-lg-6 hero-content"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Empowering Change, One Meal at a Time</h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Join us in making a difference in our community through service
                and compassion.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
                onClick={() => scrollToSection("#get-involved-section")}
              >
                <Button variant="primary" size="lg">
                  Get Involved
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="scroll-down-arrow">
          <span className="arrow">&#8595;</span>
        </div>
      </motion.section>

      <motion.section
        id="about-us-section"
        className="about-us-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-6 about-us-text"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                About Us
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Food4Lives Club at FCS Innovation Academy is a subset of the
                Food4Lives Organization. We are a team of passionate
                high-schoolers who come together to make a meaningful impact.
                <br></br>We work towards:
              </motion.p>

              <ul className="about-us-list">
                <li>
                  <span className="list-icon">&#8594;</span>
                  <span className="list-text">Helping those in need</span>
                </li>
                <li>
                  <span className="list-icon">&#8594;</span>
                  <span className="list-text">Fostering community spirit</span>
                </li>
                <li>
                  <span className="list-icon">&#8594;</span>
                  <span className="list-text">
                    Promoting kindness and generosity
                  </span>
                </li>
              </ul>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection("#get-involved-section")}
                >
                  Get Involved
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-lg-6 about-us-image"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={process.env.PUBLIC_URL + "/images/about_us_img.jpg"}
                alt="Food4Lives Impact"
                className="img-fluid"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="parent-organization-section"
        className="parent-organization-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <motion.div
              className="col-12 text-center parent-org-header"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ color: "#FF8C00", marginTop: "20px" }}
              >
                Our Parent Organization - Food4Lives
              </motion.h2>
            </motion.div>
          </div>

          <div className="row justify-content-between align-items-center g-5">
            <motion.div
              className="col-lg-6 col-md-12 parent-org-image"
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <a
                href="https://linktr.ee/food4lives"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={process.env.PUBLIC_URL + "/images/parent_org_img.png"}
                  alt="Food4Lives Impact"
                  className="img-fluid"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.4 },
                  }}
                />
              </a>
            </motion.div>

            <motion.div
              className="col-lg-6 col-md-12 parent-org-content"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="parent-org-boxes">
                <motion.div
                  className="parent-org-box"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#dcdcdc",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <FaUtensils
                      style={{ fontSize: "30px", color: "#FF8C00" }}
                    />
                  </div>
                  <div>
                    <h3>Healthy Meals</h3>
                    <p>
                      We serve freshly prepared meals every day ensuring the
                      people we serve have healthy and delicious food.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="parent-org-box"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#dcdcdc",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <FaHandsHelping
                      style={{ fontSize: "30px", color: "#FF8C00" }}
                    />
                  </div>
                  <div>
                    <h3>Compassion</h3>
                    <p>
                      We believe that everyone is worthy of compassion, and it's
                      the driving force behind our service.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="parent-org-box"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#dcdcdc",
                  }}
                >
                  <div style={{ marginRight: "20px" }}>
                    <FaUsers style={{ fontSize: "30px", color: "#FF8C00" }} />
                  </div>
                  <div>
                    <h3>Community</h3>
                    <p>
                      The heart and soul of our organization is our grassroots
                      community of dedicated volunteers and donors.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "#001f3f",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                lineHeight: "1.6",
                marginTop: "20px",
                marginBottom: "7%",
              }}
            >
              Food4Lives is more than just a food provider; we are part of a
              larger network of organizations working together to eliminate
              hunger and poverty. We leverage innovation and partnerships to
              ensure lasting change for the communities we serve.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="get-involved-section"
        className="get-involved-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-4"
          >
            Get Involved
          </motion.h2>

          <div className="get-involved-box">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              Join us for our weekly Saturday service at{" "}
              <a
                href="https://www.google.com/maps?q=35+Peachtree+St+NW,+Atlanta+GA+30303"
                target="_blank"
                rel="noopener noreferrer"
              >
                Woodruff Park
              </a>{" "}
              in downtown Atlanta. Help us provide meals to those in need and be
              part of our mission to foster community and kindness.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-center mt-4"
            >
              Ready to volunteer? Sign up today using our{" "}
              <a
                href="https://www.signupgenius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                SignUpGenius
              </a>
            </motion.p>
          </div>

          <motion.div
            id="gallery-section"
            className="gallery-section mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="container">
              <div className="gallery">
                <figure className="gallery__item gallery__item--1">
                  <img
                    src="images/gallery_1.jpg"
                    alt="Gallery image 1"
                    className="gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--2">
                  <img
                    src="images/gallery_4.jpg"
                    alt="Gallery image 2"
                    className="gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--3">
                  <img
                    src="images/gallery_2.jpg"
                    alt="Gallery image 3"
                    className="gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--4">
                  <img
                    src="images/gallery_5.jpg"
                    alt="Gallery image 4"
                    className="gallery__img"
                  />
                </figure>
                <figure className="gallery__item gallery__item--5">
                  <img
                    src="images/gallery_6.jpg"
                    alt="Gallery image 5"
                    className="gallery__img"
                  />
                </figure>
              </div>
            </div>

            <div id="modal" className="modal">
              <span id="close-modal" className="close">
                &times;
              </span>
              <img
                id="modal-image"
                className="modal-content"
                alt="Enlarged view"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="contact-section"
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-text">
              <h2 className="contact-heading text-center">Contact Us</h2>
              <p className="contact-subheading text-center">
                Have questions or want to get in touch? We'd love to hear from
                you!
              </p>
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label htmlFor="name" className="form-label" />
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email" className="form-label" />
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="message" className="form-label" />
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="submit-button-container">
                  <Button
                    type="submit"
                    variant="primary"
                    className="submit-btn"
                  >
                    Submit
                  </Button>
                </div>
              </form>
              {status && <p className="status-message">{status}</p>}
            </div>
          </div>
        </div>
      </motion.section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Food4Lives</h3>
              <p>
                Your community club dedicated to making a difference through
                kindness and service.
              </p>
            </div>
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-nav">
                <li>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <a
                      href="#"
                      onClick={() => scrollToSection("#hero-section")}
                    >
                      Home
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <a
                      href="#about-us-section"
                      onClick={() => scrollToSection("#about-us-section")}
                    >
                      About Us
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <a
                      href="#get-involved-section"
                      onClick={() => scrollToSection("#get-involved-section")}
                    >
                      Get Involved
                    </a>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <a
                      href="#contact-section"
                      onClick={() => scrollToSection("#contact-section")}
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <a
                href="https://www.instagram.com/food4livesatl/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
