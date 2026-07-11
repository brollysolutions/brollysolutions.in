/**
 * CTASection — closing call-to-action band used across pages.
 */
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

interface Props {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Let's build something that lasts",
  subtitle = 'Tell us where you are today and where you want to be. We will map the fastest, safest path there — no obligation.',
}: Props) {
  return (
    <section className="bg-surface py-20 md:py-28 px-6 border-t border-slate-100">
      <Reveal className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">{title}</h2>
        <p className="mt-5 text-lg text-ink-500 leading-relaxed">{subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="primary" size="lg" icon="arrow">
            Get in Touch
          </Button>
          <Button to="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
