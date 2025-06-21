/**
 * Smooth scroll to an element on the page
 * @param {string|HTMLElement|Object} target - The CSS selector, HTMLElement, or React ref to scroll to
 * @param {Object} options - Scroll options including offset, behavior, and callback
 * @param {number} [options.offset=0] - Additional offset in pixels
 * @param {string} [options.behavior='smooth'] - Scroll behavior ('auto' or 'smooth')
 * @param {Function} [options.onComplete] - Callback function to execute after scrolling completes
 * @param {HTMLElement} [options.container] - Optional container element to scroll within
 */
function scrollTo(target, options = {}) {
  const {
    offset = 0,
    behavior = 'smooth',
    onComplete,
    container = document.documentElement
  } = options;

  // Handle different target types
  let element = null;
  
  if (typeof target === 'string') {
    element = document.querySelector(target);
  } else if (target instanceof HTMLElement) {
    element = target;
  } else if (target && 'current' in target) {
    element = target.current;
  }

  if (!element) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Element not found for target: ${target}`);
    }
    return;
  }

  try {
    const containerElement = container === document.documentElement ? document.documentElement : container;
    const isWindow = containerElement === document.documentElement || containerElement === document.body;
    const containerRect = isWindow 
      ? { top: 0, left: 0, height: window.innerHeight, width: window.innerWidth }
      : containerElement.getBoundingClientRect();
    
    const elementRect = element.getBoundingClientRect();
    let scrollPosition;
    
    if (isWindow) {
      // For window/document scrolling
      scrollPosition = elementRect.top + window.pageYOffset - offset;
      
      // Scroll to the target
      window.scrollTo({
        top: scrollPosition,
        behavior: behavior
      });
    } else {
      // For container scrolling
      scrollPosition = elementRect.top + containerElement.scrollTop - containerRect.top - offset;
      
      // Scroll the container
      containerElement.scrollTo({
        top: scrollPosition,
        behavior: behavior
      });
    }

    // Execute callback after scroll completes if provided
    if (onComplete) {
      if (behavior === 'smooth') {
        const duration = getScrollDuration(
          element,
          containerElement,
          scrollPosition
        );
        
        setTimeout(function() {
          onComplete();
        }, duration);
      } else {
        onComplete();
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error during smooth scroll:', error);
    }
  }
};

/**
 * Calculate scroll duration based on distance
 */
function getScrollDuration(element, container, targetPosition) {
  const isWindow = container === document.documentElement || container === document.body;
  const startPosition = isWindow ? window.pageYOffset : container.scrollTop;
  const distance = Math.abs(targetPosition - startPosition);
  
  // Base duration on distance (adjust these values as needed)
  const minDuration = 250; // ms
  const maxDuration = 800; // ms
  const duration = Math.min(maxDuration, Math.max(minDuration, distance * 0.5));
  
  return duration;
};

/**
 * Smooth scroll to the top of the page or a container
 * @param options - Scroll options including behavior and callback
 */
function scrollToTop(options = {}) {
  const { behavior = 'smooth', onComplete, container } = options;
  
  const scrollOptions = {
    top: 0,
    left: 0,
    behavior
  };

  try {
    if (container && container !== document.documentElement && container !== document.body) {
      container.scrollTo(scrollOptions);
    } else {
      window.scrollTo(scrollOptions);
    }

    if (onComplete) {
      if (behavior === 'smooth') {
        // Estimate duration for smooth scroll
        const duration = 300; // Default duration
        setTimeout(onComplete, duration);
      } else {
        onComplete();
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error during scroll to top:', error);
    }
  }
};

/**
 * Check if an element is in the viewport
 * @param element - The element to check
 * @param threshold - Percentage of the element that needs to be visible (0-1)
 */
function isInViewport(element, threshold = 0.5) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
  // Calculate visible height and width
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0);
  
  // Calculate visible area
  const visibleArea = visibleHeight * visibleWidth;
  const elementArea = rect.height * rect.width;
  
  return visibleArea >= elementArea * threshold;
};

/**
 * Initialize smooth scroll for anchor links
 * @param options - Options for scroll behavior
 */
function initSmoothScroll(options = {}) {
  if (typeof document === 'undefined') return () => {};
  
  function handleClick(e) {
    // Check if the clicked element is an anchor link with a hash
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    if (href === '#' || href === '#!') return;
    
    // Prevent default anchor behavior
    e.preventDefault();
    
    // Get the target element
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Target element not found: ${targetId}`);
      }
      return;
    }
    
    // Calculate header offset (you can customize this based on your header)
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    
    // Scroll to the target
    scrollTo(targetElement, {
      ...options,
      offset: headerHeight,
      onComplete: () => {
        // Update URL without causing a navigation
        window.history.pushState({}, '', targetId);
      }
    });
  };
  
  // Add event listener to document
  document.addEventListener('click', handleClick);
  
  // Return cleanup function
  return function cleanup() {
    document.removeEventListener('click', handleClick);
  };
}

// Export all functions
export {
  scrollTo,
  scrollToTop,
  isInViewport,
  initSmoothScroll,
  getScrollDuration
};

export default {
  scrollTo,
  scrollToTop,
  isInViewport,
  initSmoothScroll,
  getScrollDuration
};
