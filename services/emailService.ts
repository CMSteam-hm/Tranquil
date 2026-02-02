
import emailjs from '@emailjs/browser';

/**
 * Interface for the notification data
 */
interface EmailData {
  email: string;
  name: string;
  type: string;
  date?: string;
  time?: string;
  message?: string;
  rating?: number;
}

/**
 * Sends clinical and office notifications using EmailJS.
 */
export const sendEmailNotification = async (data: EmailData) => {
  // --- CONFIGURATION ---
  // Verify these 3 strings in your EmailJS Dashboard (https://dashboard.emailjs.com)
  const SERVICE_ID = 'service_8sbu533'; 
  const PUBLIC_KEY = 'Dx9Gj_mxotr1fS0Pw'; 
  const TEMPLATE_ID = 'template_iglrtgo'; 

  try {
    // Redundant mapping: We provide multiple names for the same data 
    // so your template works whether you used {{from_name}} or {{user_name}}.
    const templateParams = {
      // Standard Tags
      from_name: data.name,
      from_email: data.email,
      user_name: data.name,
      user_email: data.email,
      
      // Content Tags
      subject: `Tranquil Portal: ${data.type}`,
      message: data.message || `New ${data.type} submission received.`,
      notes: data.message,
      
      // Clinical Tags
      date: data.date || 'N/A',
      time: data.time || 'N/A',
      appointment_date: data.date,
      appointment_time: data.time,
      
      // Metadata
      rating: data.rating || 'N/A',
      form_type: data.type,
      to_email: data.email, // Use this for patient auto-replies
      reply_to: 'info@tranquilmentalhealthandwellness.com'
    };

    console.log(`[EmailJS] Attempting to send ${data.type} via Service: ${SERVICE_ID}...`);

    // Directly calling send with the public key for maximum compatibility
    const response = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams, 
      PUBLIC_KEY
    );
    
    console.log('✅ EmailJS Success Response:', response);
    return response;
  } catch (error: any) {
    /**
     * IF YOU SEE THE ERROR MESSAGE ON SCREEN, CHECK THIS LOG IN YOUR BROWSER CONSOLE:
     */
    console.error('❌ EmailJS Dispatch Failed. Diagnostics:', {
      errorCode: error?.status, // e.g. 401, 404, 400
      errorText: error?.text,   // e.g. "The user_id parameter is required"
      message: error?.message,
      check_list: [
        "Is SERVICE_ID 'service_8sbu533' correct?",
        "Is TEMPLATE_ID 'template_iglrtgo' correct?",
        "Is PUBLIC_KEY 'Dx9Gj_mxotr1fS0Pw' correct?",
        "Is the current domain whitelisted in EmailJS Security settings?"
      ]
    });
    
    return null;
  }
};
