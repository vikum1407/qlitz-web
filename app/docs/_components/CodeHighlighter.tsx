import { codeToHtml } from 'shiki';
import { CopyButton } from './CopyButton';

interface Props {
  code: string;
  lang: string;
}

export async function CodeHighlighter({ code, lang }: Props) {
  let html: string;
  try {
    html = await codeToHtml(code, {
      lang,
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
    });
  } catch {
    html = await codeToHtml(code, {
      lang: 'text',
      themes: {
        light: 'github-light',
        dark: 'one-dark-pro',
      },
    });
  }

  return (
    <div className="group relative mt-4">
      <div
        className="shiki-block overflow-x-auto rounded-lg border border-black/20 text-sm leading-relaxed dark:border-white/10 [&_pre]:m-0 [&_pre]:rounded-lg [&_pre]:p-5"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <CopyButton code={code} />
    </div>
  );
}
