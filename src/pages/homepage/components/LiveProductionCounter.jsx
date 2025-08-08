import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LiveProductionCounter = ({ currentLanguage }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [productionData, setProductionData] = useState({
    croissants: 247,
    painAuChocolat: 189,
    freshBread: 156,
    activeBakers: 3
  });

  const content = {
    en: {
      title: "Live Production",
      subtitle: "Real-time baking activity from our 24/7 kitchen",
      items: {
        croissants: "Croissants",
        painAuChocolat: "Pain au Chocolat",
        freshBread: "Fresh Bread",
        activeBakers: "Master Bakers"
      },
      labels: {
        baked: "Baked Today",
        active: "Currently Active",
        lastBatch: "Last Batch",
        nextBatch: "Next Batch"
      },
      status: "Live Now"
    },
    ru: {
      title: "Живое производство",
      subtitle: "Активность выпечки в реальном времени с нашей круглосуточной кухни",
      items: {
        croissants: "Круассаны",
        painAuChocolat: "Пан-о-шокола",
        freshBread: "Свежий хлеб",
        activeBakers: "Мастера-пекари"
      },
      labels: {
        baked: "Испечено сегодня",
        active: "Сейчас активны",
        lastBatch: "Последняя партия",
        nextBatch: "Следующая партия"
      },
      status: "В эфире"
    },
    kz: {
      title: "Тікелей өндіріс",
      subtitle: "Біздің 24/7 асханадан нақты уақыттағы пісіру белсенділігі",
      items: {
        croissants: "Круассандар",
        painAuChocolat: "Пан-о-шокола",
        freshBread: "Жаңа нан",
        activeBakers: "Шебер наубайшылар"
      },
      labels: {
        baked: "Бүгін пісірілді",
        active: "Қазір белсенді",
        lastBatch: "Соңғы партия",
        nextBatch: "Келесі партия"
      },
      status: "Қазір эфирде"
    }
  };

  const currentContent = content?.[currentLanguage] || content?.en;

  // Simulate real-time updates
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const dataInterval = setInterval(() => {
      setProductionData(prev => ({
        croissants: prev?.croissants + Math.floor(Math.random() * 3),
        painAuChocolat: prev?.painAuChocolat + Math.floor(Math.random() * 2),
        freshBread: prev?.freshBread + Math.floor(Math.random() * 2),
        activeBakers: 2 + Math.floor(Math.random() * 3)
      }));
    }, 15000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dataInterval);
    };
  }, []);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getNextBatchTime = () => {
    const next = new Date(currentTime);
    next?.setMinutes(next?.getMinutes() + (30 - (next?.getMinutes() % 30)));
    next?.setSeconds(0);
    return formatTime(next);
  };

  const getLastBatchTime = () => {
    const last = new Date(currentTime);
    last?.setMinutes(last?.getMinutes() - (last?.getMinutes() % 30));
    last?.setSeconds(0);
    return formatTime(last);
  };

  const productionItems = [
    {
      key: 'croissants',
      icon: 'Cookie',
      count: productionData?.croissants,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      key: 'painAuChocolat',
      icon: 'Cake',
      count: productionData?.painAuChocolat,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      key: 'freshBread',
      icon: 'Coffee',
      count: productionData?.freshBread,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-red-600">{currentContent?.status}</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            {currentContent?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {currentContent?.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Clock & Status */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="artisanal-card p-6 bg-card h-full">
              <div className="text-center mb-6">
                <div className="text-4xl lg:text-5xl font-mono font-bold text-primary mb-2">
                  {formatTime(currentTime)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Almaty Time (GMT+6)
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">{currentContent?.labels?.lastBatch}</span>
                  <span className="text-sm font-medium text-foreground">{getLastBatchTime()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm text-muted-foreground">{currentContent?.labels?.nextBatch}</span>
                  <span className="text-sm font-medium text-foreground">{getNextBatchTime()}</span>
                </div>
              </div>

              {/* Active Bakers */}
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    {currentContent?.items?.activeBakers}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-3xl font-heading font-bold text-primary">
                    {productionData?.activeBakers}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentContent?.labels?.active}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Production Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid md:grid-cols-3 gap-6 h-full">
              {productionItems?.map((item, index) => (
                <motion.div
                  key={item?.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`artisanal-card p-6 ${item?.bgColor} border ${item?.borderColor} text-center`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Icon name={item?.icon} size={28} className={item?.color} />
                    </div>
                  </div>

                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {currentContent?.items?.[item?.key]}
                  </h3>

                  <motion.div
                    key={item?.count}
                    initial={{ scale: 1.2, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-heading font-bold text-foreground mb-2"
                  >
                    {item?.count}
                  </motion.div>

                  <div className="text-sm text-muted-foreground">
                    {currentContent?.labels?.baked}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full ${item?.color?.replace('text-', 'bg-')}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min((item?.count / 300) * 100, 100)}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      ></motion.div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Daily Target: 300
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Production Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="artisanal-card p-6 bg-card">
            <h3 className="text-xl font-heading font-bold text-card-foreground mb-6 text-center">
              24-Hour Production Schedule
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { time: '00:00-06:00', item: 'Night Croissants', status: 'active' },
                { time: '06:00-12:00', item: 'Morning Fresh', status: 'completed' },
                { time: '12:00-18:00', item: 'Afternoon Batch', status: 'upcoming' },
                { time: '18:00-24:00', item: 'Evening Special', status: 'upcoming' }
              ]?.map((schedule, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border text-center transition-all duration-300 ${
                    schedule?.status === 'active' ?'bg-green-50 border-green-200 shadow-sm'
                      : schedule?.status === 'completed' ?'bg-blue-50 border-blue-200' :'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="text-sm font-medium text-foreground mb-1">
                    {schedule?.time}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {schedule?.item}
                  </div>
                  {schedule?.status === 'active' && (
                    <div className="mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveProductionCounter;