import TechIcon, { TechIconName } from './TechIcon';

const frontend: TechIconName[] = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind',
  'React',
  'Redux',
  'Three.js',
  // 'Vue',
  // 'Solid',
  // 'Svelte',
];

const backend: TechIconName[] = ['Node.js', 'Express.js', 'Python', 'GraphQL'];

const databases: TechIconName[] = [
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Mongoose',
];

const devOps: TechIconName[] = ['Docker', 'Kubernetes', 'AWS', 'Google Cloud'];

const misc: TechIconName[] = ['Next.js', 'Jest', 'Cypress', 'Webpack'];

type TechnologyBadge = {
  src: string;
  alt: string;
};

const frontendBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    alt: 'JavaScript',
  },
  {
    src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    alt: 'React',
  },
  {
    src: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
    alt: 'React Router',
  },
  {
    src: 'https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white',
    alt: 'React Query',
  },
  {
    src: 'https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00',
    alt: 'Svelte',
  },
  {
    src: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    alt: 'Tailwind',
  },
  {
    src: 'https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white',
    alt: 'Three.js',
  },
  {
    src: 'https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D',
    alt: 'Vue.js',
  },
  {
    src: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    alt: 'CSS3',
  },
  {
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    alt: 'HTML5',
  },
  {
    src: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
    alt: 'TypeScript',
  },
  {
    src: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
    alt: 'Redux',
  },
  {
    src: '',
    alt: '',
  },
];

const backendBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white',
    alt: 'Express',
  },
  {
    src: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white',
    alt: 'Postman',
  },
  {
    src: 'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    alt: 'Node JS',
  },
  {
    src: 'https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white',
    alt: 'Pandas',
  },
  {
    src: 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
    alt: 'Python',
  },
  // {
  //   src: '',
  //   alt: '',
  // },
];

const databaseBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white',
    alt: 'DBeaver',
  },
  {
    src: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    alt: 'MongoDB',
  },
  {
    src: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
    alt: 'MySQL',
  },
  {
    src: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
    alt: 'PostgreSQL',
  },
  {
    src: 'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
    alt: 'Prisma',
  },
  {
    src: 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
    alt: 'Git',
  },
  // {
  //   src: '',
  //   alt: '',
  // },
];

const devOpsBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white',
    alt: 'Amazon AWS',
  },
  {
    src: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
    alt: 'Cloudflare',
  },
  {
    src: 'https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white',
    alt: 'Google Cloud',
  },
  {
    src: 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
    alt: 'Docker',
  },
  {
    src: 'https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white',
    alt: 'Kubernetes',
  },
  {
    src: 'https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white',
    alt: 'Webpack',
  },
  {
    src: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
    alt: 'GitHub Actions',
  },
  // {
  //   src: '',
  //   alt: '',
  // },
];

const miscBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
    alt: 'Figma',
  },
  {
    src: 'https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white',
    alt: 'Babel',
  },
  {
    src: 'https://img.shields.io/badge/Chart%20js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white',
    alt: 'Chart JS',
  },
  {
    src: 'https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white',
    alt: 'Cypress',
  },
  {
    src: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white',
    alt: 'JWT',
  },
  {
    src: 'https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
    alt: 'Next JS',
  },
  {
    src: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
    alt: 'NPM',
  },
  {
    src: 'https://img.shields.io/badge/rollup%20js-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white',
    alt: 'Rollup',
  },
  {
    src: 'https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white',
    alt: 'PayPal',
  },
  {
    src: 'https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white',
    alt: 'Stripe',
  },
  {
    src: 'https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white',
    alt: 'Vim',
  },
  {
    src: 'https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white',
    alt: 'JSON',
  },
  {
    src: 'https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white',
    alt: 'ESLint',
  },
  {
    src: 'https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E',
    alt: 'Prettier',
  },
  {
    src: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
    alt: 'Jest',
  },
  // {
  //   src: '',
  //   alt: '',
  // },
];

function Skills() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5">
        <h2 className="text-xl text-white">Frontend</h2>
        {/* <div className="">
          {frontendBadges.map(badge => {
            return <img src={badge.src} alt={badge.alt} className="p-1" />;
          })}
        </div> */}

        <div className="flex max-w-[700px] flex-wrap">
          {frontendBadges.map((badge, index) => {
            return (
              <img
                key={index}
                src={badge.src}
                alt={badge.alt}
                className="p-1"
              />
            );
          })}
        </div>
      </div>

      {/* Backend & Databases */}
      {/* <div className="flex space-x-8">
        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5">
          <h2 className="text-xl text-white">Backend</h2>
          <div className="flex space-x-4">
            {backend.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5">
          <h2 className="text-xl text-white">Databases</h2>
          <div className="flex space-x-4">
            {databases.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>
      </div> */}

      {/* DevOps & Misc */}
      {/* <div className="flex space-x-8">
        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5">
          <h2 className="text-xl text-white">DevOps</h2>
          <div className="flex space-x-4">
            {devOps.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>

        <div className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-5">
          <h2 className="text-xl text-white">Misc</h2>
          <div className="flex space-x-4">
            {misc.map(name => {
              return <TechIcon name={name} key={name} />;
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Skills;
