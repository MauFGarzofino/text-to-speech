import ImageAtom from "../../atoms/media/ImageAtom";
import TextAtom from "../../atoms/typography/Text";

interface SongRowProps {
  number: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  imageUrl: string;
}

const SongsRows = ({ number, title, artist, album, duration, imageUrl }: SongRowProps) => {
  return (
    <tr className="group transform transition-all duration-300 hover:scale-105 cursor-pointer">
      <td className="py-4 text-gray-400 align-mid pr-6">{number}</td>
      <td className="py-4">
        <div className="flex items-start">
          <ImageAtom src={imageUrl} alt={`${title} album art`} width={56} height={56} className="mr-4 rounded" />
          <div>
            <TextAtom text={title} fontWeight="medium" fontSize="1rem" />
            <TextAtom text={artist} fontSize="0.875rem" fontWeight="normal" color="#9CA3AF" />
          </div>
        </div>
      </td>
      <td className="py-4 text-gray-400 align-mid">{album}</td>
      <td className="py-4 text-gray-400 text-right align-mid pr-6">{duration}</td>
    </tr>
  );
};

export default SongsRows;

