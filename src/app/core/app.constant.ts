import { PortfolioModel } from "./app.models"

export const LABELS = {
    home:'Home',
    fullName:'Ankit K Sharma',
    route: {
        home:'/'
    },
    noDataFound:'No Data Found',
    portfolioPrefix: 'http://portfolio.ankitkumarsharma.com/',
    angular: 'angular',
    react:'reactjs',
    javascript:'javascript'
}



export const PORTFOLIO_LIST: PortfolioModel[] = [
    {
        label:'Angular Dynamic Forms',
        url:`${LABELS.portfolioPrefix}${LABELS.angular}/angular-dynamic-forms`
    },
    {
        label:'Reactive Form CRUD',
        url:`${LABELS.portfolioPrefix}${LABELS.angular}/reactive-form-crud`
    }
]