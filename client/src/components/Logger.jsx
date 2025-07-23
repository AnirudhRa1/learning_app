"use client";
import { useState, useEffect } from "react";

export default function Logger() {
  const [visitors, setVisitors] = useState(12053);

  useEffect(() => {
    // Simple visitor tracking with localStorage
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      // New visitor
      const newCount = visitors + 1;
      setVisitors(newCount);
      localStorage.setItem('hasVisitedBefore', 'true');
      
      // Optional: You could store the count in localStorage too
      localStorage.setItem('visitorCount', newCount.toString());
    } else {
      // Get the stored count if available, otherwise use base count
      const storedCount = localStorage.getItem('visitorCount');
      if (storedCount) {
        setVisitors(parseInt(storedCount));
      }
    }
  }, []);
  
  return (
    <div className="w-fit m-auto font-semibold gap-3 bg-gradient-to-b from-cyan-100/20 text-lg sm:text-xs p-3 sm:p-2 rounded-md shadow-md z-50">
      Visitors: <span className="text-green-500">{visitors}</span>
    </div>
  );
}