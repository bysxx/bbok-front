export default function UiToast({ text, type }: { text: string; type: 'success' | 'error' }) {
  return (
    <div
      className={`rounded-xl ${
        type === 'success' ? 'bg-[#53BD6A]' : 'bg-alert'
      } p-4 text-[15px] leading-none text-white`}
    >
      {text}
    </div>
  );
}
