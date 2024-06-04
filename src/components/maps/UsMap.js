import React, { useEffect, useRef } from 'react';
import { ReactComponent as USMapSVG } from '../../data/us.svg';

export const UsMap = ({ correctState, onStateClick, stateColors }) => {
  const svgRef = useRef(null);
  const clickedStates = useRef(new Set());

  const handleMouseOver = (event) => {
    if (!clickedStates.current.has(event.target.id)) {
      event.target.style.fill = 'darkgray';
    }
  };

  const handleClick = (event) => {
    const stateId = event.target.id;
    if (stateId === correctState) {
      clickedStates.current.add(stateId);
      event.target.style.fill = 'green';
    } else {
      event.target.style.fill = '#f9f9f9';
    }
    onStateClick(stateId);
  };

  const handleMouseOut = (event) => {
    if (!clickedStates.current.has(event.target.id)) {
      event.target.style.fill = '#f9f9f9';
    }
  };

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('path');
    paths.forEach(path => {
      path.addEventListener('mouseover', handleMouseOver);
      path.addEventListener('mouseout', handleMouseOut);
      path.addEventListener('click', handleClick);
      path.style.strokeWidth = '0.97063118000000004';
      const stateId = path.id;
      if (stateColors[stateId]) {
        path.style.fill = stateColors[stateId]; // Set fill color from stateColors
      } else {
        path.style.fill = '#f9f9f9'; // Default color
      }
    });

    return () => {
      paths.forEach(path => {
        path.removeEventListener('mouseover', handleMouseOver);
        path.removeEventListener('mouseout', handleMouseOut);
        path.removeEventListener('click', handleClick);
      });
    };
  }, [correctState, stateColors]);

  return <USMapSVG ref={svgRef} />;
};

export const stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
