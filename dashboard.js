import { doc, getDoc, db } from "../lib/firebase.js";

document.addEventListener("DOMContentLoaded", async () => {
  const bodyEle = document.getElementById("body");
  const bodyInnerHtml = bodyEle.innerHTML;
  bodyEle.innerHTML = "<h2>Loading....</h2>";

  const accessToken = document.cookie;
  const userId = accessToken.split("uid=")[1];

  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  const userDetails = docSnap.data();

  if (userDetails.role === "admin") {
    bodyEle.innerHTML = bodyInnerHtml;
  } else {
    bodyEle.innerHTML = "<h2>You have no rights to view this page</h2>";
  }
});
