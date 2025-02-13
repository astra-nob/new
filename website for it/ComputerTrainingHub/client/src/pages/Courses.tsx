import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

export default function Courses() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ["/api/courses"],
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Loading courses...</h1>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Course Catalog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course: any) => (
          <Card key={course.id}>
            <CardHeader>
              <img
                src={course.image}
                alt={course.title}
                className="rounded-lg mb-4 aspect-video object-cover"
              />
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{course.duration}</span>
                <span className="text-primary font-bold">${course.price}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
