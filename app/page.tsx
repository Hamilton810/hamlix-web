"use client";
import { useDevice } from './hooks/useDevice';
import DesktopView from './components/DesktopView';
import MobileView from './components/MobileView';

export default function Home() {
  const { isMobile } = useDevice();

  return (
    <main className="min-h-screen bg-gray-50">
      {isMobile ? <MobileView /> : <DesktopView />}
    </main>
  );
}