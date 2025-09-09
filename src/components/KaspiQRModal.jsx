import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv, modalVariants } from './motion/MotionWrapper';
import Icon from './AppIcon';

const KaspiQRModal = ({ isOpen, onClose, link }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  if (!isOpen) return null;

  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(link || '')}`;

  return (
    <AnimatePresence>
      <MotionDiv
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <MotionDiv
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full max-w-md rounded-xl bg-background p-4 shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-heading font-semibold">Kaspi QR</h3>
            <button className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center" onClick={onClose}>
              <Icon name="X" size={16} />
            </button>
          </div>
          {link ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <img src={qrSrc} alt="Kaspi QR" className="rounded bg-white p-2" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Отсканируйте QR код в приложении Kaspi для оплаты.
              </p>
              <a href={link} target="_blank" rel="noreferrer" className="block text-center text-primary underline">
                Открыть в Kaspi
              </a>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">Ссылка Kaspi не настроена.</div>
          )}
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  );
};

export default KaspiQRModal;


