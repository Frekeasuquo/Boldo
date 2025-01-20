"use client"

import Slider from 'react-infinite-logo-slider'


const SliderComp = () => {

    
    
    return (
        <Slider
            width="240px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={'#0A2640'}
        >
            <Slider.Slide>
                <img src="/images/logos/logo1.png" alt="Logo 1" className="w-24 md:w-32" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo2.png" alt="Logo 2" className="w-24 md:w-32" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo1.png" alt="Logo 3" className="w-24 md:w-32" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo2.png" alt="Logo 4" className="w-24 md:w-32 " />
            </Slider.Slide>
            
        </Slider>
    )
}              

export default SliderComp;