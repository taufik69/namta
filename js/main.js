const plainText = document.querySelector("h1");
const inputbox = document.querySelector("input");
const submitbtn = document.querySelector("button");
let inputvalue;
inputbox.addEventListener("change", (e) => {
  inputvalue = e.target.value;
});
submitbtn.addEventListener("click", () => {
  for (var i = 1; i <= 10; i++) {
    //   plainText.innerHTML += namta + "*" + i + "=" + i * namta + "<br/>";
    plainText.innerHTML += `${inputvalue} * ${i} = ${inputvalue * i} </br>`;
  }
});
console.log("input is :", inputvalue);

// let namta = +plainText.dataset.namta;
// console.log(namta);
