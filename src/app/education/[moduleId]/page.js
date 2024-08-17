import { getModuleContent } from '@/lib/modules'

export default async function ModulePage({ params }) {
    const { moduleId } = params
    const moduleContent = await getModuleContent(moduleId)

    return (
        <div>
            <h1>{moduleContent.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: moduleContent.content }} />
        </div>
    )
}