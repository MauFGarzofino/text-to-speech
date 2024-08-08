import React, { useState } from 'react';
import { getTextToSpeech } from '../api/textToSpeech';

const LanguageLearning: React.FC = () => {
  const [text, setText] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTextToSpeech = async () => {
    setLoading(true);
    try {
      const response = await getTextToSpeech({
        text,
        voice: 'en-US_AllisonV3Voice',
        accept: 'audio/wav',
      });

      const url = URL.createObjectURL(response.audioContent);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error al convertir texto a voz:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ingresa el texto a convertir"
      />
      <button onClick={handleTextToSpeech} disabled={loading}>
        {loading ? 'Convirtiendo...' : 'Convertir a Voz'}
      </button>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl} />
        </div>
      )}
    </div>
  );
};

export default LanguageLearning;
