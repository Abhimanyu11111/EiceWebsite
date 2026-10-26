/**
 * Renders structured data for search engines. "<" is escaped so a value can
 * never close the script tag (XSS-safe, as the Next.js docs recommend).
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
