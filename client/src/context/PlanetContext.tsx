import React, {
  createContext, // Used to create a new Context object
  useState, // Hook to add state to our functional component
  useMemo, // Hook to memoize values to optimize performance
  ReactNode, // Type for children prop to accept any valid React child (e.g., elements)
  Dispatch, // Type used for the updater function returned by useState
  SetStateAction, // Type defining the actions that can be done to update state
} from 'react';

// Define the shape of the context data
type PlanetContextType = {
  planetRefs: Record<string, React.RefObject<any>>;
  setPlanetRefs: Dispatch<SetStateAction<Record<string, React.RefObject<any>>>>;
};

// Default value for the context, to be used before the actual value is provided
const defaultContextValue: PlanetContextType = {
  planetRefs: {}, // Initially an empty object
  setPlanetRefs: () => {}, // Placeholder function, does nothing by default
};

// Create a Context object with the default value
const PlanetContext = createContext<PlanetContextType>(defaultContextValue);

// Define props for the provider component, expects children nodes
type PlanetProviderProps = {
  children: ReactNode; // Accepts any valid React child
};

// Create the provider component
function PlanetProvider({ children }: PlanetProviderProps) {
  // State to hold references to all planets, initially an empty object
  const [planetRefs, setPlanetRefs] = useState<
    Record<string, React.RefObject<any>>
  >({});

  // Memoize the context value to prevent unnecessary renders
  // Only recalculates when planetRefs changes
  const value = useMemo(() => ({ planetRefs, setPlanetRefs }), [planetRefs]);

  console.log(planetRefs);

  // Render the provider component, passing the value to all consuming components
  return (
    <PlanetContext.Provider value={value}>{children}</PlanetContext.Provider>
  );
}

// Export the context and the provider so they can be used in other components
export { PlanetContext, PlanetProvider };
