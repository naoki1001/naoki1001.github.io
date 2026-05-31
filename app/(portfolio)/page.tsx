import { Works } from '@/features/portfolio/components/Works';
import { Education } from '@/features/portfolio/components/Education';
import { Experience } from '@/features/portfolio/components/Experience';
import { AboutMe } from '@/features/portfolio/components/AboutMe';
import { Contact } from '@/features/portfolio/components/Contact';

export default function RootLayout() {
    return (
        <main className='container mx-auto mt-24 p-8 max-w-4xl'>
            <section id='home' className='mb-16 h-screen flex items-center justify-center'>
                <h2 className='text-5xl font-bold text-center text-indigo-700'>Welcome to My Portfolio</h2>
            </section>

            <AboutMe />

            <Works />

            <Contact />
        </main>
    );
}
