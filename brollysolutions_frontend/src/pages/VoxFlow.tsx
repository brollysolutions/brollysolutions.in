/**
 * VoxFlow — product detail page for Brolly VoxFlow, the spreadsheet-to-voice
 * outbound calling agent. Copy lives in VOXFLOW (@/data/content).
 */
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import CTASection from '@/components/sections/CTASection';
import { VOXFLOW } from '@/data/content';

/**
 * Demo player — renders the real recording once VOXFLOW.demo.src is set,
 * and a placeholder until then. See the `demo` block in @/data/content.
 */
function DemoVideo() {
  const { src, poster, caption } = VOXFLOW.demo;

  return (
    <Reveal>
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-navy-900 shadow-[0_30px_80px_-32px_rgba(15,42,78,0.5)]">
          {src ? (
            <video
              className="block w-full aspect-video bg-black"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              onContextMenu={(e) => e.preventDefault()}
              preload="metadata"
              playsInline
              poster={poster || undefined}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.{' '}
              <a href={src} className="underline">
                Download the demo video
              </a>
              .
            </video>
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/15 text-accent-600">
                <Icon name="play" className="h-8 w-8" />
              </span>
              <p className="text-lg font-semibold text-navy-900">Demo video coming soon</p>
              <p className="max-w-md text-sm text-ink-500 leading-relaxed">
                We’re putting the finishing touches on a full walkthrough. In the meantime, try VoxFlow
                yourself or get in touch for a live demo.
              </p>
            </div>
          )}
        </div>
        {caption && <p className="mt-5 text-center text-sm text-ink-500">{caption}</p>}
      </div>
    </Reveal>
  );
}

export default function VoxFlow() {
  return (
    <>
      <PageHeader
        eyebrow="Brolly VoxFlow"
        title="Spreadsheet-to-voice automation"
        subtitle="Turn raw data into live conversations with the world’s first RAG-powered outbound voice agent."
        actions={
          <>
            <Button href={VOXFLOW.appUrl} variant="primary" size="lg" icon="arrow-diagonal">
              View product
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Book a demo
            </Button>
          </>
        }
      />

      {/* Intro */}
      <Section tone="white" spacing="md">
        <Reveal className="max-w-3xl">
          <p className="text-xl md:text-2xl text-ink-700 leading-relaxed font-medium">{VOXFLOW.intro}</p>
        </Reveal>
      </Section>

      {/* Demo video */}
      <Section tone="surface" spacing="md">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <Reveal>
            <Eyebrow centered>See it in action</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              A live look at VoxFlow
            </h2>
          </Reveal>
        </div>
        <DemoVideo />
      </Section>

      {/* How it works */}
      <Section tone="white">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              From file to phone call in three steps
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VOXFLOW.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.08}>
              <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-8">
                <span className="block text-5xl font-extrabold text-accent-500/25 leading-none mb-5">
                  {s.step}
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{s.title}</h3>
                <p className="text-[15px] text-ink-500 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Key features */}
      <Section tone="surface">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>Key features</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Built to sound human, at scale
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {VOXFLOW.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.08}>
              <div className="group h-full bg-white border border-slate-200 rounded-2xl p-8 transition-all duration-300 hover:border-accent-500/50 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(15,42,78,0.4)]">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-500/10 text-accent-600 mb-7 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon name={f.icon} className="w-7 h-7" />
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{f.title}</h3>
                <p className="text-[15px] text-ink-500 leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Technical architecture */}
      <Section tone="cream">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>Technical architecture</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Under the hood
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">{VOXFLOW.architecture.intro}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {VOXFLOW.architecture.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="h-full bg-white border border-slate-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 shrink-0">
                    <Icon name={a.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-navy-900">{a.title}</h3>
                </div>
                <p className="text-[15px] text-ink-500 leading-relaxed">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to turn your spreadsheets into conversations?"
        subtitle="Tell us about your outbound workflow and we’ll show you what Brolly VoxFlow can do with your data."
      />
    </>
  );
}
