'use client';
import React from 'react';
import Card from './Card';
import { PLANS } from '@/utils/plans';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AVAILABLE_CURRENCIES,
  type AvailableCurrencies,
  type FxRates,
} from '@/utils/api';

type Props = {
  data: FxRates;
};

export default function Pricing({ data }: Props) {
  const [isYearly, setIsYearly] = React.useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    React.useState<AvailableCurrencies>(AVAILABLE_CURRENCIES[0]);

  const rateMultiplier = data.conversionRate[selectedCurrency];

  return (
    <section>
      <div className="flex items-center mb-10 space-x-6">
        <div className="w-full flex items-center space-x-2">
          <label htmlFor="display-type" className="text-white ml-auto">
            Save with Yearly
          </label>
          <Switch
            id="display-type"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
        </div>
        <Select
          value={selectedCurrency}
          onValueChange={(value) =>
            setSelectedCurrency(value as AvailableCurrencies)
          }
        >
          <SelectTrigger className="w-auto bg-[#213147]">
            <SelectValue placeholder="Select a currency" />
          </SelectTrigger>
          <SelectContent className="bg-[#213147] text-white">
            <SelectGroup>
              {AVAILABLE_CURRENCIES.map((currency) => (
                <SelectItem key={currency} value={currency}>
                  {currency}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:gap-0 sm:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan, index) => (
          <Card
            key={plan.title}
            index={index}
            plan={plan}
            previousPlanName={plan.hasPreviousPlanFeatures ? plan.title : ''}
            isYearly={isYearly}
            currency={selectedCurrency}
            rateMultiplier={rateMultiplier}
          />
        ))}
      </div>
    </section>
  );
}
