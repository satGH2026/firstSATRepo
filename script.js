const sectorMessaging = {
  'Health & Wellness': {
    painPoint: 'help people feel healthier and more confident',
    magnet: 'Free Personalized Wellness Plan',
    proof: 'success stories and before-after results',
    offer: 'a limited-time consultation package'
  },
  Technology: {
    painPoint: 'solve complex workflow problems quickly',
    magnet: 'Productivity Audit Checklist',
    proof: 'case studies with measurable efficiency gains',
    offer: 'a free strategy demo session'
  },
  Education: {
    painPoint: 'support learners in achieving better outcomes',
    magnet: 'Learning Growth Blueprint',
    proof: 'student outcomes and completion improvements',
    offer: 'an enrollment-focused onboarding plan'
  },
  Retail: {
    painPoint: 'attract repeat buyers and increase basket size',
    magnet: 'Seasonal Buyer Guide',
    proof: 'customer reviews and best-selling highlights',
    offer: 'an exclusive first-purchase incentive'
  },
  Finance: {
    painPoint: 'build trust while simplifying financial decisions',
    magnet: 'Financial Readiness Scorecard',
    proof: 'expert testimonials and transparent track records',
    offer: 'a no-obligation portfolio review'
  },
  Hospitality: {
    painPoint: 'create memorable guest experiences that drive loyalty',
    magnet: 'Perfect Stay Planning Checklist',
    proof: 'ratings, testimonials, and guest transformations',
    offer: 'a premium booking or event package'
  }
};

const form = document.getElementById('business-form');
const output = document.getElementById('funnel-output');
const title = document.getElementById('funnel-title');
const subtitle = document.getElementById('funnel-subtitle');
const awarenessCopy = document.getElementById('awareness-copy');
const considerationCopy = document.getElementById('consideration-copy');
const decisionCopy = document.getElementById('decision-copy');
const ctaLink = document.getElementById('cta-link');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const sector = form.sector.value;
  const businessType = form.businessType.value.trim();

  const messaging = sectorMessaging[sector];
  if (!messaging) {
    return;
  }

  title.textContent = `${businessType} Growth Funnel (${sector})`;
  subtitle.textContent = `This funnel framework is designed to help your ${businessType.toLowerCase()} business ${messaging.painPoint}.`;

  awarenessCopy.textContent = `Top-of-funnel: Run awareness ads and social content with a lead magnet like "${messaging.magnet}" to attract your ideal audience.`;
  considerationCopy.textContent = `Middle-of-funnel: Nurture leads with educational emails, webinars, and ${messaging.proof} so prospects see why your ${businessType.toLowerCase()} stands out.`;
  decisionCopy.textContent = `Bottom-of-funnel: Present ${messaging.offer} with a clear urgency-based CTA to convert qualified leads into customers.`;

  const contactUrl = new URL('contact.html', window.location.href);
  contactUrl.searchParams.set('sector', sector);
  contactUrl.searchParams.set('businessType', businessType);
  ctaLink.href = contactUrl.toString();

  output.classList.remove('hidden');
  output.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
