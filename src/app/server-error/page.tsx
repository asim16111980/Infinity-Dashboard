"use client";
import Image from "next/image";

export default function ServerErrorPage() {
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-9xl font-extrabold text-red-600">503</h1>
      <p className="text-2xl font-semibold text-gray-800">
        Service Unavailable
      </p>
      <p className="text-gray-500">
        The server is temporarily unavailable. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition select-none"
      >
        Retry
      </button>
    </section>
  );
}
