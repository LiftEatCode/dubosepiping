import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'DuBose Pipe & Gate', template: '%s | DuBose Pipe & Gate' }, description: 'Livestock panels, gates and structural steel in Central Texas.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
