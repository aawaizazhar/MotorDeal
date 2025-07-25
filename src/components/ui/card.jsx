import * as React from "react"
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils"

const Card = React.forwardRef(
  ({ className, hoverable = true, cursorHover = true, ...props }, ref) => {
    const cardRef = React.useRef(null);
    
    // Forward ref and merge with our ref
    React.useImperativeHandle(ref, () => cardRef.current);

    return (
      <div
        ref={cardRef}
        data-cursor={cursorHover ? 'hover' : undefined}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-out",
          hoverable && "hover:shadow-lg hover:-translate-y-0.5",
          className
        )}
        {...props}
      />
    );
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// PropTypes
Card.propTypes = {
  className: PropTypes.string,
  hoverable: PropTypes.bool,
  cursorHover: PropTypes.bool
};

CardHeader.propTypes = {
  className: PropTypes.string
};

CardTitle.propTypes = {
  className: PropTypes.string
};

CardDescription.propTypes = {
  className: PropTypes.string
};

CardContent.propTypes = {
  className: PropTypes.string
};

CardFooter.propTypes = {
  className: PropTypes.string
};

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
