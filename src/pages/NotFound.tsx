import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center px-4 max-w-lg animate-fade-in">
        <h1 className="mb-4 text-8xl font-serif font-bold text-primary">404</h1>
        <p className="mb-6 text-2xl font-serif">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="gradient-hero text-lg px-8">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
