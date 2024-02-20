export interface IVerifier {
  state: boolean;
  text: string;
  notice?: boolean;
}

const Verifier = ({ state, text, notice = false }: IVerifier) => {
  return (
    <>
      {(() => {
        if (notice) {
          return (
            <div className="mt-3 flex items-center">
              <img src="/images/icon/ui/alert-gray.svg" alt="" />
              <h5 className="text-caption-1 ml-1 text-gray-25">{text}</h5>
            </div>
          );
        }
        return (
          <div className="mt-3 flex items-center">
            <img src={state ? '/images/icon/ui/alert-success.svg' : '/images/icon/ui/alert-red.svg'} alt="" />
            <h5 className={`text-caption-1 ml-1 ${state ? 'text-success' : 'text-alert'}`}>{text}</h5>
          </div>
        );
      })()}
    </>
  );
};
export default Verifier;
