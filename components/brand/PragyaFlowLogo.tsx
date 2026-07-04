import Image from "next/image";

type PragyaFlowLogoProps = {
  className?: string;
  /** Rendered logo height in pixels. Width follows the cropped logo ratio. */
  height?: number;
  plate?: boolean;
  priority?: boolean;
};

const LOGO_WIDTH = 1828;
const LOGO_HEIGHT = 443;
const ASPECT = LOGO_WIDTH / LOGO_HEIGHT;

export default function PragyaFlowLogo({
  className = "",
  height = 38,
  plate = false,
  priority = false,
}: PragyaFlowLogoProps) {
  const renderedWidth = Math.round(height * ASPECT);

  const logo = (
    <Image
      src="/images/pragyaflow-logo-transparent.png"
      alt="PragyaFlow"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes={`${renderedWidth}px`}
      className="block shrink-0 select-none object-contain"
      style={{ width: renderedWidth, height }}
    />
  );

  if (plate) {
    return (
      <span className={`inline-flex items-center rounded-2xl bg-surface px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}>
        {logo}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{logo}</span>;
}
