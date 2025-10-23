import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Array<{
    text: string;
    name: string;
    role: string;
    company: string;
    image: string;
  }>;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, company, image }, i) => (
                <div 
                  className="p-10 rounded-2xl border border-border bg-card shadow-lg shadow-primary/10 max-w-xs w-full hover-lift" 
                  key={i}
                >
                  <div className="text-muted-foreground italic mb-6">"{text}"</div>
                  <div className="flex items-center gap-3">
                    <img 
                      src={image} 
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col">
                      <div className="font-heading font-semibold tracking-tight leading-5">{name}</div>
                      <div className="text-sm leading-5 text-muted-foreground tracking-tight">
                        {role}, {company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
