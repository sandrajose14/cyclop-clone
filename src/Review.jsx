import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Carousel } from 'react-bootstrap';

function Review() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active carousel item index
  const [imagesPerCarouselItem, setImagesPerCarouselItem] = useState(1); // State to manage the number of images per carousel item

  useEffect(() => {
    // Function to update the number of images per carousel item based on screen width
    const updateImagesPerCarouselItem = () => {
      setImagesPerCarouselItem(window.innerWidth < 576 ? 1 : 3); // Show one image per carousel item on small screens, otherwise show three images
    };

    // Call the function once on initial render
    updateImagesPerCarouselItem();

    // Add event listener to update the number of images per carousel item on window resize
    window.addEventListener('resize', updateImagesPerCarouselItem);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateImagesPerCarouselItem);
    };
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const data = [
    {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/740522328_140x140.jpg?v=1692018226', alt: 'Image 1' },
        stars: 5,
        content: [
          <div className='ms-1'>
           <p className='me-5 mt-2'> Heini Siena 328 <br /> Womens Cycling Shorts</p>
           <p className='mt-4 text-muted'>Anjali Ranawade <br />
Heini Siena 328 Wom... <br /> Cycling Shorts <br />
03/09/2024</p>
          </div>,
         
        ],
      },
      {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/P-CS-HG201-9_16032_1_750_750_140x140.jpg?v=1625971449' },
        stars: 5,
        content: [
          <div className='ms-1'>
           <p className='me-5 mt-4'>Cassette was Good</p>
           <p className='mt-5 text-muted'>Rahul Nadig <br />
Shimano Cassette - CS-HG201 (9 Speed) <br />
03/07/2024</p>
          </div>,
         
        ],
      },
      {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/shimano-cn-hg53-9-speed-bicycle-chain_140x140.jpeg?v=1571714384' },
        stars: 5,
        content: [
          <div className='ms-1'>
           <p className='me-5 mt-1'>It's good <br />
Working well <br /> and the quality <br /> is also good</p>
           <p className='mt-1 text-muted'>R.S.
Shimano Tourney CN-HG... <br /> , 6/7/8 Speed Chain <br />
03/05/2024</p>
          </div>,
         
        ],
      },
      {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/uniro-aeroad-pro-track-racing-bike-3_140x140.webp?v=1673535638' },
        stars: 5,
        content: [
          <div className='ms-1'>
           <p className='me-5 mt-1'>Superb bike with an <br /> affordable price
NB: Please note <br /> that I have <br /> changed the</p>
           <p className='mt-1 text-muted'>Kannan Nair <br />
Unirox AeRoad Pro... <br />
03/07/2024</p>
          </div>,
         
        ],
      },
      {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/chainlube500ml_140x140.jpg?v=1612036690' },
        stars: 5,
        content: [
          <div className='ms-1 me-5'>
           <p className='me-5 mt-1'>It is good</p>
           <p className='mt-5 text-muted'>Binoy Augustine <br />
Squirt Chain Lube <br />
03/05/2024</p>
          </div>,
         
        ],
      },
      {
        image: { src: 'https://cdn.shopify.com/s/files/1/0014/4385/6450/products/GM-821-2_140x140.jpg?v=1611692269' },
        stars: 5,
        content: [
          <div className='ms-1'>
           <p className='me-5 mt-1'>It is good</p>
           <p className='mt-5 text-muted'>Binoy Augustine <br />
Squirt Chain Lube <br />
03/05/2024</p>
          </div>,
         
        ],
      }
    // Add more objects with unique image, stars, and content
  ];

  const renderCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < data.length; i += imagesPerCarouselItem) {
      const chunk = data.slice(i, i + imagesPerCarouselItem);
      carouselItems.push(
        <Carousel.Item key={i}>
          <div className="d-flex justify-content-center">
            {chunk.map((item, index) => (
              <div key={index} className="d-flex flex-row align-items-center">
                <img
                  className="d-block"
                  width={'100px'}
                  height={'50px'}
                  src={item.image.src}
                  alt={item.image.alt}
                />
                <div className="text-left ml-3">
                  <div>
                    {[...Array(item.stars)].map((star, idx) => (
                      <span key={idx} style={{ color: '#FFD43B' }}>&#9733;</span>
                    ))}
                  </div>
                  {item.content.map((content, idx) => (
                    <p key={idx}>{content}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      );
    }
    return carouselItems;
  };


  return (
    <>
      <div className='mt-5'>
        <h2 className='fw-bold d-flex text-align-center justify-content-center ' style={{ letterSpacing: '2px' }}>CUSTOMER REVIEWS</h2>
        <div className='d-flex text-align-center justify-content-center mt-3'></div>
        <div className='d-flex text-align-center justify-content-center'>
          <p><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></p>
          <p><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></p>
          <p><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></p>
          <p><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></p>
          <p><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} /></p>
        </div>
        <p style={{ marginTop: '-20px' }} className='d-flex text-align-center justify-content-center'>from 4824 reviews</p>
      </div>
      <Container fluid>
        <Carousel
          activeIndex={activeIndex}
          onSelect={handleSelect}
          interval={null}
          className="mt-3"
          style={{ backgroundColor: 'grey' }}
        >
          {renderCarouselItems()}
        </Carousel>
      </Container>
    </>
  );
}

export default Review;
