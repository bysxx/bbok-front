import { Button } from '@components/buttons';

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
        <Button disabled={disabled} text={text} onClick={onClick} size="large" border={true} />
      </footer>
    </div>
  );
}
export default CheckListLayout;
