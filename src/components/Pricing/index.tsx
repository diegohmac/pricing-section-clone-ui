import React from 'react';
import Card from './Card';
import { PLANS } from '@/utils/plans';

export default function Pricing() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {PLANS.map((plan, index) => (
        <Card
          key={plan.title}
          index={index}
          plan={plan}
          previousPlanName={plan.hasPreviousPlanFeatures ? plan.title : ''}
          displayType="monthly"
        />
      ))}
    </section>
  );
}
