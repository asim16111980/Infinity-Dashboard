// utils/mapErrorToMessage.ts

export function mapErrorToMessage(error: unknown): string {
    if (error instanceof TypeError && error.message.includes("fetch")) {
      return "Network error. Please check your connection and try again.";
    }
  
    if (typeof error === "object" && error !== null) {
      const err = error as any;
  
      if (err.status) {
        switch (err.status) {
          case 401:
          case 403:
            return "Your session has expired. Please log in again.";
          case 500:
          case 503:
            return "The service is temporarily unavailable. Please try again later.";
          default:
            return "Something went wrong. Please try again.";
        }
      }
  
      if (err.message) {
        return err.message;
      }
    }
  
    return "An unexpected error occurred. Please try again.";
  }
  