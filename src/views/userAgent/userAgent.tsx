"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { useState } from "react";
let oncer = true;

export const UserAgent = () => {
  const [userAgent, setUserAgent] = useState<string | undefined>();
  const { userAgent: userAgentJS } = useUserAgentContext();
  if (oncer) {
    if (!userAgentJS) {
      const fetchUA = async () => {
        const res = await fetch(`http://localhost:3000/api/ua`);
        const data: { userAgent: string } = await res.json();
        setUserAgent(data.userAgent)
        console.log(data.userAgent)
      }
      fetchUA();
    }
    else {
      setUserAgent(userAgentJS);
    }
    oncer = false
  }

  return (
    <div>
      <BackToHome />

      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};
