import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QRCodeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold text-foreground">QR Menu Access</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* QR Code */}
        <div className="text-center mb-6">
          <div className="bg-white p-4 rounded-lg inline-block mb-4">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              className="border border-border rounded"
            >
              {/* QR Code Pattern */}
              <rect width="200" height="200" fill="white"/>
              
              {/* Corner squares */}
              <rect x="10" y="10" width="50" height="50" fill="black"/>
              <rect x="20" y="20" width="30" height="30" fill="white"/>
              <rect x="25" y="25" width="20" height="20" fill="black"/>
              
              <rect x="140" y="10" width="50" height="50" fill="black"/>
              <rect x="150" y="20" width="30" height="30" fill="white"/>
              <rect x="155" y="25" width="20" height="20" fill="black"/>
              
              <rect x="10" y="140" width="50" height="50" fill="black"/>
              <rect x="20" y="150" width="30" height="30" fill="white"/>
              <rect x="25" y="155" width="20" height="20" fill="black"/>
              
              {/* Data pattern */}
              <rect x="70" y="10" width="10" height="10" fill="black"/>
              <rect x="90" y="10" width="10" height="10" fill="black"/>
              <rect x="110" y="10" width="10" height="10" fill="black"/>
              <rect x="70" y="30" width="10" height="10" fill="black"/>
              <rect x="110" y="30" width="10" height="10" fill="black"/>
              <rect x="80" y="40" width="10" height="10" fill="black"/>
              <rect x="100" y="40" width="10" height="10" fill="black"/>
              <rect x="120" y="40" width="10" height="10" fill="black"/>
              
              {/* More pattern elements */}
              <rect x="10" y="70" width="10" height="10" fill="black"/>
              <rect x="30" y="70" width="10" height="10" fill="black"/>
              <rect x="50" y="70" width="10" height="10" fill="black"/>
              <rect x="70" y="70" width="10" height="10" fill="black"/>
              <rect x="90" y="70" width="10" height="10" fill="black"/>
              <rect x="110" y="70" width="10" height="10" fill="black"/>
              <rect x="130" y="70" width="10" height="10" fill="black"/>
              <rect x="150" y="70" width="10" height="10" fill="black"/>
              <rect x="170" y="70" width="10" height="10" fill="black"/>
              <rect x="190" y="70" width="10" height="10" fill="black"/>
              
              {/* Center alignment pattern */}
              <rect x="85" y="85" width="30" height="30" fill="black"/>
              <rect x="90" y="90" width="20" height="20" fill="white"/>
              <rect x="95" y="95" width="10" height="10" fill="black"/>
            </svg>
          </div>
          
          <h3 className="text-lg font-medium text-foreground mb-2">Scan for Mobile Menu</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Open your camera app and point it at the QR code to access our mobile-optimized menu
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary-foreground">1</span>
            </div>
            <p className="text-sm text-foreground">Open your phone's camera app</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary-foreground">2</span>
            </div>
            <p className="text-sm text-foreground">Point the camera at the QR code</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary-foreground">3</span>
            </div>
            <p className="text-sm text-foreground">Tap the notification to open the menu</p>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="border-t border-border pt-4">
          <p className="text-sm text-muted-foreground text-center mb-3">
            Or share the menu link directly:
          </p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" iconName="Share" iconPosition="left">
              Share Link
            </Button>
            <Button variant="outline" size="sm" iconName="Copy" iconPosition="left">
              Copy URL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;