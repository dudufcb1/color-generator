import React from 'react';
import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText('#' + color.hex);
        toast.success('Copiado al portapapeles');
      } catch (error) {}
    } else {
      toast.error('Clipboard Acess Not Available');
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={index < 10 ? 'color' : 'color color-light'}
      style={{ background: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="percent-value">#{color.hex}</p>
    </article>
  );
};

export default SingleColor;
