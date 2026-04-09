interface ChapterHeadingProps {
  marker: string;
  children: React.ReactNode;
}

const ChapterHeading = ({ marker, children }: ChapterHeadingProps) => (
  <div className="mb-8">
    <div className="flex items-center gap-4 mb-7">
      <div className="flex-1 h-px bg-border" />
      <span className="font-sans-ui text-[10px] font-medium tracking-[2px] uppercase text-ink-faint whitespace-nowrap">
        {marker}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-ink">
      {children}
    </h2>
  </div>
);

export default ChapterHeading;
