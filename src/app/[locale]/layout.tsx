import {notFound} from "next/navigation";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, setRequestLocale} from "next-intl/server";
import {SiteFooter} from "@/components/navigation/SiteFooter";
import {SiteHeader} from "@/components/navigation/SiteHeader";
import {JsonLd} from "@/components/seo/JsonLd";
import {locales} from "@/i18n/routing";
import {orgConfig} from "@/config/org";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>;

export default async function LocaleLayout({children, params}: LocaleLayoutProps) {
  const {locale} = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Ensure this route stays statically renderable.
  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error("Failed to load messages:", error);
    // Fallback to empty messages object
    messages = {};
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: orgConfig.name,
          url: orgConfig.contact.website,
          email: orgConfig.contact.email.hello,
          address: {
            "@type": "PostalAddress",
            streetAddress: orgConfig.address.street,
            addressLocality: orgConfig.address.city,
            postalCode: orgConfig.address.postalCode,
            addressCountry: orgConfig.address.country,
          },
        }}
      />
      <SiteHeader />
      <main id="content" className="layout-grid">
        {children}
      </main>
      <SiteFooter />
      <div className="fixed bottom-4 left-4 z-40 rounded border border-ink/20 bg-white/90 px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-ink/70 shadow-sm">
        OID: {orgConfig.registration.oid} · UIC: {orgConfig.registration.uic}
      </div>
    </NextIntlClientProvider>
  );
}

