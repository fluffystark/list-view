import React from 'react';
import { BounceLoader } from 'react-spinners';


export default function Loading() {
  return (
    <BounceLoader
      sizeUnit="px"
      size={120}
      color="#3bb606"
    />
  );
}
