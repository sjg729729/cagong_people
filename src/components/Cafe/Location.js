import React, { useEffect } from 'react';

const { kakao } = window;

const Location = ({ cordinate }) => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(cordinate.x, cordinate.y),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);

    var markerPosition = new kakao.maps.LatLng(cordinate.x, cordinate.y);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, [cordinate]);

  return (
    <div>
      <div id="map" style={{ width: '450px', height: '350px' }}></div>
    </div>
  );
};

export default Location;
