import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Oops! Page not found
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The page you're looking for doesn't exist. It might be coming soon
              or there's a typo in the URL.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
