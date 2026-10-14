export const resumeData = {
  personal: {
    name: "Saurabh Araiyer",
    title: "Staff Software Engineer & Platform Architect",
    tagline: "Staff Software Engineer & Platform Architect",
    location: "Bengaluru, Karnataka, India",
    email: "saurabh.araiyer@gmail.com",
    linkedin: "https://www.linkedin.com/in/saurabharaiyer",
    github: "https://github.com/saurabhsar",
    website: "https://saurabh.araiyer.me",
    blog: "http://decapsulatingabstraction.blogspot.com",
    summary:
      "Staff Software Engineer with 13+ years of experience architecting high-throughput distributed systems, mission-critical financial platforms, and cloud-native data backbones. Proven track record of scaling transactional e-commerce infrastructure to 500,000+ concurrent requests during peak flash sales (Flipkart Big Billion Days), engineering multi-vertical regulated FinTech identity platforms compliant with RBI/IRDAI/SEBI (Navi), and building real-time CRM sync, ingestion pipelines and an external developer platform on GCP (Statisfy). Focused on high-availability data topologies, low-latency microservices, and operational resilience.",
  },

  stats: [
    { label: "Engineering Tenure", value: "13+ Years", sub: "Distributed Systems & Platforms" },
    { label: "Peak Concurrency Scaled", value: "500k+ Req/s", sub: "Flipkart Big Billion Days" },
    { label: "Cross-Charter Architecture", value: "15+ Systems", sub: "Order Path & Platform Integration" },
    { label: "Tier-1 Platforms Built", value: "3 Ecosystems", sub: "Statisfy · Navi · Flipkart" },
    { label: "Marquee Engineering Awards", value: "5 Honors", sub: "Flipkart CEO Award, 2x HiFi, Karma" },
    { label: "Peer-Reviewed Publications", value: "3 Papers", sub: "Springer & IEEE Optics" },
  ],

  skillsCategories: [
    {
      category: "Distributed Systems & Core Scale",
      description: "High-throughput, low-latency microservices, consistency models, and transaction topologies",
      skills: [
        { name: "Ultra-High Scale Architecture", level: "Expert", tags: ["500k+ RPS", "Sub-10ms P99", "Flash Sales"] },
        { name: "Multi-Tier Consistency Models", level: "Expert", tags: ["Read-After-Write", "Distributed Caches", "Eventual Consistency"] },
        { name: "Multi-Tenant Platform Design", level: "Expert", tags: ["Data Isolation", "Horizontal Scaling", "Partitioning"] },
        { name: "Microservices & Event-Driven", level: "Expert", tags: ["Domain-Driven Design", "Asynchronous Messaging", "Decoupling"] },
        { name: "High-Availability & Fault Tolerance", level: "Expert", tags: ["Circuit Breakers", "Graceful Degradation", "Failover"] },
      ],
    },
    {
      category: "Data Stores, Caching & Streaming",
      description: "In-memory stores, distributed key-value engines, and event streaming",
      skills: [
        { name: "Aerospike & Redis", level: "Expert", tags: ["In-Memory Caching", "Sub-Millisecond Reads", "Lua Scripts"] },
        { name: "Apache Cassandra", level: "Advanced", tags: ["NoSQL", "Partition Keys", "Multi-DC Replication"] },
        { name: "Google Cloud Pub/Sub", level: "Expert", tags: ["Event Streaming", "Dead-Letter Queues", "Async Processing"] },
        { name: "Apache Kafka & Apache Storm", level: "Advanced", tags: ["Stream Processing", "Partition Ordering", "Consumer Groups"] },
        { name: "PostgreSQL & MySQL", level: "Expert", tags: ["Index Optimization", "Connection Pooling", "Alembic Migrations"] },
      ],
    },
    {
      category: "Platform Engineering & Compliance",
      description: "Configurable business engines, regulatory identity platforms, and audit security",
      skills: [
        { name: "Regulatory KYC Infrastructure", level: "Expert", tags: ["RBI", "IRDAI", "SEBI Compliance", "Multi-Vertical"] },
        { name: "Low-Code / Configurable Engines", level: "Expert", tags: ["State Machines", "Dynamic Funnels", "Zero-Code Changes"] },
        { name: "SOX Audit Governance & Security", level: "Advanced", tags: ["Audit Logging", "Role-Based Access", "Secure Communication"] },
        { name: "Enterprise SaaS Integrations", level: "Expert", tags: ["Canonical Data Models", "Rate Limiting", "Webhook Replay"] },
      ],
    },
    {
      category: "Cloud, Infrastructure & SRE",
      description: "Infrastructure as Code, container orchestration, and incident observability",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: "Advanced", tags: ["Cloud Run", "Cloud SQL", "Pub/Sub", "VPC & IAM"] },
        { name: "Amazon Web Services (AWS)", level: "Advanced", tags: ["Athena", "S3", "RDS", "EKS", "EC2"] },
        { name: "Terraform (IaC)", level: "Advanced", tags: ["Modular Infra", "Multi-Environment Parity", "State Locking"] },
        { name: "Kubernetes & Containers", level: "Advanced", tags: ["Helm", "Pod Scaling", "Microservice Deployment"] },
        { name: "Observability & SRE Automation", level: "Expert", tags: ["Prometheus", "Alertmanager", "OpenTSDB", "Grafana"] },
      ],
    },
    {
      category: "Languages & Frameworks",
      description: "Core systems programming, backend frameworks, and database query engineering",
      skills: [
        { name: "Java", level: "Expert", tags: ["Spring Boot", "Dropwizard", "JPA/Hibernate", "JFR / JVM Profiling"] },
        { name: "Python", level: "Expert", tags: ["Data Pipelines", "AsyncIO", "FastAPI", "Automation"] },
        { name: "SQL & Schema Architecture", level: "Expert", tags: ["Query Optimization", "Complex Joins"] },
        { name: "Go & Bash", level: "Proficient", tags: ["Systems Tooling", "CLI Automation", "Linux Internals"] },
      ],
    },
    {
      category: "Technical Leadership & System Design",
      description: "Cross-functional alignment, technical roadmaps, and architectural governance",
      skills: [
        { name: "System Architecture & RFCs", level: "Expert", tags: ["End-to-End Design", "Contract Closure", "Failure Mode Analysis"] },
        { name: "Cross-Functional Leadership", level: "Expert", tags: ["15+ Partner Charters", "Order Path Coordination", "Stakeholder Alignment"] },
        { name: "Engineering Team Mentorship", level: "Expert", tags: ["Design Reviews", "Code Standards", "Talent Growth"] },
        { name: "Operational Excellence", level: "Expert", tags: ["Post-Mortems", "SLAs & SLOs"] },
      ],
    },
  ],

  experiences: [
    {
      id: "statisfy",
      company: "Statisfy",
      role: "Founding Engineer / Tech Lead",
      period: "Jan 2024 - Present",
      location: "Bengaluru, Karnataka, India",
      companyType: "Enterprise AI & Customer Intelligence Platform",
      summary:
        "Founding engineer. Owned data ingestion, bidirectional CRM sync, the external developer platform, and test infrastructure across backend, frontend and GCP.",
      accentColor: "indigo",
      logoBadge: "ST",
      highlights: [
        "Built real-time Salesforce sync on Change Data Capture, running as a dedicated Cloud Run worker pool with per-stream heartbeats.",
        "Designed bidirectional, multi-CRM sync: values flow in from Salesforce, HubSpot and Gainsight and write back to each CRM with retry limits and a sync-issues console.",
        "Built the customer portal and developer platform: a public SDK, token exchange, publishable keys, custom domains, a public REST API and an MCP server.",
        "Scaled the e2e test platform and took the core ingestion service to 82.8% line coverage, surfacing silent production defects.",
      ],
      projects: [
        {
          id: "statisfy-crm-sync",
          name: "Real-Time & Bidirectional CRM Sync Engine",
          period: "Feb 2025 - Present",
          tagline: "Change Data Capture ingestion and write-back across multiple CRMs",
          description:
            "Built the sync layer that keeps accounts, contacts and opportunities consistent between Statisfy and the customer's CRMs.",
          problem:
            "Polled delta sync left CRM data hours stale, burned API quota, and could not tell a CRM edit apart from a Statisfy edit. Write-back to one CRM did not scale to tenants that run several.",
          architecture:
            "Salesforce CDC subscriber in its own Cloud Run worker pool, applying only changed fields stamped with the Salesforce commit time. Delta sync skips CDC-covered objects. Write-back keeps per-field CRM targets and per-record sync state, and pushes each value to every target CRM in one run.",
          keyPoints: [
            "Per-stream heartbeats feed a daily schedule monitor, so a silent stream is caught within a day.",
            "A record stops retrying after five CRM rejections and appears on a Sync Issues page for admins.",
            "On-demand Force Sync and single-record refresh across Salesforce, HubSpot and Gainsight.",
            "Admin-selectable CDC objects, with automatic Salesforce setup or guided manual steps.",
          ],
          techStack: ["Python", "Salesforce Pub/Sub API", "Cloud Run", "PostgreSQL / AlloyDB", "Cloud Tasks", "React"],
          scale: "Near-real-time sync for enterprise Salesforce tenants",
        },
        {
          id: "statisfy-slack",
          name: "Slack & Conversation Ingestion Pipeline",
          period: "Sep 2024 - Present",
          tagline: "Reliable, accounted-for message ingestion from customer Slack workspaces",
          description:
            "Owned the Slack integration end to end: install, channel-to-customer mapping, real-time ingestion and reconciliation.",
          problem:
            "Socket Mode connections dropped without notice, messages went missing with no trace, and a Slack API call for each message hit rate limits.",
          architecture:
            "HTTP Events API listener beside Socket Mode, with WebSocket heartbeats, health checks and graceful drain. A v2 pipeline publishes a minimal event and decorates it from the database, with no Slack API call per message. A daily reconciliation republishes missed messages through a line-item queue.",
          keyPoints: [
            "Every message the pipeline declines is counted and its reason is logged, so data loss is visible.",
            "Background mapping of new channels to customers, plus archive and uninstall lifecycle handling.",
            "Self-serve install with a per-workspace bot name and avatar.",
            "Call recordings and Slack routed to a priority Cloud Tasks queue.",
          ],
          techStack: ["Python", "Slack Events API", "Socket Mode", "Pub/Sub", "Cloud Tasks", "PostgreSQL"],
          scale: "Continuous ingestion across all customer Slack workspaces",
        },
        {
          id: "statisfy-portal-platform",
          name: "Customer Portal & Developer Platform",
          period: "Jun 2026 - Present",
          tagline: "External SDK, public API and MCP server on one tenant-safe backend",
          description:
            "Built the platform that lets customers ship branded portals and integrate with Statisfy programmatically.",
          problem:
            "External consumers needed scoped, revocable access to tenant data without app sessions, and each new surface risked forking business rules from the main app.",
          architecture:
            "Publishable keys and a token-exchange endpoint issue scoped tokens for the SDK API. Each portal gets its own subdomain, and an hourly reconciler checks custom domains. The public API for surveys and campaigns reuses the app's own service layer, so validation rules stay in one place.",
          keyPoints: [
            "Visibility, watcher and account-sharing rules enforced server-side in the SDK.",
            "The MCP server serves OAuth protected-resource metadata per RFC 9728.",
            "RBAC role for builders to manage portals and keys.",
            "Security hardening for the Google CASA assessment: sandboxed email templates, API docs off in production.",
          ],
          techStack: ["Python", "FastAPI", "TypeScript", "React", "Clerk", "OAuth2", "MCP"],
          scale: "Multi-tenant external API and SDK surface",
        },
        {
          id: "statisfy-e2e",
          name: "End-to-End Test Platform",
          period: "Apr 2026 - Present",
          tagline: "DB-validated end-to-end coverage for pipelines, jobs and APIs",
          description:
            "Scaled the e2e platform from API checks to a full real-Postgres tier with line-coverage measurement.",
          problem:
            "Unit tests mocked the database, so schema-isolation bugs and silent pipeline failures reached production.",
          architecture:
            "A real-Postgres test tier for the raw-SQL layer, black-box pipeline harnesses with vendor stubs, and line-coverage measurement for e2e runs, wired to staging CI.",
          keyPoints: [
            "Took the core ingestion service from 76% to 82.8% line coverage.",
            "Coverage waves found and fixed three silent-failure defects.",
            "DB-validated suites for CRM sync, scheduler and write-back flows.",
          ],
          techStack: ["pytest", "Playwright", "PostgreSQL", "Cloud Run Jobs", "GitHub Actions"],
          scale: "190+ e2e commits contributed",
        },
        {
          id: "statisfy-etl",
          name: "Foundational ETL & Reactive Event Streaming Pipeline",
          period: "Jan 2024 - Present",
          tagline: "Resilient asynchronous data ingestion and transformation backbone",
          description:
            "Engineered the core streaming backbone responsible for ingesting, transforming, and persisting high-velocity interaction records, transcripts, and telemetry across enterprise customer touchpoints.",
          problem:
            "Third-party webhook streams arrived in unpredictable, bursty volumes with disparate payloads. Synchronous processing created severe pipeline stalls, rate-limiting violations, and dropped events.",
          architecture:
            "Architected a decoupled event ingestion layer leveraging Google Cloud Pub/Sub with dead-letter queueing and asynchronous worker pools. Implemented PostgreSQL database schemas with Alembic versioning and composite indexing.",
          keyPoints: [
            "Engineered fault-tolerant ingestion pipelines with exponential backoff and automated retry buffers.",
            "Integrated Google Cloud Pub/Sub for resilient asynchronous message processing and event choreography.",
            "Optimized relational database performance through connection pooling, query tuning, and schema evolution via Alembic.",
          ],
          techStack: ["Python", "Google Cloud Pub/Sub", "PostgreSQL", "Alembic", "Docker", "GCP", "REST API"],
          scale: "Continuous streaming ingestion across enterprise accounts",
        },
        {
          id: "statisfy-gcp-terraform",
          name: "Terraform-Based GCP Infrastructure & Cloud Architecture",
          period: "Jan 2024 - Present",
          tagline: "Declarative Infrastructure-as-Code for multi-environment production stack",
          description:
            "Designed and automated complete cloud infrastructure provisioning on Google Cloud Platform using modular Terraform definitions.",
          problem:
            "Manual resource provisioning caused configuration drift between staging and production, prolonged environment setup, and created security risks.",
          architecture:
            "Authored reusable Terraform modules encapsulating Cloud Run microservices, Cloud SQL database clusters, Pub/Sub messaging topologies, VPC peering, and fine-grained IAM service roles.",
          keyPoints: [
            "Managed Cloud Run, Pub/Sub and IAM resources as code through reusable Terraform modules.",
            "Automated multi-environment parity deployed through declarative CI/CD pipelines.",
            "Enforced zero-trust security postures and least-privilege IAM service access.",
          ],
          techStack: ["Terraform", "Google Cloud Platform", "Cloud Run", "Cloud SQL", "GCP VPC", "IAM"],
          scale: "Multi-environment production cloud infrastructure",
        },
        {
          id: "statisfy-integrations",
          name: "Enterprise SaaS Integration Engine & Connector Bootstrap",
          period: "Jan 2024 - Present",
          tagline: "Canonical adapter architecture for enterprise SaaS ecosystems",
          description:
            "Architected a scalable connector framework enabling rapid onboarding of enterprise data sources such as Salesforce, HubSpot, Gainsight, Gong, Avoma, Chorus, Recall, Outlook, Gmail, Jira, Freshdesk, and Simplesat.",
          problem:
            "Disparate third-party SaaS vendors use differing authentication mechanisms, payload formats, rate limits, and webhook models.",
          architecture:
            "Designed an extensible adapter engine that translates external vendor schemas into normalized canonical internal models, backed by webhook verification and per-vendor retry handling.",
          keyPoints: [
            "Integrated connectors for Salesforce, HubSpot, Gainsight, Gong, Avoma, Chorus, Recall, Outlook, Gmail, Jira, Freshdesk, and Simplesat.",
            "Engineered generic communication infrastructure for transactional outbound notifications (Email, Slack, Webhooks).",
            "Designed extendible dynamic widgets platform rendering custom signals across external dashboards.",
          ],
          techStack: ["Python", "OAuth2", "Webhooks", "Slack API", "REST", "JSON Schema"],
          scale: "Dozens of enterprise SaaS connectors",
        },
      ],
    },

    {
      id: "navi",
      company: "Navi Technologies",
      role: "Engineering Manager / Lead Software Engineer",
      period: "May 2022 - Jan 2024",
      location: "Bengaluru, Karnataka, India",
      companyType: "FinTech Unicorn · Lending · Mutual Funds · Insurance",
      summary:
        "Led core platform engineering charters across hyper-growth FinTech verticals. Architected regulatory-compliant KYC infrastructure, automated incident observability, and high-availability aggregation engines.",
      accentColor: "emerald",
      logoBadge: "NV",
      highlights: [
        "Architected the centralized KYC Platform serving Lending, Mutual Funds, and Insurance in full compliance with RBI, IRDAI, and SEBI regulations.",
        "Built low-code configuration framework enabling new financial business lines and co-lending partners to launch verification journeys in hours.",
        "Engineered Krakatoa Platform for end-to-end third-party financial partner observability, automated circuit-breaking, and blast-radius impact analysis.",
        "Built configurable Financial Product Application Platform and high-throughput multi-tenant request aggregation engine.",
      ],
      projects: [
        {
          id: "navi-kyc",
          name: "Enterprise Regulatory KYC Platform",
          period: "Apr 2023 - Jan 2024",
          tagline: "Mission-critical identity verification engine compliant with RBI, IRDAI & SEBI",
          description:
            "Architected, scaled, and maintained the unified KYC platform serving all Navi business verticals (Cash Loans, Home Loans, Mutual Funds, Health Insurance) and co-lending banking partners.",
          problem:
            "Each financial vertical faced distinct, frequently updated regulatory mandates from RBI, IRDAI, and SEBI. Hardcoded validation flows created release bottlenecks, high partner onboarding friction, and audit compliance vulnerabilities.",
          architecture:
            "Architected an extensible identity verification engine orchestrating document verification (Aadhaar, PAN, CKYC, Digilocker, Video KYC) through pluggable validation pipelines. Designed a low-code configuration schema enabling product teams to configure bespoke verification rules per business line with zero code changes.",
          keyPoints: [
            "Led platform engineering charter; drove system architecture, regulatory audits, and cross-functional technical alignment.",
            "Engineered real-time data collection, OCR, automated verification pipelines, and fraud prevention checks.",
            "Built regulatory compliance consoles and automated audit logging for external co-lending partners and regulatory inspections.",
            "Implemented fine-grained per-tenant cost attribution and usage tracking across millions of third-party API invocations.",
          ],
          techStack: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "AWS", "Microservices", "Docker"],
          scale: "Millions of KYC verifications across Navi's entire multi-vertical ecosystem",
        },
        {
          id: "navi-krakatoa",
          name: "Krakatoa Platform — 3P Integrations Observability & Automated Incident Response",
          period: "Feb 2023 - Mar 2023",
          tagline: "Autonomous incident containment and distributed blast-radius impact analysis",
          description:
            "Built an automated incident response and observability platform monitoring hundreds of external financial integration touchpoints (banking partners, broker networks, payment gateways, credit bureaus).",
          problem:
            "Unannounced partner outages left high-value customer transactions in indeterminate states, leading to support escalations before internal teams could manually diagnose affected accounts.",
          architecture:
            "Developed an automated event consumer subscribed to Prometheus Alertmanager. On anomaly detection, Krakatoa automatically triggered circuit breakers to prevent cascaded failures and initiated distributed blast-radius impact queries across production databases and Amazon Athena serverless data lakes.",
          keyPoints: [
            "Autonomous incident management lifecycle triggered directly by Prometheus Alertmanager signals.",
            "Distributed blast-radius impact analysis: rapidly calculated affected customer orders and transaction volumes across AWS Athena.",
            "Reduced mean-time-to-detection (MTTD) and incident containment time by over 70%.",
          ],
          techStack: ["Python", "Prometheus Alertmanager", "AWS Athena", "MySQL", "Distributed Tracing", "Grafana"],
          scale: "Monitored 100+ critical financial third-party endpoints",
        },
        {
          id: "navi-application-platform",
          name: "Financial Product Journey Application Platform",
          period: "May 2022 - Jan 2023",
          tagline: "Modular state-machine platform for financial customer journeys",
          description:
            "Decomposed complex loan and insurance application journeys across all digital financial products into modular, reusable architectural building blocks.",
          problem:
            "Each new financial product required building customer funnels from scratch, leading to severe code duplication, inconsistent edge-case handling, and prolonged time-to-market.",
          architecture:
            "Extracted recurring onboarding stages into a configurable workflow state machine. Enabled business teams to deploy new lending or insurance customer journeys purely through JSON configurations and validation hooks.",
          keyPoints: [
            "Refactored legacy monolithic onboarding logic into modular, resilient microservices.",
            "Designed state-machine execution guarantees ensuring absolute consistency during distributed step transitions.",
            "Enabled rapid funnel experimentation and dynamic branching with zero code deployments.",
          ],
          techStack: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Kafka", "Microservices"],
          scale: "Universal onboarding platform across all Navi digital financial products",
        },
        {
          id: "navi-aggregation",
          name: "Multi-Tenant Request Aggregation Platform",
          period: "May 2022 - Dec 2022",
          tagline: "Horizontally scalable, isolated request batching and dispatch engine",
          description:
            "Engineered a high-throughput platform enabling asynchronous request aggregation, enrichment, and batch dispatch based on configurable parameters.",
          problem:
            "High-frequency single requests overwhelmed external partner endpoints, causing severe rate-limiting penalties and excessive per-call network costs.",
          architecture:
            "Engineered a multi-tenant, linearly scalable batching engine adhering to strict tenets: complete data isolation between business lines, linear scalability, immutable audit trails, and pluggable sink adapters.",
          keyPoints: [
            "Supported multiple primary business tenants and sub-tenants with zero cross-tenant data leakage.",
            "Provided configurable request enrichment, custom tagging, and pluggable sink dispatchers.",
            "Guaranteed delivery with at-least-once processing semantics.",
          ],
          techStack: ["Java", "Apache Kafka", "Redis", "Microservices", "Docker"],
          scale: "Processed millions of aggregated requests daily",
        },
        {
          id: "navi-k8s-idgen",
          name: "Kubernetes Migration & Distributed Sequence Generator",
          period: "May 2022 - Aug 2022",
          tagline: "Containerization adoption and monotonically increasing distributed ID system",
          description:
            "Spearheaded enterprise-wide containerization onto Kubernetes and designed a distributed sequence generator for human-readable financial transaction IDs.",
          problem:
            "Legacy VM deployments lacked elastic autoscaling. High-concurrency financial services generated fragmented, non-sequential IDs that hindered transaction reconciliation and auditing.",
          architecture:
            "Created reusable Helm deployment blueprints and CI/CD pipelines to onboard backend services onto Kubernetes clusters. Developed an incremental, sequence-ordered distributed ID algorithm using Redis Lua scripts ensuring minimal sequence gaps and tenant isolation.",
          keyPoints: [
            "Led cross-team adoption of Kubernetes container orchestration and deployment best practices.",
            "Engineered distributed ID generation algorithm guaranteeing human readability and monotonicity across high-concurrency clusters.",
          ],
          techStack: ["Kubernetes (EKS)", "Docker", "Helm", "Redis", "Java", "CI/CD"],
          scale: "Company-wide infrastructure modernization",
        },
      ],
    },

    {
      id: "flipkart",
      company: "Flipkart",
      role: "Senior Software Engineer / Lead Engineer",
      period: "May 2015 - Apr 2022 (7 years)",
      location: "Bengaluru, Karnataka, India",
      companyType: "E-Commerce Market Leader · Pricing, Affordability & Order Path",
      summary:
        "7 years of driving core transactional architecture across Order Path, Pricing & Promotions, and Affordability charters. Hardened systems to sustain 500,000+ concurrent requests during peak Big Billion Days.",
      accentColor: "blue",
      logoBadge: "FK",
      highlights: [
        "Architected APEX exchange platform featuring multi-tier storage (Cassandra + Redis) for high write-throughput and strict read-after-write consistency.",
        "Led Assured Buyback technical roadmap and order-path integration across 20+ microservices and 15+ cross-functional teams.",
        "Scaled and performance-tuned microservices to handle 500,000+ concurrent requests during The Big Billion Days 2016 and 2017.",
        "Awarded Flipkart CEO Excellence Award (2017), two HiFi Awards, and Instant Karma Award for technical leadership.",
      ],
      projects: [
        {
          id: "flipkart-apex",
          name: "APEX 2.1 & APEX V2 — Device Exchange Platform",
          period: "May 2019 - Dec 2020",
          tagline: "Scalable multi-tenant exchange platform with Cassandra & Redis",
          description:
            "Architected the core exchange platform enabling customers to trade in used devices for instant purchase discounts. Central engineering anchor collaborating with 15+ cross-functional teams.",
          problem:
            "Exchange transactions required complex coordination across product discovery, checkout, forward delivery, field verification, and reverse fulfillment. High-volume write transactions overwhelmed legacy relational storage during flash sales.",
          architecture:
            "Engineered a multi-tenant platform with a multi-tier database topology: Apache Cassandra for partitioned, write-heavy durability, and Redis for microsecond read caches. Developed a custom read-after-write consistency layer guaranteeing real-time status updates across order transitions.",
          keyPoints: [
            "Central engineering anchor driving interface contracts and architectural alignment across 15+ partner teams.",
            "Onboarded Cassandra with automated backup, repair, and disaster recovery procedures.",
            "Designed and implemented diagnostic device grading algorithms for pickup agents.",
            "Mentored engineering colleagues through rigorous architectural reviews and design closures.",
          ],
          techStack: ["Java", "Apache Cassandra", "Redis", "MySQL", "Dropwizard", "Microservices"],
          scale: "15+ cross-functional teams, multi-tier data architecture supporting millions of exchanges",
        },
        {
          id: "flipkart-abb",
          name: "Assured Buyback (ABB) Programme",
          period: "Mar 2017 - Apr 2018",
          tagline: "Affordability charter integration across 20+ microservices and 10 order-path teams",
          description:
            "Part of core team that designed the technical roadmap, solutioned, and implemented the end-to-end Assured Buyback Redemption journey from Add-to-Cart through post-order reverse logistics.",
          problem:
            "Assured Buyback had to deeply integrate into every critical step of the high-throughput order path without increasing P99 checkout latency by more than 5 milliseconds.",
          architecture:
            "Represented the offers charter across 8-10 order-path teams. Solutioned touchpoints across 20+ microservices. Leveraged Aerospike for sub-millisecond promotion evaluations, MySQL for transactional integrity, and Apache Storm for event streaming.",
          keyPoints: [
            "Solutioned and implemented complete order path integration from cart checkout to doorstep delivery.",
            "Recipient of the Flipkart CEO Excellence Award (Best Project 2017) and Flipkart HiFi Award (2017).",
            "Used Java Flight Recorder and profiling tools to keep redemption latency within strict SLA limits.",
          ],
          techStack: ["Java", "Aerospike", "MySQL", "Apache Storm", "Dropwizard", "Grafana", "Hystrix"],
          scale: "Flagship affordability charter generating massive GMV growth during smartphone launches",
        },
        {
          id: "flipkart-bbd-scale",
          name: "The Big Billion Days Scale Readiness (2016 & 2017)",
          period: "Jun 2016 - Sep 2017",
          tagline: "Hardening transactional systems for 500,000+ concurrent requests",
          description:
            "Stress tested, profiled, and scaled the offers and pricing engine to withstand massive shopping spikes during India's premier e-commerce festival.",
          problem:
            "Flash sales generated unprecedented traffic surges, causing thread pool exhaustion, JVM stop-the-world GC pauses, and cache stampedes.",
          architecture:
            "Used Java Flight Recorder (JFR) to profile lock contention, memory allocation hotspots, and thread synchronization bottlenecks. Replaced blocking synchronizations with lock-free structures. Optimized JMeter distributed load harnesses and deployed parallel auto-scaling microservices with Hystrix circuit breakers and OpenTSDB metrics.",
          keyPoints: [
            "Successfully scaled system to serve over 500,000+ concurrent requests with zero critical outages.",
            "Tuned JVM garbage collection (G1GC) parameters and Linux TCP socket buffers.",
            "Honored with Flipkart HiFi Award by Vice President of Engineering (Feb 2017).",
          ],
          techStack: ["Java Flight Recorder", "JMeter", "OpenTSDB", "Hystrix", "Python", "Linux Kernel Tuning"],
          scale: "500k+ concurrent requests at sub-millisecond latencies",
        },
        {
          id: "flipkart-basket-offers",
          name: "Basket Offer Experience Revamp & Dynamic Promotions",
          period: "Jan 2019 - May 2019",
          tagline: "Dynamic real-time cart upsell and promotion evaluation engine",
          description:
            "Solutioned and enhanced the distributed basket offer evaluation engine to provide intuitive, real-time cart upsell promotions and consistent pricing across distributed caches.",
          problem:
            "Legacy basket offer evaluation caused inconsistent cart values between mobile app and web frontend when items were concurrently modified.",
          architecture:
            "Designed a low-latency evaluation protocol caching offer rules while computing cart discounts on-the-fly with transactional idempotency.",
          keyPoints: [
            "Enabled intuitive upsell recommendations that boosted average basket size.",
            "Ensured price calculation consistency across multi-datacenter distributed environments.",
          ],
          techStack: ["Java", "Dropwizard", "Redis", "Distributed Caching"],
          scale: "Evaluated across every Flipkart cart modification",
        },
        {
          id: "flipkart-regression-sox",
          name: "Test Regression Automation & SOX Compliance",
          period: "Aug 2018 - Mar 2019",
          tagline: "Continuous testing framework and international regulatory compliance",
          description:
            "Built automated regression harness for pricing algorithms using Intuit Karate and led technical audit remediations for SEC/SOX compliance.",
          problem:
            "Pricing and promotion microservices handled millions of dollars daily; any bug risked catastrophic financial leakage. Company growth also necessitated rigorous SOX audit certification.",
          architecture:
            "Engineered automated CI/CD test harness with deep JSON response diffing. For SOX compliance, hardened inter-service authentication, cryptographic audit logs, and actor authorization workflows.",
          keyPoints: [
            "Reduced regression test execution time from days to minutes in CI/CD pipeline.",
            "Represented team tech stack before international SOX auditors; implemented permanent security remediations.",
          ],
          techStack: ["Java", "Intuit Karate", "Cryptography", "Role-Based Access", "CI/CD"],
          scale: "Certified enterprise financial compliance",
        },
        {
          id: "flipkart-datastore-cleanup",
          name: "Distributed Serving Stores Optimization & Cleanup",
          period: "Dec 2015 - Jun 2016",
          tagline: "Automated distributed state machine for zero-downtime data cleanup",
          description:
            "Architected an automated distributed cleanup engine to purge expired promotion and transaction states from live serving stores (Aerospike, Redis, Elasticsearch).",
          problem:
            "Unchecked accumulation of stale promotion records degraded Aerospike RAM efficiency and bloated Redis indexes in live user paths.",
          architecture:
            "Designed an asynchronous state machine using Hibernate and Apache Storm that coordinated distributed transactions and synchronized cleanup across microservices without locks.",
          keyPoints: [
            "Reclaimed significant Aerospike and Redis cluster memory, reducing infrastructure spend.",
            "Executed non-intrusively in background with zero latency penalty to live checkout traffic.",
          ],
          techStack: ["Java", "Python", "Aerospike", "Redis", "Elasticsearch", "Apache Storm", "Hibernate"],
          scale: "Cleaned millions of stale transactional states continuously",
        },
        {
          id: "flipkart-payments-pricing",
          name: "Pricing & Promotion Re-Architecture & Bank Offers",
          period: "Jun 2015 - Sep 2018",
          tagline: "Decoupled order-path evaluation and instant bank discount engine",
          description:
            "Re-architected promotion evaluation in the critical checkout path and developed real-time instant payment discounts (credit card BIN discounts, EMI promotions).",
          problem:
            "Order path microservices suffered latency spikes during partner bank promotions.",
          architecture:
            "Replaced relational lookups with Aerospike low-latency in-memory schemas, reducing order-path evaluation time to single-digit milliseconds.",
          keyPoints: [
            "Awarded Instant Karma Award (Sep 2019) for exceptional order-path integration leadership.",
            "Closed critical integration hurdles across payment gateway partners.",
          ],
          techStack: ["Java", "Aerospike", "MySQL", "Dropwizard", "Microservices"],
          scale: "Processed all payment-based discounts on Flipkart checkout",
        },
      ],
    },

    {
      id: "samsung",
      company: "Samsung Electronics / R&D Institute",
      role: "Software Engineer",
      period: "Jul 2013 - May 2015",
      location: "Noida / Bengaluru, India",
      companyType: "Global Technology Leader · Tizen Operating System",
      summary:
        "Contributed to core operating system module incubation and low-level system performance optimization on Tizen OS.",
      accentColor: "cyan",
      logoBadge: "SS",
      highlights: [
        "Performed incubation of a new system module in Tizen OS for resource-constrained smart devices.",
        "Recognized with prestigious Spot Award by the Director (April 2015).",
        "Optimized inter-process communication (IPC) and memory footprint for embedded services.",
      ],
      projects: [
        {
          id: "samsung-tizen",
          name: "Tizen OS System Module Incubation",
          period: "Jul 2013 - May 2015",
          tagline: "Next-generation OS module architecture and performance tuning",
          description:
            "Incubated and optimized new system software modules for Samsung's open-source Tizen operating system.",
          problem:
            "Embedded devices required strict memory budgets, fast boot sequences, and ultra-efficient inter-process communication.",
          architecture:
            "Engineered modular C/C++ services with lightweight IPC bindings, profiling memory leaks, and streamlining background event handling.",
          keyPoints: [
            "Received Spot Award from Director (Apr 2015) for outstanding incubation performance.",
            "Collaborated with international engineering teams across Korea and India.",
          ],
          techStack: ["C / C++", "Linux", "Tizen OS", "IPC", "Memory Profiling"],
          scale: "Embedded platform software deployed on Samsung consumer devices",
        },
      ],
    },
  ],

  awards: [
    {
      title: "Instant Karma Award",
      organization: "Flipkart",
      date: "Sep 2019",
      icon: "Award",
      description:
        "Conferred for exceptional ownership of core Order Path system integrations. Successfully resolved critical cross-team architectural blockers across multiple engineering stakeholders, drove end-to-end integration testing, and unblocked high-stakes delivery milestones.",
    },
    {
      title: "CEO Excellence Award — Best Project",
      organization: "Flipkart",
      date: "Feb 2018",
      icon: "Trophy",
      description:
        "Prestigious organization-wide CEO award conferred to the Affordability Charter for conceiving, architecting, and launching groundbreaking customer affordability constructs that fundamentally drove Flipkart's business metrics.",
    },
    {
      title: "HiFi Award (Assured Buyback Redemption)",
      organization: "Flipkart",
      date: "Aug 2017",
      icon: "Star",
      description:
        "Conferred for exceptional technical leadership in architecting the roadmap and leading the order-path implementation for the Assured Buyback Programme across 20+ microservices and 10 upstream teams.",
    },
    {
      title: "HiFi Award (Scale Readiness for Big Billion Days)",
      organization: "Flipkart — Vice President of Engineering",
      date: "Feb 2017",
      icon: "Zap",
      description:
        "Conferred by the VP of Engineering for outstanding engineering execution in profiling, stress-testing, and scaling core backend systems to seamlessly serve over 500k+ concurrent requests during peak festival traffic.",
    },
    {
      title: "Spot Award",
      organization: "Samsung Electronics — Director",
      date: "Apr 2015",
      icon: "Sparkles",
      description:
        "Recognized by the Director for exceptional technical execution and velocity in the incubation of a new system module within Tizen OS.",
    },
    {
      title: "Best in Paper Presentation Award",
      organization: "IEEE Student Chapter — NIT Durgapur",
      date: "Jan 2010",
      icon: "BookOpen",
      description:
        "Awarded First Prize for presenting research on advanced computer networking and heuristic routing optimization.",
    },
  ],

  publications: [
    {
      title: "Design of light-tree based multicast traffic grooming in WDM mesh networks",
      journal: "Journal of Optics, Springer",
      date: "August 6, 2014",
      url: "http://link.springer.com/article/10.1007%2Fs12596-014-0211-z",
      abstract:
        "In this paper, we design an optimization problem for grooming multicast traffic requests in WDM mesh networks. The objective is to minimize network cost by minimizing optical splitters and total wavelengths. We propose a heuristic algorithm called Priority based Sub-Light Tree Grooming (PSLTG) to achieve scalability for larger networks, outperforming Sub-Light Tree Saturated Grooming (SLTSG) and MTG algorithms.",
      tags: ["Optical Networks", "Graph Algorithms", "Heuristic Optimization", "Springer"],
    },
    {
      title: "Multicast Traffic Grooming based Light-tree in WDM Mesh Networks",
      journal: "Springer Science & Business Media",
      date: "December 28, 2013",
      url: "https://www.sciencedirect.com/science/article/pii/S2212017313005987",
      abstract:
        "This paper proposes a heuristic algorithm called Saturated-Light-Tree based Multicast Traffic Grooming (SLTMTG) that solves grooming, routing, and wavelength assignment problems in optical mesh networks to minimize port costs and wavelength requirements.",
      tags: ["Multicast Routing", "Traffic Grooming", "WDM Mesh", "Resource Utilization"],
    },
    {
      title: "Efficient Multicast Routing and Wavelength Assignment using Traffic Grooming",
      journal: "International Conference on Electronics and Communication Trends (ICECT)",
      date: "March 6, 2012",
      url: "https://ieeexplore.ieee.org/",
      abstract:
        "Addressed multicast traffic grooming with minimum wavelength usage and lesser splitting requirements. Proposed a heuristic tree-construction algorithm and First Fit wavelength assignment that minimized collision probability and hardware splitter infrastructure cost.",
      tags: ["ICECT", "NP-Hard Optimization", "Wavelength Assignment", "Algorithms"],
    },
  ],

  articles: [
    {
      title: "Kafka User's Google-Pub/Sub Experience",
      platform: "Architecture Note",
      date: "Jun 2024",
      url: "https://www.linkedin.com/pulse/kafka-users-google-pubsub-experience-saurabh-araiyer-mv3lc",
      summary:
        "Architectural comparison of self-hosted Apache Kafka and Confluent Cloud versus managed Google Cloud Pub/Sub, detailing operational simplicity, ordering tradeoffs, and cost models in production.",
    },
    {
      title: "How LLM's Changed The Way I Work!",
      platform: "Engineering Reflection",
      date: "Jul 2024",
      url: "https://www.linkedin.com/pulse/how-llms-changed-way-i-work-saurabh-araiyer-vk9dc",
      summary:
        "Reflections on evolving from simple conversational prompts to structured, tool-augmented reasoning engines in real-world systems engineering workflows.",
    },
    {
      title: "Reliability & Evaluation in AI Workflows",
      platform: "Technical Note",
      date: "2024",
      url: "https://www.linkedin.com/in/saurabharaiyer",
      summary:
        "Why deterministic verification, bounded execution, and state checks matter far more than prompt tricks when integrating AI capabilities into enterprise data pipelines.",
    },
  ],

  education: [
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani) - WILP",
      degree: "Master of Technology (M.Tech)",
      field: "Software Systems",
      period: "2017 - 2019",
      location: "Pilani, Rajasthan, India",
      activities: [],
    },
    {
      institution: "National Institute of Technology Durgapur (NIT Durgapur)",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology / Computer Science & Engineering",
      period: "2009 - 2013",
      location: "Durgapur, West Bengal, India",
      activities: [
        "Training and Placement Representative (Oct 2011 - May 2013)",
        "Executive Member, Student's Gymkhana (Jul 2012 - Jun 2013)",
        "Organized technical and cultural fests; served as student-administration liaison",
      ],
    },
  ],

  certifications: [
    {
      name: "Machine Learning Basics Nanodegree",
      issuer: "Udacity India",
      date: "Issued Mar 2013",
      credentialUrl: "https://confirm.udacity.com/QCKV7JTU",
    },
    {
      name: "eLitmus pH Test",
      issuer: "eLitmus Evaluation Services",
      score: "97.25 Percentile",
      date: "Mar 2013",
      credentialUrl: null,
    },
  ],
};
