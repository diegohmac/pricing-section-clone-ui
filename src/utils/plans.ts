export const plans = [
    {
        title: 'Basic',
        description: 'Limited Access',
        price: {
            monthly: '',
            yearly: '',
            text: 'Free',
            monthlyInfo: '',
            yearlyInfo: '',
            from: '',
        },
        cta: {
            label: 'Get Started',
            href: '#',
        },
        tag: undefined,
        features: [
            'Every first chapter free',
            'Free professional profile and job board access',
        ],
        nonIncludedFeatures: [
            'Certificates of completion and industry-leading certification',
        ],
        hasPreviousPlanFeatures: false,
        link: undefined,
    },
    {
        title: 'Premium',
        description: 'For Individuals',
        price: {
            monthly: '42',
            yearly: '14',
            text: '',
            monthlyInfo: '/month',
            yearlyInfo: 'billed annually',
            from: '27',
        },
        cta: {
            label: 'Subscribe Now',
            href: '#',
        },
        tag: {
            monthlyText: 'Most Popular',
            yearlyText: 'Special Price',
        },
        features: [
            'Access our full content library',
            'Projects, certificates and industry-leading certifications',
            'Go from zero to job ready',
            'Our top Python, SQL, Tableau, Power BI and R programs',
            'More ways to learn to code',
        ],
        nonIncludedFeatures: [],
        hasPreviousPlanFeatures: false,
        link: undefined,
    },
    {
        title: 'Teams',
        description: 'For Teams of 2 and up',
        price: {
            monthly: '14',
            yearly: '14',
            text: '',
            monthlyInfo: 'per user /month',
            yearlyInfo: 'billed annually',
            from: '27',
        },
        cta: {
            label: 'Set Up a Team',
            href: '#',
        },
        features: [
            'Manage your group',
            'View learning activity and track progress',
            'License management tools',
        ],
        nonIncludedFeatures: [],
        hasPreviousPlanFeatures: true,
        link: {
            label: 'Free Teams plan for educators',
            href: '#',
        }
    },
    {
        title: 'Enterprise',
        description: 'Bespoke Solutions',
        price: {
            monthly: '',
            yearly: '',
            text: 'Contact sales for pricing',
            monthlyInfo: '',
            yearlyInfo: '',
            from: '',
        },
        cta: {
            label: 'Request a Demo',
            href: '#',
        },
        tag: undefined,
        features: [
            'Personalized and adaptive learning paths for employees',
            'Advanced analytics and reporting integrations',
            'Single Sign-On (SSO) through Okta, Auth0, Azure and more',
            'LMS/LXP integrations',
        ],
        nonIncludedFeatures: [],
        hasPreviousPlanFeatures: true,
        link: undefined,
    },

]