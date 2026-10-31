export default function contact() {
  const contentDiv = document.getElementById("content");
  contentDiv.classList.toggle("main-content-div-contact");
  const email = document.createElement("h3");
  email.textContent = "Email:";

  contentDiv.appendChild(email);

  const emailInfo = document.createElement("p");
  emailInfo.textContent = "ilewewo@example.com";
  emailInfo.classList.toggle("email-info");
  contentDiv.appendChild(emailInfo);

  const phone = document.createElement("h3");
  phone.textContent = "Phone:";
  contentDiv.appendChild(phone);

  const phoneInfo = document.createElement("p");
  phoneInfo.textContent = "+234 813 960 9235";
  phoneInfo.classList.toggle("phone-info");
  contentDiv.appendChild(phoneInfo);

  const address = document.createElement("h3");
  address.textContent = "Address:";
  contentDiv.appendChild(address);

  const addressInfo = document.createElement("p");
  addressInfo.textContent = "No. 6, Billings Way.\nOregun, Ikeja Lagos.";
  contentDiv.appendChild(addressInfo);
}
