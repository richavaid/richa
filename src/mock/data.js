import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kanooni Guide', // e.g: 'Name | Developer'
  lang: 'IN', // e.g: en, es, fr, jp
  description: 'Once stop for all the legal services and solutions', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey, We are',
  name: 'Kanooni Guide',
  subtitle: 'One stop for all the legal services and solutions',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about_circle.png',
  paragraphOne: 'Kanooni Guide was started 5 years back with the sole aim of providing legal services in a very efficient way. We help by simplifying legal business-related matters and commited in helping individuals, startups, small business owners.',
  paragraphTwo: 'Our mission is to offer affordable, quick legal services to our clients. In these 5 years we have helped many by offering broad spectrum of services which includes Co-operates, Mergers and Acqusition, Financial services, Disputes, Capital market, Tax and Reasl Estate..',
  paragraphThree: 'With us you will get th best legal solution which will help you to grow in fast paced world.',
  
};

// SERVICES DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bank_.png',
    title: 'Banking and Finance',
    info: 'Banking and finance is one of our core and highly recognised areas of expertise.',
    info2: 'Our full suite of services range from project finance, trade and export finance, working capital, acquisition finance, corporate finance, syndicated lending, structured finance, debt capital markets, securitisation, regulatory advice, and product documentation and standardisation.',
   
    
  },
  {
    id: nanoid(),
    img: 'insurance.png',
    title: 'Insurance',
    info: 'Kanooni Guide has a market leading insurance/reinsurance sector practice on both the contentious and non-contentious side..',
    info2: 'On the non-contentious front, we provide assistance with transactional work whereas in relation to contentious work, the Firm has the ability to handle and advise on claims  including Financial & Specialty Lines (Tech E&O; Professional Indemnity; Directors & Officers; Media Liability; Cyber-risks ',
    
    
  },
  {
    id: nanoid(),
    img: 'dispute',
    title: 'Dispute Resolution - Arbitration & Litigation',
    info: 'we work in almost every area of dispute resolution',
    info2: 'Our dispute resolution team regularly advise clients on a variety of contentious matters involving commercial contracts, civil disputes, shareholders’ disputes, enforcement of security, recovery of debts, corporate and securities law, competition law, labour and employment matters, real estate issues and economic offences.',
   
  
  },
  {
    id: nanoid(),
    img: 'corporate.png',
    title: 'Corporate and Commercial',
    info: ' Kannoni Guide key practice areas is corporate and commercial, which extends to various sectors of the economy and wide array of business and transactional matters.',
    info2: 'The Firm’s experience and expertise in providing advice on corporate and commercial contracts and joint ventures, inbound and outbound investment, regulatory and compliance, corporate governance, operational and structuring matters across a broad range of sectors is well recognised..',
   
  
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you want us to work for you? Awsome!!',
  btn: 'Lets Talk',
  email: 'kanooniguide@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/KanooniG',
    },
    
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shivam-tyagi-38b266200/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/kanooniguide/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
