import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className={cn(
            "inline-flex items-center justify-center",
            "px-4 py-2 rounded-md",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90",
            "transition-colors"
          )}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}