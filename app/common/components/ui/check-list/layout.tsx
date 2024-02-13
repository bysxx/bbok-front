import BoxButton from '@components/buttons/box-button';

interface CheckListLayoutProps {
  children: React.ReactNode;
  disabled: boolean;
  onClick: () => void;
  text: string;
}
function CheckListLayout({ children, disabled, onClick, text }: CheckListLayoutProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      <footer className="sticky bottom-0 mt-24 h-[90px]">
        <BoxButton disabled={disabled} text={text} border={true} onClick={onClick} />
      </footer>
    </div>
  );
}
export default CheckListLayout;
