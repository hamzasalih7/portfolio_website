import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or may have moved. Try the
        homepage, services, or contact page.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back home</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </Container>
  );
}
