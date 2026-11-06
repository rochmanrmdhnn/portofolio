import { EMAIL, PATHS, type Legal } from "../content";

// Kebijakan untuk alat publikasi pribadi "Omanlabs Konten" dan "Skolain Konten" (app developer TikTok, YouTube, Meta,
// LinkedIn, Pinterest), plus situs ini. Isi harus tetap benar: tanpa server, token di macOS Keychain, hanya akun
// milik atau kelolaan sendiri. Bila cara kerja alatnya berubah, ubah halaman ini dan tanggal di lib/copy/en.ts.
const APPS = "Omanlabs Konten and Skolain Konten";

export const LEGAL_EN: Legal = {
  privacy: {
    title: "Privacy Policy",
    description: `How ${APPS}, two private publishing tools run by Rochman Ramadhani, and the website omanlabs.tech handle data.`,
    intro: `This policy covers ${APPS}, two private publishing tools I run myself, and this website, omanlabs.tech. "I" means Rochman Ramadhani, an individual based in Jakarta, Indonesia.`,
    sections: [
      {
        id: "tools",
        h: "What the tools do",
        body: [
          "The tools upload videos I made myself, with their captions, to social media accounts I own or manage: my personal accounts and Skolain's official accounts. They run on my own computer. Nobody else can sign up or connect an account, and the tools are not offered to the public.",
          "They work with TikTok, YouTube, Instagram, Facebook Pages, LinkedIn, and Pinterest, each through its official API.",
        ],
      },
      {
        id: "data",
        h: "What data the tools access",
        body: [
          "When I connect one of my accounts through a platform's official sign-in, the platform gives the tool only what I approve:",
          {
            list: [
              "Basic account information, such as the account ID, display name, and profile picture, to confirm the right account is connected.",
              "An access token, and a refresh token where the platform issues one, so the tool can publish to that account.",
              "The videos, captions, and post settings I choose to publish.",
              "The post ID and publishing status the platform returns, so I can confirm a post went live.",
            ],
          },
          "The tools do not read messages, contacts, followers' personal data, or other people's content, and they collect no analytics.",
        ],
      },
      {
        id: "use",
        h: "How the data is used",
        body: [
          "Only to publish my own content and to check that it was published. Data from the platforms is not used for advertising, not sold, not used to build profiles, and not used to train AI models.",
          "Use of information received from Google APIs follows the Google API Services User Data Policy, including its Limited Use requirements.",
          { links: [{ label: "Google API Services User Data Policy", href: "https://developers.google.com/terms/api-services-user-data-policy" }] },
        ],
      },
      {
        id: "storage",
        h: "Where the data is stored",
        body: [
          "On my own computer. Tokens are kept in the macOS Keychain, which stores them encrypted, and videos stay as local files. The tools have no server and no database, and nothing is copied to cloud storage.",
        ],
      },
      {
        id: "sharing",
        h: "Who the data is shared with",
        body: [
          "Data goes only to the platform a post is published on. I do not share it with anyone else.",
          "Voiceovers for my videos are made with ElevenLabs from scripts I write. No data received from the platforms is sent there.",
        ],
      },
      {
        id: "deletion",
        h: "Keeping and deleting data",
        body: [
          "Tokens are kept while an account stays connected. When I disconnect an account or stop using a tool, its tokens are deleted from the Keychain. Post IDs and statuses are kept only as long as I need them to confirm a post.",
          "Access can be revoked at any time from each platform's settings:",
          {
            links: [
              { label: "Google and YouTube: third-party connections", href: "https://myaccount.google.com/connections" },
              { label: "Facebook: apps and websites", href: "https://www.facebook.com/settings?tab=applications" },
              { label: "Instagram: apps and websites", href: "https://www.instagram.com/accounts/manage_access/" },
              { label: "LinkedIn: permitted services", href: "https://www.linkedin.com/psettings/permitted-services" },
            ],
          },
          {
            list: [
              "TikTok: Settings and privacy, then Security and permissions, then Apps and services permissions.",
              "Pinterest: the apps section of your account settings.",
            ],
          },
          `To have any data about you deleted, email ${EMAIL}. I reply within 7 days and finish the deletion within 30 days.`,
        ],
      },
      {
        id: "platforms",
        h: "Platform terms and policies",
        body: [
          "Each platform's own terms and privacy policy also apply. The tools use the YouTube API Services: by using YouTube features you agree to the YouTube Terms of Service, and the Google Privacy Policy applies.",
          {
            links: [
              { label: "YouTube Terms of Service", href: "https://www.youtube.com/t/terms" },
              { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
              { label: "TikTok Privacy Policy", href: "https://www.tiktok.com/legal/privacy-policy" },
              { label: "Meta Privacy Policy", href: "https://www.facebook.com/privacy/policy/" },
              { label: "LinkedIn Privacy Policy", href: "https://www.linkedin.com/legal/privacy-policy" },
              { label: "Pinterest Privacy Policy", href: "https://policy.pinterest.com/privacy-policy" },
            ],
          },
        ],
      },
      {
        id: "website",
        h: "This website",
        body: [
          "omanlabs.tech sets no cookies and runs no analytics or ads. It is hosted on Cloudflare, which processes technical request data such as IP addresses to deliver and protect the site. Links to WhatsApp, LinkedIn, Instagram, and GitHub take you to those services, under their own policies.",
        ],
      },
      {
        id: "children",
        h: "Children",
        body: ["The tools and this website are not directed at children under 13."],
      },
      {
        id: "changes",
        h: "Changes",
        body: ["If this policy changes, I update this page and the date at the top."],
      },
      {
        id: "contact",
        h: "Contact",
        body: ["Questions and requests about this policy go to my email:", { links: [{ label: EMAIL, href: `mailto:${EMAIL}` }] }],
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: `Terms for ${APPS}, two private publishing tools run by Rochman Ramadhani.`,
    intro: `These terms cover ${APPS}, two private publishing tools run by Rochman Ramadhani, an individual based in Jakarta, Indonesia. Connecting an account to either tool means agreeing to these terms.`,
    sections: [
      {
        id: "service",
        h: "The service",
        body: [
          "The tools upload videos and captions to social media accounts through each platform's official API. They are private: I am the only user, and only accounts I own or manage are connected. There is no sign-up and no paid plan.",
        ],
      },
      {
        id: "content",
        h: "Content",
        body: [
          "I am responsible for everything the tools publish. I only publish content I made or have the rights to, and it follows the rules of the platform it is posted on.",
        ],
      },
      {
        id: "platforms",
        h: "Platform rules",
        body: [
          "The tools follow the developer terms and content policies of TikTok, YouTube, Meta, LinkedIn, and Pinterest. When a platform limits or changes its API, the tools follow that change. Using YouTube features means agreeing to the YouTube Terms of Service.",
          {
            links: [
              { label: "YouTube Terms of Service", href: "https://www.youtube.com/t/terms" },
              { label: "TikTok Terms of Service", href: "https://www.tiktok.com/legal/terms-of-service" },
              { label: "Meta Terms of Service", href: "https://www.facebook.com/terms.php" },
              { label: "LinkedIn User Agreement", href: "https://www.linkedin.com/legal/user-agreement" },
              { label: "Pinterest Terms of Service", href: "https://policy.pinterest.com/terms-of-service" },
            ],
          },
        ],
      },
      {
        id: "not-allowed",
        h: "Use that is not allowed",
        body: [
          {
            list: [
              "Connecting an account you do not own or manage.",
              "Publishing spam, or content that infringes someone else's rights.",
              "Getting around a platform's rate limits, review process, or privacy settings.",
            ],
          },
        ],
      },
      {
        id: "privacy",
        h: "Privacy",
        body: ["How the tools handle data is described in the Privacy Policy.", { links: [{ label: "Privacy Policy", href: PATHS.privacy.en }] }],
      },
      {
        id: "ending",
        h: "Ending access",
        body: [
          "Access can be revoked at any time from the connected platform's settings, as the Privacy Policy describes. I may stop running the tools at any time, and when I do, their tokens are deleted.",
        ],
      },
      {
        id: "warranty",
        h: "No warranty",
        body: [
          "The tools are provided as they are. Publishing depends on each platform's API, which can change or fail, so I do not guarantee that a post goes out at a given time.",
        ],
      },
      {
        id: "liability",
        h: "Liability",
        body: [
          "To the extent the law allows, I am not liable for indirect losses from using the tools, including a post that fails, is delayed, or is removed by a platform.",
        ],
      },
      {
        id: "law",
        h: "Governing law",
        body: ["These terms are governed by the laws of the Republic of Indonesia."],
      },
      {
        id: "changes",
        h: "Changes",
        body: ["If these terms change, I update this page and the date at the top."],
      },
      {
        id: "contact",
        h: "Contact",
        body: ["Questions about these terms go to my email:", { links: [{ label: EMAIL, href: `mailto:${EMAIL}` }] }],
      },
    ],
  },
};
