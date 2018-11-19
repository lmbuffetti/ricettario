import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

const WebsiteLayout = Loadable({
    loader: () => import('../../containers/layouts/Website' /* webpackChunkName: "website-layout" */),
    loading: Loading,
});

// WEBSITE
const HomePage = Loadable({
    loader: () => import('../../view/website/homepage/homepage' /* webpackChunkName: "home-page" */),
    loading: Loading,
});

// ADVISERS
const OurServices = Loadable({
    loader: () => import('../../view/website/advisers/OurService' /* webpackChunkName: "our-services" */),
    loading: Loading,
});

const TermsOfBusiness = Loadable({
    loader: () => import('../../view/website/advisers/TermsOfBusiness' /* webpackChunkName: "terms-of-business" */),
    loading: Loading,
});

const PrivacyPolicy = Loadable({
    loader: () => import('../../view/website/advisers/PrivacyPolicy' /* webpackChunkName: "privacy-policy" */),
    loading: Loading,
});
const Complaints = Loadable({
    loader: () => import('../../view/website/advisers/Complaints' /* webpackChunkName: "complaints" */),
    loading: Loading,
});

// OCTOPUS PLATFORM
const OctopusPlatform = Loadable({
    // eslint-disable-next-line max-len
    loader: () => import('../../view/website/octopus_platform/OctopusPlatform' /* webpackChunkName: "octopus-platform" */),
    loading: Loading,
});

const TermsAndConditions = Loadable({
    // eslint-disable-next-line max-len
    loader: () => import('../../view/website/octopus_platform/TermsAndConditions' /* webpackChunkName: "terms-and-condition" */),
    loading: Loading,
});

const OctopusGIA = Loadable({
    loader: () => import('../../view/website/octopus_platform/OctopusGIA' /* webpackChunkName: "octopus-gia" */),
    loading: Loading,
});

const OctopusISA = Loadable({
    loader: () => import('../../view/website/octopus_platform/OctopusISA' /* webpackChunkName: "octopus-isa" */),
    loading: Loading,
});

const OctopusSIPP = Loadable({
    loader: () => import('../../view/website/octopus_platform/OctopusSIPP' /* webpackChunkName: "octopus-sipp" */),
    loading: Loading,
});

// GUIDES
const Guides = Loadable({
    loader: () => import('../../view/website/guides/guides' /* webpackChunkName: "guides" */),
    loading: Loading,
});

const RiskAndVolatily = Loadable({
    loader: () => import('../../view/website/guides/riskAndVolatily' /* webpackChunkName: "risk-and-volatily" */),
    loading: Loading,
});

const UnderstandingFees = Loadable({
    loader: () => import('../../view/website/guides/understandingFees' /* webpackChunkName: "risk-and-volatily" */),
    loading: Loading,
});

const OctopusPortfolio = Loadable({
// eslint-disable-next-line max-len
    loader: () => import('../../view/website/guides/octopusPortfolioService' /* webpackChunkName: "octopus-portfolio-service" */),
    loading: Loading,
});

const classPage = 'htmlPage';
const classPageGuides = 'htmlPage guides staticMenu';
const classHome = 'htmlPage home';
const classStaticMenu = 'htmlPage staticMenu';

const menuAdviser = 'advisers';
const menuOctopusPlatform = 'octopus_platform';
const menuGuides = 'guides';

const stickyMenu = 'sticky';
const staticMenu = 'static';

const titlePage = 'Octopus Wealth -';

export default [
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/',
        component: HomePage,
        classPage: classHome,
        menu: 'website',
        menuFooter: menuAdviser,
        menuName: '',
        menuPosition: 'scroll_header',
        titlePage: `${titlePage} Homepage`,
    },
    {
        /* ADVISERS - WEBSITE */
        exact: true,
        layout: WebsiteLayout,
        path: '/complaints',
        component: Complaints,
        menu: menuAdviser,
        menuFooter: menuAdviser,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Complaints`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/our-service',
        component: OurServices,
        menu: menuAdviser,
        menuFooter: menuAdviser,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Our Service to You`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/terms-of-business',
        component: TermsOfBusiness,
        menu: menuAdviser,
        menuFooter: menuAdviser,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Terms of Business`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/privacy-policy',
        component: PrivacyPolicy,
        menu: menuAdviser,
        menuFooter: menuAdviser,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Privacy Policy`,
    },
    {
        /* OCTOPUS PLATFORM - WEBSITE */
        exact: true,
        layout: WebsiteLayout,
        path: '/octopus-platform',
        component: OctopusPlatform,
        menu: menuOctopusPlatform,
        menuFooter: menuOctopusPlatform,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Octopus Platform`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/terms-and-conditions',
        component: TermsAndConditions,
        menu: menuOctopusPlatform,
        menuFooter: menuOctopusPlatform,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Terms and Conditions`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/octopus-gia',
        component: OctopusGIA,
        menu: menuOctopusPlatform,
        menuFooter: menuOctopusPlatform,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Octopus GIA`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/octopus-isa',
        component: OctopusISA,
        menu: menuOctopusPlatform,
        menuFooter: menuOctopusPlatform,
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Octopus ISA`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/octopus-sipp',
        component: OctopusSIPP,
        menu: menuOctopusPlatform,
        menuFooter: menuOctopusPlatform,
        menuName: 'Octopus SIPP',
        menuPosition: stickyMenu,
        classPage,
        titlePage: `${titlePage} Octopus SIPP`,
    },
    {
        /* GUIDES - WEBSITE */
        exact: true,
        layout: WebsiteLayout,
        path: '/guides',
        component: Guides,
        menu: menuGuides,
        menuFooter: '',
        menuPosition: staticMenu,
        classPage: classPageGuides,
        titlePage: `${titlePage} Guides`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/risk-and-volatility',
        component: RiskAndVolatily,
        menu: menuGuides,
        menuFooter: '',
        menuPosition: staticMenu,
        classPage: classStaticMenu,
        titlePage: `${titlePage} Risk and Volatility`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/octopus-portfolio-service',
        component: OctopusPortfolio,
        menu: menuGuides,
        menuFooter: '',
        menuPosition: staticMenu,
        classPage: classStaticMenu,
        titlePage: `${titlePage} Octopus Portfolio Service`,
    },
    {
        exact: true,
        layout: WebsiteLayout,
        path: '/understanding-fees',
        component: UnderstandingFees,
        menu: menuGuides,
        menuFooter: '',
        menuPosition: staticMenu,
        classPage: classStaticMenu,
        titlePage: `${titlePage} Understanding Fees`,
    },
];
