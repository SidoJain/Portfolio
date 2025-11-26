import ResumePage from "@/components/ResumePage"

export async function generateMetadata() {
    return {
        title: `Siddharth Jain | Resume`,
        alternates: {
            canonical: "https://www.sidojain.dev/resume",
        },
    }
}

export default function Resume() {
    return <ResumePage />
}