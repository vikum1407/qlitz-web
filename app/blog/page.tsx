import { InsightsClient } from './InsightsClient';

export const metadata = {
  title: 'Insights',
  description: 'Perspectives on where the QA industry is heading, what modern engineering teams are getting wrong, and what the next standard looks like.',
};

export default function BlogPage() {
  return <InsightsClient />;
}
