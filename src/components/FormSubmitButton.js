"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function FormSubmitButton({ children, className, ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn-primary btn ${className}`}
      type="submit"
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
