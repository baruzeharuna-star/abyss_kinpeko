import Link from "next/link";

interface BloodlineLinkButtonProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function BloodlineLinkButton({
  href = "/bloodline",
  children,
  className = "",
}: BloodlineLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-5 py-3 sm:px-4 sm:py-2.5 md:px-8 md:py-4 bg-accent-500 text-gray-900 text-sm md:text-lg font-bold rounded-lg hover:bg-accent-600 active:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/50 hover:scale-105 active:scale-100 whitespace-nowrap ${className}`}
    >
      {children}
    </Link>
  );
}
