import { formatDuration } from '../utils/formatDuration';

type VideoGridItemType = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

export function VideGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded ">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`}>
          <img className="w-12 h-12 rounded-full" src={channel.profileUrl} />
        </a>
      </div>
      <div>{/* <a href={/>wat}></a> */}</div>
    </div>
  );
}
