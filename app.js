const CONTACT = {
  email: 'info@solvedestates.co.uk',
  phone: '+44 151 830 0232',
  phoneHref: 'tel:+441518300232',
  whatsapp: '+44 7856 106789',
  whatsappHref: 'https://wa.me/447856106789'
};

const gmailComposeHref = `https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=${encodeURIComponent(CONTACT.email)}`;
const FORM_ACTION = `https://formsubmit.co/${CONTACT.email}`;

const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const arrowUp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18 18 5M7 5h11v11"/></svg>';
const arrowDown = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v15m-6-6 6 6 6-6"/></svg>';
const phoneIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3a2 2 0 0 0-2-2h-2.2a2 2 0 0 0-1.6.8l-1.1 1.4a15 15 0 0 1-7.3-7.3l1.4-1.1A2 2 0 0 0 9 7.2V5a2 2 0 0 0-2-2Z"/></svg>';
const mailIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg>';
const chatIcon = '<svg class="whatsapp-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>';

const pages = {
  selling: {
    nav: 'Selling', eyebrow: 'Selling', title: 'A better way to sell.', intro: 'From valuation to completion.',
    image: '/assets/terraced-homes.jpg', imageAlt: 'A street of terraced homes',
    heading: 'We take care of the sale.',
    paragraphs: ['Your dedicated contact manages the process and keeps you informed, from preparing your home for market to handing over the keys.'],
    reasons: [
      ['Value your home', 'We assess your property and agree an asking price with you.'],
      ['Find a buyer', 'We prepare the marketing, manage enquiries and host viewings.'],
      ['Complete the sale', 'We negotiate offers and coordinate the steps to completion.']
    ],
    statement: '£1,500 fixed selling fee. No percentage commission.',
    closingTitle: 'Ready to sell?', closing: [],
    action: 'Book a valuation', href: '/valuation'
  },
  letting: {
    nav: 'Lettings', eyebrow: 'Lettings', title: 'Let with confidence.', intro: 'The right tenant. Ongoing support.',
    image: '/assets/neutral-kitchen.jpg', imageAlt: 'A bright kitchen with neutral finishes',
    heading: 'Letting, handled from start to finish.',
    paragraphs: ['We help set the rent, find and assess a tenant, and support you throughout the tenancy.'],
    reasons: [
      ['Set the rent', 'A rental appraisal based on your property and the market.'],
      ['Find a tenant', 'We handle enquiries, viewings and applicant checks.'],
      ['Look after it', 'Ongoing communication and property inspections.']
    ],
    statement: '',
    closingTitle: 'Ready to let?', closing: [],
    action: 'Get in touch', href: '/contact'
  },
  'property-investment': {
    nav: 'Property Investment', eyebrow: 'Investment', title: 'Invest with clarity.', intro: 'See the potential. Understand the costs.',
    image: '/assets/living-room.jpg', imageAlt: 'A bright, neutrally furnished living room',
    heading: 'Know what you are buying into.',
    paragraphs: ['We look at each property’s rental potential, likely costs and practical demands, then help with letting and management.'],
    reasons: [
      ['Set your brief', 'Tell us your budget, goals and preferred areas.'],
      ['Check the numbers', 'Review realistic rent, costs and any work required.'],
      ['Plan the letting', 'Discuss tenant selection and ongoing property care.']
    ],
    statement: '',
    closingTitle: 'Let’s discuss your plans.', closing: [],
    action: 'Get in touch', href: '/contact'
  },
  properties: {
    nav: 'Properties', eyebrow: 'Find a property', title: 'Find your next place.', intro: 'A more personal property search.',
    image: '/assets/properties-hero.jpg', imageAlt: 'A quiet cobbled mews with pale townhouses',
    heading: 'Your search starts with a conversation.',
    paragraphs: ['Online listings are coming soon. For now, tell us what you are looking for and we will be in touch.'],
    reasons: [],
    statement: '',
    closingTitle: 'Tell us what you need.', closing: [],
    action: 'Get in touch', href: '/contact'
  }
};

function brand() { return '<a class="brand" href="/" aria-label="SOLVED Estates home"><span>SOLVED<span class="brand-dot">.</span></span><small>ESTATES</small></a>'; }
function button(label, href, variant = 'dark') { return `<a class="button button-${variant}" href="${href}"><span>${label}</span>${arrow}</a>`; }
function header(current) {
  const links = [['Selling','/selling'],['Lettings','/letting'],['Property Investment','/property-investment'],['About Us','/about'],['Contact','/contact']];
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header" id="top"><div class="header-inner">${brand()}<nav class="desktop-nav" aria-label="Main navigation">${links.map(([label,href]) => `<a href="${href}" ${current === href.slice(1) ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="header-actions" aria-label="Contact options"><a class="header-contact" href="${CONTACT.phoneHref}" aria-label="Call SOLVED Estates on ${CONTACT.phone}" title="Call ${CONTACT.phone}">${phoneIcon}</a><a class="header-contact" href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp SOLVED Estates on ${CONTACT.whatsapp}" title="WhatsApp ${CONTACT.whatsapp}">${chatIcon}</a><a class="header-contact" href="${gmailComposeHref}" target="_blank" rel="noopener noreferrer" aria-label="Write to ${CONTACT.email} in Gmail" title="Write in Gmail: ${CONTACT.email}">${mailIcon}</a></div><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span><span></span></button></div><nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" hidden>${links.map(([label,href]) => `<a href="${href}">${label}${arrow}</a>`).join('')}<a href="/properties">Properties${arrow}</a><a href="/valuation">Book a valuation${arrow}</a><div class="mobile-contact"><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div></nav></header>`;
}
function footer() {
  return `<footer class="footer"><div class="container footer-main"><div class="footer-brand">${brand()}</div><div class="footer-links"><span class="footer-label">Explore</span><a href="/selling">Selling</a><a href="/letting">Lettings</a><a href="/property-investment">Property Investment</a><a href="/properties">Properties</a><a href="/about">About Us</a></div><div class="footer-links"><span class="footer-label">Get in touch</span><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a><a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp: ${CONTACT.whatsapp}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><a href="/contact">Contact</a></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} SOLVED Estates</span><a href="#top">Back to top ↑</a></div></footer>`;
}
function contactStrip() {
  return `<div class="contact-strip"><a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer">${chatIcon}<span>WhatsApp</span>${arrowUp}</a><a href="${CONTACT.phoneHref}">${phoneIcon}<span>Phone</span>${arrowUp}</a><a href="mailto:${CONTACT.email}">${mailIcon}<span>Email</span>${arrowUp}</a></div>`;
}
function home() {
  return `<main id="main"><section class="home-hero"><div class="container home-hero-layout"><div class="home-hero-content reveal"><p class="eyebrow">SOLVED Estates</p><h1>Property.<br><em>Solved.</em></h1><p class="hero-intro">Sell, let and invest with clear advice and one dedicated contact.</p><div class="hero-actions">${button('Book a valuation','/valuation')}${button('Find a property','/properties','outline')}</div></div><figure class="home-hero-visual reveal"><img src="/assets/solve-living-room.jpg" alt="Elegant living room with a sofa and leafy view" fetchpriority="high"><figcaption><span>SOLVED ESTATES</span><strong>Move with confidence.</strong></figcaption></figure></div></section><section class="intro-section section-pad"><div class="container"><div class="section-heading section-heading-home reveal"><h2 class="home-difference-title">Considered service. Clear results.</h2></div><div class="feature-grid"><article class="feature feature-fee reveal"><span class="feature-number">01 / THE PRICE</span><div class="feature-content"><strong class="feature-big">£1,500</strong><h3>Fixed selling fee</h3><p>One clear price. No percentage commission.</p></div></article><article class="feature feature-person reveal"><span class="feature-number">02 / THE PEOPLE</span><div class="feature-content"><strong class="feature-title">One person.<br>Every step.</strong><p>Speak directly to someone who knows your property.</p></div></article><article class="feature feature-process reveal"><span class="feature-number">03 / THE PROCESS</span><div class="feature-content"><strong class="feature-title">Always moving<br>forward.</strong><p>Hands-on support from first conversation to final signature.</p></div></article></div></div></section><section class="pathway-section section-pad"><div class="container pathway-grid"><div class="pathway-intro reveal"><p class="eyebrow">Our services</p><h2>Expertise for<br><em>every move.</em></h2><figure class="pathway-photo"><img src="/assets/traditional-houses.jpg" alt="Traditional English houses along a quiet street" loading="lazy"><figcaption>From first homes to property portfolios.</figcaption></figure></div><div class="pathway-list reveal"><a href="/selling"><span>01 /</span><strong>Selling</strong><i>${arrowUp}</i></a><a href="/letting"><span>02 /</span><strong>Lettings</strong><i>${arrowUp}</i></a><a href="/property-investment"><span>03 /</span><strong>Property Investment</strong><i>${arrowUp}</i></a></div></div></section>${closingBanner()}</main>`;
}
function closingBanner(title = 'Ready for your next move?', paragraphs = [], action = 'Get in touch', href = '/contact', image = '/assets/home-closing.jpg') {
  return `<section class="closing-banner" style="--closing-image:url('${image}')"><div class="container closing-inner reveal"><div class="closing-photo" aria-hidden="true"></div><div class="closing-text"><p class="eyebrow">SOLVED Estates</p><h2>${title}</h2><div class="closing-copy">${paragraphs.map(p=>`<p>${p}</p>`).join('')}${button(action,href,'light')}</div></div></div></section>`;
}
function innerHero(page) {
  const primary = page.nav === 'Selling' ? button('Book a valuation', '/valuation') : button('Get in touch', '/contact');
  return `<section class="inner-hero"><div class="container inner-hero-grid"><div class="inner-hero-copy reveal"><h1>${page.title}</h1><p>${page.intro}</p><div class="inner-hero-actions">${primary}<a class="button button-outline button-scroll" href="#story"><span>${page.nav === 'Properties' ? 'How we can help' : 'Our approach'}</span>${arrowDown}</a></div></div><figure class="inner-hero-photo reveal"><img src="${page.image}" alt="${page.imageAlt}" loading="eager"></figure></div></section>`;
}
function servicePage(page) {
  const secondary = page.nav === 'Selling' ? '/assets/selling-story.jpg' : page.nav === 'Lettings' ? '/assets/neutral-bedroom.jpg' : page.nav === 'Property Investment' ? '/assets/investment-terrace.jpg' : '/assets/properties-story.jpg';
  const secondaryAlt = page.nav === 'Selling' ? 'A light-filled living room with warm neutral finishes' : page.nav === 'Lettings' ? 'A calm bedroom with warm neutral finishes' : page.nav === 'Property Investment' ? 'Red-brick Victorian homes on a quiet street' : 'A sunlit reception room opening to a garden';
  const processImage = page.nav === 'Lettings' ? '/assets/letting-process.jpg' : page.nav === 'Property Investment' ? '/assets/warm-kitchen.jpg' : '/assets/dining-room.jpg';
  const processAlt = page.nav === 'Lettings' ? 'A bright, well-kept rental apartment living room' : page.nav === 'Property Investment' ? 'A bright kitchen with warm wooden details' : 'A light-filled dining room';
  const closingImage = page.nav === 'Lettings' ? '/assets/letting-closing.jpg' : page.nav === 'Property Investment' ? '/assets/investment-closing.jpg' : page.nav === 'Properties' ? '/assets/properties-closing.jpg' : '/assets/classic-dining-room.jpg';
  return `<main id="main">${innerHero(page)}
    <section class="story-section service-story section-pad" id="story"><div class="container story-grid"><div class="story-content reveal"><span class="section-index">01 / THE APPROACH</span><h2>${page.heading}</h2>${page.paragraphs.map(p=>`<p>${p}</p>`).join('')}</div><figure class="story-photo reveal"><img src="${secondary}" alt="${secondaryAlt}" loading="lazy"><figcaption>SOLVED ESTATES / PROPERTY WITH PURPOSE</figcaption></figure></div></section>
    ${page.reasons.length ? `<section class="process-section section-pad"><div class="container process-layout"><figure class="process-photo reveal"><img src="${processImage}" alt="${processAlt}" loading="lazy"></figure><div class="process-heading reveal"><p class="eyebrow">How it works</p><h2>${page.nav === 'Selling' ? 'Your sale, step by step.' : page.nav === 'Lettings' ? 'Letting, step by step.' : 'Investing, step by step.'}</h2></div><div class="process-list">${page.reasons.map(([heading,copy],i)=>`<div class="process-item reveal"><span>${String(i+1).padStart(2,'0')}</span><div><h3>${heading}</h3><p>${copy}</p></div></div>`).join('')}</div></div></section>` : ''}
    ${page.statement ? `<section class="statement-section service-statement" style="--statement-image:url('/assets/farmhouse-kitchen.jpg')"><div class="container reveal"><span class="section-index">FIXED SELLING FEE</span><p>${page.statement}</p></div></section>` : ''}
    ${closingBanner(page.closingTitle || 'Let’s talk property.',page.closing,page.action,page.href,closingImage)}</main>`;
}
function aboutPage() {
  const page={nav:'About Us',eyebrow:'About us',title:'Experience, made personal.',intro:'Property advice shaped by 15 years of experience.',image:'/assets/curtains-living-room.jpg',imageAlt:'A bright living room with neutral curtains'};
  const principles=[
    ['One contact','Speak directly to someone who knows your property and your plans.'],
    ['Straight answers','Realistic advice on value, timing and the next step.'],
    ['Follow-through','We keep the details moving and you informed throughout.']
  ];
  return `<main id="main">${innerHero(page)}
    <section class="story-section service-story section-pad" id="story"><div class="container story-grid"><div class="story-content reveal"><span class="section-index">01 / OUR STORY</span><h2>Property is personal. So is our approach.</h2><p>SOLVED Estates brings 15 years of property experience to selling, letting and investment. We take time to understand your plans, then guide you through each decision.</p></div><figure class="story-photo reveal"><img src="/assets/about-story.jpg" alt="A calm townhouse study with a writing desk" loading="lazy"><figcaption>SOLVED ESTATES / PROPERTY WITH PURPOSE</figcaption></figure></div></section>
    <section class="process-section section-pad about-process"><div class="container process-layout"><figure class="process-photo reveal"><img src="/assets/about-hallway.jpg" alt="A light-filled entrance hall with an oak staircase" loading="lazy"></figure><div class="process-heading reveal"><p class="eyebrow">How we work</p><h2>Advice you can act on.</h2></div><div class="process-list">${principles.map(([heading,copy],i)=>`<div class="process-item reveal"><span>${String(i+1).padStart(2,'0')}</span><div><h3>${heading}</h3><p>${copy}</p></div></div>`).join('')}</div></div></section>
    ${closingBanner('Let’s talk property.',[],'Get in touch','/contact','/assets/about-closing.jpg')}</main>`;
}
function field(label,name,type='text',extra='') { return `<label class="field"><span>${label}</span><input type="${type}" name="${name}" ${extra} /></label>`; }
function formHidden(subject) { return `<input type="hidden" name="_subject" value="${subject}"><input type="text" name="_honey" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">`; }
function contactPage() {
  return `<main id="main"><section class="contact-main section-pad"><div class="container contact-layout"><div class="reveal"><p class="eyebrow">Direct contact</p><h1>Choose what works for you.</h1><div class="contact-methods"><a href="${CONTACT.phoneHref}">${phoneIcon}<span><strong>Phone</strong><b>${CONTACT.phone}</b></span>${arrowUp}</a><a href="${CONTACT.whatsappHref}" target="_blank" rel="noopener noreferrer">${chatIcon}<span><strong>WhatsApp</strong><b>${CONTACT.whatsapp}</b></span>${arrowUp}</a><a href="mailto:${CONTACT.email}">${mailIcon}<span><strong>Email</strong><b>${CONTACT.email}</b></span>${arrowUp}</a></div><figure class="contact-photo"><img src="/assets/contact-street.jpg" alt="Warm residential townhouses along a quiet street" loading="lazy"></figure></div><div class="form-panel reveal"><p class="eyebrow">Enquiry form</p><h2>Send us a message</h2><form action="${FORM_ACTION}" method="POST" class="enquiry-form">${formHidden('New enquiry from SOLVED Estates website')}<div class="form-row">${field('Name','name','text','autocomplete="name" required')}${field('Email','email','email','autocomplete="email" required')}</div>${field('Phone (optional)','phone','tel','autocomplete="tel"')}<fieldset class="choice-field"><legend>What can we help with?</legend><div class="choice-list">${['Selling','Buying','Lettings','Property Investment','Something else'].map(v=>`<label><input type="radio" name="enquiry_type" value="${v}" required><span>${v}</span></label>`).join('')}</div></fieldset><label class="field"><span>Message</span><textarea name="message" rows="5" required></textarea></label><button class="button button-dark submit-button" type="submit"><span>Send enquiry</span>${arrow}</button><p class="form-note">We will use your details to respond to your enquiry.</p></form></div></div></section></main>`;
}
function valuationPage() {
  const benefits=[['Honest advice','A realistic view of your property and the market.'],['One contact','A dedicated person to guide your next step.'],['Clear plan','Know what to expect before you decide.']];
  return `<main id="main"><section class="valuation-hero"><div class="container valuation-hero-grid"><div class="reveal"><p class="eyebrow">SOLVED Estates / Valuation</p><h1>Know where you stand.</h1><p>Thinking of selling or letting? Start with an honest property valuation.</p>${button('Request a valuation','#valuation-form')}</div><div class="valuation-photo reveal"><img src="/assets/valuation-kitchen.jpg" alt="A bright kitchen with a large garden window" /></div></div></section><section class="valuation-body section-pad"><div class="container valuation-layout"><div class="valuation-aside reveal"><p class="eyebrow">What to expect</p><h2>Advice for your <em>next move.</em></h2><div class="benefit-list">${benefits.map(([heading,copy],i)=>`<div><span>${String(i+1).padStart(2,'0')}</span><div><strong>${heading}</strong><p>${copy}</p></div></div>`).join('')}</div></div><div class="form-panel valuation-form-panel reveal" id="valuation-form"><p class="eyebrow">Start here</p><h2>Request your valuation</h2><form action="${FORM_ACTION}" method="POST" class="enquiry-form">${formHidden('New valuation request from SOLVED Estates website')}<fieldset class="choice-field"><legend>Would you like to sell or let?</legend><div class="choice-list"><label><input type="radio" name="valuation_type" value="Sale" required><span>Sale</span></label><label><input type="radio" name="valuation_type" value="Let" required><span>Let</span></label></div></fieldset>${field('Property postcode or street','property_address','text','autocomplete="street-address" required')}<div class="form-row">${field('First name','first_name','text','autocomplete="given-name" required')}${field('Last name','last_name','text','autocomplete="family-name" required')}</div><div class="form-row">${field('Email','email','email','autocomplete="email" required')}${field('Telephone','telephone','tel','autocomplete="tel" required')}</div><div class="form-row">${field('Preferred date','preferred_date','date','required')}<label class="field"><span>Preferred time</span><select name="preferred_time" required><option value="" disabled selected>Select a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div><fieldset class="choice-field"><legend>Receive occasional property news? (optional)</legend><div class="choice-list"><label><input type="radio" name="property_news" value="Yes"><span>Yes</span></label><label><input type="radio" name="property_news" value="No"><span>No</span></label></div></fieldset><button class="button button-dark submit-button" type="submit"><span>Request a valuation</span>${arrow}</button><p class="form-note">This is a request. We will contact you to arrange a time.</p></form></div></div></section></main>`;
}

const key = (typeof location === 'undefined' ? '/' : location.pathname).replace(/^\/+|\/+$/g,'') || 'home';
const content = key === 'home' ? home() : key === 'about' ? aboutPage() : key === 'contact' ? contactPage() : key === 'valuation' ? valuationPage() : pages[key] ? servicePage(pages[key]) : home();
const pageTitle = `${key === 'home' ? 'Property. Solved.' : key === 'valuation' ? 'Book a valuation' : key === 'contact' ? 'Contact' : key === 'about' ? 'About Us' : pages[key]?.nav || 'SOLVED Estates'} | SOLVED Estates`;
const rendered = header(key) + content + footer();
if (typeof module !== 'undefined' && module.exports) module.exports = { rendered, pageTitle };

if (typeof document !== 'undefined') {
document.title = pageTitle;
const app = document.getElementById('app');
if (!app.dataset.serverRendered) app.innerHTML = rendered;

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const siteHeader = document.querySelector('.site-header');
let scrollTicking = false;
let wasScrolled = null;
function updateScrollState() {
  const isScrolled = window.scrollY > 12;
  if (isScrolled !== wasScrolled) {
    siteHeader.classList.toggle('is-scrolled', isScrolled);
    wasScrolled = isScrolled;
  }
  scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) { requestAnimationFrame(updateScrollState); scrollTicking = true; }
}, { passive: true });
updateScrollState();

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav.hidden = !open;
  document.body.classList.toggle('menu-open',open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    toggle.click(); toggle.focus();
  }
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('in-view'));

const preferredDate = document.querySelector('input[name="preferred_date"]');
if (preferredDate) preferredDate.min = new Date().toLocaleDateString('en-CA');

document.querySelectorAll('.enquiry-form').forEach(form => {
  const button = form.querySelector('.submit-button');
  const buttonLabel = button.querySelector('span');
  const originalLabel = buttonLabel.textContent;
  const status = document.createElement('p');
  status.className = 'form-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  form.append(status);

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (button.disabled) return;

    button.disabled = true;
    buttonLabel.textContent = 'Sending…';
    status.textContent = '';
    status.className = 'form-status';

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const payload = Object.fromEntries(new FormData(form));
      payload._url = window.location.href;
      const response = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.success !== true && result.success !== 'true') {
        throw new Error(result.message || 'Submission failed');
      }
      form.reset();
      status.textContent = 'Thank you. Your enquiry has been submitted. We’ll be in touch shortly.';
      status.classList.add('is-success');
    } catch (error) {
      status.innerHTML = 'We couldn’t send your enquiry. Please try again, or <a href="tel:+441518300232">call us on +44 151 830 0232</a>.';
      status.classList.add('is-error');
      console.error('Enquiry submission failed:', error);
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
      buttonLabel.textContent = originalLabel;
    }
  });
});
}

