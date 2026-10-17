import type { Metadata } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';
import './globals.css';
const thai = Noto_Sans_Thai({subsets:['thai','latin'],weight:['400','500','600','700'],display:'swap',variable:'--font-thai'});
const title='Hideout Sawi | โฮมสเตย์สวี ชุมพร';
const description='พักผ่อนเรียบง่ายที่ Hideout Sawi โฮมสเตย์ในสวี ชุมพร บรรยากาศเงียบสงบ เป็นกันเอง ต้อนรับสัตว์เลี้ยงตามเงื่อนไข สอบถามราคาและวันว่างกับที่พักโดยตรง';
const productionUrl=process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const metadata:Metadata={title,description,...(productionUrl?{metadataBase:new URL(`https://${productionUrl}`),alternates:{canonical:'/'}}:{}),openGraph:{title,description,locale:'th_TH',type:'website',...(productionUrl?{url:`https://${productionUrl}`}:{})}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="th"><body className={thai.variable}>{children}</body></html>}
