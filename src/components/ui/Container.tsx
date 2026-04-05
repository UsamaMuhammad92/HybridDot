import { cn } from "@/utils/cn";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  size?: "sm" | "md" | "lg" | "full";
}

const sizeStyles = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  className,
  as: Component = "div",
  size = "lg",
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full px-6", sizeStyles[size], className)}
    >
      {children}
    </Component>
  );
}
