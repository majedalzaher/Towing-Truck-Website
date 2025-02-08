import React from "react";

export const Image = ({ title, largeImage }) => {
  return (
      <div className="portfolio-item">
        <div className="hover-bg">
          <a href={largeImage} title={title} data-lightbox-gallery="gallery1" target="_blank" rel="noopener noreferrer">
            <img
                src={largeImage}
                className="img-responsive"
                alt={title} // Add alt text for accessibility
            />
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
          </a>
        </div>
      </div>
  );
};
