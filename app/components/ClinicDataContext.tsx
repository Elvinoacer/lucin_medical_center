"use client";

import { createContext, useContext } from "react";
import { clinic } from "../lib/data";

type ClinicData = typeof clinic;

const ClinicDataContext = createContext<ClinicData>(clinic);

export function ClinicDataProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClinicDataContext.Provider value={clinic}>
      {children}
    </ClinicDataContext.Provider>
  );
}

export function useClinic() {
  return useContext(ClinicDataContext);
}
