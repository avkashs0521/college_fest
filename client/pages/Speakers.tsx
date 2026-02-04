import { Layout } from "@/components/layout";

export default function Speakers() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Speakers & Performers
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Meet the brilliant minds and talented artists performing at
              CollegeFest 2026
            </p>

            <div className="bg-card border border-border rounded-lg p-12">
              <p className="text-muted-foreground mb-4">
                This page is being prepared with detailed speaker profiles and
                bios.
              </p>
              <p className="text-sm text-muted-foreground">
                Check out the speakers section on the{" "}
                <a href="/" className="text-primary hover:underline">
                  homepage
                </a>{" "}
                to see who's performing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
