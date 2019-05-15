import React from 'react';
import Coverflow from 'react-coverflow';

const PlayGround = () => {
    return (
  <Coverflow 
     
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <img src="/img/websites/web-axabc.jpg" alt='AXA Business Center' data-action="http://axabc.ca"/>
    <img src="/img/websites/web-synergy.jpg" alt='Synergy accounting' data-action="http://synergytax.com"/>
    <img src="/img/websites/web-axasystems.jpg" alt='AXA Systems' data-action="http://axasystems.ca"/>
    <img src="/img/websites/web-rbs.jpg" alt='Royal blue Solutions' data-action="http://rbsol.ca"/>
    <img src="/img/websites/west-pacific.jpg" alt='West Pacific Construction' data-action="http://westpacificconstruction.com"/>
    <img src="/img/websites/web-shiranibeauty.jpg" alt='Shirani Beauty' data-action="http://shiranibeauty.com"/>
    <img src="/img/websites/web-subseatechdiving.jpg" alt='Subseatech Diving' data-action="http://www.subseatechdiving.com/"/>
    <img src="/img/websites/web-axasandblasting.jpg" alt='AXA Sandblasting' data-action="http://axasandblasting.ca/"/>
    
  </Coverflow>
   )
}
export default PlayGround;