/**
 * - polymorphism shows in react when a single component
 *      behaves differently using something like props
 */

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
