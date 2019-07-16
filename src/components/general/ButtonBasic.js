import React from 'react';
import './Button.scss';

export default function ButtonBasic({ title }) {
  return (
    <button className="button" type="button">{title}</button>
  );
}
