document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelectorAll('.image');
    
    image.forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
  
            const imageContainer = document.createElement('div');
              imageContainer.style.display = 'flex';
              imageContainer.style.flexDirection = 'column';
              imageContainer.style.alignItems = 'center';
  
            const fullImg = document.createElement('img');
            fullImg.src = this.src;
  
            const imageDetails = document.createElement('p');
            imageDetails.textContent = this.dataset.details || 'No details available';
            imageDetails.style.color = 'black';
            imageDetails.style.marginTop = '10px';
  
  
            imageContainer.appendChild(imageDetails);
            imageContainer.appendChild(fullImg);
            lightbox.appendChild(fullImg);
            document.body.appendChild(lightbox);
            
            lightbox.style.display = 'flex';
            
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
 });
});