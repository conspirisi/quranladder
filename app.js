// debugger;

const burger = document.querySelector("#burger");
// const cog = document.querySelector("body > div > div.section.header > div.nav > img");

const settings = document.querySelector("#settings");

// const settings = document.querySelector("body > div > div.section.header > div.settings");

left = () => {
  console.log("🚀 ~ file: app.js ~ line 9 ~ left", left);
  if (settings.classList.value.includes("settingsAppear")) {
    settings.classList.remove("settingsAppear");
    settings.classList.add("settingsDisappear");
  } else {
    settings.classList.remove("settingsDisappear");
    settings.classList.add("settingsAppear");
  }
};

burger.addEventListener("click", left);
// cog.addEventListener("click", left);

// ********* from old js *************

var filteredRange = [];
var quranObjNew = {};
var ayaIndexPosInFiltered = 0;
var inputAyaLength = document.querySelector("#maxAyaLengthInput").value;
//********************************  this code must run before doing anything ******************************
fetch("quran_combined.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (quranObj) {
    // console.log(quranObj);
    quranObjNew = quranObj;

    mainSeq();
  })
  .catch(function (error) {
    console.error("Something went wrong retrieving the quran");
    console.error(console.error);
  });
//********************************  end of quran load ******************************
mainSeq = () => {
  goButtonFunc();
  nextButtonFunc();
  goButtonOnClick(); // This initial renders the page
  previousButtonFunc();
};

// ****************************** main sequence ******************************
renderPage = (ayaNumber = 0) => {
  let AyaText = quranObjNew[ayaNumber].AyaText;
  console.log("quranObjNew[ayaNumber]", quranObjNew[ayaNumber]);
  let arabicElement = document.querySelector("#quranText");
  arabicElement.innerText = AyaText;
  //
  let aliElement = document.querySelector("#transText1");
  aliElement.innerText = quranObjNew[ayaNumber]["Yusuf Ali"];
  // //
  let pickthallElement = document.querySelector("#transText2");
  pickthallElement.innerText = quranObjNew[ayaNumber]["Pickthall"];

  let ArberryElement = document.querySelector("#transText3");
  ArberryElement.innerText = quranObjNew[ayaNumber]["Arberry"];

  // ayaPosFunc(`No. ${ayaIndexPosInFiltered + 1} of ${filteredRange.length} Ayahs`);

  filterInfoRender(`No. ${ayaIndexPosInFiltered + 1} of ${filteredRange.length} Ayahs`, "#position");
  filterInfoRender(`Ayah Length ${inputAyaLength}`, "#infoLength");
};

quranRange = () => {
  filteredRange = [];
  inputAyaLength = document.querySelector("#maxAyaLengthInput").value;
  // debugger;
  filteredArray = ayaLengthArray.filter((value, index) => {
    if (Number(value) < Number(inputAyaLength)) {
      filteredRange.push(index);
    }
  });
};

goButtonFunc = () => {
  let goButton = document.querySelector("#goBtn");

  goButtonOnClick = () => {
    ayaIndexPosInFiltered = 0;
    quranRange();
    renderPage(filteredRange[ayaIndexPosInFiltered]);
  };
  goButton.addEventListener("click", goButtonOnClick);
};

// ****************************** button in the filter sequence ******************************

nextButtonFunc = () => {
  let nextButton = document.querySelector("#nextBtn");

  nextOnClick = () => {
    quranRange();
    ayaIndexPosInFiltered++;
    if (ayaIndexPosInFiltered >= filteredRange.length) {
      ayaPosFunc("You've reached the end");
      return;
    }

    renderPage(filteredRange[ayaIndexPosInFiltered]);
  };
  nextButton.addEventListener("click", nextOnClick);
};

previousButtonFunc = () => {
  let previousButton = document.querySelector("#prevBtn");
  previousOnClick = () => {
    quranRange();
    ayaIndexPosInFiltered--;

    if (ayaIndexPosInFiltered >= filteredRange.length) {
      ayaPosFunc("You've reached the end");
      return;
    }

    renderPage(filteredRange[ayaIndexPosInFiltered]);
  };
  previousButton.addEventListener("click", previousOnClick);
};

filterInfoRender = (textToDisplay, Element) => {
  let dataElem = document.querySelector(Element);
  dataElem.innerText = textToDisplay;
};

// ayaPosFunc = (textToDisplay) => {
//   let dataElem = document.querySelector("#position");
//   dataElem.innerText = textToDisplay;
// };

// ayaLengthDisp =(textToDisplay)=>{
//   let dataElem = document.querySelector("#position");
//   dataElem.innerText = textToDisplay;
// }
