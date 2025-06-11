import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export default function CSSWrapper({
  cssHref,
  children,
}: {
  cssHref: string;
  children: React.ReactNode;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);
  console.log('CSSWrapper rendered with cssHref:', cssHref);
  useEffect(() => {
    if (hostRef.current && !mountNode) {
      const shadow = hostRef.current.attachShadow({ mode: 'open' });

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssHref;
      shadow.appendChild(link);

      const link2 = document.createElement('link');
      link2.rel = 'stylesheet';
      link2.href = `${process.env.PUBLIC_URL}/index.css`;
      shadow.appendChild(link2);
      const container = document.createElement('div');
      shadow.appendChild(container);

      setMountNode(container);
    }
  }, [cssHref, mountNode]);

  return (
    <div ref={hostRef}>
      {mountNode ? ReactDOM.createPortal(children, mountNode) : null}
    </div>
  );
}
