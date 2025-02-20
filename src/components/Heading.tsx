import React from 'react';
/* Summary: The Heading component renders an h1 element with a customizable title and optional CSS class for styling.*/

interface HeadingProps {
  title: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

export default Heading;