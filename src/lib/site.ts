// Central site / show config. Edit values here, propagate everywhere.

export const site = {
  name: "Stack Wars",
  tagline: "שני מפתחים מקצוות הסטאק, מתווכחים על טכנולוגיה.",
  longDescription:
    "סטאק וורס הוא פודקאסט שבו שני מפתחים — אחד מהפרונטאנד, אחד מהבאקאנד — נפגשים כדי לריב. על שפות, פריימוורקים, כלים, AI, וכל מה שמרגיז מפתחים בעבודה. בלי חסויות, בלי ספונסרים, בלי תשובות נכונות.",
  url: "https://stackwarspod.com",
  email: "stackwarspodcast@gmail.com",
  feedbackFormUrl: "https://forms.gle/3uBXf8Pa2eHX4yJv6",
  // TODO: ערוך את הביוגרפיות בהתאם — אלו טקסטים זמניים.
  hosts: [
    {
      name: "אורי בר-אילן",
      role: "מפתח באקאנד וכלי פיתוח",
      bio: "חי בטרמינל, חושב במערכות, ומשוכנע שכל בעיה אפשר לפתור עם עוד שכבת אבסטרקציה אחת. אולי שתיים.",
    },
    {
      name: "מתן בורנקראוט",
      role: "מפתח פרונטאנד",
      bio: "מאמין שמסך עם פיקסלים תמיד ינצח מסך עם טקסט. כותב, מעצב ורב על UI כבר שנים.",
    },
  ],
  // Listen-on links. Comment out / leave as null until URL is confirmed.
  platforms: {
    spotify: "https://podcasters.spotify.com/pod/show/matan-borenkraout",
    applePodcasts: null as string | null,
    youtube: null as string | null,
    rss: "https://anchor.fm/s/fad7e970/podcast/rss",
  },
  social: {
    twitter: null as string | null,
    github: null as string | null,
  },
} as const;
