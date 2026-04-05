import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C1121F] text-white border border-transparent shadow-[0_4px_16px_-2px_rgba(193,18,31,0.35)] hover:bg-[#9e0f1a] hover:shadow-[0_8px_24px_-4px_rgba(193,18,31,0.4)]",
  secondary:
    "bg-neutral-950 text-white border border-transparent shadow-sm hover:bg-neutral-800 hover:shadow-md",
  outline:
    "border border-neutral-900/15 bg-white/60 text-neutral-900 backdrop-blur-sm shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:border-neutral-900/22 hover:bg-white hover:!text-neutral-900 hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)]",
  ghost: "bg-transparent shadow-none hover:bg-neutral-900/[0.04] hover:shadow-none",
  link: "bg-transparent shadow-none underline-offset-4 hover:underline hover:shadow-none",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-3.5 text-sm rounded-xl md:text-[0.9375rem]",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-heading font-medium transition-[background-color,box-shadow,border-color,color,transform] duration-200 hover:!scale-100 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1121F] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:active:translate-y-0";

    const combinedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button type="button" className={combinedClassName} ref={ref as React.Ref<HTMLButtonElement>} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
