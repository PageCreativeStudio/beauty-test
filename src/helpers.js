const runOnce = function(func) {
  var ran = false, memo;
  return function() {
    if (ran) return memo;
    ran = true;
    memo = func.apply(this, arguments);
    func = null;
    return memo;
  };
};


const checkScrollDirectionIsUp = function(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


const isBrowser = typeof window !== `undefined`;

const sticky = (sticky_after = 200, el) => {
  window.addEventListener("scroll", () => {
    if(window.scrollY > sticky_after) {
      el.current.classList.add('animate-logo-in');
    }
    else {
      el.current.classList.remove('animate-logo-in');
    }
  });
}



export {runOnce,  isBrowser, sticky, checkScrollDirectionIsUp}