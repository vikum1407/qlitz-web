import { redirect } from 'next/navigation';
import { DEFAULT_VERSION } from './_config/sidebar';

export default function DocsPage() {
  redirect(`/docs/${DEFAULT_VERSION}/get-started/introduction`);
}
