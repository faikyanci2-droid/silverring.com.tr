/**
 * JSON.stringify, `<` karakterini kaçırmaz. Bir değer `</script>` içerirse
 * inline <script type="application/ld+json"> etiketini erken kapatıp HTML
 * enjeksiyonuna yol açabilir. `<` → `<` dönüşümü JSON geçerliliğini
 * bozmadan bunu engeller.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
