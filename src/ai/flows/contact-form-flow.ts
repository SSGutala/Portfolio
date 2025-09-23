'use server';
/**
 * @fileOverview A flow to handle contact form submissions.
 *
 * - handleFormSubmission - A function that processes the contact form data.
 * - ContactFormData - The input type for the handleFormSubmission function.
 * - ContactFormResponse - The return type for the handleFormSubmission function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ContactFormDataSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person.'),
  topic: z.string().describe('The selected topic of the inquiry.'),
  message: z.string().describe('The message content.'),
});
export type ContactFormData = z.infer<typeof ContactFormDataSchema>;

const ContactFormResponseSchema = z.object({
  confirmationMessage: z.string().describe('A friendly confirmation message to be shown to the user.'),
  summary: z.string().describe('A one-sentence summary of the user\'s message.'),
});
export type ContactFormResponse = z.infer<typeof ContactFormResponseSchema>;

export async function handleFormSubmission(input: ContactFormData): Promise<ContactFormResponse> {
  return contactFormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contactFormPrompt',
  input: { schema: ContactFormDataSchema },
  output: { schema: ContactFormResponseSchema },
  prompt: `You are a helpful assistant for a portfolio website. A user has submitted a contact form.
Your task is to process this information and generate a friendly confirmation message and a one-sentence summary of their inquiry.

The user's name is {{{name}}}.
Their email is {{{email}}}.
The topic is {{{topic}}}.
Their message is:
"{{{message}}}"

Based on this, please provide the confirmation message and the summary.
The confirmation message should be addressed to the user by name.
`,
});

const contactFormFlow = ai.defineFlow(
  {
    name: 'contactFormFlow',
    inputSchema: ContactFormDataSchema,
    outputSchema: ContactFormResponseSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    
    // In a real application, you would add logic here to send an email.
    // For example, using a service like SendGrid, Resend, or Nodemailer.
    //
    // console.log('--- EMAIL TO ADMIN ---');
    // console.log('From:', input.name, `<${input.email}>`);
    // console.log('Topic:', input.topic);
    // console.log('Summary:', result.summary);
    // console.log('--------------------');
    
    return output!;
  }
);
