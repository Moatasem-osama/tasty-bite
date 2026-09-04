import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-box brand-box">
          <img src={logo} alt="Restaurant Logo" className="footer-logo-img" />
          <p>
            Discover delicious and easy-to-cook recipes from around the world. Fresh ingredients, unforgettable flavors.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Popular Recipes</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Categories */}
        <div className="footer-box">
          <h3>Categories</h3>
          <ul className="footer-links">
            <li><a href="#desserts">Desserts</a></li>
            <li><a href="#mains">Main Dishes</a></li>
            <li><a href="#starters">Appetizers</a></li>
            <li><a href="#drinks">Beverages</a></li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div className="footer-box">
          <h3>Newsletter</h3>
          <p>Subscribe to get our weekly recipes and news.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email..." required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TastyRecipes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;