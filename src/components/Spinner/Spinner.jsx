import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { SpinnerLoader, Backdrop } from './Spinner.styled';

export const Loader = () => {
  return (
    <Backdrop id="Backdrop">
      <SpinnerLoader className="Spinner">
        <HashLoader
          color="#ba7a57;"
          loading={true}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="Spinner"
        />
      </SpinnerLoader>
    </Backdrop>
  );
};
