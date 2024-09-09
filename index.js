const buttons = Array(...document.getElementsByClassName("btn"))
  .filter(
    (elem) =>
      elem.innerHTML != "del" &&
      elem.innerHTML != "=" &&
      elem.innerHTML != "reset"
  )
  .forEach((elem) =>
    elem.addEventListener("click", () => {
      calculaterScreen.value += elem.innerHTML;
    })
  );
const colorThemeLink = document.getElementById("color-theme-link");
const colorThemeToggler = document.getElementById("color-theme-toggle");
const calcBtn = document.getElementsByClassName("calculate-result")[0];
const deleteBtn = document.getElementsByClassName("delete")[0];
const resetBtn = document.getElementsByClassName("reset")[0];
const calculaterScreen = document.getElementById("calc-screen");

resetBtn.addEventListener("click", () => {
  calculaterScreen.value = "";
});

deleteBtn.addEventListener("click", () => {
  calculaterScreen.value = calculaterScreen.value.substr(
    0,
    calculaterScreen.value.length - 1
  );
});

calcBtn.addEventListener("click", () => {
  try {
    calculaterScreen.value = eval(calculaterScreen.value);
  } catch (err) {
    calculaterScreen.value = "syntax error";
  }
});

colorThemeToggler.addEventListener("click", () => {
  if (colorThemeLink.href.endsWith("1.css"))
    colorThemeLink.href = "style-theme2.css";
  else if (colorThemeLink.href.endsWith("2.css"))
    colorThemeLink.href = "style-theme3.css";
  else colorThemeLink.href = "style-theme1.css";
});
// change the color theme without any condition (?:; is a condition)
// Hint :: play around the string itself (href)