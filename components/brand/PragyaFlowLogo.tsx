type PragyaFlowLogoProps = {
  className?: string;
  /** Rendered logo height in pixels. Width follows the mark + wordmark. */
  height?: number;
  plate?: boolean;
  priority?: boolean;
};

const PETAL = "M0 0C-5 -10 -4.5 -19 0 -26C4.5 -19 5 -10 0 0Z";

export default function PragyaFlowLogo({
  className = "",
  height = 38,
  plate = false,
}: PragyaFlowLogoProps) {
  const fontSize = Math.round(height * 0.56);

  const logo = (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width={height}
        height={height}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <g transform="translate(24 32)">
          <path d={PETAL} transform="rotate(-60)" fill="#9ecb2d" />
          <path d={PETAL} transform="rotate(60)" fill="#9ecb2d" />
          <path d={PETAL} transform="rotate(-30)" fill="#174b44" />
          <path d={PETAL} transform="rotate(30)" fill="#174b44" />
          <path d={PETAL} fill="#10211f" />
        </g>
        <path
          d="M7 38.5C18 44.5 30 44.5 41 38.5"
          stroke="#007a70"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="font-bold leading-none tracking-tight"
        style={{ fontSize }}
      >
        <span className="text-ink">Pragya</span>
        <span className="text-accent">Flow</span>
      </span>
    </span>
  );

  if (plate) {
    return (
      <span className={`inline-flex items-center rounded-2xl bg-surface px-3 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.18)] ${className}`}>
        {logo}
      </span>
    );
  }

  return <span className={`inline-flex select-none items-center ${className}`}>{logo}</span>;
}
