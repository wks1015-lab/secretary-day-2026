/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Quote, RefreshCw } from 'lucide-react';

const GRATITUDE_MESSAGES = [
  "感謝您對每一個瑣碎細節的極致追求，讓團隊運作無後顧之憂。",
  "您的溝通能力如同潤滑劑，化解了無數潛在的矛盾與阻礙。",
  "高效率是您的代名詞，總能在緊湊的時間內精準完成各項任務。",
  "強大的組織能力讓繁雜的事務變得井然有序，提升了整體的效能。",
  "感謝您總是能預判需求，在問題發生前就做好萬全的準備。",
  "您的專業態度是我們學習的榜樣，更是團隊最穩定的核心力量。",
  "細心如您，總能發現報表中微小的錯誤，守護了我們的專業形象。",
  "無論工作多麼忙碌，您始終保持優雅與冷靜，帶給團隊安定的氛圍。",
  "感謝您的耐心傾聽與協調，讓跨部門合作變得如此順暢有效。",
  "您對行程的精準掌控，讓每一場會議與活動都能圓滿達成目標。",
  "正是因為有您的鼎力相助，我們才能專注於核心決策，創造更大價值。",
  "您的每一份貼心提醒，都是我們工作中不可或缺的溫暖動力。"
];

export default function App() {
  const [message, setMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // 隨機選取一句感言
  const shuffleMessage = () => {
    setIsAnimating(true);
    const randomIndex = Math.floor(Math.random() * GRATITUDE_MESSAGES.length);
    // 確保不會抽到相同的句子（除非只有一句）
    if (GRATITUDE_MESSAGES.length > 1 && GRATITUDE_MESSAGES[randomIndex] === message) {
      shuffleMessage();
      return;
    }
    setMessage(GRATITUDE_MESSAGES[randomIndex]);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // 初始載入時隨機抽選
  useEffect(() => {
    shuffleMessage();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f2] flex flex-col items-center justify-center p-6 sm:p-12 font-serif selection:bg-[#d4a373]/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full text-center relative z-10 bg-white/60 backdrop-blur-sm rounded-[40px] p-10 sm:p-20 shadow-2xl shadow-black/5 border border-[#d4a373]/20 overflow-hidden"
      >
        {/* 飾品 Ornament */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#b08968] opacity-20 pointer-events-none" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#b08968] opacity-20 pointer-events-none" />

        {/* 固定祝福語區塊 */}
        <header className="mb-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="inline-block p-2 mb-6"
          >
            <Sparkles className="text-[#b08968] w-10 h-10 mx-auto" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#b08968] mb-6 tracking-[2px]">
            祝您祕書節快樂！
          </h1>
          <p className="text-lg sm:text-xl text-[#7f5a48] leading-relaxed max-w-xl mx-auto px-4 italic font-medium opacity-90">
            感謝您這一年來的專業與辛勞，<br />
            您始終保持冷靜、高效且優雅，<br />
            是我們團隊運作中最不可或缺的核心力量。
          </p>
        </header>

        {/* 隨機感謝文區塊 - 符合主題的 Card */}
        <div className="min-h-[220px] flex items-center justify-center mb-12">
          <motion.div
            className="bg-white p-8 sm:p-12 rounded-2xl border-l-[6px] border-[#d4a373] shadow-lg shadow-[#b89076]/10 w-full max-w-lg mx-auto relative group animate-float"
          >
            <div className="absolute -top-4 -left-4 text-[#d4a373]/20">
              <Quote className="w-10 h-10 fill-current" />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={message}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-2xl sm:text-3xl font-medium text-[#5e503f] italic leading-relaxed">
                  {message}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 互動按鈕 - 符合主題的 Button */}
        <motion.button
          onClick={shuffleMessage}
          disabled={isAnimating}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.05, backgroundColor: "#7f5a48" }}
          className="group flex items-center gap-3 px-10 py-4 bg-[#b08968] text-white rounded-full font-sans font-semibold tracking-wider shadow-xl shadow-[#b08968]/20 transition-all duration-300 disabled:opacity-50 mx-auto"
        >
          <motion.div
            animate={isAnimating ? { rotate: 360 } : {}}
            transition={{ duration: 0.6, ease: "anticipate" }}
          >
            <RefreshCw className="w-5 h-5" />
          </motion.div>
          <span>再抽一張感言</span>
        </motion.button>
        
        <footer className="mt-16 opacity-30 hover:opacity-100 transition-opacity duration-700">
          <div className="flex items-center justify-center gap-3 text-[#b08968] text-xs font-semibold uppercase tracking-[0.2em]">
            <Heart className="w-3 h-3 fill-current" />
            <span>Dedicated Excellence</span>
            <Heart className="w-3 h-3 fill-current" />
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
