import { FormData, SubmitResponse } from '../types';

// In a real app, this would be an Axios call to your Node.js/Next.js backend
export const submitScheduleForm = async (data: FormData): Promise<SubmitResponse> => {
  return new Promise((resolve) => {
    console.log("Submitting to backend...", data);
    
    // Simulate network delay
    setTimeout(() => {
      resolve({
        success: true,
        message: "Agendamento solicitado com sucesso! Verifique seu e-mail.",
        eventLink: "https://meet.google.com/abc-defg-hij" // Example mocked link
      });
    }, 1500);
  });
};