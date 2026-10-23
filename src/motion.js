import { S as React } from "./vendor/runtime.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function useHomeMotion(root) {
  React.useLayoutEffect(() => {
    if (!root.current) return;
    const media = gsap.matchMedia();
    media.add(
      {
        reduced: "(prefers-reduced-motion: reduce)",
        wide: "(min-width: 900px)",
        motion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduced, wide } = context.conditions;
        if (reduced) return;
        const scope = gsap.context(() => {
          gsap.from(".hero-enter", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity",
          });
          gsap.utils.toArray("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              y: 26,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
              clearProps: "transform,opacity",
            });
          });
          gsap.utils.toArray(".program-photo-card > img").forEach((image) => {
            gsap.fromTo(
              image,
              { objectPosition: "50% 35%" },
              {
                objectPosition: "50% 60%",
                ease: "none",
                scrollTrigger: {
                  trigger: image.parentElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.7,
                },
              },
            );
          });
          gsap.utils.toArray("[data-count]").forEach((element) => {
            const state = { value: 0 };
            gsap.to(state, {
              value: Number(element.dataset.count),
              duration: 2.2,
              ease: "power2.out",
              scrollTrigger: { trigger: element, start: "top 95%", once: true },
              onStart: () => {
                element.textContent = "0";
              },
              onUpdate: () => {
                element.textContent =
                  Number(element.dataset.count) === 3 && state.value < 2.999
                    ? state.value.toFixed(1)
                    : Math.round(state.value).toLocaleString("en-NG");
              },
            });
          });
          if (wide) {
            gsap.to(".hero-floating-card", {
              y: -12,
              duration: 3.4,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
            gsap.to(".hero-orbit", {
              rotation: 25,
              duration: 20,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          }
        }, root);
        return () => scope.revert();
      },
    );
    return () => media.revert();
  }, []);
}
export function usePageMotion(root) {
  React.useLayoutEffect(() => {
    if (
      !root.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const context = gsap.context(() => {
      gsap.from(root.current.children, {
        opacity: 0,
        y: 12,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });
    }, root);
    return () => context.revert();
  }, []);
}
