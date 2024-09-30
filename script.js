
  const map = document.querySelector('.map img');

  // Initial scale for the zoom
  let scale = 1;

  // Zoom increment/decrement step
  let scaleFactor = 0.1;

  // Add event listener to the map image
  map.addEventListener('wheel', function(event) {
    // Prevent default scroll behavior of the entire page
    event.preventDefault();

    // Check the direction of mouse scroll to zoom in/out
    if (event.deltaY < 0) {
      // Scroll up: zoom in
      scale += scaleFactor;
    } else {
      // Scroll down: zoom out, but don't go below 1 (original size)
      scale = Math.max(1, scale - scaleFactor);
    }

    // Apply the scale transformation to zoom
    map.style.transform = `scale(${scale})`;
  });
