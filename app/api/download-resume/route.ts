import fs from 'fs'
import path from 'path'

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf')
    const fileBuffer = fs.readFileSync(filePath)

    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Siddharth_Jain_Resume.pdf"'
        }
    })
}