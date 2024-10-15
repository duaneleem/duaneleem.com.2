import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/#about' },
    { text: 'Resume', href: '/#resume' },
    { text: 'Education', href: '/#education' },
    { text: 'Portfolio', links: [
      {
        text: 'Skills',
        href: '/#skills'
      },
      {
        text: 'Projects',
        href: '/#projects'
      }
    ]},
    { text: 'Blog', links: [
        {
          text: 'Knowledgebase Blog',
          href: 'https://blog.duaneleem.com/'
        },
        {
          text: 'Highlights Blog',
          href: '/blog'
        }
    ]},
    { text: 'Github', href: 'https://github.com/duaneleem' },
  ],
  actions: [{ text: 'LinkedIn', href: 'http://www.linkedin.com/in/duaneleem', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Certifications',
      links: [
        { text: 'Masters in Information Technology Management', target: '_blank', href: 'https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/achievements/201504-masters-itm.jpg' },
        { text: 'Project Management Professional, PMP', href: 'https://blog.duaneleem.com/category/certified/' },
        { text: 'Kubernetes: CKAD', href: 'https://blog.duaneleem.com/certified-kubernetes-application-developer-i-passed/' },
        { text: 'MLOps Specialization', href: 'https://blog.duaneleem.com/machine-learning-engineering-for-production-mlops-specialization/' },
        { text: 'AI for Trading', href: 'https://blog.duaneleem.com/graduated-udacity-ai-for-trading/' },
        { text: 'MIT DevOps', href: 'https://blog.duaneleem.com/mit-cloud-devops-continuous-transformation/' },
      ],
    },
    {
      title: 'Recent Blog Posts',
      links: [
        // Add DTM Blog Post
        { text: 'Change AWS RDS ...', href: 'https://blog.duaneleem.com/change-aws-rds-instance-size/' },
        { text: 'Brentwood Tech MeetUp', href: 'https://blog.duaneleem.com/brentwood-community-center-software-engineer-meetup/' },
        { text: 'My DevOps Journey', href: 'https://blog.duaneleem.com/5-year-reflection-2023/' },
        { text: 'PHP Errors to Console', href: 'https://blog.duaneleem.com/output-php-errors-backend-console/' },
        { text: 'Install Minikube', href: 'https://blog.duaneleem.com/install-uninstall-minikube-ubuntu-22-04-2-lts/' },
        { text: '2023 Word Weavers', href: 'https://blog.duaneleem.com/2023-word-weavers-officers/' },
      ],
    },
    {
      title: 'Blog Categories',
      links: [
        { text: 'Amazon Web Services', href: 'https://blog.duaneleem.com/category/devops/amazon-web-services/' },
        { text: 'DevOps', href: 'https://blog.duaneleem.com/category/devops/' },
        { text: 'Kubernetes', href: 'https://blog.duaneleem.com/category/devops/kubernetes/' },
        { text: 'Toastmasters', href: 'https://blog.duaneleem.com/category/toastmasters/' },
        { text: 'WordPress', href: 'https://blog.duaneleem.com/category/web-development/wordpress/' },
      ],
    },
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#about' },
        { text: 'Resume', href: '#experience' },
        { text: 'Education', href: '#education' },
        { text: 'Portfolio', href: '#portfolio' },
        { text: 'Blog', href: 'https://blog.duaneleem.com/' },
        { text: 'Contact Me', href: 'https://blog.duaneleem.com/contact-duane/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Google Drive', icon: 'tabler:brand-google-drive', target: '_blank', href: 'https://docs.google.com/document/d/1bvakr9gKH-lk7mX_VRstMJ-3Vv3tJLSQuiHWkOdnrUs/edit?usp=sharing' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/duaneleem' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://blog.duaneleem.com/wp-content/uploads/2023/08/Logo-PMP-2021-150x150.png)]"></span>
    Copyright &copy; <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://blog.duaneleem.com/contact-duane/"> Duane Leem</a> · All rights reserved.
  `,
};
