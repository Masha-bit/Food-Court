"use client"

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';

const SwipeAnimation = ({ children }) => {
  const { direction } = useParams();

  useEffect(() => {
    const swipeElement = document.getElementById('swipe-container');

    const handleSwipeIn = () => {
      gsap.fromTo(
        swipeElement,
        { x: direction === 'back' ? '-100%' : '100%' },
        { x: '0%', duration: 0.5 }
      );
    };

    const handleSwipeOut = () => {
      gsap.to(swipeElement, { x: direction === 'back' ? '100%' : '-100%', duration: 0.5 });
    };

    const handleRouteChange = () => {
      handleSwipeOut();
    };

    handleSwipeIn();

    window.addEventListener('beforeunload', handleRouteChange);

    return () => {
      gsap.killTweensOf(swipeElement);
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, [direction]);

  return <div id="swipe-container" className='h-screen w-[100vw] overflow-y-auto'>{children}</div>;
};

export default SwipeAnimation;