export default function Button({ children, variant = 'primary', href, ...props }) {
  const className = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
