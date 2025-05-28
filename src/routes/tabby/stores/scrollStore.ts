import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store with initial value false
export const showAfterScroll = writable(false);

// Function to initialize scroll detection with a custom threshold
export function initScrollDetection(threshold = 0.3) {
  if (!browser) return; // Only run in browser environment
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.scrollHeight;
    
    // Show when scrolled past threshold percentage of the page
    const scrollThreshold = documentHeight * threshold;
    
    if (scrollPosition > scrollThreshold) {
      showAfterScroll.set(true);
    } else {
      showAfterScroll.set(false);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}