import Image from "next/image";
import { siteConfig } from "@/lib/constants";

type PragyaFlowLogoProps = {
  tone?: "light" | "dark";
  showWordmark?: boolean;
  className?: string;
};

export default function PragyaFlowLogo({
  tone = "light",
  showWordmark = true,
  className = "",
}: PragyaFlowLogoProps) {
  const textClass = tone === "light" ? "text-[#f7f4ec]" : "text-ink";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-[#f7f4ec] shadow-sm">
        <Image
          src="/images/pragyaflow-logo.png"
          alt={`${siteConfig.name} logo`}
          width={251}
          height={212}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      {showWordmark ? (
        <span className={`text-xl font-medium tracking-normal ${textClass}`}>
          {siteConfig.name}
        </span>
      ) : null}
    </span>
  );
}
