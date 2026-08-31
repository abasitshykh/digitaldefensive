export type Locale =
  | "en"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "nl"
  | "pl"
  | "sv"
  | "da"
  | "fi"
  | "no"
  | "pt"
  | "pt-BR"
  | "sv"
  | "cs"
  | "el";

export interface T {
  navCapabilities: string;
  navProcess: string;
  navStats: string;
  navContact: string;
  navCta: string;

  socOnline: string;
  heroTitleA: string;
  heroTitleB: string;
  heroDesc: string;
  ctaScan: string;
  ctaCaps: string;
  iso: string;
  zt: string;

  capsLabel: string;
  capsTitle: string;
  capsDesc: string;
  caps: { title: string; desc: string }[];

  procLabel: string;
  procTitle: string;
  proc: { label: string; title: string; desc: string }[];

  stat1: string;
  stat2: string;
  stat3: string;
  stat4: string;

  contactLabel: string;
  contactTitle: string;
  contactDesc: string;
  name: string;
  namePh: string;
  email: string;
  emailPh: string;
  org: string;
  orgPh: string;
  message: string;
  messagePh: string;
  sendBtn: string;
  sending: string;
  sentTitle: string;
  sentBody: string;

  footDesc: string;
  footCaps: string;
  footCompany: string;
  footCap1: string;
  footCap2: string;
  footCap3: string;
  footCap4: string;
  footProcess: string;
  footStats: string;
  footContact: string;
  footCareers: string;
  footPrivacy: string;
  footTerms: string;
  allSys: string;
}
