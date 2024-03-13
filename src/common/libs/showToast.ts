import toast from 'react-hot-toast';

export const showSuccessToast = (text: string) => {
  toast.success(text, {
    style: {
      borderRadius: '12px',
      background: '#53BD6A',
      color: '#fff',
      width: '25rem',
      maxWidth: '25rem',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
  });
};
export const showErrorToast = (text: string) => {
  toast.error(text, {
    style: {
      borderRadius: '12px',
      background: '#EB4646',
      color: '#fff',
      width: '25rem',
      maxWidth: '25rem',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
  });
};
