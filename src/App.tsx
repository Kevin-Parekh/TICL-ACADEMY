/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FeaturedCourses } from './components/FeaturedCourses';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-inter">
      <Header />
      
      <main>
        <Hero />
        <FeaturedCourses />
        <Process />
      </main>
      
      <Footer />
    </div>
  );
}
