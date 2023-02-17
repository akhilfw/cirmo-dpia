import { IPiaFormIntake } from '../../components/public/PIAFormTabs/intake/pia-form-intake.interface';

export interface IPiaForm extends IPiaFormIntake {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
  saveId?: number;
  submittedAt?: Date | null;
}

export interface IPiaFormResponse {
  data: IPiaForm;
  total: number;
  page: number;
  pageSize: number;
}
