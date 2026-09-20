#!/usr/bin/env node
let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    return;
  }
  const filePath = (data.tool_input && data.tool_input.file_path) || "";
  const normalized = filePath.replace(/\\/g, "/");
  const isPageOrComponent = /\/src\/(pages|components|layouts)\/.*\.astro$/.test(normalized);
  if (!isPageOrComponent) return;
  const message = `Sayfa/bileşen değişti: ${normalized}. Bitirmeden önce: playwright-cli ile ilgili sayfayı aç (npx playwright-cli open <url>), ekran görüntüsü al (npx playwright-cli screenshot), görüntüye bak ve bozuk bir şey varsa KULLANICIYA SÖYLEMEDEN ÖNCE düzelt. Sonra kullanıcıya öncesi ve sonrası ekran görüntüsünü göster.`;
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PostToolUse",
        additionalContext: message,
      },
    })
  );
});
