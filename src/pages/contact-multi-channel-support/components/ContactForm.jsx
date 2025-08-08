import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: '',
    language: 'english'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const inquiryTypes = [
    { value: 'order', label: 'Order Inquiry', description: 'Questions about existing or new orders' },
    { value: 'quality', label: 'Quality Concern', description: 'Product quality or freshness issues' },
    { value: 'catering', label: 'Catering Request', description: 'Bulk orders for events and meetings' },
    { value: 'delivery', label: 'Delivery Issue', description: 'Delivery timing or location questions' },
    { value: 'halal', label: 'Halal Certification', description: 'Questions about halal compliance' },
    { value: 'feedback', label: 'General Feedback', description: 'Suggestions and general comments' },
    { value: 'partnership', label: 'Business Partnership', description: 'Collaboration and partnership inquiries' },
    { value: 'other', label: 'Other', description: 'Any other questions or concerns' }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'russian', label: 'Русский' },
    { value: 'kazakh', label: 'Қазақша' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        subject: '',
        message: '',
        language: 'english'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you within 2 hours during business hours.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-warm-lg border border-border overflow-hidden">
          <div className="p-8">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm">We'll respond to your inquiry within 2 hours.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="AlertCircle" size={24} className="text-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-800">Error Sending Message</h4>
                    <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+7 777 123 4567"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                />
                
                <Select
                  label="Preferred Language"
                  options={languageOptions}
                  value={formData?.language}
                  onChange={(value) => handleInputChange('language', value)}
                  className="mb-0"
                />
              </div>

              <Select
                label="Inquiry Type"
                description="Select the category that best describes your inquiry"
                options={inquiryTypes}
                value={formData?.inquiryType}
                onChange={(value) => handleInputChange('inquiryType', value)}
                required
                searchable
                className="mb-0"
              />

              <Input
                label="Subject"
                type="text"
                placeholder="Brief description of your inquiry"
                value={formData?.subject}
                onChange={(e) => handleInputChange('subject', e?.target?.value)}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none bg-background text-foreground"
                  rows={6}
                  placeholder="Please provide detailed information about your inquiry..."
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="btn-warm flex-1"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  iconName="MessageSquare"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/77771234567', '_blank')}
                  className="flex-1"
                >
                  WhatsApp Instead
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-muted/50 px-8 py-6 border-t border-border">
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Languages" size={16} />
                <span>Multi-language support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;