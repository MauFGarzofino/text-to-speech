interface TextToSpeechRequest {
    text: string;
    voice: string;  // Example: 'en-US_AllisonV3Voice'
    accept: string; // Example: 'audio/wav'
  }
  
  interface TextToSpeechResponse {
    audioContent: Blob;
  }
  
  const API_KEY = import.meta.env.VITE_IBM_API_KEY;
  const API_URL = `${import.meta.env.VITE_IBM_API_URL}/v1/synthesize`;
  
  export async function getTextToSpeech(request: TextToSpeechRequest): Promise<TextToSpeechResponse> {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`apikey:${API_KEY}`)}`,
        'Accept': request.accept,
      },
      body: JSON.stringify({
        text: request.text,
        voice: request.voice,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Error al procesar la solicitud de Text to Speech');
    }
  
    const audioBlob = await response.blob();
    return { audioContent: audioBlob };
  }
  