import React, { useEffect, useState } from 'react';
import './Popup.css';

interface PopupProps {
  message: string;
  duration: number;  // 팝업이 보여질 시간 (ms)
}

const Popup: React.FC<PopupProps> = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // 팝업이 표시되면 duration 이후에 자동으로 사라지게 설정
  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머 정리
  }, [message, duration]);

  if (!isVisible) return null;

  return (
    <div className="popup">
      <p>{message}</p>
    </div>
  );
};

export default Popup;
