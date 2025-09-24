export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-6xl mx-auto py-8 px-6 md:px-8 flex flex-col items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SRIVATSAV. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
