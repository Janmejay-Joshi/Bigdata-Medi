export interface MedicineReportInterface {
  timestamp: Date;

  doctor_id: string;
  report_id: string;

  diagnosis: string;
  medicines: [
    {
      name: string;
      dosage: number;
      duration: "M" | "E" | "N" | "ME" | "MN" | "EN" | "MEN";
    }
  ];
  precautions: [string];
  tags: [string];
}

export interface LabReportInterface {
  timestamp: Date;
}
