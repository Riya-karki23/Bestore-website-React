import React from "react";
import "./product.css";
import Button from "../../../../Components/Button/Button";

function ProductsPage() {
  return (
    <>
      <div className="products-page">
        <h2 className="product-title">Our top products</h2>
      </div>
      <div className="card-main-div">
        <div className="card-top-div">
          {/* ----------------------------------------------------card-1*/}

          <div className="product-card">
            <img
              className="card-image"
              src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg1.webp"
              alt='card-1-image'
            />
            <div className="text-wrapper card-1-text">
              <h2>Vedeo</h2>
              <p>Feel of sound</p>
              <Button btnColor="white" />
            </div>
          </div>
          {/* ----------------------------------------------------card-2 */}
          <div className="product-card">
            <img
              className="card-image "
              src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg2.webp"
              alt='card-2-image'
            />
            <div className="text-wrapper card-2-text">
              <h2>Denos T12</h2>
              <p>Small and powerful</p>
              <Button btnColor="#0089F7" textColor="white" />
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------card-3 */}
        <div className="card-bottom-div">
          <div className="product-card">
            <img
              className="card-image card-3-cardImage"
              src="https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-wrap-bg3.webp"
              alt='card-3-image'
            />
            <div className="text-wrapper card-3-text">
              <p>Mobi The smart button</p>
              <Button btnColor="#0089F7" textColor="white" />
            </div>
          </div>

          {/* ----------------------------------------------------card-4 */}

          <div className="card-4">
            <h2 className="card4-heading">Ending soon</h2>
            <p className="card4-title">
              Remaining time for special deal products. Hurry up!
            </p>
            <div className="outer-time-div">
              <div className="days-div ">
                <p className="number-days">00</p>
                <p className="time-title">days</p>
              </div>
              <div className="hour-div">
                <p className="number-days">00</p>
                <p className="time-title">hours</p>
              </div>
              <div className="minutes-div">
                <p className="number-days">00</p>
                <p className="time-title">minutes</p>
              </div>
            </div>

            <Button btnColor="white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
