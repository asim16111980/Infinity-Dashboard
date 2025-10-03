// utils/mapErrorToMessage.ts
export async function mapErrorToMessage(err: any): Promise<string> {
  if (!err) return "An unexpected error occurred. Please try again.";

  let errorObj: any = err;

  if (typeof err.then === "function") {
    try {
      errorObj = await err;
    } catch {
      return "Failed to parse error response.";
    }
  }

  const apiMessage =
    errorObj?.message ||
    errorObj?.data?.message ||
    errorObj?.error ||
    errorObj?.fail ||
    null;

  if (apiMessage) {
    if (apiMessage.includes("Invalid credentials")) {
      return "Incorrect email or password.";
    }

    if (apiMessage.includes("Failed to fetch")) {
      return "Connection failed. Please check your internet and try again.";
    }

    if (apiMessage.includes("Service unavailable")) {
      return "Service unavailable. Please try again later.";
    }

    if (apiMessage.includes("MongoServerSelectionError")) {
      return "Database connection issue. Please try again later.";
    }

    return apiMessage;
  }

  return "Something went wrong. Please try again.";
}
