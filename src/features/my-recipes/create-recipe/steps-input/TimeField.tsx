import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type TimeField = {
    minutes: number;
    seconds: number;
    className?: string;
};

type TimeFieldProps = TimeField & {
    onChange: (minutes: number, seconds: number) => void;
};

export const TimeField = (props: TimeFieldProps) => {
    const { minutes, seconds, className, onChange } = props;
    const [localMinutes, setLocalMinutes] = useState(() =>
        minutes !== undefined ? minutes.toString().padStart(2, '0') : '00',
    );
    const [localSeconds, setLocalSeconds] = useState(() =>
        seconds !== undefined ? seconds.toString().padStart(2, '0') : '00',
    );

    useEffect(() => {
        setLocalMinutes(
            minutes !== undefined ? minutes.toString().padStart(2, '0') : '00',
        );
        setLocalSeconds(
            seconds !== undefined ? seconds.toString().padStart(2, '0') : '00',
        );
    }, [minutes, seconds]);

    const generateTimeOptions = (max: number, step: number = 1) => {
        return Array.from({ length: Math.ceil(max / step) }, (_, i) =>
            (i * step).toString().padStart(2, '0'),
        );
    };

    const minuteOptions = generateTimeOptions(16);
    const secondOptions = generateTimeOptions(60, 5);

    const handleMinuteChange = (value: string) => {
        setLocalMinutes(value);
        onChange(parseInt(value, 10), seconds !== undefined ? seconds : 0);
    };

    const handleSecondChange = (value: string) => {
        setLocalSeconds(value);
        onChange(minutes !== undefined ? minutes : 0, parseInt(value, 10));
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={`w-[120px] justify-start text-left font-normal ${className}`}
                >
                    <Clock className="mr-2 h-4 w-4" />
                    {localMinutes}:{localSeconds}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start" side="bottom">
                <Card className="border-0">
                    <CardContent className="p-3">
                        <div className="flex justify-between space-x-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="minute-select"
                                    className="mb-1 block text-xs font-medium text-muted-foreground"
                                >
                                    Minutes
                                </label>
                                <Select
                                    value={localMinutes}
                                    onValueChange={handleMinuteChange}
                                >
                                    <SelectTrigger
                                        id="minute-select"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Minutes" />
                                    </SelectTrigger>
                                    <SelectContent side="bottom">
                                        {minuteOptions.map((minute) => (
                                            <SelectItem
                                                key={minute}
                                                value={minute}
                                            >
                                                {minute}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="second-select"
                                    className="mb-1 block text-xs font-medium text-muted-foreground"
                                >
                                    Seconds
                                </label>
                                <Select
                                    value={localSeconds}
                                    onValueChange={handleSecondChange}
                                >
                                    <SelectTrigger
                                        id="second-select"
                                        className="w-full"
                                    >
                                        <SelectValue placeholder="Seconds" />
                                    </SelectTrigger>
                                    <SelectContent side="bottom">
                                        {secondOptions.map((second) => (
                                            <SelectItem
                                                key={second}
                                                value={second}
                                            >
                                                {second}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </PopoverContent>
        </Popover>
    );
};
