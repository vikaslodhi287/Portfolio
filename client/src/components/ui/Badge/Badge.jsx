import styles from "./Badge.module.scss";
import { cn } from "../../../utils/cn";

/**
 * --------------------------------------------------------
 * Badge Component
 *
 * Premium reusable badge component.
 *
 * Features:
 * ✔ Variants
 * ✔ Icons
 * ✔ Rounded
 * ✔ Accessible
 * ✔ Glass UI
 * --------------------------------------------------------
 */

function Badge({
  children,
  variant = "primary",
  icon = null,
  rounded = true,
  className = "",
  ...props
}) {
  return (
    <span
      className={cn(
        styles.badge,
        styles[variant],
        rounded && styles.rounded,
        className
      )}
      {...props}
    >
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}

      <span>{children}</span>
    </span>
  );
}

export default Badge;