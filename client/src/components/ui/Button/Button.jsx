import styles from "./Button.module.scss";
import { cn } from "../../../utils/cn";

/**
 * --------------------------------------------------------
 * Button Component
 *
 * Reusable button component.
 *
 * Features:
 * ✔ Variants
 * ✔ Sizes
 * ✔ Loading State
 * ✔ Icons
 * ✔ Full Width
 * ✔ Disabled State
 * ✔ Accessible
 * --------------------------------------------------------
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      onClick={onClick}
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        className
      )}
      {...props}
    >
      {leftIcon && !loading && (
        <span className={styles.icon}>{leftIcon}</span>
      )}

      <span className={styles.content}>
        {loading ? "Loading..." : children}
      </span>

      {rightIcon && !loading && (
        <span className={styles.icon}>{rightIcon}</span>
      )}
    </button>
  );
}

export default Button;