// Campaign details in one place. Items marked TODO are waiting on the organisers.

import artureLogo from "./assets/arture.jpg";
import syfLogo from "./assets/syf.png";
import wellnessLogo from "./assets/wellness-club.png";

export const FORM_URL = "https://forms.gle/rkHUMTWjmPKj9m8z8";

// Logos already include the organisation name, so the text label is only shown when `logo` is null
export const ORGANIZERS = [
  { name: "Arture", logo: artureLogo },
  { name: "The Wellness Club", logo: wellnessLogo },
  { name: "Saudagran Youth Forum", logo: syfLogo },
];

// TODO: add the judges once confirmed, e.g. { name: "Full Name", title: "Artist & Educator" }
export const JUDGES = [];

// TODO: add the official handles, e.g. { platform: "Instagram", handle: "@handle", href: "https://instagram.com/handle" }
export const SOCIAL_LINKS = [];

// Official Rules & Regulations as supplied by the organisers
export const RULES_ARE_FINAL = true;

export const ART_RULES = [
  "Artwork should be A4 size.",
  "Artwork should be enclosed with a border.",
  "Colours should be bright.",
  "A clear picture of the artwork should be uploaded.",
  "Mention your full name and details.",
  "Artwork should reflect the topic.",
  "Images copied from the internet are not allowed.",
  "Traced artworks are not accepted.",
  "One participant can only send one artwork.",
  "Judges' decision is final. Rights for excluding any artwork are reserved.",
  "Work must be original and without help from any source.",
  "Work must not be published anywhere else.",
];

export const WRITING_RULES_EN_UR = [
  {
    heading: "Topic",
    items: [
      "Urdu – Main Na Mano Haar",
      "English – I rise, I fall, I try again",
    ],
  },
  {
    heading: "Font",
    items: [
      "Style – Times Roman",
      "Font size – 12",
      "Space between lines – 1.5",
      "Paragraph – Indented",
    ],
  },
  {
    heading: "No. of words by category",
    items: [
      "A) 08–09 YRS — minimum word count 250",
      "B) 10–12 YRS — minimum word count 250",
      "C) 13–15 YRS — minimum word count 250",
      "D) 16+ YRS — minimum word count 350",
    ],
  },
];

export const WRITING_RULES_AR = [
  {
    heading: "No. of words by category",
    items: [
      "A) 08–09 YRS — word count 250",
      "B) 10–12 YRS — word count 250",
      "C) 13–15 YRS — word count 250",
      "D) 16+ YRS — word count 250",
    ],
  },
  {
    heading: "General",
    items: [
      "Judges' decision is final. Rights for excluding any work are reserved.",
      "Work must be original and without help from any source.",
      "Work must not be published anywhere else.",
    ],
  },
];
