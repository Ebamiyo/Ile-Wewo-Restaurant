import logoImage from "./restaurant-logo-2.png";

export default function logo() {
  const logo = document.createElement("img");

  logo.src = logoImage;
  logo.setAttribute("id", "logo");

  const header = document.getElementById("home-header");
  const homeNav = document.getElementById("nav-bar");

  header.insertBefore(logo, homeNav);
}
