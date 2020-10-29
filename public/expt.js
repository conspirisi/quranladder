///
// import { myArray } from "./myArray.js";
// console.log(myArray);

// myArray = ["1", "5", "2", "6", "7", "3", "5"];
// console.log(myArray);

sortedArray = ayaLengthArray.filter((value) => {
  if (value < 15) {
    return value;
  }
});
console.log(sortedArray);

//

// let AyaLengthInput = document.querySelector("#AyaLength");

//console.log(AyaLengthInput.innerText.value);
//

fetch("quran_combined.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    // console.log(obj);
    findAya(obj);
  })
  .catch(function (error) {
    console.error("Something went wrong retrieving the quran");
    console.error(console.error);
  });

findAya = (obj, inputAyaLength) => {
  console.log(Array.isArray(obj.AyaLength));

  let quranIndex = 10;
  // console.log(obj[quranIndex].AyaText);
  //

  console.log(ayaLengthArray[2]);
  // let AyaLength=
  //
  let AyaText = obj[quranIndex].AyaText;
  let arabicElement = document.querySelector("body > div > div.area.arabic.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > div");
  arabicElement.innerText = AyaText;
  //
  let aliElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans1.m-4");
  aliElement.innerText = obj[quranIndex]["Yusuf Ali"];
  //
  let pickthallElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans2.m-4");
  pickthallElement.innerText = obj[quranIndex]["Pickthall"];

  let ArberryElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans3.m-4");
  ArberryElement.innerText = obj[quranIndex]["Arberry"];

  let AyaLengthInput = document.getElementById("AyaLength");
  AyaLengthInput.innerText = "hello";
  // console.log(AyaLengthInput.innerText + "my val");

  // this is Yusuf ali text
  // body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans1.m-4

  filter(obj);

  obj.forEach((item, index) => {
    // console.log(item.AyaText.length);
    // obj[index].AyaLength = item.AyaText.length;
    // console.log(obj);
  });
};

filter = (obj) => {
  const goButton = document.querySelector("body > div > div.area.text-myColors-font.filters.flex.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > form > div.go.m-1.ml-3.text-myColors-button.inline-block");

  goButtonFunc = () => {
    let inputAyaLength = document.querySelector("#AyaLength");
    console.log(inputAyaLength.value);
    findAya(obj, inputAyaLength);
  };
  goButton.addEventListener("click", goButtonFunc);
};
