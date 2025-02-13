import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Master Technology Skills<br />With Expert Training
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Comprehensive IT training programs designed to advance your career in technology.
            Learn from industry experts in a professional environment.
          </p>
          <div className="flex gap-4">
            <Link href="/courses">
              <Button size="lg">View Courses</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Courses</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Web Development"
                className="rounded-lg mb-4 aspect-video object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">Master modern web technologies and frameworks</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <img
                src="https://images.unsplash.com/photo-1589377452515-6f88ab0d33c9"
                alt="Cloud Computing"
                className="rounded-lg mb-4 aspect-video object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
              <p className="text-muted-foreground">Learn AWS, Azure, and cloud architecture</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <img
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9"
                alt="Data Science"
                className="rounded-lg mb-4 aspect-video object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Data Science</h3>
              <p className="text-muted-foreground">Master data analysis and machine learning</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Why Choose Us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Expert Instructors</h3>
            <p className="text-muted-foreground">Learn from industry professionals with years of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Hands-on Learning</h3>
            <p className="text-muted-foreground">Practice with real-world projects and scenarios</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Career Support</h3>
            <p className="text-muted-foreground">Get guidance for your professional development</p>
          </div>
        </div>
      </section>
    </div>
  );
}
