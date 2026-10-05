import React from 'react'

function DayNavigation({ days, activeDay, onDayChange }) {
  const scrollToDay = (day) => {
    const element = document.getElementById(
      `day-${day}`
    );

    if (!element) return;

    onDayChange(day);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className="
        sticky
        top-0
        z-40
        border-y
        border-white/10
        bg-[#100e0c]/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1400px]
          items-center
          gap-2
          overflow-x-auto
          px-5
          py-3
          scrollbar-none
          sm:px-10
          lg:px-16
        "
      >
        <span className="mr-2 shrink-0 text-[10px] uppercase tracking-[0.25em] text-white/30">
          Journey
        </span>

        {days.map((day) => {
          const isActive = activeDay === day.day;

          return (
            <button
              key={day.day}
              type="button"
              onClick={() => scrollToDay(day.day)}
              className={`
                shrink-0
                rounded-full
                px-4
                py-2
                text-xs
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-[#c89a68] text-[#100e0c]"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              Day {String(day.day).padStart(2, "0")}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default DayNavigation;