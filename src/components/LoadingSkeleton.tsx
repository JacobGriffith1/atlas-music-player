type RowProps = {
  wide?: string;
  narrow?: string;
};

export default function LoadingSkeleton() {
  // one playlist row placeholder
  const Row = ({ wide = "w-2/3", narrow = "w-1/3" }: RowProps) => (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1 space-y-2">
        <div className={`h-4 rounded-md bg-[var(--color-surface-2)] ${wide}`} />
        <div className={`h-3 rounded-md bg-[var(--color-surface-2)] ${narrow}`} />
      </div>
      <div className="ml-4 h-4 w-12 shrink-0 rounded-md bg-[var(--color-surface-2)]" />
    </div>
  );

  return (
    <div className="rounded-3xl bg-[var(--color-surface)] shadow-xl">
      <div className="p-6 md:p-8">
        <div className="flex w-full flex-col gap-y-8 md:flex-row md:gap-x-[10%]">
          {/* Left: 'Currently Playing' skeleton */}
          <section className="md:w-[40%]">
            <div className="animate-pulse space-y-5">
              {/* cover art */}
              <div className="aspect-square w-full rounded-2xl bg-[var(--color-surface-2)]" />

              {/* title / artist lines */}
              <div className="space-y-3">
                <div className="h-6 w-2/5 rounded-md bg-[var(--color-surface-2)]" />
                <div className="h-5 w-1/4 rounded-md bg-[var(--color-surface-2)]" />
              </div>

              {/* controls row */}
              <div className="flex items-center justify-between gap-12 pt-1">
                <div className="h-5 w-8 rounded-md bg-[var(--color-surface-2)]" />

                <div className="h-8 w-8 rounded-md bg-[var(--color-surface-2)]" />
                <div className="grid h-14 w-14 place-items-center rounded-xl border-2 border-[var(--color-divider)]">
                  <div className="h-5 w-5 rounded-md bg-[var(--color-surface-2)]" />
                </div>
                <div className="h-8 w-8 rounded-md bg-[var(--color-surface-2)]" />
                <div className="h-8 w-8 rounded-md bg-[var(--color-surface-2)]" />
              </div>

              {/* volume slider */}
              <div className="flex items-center gap-4">
                <div className="h-5 w-5 rounded-md bg-[var(--color-surface-2)]" />
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full border border-[var(--color-divider)] bg-[var(--color-surface-2)]" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-1/3 rounded-full bg-[var(--color-divider)]">
                    <div className="absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-divider)]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider (horizontal on small, vertical on md+) */}
          <aside className="md:w-[40%] md:pl-[10%] md:border-l border-t md:border-t-0 border-[var(--color-divider)] pt-6 md:pt-0">
            <h2 className="mb-4 text-lg font-semibold text-[var(--color-ink)]">Playlist</h2>

            <div className="animate-pulse space-y-4 pr-1">
              <Row wide="w-3/5" narrow="w-2/5" />
              <Row wide="w-4/5" narrow="w-1/3" />
              <Row wide="w-2/3" narrow="w-1/4" />
              <Row wide="w-3/4" narrow="w-2/5" />
              <Row wide="w-2/3" narrow="w-1/3" />
              <Row wide="w-3/4" narrow="w-1/4" />
              <Row wide="w-4/5" narrow="w-2/5" />
              <Row wide="w-3/5" narrow="w-1/3" />
              <Row wide="w-2/3" narrow="w-1/4" />
              <Row wide="w-3/4" narrow="w-1/3" />
            </div>
          </aside>
        </div>
      </div>

      {/* screen-reader hint */}
      <span className="sr-only" role="status" aria-live="polite">
        Loading…
      </span>
    </div>
  );
}
