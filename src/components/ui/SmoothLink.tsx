import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation } from 'react-router-dom';
import { HTMLAttributes, forwardRef, useEffect } from 'react';
import { scrollTo, scrollToTop } from '@/utils/smoothScroll';

type ScrollBehavior = 'auto' | 'smooth';

interface SmoothLinkProps extends Omit<RouterLinkProps, 'to'> {
  to: string;
  scrollOffset?: number;
  smooth?: boolean | ScrollBehavior;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  rel?: string;
  target?: string;
}

const isExternalLink = (url: string): boolean => {
  return /^https?:\/\//.test(url) || url.startsWith('mailto:') || url.startsWith('tel:');
};

export const SmoothLink = forwardRef<HTMLAnchorElement, SmoothLinkProps>(
  ({
    to,
    scrollOffset = 80,
    smooth = true,
    children,
    className = '',
    external = false,
    rel: relProp,
    target: targetProp,
    ...props
  }, ref) => {
    const location = useLocation();
    const isAnchor = to.startsWith('#');
    const isExternal = external || isExternalLink(to);
    const behavior = smooth === true ? 'smooth' : smooth === false ? 'auto' : smooth;
    
    // Handle anchor links and scroll restoration
    useEffect(() => {
      if (isAnchor && location.hash === to) {
        // Small timeout to ensure the DOM is updated
        const timer = setTimeout(() => {
          scrollTo(to, {
            offset: scrollOffset,
            behavior
          });
        }, 50);
        return () => clearTimeout(timer);
      }
    }, [to, location.hash, scrollOffset, behavior, isAnchor]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Don't interfere with browser's default behavior for special clicks
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        return;
      }

      // Handle anchor links
      if (isAnchor) {
        e.preventDefault();
        scrollTo(to, {
          offset: scrollOffset,
          behavior
        });
        // Update URL without causing a navigation
        window.history.pushState({}, '', to);
      }
      
      // Call the original onClick handler if provided
      if (props.onClick) {
        props.onClick(e);
      }
    };

    // Set default rel and target for external links
    const rel = isExternal
      ? [relProp, 'noopener', 'noreferrer'].filter(Boolean).join(' ')
      : relProp;
    
    const target = isExternal ? targetProp || '_blank' : targetProp;

    // Handle external links
    if (isExternal) {
      return (
        <a
          href={to}
          ref={ref}
          className={className}
          rel={rel}
          target={target}
          {...props as HTMLAttributes<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    // Handle anchor links
    if (isAnchor) {
      return (
        <a
          href={to}
          ref={ref}
          onClick={handleClick}
          className={className}
          {...props as HTMLAttributes<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    // Handle internal navigation
    return (
      <RouterLink
        to={to}
        ref={ref}
        className={className}
        onClick={(e) => {
          // Only handle if it's the primary mouse button
          if (e.button === 0) {
            scrollToTop({ behavior });
          }
          
          // Call the original onClick handler if provided
          if (props.onClick) {
            props.onClick(e);
          }
        }}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
);

SmoothLink.displayName = 'SmoothLink';
