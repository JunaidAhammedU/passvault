export const getPasswordStrength = (password: string) => {
  if (password.length < 6) {
    return { strength: "Weak", color: "#EF4444", value: 25 };
  }
  if (password.length < 10) {
    return { strength: "Moderate", color: "#FACC15", value: 50 };
  }
  if (password.length >= 10) {
    return { strength: "Strong", color: "#22C55E", value: 100 };
  }
  return { strength: "Weak", color: "#EF4444", value: 0 };
};
