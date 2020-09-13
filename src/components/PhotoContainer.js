/*jshint esversion: 6 */
import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = props => {
  const results = props.data;
  let photos = results.map(photo =>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id}/>
  );

  return(
    <div className="photo-container">
      <h2>Results</h2>
      {photos.length > 0 &&
      <ul>
        {photos} 
      </ul>
      }
      {photos.length === 0 &&
        <NotFound />
      }
    </div>
  );
}

export default PhotoContainer;