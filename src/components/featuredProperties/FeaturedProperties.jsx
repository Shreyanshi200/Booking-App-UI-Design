import "./featuredProperties.css"

function FeaturedProperties() {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" className="fpimg" alt=""/>
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">06. Terezvaros, Hungary, Budapest</span>
            <span className="fpPrice">Starting from <b>Rs. 8,324</b></span>
            <div className="fpRating">
                <button>8.8</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1" className="fpimg" alt=""/>
            <span className="fpName">numa|Vita Apartments</span>
            <span className="fpCity">Fortezza da Basso, Italy,Florence</span>
            <span className="fpPrice">Starting from <b>Rs.16,895</b></span>
            <div className="fpRating">
                <button>9.3</button>
                <span>Wonderful</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=73f8c029827076805ee781cdf818bb5e5e9b963227d74e4ebe071f3564ae4423&o=&s=1" className="fpimg" alt=""/>
            <span className="fpName">The Apartments by The Sloane Club</span>
            <span className="fpCity">Kensington and Chlesa</span>
            <span className="fpPrice">Starting from <b>Rs. 54,546</b></span>
            <div className="fpRating">
                <button>9.0</button>
                <span>Wonderful</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=d9736601506fabe6637abf33b5169604b4407052c7ef063d96bf7a35f395e89d&o=&s=1" className="fpimg" alt=""/>
            <span className="fpName">P&J Luxury Apartments</span>
            <span className="fpCity">Old Town,Poland,Krakow</span>
            <span className="fpPrice">Starting from <b>Rs.5,507</b></span>
            <div className="fpRating">
                <button>8.4</button>
                <span>Very Good</span>
            </div>
        </div>
        
    
        
    </div>
    
  );
};

export default FeaturedProperties