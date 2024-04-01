import React, { useEffect, useRef } from 'react';
import { ReactComponent as USMapSVG } from '../../data/us.svg'; // Replace with the path to your SVG file

export const UsMap = ({ correctState, onStateClick }) => {
  const svgRef = useRef(null);
  const clickedStates = useRef(new Set()); // Use a Set to track clicked states

  const handleMouseOver = (event) => {
    if (!clickedStates.current.has(event.target.id)) {
      event.target.style.fill = 'darkgray'; // Color on hover
    }
  };

  const handleClick = (event) => {
    const stateId = event.target.id;
    clickedStates.current.add(stateId); // Add to clicked states
    if (stateId === correctState) {
      event.target.style.fill = 'green'; // Color on correct guess
    } else {
      // increase incorrect count here 
    }
    onStateClick(stateId);
  };

  const handleMouseOut = (event) => {
    if (!clickedStates.current.has(event.target.id)) {
      event.target.style.fill = '#f9f9f9'; // Reset color if not clicked
    }
  };

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll('path');
    paths.forEach(path => {
      path.addEventListener('mouseover', handleMouseOver);
      path.addEventListener('mouseout', handleMouseOut);
      path.addEventListener('click', handleClick);
      path.style.strokeWidth = '0.97063118000000004';
    });

    return () => { // Cleanup event listeners
      paths.forEach(path => {
        path.removeEventListener('mouseover', handleMouseOver);
        path.removeEventListener('mouseout', handleMouseOut);
        path.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return <USMapSVG ref={svgRef} />;
};

export const stateArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
