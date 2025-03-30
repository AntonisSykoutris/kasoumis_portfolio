import {
  TbChartInfographic,
  TbRoad,
  TbBug,
  TbDatabase,
  TbReportAnalytics,
  TbUsers,
  TbCalendarTime,
  TbFileDescription,
  TbChartPie,
  TbTools,
  TbUserCog,
} from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';

export const EXPERTIES_TITLE = 'Experties Area';

// export const EXPERTIES_TITLE = 'Experties Area';

export const EXPERTIES = [
  {
    id: 1,
    title: 'Digital Product Development',
    icons: [TbChartInfographic, TbRoad, TbBug, TbDatabase],
    description:
      'Experience in collecting quantitative product data, market research, and product requirement gathering. Skilled in suggesting product enhancements, troubleshooting, and collaborating with internal teams to ensure smooth product development and implementation of roadmaps. Participated in UAT and QA for product testing and service monitoring.',
  },
  {
    id: 2,
    title: 'CRM Administration',
    icons: [TbReportAnalytics, TbUsers, TbDatabase],
    description:
      'Supported senior team members in CRM report generation and data analysis for decision-making. Contributed to CRM strategies aimed at improving customer engagement and retention, with a focus on optimizing CRM processes and ensuring data-driven insights.',
  },
  {
    id: 3,
    title: 'Project Management',
    icons: [TbCalendarTime, TbFileDescription, TbTools],
    description:
      'Assisted in organizing project schedules, meetings, and project documentation. Supported in grant proposal preparations and ensured the timely progress of tasks across multiple stakeholders. Focused on administrative and logistical support in both governmental and nonprofit sectors.',
  },
  {
    id: 4,
    title: 'Analytics & Data Tools',
    icons: [TbChartInfographic, TbChartPie, TbDatabase, TbTools],
    description:
      'Proficient in tools such as Google Analytics, Power BI, SQL/MySQL, and Figma. Adept at leveraging these tools for market research, data analysis, and product optimization, with a focus on visualizing data for business insights and decisions.',
  },
  {
    id: 5,
    title: 'Agile Project Management',
    icons: [DiScrum, TbUserCog],
    description:
      'Certified in Agile Project Management, with experience in implementing agile practices to improve product management and development. Skilled at adapting hybrid agile methodologies to specific business needs, ensuring flexibility and efficiency.',
  },
];

export const experienceData = [
    {
    id: 1,
    companyLink: 'https://www.verityguest.com/',
    companyName: 'Verity Guest',
    role: 'Product Manager',
    period: 'April 2025 – Present',
    description: ['Collected quantitative product data and metrics through market research.'],
  },
  {
    id: 2,
    companyLink: 'https://aegeanair.com',
    companyName: 'Aegean Airlines',
    role: 'Digital Product Development Business Analyst',
    period: 'April 2024 – April 2025',
    description: ['Collected quantitative product data and metrics through market research.'],
  },
  {
    id: 3,
    companyLink: 'https://carnegieconsultants.com',
    companyName: 'Carnegie Consultants',
    role: 'Junior CRM Administrator',
    period: 'Feb 2023 – Mar 2024',
    description: ['Supported senior team members in generating reports and analyzing data for decision-making.'],
  },
  {
    id: 4,
    companyLink: 'https://mfa.gr',
    companyName: 'Ministry of Foreign Affairs of the Hellenic Republic',
    role: 'Associate Project Manager',
    period: 'Feb 2021 – Mar 2021',
    description: ['Assisted in organizing project schedules, meetings, and appointments.'],
  },
  {
    id: 5,
    companyLink: 'https://karamanlis.gr',
    companyName: 'The Konstantinos Karamanlis Institute for Democracy',
    role: 'Associate Project Manager',
    period: 'Mar 2020 – May 2020',
    description: ['Assisted in preparing grant proposals, gathering necessary documentation.'],
  },
];

export const educationData = [
  {
    id: 1,
    institutionLink: 'https://www.uoa.gr/',
    institutionName: 'National & Kapodistrian University of Athens',
    degree: 'Master of Science in Business Administration, Analytics and Information Systems',
    period: '2022 - 2024',
  },
  {
    id: 2,
    institutionLink: 'https://www.uop.gr/',
    institutionName: 'University of the Peloponnese',
    degree: 'Bachelor of Arts in Political Science and International Relations',
    period: '2017 - 2021',
  },
];
