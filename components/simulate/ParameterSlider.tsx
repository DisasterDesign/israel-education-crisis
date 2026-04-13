'use client';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}

export function ParameterSlider({
  label,
  value,
  min,
  max,
  step,
  unit = '',
  onChange
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline gap-3">
        <label className="text-sm text-text-secondary">{label}</label>
        <span className="text-3xl sm:text-4xl font-black ltr text-accent leading-none" data-number>
          {value}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full accent-accent"
        style={{ direction: 'ltr' }}
      />
      <div className="flex justify-between text-[10px] text-text-muted font-mono">
        <span>
          {min}
          {unit}
        </span>
        <span>
          {max}
          {unit}
        </span>
      </div>
    </div>
  );
}
