export interface SearchItem {
  title: string;
  description: string;
  href: string;
  section: string;
  keywords: string;
}

export const SEARCH_INDEX: SearchItem[] = [
  // Get Started
  { title: 'Introduction', description: 'Learn what Qlitz is and how it helps your QA team.', href: '/docs/v1/get-started/introduction', section: 'Get Started', keywords: 'overview platform enterprise qa automation lifecycle' },
  { title: 'Why Qlitz', description: 'Understand the problems Qlitz solves and how it differs from traditional QA tooling.', href: '/docs/v1/get-started/why-qlitz', section: 'Get Started', keywords: 'comparison benefits value fragmented tools traceability' },
  { title: 'Quick Start', description: 'Create your first Qlitz project and generate your first automation framework.', href: '/docs/v1/get-started/quick-start', section: 'Get Started', keywords: 'setup install begin create project first steps' },

  // Core Concepts
  { title: 'Projects', description: 'Projects are the fundamental unit of organisation in Qlitz.', href: '/docs/v1/core-concepts/projects', section: 'Core Concepts', keywords: 'project create manage workspace tabs overview' },
  { title: 'Qlitz Canvas', description: 'The visual framework designer that generates complete automation projects.', href: '/docs/v1/core-concepts/canvas', section: 'Core Concepts', keywords: 'canvas generate framework designer visual page objects' },
  { title: 'Requirements Traceability (RTM)', description: 'Connect every test to a business requirement.', href: '/docs/v1/core-concepts/rtm', section: 'Core Concepts', keywords: 'rtm requirements traceability matrix coverage link' },
  { title: 'Data Layers', description: 'The seven structured layers that make up the Qlitz data model.', href: '/docs/v1/core-concepts/data-layers', section: 'Core Concepts', keywords: 'layers data model architecture seven storage' },

  // Features
  { title: 'Flows', description: 'End-to-end user journey management across your application.', href: '/docs/v1/features/flows', section: 'Features', keywords: 'flows user journey end to end paths graph nodes' },
  { title: 'Coverage', description: 'Requirement-by-requirement test coverage breakdown.', href: '/docs/v1/features/coverage', section: 'Features', keywords: 'coverage requirements metrics percent partial' },
  { title: 'Insights', description: 'AI-driven analysis of your test suite — flakiness, gaps, and trends.', href: '/docs/v1/features/insights', section: 'Features', keywords: 'insights ai analysis flaky tests trends clusters health score' },
  { title: 'Readiness', description: 'Objective release readiness scoring from coverage and pass rates.', href: '/docs/v1/features/readiness', section: 'Features', keywords: 'readiness score release ship ready threshold' },
  { title: 'Heatmap', description: 'Visualise where test activity is concentrated across your application.', href: '/docs/v1/features/heatmap', section: 'Features', keywords: 'heatmap visual coverage density cold spots routes' },
  { title: 'Suggestions', description: 'AI-generated recommendations to improve coverage and suite health.', href: '/docs/v1/features/suggestions', section: 'Features', keywords: 'suggestions recommendations ai improve gaps flaky stale' },
  { title: 'Tests', description: 'The integrated test runner inside Qlitz.', href: '/docs/v1/features/tests', section: 'Features', keywords: 'tests run execute trigger monitor live results runner' },
  { title: 'Auto-Heal', description: 'Automatic test repair when your UI changes.', href: '/docs/v1/features/auto-heal', section: 'Features', keywords: 'auto heal repair broken selectors drift maintenance' },
  { title: 'Replay', description: 'Visual step-by-step replay of any recorded test execution.', href: '/docs/v1/features/replay', section: 'Features', keywords: 'replay record playback debug diagnose screenshot steps' },
  { title: 'History', description: 'Full run history with pass/fail trends and run comparison.', href: '/docs/v1/features/history', section: 'Features', keywords: 'history runs log trends compare pass fail retention' },
  { title: 'Story', description: 'AI-generated QA narrative for stakeholders.', href: '/docs/v1/features/story', section: 'Features', keywords: 'story narrative stakeholders report ai executive summary' },
  { title: 'Release Management', description: 'Versioned releases with readiness scoring and a structured status workflow.', href: '/docs/v1/features/releases', section: 'Features', keywords: 'release management version ship deploy status planned shipped' },

  // Framework Generation
  { title: 'Cypress', description: 'Generate a complete Cypress automation framework in TypeScript or JavaScript.', href: '/docs/v1/framework-generation/cypress', section: 'Framework Generation', keywords: 'cypress typescript javascript e2e page objects generate' },
  { title: 'Playwright', description: 'Generate a complete Playwright framework across five languages.', href: '/docs/v1/framework-generation/playwright', section: 'Framework Generation', keywords: 'playwright typescript javascript java python csharp multi language' },
  { title: 'Selenium', description: 'Generate a complete Selenium WebDriver framework in Java, Python, or C#.', href: '/docs/v1/framework-generation/selenium', section: 'Framework Generation', keywords: 'selenium java python csharp webdriver testng maven' },
  { title: 'WebdriverIO', description: 'Generate a complete WebdriverIO framework in TypeScript or JavaScript.', href: '/docs/v1/framework-generation/webdriverio', section: 'Framework Generation', keywords: 'webdriverio wdio typescript javascript appium mobile' },
  { title: 'RestAssured', description: 'Generate a complete RestAssured API test framework in Java.', href: '/docs/v1/framework-generation/restassured', section: 'Framework Generation', keywords: 'restassured java api testing rest pojo maven' },

  // API Reference
  { title: 'API Overview', description: 'Authentication, request format, and conventions for the Qlitz REST API.', href: '/docs/v1/api-reference/overview', section: 'API Reference', keywords: 'api authentication token rest http bearer json pagination' },
  { title: 'Projects API', description: 'Create, read, update, and delete projects via the REST API.', href: '/docs/v1/api-reference/projects', section: 'API Reference', keywords: 'projects api crud endpoints get post patch delete' },
  { title: 'Tests API', description: 'Trigger test runs and retrieve results via the REST API.', href: '/docs/v1/api-reference/tests', section: 'API Reference', keywords: 'tests api run results endpoints trigger import ci' },
  { title: 'Releases API', description: 'Manage releases and run readiness assessments via the REST API.', href: '/docs/v1/api-reference/releases', section: 'API Reference', keywords: 'releases api status readiness assess metrics links' },
  { title: 'Frameworks API', description: 'Generate and download automation frameworks via the REST API.', href: '/docs/v1/api-reference/frameworks', section: 'API Reference', keywords: 'frameworks api generate download zip ci pipeline' },
];
