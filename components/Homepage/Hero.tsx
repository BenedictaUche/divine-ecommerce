// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import heroImageOne from '@/public/hero-image-1.png';
import heroImageTwo from '@/public/hero-image-1.png';
import heroImageThree from '@/public/hero-image-1.png';




const carouselContent = [
    {
        image: heroImageOne,
        title: 'Title 1',
        description: 'Description 1',
    },
    {
        image: heroImageTwo,
        title: 'Title 2',
        description: 'Description 2',
    },
    {
        image: heroImageThree,
        title: 'Title 3',
        description: 'Description 3',
    },
]

// create a carousel of images

const Hero = () => {
    return (
        <div className=''>
            {/* <Slider dots={true} infinite={true} speed={500} slidesToShow={1}
                slidesToScroll={1}
                >
                {carouselContent.map((item, index) => (
                    <div key={index}>
                        <Image src={item.image} alt={item.title} className='' />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
                </Slider> */}
        </div>
     );
}

export default Hero;
