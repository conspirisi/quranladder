///
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
  // obj[0].length = obj[0].AyaText.length;
  console.table(obj);
  // console.log(obj);
  // console.log("find aya executed");

  obj.forEach((item, index) => {
    // console.log(item.AyaText.length);
    // obj[index].AyaLength = item.AyaText.length;
    // console.log(obj);
  });
};
