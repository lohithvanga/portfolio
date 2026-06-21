type BlobFieldProps = {
  className?: string;
};

export default function BlobField({ className = "" }: BlobFieldProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo/20 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-teal/15 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-lavender/20 blur-3xl animate-blob"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}
