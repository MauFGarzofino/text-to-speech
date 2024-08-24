import { useState } from "react";
import { getTextToSpeech } from "../../../api/textToSpeech";
import Textarea from "../../atoms/inputs/TextArea";
import AudioPlayer from "../../atoms/media/AudioPlayer";

const LanguageConverter = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTextToSpeech = async () => {
    setLoading(true);
    try {
      const response = await getTextToSpeech({
        text,
        voice: "en-US_AllisonV3Voice",  
        accept: "audio/wav",  
      });
      const url = URL.createObjectURL(response.audioContent);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error converting text to speech:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="language-converter-container">
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert"
      />
      <button onClick={handleTextToSpeech} disabled={loading}>
        {loading ? "Converting..." : "Convert to Speech"}
      </button>
      <AudioPlayer src={audioUrl} />
    </div>
  );
};

export default LanguageConverter;
