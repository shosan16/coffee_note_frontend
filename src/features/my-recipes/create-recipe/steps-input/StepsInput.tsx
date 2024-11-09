import React, { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { TimeField } from '@/features/my-recipes/create-recipe/steps-input//TimeField';

interface Step {
    minutes: number;
    seconds: number;
    action: string;
}

interface StepsInputProps {
    steps: Step[];
    setSteps: Dispatch<SetStateAction<Step[]>>;
}

export const StepsInput: React.FC<StepsInputProps> = ({ steps, setSteps }) => {
    const addStep = () => {
        setSteps([...steps, { minutes: 0, seconds: 0, action: '' }]);
    };

    const removeStep = (index: number) => {
        if (steps.length > 1) {
            setSteps(steps.filter((_, i) => i !== index));
        }
    };

    const updateStep = (
        index: number,
        field: keyof Step,
        value: number | string,
    ) => {
        const newSteps = [...steps];
        if (field === 'minutes' || field === 'seconds') {
            newSteps[index][field] = Number(value);
        } else {
            newSteps[index][field] = value as string;
        }
        setSteps(newSteps);
    };

    return (
        <div className="w-full max-w-md space-y-4">
            <span className="font-bold">Steps</span>
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <TimeField
                            minutes={step.minutes}
                            seconds={step.seconds}
                            onChange={(minutes, seconds) => {
                                updateStep(index, 'minutes', minutes);
                                updateStep(index, 'seconds', seconds);
                            }}
                            className="w-[120px]"
                        />
                        <Input
                            placeholder="Action"
                            value={step.action}
                            onChange={(e) =>
                                updateStep(index, 'action', e.target.value)
                            }
                            className="flex-grow"
                        />
                        {steps.length > 1 && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeStep(index)}
                                className="h-10 w-10 flex-shrink-0"
                            >
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ))}
            </div>
            <Button variant="outline" className="w-full" onClick={addStep}>
                <span className="mr-2">+</span>
                Add Step
            </Button>
        </div>
    );
};
