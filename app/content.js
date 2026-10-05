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

// Official Rules & Regulations for the art competition, as supplied by the organisers
export const RULES_ARE_FINAL = true;

export const RULES = [
  "Artwork should be A4 size.",
  "Artwork should be enclosed with a border.",
  "Colours should be bright.",
  "A clear picture of the artwork should be uploaded.",
  "Mention your full name and details.",
  "Artwork should reflect the topic.",
  "Images copied from the internet are not allowed.",
  "Traced artworks are not accepted.",
  "Each participant can send only one artwork.",
  "The judges' decision is final. The rights to exclude any artwork are reserved.",
  "Work must be original and created without help from any source.",
  "Work must not be published anywhere else.",
];
