import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionDiv } from '../motion/MotionWrapper';
import Icon from '../AppIcon';

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SheetPortal = ({ children, ...props }) => (
  <DialogPrimitive.Portal {...props}>
    {children}
  </DialogPrimitive.Portal>
);

const SheetOverlay = React.forwardRef(({ className = '', ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm ${className}`}
    {...props}
    ref={ref}
    asChild
  >
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  </DialogPrimitive.Overlay>
));
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;

const sheetVariants = {
  top: {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' }
  },
  bottom: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' }
  },
  left: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' }
  },
  right: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' }
  }
};

const SheetContent = React.forwardRef(({ 
  side = 'bottom', 
  className = '', 
  children, 
  ...props 
}, ref) => {
  const sideClasses = {
    top: 'inset-x-0 top-0 border-b rounded-b-2xl',
    bottom: 'inset-x-0 bottom-0 border-t rounded-t-2xl',
    left: 'inset-y-0 left-0 h-full w-3/4 border-r rounded-r-2xl sm:max-w-sm',
    right: 'inset-y-0 right-0 h-full w-3/4 border-l rounded-l-2xl sm:max-w-sm'
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out ${sideClasses[side]} ${className}`}
        {...props}
        asChild
      >
        <MotionDiv
          variants={sheetVariants[side]}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ 
            duration: 0.3, 
            ease: [0.32, 0.72, 0, 1] // Custom easing for smooth mobile feel
          }}
          // Add drag to dismiss for bottom sheets
          {...(side === 'bottom' && {
            drag: 'y',
            dragConstraints: { top: 0, bottom: 300 },
            dragElastic: 0.1,
            onDragEnd: (event, info) => {
              if (info.offset.y > 100) {
                // Close sheet if dragged down enough
                const closeButton = document.querySelector('[data-radix-collection-item]');
                closeButton?.click();
              }
            }
          })}
        >
          {/* Drag handle for bottom sheets */}
          {side === 'bottom' && (
            <div className="flex justify-center py-2">
              <div className="w-12 h-1 bg-muted rounded-full" />
            </div>
          )}
          {children}
          <DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
            <Icon name="X" size={16} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </MotionDiv>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = DialogPrimitive.Content.displayName;

const SheetHeader = ({ className = '', ...props }) => (
  <div className={`flex flex-col space-y-2 text-center sm:text-left ${className}`} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className = '', ...props }) => (
  <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef(({ className = '', ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={`text-lg font-semibold text-foreground ${className}`}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

const SheetDescription = React.forwardRef(({ className = '', ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
};
