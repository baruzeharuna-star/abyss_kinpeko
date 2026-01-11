"use client";

interface GradientBackgroundProps {
  variant?: "hero" | "card" | "card-light";
  className?: string;
}

export default function GradientBackground({ 
  variant = "hero", 
  className = "" 
}: GradientBackgroundProps) {
  const baseClasses = "absolute inset-0";
  const variantClasses = {
    hero: "bg-hero-gradient",
    card: "bg-card-gradient",
    "card-light": "bg-card-gradient-light",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}
