 const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("img"),
fileInput = uploadBox.querySelector("input"),
widthInput =  document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
ratioInput = document.querySelector(".ratio input"),
qualityInput = document.querySelector(".quality input"),
downloadBtn = document.querySelector(".download-btn");
/*function and call site for;
/*function and call site for
loadFile - a function that targets first
selected file */
const loadFile = (e) => {
    const file = e.target.files[0];//getting first user selected file
    if(!file) return; //return if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file);//passing selected file url to preview img src
    previewImg.addEventListener("load", () => {//once img is loaded...
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        opImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active");
    })
    /* console.log(file); */
}

widthInput.addEventListener("keyup", () =>{
        //getting height according to aspect ratio
    const height = ratioInput.checked ? widthInput.value / opImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
})

heightInput.addEventListener("keyup", () =>{
        //getting width according to aspect ratio
    const width = ratioInput.checked ? heightInput.value * opImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
})

const resizeAndDownload = () => {
        //create canvas 
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const ctx = canvas.getContext("2d"); 
       
        //if quality checkbox is checked, pass 0.7 to imgQuality else pass 1.0
        //1.0 is 100% quality where 0.7 is 70% of total. you can pass from 0.1 - 1.0
    const imgQuality = qualityInput.checked ? 0.7 : 1.0;
    
        //setting canvas height & width according to the input values
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;
        //drawing user selected image onto the canvas
    ctx.drawImage(previewImg,0,0,canvas.width,canvas.height);
    /* is commented out be cause we don't
    want the canvas to show - since we're downloading
    document.body.appendChild(canva s);*/
        //passing canvas data url as download value of <a>
    a.href = canvas.toDataURL("image/jpeg" , imgQuality);
    a.download = new Date().getTime();//passing current time as download value
    a.click();//clicking <a> element so the file download
}

downloadBtn.addEventListener("click", resizeAndDownload)
fileInput.addEventListener("change",loadFile);
/*when uploadBox is clicked, fileInput is triggerd i.e.
trigger file explorer when upload box is clickd */
uploadBox.addEventListener("click", () => fileInput.click());
