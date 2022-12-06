import gsap, {Power3} from 'gsap';

const animateUp = (el) => {
  el.classList.add('opacity-0');
  el.classList.add('fade__text--up');
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
    },
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: Power3.easeOut
  });
}

export {animateUp};