"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp prefix="₹ " duration={1} decimal="." end={amount} />
    </div>
  );
};

export default AnimatedCounter;
