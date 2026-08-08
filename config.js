// The Connected Coach. The only file you should need to touch.
// No secret keys live here. Both keys below are PUBLIC by design, and are the
// same ones already running on the ACA Scorecard.

const CONFIG = {

  // ---------------------------------------------------------------- THE OFFER
  // Everything the page says about price and dates comes from here.

  // What a founding-cohort seat costs. Written exactly as it should appear.
  // Your brief guides NZD $600-750. $700 is the midpoint and is a placeholder
  // until you decide. Change this one string and the whole page updates.
  PRICE: 'NZD $700',

  // Shown under the price as the honest comparison. Empty string hides it.
  PRICE_NOTE: 'Standard cohorts will run at $1,000 plus once this round is proven.',

  // How many seats. Drives the headline, the scarcity line and the form.
  SEATS: 6,

  // When it runs. Left deliberately vague until you set dates, because a
  // wrong date on a sales page is worse than no date.
  // Example once you know: 'Six Tuesdays, 7pm NZT, starting 6 October 2026'
  DATES: 'Six weekly sessions, starting once the cohort is full',

  // -------------------------------------------------------------- THE BUTTONS
  // PAYMENT_LINK is intentionally EMPTY. A founding cohort should be applied
  // for, not bought, so you can choose the five right coaches. Leave it empty
  // and the page collects applications. Paste a Stripe payment link here later
  // and a second "Take my seat" button appears next to the application form.
  PAYMENT_LINK: '',

  // ------------------------------------------------------------- THE PLUMBING
  // Same Kit account and EmailJS service as the ACA Scorecard. Applications
  // land on your Kit list tagged so you can tell them apart from scorecard
  // leads, and EmailJS sends you the application itself.

  // Kit form for this offer. Create a new form in Kit and paste its numeric ID
  // so these leads stay separate from the scorecard list. Falls back to the
  // scorecard form if you leave it as is, which still works but mixes lists.
  KIT_FORM_ID: '9700479',
  KIT_API_KEY: '7ZGWgHFYwhRy6HeLae8Vdw',

  // EmailJS delivers the application to your inbox. SERVICE and PUBLIC keys are
  // the live ones. TEMPLATE_ID needs a new template making (see SETUP.md) with
  // the variables: from_name, from_email, role, sport, stuck, tried, to_email.
  EMAILJS_PUBLIC_KEY: '8UZU07G2ACbBrTHUV',
  EMAILJS_SERVICE_ID: 'service_z2qj93p',
  EMAILJS_TEMPLATE_ID: '',

  // Where applications get emailed.
  NOTIFY_EMAIL: 'sheamcaleese@gmail.com',

  // Fallback only. If EmailJS is not configured yet, the form still works and
  // opens the applicant's mail client addressed to you, so the page is never
  // a dead end.
  FALLBACK_MAILTO: true,

  SHARE_URL: 'https://sheamcaleese.github.io/connected-coach/'
};

if (typeof module !== 'undefined') module.exports = CONFIG;
