export interface CVEmployment {
    job: string;
    company: string;
    place?: string;
    start?: string;
    end?: string;
    current?: boolean;
    description: string;
}

export interface CVEducationInfo {
    title: string;
    school: string;
    place?: string;
    start?: string;
    end?: string;
}

export interface CVContact {
    phone?: string;
    email?: string;
}

export interface CVSocial {
    network: string;
    text: string;
    link: string;
}

export interface CVLanguage {
    name: string;
    rank: number;
}

export interface CVSkill {
    name: string;
    rank: number;
}

export interface CVProject {
    projectName: string;
    place?: string;
    start?: string;
    end?: string;
    description: string;
}

export interface CVSectionItem {
    title: string;
    at?: string;
    place?: string;
    start?: string;
    end?: string;
    current?: boolean;
    description?: string;
}

export interface CVAsideSectionItem {
    name?: string;
    text?: string;
    link?: string;
    rank?: number;
}

export interface CVSection {
    section: string;
    description?: string;
    atSeparator?: string;
    items?: CVSectionItem[];
}

export interface CVAsideSection {
    section: string;
    items?: CVAsideSectionItem[];
}

export interface CVData {
    name: string;
    title: string;
    profileDescription: string;
    sections: CVSection[];
    asideSections: CVAsideSection[];
}
