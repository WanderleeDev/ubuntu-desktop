export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "danger"
  | "success";

export const BUTTON_STYLES = {
  base: "flex items-center gap-2 transition-all active:scale-95 font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed",
  primary:
    "px-6 py-2.5 bg-system hover:bg-system-active text-white shadow-lg shadow-system/20",
  secondary:
    "px-4 py-2 bg-system/10 hover:bg-system/20 text-system border border-system/20",
  accent:
    "px-4 py-2 bg-accent hover:bg-accent-hover text-text border border-white/10 shadow-sm",
  danger:
    "px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 border border-red-500/30",
  success:
    "px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-500 border border-green-500/30",
};
