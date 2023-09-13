interface CVEmployment {
    job: string;
    company: string;
    place?: string;
    start?: string;
    end?: string;
    current?: boolean;
    description: string;
}

interface CVEducationInfo {
    title: string;
    school: string;
    place?: string;
    start?: string;
    end?: string;
}

interface CVContact {
    phone?: string;
    email?: string;
}

interface CVSocial {
    network: string;
    text: string;
    link: string;
}

interface CVLanguage {
    name: string;
    rank: number;
}

interface CVSkill {
    name: string;
    rank: number;
}

interface CVProject {
    projectName: string;
    place?: string;
    start?: string;
    end?: string;
    description: string;
}

interface CV {
    name: string;
    title: string;
    profileDescription: string;
    employmentHistory: CVEmployment[];
    education: CVEducationInfo[];
    portfolio: CVProject[];
    contactInfo: CVContact;
    social: CVSocial[];
    skills: CVSkill[];
    languages: CVLanguage[];
}
