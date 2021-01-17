const settingsCog = document.querySelector("#settingsCog")
// const cog = document.querySelector("body > div > div.section.header > div.nav > img");

const settings = document.querySelector("#settings")

// const settings = document.querySelector("body > div > div.section.header > div.settings");

left = () => {
  if (settings.classList.value.includes("settingsAppear")) {
    settings.classList.remove("settingsAppear")
    settings.classList.add("settingsDisappear")
  } else {
    settings.classList.remove("settingsDisappear")
    settings.classList.add("settingsAppear")
  }
}

settingsCog.addEventListener("click", left)
// cog.addEventListener("click", left);

// ********* from old js *************

var filteredRange = []
var quranObjNew = {}
var ayaIndexPosInFiltered = 0
var inputAyaLength = document.querySelector("#maxAyaLengthInput").value
//********************************  this code must run before doing anything ******************************
fetch("quran_combined_02.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (quranObj) {
    // console.log(quranObj);
    quranObjNew = quranObj

    mainSeq()
  })
  .catch(function (error) {
    // console.error("Something went wrong retrieving the quran")
    // console.error(console.error)
  })
//********************************  end of quran load ******************************
mainSeq = () => {
  goButtonFunc()
  nextButtonFunc()
  // goButtonOnClick() // This initial renders the page
  previousButtonFunc()
  renderPage()
}

// ****************************** main sequence ******************************
renderPage = (ayaNumber = 0) => {
  quranRange()
  filterInfoRender(quranObjNew[ayaNumber].AyaText, "#quranText")
  filterInfoRender(quranObjNew[ayaNumber]["Yusuf Ali"], "#transText1")
  filterInfoRender(quranObjNew[ayaNumber]["Pickthall"], "#transText2")
  filterInfoRender(quranObjNew[ayaNumber]["Arberry"], "#transText3")
  filterInfoRender(`No. ${ayaIndexPosInFiltered + 1} of ${filteredRange.length} Ayahs`, "#position")
  filterInfoRender(`Ayah Length ${inputAyaLength}`, "#infoLength")
  filterInfoRender(quranObjNew[ayaNumber]["Sura Name English"], "#ayahInfo")
  console.trace("my first trace")
}

quranRange = () => {
  filteredRange = []
  inputAyaLength = document.querySelector("#maxAyaLengthInput").value
  // debugger;
  filteredArray = ayaLengthArray.filter((value, index) => {
    if (Number(value) < Number(inputAyaLength)) {
      filteredRange.push(index)
    }
  })
}

goButtonFunc = () => {
  let goButton = document.querySelector("#goBtn")

  goButtonOnClick = () => {
    // ayaIndexPosInFiltered = 0
    ayaIndexPosInFiltered = parseInt(document.querySelector("#AyaPosInFiltered").value) - 1
    // quranRange()
    renderPage(filteredRange[ayaIndexPosInFiltered])
  }
  goButton.addEventListener("click", goButtonOnClick)
}

// ****************************** button in the filter sequence ******************************

nextButtonFunc = () => {
  let nextButton = document.querySelector("#nextBtn")

  nextOnClick = () => {
    // quranRange()
    ayaIndexPosInFiltered++
    if (ayaIndexPosInFiltered >= filteredRange.length) {
      ayaPosFunc("You've reached the end")
      return
    }

    renderPage(filteredRange[ayaIndexPosInFiltered])
  }
  nextButton.addEventListener("click", nextOnClick)
}

previousButtonFunc = () => {
  let previousButton = document.querySelector("#prevBtn")
  previousOnClick = () => {
    if (ayaIndexPosInFiltered <= 0) {
      ayaPosFunc("You've reached the end")
      ayaIndexPosInFiltered = 1
      return
    }

    // quranRange()
    ayaIndexPosInFiltered--

    if (ayaIndexPosInFiltered >= filteredRange.length) {
      ayaPosFunc("You've reached the end")
      return
    }

    renderPage(filteredRange[ayaIndexPosInFiltered])
  }
  previousButton.addEventListener("click", previousOnClick)
}

filterInfoRender = (textToDisplay, Element) => {
  let dataElem = document.querySelector(Element)
  dataElem.innerText = textToDisplay
}
