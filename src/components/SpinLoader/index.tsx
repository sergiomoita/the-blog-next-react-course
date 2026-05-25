type SpinLoaderProps = {
  className?: string;
};

export function SpinLoader({ className = "" }: SpinLoaderProps) {
  const classes = "flex items-center justify-center " + className;

  return (
    <div className={classes}>
      <div className="w-10 h-10 border-5 border-bg-slate-900 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}
