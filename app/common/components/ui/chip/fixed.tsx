export default function UiChipFixed({ text }: { text: string }) {
  return (
    <div className="rounded-md bg-gray-25 p-1.5">
      <div className="text-sm leading-none text-white">{text}</div>
    </div>
  );
}
