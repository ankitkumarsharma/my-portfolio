import { PortfolioModel, TabBlockModel } from "./app.models"

export const LABELS = {
    home: 'Home',
    fullName: 'Ankit K Sharma',
    route: {
        home: '/'
    },
    noDataFound: 'No Data Found',
    portfolioPrefix: 'http://portfolio.ankitkumarsharma.com/',
    angular: 'angular',
    react: 'reactjs',
    javascript: 'javascript'
}



export const ANGULAR_EXP_PORTFOLIO_LIST: PortfolioModel[] = [
    {
        label: 'Forms',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/forms`,
        info: 'There are multiple example of Reactive & Template Forms in Angular'
    },
    {
        label: 'Dynamic Forms',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/angular-dynamic-forms`,
        info: 'How we can create dynamic forms in multiple ways'
    },
    {
        label: 'Reactive Form CRUD',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/reactive-form-crud`,
        info: 'Reactive Form CRUD example with Validations'
    },
    {
        label: 'Component Interactions',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/component-interaction`,
        info: 'Different ways of component interaction like @input,@output...'
    },
    {
        label: 'NgRx',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/ngrx`,
        info: 'NgRx example, please use Redux Dev Tool Chrome extension for better understanding of NgRx'
    },
    {
        label: 'Spinner(Loader) with NgRx',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/spinner`,
        info: 'Spinner with service, also with NgRx, please use Redux Dev Tool Chrome extension for better understanding of NgRx'
    },
    {
        label: 'Authentication & Authorization',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/auth`,
        info: 'Authentication & Authorization - Role based, manage pages as per role.'
    },
    {
        label: 'Login with Signup',
        url: `${LABELS.portfolioPrefix}${LABELS.angular}/auth-signup`,
        info: 'Login/Signup with NgRx, please use Redux Dev Tool Chrome extension for better understanding of NgRx'
    }
]

export const REACT_EXP_PORTFOLIO_LIST: PortfolioModel[] = [
    {
        label: 'Basic Learning',
        url: `${LABELS.portfolioPrefix}${LABELS.react}/basic`,
        info: 'There are basic learning example of React JS'
    },
    {
        label: 'Search Filter Table',
        url: `${LABELS.portfolioPrefix}${LABELS.react}/filter-search`,
        info: 'How we can filter table data in easy way'
    },
    {
        label: 'Image Slider',
        url: `${LABELS.portfolioPrefix}${LABELS.react}/slider`,
        info: 'A Simple image slider'
    }
]

export const TAB_BLOCK: TabBlockModel = {
    tabs: [
        {
            active: true,
            title: 'Angular Examples'
        },
        {
            active: false,
            title: 'React Examples'
        }
    ],
    tabContent: [
        {
            active: true,
            content: ANGULAR_EXP_PORTFOLIO_LIST
        },
        {
            active: false,
            content: REACT_EXP_PORTFOLIO_LIST
        }
    ]
}