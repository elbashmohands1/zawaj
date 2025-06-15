import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create a writable store with initial value
export const isMobile = writable(false);

// Function to initialize responsive detection with a custom breakpoint
export function initResponsiveDetection(breakpoint = 1024) {
  if (!browser) return; // Only run in browser environment
  
  const checkScreenSize = () => {
    isMobile.set(window.innerWidth < breakpoint);
  };
  
  // Check on initial load
  checkScreenSize();
  
  // Add event listener
  window.addEventListener('resize', checkScreenSize);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('resize', checkScreenSize);
  };
}