export const resumeData = {
  personal: {
    name: "Saurabh Araiyer",
    title: "Staff Software Engineer & Engineering Leader",
    tagline: "Reason from first principle!",
    location: "Bengaluru, Karnataka, India",
    email: "saurabh.araiyer@gmail.com",
    linkedin: "https://www.linkedin.com/in/saurabharaiyer",
    github: "https://github.com/saurabhsar",
    website: "https://saurabh.araiyer.me",
    blog: "http://decapsulatingabstraction.blogspot.com",
    summary:
      "Accomplished Staff Software Engineer and Technical Leader with 12+ years of experience architecting large-scale distributed systems, multi-tenant cloud platforms, and enterprise AI agent workflows. Proven track record of scaling high-throughput e-commerce platforms to 500,000+ concurrent requests (Flipkart Big Billion Days), engineering mission-critical FinTech infrastructure compliant with RBI/IRDAI/SEBI (Navi), and leading foundational AI-agent ETL and reactive cloud architectures (Statisfy). Passionate about loop engineering, deterministic LLM evaluation, and first-principles software design.",
  },

  stats: [
    { label: "Experience", value: "12+ Years", sub: "Distributed Systems & Platforms" },
    { label: "Peak Scale Handled", value: "500k+ Req/s", sub: "Flipkart Big Billion Days" },
    { label: "Engineering Leadership", value: "Up to 7 Engineers", sub: "Managed & Mentored" },
    { label: "Company Scale", value: "3 Tier-1 Platforms", sub: "Statisfy · Navi · Flipkart" },
    { label: "Awards & Honors", value: "5 Prestigious Awards", sub: "Flipkart CEO Award, HiFi, Karma" },
    { label: "Research Papers", value: "3 Publications", sub: "Springer & IEEE Optics" },
  ],

  skillsCategories: [
    {
      category: "Agentic AI & LLMs",
      description: "Loop engineering, evaluation frameworks, and deterministic agent orchestration",
      skills: [
        { name: "Loop Engineering", level: "Expert", tags: ["Autonomous Loops", "Retry Policies", "Guardrails"] },
        { name: "ASD-STE100 Prompting", level: "Expert", tags: ["Controlled Language", "Precision Schemas"] },
        { name: "Agent Evaluation & Benchmarking", level: "Advanced", tags: ["LLM Evals", "Output Verification"] },
        { name: "Natural Language Querying", level: "Advanced", tags: ["Text-to-SQL", "RAG", "Embeddings"] },
      ],
    },
    {
      category: "Distributed Systems & Architecture",
      description: "High-scale, fault-tolerant, low-latency microservices and platforms",
      skills: [
        { name: "High-Throughput / Low-Latency", level: "Expert", tags: ["500k+ RPS", "Sub-10ms P99"] },
        { name: "Multi-Tenant Architecture", level: "Expert", tags: ["Data Isolation", "Linear Scaling"] },
        { name: "Read-After-Write Consistency", level: "Expert", tags: ["Multi-tier DB", "Caching Topologies"] },
        { name: "Microservices & Event-Driven", level: "Expert", tags: ["Domain Driven", "Asynchronous"] },
        { name: "Regulatory Compliance", level: "Advanced", tags: ["RBI", "SEBI", "IRDAI", "SOX"] },
      ],
    },
    {
      category: "Databases, Caches & Streaming",
      description: "Transactional databases, in-memory caches, and real-time event streaming",
      skills: [
        { name: "Google Cloud Pub/Sub", level: "Expert", tags: ["Event Decoupling", "Streaming"] },
        { name: "Apache Kafka & Apache Storm", level: "Advanced", tags: ["Stream Processing", "Topics"] },
        { name: "Aerospike & Redis", level: "Expert", tags: ["In-Memory Caches", "Zero Latency"] },
        { name: "Apache Cassandra", level: "Advanced", tags: ["NoSQL", "Partitioning"] },
        { name: "PostgreSQL & MySQL", level: "Expert", tags: ["Query Optimization", "Alembic Migrations"] },
      ],
    },
    {
      category: "Cloud, Infrastructure & DevOps",
      description: "Cloud-native infrastructure as code, containerization, and observability",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: "Advanced", tags: ["Cloud Run", "Cloud SQL", "Pub/Sub"] },
        { name: "Amazon Web Services (AWS)", level: "Advanced", tags: ["Athena", "S3", "RDS", "EC2"] },
        { name: "Terraform (IaC)", level: "Advanced", tags: ["Declarative Infra", "State Management"] },
        { name: "Kubernetes (K8s) & Docker", level: "Advanced", tags: ["Microservice Orchestration"] },
        { name: "Observability & SRE", level: "Expert", tags: ["Prometheus", "Alertmanager", "OpenTSDB", "Grafana"] },
      ],
    },
    {
      category: "Languages & Frameworks",
      description: "Core programming languages and engineering frameworks",
      skills: [
        { name: "Java", level: "Expert", tags: ["Spring Boot", "Dropwizard", "JPA/Hibernate", "JVM Tuning"] },
        { name: "Python", level: "Expert", tags: ["FastAPI", "ETL", "AsyncIO", "Automation"] },
        { name: "Go & Bash", level: "Proficient", tags: ["Tooling", "Systems"] },
        { name: "SQL & Schema Design", level: "Expert", tags: ["Complex Queries", "Performance Tuning"] },
      ],
    },
    {
      category: "Leadership & Strategy",
      description: "Team management, cross-functional stakeholder leadership, and hiring",
      skills: [
        { name: "Engineering Management", level: "Advanced", tags: ["Teams of 6-7", "OKRs", "Delivery"] },
        { name: "Cross-Functional Alignment", level: "Expert", tags: ["15+ Partner Teams", "Contract Closure"] },
        { name: "Systemic Mentorship", level: "Expert", tags: ["Code Reviews", "Design Critiques"] },
        { name: "Operational Excellence", level: "Expert", tags: ["Runbooks", "Post-Mortems", "SLAs"] },
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
      companyType: "Enterprise AI Agents · Customer Intelligence",
      summary:
        "Architecting foundational data infrastructure, cloud-native GCP systems, and deterministic AI agent loops powering automated customer success intelligence.",
      accentColor: "indigo",
      logoBadge: "ST",
      highlights: [
        "Architected foundational ETL pipelines processing high-volume customer interaction signals from disparate SaaS systems.",
        "Pioneered deterministic agent workflows using loop engineering principles and ASD-STE100 prompt standardization.",
        "Built 100% Terraform-managed GCP infrastructure with automated CI/CD and security governance.",
        "Engineered extensible dynamic widgets framework and database optimization pipelines with Alembic.",
      ],
      projects: [
        {
          id: "statisfy-etl",
          name: "Foundational Infra for ETL & Reactive Pipelines",
          period: "Jan 2024 - Present",
          tagline: "High-throughput asynchronous data ingestion and transformation layer",
          description:
            "Engineered the core ETL backbone responsible for ingesting, transforming, and persisting heterogeneous customer interaction events, conversation transcripts, and telemetry across dozens of customer platforms.",
          problem:
            "Third-party webhook streams were irregular, bursting, and had unstandardized schemas. Direct synchronous processing caused bottlenecks, rate-limiting, and data drop risks.",
          architecture:
            "Decoupled the ingestion layer using Google Cloud Pub/Sub with dead-letter queue topics and async consumer worker pools. Designed relational PostgreSQL schemas with Alembic migrations, partition pruning, and connection pooling for sub-50ms query response times.",
          keyPoints: [
            "Constructed foundational infra for ETL pipelines with automated retry logic and exponential backoff.",
            "Integrated Google Cloud Pub/Sub for resilient asynchronous message processing and event choreography.",
            "Optimized PostgreSQL databases with composite indices, slow query profiling, and schema evolution via Alembic.",
            "Authored operational excellence rulebooks for zero-downtime maintenance and disaster recovery.",
          ],
          techStack: ["Python", "Google Cloud Pub/Sub", "PostgreSQL", "Alembic", "Docker", "GCP", "REST API"],
          scale: "Real-time streaming ingestion across multi-tenant enterprise accounts",
        },
        {
          id: "statisfy-agentic-ai",
          name: "Agentic AI & Natural Language Querying Engine",
          period: "Jan 2024 - Present",
          tagline: "Deterministic AI agent execution loops with ASD-STE100 prompt schemas",
          description:
            "Built autonomous AI agent capabilities allowing Customer Success Managers (CSMs) to perform complex natural language inquiries into account health, product usage trends, and proactive churn signals.",
          problem:
            "Standard LLM integrations often suffered from non-deterministic outputs, hallucinations, and unverified analytics generation.",
          architecture:
            "Adopted ASD-STE100 (Simplified Technical English) controlled language schemas to enforce semantic precision in agent system prompts. Designed an autonomous agent execution loop with self-correcting validation passes: the loop inspects generated SQL/queries, evaluates syntax and semantic validity, and self-repairs prior to presenting results.",
          keyPoints: [
            "Implemented Loop Engineering: shifting focus from prompt-only tricks to self-evaluating execution loops with deterministic stop/retry criteria.",
            "Applied ASD-STE100 standard to eliminate syntactic ambiguity and significantly reduce human code-review overhead.",
            "Created automated evaluation pipelines verifying agent reliability on complex multi-table analytics queries.",
          ],
          techStack: ["LLMs", "Python", "Loop Engineering", "ASD-STE100", "LangChain", "Vector Embeddings"],
          scale: "Enterprise-grade natural language querying engine",
        },
        {
          id: "statisfy-gcp-terraform",
          name: "Terraform-Based GCP Infrastructure & Cloud Native Stack",
          period: "Jan 2024 - Present",
          tagline: "Declarative Infrastructure-as-Code for multi-environment cloud architecture",
          description:
            "Designed and automated complete cloud infrastructure provisioning on Google Cloud Platform using Terraform modules.",
          problem:
            "Manual resource provisioning creates security drift, inconsistent testing environments, and high operational friction.",
          architecture:
            "Structured modular Terraform configurations covering Cloud Run microservices, Cloud SQL instances, Cloud Pub/Sub topics, VPC networks, Cloud Storage buckets, and fine-grained IAM service accounts.",
          keyPoints: [
            "100% Infrastructure as Code with zero manual cloud modifications.",
            "Automated multi-environment parity (staging, production) deployed via CI/CD.",
            "Enforced least-privilege IAM service identity per microservice component.",
          ],
          techStack: ["Terraform", "Google Cloud Platform", "Cloud Run", "Cloud SQL", "IAM", "GCP VPC"],
          scale: "Production multi-region cloud infrastructure",
        },
        {
          id: "statisfy-integrations",
          name: "Systemic Bootstrap of 3P Integrations",
          period: "Jan 2024 - Present",
          tagline: "Extensible connector ecosystem for enterprise SaaS tools",
          description:
            "Architected a scalable connector framework enabling rapid onboarding of enterprise data sources such as Gong, Avoma, Slack, Paragon, Simplesat, Chorus, and CRM tools.",
          problem:
            "Each 3rd-party vendor provides differing authentication models (OAuth2, API tokens), custom webhooks, rate limits, and response schemas.",
          architecture:
            "Created an adapter pattern engine that normalizes foreign data structures into canonical internal events, with centralized rate-limit tracking and webhook authentication validation.",
          keyPoints: [
            "Seamlessly integrated with Avoma, Gong, Slack, Paragon, Simplesat, Chorus.",
            "Built generic communication infrastructure for outbound alerts (Email, Slack, webhooks).",
            "Designed extendible widgets platform rendering customized insights across external dashboards.",
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
      period: "Feb 2021 - Jan 2024",
      location: "Bengaluru, Karnataka, India",
      companyType: "FinTech Unicorn · Lending · Mutual Funds · Insurance",
      summary:
        "Managed and led high-performing engineering teams (6-7 engineers) delivering mission-critical financial platforms, high-throughput KYC verification, and distributed incident observability.",
      accentColor: "emerald",
      logoBadge: "NV",
      highlights: [
        "Led engineering team of 6 building the centralized KYC Platform serving Lending, Mutual Funds, and Insurance complying with RBI, IRDAI, and SEBI.",
        "Architected Krakatoa Platform for end-to-end 3P financial integrations observability and automated incident management.",
        "Built configurable Application Platform reducing new financial product journey rollout from weeks to days.",
        "Spearheaded enterprise-wide Kubernetes migration and engineered distributed ID generator.",
      ],
      projects: [
        {
          id: "navi-kyc",
          name: "Enterprise KYC Platform",
          period: "Apr 2023 - Jan 2024",
          tagline: "Regulatory-compliant, low/no-code identity verification platform",
          description:
            "Designed, maintained, and optimized the unified KYC Platform serving all Navi business verticals (Personal Loans, Home Loans, Mutual Funds, and Health Insurance). Managed a team of 6 engineers.",
          problem:
            "Each financial business vertical faced distinct, continuously shifting regulatory mandates from RBI, IRDAI, and SEBI. Hardcoded flows resulted in frequent regressions, high partner onboarding friction, and fragmented auditability.",
          architecture:
            "Architected an extensible KYC platform orchestrating document verification (Aadhaar, PAN, CKYC, Digilocker, Video KYC) with modular validation pipelines. Implemented low-code configuration schemas enabling product managers to adjust verification steps without code deployments.",
          keyPoints: [
            "Managed team of 6 engineers; drove technical design, sprint planning, and architectural reviews.",
            "Handled multi-tier data collection, OCR, automated verification, and fraud detection.",
            "Built regulatory compliance consoles serving co-lending banking partners and regulatory audits.",
            "Engineered per-tenant billing audit logs, tracking provider costs across millions of verifications.",
          ],
          techStack: ["Java", "Spring Boot", "MySQL", "Kafka", "Redis", "AWS", "Microservices", "Docker"],
          scale: "Millions of user KYC verifications across Navi's entire ecosystem",
        },
        {
          id: "navi-krakatoa",
          name: "Krakatoa Platform — 3P Integrations Observability & Incident Response",
          period: "Feb 2023 - Mar 2023",
          tagline: "Actionable incident lifecycle management and distributed impact analysis",
          description:
            "Engineered an automated observability and incident lifecycle management platform for hundreds of external third-party integrations (banking APIs, payment gateways, credit bureaus, stock exchange brokers).",
          problem:
            "External partner outages occurred without prior notice, leaving downstream financial transactions hanging and causing customer friction before internal alerts were manually triaged.",
          architecture:
            "Built an event subscriber listening to Prometheus Alertmanager. On anomaly detection, Krakatoa automatically triggered circuit-breaking, initiated incident tracking tickets, and spawned distributed impact analysis queries across production databases and Amazon Athena serverless data lakes.",
          keyPoints: [
            "Autonomous incident management lifecycle triggered by Prometheus Alertmanager signals.",
            "Distributed impact analysis: rapidly calculated affected customer orders and transaction volumes across AWS Athena.",
            "Reduced mean-time-to-detection (MTTD) and mean-time-to-containment (MTTC) by over 70%.",
          ],
          techStack: ["Python", "Prometheus Alertmanager", "AWS Athena", "MySQL", "Distributed Tracing", "Grafana"],
          scale: "Monitored 100+ critical financial third-party touchpoints",
        },
        {
          id: "navi-application-platform",
          name: "Financial Product Application Platform",
          period: "May 2022 - Jan 2023",
          tagline: "Configurable state-machine for financial customer journeys",
          description:
            "Led a team of 7 engineers to decompose user onboarding and application journeys across all financial products into modular, reusable architectural building blocks.",
          problem:
            "Every new financial product launched required writing bespoke user journey workflows from scratch, creating massive code duplication and maintenance liabilities.",
          architecture:
            "Extracted recurring onboarding patterns into a configurable workflow engine. Allowed business units to onboard new lending or insurance journeys purely by composing state machines and validation hooks.",
          keyPoints: [
            "Led agile team of 7 engineers through complex retro-code refactoring and architectural modernization.",
            "Designed failsafe execution guarantees ensuring zero state loss during distributed step transitions.",
            "Enabled rapid A/B testing and funnel optimization through dynamic journey configurations.",
          ],
          techStack: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Kafka", "Microservices"],
          scale: "Universal onboarding engine across all Navi digital products",
        },
        {
          id: "navi-aggregation",
          name: "Multi-Tenant Request Aggregation Platform",
          period: "Dec 2021 - Apr 2022",
          tagline: "Linearly scalable, isolated request batching and fan-out engine",
          description:
            "Engineered a high-performance platform enabling asynchronous request aggregation, enrichment, and dispatch based on dynamic configurable parameters.",
          problem:
            "High-frequency single requests overwhelmed external partner endpoints and generated excessive network overhead and vendor call charges.",
          architecture:
            "Built a multi-tenant, horizontally scalable batching engine adhering to strict tenets: complete data isolation between business lines, linear scalability, immutable audit trail, and configurable sink adapters.",
          keyPoints: [
            "Supported multiple primary tenants and nested sub-tenants with zero cross-tenant data leakage.",
            "Provided configurable request enrichment, custom tagging, and pluggable sink dispatchers.",
            "Guaranteed delivery with at-least-once processing semantics.",
          ],
          techStack: ["Java", "Apache Kafka", "Redis", "Microservices", "Docker"],
          scale: "Processed millions of aggregated requests daily",
        },
        {
          id: "navi-k8s-idgen",
          name: "Kubernetes Migration & Distributed ID Generation",
          period: "Feb 2021 - Jun 2021",
          tagline: "Infrastructure modernization and distributed sequence generation",
          description:
            "Spearheaded organizational containerization onto Kubernetes and designed a distributed sequence generator for human-readable audit IDs.",
          problem:
            "Legacy monolithic deployments lacked autoscaling. Distributed microservices generated fragmented, non-sequential IDs that were impossible to audit manually.",
          architecture:
            "Created reusable Helm templates and CI/CD automation to migrate multiple backend services to Kubernetes clusters. Developed an incremental, human-readable distributed ID generation algorithm using Redis Lua scripts ensuring minimal sequence holes and per-tenant isolation.",
          keyPoints: [
            "Mentored and guided cross-functional teams in adopting Kubernetes deployment best practices.",
            "Engineered distributed ID generation algorithm guaranteeing human readability and monotonicity across high-concurrency clusters.",
          ],
          techStack: ["Kubernetes (EKS)", "Docker", "Helm", "Redis", "Java", "CI/CD"],
          scale: "Company-wide infrastructure adoption",
        },
      ],
    },

    {
      id: "flipkart",
      company: "Flipkart",
      role: "Senior Software Engineer / Lead Engineer",
      period: "May 2015 - Jan 2021",
      location: "Bengaluru, Karnataka, India",
      companyType: "E-Commerce Market Leader · Pricing, Affordability & Order Path",
      summary:
        "5.5+ years of driving core transactional architecture across Order Path, Pricing & Promotions, and Affordability charters. Handled 500k+ concurrent requests during peak Big Billion Days (BBD).",
      accentColor: "blue",
      logoBadge: "FK",
      highlights: [
        "Architected APEX 2.1 exchange platform with multi-tier database (Cassandra + Redis) for strong read-after-write consistency.",
        "Led Assured Buyback Programme order-path integration across 20+ microservices and 8-10 upstream/downstream teams.",
        "Scaled microservices to withstand 500,000+ concurrent requests during The Big Billion Days 2016 and 2017.",
        "Honored with 4 marquee awards: Flipkart CEO Excellence Award (2017), two HiFi Awards, and Instant Karma Award.",
      ],
      projects: [
        {
          id: "flipkart-apex",
          name: "APEX 2.1 & APEX V2 — Device Exchange Platform",
          period: "May 2019 - Dec 2020",
          tagline: "Scalable multi-tenant exchange platform with Cassandra & Redis",
          description:
            "Built the core exchange platform enabling customers to trade in used devices for instant discounts on Flipkart orders. Central engineering team anchor collaborating across 15+ cross-functional teams.",
          problem:
            "Exchange transactions required complex coordination across product discovery, checkout, forward delivery, field verification, and reverse logistics. Previous architectures could not scale under Big Billion Days peak write loads.",
          architecture:
            "Engineered a multi-tenant platform with a multi-tier database topology: Apache Cassandra for resilient, partitioned write-heavy storage, and Redis for microsecond read caches. Developed a custom read-after-write consistency layer guaranteeing transactional updates across order transitions.",
          keyPoints: [
            "Central team anchor leading technical contract negotiations across 15+ upstream and downstream teams.",
            "Onboarded Cassandra with automated backup, repair, and disaster recovery procedures.",
            "Designed and implemented diagnostic device grading algorithms for pickup agents.",
            "Mentored junior developers through architectural reviews and comprehensive design closures.",
          ],
          techStack: ["Java", "Apache Cassandra", "Redis", "MySQL", "Dropwizard", "Microservices"],
          scale: "15+ cross-functional teams, multi-tier data architecture supporting millions of exchanges",
        },
        {
          id: "flipkart-abb",
          name: "Assured Buyback (ABB) Programme",
          period: "Mar 2017 - Apr 2018",
          tagline: "Affordability program touching 20+ internal microservices and 10 order-path teams",
          description:
            "Part of core team that designed the technical roadmap, solutioned, and implemented the end-to-end Assured Buyback Redemption journey from Add-to-Cart to reverse logistics fulfillment.",
          problem:
            "Assured Buyback had to seamlessly integrate into every critical step of the high-throughput order path without increasing P99 latency by more than 5 milliseconds.",
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
          tagline: "Hardening high-throughput transactional systems for 500,000+ concurrent requests",
          description:
            "Stress tested, profiled, and scaled the offers and pricing engine to withstand massive shopping spikes during India's premier e-commerce festival.",
          problem:
            "Flash sales and festival traffic spikes generated extreme load, leading to thread pool exhaustion, JVM stop-the-world GC pauses, and cache stampedes.",
          architecture:
            "Used Java Flight Recorder (JFR) to identify lock contention and memory allocation hotspots. Replaced blocking synchronizations with lock-free structures. Optimized JMeter distributed load generation test harnesses. Deployed parallel auto-scaling microservices fronted by Hystrix circuit breakers and OpenTSDB metrics.",
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
      companyType: "Global Consumer Electronics Leader · Tizen Operating System",
      summary:
        "Contributed to core operating system module incubation and low-level system performance optimization on Tizen OS.",
      accentColor: "cyan",
      logoBadge: "SS",
      highlights: [
        "Performed well in incubation of a new system module in Tizen OS for resource-constrained smart devices.",
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
        "Awarded for exceptional ownership of all Order Path system interactions. Successfully resolved difficult cross-team conversations with multiple engineering stakeholders, drove end-to-end integration testing, and took complete proactive ownership to unblock critical delivery milestones.",
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
        "Awarded First Prize for presenting research on advanced computer networking and routing optimization.",
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
      title: "How LLM's changed the way I work!",
      platform: "LinkedIn Pulse",
      date: "Jul 10, 2024",
      url: "https://www.linkedin.com/pulse/how-llms-changed-way-i-work-saurabh-araiyer-vk9dc",
      summary:
        "Exploring the shift from treating LLMs as simple conversational search engines to treating them as autonomous reasoning partners in complex software engineering workflows.",
    },
    {
      title: "Kafka user's Google-Pub/Sub experience",
      platform: "LinkedIn Pulse",
      date: "Jun 23, 2024",
      url: "https://www.linkedin.com/pulse/kafka-users-google-pubsub-experience-saurabh-araiyer-mv3lc",
      summary:
        "A practical comparison of self-hosted Apache Kafka and Confluent Cloud versus managed Google Cloud Pub/Sub, detailing operational simplicity, ordering tradeoffs, and cost models.",
    },
    {
      title: "Loop Engineering & ASD-STE100 in Agentic Workflows",
      platform: "Technical Note / Post",
      date: "2024",
      url: "https://www.linkedin.com/in/saurabharaiyer",
      summary:
        "Why the loop around an agent matters more than the initial prompt: what it verifies, when it retries, and how aerospace Simplified Technical English (ASD-STE100) eliminates review ambiguity.",
    },
  ],

  education: [
    {
      institution: "National Institute of Technology Durgapur (NIT Durgapur)",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology / Computer Science & Engineering",
      period: "2009 - 2013",
      location: "Durgapur, West Bengal, India",
      activities: [
        "Training and Placement Representative (Oct 2011 - May 2013)",
        "Executive Member, Student's Gymkhana (Jul 2012 - Jun 2013)",
        "Co-organized campus cultural and technical festivals; bridged student-faculty communications",
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
