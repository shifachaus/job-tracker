import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  Briefcase,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

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
              <Link href={"/sign-up"}>
                <Button
                  size="lg"
                  className="h-12 text-lg font-medium cursor-pointer"
                >
                  start for free
                  <ArrowRightIcon />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                Free forever, No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Hero Images Section with Tabs */}
        <ImageTabs />

        {/* Features Section */}
        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-start  ">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create custom boards and columns to track your job
                  applications at every stage of the process.
                </p>
              </div>

              <div className="flex flex-col items-start ">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor your application status from applied to interview to
                  offer with visual Kanban boards.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never lose track of an application. Keep all your job search
                  information in one centralized place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
