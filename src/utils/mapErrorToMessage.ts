// utils/mapErrorToMessage.ts
export function mapErrorToMessage(err: any): string {
  if (!err) return "An unexpected error occurred. Please try again.";

  const msg = err.message || err.toString();

  if (msg.includes("Invalid credentials")) {
    return "Incorrect email or password.";
  }

  if (msg.includes("Failed to fetch")) {
    return "Connection failed. Please check your internet and try again.";
  }

  if (msg.includes("Service unavailable")) {
    return "Service unavailable. Please try again later.";
  }

  if (msg.includes("MongoServerSelectionError")) {
    return "Database connection issue. Please try again later.";
  }

  return "Something went wrong. Please try again.";
}
