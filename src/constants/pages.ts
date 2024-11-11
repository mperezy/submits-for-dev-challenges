type ChallengeType = 'Responsive Developer' | 'Front-end Developer' | 'Fullstack Developer';

type Challenge = {
  type: ChallengeType;
  challenges: Page[];
};

type Page = {
  href: string;
  title: string;
};

const pages: Challenge[] = [
  {
    type: 'Responsive Developer',
    challenges: [
      {
        href: '/device-shop-checkout',
        title: 'Device Shop Checkout',
      },
      {
        href: '/pricing-table',
        title: 'Pricing Table',
      },
      {
        href: '/meet-the-team',
        title: 'Meet the Team',
      },
      {
        href: '/simple-feature',
        title: 'Simple Feature',
      },
      {
        href: '/simple-article-listing',
        title: 'Simple Article Listing',
      },
      {
        href: '/join-our-newsletter',
        title: 'Join Our Newsletter',
      },
    ],
  },
  {
    type: 'Front-end Developer',
    challenges: [],
  },
  {
    type: 'Fullstack Developer',
    challenges: [],
  },
];

export default pages;
