import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Plan } from '@/utils/plans';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

type Props = {
  plan: Plan;
  index: number;
  previousPlanName?: string;
  displayType: 'monthly' | 'yearly';
};

const roundedStyles: Record<string, string> = {
  0: 'rounded-r-none',
  1: 'rounded-b-none',
  2: 'rounded-none',
  3: 'rounded-l-none',
};

const titleColor: Record<string, string> = {
  0: 'text-[#05192d]',
  1: 'text-[#00c53b]',
  2: 'text-[#009bd8]',
  3: 'text-[#ff5400]',
};

export default function Card({
  plan,
  previousPlanName,
  index,
  displayType,
}: Props) {
  const isHighlighted = !plan.price.text && plan.title === 'Premium';
  const showFromPrice =
    plan.price.from && (displayType === 'yearly' || !isHighlighted);

  return (
    <ShadcnCard
      className={cn(
        'w-full max-w-[350px] relative z-0',
        isHighlighted
          ? 'shadow-elevate z-10 -mt-6 pt-4 border-t-8 border-t-[rgb(3,239,98)]'
          : 'border border-[rgb(217,217,225)]',
        roundedStyles[index]
      )}
    >
      {plan.tag?.monthlyText && (
        <div
          className={cn(
            'absolute left-6 py-1 px-2 text-[#05192d] uppercase tracking-wide font-semibold text-sm',
            isHighlighted
              ? '-top-5 bg-[rgb(3,239,98)]'
              : '-top-3 bg-[rgb(217,217,225)]'
          )}
        >
          {plan.tag.monthlyText}
        </div>
      )}
      {showFromPrice && (
        <div
          className={cn(
            'absolute z-20 top-8 right-12 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white flex items-center justify-center'
          )}
        >
          <div className="relative flex items-center justify-center">
            <span className="text-[#626D79] text-2xl">{`$${plan.price.from}`}</span>
            <div className="absolute w-12 h-0.5 bg-orange-500 transform -rotate-12" />
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className={titleColor[index]}>{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            'flex items-center h-[72px] px-6',
            !plan.price.text
              ? `${isHighlighted ? 'bg-[rgb(3,239,98)]' : 'bg-[rgb(217,217,225)]'}`
              : ''
          )}
        >
          <p className="text-[#05192d] text-4xl font-bold">
            {plan.price.text || (
              <span className="text-5xl">{`$${plan.price.monthly}`}</span>
            )}
          </p>
          {!plan.price.text && (
            <div className="flex flex-col grow justify-end ml-2">
              <p className="text-[#05192d] text-sm tracking-tighter">
                {plan.price.monthlyInfo}
              </p>
              <p className="text-[#05192d] text-sm tracking-tighter">
                {plan.price.yearlyInfo}
              </p>
            </div>
          )}
        </div>
        <div className="px-6 mt-6">
          <Button
            asChild
            variant={isHighlighted ? 'default' : 'outline'}
            size="full"
          >
            <a href={plan.cta.href}>{plan.cta.label}</a>
          </Button>
          <ul className="mt-6 space-y-4">
            {previousPlanName && (
              <li className="text-sm font-semibold">{`Everything in ${previousPlanName} plus:`}</li>
            )}
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center text-sm font-semibold"
              >
                <Check className="w-4 h-4 mr-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
            {plan.nonIncludedFeatures.length > 0 &&
              plan.nonIncludedFeatures.map((nonIncludedFeatures) => (
                <li
                  key={nonIncludedFeatures}
                  className="flex items-center text-sm font-semibold"
                >
                  <X className="w-4 h-4 mr-2 shrink-0" />
                  <span>{nonIncludedFeatures}</span>
                </li>
              ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {plan.link && (
          <a
            className="text-[#0075AD] text-base font-semibold"
            href={plan.link.href}
          >
            {plan.link.label}
          </a>
        )}
      </CardFooter>
    </ShadcnCard>
  );
}
