import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'
import { MapboxEvent } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmVlZm9mdGVycm9yIiwiYSI6ImNsNXZ1bzR4ajBkanEzaW56c2x3dXZ6NWEifQ.1S1MB-l_0wBg1BfOvqLNVA';

const Map = (props) => {
    console.log(props)
    
    useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates)
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates)
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 100
      }
      )
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }


    return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div `
    flex-1 h-1/2
`