"use client";

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useUTM = () => {
  const location = useLocation();
  const [utms, setUtms] = useState<Record<string, string>>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const utmParams: Record<string, string> = {};
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const value = searchParams.get(param);
      if (value) utmParams[param] = value;
    });

    // También capturamos el referrer si existe
    if (document.referrer) {
      utmParams['referrer'] = document.referrer;
    }

    setUtms(utmParams);
  }, [location]);

  return utms;
};