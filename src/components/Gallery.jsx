import React, { useState, useRef } from 'react';
import './Gallery.css';
import cover1 from '../assets/gallery0.webp';
import cover2 from '../assets/gallery1.webp';
import cover3 from '../assets/gallery2.webp';
import cover4 from '../assets/gallery3.webp';
import cover5 from '../assets/gallery4.webp';
import cover6 from '../assets/gallery5.webp';
import cover7 from '../assets/gallery6.webp';
import cover8 from '../assets/gallery7.webp';
import cover9 from '../assets/gallery8.webp';
import cover10 from '../assets/gallery9.webp';
import cover11 from '../assets/gallery10.webp';
import cover12 from '../assets/gallery11.webp';
import cover13 from '../assets/gallery12.webp';
import cover14 from '../assets/gallery13.webp';
import cover15 from '../assets/gallery14.webp';
import cover16 from '../assets/gallery15.webp';

const images = [cover1, cover2, cover3, cover4, cover5, cover6, cover7, cover8, cover9, cover10,cover11,cover12,cover13,cover14,cover15,cover16];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollLeft = () => carouselRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current.scrollBy({ left: 100, behavior: 'smooth' });

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="gallery-wrapper">
      <div className="section-divider">
        <h2 className="section-title">갤러리</h2>
      </div>

      <div className="main-image-wrapper" onClick={() => openModal(images.indexOf(selectedImage))}>
        <img src={selectedImage} alt="selected" className="main-image" />
      </div>

      <div className="carousel-container">
        <button className="arrow left" onClick={scrollLeft}>&lt;</button>
        <div className="thumbnail-carousel" ref={carouselRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb${index + 1}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&gt;</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <button className="nav-btn left" onClick={prevImage}>❮</button>
            <img src={images[currentIndex]} alt="fullscreen" className="modal-image" />
            <button className="nav-btn right" onClick={nextImage}>❯</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
