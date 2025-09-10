import React from 'react';

const TestPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold text-foreground mb-4">
        French Croissant - Тест страница
      </h1>
      <p className="text-lg text-muted-foreground mb-4">
        Если вы видите эту страницу, значит React работает правильно!
      </p>
      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-2">Статус компонентов:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ React загружен</li>
          <li>✅ Tailwind CSS работает</li>
          <li>✅ Роутинг функционирует</li>
          <li>✅ Дизайн система загружена</li>
        </ul>
      </div>
      <div className="mt-8">
        <button 
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors btn-warm"
          onClick={() => alert('Кнопка работает!')}
        >
          Тест кнопки
        </button>
      </div>
      
      <div className="mt-8 p-4 bg-accent/20 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Навигация:</h3>
        <div className="space-x-4">
          <a href="/menu" className="text-primary hover:underline">Меню</a>
          <a href="/menu/delivery" className="text-primary hover:underline">Доставка</a>
          <a href="/menu/delivery/list?current_section=58b29529-db33-45fc-a4d1-5e8461753ebe" className="text-primary hover:underline">Deep Link</a>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
