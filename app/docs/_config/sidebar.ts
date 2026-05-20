export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const SIDEBAR_NAV: Record<string, NavSection[]> = {
  v1: [
    {
      title: 'Get Started',
      items: [
        { title: 'Introduction', href: '/docs/v1/get-started/introduction' },
        { title: 'Why Qlitz', href: '/docs/v1/get-started/why-qlitz' },
        { title: 'Quick Start', href: '/docs/v1/get-started/quick-start' },
      ],
    },
    {
      title: 'Core Concepts',
      items: [
        { title: 'Projects', href: '/docs/v1/core-concepts/projects' },
        { title: 'Qlitz Canvas', href: '/docs/v1/core-concepts/canvas' },
        { title: 'Requirements Traceability (RTM)', href: '/docs/v1/core-concepts/rtm' },
        { title: 'Data Layers', href: '/docs/v1/core-concepts/data-layers' },
      ],
    },
    {
      title: 'Features',
      items: [
        { title: 'Flows', href: '/docs/v1/features/flows' },
        { title: 'Coverage', href: '/docs/v1/features/coverage' },
        { title: 'Insights', href: '/docs/v1/features/insights' },
        { title: 'Readiness', href: '/docs/v1/features/readiness' },
        { title: 'Heatmap', href: '/docs/v1/features/heatmap' },
        { title: 'Suggestions', href: '/docs/v1/features/suggestions' },
        { title: 'Tests', href: '/docs/v1/features/tests' },
        { title: 'Auto-Heal', href: '/docs/v1/features/auto-heal' },
        { title: 'Replay', href: '/docs/v1/features/replay' },
        { title: 'History', href: '/docs/v1/features/history' },
        { title: 'Story', href: '/docs/v1/features/story' },
        { title: 'Release Management', href: '/docs/v1/features/releases' },
      ],
    },
    {
      title: 'Framework Generation',
      items: [
        { title: 'Cypress', href: '/docs/v1/framework-generation/cypress' },
        { title: 'Playwright', href: '/docs/v1/framework-generation/playwright' },
        { title: 'Selenium', href: '/docs/v1/framework-generation/selenium' },
        { title: 'WebdriverIO', href: '/docs/v1/framework-generation/webdriverio' },
        { title: 'RestAssured', href: '/docs/v1/framework-generation/restassured' },
      ],
    },
    {
      title: 'API Reference',
      items: [
        { title: 'Overview', href: '/docs/v1/api-reference/overview' },
        { title: 'Projects', href: '/docs/v1/api-reference/projects' },
        { title: 'Tests', href: '/docs/v1/api-reference/tests' },
        { title: 'Releases', href: '/docs/v1/api-reference/releases' },
        { title: 'Frameworks', href: '/docs/v1/api-reference/frameworks' },
      ],
    },
  ],
};

export const VERSIONS = ['v1'] as const;
export type Version = (typeof VERSIONS)[number];
export const DEFAULT_VERSION: Version = 'v1';
