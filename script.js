







let images = [
    
     "./img/barn.jpg",
    
    
     "./img/bell.jpg",
    
    
    "./img/boat.jpg",

     
    
     "./img/duck.jpg", 
      
    
     "./img/forest.jpg", 
     
    
     "./img/gana.jpg", 
     

     "./img/grassland.jpg",
     
    
     "./img/lake.jpg", 
     
    
     "./img/mala.jpg", 
     
    
     "./img/prayer-wheels.jpg",
     
    
     "./img/river.jpg", 
    
    
     "./img/theravada.jpg", 
     
    
     "./img/tree.jpg", 
     
    
     "./img/wheat.jpg", 
     
    
     "./img/yak.jpg" , 
    
    

];

let currentIndex = 0;

function render() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML=""; 

    for (let i = 0; i < images.length; i++) {
        gallery.innerHTML += `<img src="${images[i]}"class="image_photo" onclick="zoomImg(${i})">`;
        
    }
    
}


function zoomImg(index) {
    let overlayRef = document.getElementById('overlay');
    let imgRef = document.getElementById('zoomedImg');

    currentIndex = index;
    imgRef.src = images[currentIndex];
    overlayRef.classList.remove('d_none');
    
}
function pressImg(direction) {
    currentIndex += direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length -1;
    }
    document.getElementById("zoomedImg").src = images[currentIndex];
}


function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    
}  



function bubblingprotection(event) {
    event.stopPropagation();
}