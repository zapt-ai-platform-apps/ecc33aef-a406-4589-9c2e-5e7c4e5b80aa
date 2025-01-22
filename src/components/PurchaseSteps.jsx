import React from 'react';
import { CheckCircleIcon, CreditCardIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const steps = [
  { title: 'Select Package', icon: CreditCardIcon },
  { title: 'Choose Network', icon: ArrowRightIcon },
  { title: 'Complete Payment', icon: CheckCircleIcon }
];

const PurchaseSteps = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-12">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`flex flex-col items-center mx-4 ${
            index < currentStep ? 'text-green-400' : 'text-gray-400'
          }`}>
            <step.icon className={`w-8 h-8 mb-2 ${
              index < currentStep ? 'text-green-400' : 'text-gray-600'
            }`} />
            <span className="text-sm font-medium">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="h-0.5 w-16 bg-gray-600 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PurchaseSteps;