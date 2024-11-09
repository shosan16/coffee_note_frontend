import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Minus, Plus } from 'lucide-react';

interface AmountInputProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    max: number;
    step: number;
    quickAdjustValues: number[];
    icon: React.ReactNode;
    allowDecimal?: boolean;
}

export const AmountInput = ({
    label,
    value,
    onChange,
    max,
    step,
    quickAdjustValues,
    icon,
    allowDecimal = false,
}: AmountInputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState(formatValue(value));

    function formatValue(val: number): string {
        return allowDecimal ? val.toFixed(1) : val.toString();
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleValueChange(parseFloat(inputValue));
            setIsOpen(false);
        }
    };

    const handleValueChange = (newValue: number) => {
        const clampedValue = Math.min(Math.max(0, newValue), max);
        const finalValue = allowDecimal
            ? Number(clampedValue.toFixed(1))
            : Math.round(clampedValue);
        onChange(finalValue);
        setInputValue(formatValue(finalValue));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        handleValueChange(parseFloat(inputValue));
    };

    useEffect(() => {
        setInputValue(formatValue(value));
    }, [value, allowDecimal]);

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                {icon}
                <Label>{label}</Label>
            </div>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-between text-left font-normal"
                    >
                        <span>{formatValue(value)}g</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Card>
                        <CardContent className="space-y-6 pt-4">
                            <div className="flex items-center justify-center gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        handleValueChange(value - step)
                                    }
                                    disabled={value <= 0}
                                    className="h-10 w-10"
                                >
                                    <Minus className="h-4 w-4" />
                                </Button>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                        onKeyDown={handleKeyDown}
                                        className="w-24 pr-6 text-center text-lg"
                                        min={0}
                                        max={max}
                                        step={step}
                                    />
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                        g
                                    </span>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        handleValueChange(value + step)
                                    }
                                    disabled={value >= max}
                                    className="h-10 w-10"
                                >
                                    <Plus className="h-4 w-4" />
                                </Button>
                            </div>

                            <div className="space-y-2">
                                <Slider
                                    value={[value]}
                                    onValueChange={([v]) =>
                                        handleValueChange(v)
                                    }
                                    max={max}
                                    step={step}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>0g</span>
                                    <span>{max}g</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {quickAdjustValues.map((quickValue) => (
                                    <Button
                                        key={quickValue}
                                        variant={
                                            value === quickValue
                                                ? 'default'
                                                : 'outline'
                                        }
                                        size="sm"
                                        onClick={() =>
                                            handleValueChange(quickValue)
                                        }
                                        className="flex-1"
                                    >
                                        {formatValue(quickValue)}g
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </PopoverContent>
            </Popover>
        </div>
    );
};
