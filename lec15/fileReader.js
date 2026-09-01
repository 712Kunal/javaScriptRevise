let image = document.getElementById("image");
let imgfile = document.getElementById("imgfile");
let para = document.getElementById("para");

let reader = new FileReader();
imgfile.addEventListener("change", (e) => {
  console.log(e.target.files[0]);
  let file = e.target.files[0];
  // reader.readAsText(file); FOR TEXT FILE
  reader.readAsDataURL(file); // FOR IMAGE FILE
  reader.onload = (ele) => {
    console.log(ele.target.result);
    image.src = ele.target.result;
    // para.innerText = ele.target.result;
  };
});
