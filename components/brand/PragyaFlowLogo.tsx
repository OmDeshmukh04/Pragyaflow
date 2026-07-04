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
  const logo = (
    <Image
      src="/images/pragyaflow-logo-transparent.png"
      alt="PragyaFlow"
      width={Math.round(height * ASPECT)}
      height={height}
      priority={priority}
      className="block h-auto w-auto shrink-0"
      style={{ height }}
    />
  );

  if (plate) {
    return (
      <span className={`inline-flex items-center rounded-lg bg-[#f7f4ec] px-2.5 py-1.5 shadow-sm ${className}`}>
        {logo}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{logo}</span>;
}
