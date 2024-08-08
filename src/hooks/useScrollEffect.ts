'use client';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RefObject, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface ScrollEffectResult {
  containerRef: RefObject<HTMLDivElement>;
  cardsContainerRef: RefObject<HTMLDivElement>;
}

export function useScrollEffect(): ScrollEffectResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const setupScrollTrigger = () => {
      const container = containerRef.current;
      const cardsContainer = cardsContainerRef.current;

      if (container && cardsContainer) {
        const image = container.querySelector('img');
        if (!image) return;

        const updateAnimation = () => {
          const imageHeight = image.offsetHeight;
          const cardsTotalHeight = cardsContainer.scrollHeight;
          const scrollDistance = cardsTotalHeight - imageHeight;

          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

          gsap.to(cardsContainer, {
            y: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: `bottom+=${scrollDistance} bottom`,
              scrub: true,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        };

        updateAnimation();
        window.addEventListener('resize', updateAnimation);

        return () => {
          window.removeEventListener('resize', updateAnimation);
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    };

    const cleanup = setupScrollTrigger();

    return () => {
      lenis.destroy();
      cleanup?.();
    };
  }, []);

  return { containerRef, cardsContainerRef };
}
