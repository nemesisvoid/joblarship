import { create } from 'zustand';

import { Opportunities } from './sanity/types';

type searchStateType = {
  filters: { opportunity?: string; country?: string };
  results: Opportunities[];
  setFilters: (filters: { opportunity?: string; country?: string }) => void;
  setResults: (results: Opportunities[]) => void;
  country: string;
  setCountry: (country: string) => void;
  opportunity: string;
  setOpportunity: (opportunity: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  clearFilters: () => void;
};

export const useSearchStore = create<searchStateType>(set => ({
  results: [],
  country: '',
  isLoading: false,
  setIsLoading: isLoading => set({ isLoading }),
  opportunity: '',
  setOpportunity: opportunity => set({ opportunity }),
  filters: { opportunity: '', country: '' },
  setFilters: filters => set({ filters }),
  setResults: results => set({ results }),
  setCountry: country => set({ country }),
  clearFilters: () =>
    set({
      filters: { opportunity: '', country: '' },
      results: [],
      opportunity: '', // Reset opportunity
      country: '', // Reset country
    }),
}));
