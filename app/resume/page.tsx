import ResumePage from "@/components/ResumePage"

export async function generateMetadata() {
    return {
        title: `Siddharth Jain | Resume`,
        alternates: {
            canonical: "https://sidojain.vercel.app/resume",
        },
    };
}

export default function Resume() {
    return <ResumePage />
}