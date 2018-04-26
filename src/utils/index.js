export const scrollToY = (scrollTargetY = 0, speed = 2000, easing = 'easeOutSine') => {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use
  const scrollY = window.scrollY;
  let currentTime = 0;

  // min time .1, max time .8 seconds
  const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  const easingEquations = {
    easeOutSine: pos => Math.sin(pos * (Math.PI / 2)),
    easeInOutSine: pos => -0.5 * (Math.cos(Math.PI * pos) - 1),
    easeInOutQuint: pos => ((pos /= 0.5) < 1 
      ? 0.5 * Math.pow(pos, 5)
      : 0.5 * (Math.pow((pos - 2), 5) + 2)
    )
  };

  // add animation loop
  const tick = () => {
    currentTime += 1 / 60;

    const p = currentTime / time;
    const t = easingEquations[easing](p);

    if (p < 1) {
        window.requestAnimationFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
    } else {
        window.scrollTo(0, scrollTargetY);
    }
  }

  // call it once to get started
  tick();
}
