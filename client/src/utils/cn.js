/**
 * -------------------------------------------------------
 * cn()
 * Utility for combining class names conditionally.
 *
 * Example:
 * cn(
 *   styles.button,
 *   styles.primary,
 *   isLoading && styles.loading,
 *   className
 * )
 * -------------------------------------------------------
 */

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default cn;