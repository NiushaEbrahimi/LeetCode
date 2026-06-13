/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// my solution ( got it in first try)
var debounce = function(fn, t) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(...args)
        },t+1)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */