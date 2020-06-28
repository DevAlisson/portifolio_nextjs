import PropTypes from 'prop-types';
import React, { useState, useCallback, useEffect } from 'react';

import { SliderContainer, Image } from './styles';

const SliderComponent = ({ images }) => {
  const [selected, setSelected] = useState(0);

  const handleChange = useCallback(() => {
    setSelected(oldSelected => {
      return oldSelected === images.length - 1 ? 0 : oldSelected + 1;
    });
  }, [selected]);

  useEffect(() => {
    setInterval(() => {
      handleChange();
    }, 10000);
  }, []);

  return (
    <SliderContainer>
      {images.map((image, i) => (
        <Image
          key={image}
          src={image}
          selected={selected === i}
          alt={`Slider ${i}`}
        />
      ))}
    </SliderContainer>
  );
};

SliderComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderComponent;
