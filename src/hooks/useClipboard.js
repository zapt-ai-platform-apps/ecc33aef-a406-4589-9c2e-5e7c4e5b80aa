import { useState } from 'react';
import * as Sentry from '@sentry/browser';

export const useClipboard = (text) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      Sentry.captureException(error);
      console.error('Failed to copy:', error);
    }
  };

  return { copied, copyToClipboard };
};