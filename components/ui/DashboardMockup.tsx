"use client";

const portalModules = [
  ["Client portal", "Requests, files, approvals"],
  ["Admin console", "Users, roles, settings"],
  ["Billing layer", "Plans and invoice-ready data"],
];

const reconRows = [
  { source: "Bank statement", target: "Ledger entry", status: "Matched" },
  { source: "Payment file", target: "Invoice record", status: "Matched" },
  { source: "Gateway export", target: "Settlement batch", status: "Review" },
  { source: "Manual upload", target: "Report line", status: "Mapped" },
];

const reports = [
  { name: "Daily finance summary", cadence: "Every morning", owner: "Finance" },
  { name: "Client performance pack", cadence: "Weekly", owner: "Ops" },
  { name: "Exception register", cadence: "Live", owner: "Audit" },
];

const mobileTasks = [
  ["Approval queue", "12 pending"],
  ["Field update", "Synced"],
  ["Customer request", "In review"],
  ["Document capture", "Ready"],
];

function PanelHeader({ title, badge }: { title: string; badge: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[13px] font-semibold text-ink">{title}</span>
      <span className="rounded-full bg-primary/20 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
        {badge}
      </span>
    </div>
  );
}

function SaaSPanel() {
  return (
    <div className="p-5">
      <PanelHeader title="SaaS Product Base" badge="Scope ready" />
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[
          ["Roles", "Admin + client"],
          ["Modules", "4 active"],
          ["Launch", "MVP first"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-ink/[0.04] p-3">
            <div className="mb-1 text-[10px] text-muted">{label}</div>
            <div className="text-sm font-bold text-ink">{value}</div>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {portalModules.map(([title, detail]) => (
          <div
            key={title}
            className="flex items-center justify-between rounded-lg border border-ink/5 bg-white/75 px-3 py-2.5"
          >
            <div>
              <div className="text-[12px] font-semibold text-ink">{title}</div>
              <div className="text-[10px] text-muted">{detail}</div>
            </div>
            <span className="rounded-full bg-primary/20 px-2 py-1 text-[10px] font-semibold text-accent">
              Build
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinancePanel() {
  return (
    <div className="p-5">
      <PanelHeader title="Finance Automation" badge="Recon flow" />
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 gap-y-1.5 items-center">
        <div className="text-[10px] uppercase tracking-wider text-muted">Source</div>
        <div />
        <div className="text-right text-[10px] uppercase tracking-wider text-muted">System</div>
        {reconRows.map((row) => {
          const needsReview = row.status === "Review";
          return (
            <div key={`${row.source}-${row.target}`} className="contents">
              <div className="truncate rounded-lg border border-ink/5 bg-white/75 px-2.5 py-2 text-[11px] text-ink">
                {row.source}
              </div>
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${
                  needsReview ? "bg-amber-100 text-amber-700" : "bg-primary/25 text-accent"
                }`}
              >
                {needsReview ? "!" : "OK"}
              </div>
              <div
                className={`truncate rounded-lg px-2.5 py-2 text-right text-[11px] ${
                  needsReview
                    ? "border border-amber-200 bg-amber-50 text-amber-800"
                    : "border border-ink/5 bg-white/75 text-ink"
                }`}
              >
                {row.target}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 rounded-lg border border-ink/10 bg-ink/[0.03] px-3 py-2 text-[11px] text-deep">
        Exceptions can be routed to review before reports are finalized.
      </div>
    </div>
  );
}

function ReportingPanel() {
  return (
    <div className="p-5">
      <PanelHeader title="Reporting Hub" badge="Scheduled" />
      <div className="mb-4 rounded-lg border border-ink/5 bg-white/75 p-4">
        <div className="mb-2 text-[11px] uppercase tracking-wider text-muted">Report pipeline</div>
        <div className="flex items-end gap-2 h-28">
          {[42, 64, 52, 78, 68, 90, 74].map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-t bg-gradient-to-t from-[#0f766e] to-primary"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {reports.map((report) => (
          <div
            key={report.name}
            className="grid grid-cols-[1fr_auto] gap-2 rounded-lg border border-ink/5 bg-white/75 px-3 py-2"
          >
            <div className="min-w-0">
              <div className="truncate text-[12px] font-semibold text-ink">{report.name}</div>
              <div className="text-[10px] text-muted">{report.owner}</div>
            </div>
            <span className="self-center rounded-full bg-primary/20 px-2 py-1 text-[10px] font-medium text-accent">
              {report.cadence}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePanel() {
  return (
    <div className="p-5">
      <PanelHeader title="Mobile Workflow" badge="App flow" />
      <div className="mx-auto max-w-[230px] rounded-[24px] border border-ink/10 bg-ink p-2 shadow-xl">
        <div className="rounded-[18px] bg-[#f2f4f0] p-3">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-ink">Today</span>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
          <div className="space-y-2">
            {mobileTasks.map(([task, status]) => (
              <div key={task} className="rounded-lg bg-white px-3 py-2 shadow-sm">
                <div className="text-[11px] font-semibold text-ink">{task}</div>
                <div className="text-[10px] text-muted">{status}</div>
              </div>
            ))}
          </div>
          <button className="mt-3 w-full rounded-lg bg-primary px-3 py-2 text-[11px] font-semibold text-ink">
            Review queue
          </button>
        </div>
      </div>
    </div>
  );
}

const panels = [SaaSPanel, FinancePanel, ReportingPanel, MobilePanel];

export default function DashboardMockup({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-white/80 shadow-[0_24px_70px_rgba(0,52,52,0.14)] backdrop-blur">
        <div className="flex items-center gap-2 border-b border-ink/5 bg-white/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 rounded-md bg-ink/[0.05] px-3 py-1 text-[10px] text-muted font-mono">
            build.nexpay.io
          </div>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[380px]">
          {panels.map((Panel, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-all duration-700"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transform: `scale(${activeIndex === i ? 1 : 0.97}) translateY(${activeIndex === i ? 0 : 12}px)`,
                pointerEvents: activeIndex === i ? "auto" : "none",
              }}
            >
              <Panel />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
