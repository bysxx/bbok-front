export default function UiTooltip({ text }: { text: string }) {
  return (
    <div className="relative z-10 rounded-lg bg-orange-1 px-7 py-5">
      <div className="text-[15px] leading-none text-white">{text}</div>
      <div className="triangle absolute -bottom-2 left-1/2 border-orange-1" />
    </div>
  );
}
