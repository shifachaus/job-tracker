import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non
              laudantium nihil officia
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button size="lg" className="h-12 text-lg font-medium">
                start for free
                <ArrowRightIcon />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free forever, No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
