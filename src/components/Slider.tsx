"use client"

import Slider from 'react-infinite-logo-slider'


const SliderComp = () => {

    
    
    return (
        <Slider
            width="200px"
            duration={40}
            pauseOnHover={true}
            blurBorders={true}
            blurBorderColor={'#0A2640'}
            
        >
            <Slider.Slide>
                <img src="/images/logos/logo1.png" alt="any" className='w-32' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo2.png" alt="any2" className='w-32' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo1.png" alt="any" className='w-32' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/images/logos/logo2.png" alt="any2" className='w-32' />
            </Slider.Slide>
            
        </Slider>
    )
}              

export default SliderComp;