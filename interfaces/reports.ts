export interface MedicineReportInterface {
  timestamp: Date;

  diagnosis?: string;
  medicines: [
    {
      name: string;
      dosage: number;
      duration: "M" | "E" | "N" | "ME" | "MN" | "EN" | "MEN";
    }
  ];
  precautions: [string];
}

export interface LabReportInterface {
  timestamp: Date;
}
