export interface ProjectField {
    name: string;
    type: 'string' | 'array' | 'datetime' | 'select' | 'email' | 'tel';
    required: boolean;
    options?: string[]; // For select or array types
  }
  
  export interface NicheSchema {
    id: string;
    title: string;
    description: string;
    fields: ProjectField[];
  }
  
  export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
  }
  
  export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    metrics?: string;
  }
  
  export interface ABVariant {
    headline: string;
    ctaPrimary: string;
  }
  
  export interface FormData {
    [key: string]: string | string[] | Date;
  }
  
  export interface SubmitResponse {
    success: boolean;
    message?: string;
    eventLink?: string;
  }