import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
 
const Gallery = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <AliceCarousel mouseDragEnabled >
      <img src="/img/websites/web-axabc.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img/websites/web-axasandblasting.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img/websites/web-rbs.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img/websites/web-shiranibeauty.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img/websites/web-subseatechdiving.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
      <img src="/img/websites/west-pacific.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" />
    </AliceCarousel>
  )
}
export default Gallery;