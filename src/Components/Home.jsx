import React from 'react'
import '../assets/Styles/home.css'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="overlay">
          <div className="home-content">
            <h1>Online Shoping </h1>

            <div className="app-buttons">
              <a href="#" className="app-btn">
                <img
                  className="im"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                />
              </a>
              <a href="#" className="app-btn">
                <img
                  className="im"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ Extra Content Section */}
      <div className="home-extra">
        <h2>Why Choose Our Store?</h2>
        <p>
          We provide the best online shopping experience with fast delivery, 
          secure payments, and top-quality products.  
        </p>

        <div className="features">
          <div className="feature-card">🚚 Fast Delivery</div>
          <div className="feature-card">💳 Secure Payment</div>
          <div className="feature-card">📞 24/7 Support</div>
        </div>
      </div>
    </>
  )
}

export default Home
