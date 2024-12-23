import React from 'react';
import card1background from "../../assets/card1background.jpg";

const Card1: React.FC = () => {
  return (
    <>
    <style>
        {
            `
                .card-container {
                perspective: 1000px;
                }

                .card {
                position: relative;
                width: 20rem; /* Tailwind w-80 */
                height: 20rem; /* Tailwind h-96 */
                transform-style: preserve-3d;
                transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
                }

                .card:hover {
                transform: rotateX(180deg); /* Flip vertically */
                }

                .card-face {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 0.5rem; /* Tailwind rounded-lg */
                backface-visibility: hidden;
                overflow: hidden;
                background-size: cover;
                background-position: center;
                }

                .card-front {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 1.25rem; /* Tailwind text-xl */
                font-weight: bold;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }

                .card-back {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background-color: rgba(45, 55, 72, 0.8); /* Tailwind bg-gray-800 with opacity */
                color: white;
                text-align: center;
                padding: 1.25rem; /* Tailwind p-5 */
                transform: rotateX(180deg);
                }
                .card-back-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                filter: brightness(50%); /* Adjust opacity with filter */
                z-index: 0;
                }
                .card-content {
                z-index: 10;
                }

                .card-title {
                font-size: 1.5rem; /* Tailwind text-2xl */
                font-weight: bold;
                color:white;
                }

                .card-description {
                margin-top: 1rem; /* Tailwind mt-4 */
                font-size: 0.875rem; /* Tailwind text-sm */
                line-height: 1.5;
                color:white
                }
            `
        }
    </style>
      <div className="card-container">
        <div className="card">
          {/* Front Face */}
          <div
            className="card-face card-front"
            style={{ backgroundImage: `url(${card1background})` }}
          >
            <div className="card-text">CHINA</div>
          </div>

          {/* Back Face */}
          <div
            className="card-face card-back"
          >
            <div className="card-back-image" style={{ backgroundImage:`url(${card1background})`, opacity: 0.2 }}></div>
            <div className="card-content">
              <h3 className="card-title">Explore China</h3>
              <p className="card-description">
                China is a beautiful country with a rich history, vibrant culture, and stunning landscapes. From the Great Wall to the bustling city of Shanghai, there is much to discover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;

