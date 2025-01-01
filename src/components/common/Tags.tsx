

const Tags = () => {
    return (
      <div className="my-4 flex items-center gap-2">
        <div
          className="flex items-center gap-2 rounded-full border border-transparent bg-blue-500/10
            px-3 py-1 text-xs font-semibold text-secondary-foreground transition-colors
            hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring
            focus:ring-offset-2"
        >
          <p className="h-2 w-2 rounded-full bg-blue-500"></p>
          <span>love</span>
        </div>
      </div>
    );
  };

  export default Tags;