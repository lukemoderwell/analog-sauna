'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const PROCESS_STEPS = [
  //   {
  //     id: 'site-study',
  //     title: 'Site Study',
  //     description:
  //       'We begin with a thorough site analysis to determine the perfect location and orientation for your sauna.',
  //     image: '/public/01.webp',
  //   },
  {
    id: 'design',
    title: 'Site Study & Design',
    description:
      "Working together, we'll create a custom design that fits your space and meets your family's needs.",
    image: '/build-process/01.webp',
  },
  {
    id: 'build',
    title: 'Build',
    description:
      'Our team carefully constructs your sauna using traditional techniques and premium materials.',
    image: '/build-process/02.webp',
  },
  {
    id: 'sauna',
    title: 'Sauna!',
    description:
      'Your finished sauna becomes a sanctuary for relaxation and family connection.',
    image: '/build-process/03.webp',
  },
];

export function BuildProcess() {
  const [selectedStep, setSelectedStep] = useState(PROCESS_STEPS[0].id);

  const selectedStepData = PROCESS_STEPS.find(
    (step) => step.id === selectedStep
  );

  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
      <div className="space-y-2">
        {PROCESS_STEPS.map((step, index) => (
          <Button
            key={step.id}
            variant="ghost"
            className={cn(
              'w-full justify-start text-left h-auto py-4 px-6 transition-all relative',
              selectedStep === step.id && 'font-semibold'
            )}
            onClick={() => setSelectedStep(step.id)}
          >
            {selectedStep === step.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            )}
            <div className="flex items-center">
              <span className="font-mono text-xs mr-3 text-gray-400">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="font-medium">{step.title}</div>
            </div>
          </Button>
        ))}
      </div>
      <div className="space-y-6">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
          {selectedStepData && (
            <img
              src={selectedStepData.image || '/placeholder.svg'}
              alt={selectedStepData.title}
              className="object-cover w-full h-full transition-all duration-300"
            />
          )}
        </div>
        {selectedStepData && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              {selectedStepData.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              {selectedStepData.description}
            </p>
          </div>
        )}
        <div className="mt-8 text-center">
          <Button asChild>
            <Link
              href="https://calendly.com/lukemoderwell/sauna-consult"
              target="_blank"
            >
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
