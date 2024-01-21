export interface LabelsModel {
    home: string,
    fullName: string,
    route: RouteModel
}

export interface RouteModel {
    home: string
}

export interface PortfolioModel {
    label: string,
    url: string,
    info: string
}

export interface TabBlockModel {
    tabs: TabsModel[],
    tabContent: TabContentModel[]
}

export interface TabsModel {
    active: boolean,
    title: string
}

export interface TabContentModel {
    active: boolean,
    content: Array<any>
}