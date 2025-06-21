import { Link } from "react-router-dom";

const SmoothLink = ({ to, children, className, ...props }) => {
  const handleClick = (e) => {
    // If the link is to an anchor on the same page
    if (to.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export { SmoothLink }; 