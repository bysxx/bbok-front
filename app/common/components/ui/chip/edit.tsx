export default function UiChipEdit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-0.5 rounded-md border border-orange-1 p-2">
      <div className="text-sm leading-none text-orange-1">{text}</div>
      <img src="/images/icon/ui/close-orange.svg" alt="" />
    </div>
  );
}
