import styles from "./Spinner.module.scss";
import { cn } from "../../../utils/cn";

/**
 * --------------------------------------------------------
 * Spinner Component
 *
 * Reusable loading spinner.
 *
 * Features:
 * ✔ Three Sizes
 * ✔ Two Colors
 * ✔ Fullscreen Mode
 * ✔ Accessible
 * --------------------------------------------------------
 */

function Spinner({
  size = "md",
  color = "primary",
  fullScreen = false,
  label = "Loading...",
  className = "",
}) {
  const spinner = (
    <div
      className={cn(
        styles.spinner,
        styles[size],
        styles[color],
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span className={styles.circle}></span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className={styles.overlay}>
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default Spinner;