import { CV_EN, CV_ID, WA_BASE, type Copy } from "../content";

// English, the default at /. Written for readers outside Indonesia: Indonesian institutions get a short gloss
// the first time they appear. No em dashes. Numbers only from PROFIL.md and the deck.
export const EN: Copy = {
  lang: "en",
  meta: {
    title: "Rochman Ramadhani · Forward Deployed Engineer",
    description:
      "Forward Deployed Engineer who helps business owners grow with AI and well-built systems. Founder of Skolain. 6+ years building for banks, hospitals, schools, and government, with the evidence for each.",
    locale: "en_US",
    path: "/",
  },
  wa: WA_BASE + encodeURIComponent("Hi Oman, I'd like to talk about my business."),
  ui: {
    skip: "Skip to the work",
    brand: "Rochman Ramadhani, back to top",
    nav: "Main",
    menu: "Menu",
    close: "Close",
    language: "Language",
    play: "Play video",
    pause: "Pause video",
    proof: "Open the proof",
    proofClose: "Close",
  },
  nav: [
    { href: "#work", label: "Work" },
    { href: "#journey", label: "Career" },
    { href: "#approach", label: "How I work" },
    { href: "#now", label: "Now" },
    { href: "#gear", label: "Gear" },
  ],
  hero: {
    kicker: "Rochman Ramadhani, S.Kom. · Forward Deployed Engineer",
    lines: ["I help", "business owners", "grow", "with AI and systems."],
    sub: "6+ years building systems used in banks, hospitals, schools, and government. Now I work inside your business until the systems and the AI are running.",
    cta: "Chat on WhatsApp",
    secondary: "See the work",
    note: "every number I claim has its proof below",
    alt: "Rochman Ramadhani",
    caption: "just call me Oman",
  },
  manifesto: {
    label: "The numbers",
    text: "50,000+ employees at PT PKSS clock in through an HRIS I architected from scratch. 500+ people use Siloam's HSE system every day, built by a team of 6 engineers I led. 1,600+ teachers, students, and operators use Skolain. BRI has contracted me 3× for its digital products.",
    link: "open the proof, one project at a time",
  },
  work: {
    head: ["Systems people actually ", "use."],
    intro:
      "Seven projects across banking, hospitals, government, and medicine. Each panel opens its proof: the technical detail, my exact role, and footage where there is any.",
    items: [
      {
        id: "hris",
        org: "PrimaSejahtera · PT PKSS",
        title: "Every employee clocks in at the same time.",
        body: "Peak traffic lasts a few minutes each morning, and those are exactly the minutes the system cannot wobble. I designed the architecture from scratch in Rust and Flutter, on 15 on-premises virtual machines orchestrated with Rancher and RKE2.",
        stat: { value: "50,000+", label: "active users" },
        note: "I set up the on-prem infrastructure myself",
      },
      {
        id: "hse",
        org: "HSE · Siloam International Hospitals",
        title: "A safety system for every hospital unit.",
        body: "Used across all hospital units and the head office. As Software Architect I led 6 engineers and owned architecture decisions, code review, and the release schedule. Rust backend, React frontend, all on AWS.",
        stat: { value: "500+", label: "daily users" },
        media: { kind: "video", src: "/assets/hse-rs.mp4", poster: "/assets/hse-rs-poster.jpg", w: 540, h: 960, label: "Siloam HSE system" },
      },
      {
        id: "bri",
        org: "BRI · three engagements, Dec 2022 to Dec 2025",
        title: "The same bank called me back, twice.",
        body: "First the New Delivery System for branch tellers and customer service. Then QLOLA, BRI's wholesale banking platform for corporate clients, including the Perum Bulog integration. Then back to NDS as Senior Software Engineer.",
        stat: { value: "3×", label: "BRI contracts" },
        note: "being called back is a review I can't write myself",
      },
      {
        id: "oca",
        org: "Telkom Indonesia · Omni Communication Assistant",
        title: "A migration built for peak traffic.",
        body: "I proposed moving the backend from NestJS to Go, wrote the plan, and led the work. The goal: use CPU and memory more efficiently, and keep the platform standing when traffic peaks.",
        note: "no savings percentage claimed without measuring it",
      },
      {
        id: "klhk",
        org: "KLHK, the Ministry of Environment and Forestry · Jan to Apr 2024",
        title: "Helping write the national environmental monitoring rules.",
        body: "I took part in the drafting sessions for two technical rules: SPARING for wastewater and CEMS for smokestack emissions. Then I built the platform that sends monitoring data to the national system automatically, on a schedule.",
        media: { kind: "video", src: "/assets/klhk-sparing.mp4", poster: "/assets/klhk-sparing-poster.jpg", w: 540, h: 960, label: "SPARING session at KLHK" },
      },
      {
        id: "frames",
        org: "FRAMES · FKUI × Garuda Indonesia Training Center",
        title: "A fatigue assessment app for flight crews.",
        body: "Launched by the Aviation Medicine specialist program at FKUI, the medical faculty of Universitas Indonesia. I owned the product and built the app. Version 1 was built October to December 2020; version 2 shipped March 7, 2024.",
        media: { kind: "video", src: "/assets/frames-acara-01.mp4", poster: "/assets/frames-acara-01-poster.jpg", w: 360, h: 640, label: "FRAMES launch event" },
      },
      {
        id: "kolegium",
        org: "Kolegium Dokter",
        title: "A membership dashboard for 150,000 general practitioners.",
        body: "As Product Engineer I owned discovery, scoping, and release priorities. The requirements came straight from Kolegium Dokter, with nobody in between.",
        note: "150,000 is the scope it was designed for, not today's active users",
        media: { kind: "video", src: "/assets/kedokteran-01.mp4", poster: "/assets/kedokteran-01-poster.jpg", w: 360, h: 640, label: "Requirements discussion day" },
      },
    ],
  },
  journey: {
    head: ["From a vocational school classroom to a product of my ", "own."],
    chapter: "Chapter",
    items: [
      {
        year: "2017",
        range: "2017 to 2020",
        title: "Vocational school, and already looking for work.",
        body: "SMKN 26 Jakarta, a vocational high school, studying information systems, networks, and applications. Three first places before graduating: Smart Green Garden at SEAMEO SEAMOLEC 2019, Ngajar at Kamp Kreatif SMK 2019, and Bayar at PermataYouthPreneur 2020. In July 2020, my first internship as a Software Developer.",
        note: "competing and interning before graduating were just decisions I made early",
      },
      {
        year: "2020",
        range: "2020 to 2022",
        title: "A team of seven grew to thirty.",
        body: "At PT Lumos Inisiatif Indonesia, first as Software Engineer, then Lead Software Engineer from April 2021. I led the backend, frontend, and mobile teams that took ERP, SCM, and CRM systems to production, and took part directly in hiring and onboarding.",
        note: "the first time I was responsible for people as well as code",
      },
      {
        year: "2022",
        range: "2022 to 2023",
        title: "Into banking, with three engagements at once.",
        body: "The New Delivery System at BRI, Technical Lead for Prima Super App at Infobit, and government systems for the Ministry of Home Affairs. The same year I started an online Information Systems degree at Binus while working full time.",
      },
      {
        year: "2024",
        range: "2023 to 2024",
        title: "Banking, aviation, and the environment in the same year.",
        body: "QLOLA at BRI, FRAMES v2 shipped on March 7, and SPARING and CEMS consulting for KLHK. At the BRI Product Development Conference with Tech in Asia on June 25, 2024, I started taking the product side as seriously as the engineering.",
        media: { kind: "image", src: "/assets/pdc-01.jpg", w: 1400, h: 1050, alt: "The stage at the BRI Product Development Conference with Tech in Asia" },
      },
      {
        year: "2025",
        range: "2024 to 2025",
        title: "Senior in two places at once.",
        body: "Senior Software Engineer at Telkom OCA and on BRI's NDS, then part-time Engineering Manager at Mastah Digital. In March 2025, first place in the Supporter category of BRI's Support System program, with a score of 10/10.",
      },
      {
        year: "2026",
        range: "2025 to 2026",
        title: "June 2026: I stopped being a guest in other people's products.",
        body: "I founded Skolain. On August 8, 2026 I graduated from Binus with an S.Kom. bachelor's degree in Information Systems, GPA 3.85, magna cum laude, after four years of study without once stopping work.",
        note: "what I learned: deciding what to build matters more than how neatly it's built",
        media: { kind: "video", src: "/assets/wisuda.mp4", poster: "/assets/wisuda-poster.jpg", w: 720, h: 1280, label: "Binus graduation procession" },
      },
    ],
  },
  owners: {
    head: ["If ", "you", " run a business."],
    lead: "Four stages I go through with your business. The last one matters most: your team runs it on its own.",
    cta: "Tell me about your business",
    stages: [
      { title: "Get into the business", body: "I come in and watch how your team actually works, day to day." },
      { title: "Find what costs the most time and money", body: "I price out every option before anything gets built." },
      { title: "Build the systems and the AI", body: "AI-assisted workflows, and systems that keep running when lots of people use them." },
      { title: "Stay until your team runs it", body: "I stay involved until your team runs it without me." },
    ],
  },
  now: {
    head: ["What I'm working on ", "now."],
    skolain: {
      role: "Founder & Product Engineer · since June 2026",
      body: "The first product I founded myself: computer-based testing, an LMS, attendance, school management, and e-learning in one school workflow. Built and tested in real classrooms at SMK Jakarta Pusat 1. SMKS YP 17 Baradatu, a school in Lampung, found it through our social media and has subscribed ever since.",
      big: "1,600+",
      bigLabel: "active users: teachers, students, and operators",
    },
    partners: [
      {
        role: "Technology Partner · since May 2026",
        title: "A multi-brand beauty group",
        body: "I advise on technology decisions and on how their internal systems get built. I weigh what a technical choice will cost early, before the team is already building it.",
        note: "a lot like my role at Mastah, except here I come in from outside",
        photos: [{ src: "/assets/hegemoni-01.jpg", alt: "Meeting with the team at a multi-brand beauty group", cap: "Interaksi Kopi, Bekasi", tilt: -2.5, speed: 36 }],
        flip: true,
      },
      {
        role: "AI Learning Partner · since August 2026",
        title: "Learning AI with Coach Rheo",
        body: "Coach Rheo runs doatrto.com and several other businesses. We learn AI together inside his day-to-day operations, then build AI-assisted workflows for the work that repeats every day.",
        note: "same table, learning from the work in front of us",
        photos: [
          { src: "/assets/caezar-01.jpg", alt: "AI learning session with Coach Rheo", cap: "work session", tilt: 2, speed: 24 },
          { src: "/assets/caezar-03.jpg", alt: "Working through a use case with AI alongside Coach Rheo", cap: "taking a use case apart", tilt: -3, speed: 56 },
        ],
      },
    ],
  },
  gear: {
    head: ["What comes to ", "work", " with me."],
    lead: "Yes, I'm an Apple person. Everything runs on one account, so work moves from laptop to phone without emailing files to myself.",
    role: "Main machine",
    specLabel: "of memory, M3 Max chip",
    note: "room to run AI models right on the laptop",
    items: [
      { name: "iPhone", what: "Where the WhatsApp button on this site ends up." },
      { name: "iPad", what: "A second screen next to the Mac." },
      { name: "AirPods Pro", what: "They switch from the Mac to the iPhone on their own when a call comes in." },
      {
        name: "Plaud Note Pro",
        what: "An AI voice recorder. Long conversations turn into transcripts and summaries, so I can focus on listening.",
        note: "the only thing here that isn't Apple",
      },
      { name: "Claude", what: "Someone to think with and write code with, every day." },
    ],
  },
  contact: {
    head: ["Run a business and wondering where AI would ", "fit?"],
    lead: "Message me on WhatsApp, or send a DM on Instagram.",
    cta: "Chat on WhatsApp",
    channels: "Contact",
    docsLabel: "Documents",
    docs: [
      { href: CV_EN, label: "CV, three pages (PDF)", value: "Results, numbers, and the work behind them." },
      { href: CV_ID, label: "CV in Indonesian (PDF)", value: "The Product Engineer version, three pages.", lang: "id" },
    ],
    top: "Back to top",
  },
  legal: {
    label: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    home: "Back to the home page",
    updated: "Last updated November 6, 2026",
  },
  proofs: [
    {
      id: "hris",
      org: "PrimaSejahtera · PT PKSS",
      title: "50,000 employees clocking in at the same time.",
      lead: ["A national-scale HRIS that has to stay calm in exactly the minutes when everyone uses it at once."],
      blocks: [
        {
          kind: "entries",
          items: [
            { k: "Architecture", t: "From scratch", d: "Domain model, API design, and a scaling strategy for high-concurrency traffic. Built with Rust and Flutter." },
            { k: "Infrastructure", t: "On-premises, set up by me", d: "KVM virtualization running 15 virtual machines, orchestrated with Rancher and RKE2 Kubernetes." },
            { k: "Observability", t: "LGTM stack", d: "Loki, Grafana, Tempo, and Mimir as the monitoring platform for every service." },
          ],
        },
      ],
    },
    {
      id: "hse",
      org: "HSE · Siloam International Hospitals",
      title: "A safety system for every hospital unit.",
      kicker: "Health, Safety & Environment",
      media: [{ kind: "video", src: "/assets/hse-rs.mp4", poster: "/assets/hse-rs-poster.jpg", w: 540, h: 960, label: "Siloam HSE system" }],
      blocks: [
        {
          kind: "list",
          items: [
            "Used across every hospital unit and the head office, by 500+ people a day.",
            "As Software Architect, I led 6 engineers and owned architecture decisions, code review, and the release schedule.",
            "Rust backend; Bun, Vite, and React on the frontend.",
            "All infrastructure on AWS: ECS, ECR, RDS PostgreSQL, CloudWatch, S3, ALB, VPC, IAM.",
          ],
        },
      ],
      note: "hospitals are mission-critical: when the system is down, incidents go unrecorded",
    },
    {
      id: "bri",
      org: "BRI (Bank Rakyat Indonesia) · three engagements",
      title: "Contracted three times by the same bank.",
      blocks: [
        {
          kind: "entries",
          items: [
            {
              k: "Dec 2022 to Dec 2023",
              t: "New Delivery System",
              d: "Built and maintained the apps that branch tellers and customer service use, as microservices on OpenShift. Shortened the time it takes to trace production issues with the ELK Stack, Kafka, and Jaeger.",
            },
            {
              k: "Dec 2023 to Aug 2024",
              t: "QLOLA",
              d: "Moved to wholesale banking: the digital platform for corporate clients. Worked inside a banking release cycle that requires layered verification before anything reaches production.",
            },
            {
              k: "Dec 2024 to Dec 2025",
              t: "NDS, back as Senior",
              d: "Kept code quality from slipping through code review and enforced coding standards, and served as the technical reference for other engineers. SAST, DAST, and SonarQube became part of the release cycle instead of a check at the end.",
            },
          ],
        },
        {
          kind: "entries",
          title: "At QLOLA: backend, partner integration phase",
          items: [
            { t: "Perum Bulog integration", d: "Opened a new transaction channel for corporate clients by integrating with Perum Bulog, the state food logistics agency." },
            { t: "Rundeck automation", d: "Less manual work for the operations team in daily processes, through automation and orchestration." },
            { t: "Load testing with Locust", d: "Confirmed the system was ready before release, as corporate banking reliability demands." },
          ],
        },
      ],
      note: "what I took from here: how a bank designs, tests, and ships a product",
    },
    {
      id: "oca",
      org: "Telkom Indonesia · Omni Communication Assistant",
      title: "A migration built for peak traffic.",
      blocks: [
        {
          kind: "entries",
          steps: true,
          items: [
            { t: "I proposed it", d: "A migration to use CPU and memory more efficiently at peak traffic." },
            { t: "I planned it", d: "Moving the backend from NestJS to Go in stages, without taking the service down." },
            { t: "I led it", d: "Execution with the team, focused on keeping the platform resilient as traffic rises." },
          ],
        },
        {
          kind: "list",
          title: "On the same platform",
          items: [
            "New customer channels: Jatis, Meta (WhatsApp, Messenger), and TikTok.",
            "Observability with Prometheus, the LGTM stack, and Datadog.",
            "Event-driven microservices built on Kafka and CDC from MongoDB, on Alibaba Cloud.",
          ],
        },
      ],
      caveat: {
        t: "What I don't claim",
        d: "Efficiency depends on the workload and the architecture. I claim no savings percentage that wasn't measured on the project.",
      },
    },
    {
      id: "klhk",
      org: "KLHK · January to April 2024",
      title: "Helping write the national environmental monitoring rules.",
      kicker: "Ministry of Environment and Forestry, Indonesia",
      media: [{ kind: "video", src: "/assets/klhk-sparing.mp4", poster: "/assets/klhk-sparing-poster.jpg", w: 540, h: 960, label: "SPARING session at KLHK" }],
      blocks: [
        {
          kind: "list",
          items: [
            "Took part in the drafting sessions for the SPARING and CEMS technical rules: the national requirements for how industry must continuously monitor and report what it discharges.",
            "SPARING covers wastewater quality: COD, BOD, pH, TSS, and flow rate.",
            "CEMS covers smokestack air emissions: SO₂, NOₓ, O₂, and particulates.",
            "Built a platform that sends monitoring data to the national system automatically and on schedule, with a manual reporting path as the fallback when a transmission fails.",
          ],
        },
      ],
      note: "two different media, and people often mistake them for one thing",
    },
    {
      id: "frames",
      org: "FRAMES · v1 Oct to Dec 2020 · v2 shipped March 7, 2024",
      title: "A fatigue assessment app for flight crews.",
      kicker: "Fatigue Risk Assessment with MEdical adviceS",
      lead: [
        "Launched by the Aviation Medicine specialist program in the Department of Community Medicine, Faculty of Medicine, Universitas Indonesia, and developed with Garuda Indonesia Training Center and medical experts.",
        "The app assesses flight crews' fatigue risk, physical activity, and sleep habits, and was designed to plug into airline and military aviation systems. My role: Product Engineer, owning the product and building the app.",
      ],
      media: [
        { kind: "image", src: "/assets/frames-launch-01.jpg", w: 1066, h: 711, alt: "FRAMES launch at the Faculty of Medicine, Universitas Indonesia" },
        { kind: "video", src: "/assets/frames-acara-01.mp4", poster: "/assets/frames-acara-01-poster.jpg", w: 360, h: 640, label: "Launch event at FKUI" },
        { kind: "video", src: "/assets/frames-acara-02.mp4", poster: "/assets/frames-acara-02-poster.jpg", w: 360, h: 640, label: "Streamed to hybrid participants" },
      ],
      blocks: [
        {
          kind: "list",
          title: "What I built",
          items: [
            "A questionnaire engine with per-user assessment history, so results can be compared over time instead of used once.",
            "Sleep-habit and physical-activity questions get their own flows and detail screens, because they are scored differently.",
            "Pilot profiles with flight hours, license number, aircraft type, rating, and airline, so every result reads in its operational context.",
            "Scheduled reminders through Firebase Cloud Messaging, and local storage with Room so assessments can be filled in offline.",
          ],
        },
      ],
      caveat: {
        t: "Version notes",
        d: "Version 2 shipped March 7, 2024: Kotlin, MVVM architecture, 108 files. I built version 1 from October to December 2020 with Laravel and Kotlin.",
      },
      note: "crew fatigue is a safety issue, and before this there was no way to assess it independently",
    },
    {
      id: "kolegium",
      org: "Kolegium Dokter · released",
      title: "A membership dashboard for 150,000 general practitioners.",
      media: [{ kind: "video", src: "/assets/kedokteran-01.mp4", poster: "/assets/kedokteran-01-poster.jpg", w: 360, h: 640, label: "Requirements discussion day" }],
      blocks: [
        {
          kind: "list",
          items: [
            "As Product Engineer, I own discovery, scoping, and release priorities.",
            "National membership, scoped for up to 150,000 general practitioners across Indonesia.",
            "Requirements are discussed directly with Kolegium Dokter, with no intermediary.",
          ],
        },
      ],
      caveat: { t: "What I don't claim", d: "150,000 is the scope the system was designed for, not the number of active users today." },
    },
    {
      id: "skolain",
      org: "Skolain · from field findings to today",
      title: "Grade recaps that took days. The same data typed in twice.",
      blocks: [
        {
          kind: "compare",
          a: "Before",
          b: "After",
          rows: [
            { label: "Grade recaps", a: "Days of work, gathered by hand from many files.", b: "Real time. Daily class assessments and exams are already in the system." },
            { label: "Exams", a: "Paper: copied, proctored, then marked one by one.", b: "Computer-based tests with anti-cheating and automatic grading." },
            { label: "Attendance", a: "Google Forms and Excel, re-tallied at the end of every month.", b: "An attendance module that feeds straight into one workflow." },
            { label: "Core data", a: "Typed in twice: once in Dapodik, the national school database, and once in the school's own system.", b: "Dapodik integration, one source of data." },
            { label: "e-Rapor", a: "Manual exports to the government report-card app, often in a format that doesn't match.", b: "An e-Rapor compatible module. This is what keeps schools using it." },
          ],
        },
        {
          kind: "entries",
          title: "Today",
          items: [
            { k: "Adoption", t: "1,600+ active users", d: "Teachers, students, and operators use it, well beyond the admin accounts." },
            { k: "Development partner", t: "SMK Jakarta Pusat 1", d: "The school where the product was built and tested in real classrooms." },
            { k: "Subscribing school", t: "SMKS YP 17 Baradatu, Lampung", d: "Found Skolain through our social media, and has subscribed ever since." },
          ],
        },
        {
          kind: "entries",
          title: "My role: from a teacher's complaint to a release",
          steps: true,
          items: [
            { t: "Discovery", d: "Sit down with teachers, operators, and principals. Look for the most frequent complaint, not the loudest one." },
            { t: "User stories and acceptance criteria", d: "Findings become scope decisions the team can execute, written up in Jira." },
            { t: "Flows and sequences", d: "User flows and sequence diagrams in Mermaid, so nobody has to guess their part." },
            { t: "Release", d: "Release priorities, onboarding, and teacher training until the product is actually in use." },
            { t: "Measure", d: "Feedback from the field feeds the next quarter's iteration." },
          ],
        },
      ],
      note: "the multi-tenant architecture I designed keeps costs stable, even during simultaneous exams",
    },
  ],
};
