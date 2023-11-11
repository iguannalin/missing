window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  const container = document.getElementById("container");
  for(let i=0;i<window.innerWidth*window.innerHeight;i+=250) { 
    if (Math.random() > 0.5) {
      let img=document.createElement("img");
      img.src="img.png";
      container.appendChild(img);
    } else {
      let p=document.createElement("span");
      p.innerHTML="&nbsp;&nbsp;";
      container.appendChild(p);
    }
  }
  setTimeout(()=>{location.reload()}, 1000);
});