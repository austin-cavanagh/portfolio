import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

export type TechnologyBadge = {
  src: string;
  alt: string;
};

const frontendBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    alt: 'JavaScript',
  },
  {
    src: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
    alt: 'TypeScript',
  },
  {
    src: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    alt: 'HTML5',
  },
  {
    src: 'https://img.shields.io/badge/CSS3-214ce5?style=for-the-badge&logo=css3&logoColor=white',
    alt: 'CSS3',
  },
  {
    src: 'https://img.shields.io/badge/Tailwind-4f45e4?style=for-the-badge&logo=tailwind-css&logoColor=white',
    alt: 'Tailwind',
  },
  {
    src: 'https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white',
    alt: 'Three.js',
  },
  {
    src: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    alt: 'React',
  },
  {
    src: 'https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D',
    alt: 'Vue.js',
  },
  {
    src: 'https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00',
    alt: 'Svelte',
  },
  {
    src: 'https://img.shields.io/badge/Webpack-1b79c1?style=for-the-badge&logo=Webpack&logoColor=white',
    alt: 'Webpack',
  },
  {
    src: 'https://img.shields.io/badge/rollup-EC4A3F?style=for-the-badge&logo=rollup.js&logoColor=white',
    alt: 'Rollup',
  },
  {
    src: 'https://img.shields.io/badge/Redux-774abc?style=for-the-badge&logo=redux&logoColor=white',
    alt: 'Redux',
  },
  // {
  //   src: 'https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white',
  //   alt: 'React Query',
  // },
  // {
  //   src: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
  //   alt: 'React Router',
  // },
];

const backendBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    alt: 'Node JS',
  },
  {
    src: 'https://img.shields.io/badge/Express-f3de1e?style=for-the-badge&logo=express&logoColor=black',
    alt: 'Express',
  },
  {
    src: 'https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=FFD43B',
    alt: 'Python',
  },
  {
    src: 'https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white',
    alt: 'Pandas',
  },
  {
    src: 'https://img.shields.io/badge/Postman-ff6c38?style=for-the-badge&logo=Postman&logoColor=white',
    alt: 'Postman',
  },
  {
    src: 'https://img.shields.io/badge/MongoDB-07ab4e?style=for-the-badge&logo=mongodb&logoColor=white',
    alt: 'MongoDB',
  },
  {
    src: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
    alt: 'PostgreSQL',
  },
  {
    src: 'https://img.shields.io/badge/Prisma-04364e?style=for-the-badge&logo=Prisma&logoColor=white',
    alt: 'Prisma',
  },
  {
    src: 'https://img.shields.io/badge/Docker-1e63ee?style=for-the-badge&logo=docker&logoColor=white',
    alt: 'Docker',
  },
  {
    src: 'https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white',
    alt: 'Kubernetes',
  },
  // {
  //   src: 'https://img.shields.io/badge/Google_Cloud-E03526?style=for-the-badge&logo=google-cloud&logoColor=white',
  //   alt: 'Google Cloud',
  // },
  {
    src: 'https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white',
    alt: 'Amazon AWS',
  },
  // {
  //   src: 'https://img.shields.io/badge/EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white',
  //   alt: 'AWS EC2',
  // },
  // {
  //   src: 'https://img.shields.io/badge/ECR-FF9900?style=for-the-badge&logo=amazonecs&logoColor=white',
  //   alt: 'AWS ECR',
  // },
  // {
  //   src: 'https://img.shields.io/badge/RDS-3E50D3?style=for-the-badge&logo=amazonrds&logoColor=white',
  //   alt: 'AWS RDS',
  // },
  // {
  //   src: 'https://img.shields.io/badge/SES-3E50D3?style=for-the-badge&logo=amazonsimpleemailservice&logoColor=white',
  //   alt: 'AWS SES',
  // },
  // {
  //   src: 'https://img.shields.io/badge/S3-498A29?style=for-the-badge&logo=amazons3&logoColor=white',
  //   alt: 'AWS S3',
  // },
  // {
  //   src: 'https://img.shields.io/badge/Secrets_Manager-DC3133?style=for-the-badge&logo=awssecretsmanager&logoColor=white',
  //   alt: 'AWS Secrets Manager',
  // },
  // {
  //   src: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
  //   alt: 'MySQL',
  // },
];

const miscBadges: TechnologyBadge[] = [
  {
    src: 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
    alt: 'Git',
  },
  {
    src: 'https://img.shields.io/badge/next-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
    alt: 'Next JS',
  },
  {
    src: 'https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white',
    alt: 'Jest',
  },
  {
    src: 'https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white',
    alt: 'Cypress',
  },
  {
    src: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white',
    alt: 'Figma',
  },
  {
    src: 'https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white',
    alt: 'PayPal',
  },
  {
    src: 'https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white',
    alt: 'Stripe',
  },
  // {
  //   src: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
  //   alt: 'GitHub Actions',
  // },
  // {
  //   src: 'https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white',
  //   alt: 'Vim',
  // },
  // {
  //   src: 'https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white',
  //   alt: 'ESLint',
  // },
  // {
  //   src: 'https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E',
  //   alt: 'Prettier',
  // },
  // {
  //   src: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white',
  //   alt: 'JWT',
  // },
  // {
  //   src: 'https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white',
  //   alt: 'NPM',
  // },
  // {
  //   src: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
  //   alt: 'Cloudflare',
  // },
];

function Skills() {
  const { isTransitioning } = useSelector((state: RootState) => state.app);

  // Animation variants for each skill section
  const frontendVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, type: 'spring', stiffness: 100 },
    },
  };

  const backendVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.4, type: 'spring', stiffness: 100 },
    },
  };

  const miscVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.6, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="space-y-12">
      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={frontendVariants}
      >
        <h2 className="text-xl font-semibold text-white">Frontend</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {frontendBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={backendVariants}
      >
        <h2 className="text-xl font-semibold text-white">Backend</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {backendBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-4 rounded-3xl bg-gray-900 bg-opacity-80 p-7"
        initial="hidden"
        animate={!isTransitioning ? 'visible' : 'hidden'}
        variants={miscVariants}
      >
        <h2 className="text-xl font-semibold text-white">Misc</h2>
        <div className="flex max-w-[700px] flex-wrap">
          {miscBadges.map((badge, index) => (
            <img key={index} src={badge.src} alt={badge.alt} className="p-1" />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
