import poundedYamImage from "./pounded yam.jpg";

export default function menu() {
  const div = document.getElementById("content");
  div.classList.toggle("main-content-div");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  heading.classList.toggle("swallow-heading");

  div.appendChild(heading);

  const firstInnerDiv = document.createElement("div");
  div.appendChild(firstInnerDiv);
  firstInnerDiv.classList.toggle("first-inner-div");

  const secondInnerDiv = document.createElement("div");
  firstInnerDiv.appendChild(secondInnerDiv);

  const swallowHeading = document.createElement("h2");
  swallowHeading.textContent = "Swallow";

  secondInnerDiv.appendChild(swallowHeading);

  const listBody = document.createElement("ul");
  const eba = document.createElement("li");
  const semo = document.createElement("li");
  const amala = document.createElement("li");
  const poundedYam = document.createElement("li");
  const fufu = document.createElement("li");

  eba.textContent = "Eba";
  semo.textContent = "Semo";
  amala.textContent = "Amala";
  poundedYam.textContent = "Pounded Yam";
  fufu.textContent = "Fufu";

  listBody.appendChild(eba);
  listBody.appendChild(semo);
  listBody.appendChild(poundedYam);
  listBody.appendChild(amala);
  listBody.appendChild(fufu);

  secondInnerDiv.appendChild(listBody);

  const soupHeading = document.createElement("h2");
  soupHeading.textContent = "Soups";
  soupHeading.classList.toggle("soup-heading");

  secondInnerDiv.appendChild(soupHeading);

  const soupList = document.createElement("ul");
  const okro = document.createElement("li");
  const seafoodOkro = document.createElement("li");
  const efoRiro = document.createElement("li");
  const ewedu = document.createElement("li");
  const omiObe = document.createElement("li");
  const ofeNsala = document.createElement("li");
  const edikaikong = document.createElement("li");
  const egusi = document.createElement("li");

  okro.textContent = "Okro";
  seafoodOkro.textContent = "Sea-Food Okro";
  efoRiro.textContent = "Efo-Riro";
  ewedu.textContent = "Ewedu";
  ofeNsala.textContent = "Ofe-Nsala";
  omiObe.textContent = "Omi Obe";
  edikaikong.textContent = "Edikaikong";
  egusi.textContent = "Egusi";

  soupList.appendChild(okro);
  soupList.appendChild(seafoodOkro);
  soupList.appendChild(efoRiro);
  soupList.appendChild(ewedu);
  soupList.appendChild(ofeNsala);
  soupList.appendChild(omiObe);
  soupList.appendChild(edikaikong);
  soupList.appendChild(egusi);

  secondInnerDiv.appendChild(soupList);

  const foodImage = document.createElement("img");
  foodImage.src = poundedYamImage;
  foodImage.classList.toggle("pounded-yam-image");

  firstInnerDiv.appendChild(foodImage);
}
