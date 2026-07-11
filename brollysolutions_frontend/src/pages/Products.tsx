/**
 * Products — showcase of Brolly's ready-to-use SaaS products, each linking to
 * its live app via the appropriate route or external redirect URL.
 */
import { useEffect } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ProductsSection from '@/components/sections/ProductsSection';
import CTASection from '@/components/sections/CTASection';
import { COMPANY } from '@/data/content';

export default function Products() {
  useEffect(() => {
    document.title = `Products — ${COMPANY.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title="Custom-built solutions, ready to deploy"
        subtitle="High-performance platforms designed to supercharge your business workflows — launch them instantly or let us tailor them to your needs."
      />
      <ProductsSection withHeader={false} tone="surface" />
      <CTASection title="Need a product tailored to your business?" subtitle="We can customize any of our platforms or build something entirely new for your team." />
    </>
  );
}
