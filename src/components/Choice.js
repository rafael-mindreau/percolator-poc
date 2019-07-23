import React from 'react';
import './Choice.scss';

const blueprintColor = '#3388e2';

export default function Choice({ component }) {
  let content;

  // Check if valid component was found
  if (component) {
    // Turn component into JSX compatible tag/type
    const Component = component;
    content = (
      <Component fillColor={blueprintColor} />
    );
  }

  return (
    <div className="choice">
      {content}
    </div>
  );
}
