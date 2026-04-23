export const pageVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

export const buttonHoverVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } },
  tap: { scale: 0.9, transition: { duration: 0.2 } },
};

export const optionButtonVariants = {
  idle: { backgroundColor: "#fff" },
  selected: { backgroundColor: "#007bff" },
};

export const leaderboardRowVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export const confettiVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};