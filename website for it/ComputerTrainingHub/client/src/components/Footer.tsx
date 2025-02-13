export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center py-8 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2024 TechTrain. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-6 md:mt-0">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
