/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Objectives } from './components/Objectives';
import { Risks } from './components/Risks';
import { PendingActions } from './components/PendingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-coral selection:text-brand-white">
      <Hero />
      <Results />
      <Objectives />
      <Risks />
      <PendingActions />
    </div>
  );
}
