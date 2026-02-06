import Image from "next/image";

type ActionPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  activity: string;
  metric?: string;
  status?: string;
  className?: string;
};

export function ActionPhoto({
  src,
  alt,
  width,
  height,
  activity,
  metric,
  status = "ACTIVE",
  className = "",
}: ActionPhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover brightness-95"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="space-y-1 text-[10px] font-mono uppercase tracking-widest text-white">
          <p>[ACTIVITY: {activity}]</p>
          {metric && <p>[METRIC: {metric}]</p>}
          <p>[STATUS: {status}]</p>
        </div>
      </div>
    </div>
  );
}
