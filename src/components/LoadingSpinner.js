/*jshint esversion: 6 */
import React from 'react';
import Loader from 'react-loader-spinner';

const randomHex = () => {
  const colors = ["#8130EB", "#62E645", "#F0486D", "#348AB3", "#FF664C"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const randomStyle = () => {
  const styles = ["Audio", "BallTriangle", "Bars", "Circles", "Grid", "Hearts", "Oval", "Puff", "Rings", "Tailspin", "ThreeDots"];
  return styles[Math.floor(Math.random() * styles.length)];
}

const LoadingSpinner = () => {
  return(
    <div className="container">
      <h2>Waiting for your results ... </h2>
      <Loader type={randomStyle()} color={randomHex()} height={150} width={150}/>
    </div>
  );
}

export default LoadingSpinner;