import homeImage from "./ile-wewo-home.png";

export default function home() {
  const contentDiv = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Ile-Wewo By EBAMS";
  heading.classList.toggle("heading-1");

  contentDiv.appendChild(heading);

  const mainImage = document.createElement("img");

  mainImage.src = homeImage;
  mainImage.classList.add("home-image");

  contentDiv.appendChild(mainImage);
}
