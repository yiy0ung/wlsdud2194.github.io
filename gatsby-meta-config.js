module.exports = {
  title: `neolog`,
  description: `새로움을 찾는 neolog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.neolog.dev`,
  ogImage: `/og-img.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `wlsdud2194/wlsdud2194.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-NCP4WF7BRQ', // Google Analytics Tracking ID
  author: {
    name: `이진영`,
    bio: {
      role: `개발자`,
      description: ['새로움을 발굴하는', '능동적으로 일하는'],
      thumbnail: '', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/wlsdud2194`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/wlsdud2194`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `wlsdud2194@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.03 ~',
        activity: 'Classum, Tech chapter',
        links: {
          post: 'https://www.classum.com',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.08 ~ 2022.02',
        activity: 'Archidraw, R&D 개발팀',
        links: {
          post: 'https://www.archisketch.com',
          github: '',
          demo: '',
        },
      },
      {
        date: '2018.11 ~ 2020.06',
        activity: 'DGSW, B1ND 개발팀',
        links: {
          post: 'https://b1nd.com',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
