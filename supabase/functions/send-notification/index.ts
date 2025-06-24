
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: 'contact' | 'emergency' | 'service';
  formData: {
    name: string;
    email?: string;
    phone: string;
    address?: string;
    message?: string;
    description?: string;
    serviceType?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, formData }: EmailRequest = await req.json();
    
    let subject = "";
    let htmlContent = "";
    
    if (type === 'emergency') {
      subject = "🚨 NOTFALL-ANFRAGE - Rohrreinigung";
      htmlContent = `
        <h2 style="color: #dc2626;">🚨 NOTFALL-ANFRAGE</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>Adresse:</strong> ${formData.address}</p>
        <p><strong>Beschreibung:</strong></p>
        <p>${formData.description}</p>
        <p style="color: #dc2626; font-weight: bold;">⚠️ Dies ist ein Notfall - Sofortige Reaktion erforderlich!</p>
      `;
    } else if (type === 'service') {
      subject = "Neue Service-Anfrage - Rohrreinigung";
      htmlContent = `
        <h2 style="color: #2563eb;">Neue Service-Anfrage</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>Service-Typ:</strong> ${formData.serviceType}</p>
        <p><strong>Beschreibung:</strong></p>
        <p>${formData.description}</p>
      `;
    } else {
      subject = "Neue Kontakt-Anfrage - Rohrreinigung";
      htmlContent = `
        <h2 style="color: #2563eb;">Neue Kontakt-Anfrage</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>E-Mail:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${formData.message}</p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Abwasser Technik <noreply@empriadental.de>",
      to: ["kanal-24@web.de"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
