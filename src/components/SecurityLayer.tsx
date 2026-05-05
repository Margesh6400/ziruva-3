"use client";

import { useEffect } from "react";

export default function SecurityLayer() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Disable right-click globally
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      // Disable image dragging to prevent "save as" via drag
      if ((e.target as HTMLElement).tagName === "IMG") {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Optional: Disable common save/inspect shortcuts
      // Ctrl+S, Cmd+S, F12, Ctrl+Shift+I, Cmd+Option+I
      if (
        (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S') ||
        e.key === 'F12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'i' || e.key === 'I')) ||
        ((e.ctrlKey || e.metaKey) && e.altKey && (e.key === 'i' || e.key === 'I'))
      ) {
        // We don't necessarily want to block everything, but these are common
        // Luxury sites often block these to prevent inspection/saving
        // e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);
    // document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
      // document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
