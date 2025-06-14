
import type { NavItem, SocialLink } from "$lib/types/nav";

import {
    Boxes,
    Workflow,
    Zap,
    Feather, 
    Send
} from 'lucide-svelte';
import type { Feature, PromoConfig, SiteConfig, CompanyInfo } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '0.0.1',
    title: 'Zelij',
    subtitle: 'BI-as-code',
    description:
        'Define your dashboards as YAML and deploy them as static web pages',
    github: 'https://github.com/brocolidata/zelij',
    npm: '',

    quickLinks: [
        // { title: 'Customize', href: '/docs/customize' },
        // { title: 'Examples', href: '/docs/examples' }
        { title: 'See the demo', href: 'https://brocolidata.github.io/open-data-viz/'}
    ],
    logo: '/zelij_logo.svg',
    logoDark: '/zelij_logo.svg',
    favicon: '/favicon.png',
};

export const companyInfo: CompanyInfo = {
    name: 'Brocoli Data',
    socials: [
        {
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/company/brocoli-data/',
            icon: 'linkedin'
        },
        {
            title: 'GitHub',
            href: 'https://github.com/brocolidata',
            icon: 'github'
        }
    ],
    logo: '/brocoli_logo.png',
}


export let navItems: NavItem[] = [
    {
        title: 'Docs',
        href: '/docs'
    },

];

export let socialLinks: SocialLink[] = [
    {
        title: 'GitHub',
        href: 'https://github.com/brocolidata/zelij',
        icon: 'github'
    },

];


export const features: Feature[] = [
    {
        icon: Boxes,
        title: 'Build your way',
        description: 'Use the intuitive UI editor to create dashboards visually and export the YAML, or define everything directly in code'
    },
    {
        icon: Send,
        title: 'Deploy anywhere',
        description: 'Dashboards can be exported and deployed as static websites, offering fast performance and minimal hosting costs'
    },
    {
        icon: Feather,
        title: 'Lightweight by design',
        description: 'All configuration and data are stored in plain files, which is easy to track in Git, share across teams, and move between environments'
    },
    {
        icon: Zap,
        title: 'Built for performance',
        description: 'Zelij is powered by DuckDB-WASM for in-browser SQL execution and Apache ECharts for rich, interactive visualizations'
    }
];

export let promoConfig: PromoConfig = {
    title: 'Need help with your project?',
    description:
        'We offer custom services, consulting, and technical guidance for your Data Platform.',
    ctaText: "Let's work together",
    ctaLink: 'mailto:contact.brocoli@gmail.com',
    lightImage: '/images/dev-services-light.jpg',
    darkImage: '/images/dev-services-dark.jpg'
};