import BoxButton from '@components/buttons/box-button';

interface IFooterButtonLayoutProps {
  children: React.ReactNode;
  disabled?: boolean;
  text: string;
  border?: boolean;
  onClick: () => void;
  isLoading?: boolean;
}
const FooterButtonLayout = ({
  children,
  disabled,
  text,
  onClick,
  border = true,
  isLoading = false,
}: IFooterButtonLayoutProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col">{children}</div>
      <footer className={`sticky bottom-0 ${!border && 'bg-white px-6 pb-8'} `}>
        <BoxButton disabled={disabled} text={text} border={border} onClick={onClick} isLoading={isLoading} />
      </footer>
    </div>
  );
};
export default FooterButtonLayout;
