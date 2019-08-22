import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';

const styles = css`margin: auto;`;

export default function Loading() {
  return (
    <BounceLoader
      css={styles}
      sizeUnit="px"
      size={120}
      color="#3bb606"
    />
  );
}
