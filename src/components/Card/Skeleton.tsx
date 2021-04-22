import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={460}
      viewBox="0 0 260 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="300" rx="6" ry="6" width="260" height="26" />
      <rect x="1" y="340" rx="6" ry="6" width="260" height="61" />
      <rect x="109" y="415" rx="6" ry="6" width="169" height="40" />
      <rect x="3" y="415" rx="6" ry="6" width="90" height="40" />
    </ContentLoader>
  );
};

export default Skeleton;
