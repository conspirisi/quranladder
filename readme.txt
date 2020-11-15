@import url("https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap");

  .arabic {
    word-spacing: 0.225em;
  }



fontFamily: {
        myFont: ["Crimson Text", "serif"],
      },



boxShadow: {
        // md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        myShadow: "10px 10px 4px rgba(0, 0, 0, 0.25)",
        // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        // 10px 10px 4px rgba(0, 0, 0, 0.25)
      },


          bkg: "#027D78",
          panel: "#229A95",
          font: "#F0EA87",
          button: "#FFC555",


      <div class="area arabic md:col-span-3 bg-myColors-panel rounded-lg shadow-lg">
        <div dir="rtl" lang="ar" class="text-3xl p-4 md:text-4xl arabic text-myColors-font"></div>
      </div>