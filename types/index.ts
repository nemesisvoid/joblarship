export enum Opportunity {
  Fellowship = 'Fellowship',
  Grant = 'Grant',
  Scholarship = 'Scholarship',
}

export enum JobDomain {
  Academic = 'Academic',
  Industry = 'Industry',
  Others = 'Others',
}

export enum EducationLevel {
  Undergraduate = 'Undergraduate',
  Masters = 'Masters',
  PhD = 'PhD',
}

export type OpportunityType = {
  title: string;
  subCategory: 'Academic' | 'Industry' | 'Others' | 'Fellowship' | 'Grant' | 'Scholarship';
  type: Opportunity;
  slug: string;
  jobDomain?: JobDomain;
  educationLevel?: EducationLevel;
  targetGroup?: 'Individuals' | 'Organizations';
  image: string;
  location: string;
  deadline?: string;
  description: string;
  applyLink?: string;
  requirements?: string[];
  eligibility?: string[];
  fieldsOfStudy?: string[];
  qualifications?: string[];
  tags?: string[];
  fundingType: string;
};
