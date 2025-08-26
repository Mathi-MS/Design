import { useEffect, useRef } from "react";

export function useGSAPAnimation(animation: any, dependencies: any[] = []) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current && window.gsap) {
      window.gsap.fromTo(
        elementRef.current,
        animation.initial,
        {
          ...animation.animate,
          ...animation.transition,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, dependencies);

  return elementRef;
}

export function useCounterAnimation(targetValue: number, dependencies: any[] = []) {
  const counterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (counterRef.current && window.gsap) {
      const counter = { value: 0 };
      window.gsap.to(counter, {
        value: targetValue,
        duration: 2,
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counter.value) + '+';
          }
        },
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }
  }, dependencies);

  return counterRef;
}
