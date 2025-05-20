import { RefObject } from 'react';

export type ScrollBehavior = 'auto' | 'smooth';

export interface ScrollOptions {
  /** Additional offset in pixels */
  offset?: number;
  /** Scroll behavior */
  behavior?: ScrollBehavior;
  /** Callback function to execute after scrolling completes */
  onComplete?: () => void;
  /** Optional container element to scroll within */
  container?: HTMLElement | null;
}

/**
 * Smooth scroll to an element on the page
 * @param target - The CSS selector, HTMLElement, or RefObject to scroll to
 * @param options - Scroll options including offset, behavior, and callback
 */
export const scrollTo = (
  target: string | HTMLElement | RefObject<HTMLElement> | null,
  options: ScrollOptions = {}
): void => {
  const {
    offset = 0,
    behavior = 'smooth',
    onComplete,
    container = document.documentElement
  } = options;

  // Handle different target types
  let element: HTMLElement | null = null;
  
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
    const isWindow = container === document.documentElement || container === document.body;
    const containerRect = isWindow 
      ? { top: 0, left: 0, height: window.innerHeight, width: window.innerWidth }
      : container.getBoundingClientRect();
    
    const elementRect = element.getBoundingClientRect();
    
    // Calculate scroll position
    const scrollPosition = {
      top: elementRect.top + (isWindow ? window.pageYOffset : container.scrollTop) - offset,
      left: elementRect.left + (isWindow ? window.pageXOffset : container.scrollLeft)
    };

    // Create scroll options
    const scrollOptions: ScrollToOptions = {
      top: scrollPosition.top,
      left: scrollPosition.left,
      behavior
    };

    // Execute scroll
    const scrollFn = isWindow ? window.scrollTo : container.scrollTo;
    scrollFn.call(isWindow ? window : container, scrollOptions);

    // Execute callback after scroll completes if provided
    if (onComplete) {
      if (behavior === 'smooth') {
        const duration = getScrollDuration(element, container, scrollPosition.top);
        setTimeout(onComplete, duration);
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
const getScrollDuration = (
  element: HTMLElement,
  container: HTMLElement | Document,
  targetPosition: number
): number => {
  const isWindow = container === document.documentElement || container === document.body;
  const startPosition = isWindow ? window.pageYOffset : (container as HTMLElement).scrollTop;
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
export const scrollToTop = (options: Omit<ScrollOptions, 'offset'> = {}): void => {
  const { behavior = 'smooth', onComplete, container } = options;
  
  const scrollOptions: ScrollToOptions = {
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
export const isInViewport = (
  element: HTMLElement,
  threshold = 0.5
): boolean => {
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
/**
 * Initialize smooth scroll for anchor links
 * @param options - Options for scroll behavior
 * @returns Cleanup function to remove event listeners
 */
export const initSmoothScroll = (options: Omit<ScrollOptions, 'offset'> = {}): (() => void) => {
  if (typeof document === 'undefined') return () => {};
  
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    
    if (!anchor) return;
    
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;
    
    e.preventDefault();
    
    // Get the target element
    const targetElement = document.querySelector<HTMLElement>(targetId);
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
  return () => {
    document.removeEventListener('click', handleClick);
  };
};

/**
 * Scroll an element into view if needed
 * @param element - The element to scroll into view
 * @param options - Scroll options
 */
export const scrollIntoViewIfNeeded = (
  element: HTMLElement,
  options: ScrollOptions & { threshold?: number } = {}
): void => {
  const { threshold = 0.5, ...scrollOptions } = options;
  
  if (!isInViewport(element, threshold)) {
    scrollTo(element, {
      offset: 0,
      behavior: 'smooth',
      ...scrollOptions
    });
  }
};
