const myPara = document.getElementById("settings");

/* myPara.classList.add('large') */

/* btnPress=()=>{document.getElementById("btn").innerHTML = "YOU CLICKED ME!";} */

left = () => {
  myPara.classList.remove("rightCls");
  myPara.classList.add("leftCl");
  //   console.log(myPara.classList);
};

right = () => {
  myPara.classList.remove("leftCl");
  myPara.classList.add("rightCl");
  var myList = myPara.classList;
  console.log(`${myList}`);
};

document.getElementById("leftBtn").addEventListener("click", left);
document.getElementById("rightBtn").addEventListener("click", right);
