interface Nav {
  title: string;
  link: string;
  children?: NavChildren[] | undefined;
}

interface NavChildren {
  title: string;
  link: string;
}

export const navData: Nav[] = [
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'TIPS',
    link: '/tips',
  },
  // {
  //   title: 'Team',
  //   link: '/team',
  // },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  // {
  //   title: 'Insight',
  //   link: '/insight',
  //   children: [
  //     { title: 'Apply', link: '/apply' },
  //     { title: 'Partnership', link: '/partnership' },
  //     { title: 'FAQ', link: '/faq' },
  //   ],
  // },
  {
    title: 'Contact Us',
    link: '/contact',
  },
];
