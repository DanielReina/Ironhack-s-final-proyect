import { Carousel} from 'react-bootstrap'
import { useState} from 'react'
import './Carousel.css'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className='carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
          id='img1'
            className="d-block w-100"
            src="https://concepto.de/wp-content/uploads/2018/02/artes-plasticas-cuadro-min-e1519328319772.jpg"
            alt="First slide"
            style={{width: 50}}
          />      
        </Carousel.Item>
        <Carousel.Item>
          <img
           id='img2'
            className="d-block w-100"
            src='https://www.consumer.es/wp-content/uploads/2020/01/anillo-amatista-brillantes.jpg'          
            alt="Second slide"
            style={{width: 50}}
          />       
        </Carousel.Item>
        <Carousel.Item>
          <img
           id='img3'
            className="d-block w-100"
            src="https://ep01.epimg.net/elpais/imagenes/2018/05/21/album/1526910442_466493_1528796035_noticia_normal.jpg"
            alt="Third slide"
            style={{width: 50}}
          />      
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  