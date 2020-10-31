///
// import { myArray } from "./myArray.js";
// console.log(myArray);

// myArray = ["1", "5", "2", "6", "7", "3", "5"];
// console.log(myArray);

// console.log(sortedArray);

//
var filteredRange = [];
var quranObjNew = {};
var ayaIndexPosInFiltered = 0;
//********************************  this code must run before doing anything ******************************
fetch("quran_combined.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (quranObj) {
    // console.log(quranObj);
    quranObjNew = quranObj;

    mainSeq();

    // console.log("when is this happeining?");
  })
  .catch(function (error) {
    console.error("Something went wrong retrieving the quran");
    console.error(console.error);
  });
//********************************  end of quran load ******************************
mainSeq = () => {
  renderPage();
  //quranRange(quranObj);
  goButtonFunc();
  nextButtonFunc();
};

// ****************************** main sequence ******************************
renderPage = (ayaNumber = 0) => {
  //
  console.log("render page kicked off");
  let AyaText = quranObjNew[ayaNumber].AyaText;
  let arabicElement = document.querySelector("body > div > div.area.arabic.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > div");
  arabicElement.innerText = AyaText;
  //
  let aliElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans1.m-4");
  aliElement.innerText = quranObjNew[ayaNumber]["Yusuf Ali"];
  //
  let pickthallElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans2.m-4");
  pickthallElement.innerText = quranObjNew[ayaNumber]["Pickthall"];

  let ArberryElement = document.querySelector("body > div > div.area.translation.md\\:col-span-2.bg-myColors-panel.text-myColors-font.rounded-lg.shadow-lg > div.trans3.m-4");
  ArberryElement.innerText = quranObjNew[ayaNumber]["Arberry"];

  let AyaLengthInput = document.getElementById("AyaLength");
};

quranRange = () => {
  // debugger;
  filteredRange = [];
  var inputAyaLength = document.querySelector("#AyaLength").value;

  filteredArray = ayaLengthArray.filter((value, index) => {
    if (Number(value) < Number(inputAyaLength)) {
      filteredRange.push(index);
    }
  });
};

goButtonFunc = () => {
  createImageBitmap;
  let goButton = document.querySelector("body > div > div.area.text-myColors-font.filters.flex.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > div.go.m-1.ml-3.text-myColors-button.inline-block.cursor-pointer");
  //body > div > div.area.text-myColors-font.filters.flex.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > form > div.go.m-1.ml-3.text-myColors-button.inline-block
  goButtonFunc = () => {
    quranRange();
    renderPage();
  };
  goButton.addEventListener("click", goButtonFunc);
};

nextButtonFunc = () => {
  let nextButton = document.querySelector("body > div > div.area.text-myColors-font.filters.flex.md\\:col-span-3.bg-myColors-panel.rounded-lg.shadow-lg > div:nth-child(4)");
  nextOnClick = () => {
    quranRange();
    ayaIndexPosInFiltered++;
    renderPage(filteredRange[ayaIndexPosInFiltered]);
  };
  nextButton.addEventListener("click", nextOnClick);
};
