const portfolioList = [
  {
    title: 'Static Program Analyser',
    imageThumbnail: '/assets/images/cplusplus.webp',
    description:
      'Designed and programmed a parser in C++ that can take in and statically analyze a source program written in SIMPLE and return patterns, relationships and entities.\n\n Collaborated as a team of 6 where we split into three sub-teams to work on different components (source processer, program knowledge base & query processing system) of the project under an AGILE work cycle, worked with Scrum methodology',
    livePreviewURL: '',
    repositoryURL: 'https://github.com/branzuelajohn',
    techStack: [
      {
        tech: 'C++',
        logo: '/assets/svg/cplusplus.svg',
      },
    ],
  },
  {
    title: 'PeerPrep',
    imageThumbnail: '/assets/images/peerprep.webp',
    description:
      'PeerPrep a web application that seeks to help students better prepare themselves for the highly challenging technical interviews.\n\nPeerPrep helps users to find a fellow peer who wants to work on a problem of similar difficulty, and allows them to work together and communicate with each other on the problem.',
    livePreviewURL:
      'http://peerprepfe.s3-website-ap-southeast-1.amazonaws.com/login',
    repositoryURL: 'https://github.com/branzuelajohn/PeerPrep',
    techStack: [
      {
        tech: 'React JS',
        logo: '/assets/svg/react.svg',
      },
      {
        tech: 'Mongo DB',
        logo: '/assets/svg/MongoDB.svg',
      },

      {
        tech: 'Node JS',
        logo: '/assets/svg/Node.js.svg',
      },
      {
        tech: 'Nest JS',
        logo: '/assets/svg/Nest.js.svg',
      },
      {
        tech: 'Tailwind',
        logo: '/assets/svg/tailwind.svg',
      },
      {
        tech: 'Express JS',
        logo: '/assets/svg/Express.svg',
      },

      {
        tech: 'Socket.io',
        logo: '/assets/svg/Socket.io.svg',
      },

      {
        tech: 'AWS',
        logo: '/assets/svg/AWS.svg',
      },
    ],
  },

  {
    title: 'Power NBA Analytics',
    imageThumbnail: '/assets/images/project-nba-analytics.webp',
    description:
      "Power NBA Analytics is a startup project aimed at helping aspiring sports commentators improve their content through data visualizations. The app offers features such as team win rates comparison, team vs NBA statistics, player performance rankings, and salary vs performance analysis. It uses advanced data analytics to provide customizable, low-cost visualizations tailored to basketball teams and individual players' statistics, designed for commentators and sports analysts.\n\nThe project was created by a group of students from the DBA3702 (Descriptive Analytics with R) module at the National University of Singapore. The project uses data visualizations and cleaning techniques primarily with R, while data scraping is done with Python using BeautifulSoup. It utilizes libraries like Shiny, ggplot2, and plotly for visualizations and data manipulation, and BeautifulSoup for scraping data from websites to gather salary information for the 2020-2021 season.",
    livePreviewURL: 'https://github.com/branzuelajohn/power-nba-analytics',
    repositoryURL: 'https://github.com/branzuelajohn/power-nba-analytics',
    techStack: [
      {
        tech: 'Python',
        logo: '/assets/svg/python.svg',
      },
      {
        tech: 'R',
        logo: '/assets/svg/r.svg',
      },
    ],
  },
];

const experiences = [
  {
    title: 'Fullstack Developer',
    company_name: 'Avaloq, Singapore',
    job_status: 'Full-time',
    date: 'Feb 2024 - Aug 2024',
    points: [
      'Analyzed and resolved critical defects in Web and Mobile Banking solutions for APAC clients, utilizing Angular and Avaloq’s scripting language, ensuring uninterrupted banking operations',
      'L3 support for Web and Mobile Banking for APAC clients, having constant collaboration with banks for new and ongoing feature enhancements.',
      'Managed the continual maintenance and optimization of web and mobile banking services for three major private banks across the Asia-Pacific region, ensuring uninterrupted client satisfaction and operational excellence.',
      'Migrated existing web pages from JSP to Angular RestUI',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Lalia, Singapore ',
    job_status: 'Internship',
    date: 'Dec 2021 - Jun 2022',
    points: [
      'Implemented search and filter functionality, pagination and optimized landing and profile pages using ReactJS and NextJS, reducing page load times.',
      'Developed a comprehensive Image CMS using AWS Amplify and AWS S3, optimizing image load times and storage efficiency',
      'Integrated Google Login functionality into the web application, streamlining user authentication and enhancing onboarding experience.',
      'Developed unit tests with Jest and automated end-to-end testing using Playwright',
    ],
  },
  {
    title: 'Mobile Software Developer Intern',
    company_name: 'Thales, Singapore',
    job_status: 'Internship',
    date: ' May 2021 - Aug 2021',
    points: [
      'Participated in the design, implementation, and validation of mobile iOS applications within the R&D drone project team, adhering to established processes and delivery standards using Swift',
      'Implemented RESTful API and Websocket integration for seamless data exchange',
      'Utilized RxSwift to dynamically update and track real-time drone data and nearby drones',
    ],
  },
];

export { portfolioList, experiences };
