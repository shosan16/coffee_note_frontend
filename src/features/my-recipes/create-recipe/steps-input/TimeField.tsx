import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

type TimeField = {
    minutes: number;
    seconds: number;
    className?: string;
};

type TimeFieldProps = TimeField & {
    onChange: (minutes: number, seconds: number) => void;
};

export const TimeField = (props: TimeFieldProps) => {
    const { minutes, seconds, onChange, className } = props;

    const generateTimeOptions = (max: number, step: number = 1) => {
        return Array.from({ length: Math.ceil(max / step) }, (_, i) =>
            (i * step).toString().padStart(2, '0'),
        );
    };

    const minuteOptions = generateTimeOptions(60);
    const secondOptions = generateTimeOptions(60, 5);

    const handleMinuteChange = (value: string) => {
        const newMinutes = parseInt(value, 10);
        onChange(newMinutes, seconds);
    };

    const handleSecondChange = (value: string) => {
        const newSeconds = parseInt(value, 10);
        onChange(minutes, newSeconds);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={`w-[120px] justify-start text-left font-normal ${className}`}
                >
                    <Clock className="mr-2 h-4 w-4" />
                    {minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
                <Card className="border-0">
                    <CardContent className="p-3">
                        <div
                            className="mb-4 text-center text-2xl font-bold text-primary"
                            aria-live="polite"
                        >
                            {minutes.toString().padStart(2, '0')}:
                            {seconds.toString().padStart(2, '0')}
                        </div>
                        <div className="flex justify-between">
                            <div className="w-1/2 pr-2">
                                <label
                                    htmlFor="minute-scroll"
                                    className="mb-1 block text-xs font-medium text-muted-foreground"
                                >
                                    Minutes
                                </label>
                                <ScrollArea
                                    className="h-40 w-full rounded-md border"
                                    id="minute-scroll"
                                >
                                    <div className="p-2">
                                        {minuteOptions.map((minute) => (
                                            <div
                                                key={minute}
                                                className={`cursor-pointer rounded-md p-2 transition-colors ${
                                                    minutes ===
                                                    parseInt(minute, 10)
                                                        ? 'bg-gray-600 font-medium text-primary-foreground'
                                                        : 'hover:bg-gray-200'
                                                }`}
                                                onClick={() =>
                                                    handleMinuteChange(minute)
                                                }
                                            >
                                                {minute}
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>
                            <div className="w-1/2 pl-2">
                                <label
                                    htmlFor="second-scroll"
                                    className="mb-1 block text-xs font-medium text-muted-foreground"
                                >
                                    Seconds
                                </label>
                                <ScrollArea
                                    className="h-40 w-full rounded-md border"
                                    id="second-scroll"
                                >
                                    <div className="p-2">
                                        {secondOptions.map((second) => (
                                            <div
                                                key={second}
                                                className={`cursor-pointer rounded-md p-2 transition-colors ${
                                                    seconds ===
                                                    parseInt(second, 10)
                                                        ? 'bg-gray-600 font-medium text-primary-foreground'
                                                        : 'hover:bg-gray-200'
                                                }`}
                                                onClick={() =>
                                                    handleSecondChange(second)
                                                }
                                            >
                                                {second}
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </PopoverContent>
        </Popover>
    );
};
