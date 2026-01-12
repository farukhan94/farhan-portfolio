import { RECAPTCHA_CONFIG } from '../constants';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Loads the reCAPTCHA v3 script dynamically
 */
export const loadRecaptchaScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if script is already loaded
    if (window.grecaptcha && window.grecaptcha.ready) {
      resolve();
      return;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]');
    if (existingScript) {
      // Wait for it to load
      const checkInterval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.ready) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100);
      return;
    }

    // Create and load script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_CONFIG.SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
};

/**
 * Executes reCAPTCHA v3 and returns the token
 * @param action - The action name for reCAPTCHA (e.g., 'submit', 'contact_form')
 */
export const executeRecaptcha = async (action: string = 'submit'): Promise<string> => {
  try {
    // Load script if not already loaded
    await loadRecaptchaScript();

    // Wait for grecaptcha to be ready
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_CONFIG.SITE_KEY, { action })
          .then((token: string) => {
            resolve(token);
          })
          .catch((error: Error) => {
            console.error('reCAPTCHA execution error:', error);
            reject(error);
          });
      });
    });
  } catch (error) {
    console.error('reCAPTCHA load error:', error);
    throw error;
  }
};
