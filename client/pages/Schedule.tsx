import { Layout } from "@/components/layout";

export default function Schedule() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Full Schedule
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Get detailed information about every event happening during CollegeFest 2026
            </p>
            
            <div className="bg-card border border-border rounded-lg p-12">
              <p className="text-muted-foreground mb-4">
                This page is being prepared with detailed schedule information.
              </p>
              <p className="text-sm text-muted-foreground">
                For now, check the full timeline on the <a href="/" className="text-primary hover:underline">homepage</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
