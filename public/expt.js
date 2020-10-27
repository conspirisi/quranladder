///
// import { myArray } from "./myArray.js";
// console.log(myArray);

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

findAya = (obj) => {
  console.log(Array.isArray(obj.AyaLength));

  let quranIndex = 10;
  // console.log(obj[quranIndex].AyaText);
  //

  obj.forEach((item, index) => {
    let AyaLengthArray = [];
    AyaLengthArray[index] = item.AyaLength;
    console.log(Array.isArray(AyaLengthArray));
    // obj[index].AyaLength = item.AyaText.length;
    // console.log(obj);
  });

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

  // this is Yusuf ali text
  // body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans1.m-4

  obj.forEach((item, index) => {
    // console.log(item.AyaText.length);
    // obj[index].AyaLength = item.AyaText.length;
    // console.log(obj);
  });
};
