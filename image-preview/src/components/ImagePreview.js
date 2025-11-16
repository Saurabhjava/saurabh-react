import React, { useState } from "react";
import HiddenImageDiv from "./HiddenImageDiv";

const ImagePreview = ({ images }) => {
  // Initialize state with image visibility
  const [imageStates, setImageStates] = useState(images);

  // Toggle single image visibility
  const toggleVisibility = (index) => {
    setImageStates((prev) =>
      prev.map((img, i) =>
        img.id === index ? { ...img, visible: !img.visible } : img
      )
    );
  };

  // Show all images
  const showAll = () => {
    setImageStates((prev) => prev.map((img) => ({ ...img, visible: true })));
  };

  // Hide all images
  const hideAll = () => {
    setImageStates((prev) => prev.map((img) => ({ ...img, visible: false })));
  };

  return (
    <div className="layout align-items-center mt-100">
      <div className="card ma-20 pa-50">
        <section>
          <div
            className="layout-row justify-content-around"
            data-testid="images-div"
          >
            {imageStates.map((img, index) =>
              img.visible ? (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  height={200}
                  width={300}
                  onClick={() => toggleVisibility(img.id)}
                  data-testid={`img-${index}`}
                />
              ) : (
                <HiddenImageDiv
                  key={index}
                  onClick={() => toggleVisibility(img.id)}
                  data-testid={`hidden-${index}`}
                />
              )
            )}
          </div>
        </section>
        <section className="card-actions justify-content-center">
          <button data-testid="show-all-btn" onClick={showAll}>
            Show all
          </button>
          <button
            className="danger"
            data-testid="hide-all-btn"
            onClick={hideAll}
          >
            Hide all
          </button>
        </section>
      </div>
    </div>
  );
};

export default ImagePreview;
