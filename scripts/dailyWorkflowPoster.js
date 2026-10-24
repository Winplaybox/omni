/**
 * OMNI AI WORKFLOWS - AUTOMATED DAILY WORKFLOW POSTER
 * Platform: omni.winplaybox.in
 * Execution: Automatically triggered daily via GitHub Actions or Cron
 */

const fs = require('fs');
const path = require('path');

const DAILY_WORKFLOW_POOL = [
  {
    title: "Automated Lead Enrichment & Personalized Cold Outreach Sequence",
    domain: "Sales & Marketing",
    steps: 5,
    summary: "Captures new inbound signups, queries Apollo.io and Clearbit for company headcount and funding, formulates high-relevance pitch angles via GPT-4o, and inserts personalized drafts into HubSpot.",
    topology: `[Stripe Lead Webhook] ──> [Apollo.io Firmographics Query]
                         ──> [GPT-4o Hyper-Personalized Pitch]
                         ──> [Confidence & Lead Score Filter]
                         ──> [HubSpot CRM & Resend Email Queue]`
  },
  {
    title: "Serverless Database Disaster Recovery & Automated S3 Mirroring",
    domain: "Cloud & DevOps",
    steps: 4,
    summary: "Runs every 24 hours to take encrypted point-in-time snapshots of Supabase PostgreSQL clusters, uploads to AWS S3 Glacier with KMS key encryption, and verifies SHA-256 checksums.",
    topology: `[Daily 02:00 AM UTC Cron] ──> [Supabase Snapshot Dump]
                           ──> [KMS Envelope Encryption]
                           ──> [AWS S3 Glacier Cross-Region Replication]
                           ──> [Datadog & Slack Verification Ping]`
  },
  {
    title: "Automated Programmatic SEO Page Generator & Indexing Bot",
    domain: "SEO & Growth",
    steps: 5,
    summary: "Reads long-tail keyword clusters from Airtable, conducts multi-source SERP research, compiles 2,000-word guides with JSON-LD schema, pushes SSG commits to GitHub, and triggers Google Search Console Indexing API.",
    topology: `[Airtable Keyword Seed] ──> [SERP Analysis & Outline Generator]
                        ──> [Next.js SSG Markdown Commit]
                        ──> [Vercel Automated Deployment]
                        ──> [Google Search Console Indexing API]`
  },
  {
    title: "Automated Meeting Transcription & Jira Task Decomposition",
    domain: "Productivity",
    steps: 4,
    summary: "Captures recorded Google Meet / Zoom audio, generates diarized transcripts with Whisper Large, identifies engineering commitments with Claude 3.5 Sonnet, and creates Jira issues with estimated story points.",
    topology: `[Google Meet MP4 Upload] ──> [Whisper Speaker Diarization]
                         ──> [Claude 3.5 Commitment & Task Extraction]
                         ──> [Engineering Lead Slack Review Gate]
                         ──> [Jira Agile Sprint Board Issue Creation]`
  }
];

function generateDailyPost() {
  console.log("=== OMNI AI WORKFLOWS - RUNNING DAILY AUTOMATED POSTER ===");

  const blogPath = path.resolve(__dirname, '../blog.html');
  if (!fs.existsSync(blogPath)) {
    console.error("blog.html not found!");
    process.exit(1);
  }

  let blogContent = fs.readFileSync(blogPath, 'utf8');

  // Pick workflow based on current day of year
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const picked = DAILY_WORKFLOW_POOL[dayOfYear % DAILY_WORKFLOW_POOL.length];

  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const articleId = "auto-wf-" + Date.now();

  const newArticleHtml = `
    <!-- Automated Daily Workflow Drop -->
    <article class="blog-article-full" id="${articleId}">
      <div class="article-meta">
        <span class="wf-card-domain">${picked.domain}</span> &bull; 
        <span>Published: ${dateStr} (Automated)</span> &bull; 
        <span>${picked.steps} Nodes</span>
      </div>
      <h2>${picked.title}</h2>
      <p>${picked.summary}</p>

      <h3>1. Data Flow Topology</h3>
      <div class="topology-box">
${picked.topology}
      </div>

      <a href="index.html#studio" class="btn-primary" style="margin-top: 1rem;">
        <span>Open in Omni Canvas Studio &rarr;</span>
      </a>
    </article>
`;

  // Insert at top of main container in blog.html
  const mainTag = '<main class="container" style="max-width: 960px; padding-bottom: 5rem;">';
  if (blogContent.includes(mainTag)) {
    blogContent = blogContent.replace(mainTag, mainTag + "\n" + newArticleHtml);
    fs.writeFileSync(blogPath, blogContent, 'utf8');
    console.log(`✅ Successfully published automated daily workflow: "${picked.title}" on ${dateStr}!`);
  } else {
    console.warn("Could not find insertion marker in blog.html");
  }
}

generateDailyPost();
