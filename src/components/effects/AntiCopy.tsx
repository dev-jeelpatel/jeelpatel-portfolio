"use client";

import { useEffect } from "react";

export function AntiCopy() {
  useEffect(() => {
    // Only run these aggressive checks in production mode to avoid interrupting local development
    if (process.env.NODE_ENV !== "production") return;

    // 1. Block Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Block Copy, Cut, and Paste Events
    const handleCopyCutPaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 3. Prevent Drag & Drop Operations
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 4. Block Developer Tools & Source Inspection Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 key
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + I (Inspect Element)
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.keyCode === 73)) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + J (Console)
      if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.keyCode === 74)) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + C (Element Selector)
      if (e.ctrlKey && e.shiftKey && (e.key === "C" || e.keyCode === 67)) {
        e.preventDefault();
        return false;
      }

      // Ctrl + U (View Source)
      if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.keyCode === 85)) {
        e.preventDefault();
        return false;
      }

      // Ctrl + S (Save Page)
      if (e.ctrlKey && (e.key === "s" || e.key === "S" || e.keyCode === 83)) {
        e.preventDefault();
        return false;
      }
    };

    // Attach listeners globally
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopyCutPaste);
    document.addEventListener("cut", handleCopyCutPaste);
    document.addEventListener("paste", handleCopyCutPaste);
    document.addEventListener("dragstart", handleDragStart);
    document.addEventListener("keydown", handleKeyDown);

    // Continuous Console Cleanser to obscure console message inspection
    const consoleCleanser = setInterval(() => {
      console.clear();
      console.log(
        "%c🔒 Security Protocol Active",
        "color: #ef4444; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);"
      );
      console.log(
        "%cUnauthorized inspection, copying, or reverse-engineering is prohibited.",
        "color: #fafafa; font-size: 14px;"
      );
    }, 1000);

    // Cleanup listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopyCutPaste);
      document.removeEventListener("cut", handleCopyCutPaste);
      document.removeEventListener("paste", handleCopyCutPaste);
      document.removeEventListener("dragstart", handleDragStart);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(consoleCleanser);
    };
  }, []);

  return null; // Side-effect only component
}
