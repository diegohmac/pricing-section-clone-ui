'use client';
import React from 'react';
import Card from './Card';
import { PLANS } from '@/utils/plans';
import { Switch } from '../ui/switch';

export default function Pricing() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section>
      <div className="w-full flex items-center space-x-2 mb-10">
        <label htmlFor="display-type" className="text-white ml-auto">
          Save with Yearly
        </label>
        <Switch
          id="display-type"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-0 sm:grid-cols-2 md:grid-cols-4">
        {PLANS.map((plan, index) => (
          <Card
            key={plan.title}
            index={index}
            plan={plan}
            previousPlanName={plan.hasPreviousPlanFeatures ? plan.title : ''}
            isYearly={isYearly}
          />
        ))}
      </div>
    </section>
  );
}
