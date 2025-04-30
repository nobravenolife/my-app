'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // 秒数に基づいて色を計算（より鮮やかな変化に）
  const hue = (seconds * 10) % 360;  // 10度ずつ変化
  const hue2 = ((seconds * 10) + 120) % 360;
  const hue3 = ((seconds * 10) + 240) % 360;

  return (
    <div 
      className="min-h-screen text-white flex flex-col items-center justify-center transition-colors duration-1000"
      style={{
        background: `linear-gradient(135deg, 
          hsl(${hue}, 50%, 15%),
          hsl(${hue2}, 50%, 12%),
          hsl(${hue3}, 50%, 18%)
        )`
      }}
    >
      {/* デジタル時計 */}
      <div className="text-9xl font-mono font-bold text-white/90 tracking-wider">
        <span className="text-white">{hours.toString().padStart(2, '0')}</span>
        <span className="text-white">:</span>
        <span className="text-white">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-white">:</span>
        <span className="text-white">{seconds.toString().padStart(2, '0')}</span>
      </div>
      
      {/* 日付 */}
      <div className="text-3xl text-white/70 mt-8">
        {time.toLocaleDateString('ja-JP', { 
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
}
