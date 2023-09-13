import { readYamlPost } from "@lib/yaml";

interface CVPageProps { params: { locale: string } }

export default function CVPage({ params: { locale } }: CVPageProps) {
    const cvData = readYamlPost('cv', locale);

    console.log('cvData:', cvData);

    return (
        <div>test</div>
    );
}
