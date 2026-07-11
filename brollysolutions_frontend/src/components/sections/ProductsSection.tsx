/**
 * ProductsSection — grid of Brolly's ready-to-use SaaS products. Each card
 * links to the product's live app: internal routes render as a react-router
 * <Link>; external apps open their redirect URL in a new tab.
 */
import { Link } from 'react-router-dom';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { PRODUCTS, type Product } from '@/data/content';

function ProductCard({ product }: { product: Product }) {
  const isInternal = product.href.startsWith('/');

  const body = (
    <>
      <span className="absolute top-0 left-0 h-[3px] w-0 bg-accent-500 rounded-full transition-all duration-500 group-hover:w-full" />

      <div className="flex items-center justify-between mb-7">
        <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-500/10 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
          <Icon name={product.icon} className="w-7 h-7" />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent-700 border border-accent-500/30 bg-accent-500/5 px-3 py-1.5 rounded-full">
          {product.badge}
        </span>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-1.5">
        {product.tagline}
      </p>
      <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
        {product.title}
      </h3>
      <p className="text-[15px] text-ink-500 leading-relaxed mb-7">{product.description}</p>

      <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-accent-600 transition-colors">
        Launch product
        <Icon
          name="arrow-diagonal"
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </span>
    </>
  );

  const cls =
    'group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-8 overflow-hidden ' +
    'transition-all duration-300 hover:border-accent-500/50 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(15,42,78,0.4)]';

  return isInternal ? (
    <Link to={product.href} className={cls}>
      {body}
    </Link>
  ) : (
    <a href={product.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  );
}

interface Props {
  withHeader?: boolean;
  withCta?: boolean;
  tone?: 'white' | 'surface';
}

export default function ProductsSection({ withHeader = true, withCta = false, tone = 'white' }: Props) {
  return (
    <Section id="products" tone={tone}>
      {withHeader && (
        <div className="max-w-2xl mx-auto text-center mb-14">
          <Reveal>
            <Eyebrow centered>Our Products</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Ready-to-deploy platforms
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              Beyond bespoke engineering, we ship our own high-performance products — built to supercharge your
              workflows from day one.
            </p>
          </Reveal>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.title} delay={(i % 4) * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>

      {withCta && (
        <div className="mt-12 text-center">
          <Button to="/products" variant="primary" icon="arrow">
            Explore all products
          </Button>
        </div>
      )}
    </Section>
  );
}
